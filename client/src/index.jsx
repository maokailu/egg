
import React from 'react';
import Tree from './controller/search/tree.jsx';
export default function Home() {
    // const [count, setCount] = useState(0);
    const flights = [1, 2];
    for (let i = 0; i < 50; i++) {
        flights.push(1);
    }
    return (
        <div>
            <div>树结构组件</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            {flights.map((item, index) => <div key={index}>{item}</div>)}
            <Tree />
        </div>
    );
}

// ReactDom.hydrate(<Tree />, document.getElementById('root'));
