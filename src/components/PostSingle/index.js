import React, { Component } from 'react';

import classes from './style.css'; 

class PostSingle extends Component {
    render () {
        let post = <p>Please select a Post!</p>;
        post = (
            <div className={classes.PostSingle}>
                <h1>Title</h1>
                <p>Content</p>
                <div className={classes.Edit}>
                    <button className={classes.Delete}>Delete</button>
                </div>
            </div>

        );
        return post;
    }
}

export default PostSingle;