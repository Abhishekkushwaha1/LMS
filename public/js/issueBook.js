document.addEventListener('DOMContentLoaded', () => {
    const issueDateInput = document.getElementById('issueDate');
    const returnDateInput = document.getElementById('returnDate');
    const bookTitle = document.getElementById('bookTitle');
    const authorInput = document.getElementById('author');
  
    const today = new Date().toISOString().split('T')[0];
    issueDateInput.value = today;
    issueDateInput.setAttribute('min', today);
  
    issueDateInput.addEventListener('change', () => {
      const issueDate = new Date(issueDateInput.value);
      const maxReturn = new Date(issueDate);
      maxReturn.setDate(maxReturn.getDate() + 15);
      returnDateInput.value = issueDateInput.value;
      returnDateInput.setAttribute('max', maxReturn.toISOString().split('T')[0]);
    });
  
    bookTitle.addEventListener('change', () => {
      const selected = bookTitle.options[bookTitle.selectedIndex];
      authorInput.value = selected.dataset.author || '';
    });
  
    document.getElementById('issueForm').addEventListener('submit', function (e) {
      if (!bookTitle.value || !issueDateInput.value || !returnDateInput.value) {
        e.preventDefault();
        alert('❗ Please fill all required fields!');
      }
    });
  });
  