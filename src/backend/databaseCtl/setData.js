
import React, { useEffect, useState } from 'react';
import { database } from './firebase'
import { ref, push, child, update, query, getDatabase, limitToLast, onValue } from "firebase/database";
export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            posts: [],
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        if (name == 'post') {
            this.state.post = value
        }
    }

    handleSubmit = (e) => {
        let obj = {
            post: this.state.post,
        }
        // Create a unique key for new posts
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/posts/' + newPostKey] = obj;
        update(ref(database), updates);


        //e.preventDefault()
    };

    render() {
        const listPosts = this.state.posts.map(
            (i) => <li>{i}</li>
        )
        /* TODO: convert this.state.posts into a list of <ListItem>. Remember to set the key and the post props */
        return (
            <div>
                <h2>Submit your post!</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        New post:
                        <input name="post" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Post!" />
                </form>
            </div>
        );
    }
}
