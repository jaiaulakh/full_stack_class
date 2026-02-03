
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active Navigation Link on Scroll

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form Validation - Registration

const registerForm = document.querySelector('.register-form');

if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        const password = document.getElementById('password').value;
        const location = document.getElementById('location').value;
        const experience = document.getElementById('experience').value;
        const terms = document.getElementById('terms').checked;
        
        // Validation flags
        let isValid = true;
        let errors = [];
        
        // Name validation
        if (fullname.length < 3) {
            errors.push('Name must be at least 3 characters long');
            isValid = false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push('Please enter a valid email address');
            isValid = false;
        }
        
        // Mobile validation
        const mobileRegex = /^[6-9]\d{9}$/;
        const cleanMobile = mobile.replace(/[^\d]/g, '').slice(-10);
        if (!mobileRegex.test(cleanMobile)) {
            errors.push('Please enter a valid 10-digit Indian mobile number');
            isValid = false;
        }
        
        // Password validation
        if (password.length < 8) {
            errors.push('Password must be at least 8 characters long');
            isValid = false;
        }
        
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        
        if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
            errors.push('Password must contain uppercase, lowercase, number, and special character');
            isValid = false;
        }
        
        // Location validation
        if (!location) {
            errors.push('Please select a location');
            isValid = false;
        }
        
        // Experience validation
        if (!experience) {
            errors.push('Please select your experience level');
            isValid = false;
        }
        
        // Terms validation
        if (!terms) {
            errors.push('You must accept the terms and conditions');
            isValid = false;
        }
        
        // Show results
        if (isValid) {
            showSuccessMessage('Registration successful! Welcome to JobPortal.in 🎉');
            registerForm.reset();
        } else {
            showErrorMessage(errors);
        }
    });
}


// Form Validation - Login

const loginForm = document.querySelector('.login-form');

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;
        
        let isValid = true;
        let errors = [];
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push('Please enter a valid email address');
            isValid = false;
        }
        
        // Password validation
        if (password.length < 8) {
            errors.push('Password must be at least 8 characters long');
            isValid = false;
        }
        
        if (isValid) {
            showSuccessMessage('Login successful! Redirecting to dashboard... 🚀');
            setTimeout(() => {
                loginForm.reset();
            }, 2000);
        } else {
            showErrorMessage(errors);
        }
    });
}


// Success/Error Message Display

function showSuccessMessage(message) {
    const messageDiv = createMessageDiv('success', message);
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

function showErrorMessage(errors) {
    const message = errors.join('<br>');
    const messageDiv = createMessageDiv('error', message);
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 6000);
}

function createMessageDiv(type, message) {
    const div = document.createElement('div');
    div.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        max-width: 400px;
        padding: 20px 25px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.4s ease-out;
        font-family: 'Outfit', sans-serif;
        font-size: 0.95rem;
        line-height: 1.5;
    `;
    
    div.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 12px;">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'}" 
               style="font-size: 1.5rem; margin-top: 2px;"></i>
            <div style="flex: 1;">${message}</div>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="background: transparent; border: none; color: white; cursor: pointer; font-size: 1.2rem; padding: 0; margin-left: 10px;">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    return div;
}


// File Upload Enhancement

const fileInput = document.getElementById('resume');
const fileLabel = document.querySelector('.file-upload-label span');

if (fileInput) {
    fileInput.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            const fileName = this.files[0].name;
            fileLabel.textContent = fileName;
            fileLabel.style.color = '#2563eb';
        } else {
            fileLabel.textContent = 'Choose file or drag here';
            fileLabel.style.color = '#475569';
        }
    });
}


// Search Form Enhancement

const searchForm = document.querySelector('.search-form');

if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchInputs = this.querySelectorAll('.search-input');
        const jobTitle = searchInputs[0].value.trim();
        const location = searchInputs[1].value.trim();
        
        if (!jobTitle && !location) {
            showErrorMessage(['Please enter a job title or location to search']);
            return;
        }
        
        showSuccessMessage(`Searching for "${jobTitle}" in "${location}"... 🔍`);
    });
}

// ===================================
// Popular Tags Click Event
// ===================================
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', function() {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.value = this.textContent.trim();
            searchInput.focus();
        }
    });
});

// ===================================
// Apply Button Click Event
// ===================================
document.querySelectorAll('.apply-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const jobCard = this.closest('.job-card');
        const jobTitle = jobCard.querySelector('.job-title').textContent;
        const companyName = jobCard.querySelector('.company-name').textContent.trim();
        
        showSuccessMessage(`Application initiated for <strong>${jobTitle}</strong> at ${companyName}! 📄`);
        
        // Scroll to register section
        setTimeout(() => {
            document.querySelector('#register').scrollIntoView({
                behavior: 'smooth'
            });
        }, 1500);
    });
});

// ===================================
// Social Login Buttons
// ===================================
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const platform = this.classList.contains('google') ? 'Google' : 'LinkedIn';
        showSuccessMessage(`Redirecting to ${platform} authentication... 🔐`);
    });
});

// ===================================
// View All Jobs Button
// ===================================
const viewAllBtn = document.querySelector('.view-all-btn');
if (viewAllBtn) {
    viewAllBtn.addEventListener('click', function() {
        showSuccessMessage('Loading more job opportunities... 💼');
    });
}

// ===================================
// Add CSS Animation for Message
// ===================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    nav a.active {
        background: rgba(245, 158, 11, 0.15);
        color: #f59e0b;
    }
`;
document.head.appendChild(style);

// ===================================
// Password Strength Indicator
// ===================================
const passwordInput = document.getElementById('password');
if (passwordInput) {
    const strengthIndicator = document.createElement('div');
    strengthIndicator.style.cssText = `
        margin-top: 8px;
        height: 4px;
        border-radius: 2px;
        background: #e2e8f0;
        transition: all 0.3s ease;
    `;
    passwordInput.parentElement.appendChild(strengthIndicator);
    
    const strengthText = document.createElement('small');
    strengthText.style.cssText = `
        display: block;
        margin-top: 6px;
        font-size: 0.85rem;
        font-weight: 500;
    `;
    passwordInput.parentElement.appendChild(strengthText);
    
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        let strength = 0;
        
        if (password.length >= 8) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/\d/.test(password)) strength++;
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
        
        const colors = ['#ef4444', '#f59e0b', '#eab308', '#84cc16', '#10b981'];
        const labels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
        
        if (password.length > 0) {
            strengthIndicator.style.width = `${(strength / 5) * 100}%`;
            strengthIndicator.style.background = colors[strength - 1] || colors[0];
            strengthText.textContent = `Password Strength: ${labels[strength - 1] || labels[0]}`;
            strengthText.style.color = colors[strength - 1] || colors[0];
        } else {
            strengthIndicator.style.width = '0%';
            strengthText.textContent = '';
        }
    });
}

