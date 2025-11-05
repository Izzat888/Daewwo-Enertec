  
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Formani avtomatik yuborishni to‘xtatadi

    Swal.fire({
      title: 'Tabriklaymiz! ',
      text: 'DAEWWO ENERTEC ga arizangiz yuborildi. ✅',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  });
 document.getElementById('menuToggle').addEventListener('click', function() {
            document.getElementById('headerList').classList.toggle('active');
            this.classList.toggle('active');
            
            // Tugma ikonkasini o'zgartirish
            const icon = this.querySelector('i');
            if (this.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // Ekran o'lchami o'zgarganda menyuni yopish
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                document.getElementById('headerList').classList.remove('active');
                document.getElementById('menuToggle').classList.remove('active');
                document.getElementById('menuToggle').querySelector('i').className = 'fas fa-bars';
            }
        });