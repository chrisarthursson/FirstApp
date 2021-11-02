import './widget.css';

export function Widget(props){
    return(
        <>
            <div className={"widget-container"}>
                <h2>{props.widget.props.name}</h2>
                <div className={"widget"}>
                    {props.widget}
                </div>
            </div>
        </>
    )
}