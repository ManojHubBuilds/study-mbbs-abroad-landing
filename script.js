document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".lead-form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const phone = form.querySelector("input[type='tel']").value.trim();
        const country = form.querySelector("select").value;

        // Simple validation
        if (name === "" || email === "" || phone === "" || country === "") {
            alert("❌ Please fill in all fields!");
            return;
        }

        // Email validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("❌ Please enter a valid email address!");
            return;
        }

        // Phone number validation (Only digits, 10+ characters)
        const phonePattern = /^[0-9]{10,}$/;
        if (!phone.match(phonePattern)) {
            alert("❌ Please enter a valid phone number (minimum 10 digits)!");
            return;
        }

        // Success message
        alert("✅ Application submitted successfully!");
        form.reset(); // Reset form after submission
    });
});
