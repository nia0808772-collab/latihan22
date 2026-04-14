 //aray global untuk menyimpan data barang 
//sekarangakan menyimpan
//[nama, harga],[nama, harga] dst..
let dataBarang = [] 

// fungsi format rupiah 1.000.000
function rupiah(angka) {
  return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// fungsi untuk menambah barang ke dalam keranjang
function tambah() {
  //mengambildaya nama dri elemen input dengan id "namabaranginput"
  let nama = document.getElementById("namabaranginput").value
  
  //mengambil data harga dari elemen input dengan id "hargainput"
  //dan mengubah menjadi angka
  let harga = Number(document.getElementById("hargainput").value)
  
  //masukkan data harga ke dalam array databarang
  dataBarang.push([nama, harga])
  
  //kosongkan input nama setelah di tambahkan
 document.getElementById("namabaranginput").value = ""
 //kosongkan input harga setelah di tambahkan
  document.getElementById("hargainput").value = ""
  
  //tampilkan data harga barang
  tampilkan()
}


function tampilkan() {
  let total = 0
  let output = ""
  
  //dataBarang[i][0] adalah nama barang
  //dataBarang[i][1] adalah harga barang
  
  //loop input harga barang dari array global data barang
  for (let i = 0; i < dataBarang.length; i++) {
  //dataBarang[i][0] adalah nama barang
  //dataBarang[i][1] adalah harga barang
  let nama = dataBarang[i][0]
  let harga = dataBarang[i][1]
    total += harga
    
    output += + (i + 1) + "." + nama + ": Rp "+ rupiah(harga) + "<button onclick='hapusIndex(" + i + ")'class='hapus2'>Hapus</button>" + "<br>"
  }
  
  output += "<hr>Total: Rp" + rupiah(total)
  
  document.getElementById("hasil").innerHTML = output
}
// fungsi untuk mengahapus barang terakhir dari keranjang
function hapus() {
  dataBarang.pop()
  tampilkan()
}
// fungsi untuk mereset keranjang
function reset() {
  dataBarang = []
  tampilkan()
}
//fungsi untuk mengedit harga barang berdasarkan nomor barang
function edit() {
 // ubang nomor barang menjadi index array dengan mengurangi 1
 let index = Number(document.getElementById("nomor").value) -1
 //ambil nama dari input
  let nama= document.getElementById("namabarangedit").value
 //ambil harga dari input
 let harga = Number(document.getElementById("hargaedit").value)
 
 //periksa apakah index valid
 if (index >= 0 && index < dataBarang.length) {
   //harga barang di array dataBarang
   dataBarang[index][0] = nama
   dataBarang[index][1] = harga
 } else {
   //jika nomor barang tidak valid, tampilan alert
   alert("Nomor barang tidak valid")
 }
  
  tampilkan()
 //kosongkaninput jomor dan harga edit setelah di edit
 document.getElementById("namabarangedit").value =""
 document.getElementById("hargaedit").value =""
 document.getElementById("nomor").value =""
}

//fungsi untuk menghapus barang berdasarkan nomor barang


function hapusIndex(index) {
  if (index >= 0 && index < dataBarang.length) {
   
 dataBarang.splice(index, 1)
 } else {
   //jika nomor barang tidak valid, tampilan alert
   alert("Nomor barang tidak valid")
}

tampilkan()
}