
window.onload = function() {
    // Mendapatkan parameter 'tamu' dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const tamu = urlParams.get('tamu');
    
    // Menampilkan pesan sesuai dengan parameter 'tamu'
    const greetingElement = document.getElementById('greeting');
    if (tamu) {
        greetingElement.innerText = `Selamat datang, ${decodeURIComponent(tamu)}!`;
    } else {
        greetingElement.innerText = 'Selamat datang, tamu! Silakan masukkan nama di URL.';
    }
};
