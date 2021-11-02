import { Widget } from './widget';
import { WidgetPrice } from './widgets/widget_price';
import { WidgetVolume } from './widgets/widget_volume';

export function Content(){
    const widgets = [
        <WidgetPrice name = {"price"} />,
        <WidgetVolume name = {"volume"} />
    ];
    return widgets.map((widget, index) => <Widget key = {index} widget = {widget} />)
}