let data = {
    id : 1,
    names : 'Leanne Graham',
    username : 'Bret',
    email : 'sincere@april.biz',
    address :
    {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874'
    }, 
    phone : '1-770-736-8031 x56442',
    website: 'hildegard.org'
}

let newData = {
    ...data,
    names : 'Herza Paramayudhanto',
    email : 'herzaparam@gmail.com',
    hobby : 'jogging' 
}
console.log(data);
console.log(newData);

const {street, suite, city, zipcode} = newData.address 
console.log(`${street} dan ${city}`);