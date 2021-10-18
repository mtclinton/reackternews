import React from 'react';

function Footer() {
    return (
        <div className="Footer">
            <div>
                <span>
                    <img src="https://news.ycombinator.com/s.gif" height="10" width="0" />
                        <div>
                            <div>
                              <span style={{ backgroundColor: '#ff6600' }} />
                            </div>
                        </div>
                        <br />
                        <div>
                            <span className="yclinks">
                              <a href="https://news.ycombinator.com/newsguidelines.html">Guidelines</a>
                                {' '}
                                |
                              <a href="https://news.ycombinator.com/newsfaq.html">FAQ</a>
                                {' '}
                                |
                              <a href="https://github.com/HackerNews/API">API</a>
                                {' '}
                                |
                              <a href="http://www.ycombinator.com/security.html">Security</a>
                                {' '}
                                |
                              <a href="http://www.ycombinator.com/legal/">Legal</a>
                                {' '}
                                |
                              <a href="http://www.ycombinator.com/apply/">Apply to YC</a>
                                {' '}
                                |
                              <a href="mailto:hn@ycombinator.com">Contact</a>
                            </span>
                            <br />
                            <br />
                      </div>
                </span>
            </div>
        </div>
    );
}

export default Footer;