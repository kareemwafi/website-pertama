// Pastikan kod hanya berjalan selepas halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    // Ambil elemen dari HTML
    const butang = document.getElementById("tukarTeks");
    const teks = document.getElementById("ubahTeks");

    // Tambah event listener untuk butang
    butang.addEventListener("click", function() {
        teks.textContent = "Teks telah ditukar! 🎉";
        teks.style.color = "red"; // Tukar warna teks
    });
});
