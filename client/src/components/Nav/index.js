import React from "react";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:'darkcyan'}}>
            <a className="navbar-brand" href="/" style={{fontSize: 25, color:'ghostwhite'}}>
                Book Searcher
           </a>
           <a className="navbar-brand" href="/search" style={{color:'ghostwhite'}}>
                Search
           </a>
           <a className="navbar-brand" href="/saved" style={{color:'ghostwhite'}}>
                Saved Books
           </a>
    </nav>
  );
}

export default Nav;
