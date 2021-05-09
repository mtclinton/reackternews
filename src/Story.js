import React from 'react';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)

// Create formatter (English).
const timeAgo = new TimeAgo('en-US')
let psl = require('psl');

function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}

function Story({ story: { id, by, title, kids, time, url, score },rank}) {
    return (
        <div className="story">
            <div className="athing" id={id}>
                <span align="right" valign="top" className="title"><span className="rank">{rank}. </span></span>
                {/*<span valign="top" className="votelinks">*/}
                {/*    <center>*/}
                {/*        <a id={`up_${id}`} href={`vote?id=${id}&amp;how=up&amp;goto=news%3Fp%3D3`}>*/}
                {/*            <div className="votearrow" title="upvote"></div>*/}
                {/*        </a>*/}
                {/*    </center>*/}
                {/*</span>*/}
                <span className="title">
                    <a
                    href={url}
                    className="storylink">
                        {title}
                    </a>
                    <span className="sitebit comhead"> (
                        <a href={`from?site=${psl.get(extractHostname(url))}`}>
                            <span className="sitestr">{psl.get(extractHostname(url))}</span>
                        </a>)
                    </span>
                </span>
            </div>
            <div>
                <span colSpan="2"></span>
                <span className="subtext">
                    <span className="score" id="score_27089576">{score} points</span> by <a href={`https://news.ycombinator.com/user?id=${by}`} className="hnuser">{by} </a>
                    <span className="age"><a href={`https://news.ycombinator.com/item?id=${id}`}>
                         {timeAgo.format(new Date(time * 1000))}
                    </a></span>
                    <span id="unv_27089576"></span> | <a href="hide?id=27089576&amp;goto=news%3Fp%3D3">hide</a> | <a href={`https://news.ycombinator.com/item?id=${id}`}>{kids && kids.length > 0 ? kids.length : 0} comments</a>
                </span>
            </div>
            <div className="spacer" style={{height:"5px"}}></div>
        </div>
    );
}

export default Story;
