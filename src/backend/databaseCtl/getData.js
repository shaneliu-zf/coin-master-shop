
import React, { useEffect, useState } from 'react';
import { database } from './firebase'
import { ref, push, child, update, query, getDatabase, limitToLast, onValue } from "firebase/database";

function GetData(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const recentPostsRef = query(ref(getDatabase()));
        // query need onvalue to work ,idk why
        return onValue(
            recentPostsRef,
            (snapshot) => {
                setData(snapshot.child("userdata").val());
            },
            {
                onlyOnce: true
            },
        );
    });


    return (data);
}
function GetDatas(props) {
    //input path:"x/y/z" to get any thing in z
    // pathlist = [props.path.split("/")];
    // nowpath = '';
    // pathlist.forEach(element => {


    // });



}
export default GetData;