  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(this);

    fetch(this.action, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        this.reset();

        window.location.href = 'https://your-redirect-url.com'; 
      } else {
        alert('There was an issue with the form submission.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    });
  });
