import { type } from '@testing-library/user-event/dist/type';
import {child, getDatabase, push, get,ref, update} from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { database } from '../backend/databaseCtl/firebase';
import GetData from "../backend/databaseCtl/getData";
import { ChangeData, databaseInputWithHash, DeleteData } from '../backend/databaseCtl/setData';
import {forEach} from "react-bootstrap/ElementChildren";



export async function getNotSoldItems(){
    let coin_list = [];
    let snapshot = await get(child(ref(getDatabase()), '/items/'));
    if (snapshot.exists()) {
        let coins = Object.values(snapshot.val());
        coins.forEach((coin) => {
            if (coin['sold'] === false) {
                coin_list.push(coin);
            }
        });
    }
    return coin_list;
}

export async function getItemOrFalse(item_id){
    const coin_list = await getNotSoldItems();
    for(let i = 0; i < coin_list.length; i++){
        if (coin_list[i]['item_id'] == item_id){
            return coin_list[i];
        }
    }
    return false;
}


export function ItemSold(item_id) {
    /*
     * 修改商品的sold成true
     */
    let coin_list = GetData({ path: "items" })
    const [ansList, setAnsList] = useState([]);

    useEffect(() => {
        Object.entries(coin_list).map(
            ([key, value]) => {
                if (value['item_id'] === item_id && value['sold'] === false) {
                    const updates = {};
                    updates['/items/' + key + '/sold'] = true;
                    update(ref(database), updates);
                    setAnsList(value)
                }
            }
        )
    })
    return ansList

}


export function AddItem(new_item){
    //new_item為商品json
    /*
     * 在資料庫新增新的商品
     */
    databaseInputWithHash('items', new_item)
}


export function AddTrade(new_trade) {
    //new_item為交易json
    /*
     * 在資料庫新增新的交易流水
     */
    databaseInputWithHash('trade', new_trade)
}


export function AddToCart(customer_id, item_id) {
    /*
     * 把物品加入顧客的購物車
     *
     *
     *
     * */
    let cartlist = GetData({ path: "cart" })
    useEffect(() => {
        Object.entries(cartlist).map(
            ([key, value]) => {
                if (value['customer_id'] == customer_id) {
                    ChangeData('/cart/' + key + '/items/' + item_id, '')
                }
            }
        )
    })
}

export function RemoveFromCart(customer_id, item_id) {
    /*
     * 把物品從顧客的購物車移除
     *
     * */
    let cartlist = GetData({ path: "cart" })
    const [ansList, setAnsList] = useState([]);

    useEffect(() => {
        Object.entries(cartlist).map(
            ([key, value]) => {
                if (value['customer_id'] === customer_id) {
                    DeleteData('/cart/' + key + '/items/' + item_id)
                }
            }
        )
    })
    //DeleteData()
}


export function GetCart(customer_id) {
    /*
     * 回傳商品陣列
     *
     * */
    let cartlist = GetData({ path: "cart" })
    const [ansList, setAnsList] = useState([]);

    useEffect(() => {
        Object.entries(cartlist).map(
            ([key, value]) => {
                if (value['customer_id'] === customer_id) {
                    setAnsList(value['items'])
                }
            }
        )
    })
    return ansList

}


export function GetCustomerCount(){
    /*
     * 回傳customer_count
     */
    return parseInt(GetData({ path: '/customer_count' }))
}
export function CustomerCountAddOne() {
    /*
     * 把資料庫的customer_count加1
     */
    let tmp = GetData({ path: '/customer_count' })
    if (typeof (tmp) === typeof (1)) {
        ChangeData('/customer_count', (tmp + 1))
    }
}


export function parseCookie() {
    let cookieObj = {};
    let cookieAry = document.cookie.split(';');
    for (let i = 0, l = cookieAry.length; i < l; ++i) {
        let cookie = cookieAry[i].trim().split('=');
        cookieObj[cookie[0]] = cookie[1];
    }
    return cookieObj;
}

export function getCookieByName(name) {
    let value = parseCookie()[name];
    if (value) {
        value = decodeURIComponent(value);
    }
    return value;
}

export function getCustomerIdOrFalse() {
    let user = getCookieByName('user');
    if (user) {
        return user / 17;
    }
    else {
        return false;
    }
}


export function newVisit(){
    if (getCustomerIdOrFalse() === false) {
        console.log("new visit");
        okYourAreNewVisitor();
    }
    else {
        console.log("not new visit");
    }
}


export function okYourAreNewVisitor() {
    CustomerCountAddOne();
    let a = GetCustomerCount();
    console.log(a);
    let s = 'user=' + (GetCustomerCount() * 17);
    console.log(s);
    document.cookie = s;
}
