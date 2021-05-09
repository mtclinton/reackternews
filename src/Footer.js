import React from 'react';

function Footer() {
    return (
        <div className="Footer">
            <div>
                <span>
                    <img src="https://news.ycombinator.com/s.gif" height="10" width="0" />
                        <table width="100%" cellSpacing="0" cellPadding="1">
                            <tbody>
                            <tr>
                                <span style={{backgroundColor: "#ff6600"}}></span>
                            </tr>
                            </tbody>
                        </table>
                        <br />
                        <center>
                            <span className="yclinks">
                                <a href="newsguidelines.html">Guidelines</a> |
                                <a href="newsfaq.html">FAQ</a> |
                                <a href="lists">Lists</a> |
                                <a href="https://github.com/HackerNews/API">API</a> |
                                <a href="security.html">Security</a> |
                                <a href="http://www.ycombinator.com/legal/">Legal</a> |
                                <a href="http://www.ycombinator.com/apply/">Apply to YC</a> |
                                <a href="mailto:hn@ycombinator.com">Contact</a>
                            </span>
                            <br /><br />
                            <form method="get" action="//hn.algolia.com/">Search:
                                <input type="text" name="q" value="" size="17" autoCorrect="off" spellCheck="false"
                                       autoCapitalize="off" autoComplete="false" />
                            </form>
                        </center>
                </span>
            </div>
        </div>
    );
}

export default Footer;