import { Widget } from './widget';
import { WidgetNews } from './widgets/widget_news';
import { WidgetPrice } from './widgets/widget_price';
import { WidgetVolume } from './widgets/widget_volume';
import { WidgetTweets } from './widgets/widget_tweets';

export function Content(){
    const widgets = [
        <WidgetPrice name = {"price"} />,
        <WidgetVolume name = {"volume"} />,
        <WidgetNews name={"news"} />,
        <WidgetTweets name={"tweets"} />,

    ];
    return widgets.map((widget, index) => <Widget key = {index} widget = {widget} />)
}