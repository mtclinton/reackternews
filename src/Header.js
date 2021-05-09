import React from 'react';

function Header() {
    return (
        <div className="Header">
            <div style={{background: "#ff6600"}}>
                <div className={"table"} style={{border:"0", cellpadding:"0", cellspacing:"0", width:"100%", padding: "2px", verticalAlign: "middle", display:"flex", flexDirection: "row"}}>
                    <span style={{width: "18px", paddingRight: "4px", verticalAlign: "middle"}}>
                        <a href={"https://news.ycombinator.com"}>
                            <img
                                src={"https://news.ycombinator.com/y18.gif"}
                                style={{width: "18px", height: "18px",border: "1px white solid", verticalAlign: "middle"}} />
                        </a>

                    </span>
                    <span>
                        <span className="pagetop" style={{lineHeight: "12px", height: "10px", verticalAlign: "middle"}}>
                            <b className="hnname"><a href="news"> Hacker News </a></b><a href="newest">new</a> | <a href="front">past</a> | <a href="newcomments">comments</a> | <a href="ask">ask</a> | <a href="show">show</a> | <a href="jobs">jobs</a> | <a href="submit">submit</a>
                        </span>

                    </span>
                    <span style={{marginLeft: "auto",paddingRight:"4px", verticalAlign: "middle"}}>
                        <span className="pagetop" style={{paddingRight:"4px", verticalAlign: "middle"}}>
                              <a href="login?goto=news">login</a>
                          </span>
                    </span>

                </div>

            </div>

            <div id="pagespace" title="" style={{height:"10px"}}></div>
        </div>
    );
}

export default Header;