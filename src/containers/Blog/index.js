import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post';
import PostSingle from '../../components/PostSingle';
import PostNew from '../../components/PostNew';
import classes from './style.css';

class Blog extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const posts = res.data.slice(0, 4)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Andrzej'
                    }
                })
                this.setState({posts: updatedPosts})
            })
    }
    render () {
        const posts = this.state.posts.map(post => <Post key={post.id} title={post.title} author={post.author} />)
        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <section>
                    <PostSingle />
                </section>
                <section>
                    <PostNew />
                </section>
            </div>
        );
    }
}

export default Blog;
