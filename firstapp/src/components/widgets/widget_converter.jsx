import useScript from '../../hooks/usescript';

export function WidgetConverter(){
    useScript('https://widgets.coingecko.com/coingecko-coin-converter-widget.js');
    return (
        <coingecko-coin-converter-widget  coin-id="bitcoin" currency="usd" background-color="#ffffff" font-color="#4c4c4c" locale="en"></coingecko-coin-converter-widget>
    )
}