
function tambahKeTroli(namaProduk, hargaProduk) {
    let troli = JSON.parse(localStorage.getItem('troli')) || [];
    troli.push({ nama: namaProduk, harga: hargaProduk });
    localStorage.setItem('troli', JSON.stringify(troli));
    alert(`${namaProduk} seharga ${hargaProduk} telah masuk ke troli!`);
  }

