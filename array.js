let Array = [];
for (let i = 0; i < 100; i++) {
  Array.push(Math.floor(Math.random()* 50)+ 1);
}

let ArrayGenap = [];
let ArrayGanjil = [];
for (let i = 0; i < Array.length; i++) {
    if (Array[i] % 2 === 0) {
        ArrayGenap.push(Array[i]);
    }else {
        ArrayGanjil.push(Array[i]);
    }
}

let MinGenap = ArrayGenap[0];
let MaxGenap = ArrayGenap[0];
let TotalGenap = 0;
for (let i = 0; i < ArrayGenap.length; i++) {
    if (ArrayGenap[i] < MinGenap){
        MinGenap = ArrayGenap[i];
    }
    if (ArrayGenap[i] > MaxGenap){
        MaxGenap = ArrayGenap[i];
    }
    TotalGenap += ArrayGenap[i];
}
let RataGenap = TotalGenap / ArrayGenap.length;

let MinGanjil = ArrayGanjil[0];
let MaxGanjil = ArrayGanjil[0];
let TotalGanjil = 0;
for (let i = 0; i < ArrayGanjil.length; i++) {
    if (ArrayGanjil[i] < MinGanjil){
        MinGanjil = ArrayGanjil[i];
    }
    if (ArrayGanjil[i] > MaxGanjil){
        MaxGanjil = ArrayGanjil[i];
    }
    TotalGanjil += ArrayGanjil[i];
}
let RataGanjil = TotalGanjil / ArrayGanjil.length;

let Perbandingan = "";
if (MinGenap > MinGanjil) {
    Perbandingan += "Nilai min genap lebih besar daripada nilai min ganjil\n";
} else if (MinGenap < MinGanjil) {
    Perbandingan += "Nilai min genap lebih kecil daripada nilai min ganjil\n";
} else {
  Perbandingan += "Nilai min pada kedua array sama\n";
}
if (MaxGenap > MaxGanjil) {
    Perbandingan += "Nilai max genap lebih besar daripada nilai max ganjil\n";
} else if (MaxGenap < MaxGanjil) {
    Perbandingan += "Nilai max genap lebih kecil daripada nilai max ganjil\n";
} else {
    Perbandingan += "Nilai max pada kedua array sama\n";
}
if (TotalGenap > TotalGanjil) {
    Perbandingan += "Nilai total genap lebih besar daripada nilai total ganjil\n";
} else if (TotalGenap < TotalGanjil) {
    Perbandingan += "Nilai total genap lebih kecil daripada nilai total ganjil\n";
} else {
    Perbandingan += "Nilai total pada kedua array sama\n";
}
if (RataGenap > RataGanjil) {
    Perbandingan += "Nilai rata-rata genap lebih besar daripada nilai rata-rata ganjil\n";
} else if (RataGenap < RataGanjil) {
    Perbandingan += "Nilai rata-rata genap lebih kecil dsripada nilai rata-rata ganjil\n";
} else {
    Perbandingan += "Nilai rata-rata pada kedua array sama\n";
}


console.log("Array dengan jumlah 100 index");
console.log(Array);
console.log("Array angka genap dengan jumlah 50 index");
console.log(ArrayGenap);
console.log("Array angka ganjil dengan jumlah 50 index");
console.log(ArrayGanjil);
console.log("Nilai Min, Max, Total, dan Rata-Rata Genap");
console.log("Min = "+ MinGenap);
console.log("Max = "+ MaxGenap);
console.log("Total = "+ TotalGenap);
console.log("Rata-rata = "+ RataGenap);
console.log("Nilai Min, Max, Total, dan Rata-Rata Ganjil");
console.log("Min = "+ MinGanjil);
console.log("Max = "+ MaxGanjil);
console.log("Total = "+ TotalGanjil);
console.log("Rata-rata = "+ RataGenap);
console.log("Perbandingan Nilai Min, Max, Total, dan Rata-Rata");
console.log(Perbandingan);


