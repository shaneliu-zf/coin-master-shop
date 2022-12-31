
import React from 'react';
import { database } from './firebase'
import { ref, push, child, update, query, getDatabase, limitToLast, onValue } from "firebase/database";

export default class GetData extends React.Component {
    //input: path:string
    // output :datas:function
    constructor(props) {
        super(props);
        this.state = {
            setData: props.setData,
            pathlist: [props.path.split("/")],
        };
    }
    getData = () => {
        const recentPostsRef = query(ref(getDatabase())); /* TODO: use the query() method */
        let newdatas = []
        // query need onvalue to work ,idk why
        onValue(recentPostsRef, (snapshot) => {
            snapshot.forEach((i) => {

                // console.log(i.key)
                // console.log(i.val())
                // console.log(i.child('username'))
                // console.log(i.child('username').key)
                // console.log(i.child('username').val())
                // console.log(i['username'])
                newdatas.push(i.key)
            })
            this.state.setData(newdatas);
            console.log(newdatas)
            //console.log(this.state.data)
        }, {
            onlyOnce: true
        });
    }
    render() {
        return (
            <div>

                {this.state.pathlist}
                < br ></br >
                {this.getData(this.state.pathlist)}
            </div >
        );
    }

}