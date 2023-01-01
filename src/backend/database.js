
import React, { useState, useEffect } from 'react';

// For firebase
import { database } from './firebase'
import { ref, push, child, update, query, getDatabase, limitToLast, onValue } from "firebase/database";


export default class databaseFactory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            posts: [],
        };
    }

    getData = (pathlist) => {
        const database = ref(getDatabase());
        let nowlocal = database;
        pathlist.forEach(element => {
            nowlocal = query(nowlocal, element + "");
        });
        console.log(nowlocal);

    }


    /* TODO: finish this method */
    getPosts = () => {
        const recentPostsRef = query(ref(getDatabase(), 'posts')); /* TODO: use the query() method */
        onValue(recentPostsRef, (snapshot) => {
            let newPosts = []
            snapshot.forEach((childSnapshot) => {
                newPosts.push(childSnapshot.child("post").val())

                /* TODO: parse the childSnapshot and use newPosts.push() to store the key and the post pair. You can use console.log() first to see what childSnapshot looks like. */
            });

            // Save the newPosts to the state var.
            this.setState({ posts: newPosts })
        }, {
            // We only need to fetch once
            onlyOnce: true
        });
    }

    componentDidMount() {
        this.getPosts()
        /* TODO: call the method to get posts */
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

        /* TODO: call the method to get the posts */

        e.preventDefault()
        this.componentDidMount()
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
