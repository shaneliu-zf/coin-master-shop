
import React, { useEffect, useState } from 'react';
import { database } from './firebase'
import { ref, push, child, update, query, getDatabase, limitToLast, onValue } from "firebase/database";

function GetData(props) {
    //input  (str)path:
    //output  (object)data
    const [data, setData] = useState([]);

    let pathlist = props.path.split("/");
    //console.log(props.target)
    useEffect(() => {
        //const recentPostsRef = props.query// query(ref(getDatabase()));
        const recentPostsRef = query(ref(getDatabase()));
        // query need onvalue to work ,idk why
        return onValue(
            recentPostsRef,
            (snapshot) => {
                let tmp;
                pathlist.forEach(element => {
                    tmp = snapshot.child(element);

                });
                setData(tmp.val());
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
    let data = Object;
    data = GetData({ path: props.path })
    return (data)


}
export default GetDatas;