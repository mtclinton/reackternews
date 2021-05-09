import React from 'react';

function Header() {
    return (
        <div className="Header">
            <div style={{background: "#ff6600"}}>
                <div style={{padding: "2px"}}>
                    <span style={{width: "18px", paddingRight: "4px"}}>
                        <a href={"https://news.ycombinator.com"}>
                            <img
                                src={"https://news.ycombinator.com/y18.gif"}
                                style={{width: "18px", height: "18px",border: "1px white solic"}} />
                        </a>

                    </span>
                    <span style={{lineHeight: "12px", height: "10px"}}>
                        <span className="pagetop">
                            <b className="hnname"><a href="news">Hacker News</a></b>
                            <a href="newest">new</a> |
                            <a href="front">past</a> |
                            <a href="newcomments">comments</a> |
                            <a href="ask">ask</a> |
                            <a href="show">show</a> |
                            <a href="jobs">jobs</a> |
                            <a href="submit">submit</a>
                        </span>

                    </span>
                    <span style={{textAlign: "right",paddingRight:"4px"}}>
                        <span className="pagetop">
                              <a href="login?goto=news">login</a>
                          </span>
                    </span>

                </div>

            </div>
        </div>
    );
}

export default Header;