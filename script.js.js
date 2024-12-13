document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents the form from refreshing the page

    // Capture input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display response message
    const response = document.getElementById('response');
    response.textContent = `Thank you, ${name}! Your message has been received. We'll contact you at ${email}.`;

    // Optionally clear the form fields
    document.getElementById('contact-form').reset();
});
