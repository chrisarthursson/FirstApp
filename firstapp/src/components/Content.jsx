import { Widget } from './widget';
import { WidgetPrice } from './widgets/widget_price';
import { WidgetVolume } from './widgets/widget_volume';
import { WidgetConverter } from './widgets/widget_converter';

export function Content(){
    const widgets = [
        <WidgetPrice name = {"price"} />,
        <WidgetVolume name = {"volume"} disabled = { true } />,
        <WidgetConverter name = {"converter"} />,
    ];
    return (
        <div id="widgets">
            {widgets.map((widget, index) => <Widget key = {index} widget = {widget} />)}
        </div>
    ) 
    
}