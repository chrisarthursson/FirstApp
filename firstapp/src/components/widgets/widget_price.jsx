import useScript from '../../hooks/usescript';

export function WidgetPrice(){
    useScript('https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js');
    return (
        <coingecko-coin-price-chart-widget  coin-id="pivx" currency="usd" height="300" locale="en"></coingecko-coin-price-chart-widget>
    )
}