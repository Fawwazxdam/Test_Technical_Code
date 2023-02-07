
function segitiga() { 
    let number = $('#angka').val();
    let res = ""
    for (let i = 1; i <= number; i++) {
        let hasil = ''
        for (let j = 0; j < i; j++) {
            hasil+=number+"*"
            
        }
        res+=number + i + "<br>";
        // for (let k = 1; k <= j; k++) {
        //     const segitigar = k+"0";
        // }
        // console.log(segitigar);
    }
    $('#result').text(res);        
}

function ganjil() { 
    let number = $('#angka').val();
    if (number %2 == 0) {
        $('#result').text("Genap");        
        
    } else {
        $('#result').text("Ganjil");        
        
    }
}

function prima() { 
    let number = $('#angka').val();
    let cek = 0
    for (let i = 0; i < number; i++) {
        
        if (number %i == 0 ) {        
            cek++
        } 
    }
    if (cek == 2) {
        $('#result').text("Bukan");        
        
    } else {
        $('#result').text("Prima");        
        
    }
    
   }