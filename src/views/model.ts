const localStorageKeyName = 'recordList';
const model = {
fetch(){
return JSON.parse(window.localStorage.getItem('localStorageKeyName')||'[]') as Recorditem[];

},
save (data:Recorditem[]){
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));

},

Clone(data:RecordItem[]|RecordItem){
    return JSON.parse(JSON.stringify(data))


}

};
export{model}