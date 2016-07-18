import React, {Component} from 'react';

export default class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {author: '', text: ''}
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleAuthorChange(e) {
        console.info(e.target);
        this.setState({author: e.target.value});
    }
    handleTextChange(e) {
        this.setState({text: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        let author = this.state.author.trim();
        let text = this.state.text.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.setState({author: '', text: ''});
    }
    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange.bind(this)}/>
                <input type="text" className="form-control" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange}/>
                <input type="submit" className="btn btn-primary" value="POST"/>
            </form>
        )
    }
}

module.exports = CommentForm;
