// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded successfully! 🚀');
    
    // Initialize animations
    initializeSkillBars();
    initializeScrollAnimations();
    
    // Add welcome message
    showWelcomeMessage();
});

// Initialize Skill Bars Animation
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Animate skill bars after page load
    setTimeout(() => {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }, 1000);
}

// Initialize Scroll Animations
function initializeScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
}

// Show Welcome Message
function showWelcomeMessage() {
    setTimeout(() => {
        const welcomeMsg = document.createElement('div');
        welcomeMsg.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                padding: 15px 20px;
                border-radius: 10px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.2);
                z-index: 1000;
                animation: slideInRight 0.5s ease;
            ">
                <strong>🎉 Welcome to my Portfolio!</strong><br>
                <small>CodePen se banaya gaya</small>
            </div>
        `;
        
        document.body.appendChild(welcomeMsg);
        
        // Remove welcome message after 4 seconds
        setTimeout(() => {
            welcomeMsg.style.animation = 'slideOutRight 0.5s ease';
            setTimeout(() => {
                welcomeMsg.remove();
            }, 500);
        }, 4000);
        
    }, 2000);
}

// Project Modal Functions
function showProject(projectName) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    // Project details
    const projects = {
        'E-commerce Website': {
            description: 'Complete online shopping platform with user authentication, product catalog, shopping cart, payment integration, and admin panel. Built using React.js for frontend and Node.js for backend with MongoDB database.'
        },
        'Weather App': {
            description: 'Real-time weather application that provides current weather conditions, 5-day forecast, and weather alerts. Uses OpenWeatherMap API for data and implements geolocation for automatic location detection.'
        },
        'Todo Application': {
            description: 'Feature-rich task management system with drag-and-drop functionality, categories, due dates, priority levels, and local storage persistence. Clean and intuitive user interface with smooth animations.'
        }
    };
    
    modalTitle.textContent = projectName;
    modalDescription.textContent = projects[projectName].description;
    modal.style.display = 'block';
    
    // Add click animation to modal
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.transform = 'scale(0.7)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modalContent.style.transform = 'scale(1)';
        modalContent.style.opacity = '1';
        modalContent.style.transition = 'all 0.3s ease';
    }, 50);
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    const modalContent = modal.querySelector('.modal-content');
    
    modalContent.style.transform = 'scale(0.7)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Contact Form Handler
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const message = form.elements[2].value;
    
    // Show loading state
    const submitButton = form.querySelector('button');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Show success message
        showNotification(`Thank you ${name}! Your message has been sent successfully. I'll get back to you soon! 📧`, 'success');
        
        // Reset form
        form.reset();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
    }, 2000);
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            z-index: 1001;
            max-width: 90%;
            text-align: center;
            animation: slideInDown 0.5s ease;
        ">
            ${message}
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutUp 0.5s ease';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 5000);
}

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Easter Egg - Konami Code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    konamiCode = konamiCode.slice(-konamiSequence.length);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        showNotification('🎮 Konami Code Activated! You found the easter egg! 🥳', 'success');
        
        // Add special effects
        document.body.style.animation = 'rainbow 2s ease infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 10000);
    }
});

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes slideInDown {
        from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
        to { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
    
    @keyframes slideOutUp {
        from { transform: translateX(-50%) translateY(0); opacity: 1; }
        to { transform: translateX(-50%) translateY(-100%); opacity: 0; }
    }
    
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Console Message for Developers
console.log(`
🚀 Portfolio Website Created with CodePen
📧 Contact: raj@example.com
🔧 Built with: HTML, CSS, JavaScript
⭐ Features: Responsive Design, Animations, Interactive Elements
🎨 Design: Modern Gradient Theme
📱 Mobile: Fully Responsive
🔗 CodePen: codepen.io/your-username

Thanks for checking out the code! 😊
`);
