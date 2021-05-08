import React from 'react';

function Header() {
    return (
        <div className="Header">
            <h1>Hacker News Clone</h1>
            <div className="nav-link">
                <a href="/top" className="active">
                    Top Stories
                </a>
                <a href="/new" className="active">
                    Latest Stories
                </a>
                <a href="/best" className="active">
                    Best Stories
                </a>
            </div>
        </div>
    );
}

export default Header;
