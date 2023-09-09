let plat = "hitam"
let jenis = "mobil";
let cc = 1400

if (plat === "kuning" || jenis === "motor") {
  console.log("BBM subsidi");
} else if (cc < 1500) {
  console.log("PERTAMAX");
} else {
  console.log("PERTAMAX turbo");
}