document.getElementById('addBookForm').addEventListener('submit', function (e) {
    const type = document.querySelector('input[name="type"]:checked');
    const title = document.querySelector('input[name="title"]').value.trim();
    const author = document.querySelector('input[name="author"]').value.trim();
    const serialNo = document.querySelector('input[name="serialNo"]').value.trim();
    const category = document.querySelector('input[name="category"]').value.trim();
  
    if (!type || !title || !author || !serialNo || !category) {
      e.preventDefault();
      alert('❗ All fields are required!');
    }
  });
  