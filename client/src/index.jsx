// containers/Home.js
import React, { useState } from 'react';
import './controller/search/style.scss';
function Home() {
    // const [count, setCount] = useState(0);
    let count = 0;
    return (
        <div className="app-home" onClick={()=>count++}>
            <div>{count}</div>
        </div>
    );
}
export default Home;
