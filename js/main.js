  
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
