function hitungTotal(array) {
    let total = 0;
  
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
  
    return total;
  }
  
  const angka = [3, 1, 7, 9, 2, 5];
  const total = hitungTotal(angka);
  console.log(`Total Nilai: ${total}`);
  