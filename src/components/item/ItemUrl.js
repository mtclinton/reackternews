import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import extractHostname from '../../util/extractHostname';

TimeAgo.addDefaultLocale(en);
const psl = require('psl');


function ItemUrl(props) {
    const { item } = props;

    if (typeof item.url === 'undefined') {
        return (
            <span>
        <a
            href={`https://news.ycombinator.com/item?id=${item.id}`}
            className="storylink"
        >
          {item.title}
        </a>
      </span>
        );
    }

    return (
        <span>
      <a
          href={item.url}
          className="storylink"
      >
        {item.title}
      </a>
      <span className="sitebit comhead">
        {' '}
          (
        <a href={`from?site=${psl.get(extractHostname(item.url))}`}>
          <span className="sitestr">{psl.get(extractHostname(item.url))}</span>
        </a>
        )
      </span>
    </span>
    );
}

export default ItemUrl;
