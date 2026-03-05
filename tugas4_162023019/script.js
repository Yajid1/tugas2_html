document.addEventListener('DOMContentLoaded', function() {

    console.log('Itenas Pattern Background loaded');
});

function hitung() {
    let tanggal = document.getElementById("tanggal").value;
    let bulan = document.getElementById("bulan").value;
    let tahun = document.getElementById("tahun").value;

    document.getElementById("outTanggal").innerText = tanggal;
    document.getElementById("outBulan").innerText = bulan;
    document.getElementById("outTahun").innerText = tahun;

    let total = tanggal + bulan + tahun;
    let angka = total.split('').reduce((a,b)=> parseInt(a)+parseInt(b));

    document.getElementById("hasil1").innerText = total;
    document.getElementById("hasil2").innerText = angka;

    while (angka > 9) {
        angka = angka.toString().split('').reduce((a,b)=> parseInt(a)+parseInt(b));
    }

    document.getElementById("hasilAkhir").innerText = angka;
}