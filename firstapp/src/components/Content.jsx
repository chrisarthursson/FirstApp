import { Widget } from './widget';
import { WidgetTicker } from './widgets/widget_ticker';
import { WidgetPrice } from './widgets/widget_price';
import { WidgetVolume } from './widgets/widget_volume';
import { WidgetConverter } from './widgets/widget_converter';
import { WidgetNews } from './widgets/widget_news';
import { WidgetTwitter } from './widgets/widget_twitterfeed';

export function Content(){
    const widgets = [
        <WidgetTicker name = "Ticker" />,
        <WidgetPrice name = {"Price"} />,
        <WidgetVolume name = {"volume"} disabled = { true } />,
        <WidgetConverter name = {"Converter"} />,
        <WidgetNews name = {"News"} />,
        <WidgetTwitter name = {"Twitter"} />,
    ];
    return (
        <div id="widgets">
            {widgets.map((widget, index) => <Widget key = {index} widget = {widget} />)}
        </div>
    ) 
    
}