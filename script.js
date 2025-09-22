document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('nameInput');
    const messageDiv = document.getElementById('message');
    
    // Nama yang diizinkan (bisa disesuaikan)
    const allowedNames = ['nidya', 'Nidya', 'NIDYA'];
    
    nameForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const enteredName = nameInput.value.trim();
        
        if(enteredName === '') {
            showMessage('Silakan masukkan nama kamu!', 'error');
            return;
        }
        
        // Animasi loading
        const submitBtn = document.querySelector('.btn-login');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Memeriksa...';
        submitBtn.disabled = true;
        
        // Simulasi pengecekan
        setTimeout(() => {
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
            
            if(allowedNames.includes(enteredName)) {
                // Jika nama benar, redirect ke halaman ucapan.html
                window.location.href = 'ucapan.html';
            } else {
                // Jika nama salah, tampilkan pesan
                showMessage('Hanya untuk kamu yang bernama Nidya', 'error');
                nameInput.value = '';
                nameInput.focus();
            }
        }, 1000);
    });
    
    function showMessage(msg, type) {
        messageDiv.textContent = msg;
        messageDiv.style.color = type === 'error' ? '#ff6b6b' : '#4caf50';
        
        // Hilangkan pesan setelah 3 detik
        setTimeout(() => {
            messageDiv.textContent = '';
        }, 3000);
    }
    
    // Efek hover untuk input
    nameInput.addEventListener('focus', function() {
        this.parentElement.querySelector('i').style.color = '#fff';
    });
    
    nameInput.addEventListener('blur', function() {
        this.parentElement.querySelector('i').style.color = 'rgba(255, 255, 255, 0.8)';
    });
});
