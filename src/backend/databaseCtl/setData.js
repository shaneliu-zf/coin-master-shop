import { child, push, ref, update } from "firebase/database";
import { GetLen } from "../../function/function";
import { database } from "./firebase";


export async function databaseInputWithHash(type, new_item) {
    /*
    input type and insert data
    */
    const updates = {};
    const newItemKey = push(child(ref(database), type)).key;
    updates['/' + type + '/' + newItemKey] = new_item;
    console.log(new_item)
    update(ref(database), updates);
}
export function ChangeData(path, new_value) {
    /*
    input type and insert data
    */
    update(ref(database), {
        [path]: new_value
    })
}
export async function ChangeDataWithId(path, new_value, Id) {
    /*
    input type and insert data
    */
    if (Id != "no") {
        update(ref(database), {
            [path + Id]: new_value
        })
    } else {
        let tmp = -1
        tmp = await GetLen(path);
        update(ref(database), {
            [path + "coin" + tmp]: new_value
        })
    }
}
export function DeleteData(path) {

    update(ref(database), {
        [path]: null
    })
}

