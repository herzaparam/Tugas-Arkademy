
    const mtk = 50
    const bahasaIndonesia = 80 
    const bahasaInggris = 80
    const ipa = 80

    if (mtk === 0 || bahasaIndonesia === 0 || bahasaInggris === 0 || ipa === 0){
        console.log('semua nilai harus diisi');
    }else{
        sum = mtk + bahasaIndonesia + bahasaInggris + ipa
        average = sum /4

    console.log( 'rata - rata = ' + average);

    if (average >= 90 && average <= 100) {
        console.log('grade = A');
        
    } else if (average >= 80 && average <=89){
        console.log('grade = B');
        
    }else if (average >= 70 && average <= 79 ){
        console.log('grade = C');
    }else if (average >= 60 && average <= 69) {
        console.log('grade = D');
    }else {
        console.log('grade = E');
    }    
}
    
    