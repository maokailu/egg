
import React from 'react';
import Tree from './controller/search/tree.jsx';
export default function Home() {
    // const [count, setCount] = useState(0);
    return (
        <div>
            <div>树结构组件</div>
            <Tree />
        </div>
    );
}

// ReactDom.hydrate(<Tree />, document.getElementById('root'));
