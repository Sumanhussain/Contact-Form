document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('contact-form');
            const successMessage = document.getElementById('success-message');
            const errorMessage = document.getElementById('error-message');

            form.addEventListener('submit', function(e) {
                e.preventDefault();

                const errorMessages = document.querySelectorAll('.error-message');
                errorMessages.forEach(msg => msg.style.display = 'none');
                errorMessage.style.display = 'none';

                const fullName = document.getElementById('fullName');
                const email = document.getElementById('email');
                const subject = document.getElementById('subject');
                const message = document.getElementById('message');

                let isValid = true;

                if (fullName.value.trim() === '') {
                    document.getElementById('fullName-error').style.display = 'block';
                    isValid = false;
                }

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value.trim())) {
                    document.getElementById('email-error').style.display = 'block';
                    isValid = false;
                }

                if (subject.value === '' || subject.value === null) {
                    document.getElementById('subject-error').style.display = 'block';
                    isValid = false;
                }

                if (message.value.trim() === '') {
                    document.getElementById('message-error').style.display = 'block';
                    isValid = false;
                }

                if (!isValid) {
                    errorMessage.style.display = 'block';
                    return;
                }

                successMessage.style.display = 'block';
                form.reset();

                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            });

            document.getElementById('fullName').addEventListener('blur', validateField);
            document.getElementById('email').addEventListener('blur', validateField);
            document.getElementById('subject').addEventListener('change', validateField);
            document.getElementById('message').addEventListener('blur', validateField);

            function validateField(e) {
                const field = e.target;

                if (field.id === 'fullName' && field.value.trim() === '') {
                    document.getElementById('fullName-error').style.display = 'block';
                }

                if (field.id === 'email') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(field.value.trim())) {
                        document.getElementById('email-error').style.display = 'block';
                    }
                }

                if (field.id === 'subject' && (field.value === '' || field.value === null)) {
                    document.getElementById('subject-error').style.display = 'block';
                }

                if (field.id === 'message' && field.value.trim() === '') {
                    document.getElementById('message-error').style.display = 'block';
                }
            }
        });