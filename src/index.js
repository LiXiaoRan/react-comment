import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentApp from './CommentApp';
import ClockIndex from './ClockIndex'
import ComponentCard from './ComponentCard'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CommentApp />, document.getElementById('root'));
// ReactDOM.render(
//     <ComponentCard>
//         <h2>React书📖</h2>
//         <div>开源，免费，专业，简单</div>
//         订阅<input />
//     </ComponentCard>, document.getElementById('root')
// )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
