import React, { Component } from 'react';

import Post from '../../components/Post';
import PostSingle from '../../components/PostSingle';
import PostNew from '../../components/PostNew';
import './style.css';

class Blog extends Component {
    render () {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
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