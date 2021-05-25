import React from 'react';
import TimeAgo from 'javascript-time-ago';

import ItemUrl from './ItemUrl';

// Create formatter (English).
const timeAgo = new TimeAgo('en-US');

function Comment(props) {
    const { item, rank } = props;

    return (
        <div className="comment">

            <div className="athing" id={item.id.toString()}>
                <span className="default">
                    <div style={{marginTop: "2px",marginBottom: "10px"}}>
                        <span className="comhead">
                                      <a href={`https://news.ycombinator.com/user?id=${item.by}`} className="hnuser">{item.by}</a>
                            <span className="age">
                                <a href="item?id=27271350">{timeAgo.format(new Date(item.time * 1000))}</a>
                            </span>
                            <span className="par"> | <a href="{`https://news.ycombinator.com/item?id=${item.id}`}">parent</a></span>
                            {/*<span className="storyon"> | on: <a href="item?id=27261399">A Japanese company cut 80% of the time needed to m...</a></span>*/}
                        </span>
                    </div>
                    <br />
                    <div className="comment">
                      <span className="commtext c00">
                          {item.text}
                      </span>
                    </div>
                </span>

            </div>

            <div className="spacer" style={{ height: '5px' }} />
        </div>

    );
}

function Story(props) {
    const { item, rank } = props;

    return (
        <div className="story">
            <div className="athing" id={item.id.toString()}>
        <span className="title">
          <span className="rank">
            {rank}
              .
              {' '}
          </span>
        </span>
                <span className="title">
          <ItemUrl item={item} />
        </span>
            </div>
            <div>
        <span className="subtext" style={{ paddingLeft: '20px' }}>
          <span className="score" id="score_27089576">
            {item.score}
              {' '}
              points
          </span>
            {' '}
            by
          <a href={`https://news.ycombinator.com/user?id=${item.by}`} className="hnuser">
            {item.by}
              {' '}
          </a>
          <span className="age">
            <a href={`https://news.ycombinator.com/item?id=${item.id}`}>
              {timeAgo.format(new Date(item.time * 1000))}
            </a>
          </span>
          <span id="unv_27089576" />
            {' '}
            |
            {' '}
            <a href="hide?id=27089576&amp;goto=news%3Fp%3D3">hide</a>
            {' '}
            |
            {' '}
            <a href={`https://news.ycombinator.com/item?id=${item.id}`}>
            {item.kids && item.kids.length > 0 ? item.kids.length : 0}
                {' '}
                comments
          </a>
        </span>
            </div>
            <div className="spacer" style={{ height: '5px' }} />
        </div>
    );
}


function Item(props) {
    const { item, rank } = props;

    if(item.type === "comment") {
        return (
            <Comment item={item} rank={rank}/>

        )
    } else {
        return (
            <Story item={item} rank={rank} />

        )
    }


}

export default Item;
