import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post';
import PostSingle from '../../components/PostSingle';
import PostNew from '../../components/PostNew';
import classes from './style.css';

class Blog extends Component {
    state = {
        posts: [],
        postId: null
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const posts = res.data.slice(0, 8)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Andrzej'
                    }
                })
                this.setState({posts: updatedPosts})
            })
    }

    postSelected = (id) => {
        this.setState({postId: id})
    }

    render () {
        const posts = this.state.posts.map(post => {
            return <Post 
                key={post.id} 
                title={post.title} 
                author={post.author}
                clicked={() => this.postSelected(post.id)} />
        })
        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <section>
                    <PostSingle id={this.state.postId} />
                </section>
                <section>
                    <PostNew />
                </section>
            </div>
        );
    }
}

export default Blog;
