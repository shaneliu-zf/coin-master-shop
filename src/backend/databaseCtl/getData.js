
import React, { useEffect, useState } from 'react';
import { database } from './firebase'
import { ref, push, child, update, query, getDatabase, limitToLast, onValue } from "firebase/database";

async function GetData(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const recentPostsRef = query(ref(getDatabase()));
        return onValue(
            recentPostsRef,
            (snapshot) => {
                let tmp;
                tmp = snapshot.child(props.path);
                setData(tmp.val());
            },
            {
                onlyOnce: true
            },
        );
    });

    return data;
}
export default GetData;