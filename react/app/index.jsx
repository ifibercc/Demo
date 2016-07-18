import '../node_modules/bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox'
let data = [
    {
        id: 1,
        author: "Pete Hunt",
        text: "This is one comment"
    }, {
        id: 2,
        author: "Jordan Walke",
        text: "This is *another* comment"
    }
];
const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<CommentBox url="/api/comments" pollInterval="2000" />, app);
