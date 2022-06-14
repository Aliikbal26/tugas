
window.addEventListener('DOMContentLoaded', () => {
  
  
    document.getElementById('btnAwal').addEventListener('click', () => {
        Swal.fire({
          heightAuto: false,
          title: 'Kembali Ke Halaman Awal ?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'YA',
          cancelButtonText: 'TIDAK',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "./menu.html"
          }
        })
      });  });
  
  document.getElementById('btnSave').addEventListener('click', () => {
      Swal.fire({
          heightAuto: false,
          title: 'Simpan?',
          text: 'Apakah Ingin Menyimpan Perubahan?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'SIMPAN',
          cancelButtonText: 'BATAL',
        }).then((result) => {
          if (result.isConfirmed) {
              Swal.fire({
                  heightAuto: false,
                  title: 'Tersimpan',  
                  icon: 'success',})
          }
      })
  })
  
  document.getElementById('btnTutup').addEventListener('click', () => {
    Swal.fire({
      heightAuto: false,
      title: 'Apakah Yakin Ingin Menutup Aplikasi?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'YA',
      cancelButtonText: 'TIDAK',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "./login.html";
      }
    })
  });  

  
  
  
  