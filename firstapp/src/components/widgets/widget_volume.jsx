/*
    CHALLENGE

    1. decide which variables you can and want to be able to change through user input
    2. decide which types of input fields you need
    3. add input fields to code, and add variables to state, and to fetch url
    4. research React form validation
    5. create onChange function

 */

import React from 'react';
import * as d3 from "d3";

export default class WidgetVolume extends React.Component {
    constructor(props) {
        super(props);
        const parseTime = d3.timeParse("%Y");
        this.state = {
            days: 365,
            data: [
                {
                    key: "pivx",
                    values: []
                }
            ]
        };
        this.fetchData = this.fetchData.bind(this);
    }
    async fetchData(){
        let response = await fetch(`https://api.coingecko.com/api/v3/coins/pivx/market_chart?vs_currency=usd&days=${this.state.days}&interval=daily`, {});
        let data = await response.json();
        console.log(data.prices);
        let values = [];
        data.prices.forEach(price => values.push({
            date: new Date(price[0]),//new Date(price[0]).toDateString(),
            value: price[1]
        }));
        this.setState({data : [{
                key: "pivx",
                values: values
            }]})
    }
    componentDidMount() {
        //TODO: add margins to display axis nicer
        let data = this.fetchData();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        let length = this.state.data[0].values.length;
        let prices = this.state.data[0].values.map(value => value.value);
        let dates = this.state.data[0].values.map(value => value.date);
        console.log("length: " + length, prices);
        console.log([this.state.data[0].values[0].date, this.state.data[0].values[length-1].date]);
        const width = 700,
            height = 500;

        const chart = d3
            .select(this.chartRef)
            .attr("width", width + 20)
            .attr("height", height + 50) //200 for legend
            .append("g")
            .attr("transform", "translate(20, 0)");

        const x = d3
            .scaleTime()
            .domain([new Date(Date.now() - this.state.days * 24 * 60 * 60 * 1000), Date.now()])//this.state.data[0].values[0].date, this.state.data[0].values[length-1].date]) // min max dates
            .range([0,width]);

        const y = d3
            .scaleLinear()
            .domain([prices.reduce((a,b) => Math.min(a,b)), prices.reduce((a,b) => Math.max(a,b))]) //max value
            .range([height, 100]);

        const colors = d3
            .scaleOrdinal()
            .domain(["pivx"])
            .range(["green"]);

        const graph = chart
            .selectAll(".graph")
            .data(this.state.data)
            .enter()
            .append("g")
            .attr("class", "graph");

        graph
            .append("path")
            .attr("class", "line")
            .style("stroke", d => {
                return colors(d.key);
            })
            .style("fill","none")
            .attr("d", parentData => {
                return d3
                    .line()
                    .curve(d3.curveBasis) // make points round, not sharp
                    .x(d => x(d.date))
                    .y(d => y(d.value))(parentData.values);
            });

        chart
            .append("g")
            .attr("class", "axis axis--x")
            .attr("transform", `translate(0,500)`)
            .call(d3.axisBottom(x));

        chart
            .append("g")
            .attr("class", "axis axis--y")
            .attr("transform", `translate(0,0)`)
            .call(d3.axisLeft(y));

        const legendContainer = chart
            .append("g")
            .attr("class", "legend")
            .attr("transform", `translate(0,540)`);

        legendContainer
            .selectAll("rect")
            .data(["pivx"])
            .enter()
            .append("rect")
            .attr("width", 15)
            .attr("height", 15)
            .attr("x", (d, i) => {
                return i * 200;
            })
            .attr("fill", colors);

        legendContainer
            .selectAll("text")
            .data(["pivx"])
            .enter()
            .append("text")
            .attr("x", (d, i) => {
                return i * 200 + 25;
            })
            .attr("y", 7)
            .text(d => d);
    }

    render() {
        return <svg className="line-chart" ref={r => (this.chartRef = r)} />;
    }
}