const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent real submission

      // Optional: validate (already using 'required' in HTML)
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();

      if (name && email && subject && message) {
        // Simulate submission
        form.reset();
        successMessage.style.display = 'block';

        // Hide after 5 seconds
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      }
    });
