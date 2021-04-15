// Modules- code yang sudah dikemas
// commonjs, tiap file yang ada di module ..
// const kirana = "kirana"
// const kalila = " Kalila"

// const salam =(nama)=>{
//     console.log(`Selamat pagi ${nama}`)
// }

// const names = require('./4-nama')
// console.log(names)


// salam('Arofah')
// salam(kalila)
// salam(kirana)

var methods = {};
methods.function_A = function(){
    console.log("ini bagian dari fungsi A")
}
methods.function_B = function(){
    console.log("ini bagian dari fungsi B")
}
export.data= methods;