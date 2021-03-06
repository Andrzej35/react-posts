import React, { Component } from 'react';

import classes from './style.css';

class PostNew extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }

    render () {
        return (
            <div className={classes.PostNew}>
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Andrzej">Andrzej</option>
                    <option value="Violetta">Violetta</option>
                    <option value="Klaudia">Klaudia</option>
                </select>
                <button>Add Post</button>
            </div>
        );
    }
}

export default PostNew;