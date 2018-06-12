import React, { Component } from 'react';
import axios from 'axios';

import classes from './style.css'; 

class PostSingle extends Component {

    state = {
        singlePost: null
    }

    componentDidUpdate() {
        if(this.props.id) {
            if(!this.state.singlePost || (this.state.singlePost && this.state.singlePost.id !== this.props.id)) {
                axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
                    .then(res => {
                        this.setState({
                            singlePost: res.data
                        })
                    })
            }
        }
    }
    render () {
        let post = <p className={classes.ParagraphCenter}>Please select a Post!</p>
        if(this.props.id) {
            post = <p className={classes.ParagraphCenter}>loading...</p>
        }
        if(this.state.singlePost) {
            post = (
                <div className={classes.PostSingle}>
                    <h1>{this.state.singlePost.title}</h1>
                    <p>{this.state.singlePost.body}</p>
                    <div className={classes.Edit}>
                        <button className={classes.Delete}>Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default PostSingle;
