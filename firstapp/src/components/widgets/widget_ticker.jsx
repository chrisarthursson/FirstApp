import useScript from '../../hooks/usescript';

export function WidgetTicker(){
    useScript('https://widgets.coingecko.com/coingecko-coin-ticker-widget.js');
    return (
        <coingecko-coin-ticker-widget  coin-id="pivx" currency="usd" locale="en"></coingecko-coin-ticker-widget>
    )
}