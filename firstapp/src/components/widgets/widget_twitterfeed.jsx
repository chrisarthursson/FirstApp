import useScript from '../../hooks/usescript';

export function WidgetTwitter(){
    useScript('https://platform.twitter.com/widgets.js');
    return (
        <><a class="twitter-timeline" href="https://twitter.com/_PIVX?ref_src=twsrc%5Etfw">Tweets by _PIVX</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></> 
    )
}

