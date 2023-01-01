import { child, push, ref, update } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { database } from './backend/databaseCtl/firebase';
import GetDatas from "./backend/databaseCtl/getData";
import { ChangeData, databaseInputWithHash, DeleteData } from './backend/databaseCtl/setData';

export function GetNotSoldItems() {
    /*
     * 回傳未被賣掉的商品陣列
     */
    let coinlist = GetDatas({ path: "items" })
    const [ansList, setAnsList] = useState([]);
    useEffect(() => {
        Object.entries(coinlist).map(
            ([key, value]) => {
                //console.log(value['sold'])
                Object.entries(value).map(
                    ([key1, value1]) => {
                        if (key1 == "sold" && value1 == false) {
                            setAnsList(value)

                        }

                    });
            }
        )

    })
    return ansList


}

export function GetItemOrFalse(item_id) {
    /*
     * 回傳商品json
     * 如果sold為true，則回傳False
     */
    let coinlist = GetDatas({ path: "items" })
    const [ansList, setAnsList] = useState([]);

    useEffect(() => {
        Object.entries(coinlist).map(
            ([key, value]) => {
                if (value['item_id'] == item_id && value['sold'] == false) {
                    setAnsList(value)
                } else {
                    setAnsList(false)
                }
            }
        )
        //ItemSold(item_id)
    })

    return ansList


}


export function ItemSold(item_id) {
    /*
     * 修改商品的sold成true
     */
    let coinlist = GetDatas({ path: "items" })
    const [ansList, setAnsList] = useState([]);

    useEffect(() => {
        Object.entries(coinlist).map(
            ([key, value]) => {
                if (value['item_id'] == item_id && value['sold'] == false) {
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


export function AddItem(new_item) {
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


function addToCart(customer_id, item_id) {
    /*
     * 把物品加入顧客的購物車
     *
     *
     *
     * */
    let cartlist = GetDatas({ path: "cart" })
    useEffect(() => {
        Object.entries(cartlist).map(
            ([key, value]) => {
                if (value['customer_id'] == customer_id) {
                    databaseInputWithHash('cart/' + key + 'items', item_id)
                }
            }
        )
    })
}

export function removeFromCart(customer_id, item_id) {
    /*
     * 把物品從顧客的購物車移除
     *
     * */
    let cartlist = GetDatas({ path: "cart" })
    const [ansList, setAnsList] = useState([]);

    useEffect(() => {
        Object.entries(cartlist).map(
            ([key, value]) => {
                if (value['customer_id'] == customer_id) {
                    DeleteData('/cart/' + key + '/items/' + item_id)
                }
            }
        )
    })
    //DeleteData()
}


export function getCart(customer_id) {
    /*
     * 回傳商品陣列
     *
     * */
    let cartlist = GetDatas({ path: "cart" })
    const [ansList, setAnsList] = useState([]);

    useEffect(() => {
        Object.entries(cartlist).map(
            ([key, value]) => {
                if (value['customer_id'] == customer_id) {
                    setAnsList(value['items'])
                }
            }
        )
    })
    return ansList

}


export function GetCustomerCount() {
    /*
     * 回傳customer_count
     */
    return parseInt(GetDatas({ path: '/customer_count' }))
}
export function CustomerCountAddOne() {
    /*
     * 把資料庫的customer_count加1
     */
    let tmp = GetDatas({ path: '/customer_count' })
    console.log('tmp')
    console.log(tmp)
    if (typeof (tmp) === typeof (1)) {
        ChangeData('/customer_count', (tmp + 1))

    }

}


function parseCookie() {
    let cookieObj = {};
    let cookieAry = document.cookie.split(';');
    for (let i = 0, l = cookieAry.length; i < l; ++i) {
        let cookie = cookieAry[i].trim().split('=');
        cookieObj[cookie[0]] = cookie[1];
    }
    return cookieObj;
}

function getCookieByName(name) {
    let value = parseCookie()[name];
    if (value) {
        value = decodeURIComponent(value);
    }
    return value;
}

function getCustomerIdOrFalse() {
    let user = getCookieByName('user');
    if (user) {
        return user / 17;
    }
    else {
        return false;
    }
}


function newVisit() {
    if (getCustomerIdOrFalse() === false) {
        console.log("new visit");
        okYourAreNewVisitor();
    }
    else {
        console.log("not new visit");
    }
}


function okYourAreNewVisitor() {
    CustomerCountAddOne();
    document.cookie = 'user=' + encodeURIComponent(GetCustomerCount() * 17);
}
