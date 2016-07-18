import React, {Component} from 'react';
import Remarkable from 'remarkable';

export default class Comment extends Component {
    render () {
        let rawMarkup = function () {
            let md = new Remarkable();
            let rawMarkup = md.render(this.props.children.toString());
            return (__html: rawMarkup)
        };
        let md = new Remarkable;
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup} />
            </div>
        );
    }
}

module.exports = Comment;
