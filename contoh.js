let array = [];
for (let i = 0; i < 100; i++) {
  array.push(Math.floor(Math.random() * 50) + 1);
}
let evenArray = [];
let oddArray = [];
for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    evenArray.push(array[i]);
  } else {
    oddArray.push(array[i]);
  }
}
let minEven = evenArray[0];
let maxEven = evenArray[0];
let totalEven = 0;
for (let i = 0; i < evenArray.length; i++) {
  if (evenArray[i] < minEven) {
    minEven = evenArray[i];
  }
  if (evenArray[i] > maxEven) {
    maxEven = evenArray[i];
  }
  totalEven += evenArray[i];
}
let averageEven = totalEven / evenArray.length;

let minOdd = oddArray[0];
let maxOdd = oddArray[0];
let totalOdd = 0;
for (let i = 0; i < oddArray.length; i++) {
  if (oddArray[i] < minOdd) {
    minOdd = oddArray[i];
  }
  if (oddArray[i] > maxOdd) {
    maxOdd = oddArray[i];
  }
  totalOdd += oddArray[i];
}
let averageOdd = totalOdd / oddArray.length;

let comparison = "";
if (minEven > minOdd) {
  comparison += "Min lebih besar pada array ganjil\n";
} else if (minEven < minOdd) {
  comparison += "Min lebih besar pada array genap\n";
} else {
  comparison += "Min sama pada kedua array\n";
}
if (maxEven > maxOdd) {
  comparison += "Max lebih besar pada array genap\n";
} else if (maxEven < maxOdd) {
  comparison += "Max lebih besar pada array ganjil\n";
} else {
  comparison += "Max sama pada kedua array\n";
}
if (totalEven > totalOdd) {
  comparison += "Total lebih besar pada array genap\n";
} else if (totalEven < totalOdd) {
  comparison += "Total lebih besar pada array ganjil\n";
} else {
  comparison += "Total sama pada kedua array\n";
}
if (averageEven > averageOdd) {
  comparison += "Rata-rata lebih besar pada array genap\n";
} else if (averageEven < averageOdd) {
  comparison += "Rata-rata lebih besar pada array ganjil\n";
} else {
  comparison += "Rata-rata sama pada kedua array\n";
}
console.log("Array dengan jumlah index 100");
console.log(array);
console.log("Array genap dengan jumlah index 50");
console.log(evenArray);
console.log("Array ganjil dengan jumlah index 50");
console.log(oddArray);
console.log("Min, Max, Total, Rata rata pada setiap array (genap dan ganjil)");
console.log("Min genap: " + minEven);
console.log("Max genap: " + maxEven);
console.log("Total genap: " + totalEven);
console.log("Rata-rata genap: " + averageEven);
console.log("Min ganjil: " + minOdd);
console.log("Max ganjil: " + maxOdd);
console.log("Total ganjil: " + totalOdd);
console.log("Rata-rata ganjil: " + averageOdd);
console.log("Perbandingan nilai min, max, total dan rata rata");
console.log(comparison);