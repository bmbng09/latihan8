var coba = 10;
console.log(coba); 

angka = 20; 
console.log(angka); 

goublog = 50;
console.log(goublog);

// let y = 10;
// console.log(y); 
// y = 30; 
// console.log(y); 
//let y = 50;

// Aritmatika
let a = 10;
let b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0

// Perbandingan
let x = 5;
let y = '5';
console.log(x == y); // true - == :Mengembalikan true jika nilainya sama tanpa memeriksa tipe data
console.log(x === y); // false === : Mengembalikan true jika nilainya dan tipe data sama
console.log(x != y); // false - != : Mengembalikan true jika nilainya tidak sama
console.log(x !== y); // true  - !== : Mengembalikan true jika nilainya atau tipe data tidak sama
console.log(x > y); // false - > : Mengembalikan true jika x lebih besar dari y
console.log(x < y); // false - < : Mengembalikan true jika x lebih kecil dari y
console.log(x >= y); // true - >= : Mengembalikan true jika x lebih besar dari atau sama dengan y
console.log(x <= y); // true - <= : Mengembalikan true jika x lebih kecil dari atau sama dengan y

//Operator Logika 
let c = true;
let d = false;
let e = true;
console.log(c && e); // true
console.log(c && d); // false
console.log(c || d); // true
console.log(!c); // false

// Struktur Kontrol
    // pernyataan kondisional
    let angkaa = 10;
    if (angkaa > 0) {
     console.log("Positif");
    } else if (angkaa < 0) {
     console.log("Negatif");
    } else {
     console.log("Nol");
    }

    // Perulangan
        // for loop
        for (let i = 0; i < 5; i++) {
            console.log(i); // Output: 0, 1, 2, 3, 4
           }

        // while loop
        let i = 0;
        while (i < 5) {
            console.log(i); // Output: 0, 1, 2, 3, 4
            i++;
        }

// Fungsi 
    // mendefinisikan fungsi
    function salam(nama) {
        return "Halo, " + nama + "!";
       }
       console.log(salam("Budi")); // Output: Halo, Budi!

    // fungsi ekspresi
    const kali = (a, b) => a * b;
    console.log(kali(5, 4)); // Output: 20

