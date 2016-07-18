import React, {Component} from 'react';
import Comment from './Commet'

export default class CommentList extends Component {
    render() {
        let commentNodes = this.props.data.map(function (comment) {
            return (
                    <Comment author={comment.author} key={comment.id}>
                        {comment.text}
                    </Comment>
            )
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        )
    }
}

module.exports = CommentList;
