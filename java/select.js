const select_confirm = document.getElementById('button_confirm');

function onSubmit() {
    Swal.fire({
    title: 'Are you sure?',
    text: " cannot reverese until finish the test",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, bring me to it!'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = './body/selecttest.html';
    }
  })
}