// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.getElementById('mobileMenu').classList.add('hidden');
        }
    });
});

// Registration Form Validation
const registerForm = document.getElementById('registerForm');

if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        const password = document.getElementById('password').value;
        const location = document.getElementById('location').value;
        const experience = document.getElementById('experience').value;
        const terms = document.getElementById('terms').checked;
        
        let errors = [];
        
        // Validate name
        if (fullname.length < 3) {
            errors.push('Name must be at least 3 characters long');
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push('Please enter a valid email address');
        }
        
        // Validate mobile (Indian format)
        const mobileRegex = /^[6-9]\d{9}$/;
        const cleanMobile = mobile.replace(/[^\d]/g, '').slice(-10);
        if (!mobileRegex.test(cleanMobile)) {
            errors.push('Please enter a valid 10-digit mobile number');
        }
        
        // Validate password
        if (password.length < 6) {
            errors.push('Password must be at least 6 characters long');
        }
        
        // Validate location
        if (!location) {
            errors.push('Please select a location');
        }
        
        // Validate experience
        if (!experience) {
            errors.push('Please select your experience level');
        }
        
        // Validate terms
        if (!terms) {
            errors.push('You must accept the terms and conditions');
        }
        
        if (errors.length > 0) {
            showNotification(errors.join('\n'), 'error');
        } else {
            showNotification('Registration successful! Welcome to JobPortal 🎉', 'success');
            registerForm.reset();
        }
    });
}

// Login Form Validation
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        
        let errors = [];
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push('Please enter a valid email address');
        }
        
        // Validate password
        if (password.length < 6) {
            errors.push('Password must be at least 6 characters long');
        }
        
        if (errors.length > 0) {
            showNotification(errors.join('\n'), 'error');
        } else {
            showNotification('Login successful! Redirecting... 🚀', 'success');
            setTimeout(() => {
                loginForm.reset();
            }, 2000);
        }
    });
}

// Notification Function
function showNotification(message, type) {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification fixed top-20 right-4 z-50 max-w-md p-4 rounded-lg shadow-lg';
    
    if (type === 'success') {
        notification.classList.add('bg-green-500', 'text-white');
    } else {
        notification.classList.add('bg-red-500', 'text-white');
    }
    
    notification.innerHTML = `
        <div class="flex items-start">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} text-xl mr-3 mt-0.5"></i>
            <div class="flex-1">
                <p class="font-medium">${type === 'success' ? 'Success!' : 'Error!'}</p>
                <p class="text-sm mt-1 whitespace-pre-line">${message}</p>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Apply button functionality
document.querySelectorAll('button').forEach(button => {
    if (button.textContent.includes('Apply Now')) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const jobCard = this.closest('div');
            const jobTitle = jobCard.querySelector('h3').textContent;
            const company = jobCard.querySelector('p').textContent;
            
            showNotification(`Great choice! You're applying for ${jobTitle} at ${company}. Please register or login to continue.`, 'success');
            
            setTimeout(() => {
                document.querySelector('#register').scrollIntoView({ behavior: 'smooth' });
            }, 1500);
        });
    }
});

// File upload feedback
const resumeInput = document.getElementById('resume');
if (resumeInput) {
    resumeInput.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            const fileName = this.files[0].name;
            showNotification(`Resume uploaded: ${fileName}`, 'success');
        }
    });
}

console.log('JobPortal - Student Project loaded successfully! 🎓');