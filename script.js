// Menunggu hingga seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', function () {

    // --- Fitur Jam Digital ---
    const clockElement = document.getElementById('clock');

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        // Memformat waktu menjadi HH:MM:SS
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Memanggil updateClock setiap detik (1000 milidetik)
    setInterval(updateClock, 1000);
    // Memanggil sekali saat halaman dimuat agar tidak ada jeda
    updateClock();


    // --- Fitur Dark Mode Toggle ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Menambahkan event listener saat tombol di-klik
    darkModeToggle.addEventListener('click', () => {
        // Menambahkan atau menghapus kelas 'dark-mode' dari body
        body.classList.toggle('dark-mode');

        // Mengubah ikon tombol berdasarkan mode saat ini
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '☀️'; // Ikon matahari untuk mode gelap
        } else {
            darkModeToggle.textContent = '🌙'; // Ikon bulan untuk mode terang
        }
    });

});