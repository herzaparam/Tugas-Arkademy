const printSegitiga = 5
if ( typeof printSegitiga === 'number') {
    let output = ''
    for (let i = printSegitiga; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            output += j + ' '
        }
        console.log(output);
        output = ''
    }
    }else{
        console.log('data harus number');
    }
