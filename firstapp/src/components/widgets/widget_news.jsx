import useScript from '../../hooks/usescript';

export function WidgetNews(){
    useScript('https://widgets.coingecko.com/coingecko-beam-widget.js');
    return (
        <coingecko-beam-widget  type="coins" height="300" width="300" locale="en" project-id="pivx"></coingecko-beam-widget>
    )
}