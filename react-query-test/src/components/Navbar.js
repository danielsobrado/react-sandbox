import React from "react";

const Navbar = ({setPage}) => {
    return ( 
        <nav>
            <button onClick={() => setPage('test1')}>Test 1</button>
            <button onClick={() => setPage('test2')}>Test 2</button>
        </nav>
     );
}
 
export default Navbar;
