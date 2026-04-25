// ==========================================
// PROFESSOR ZAKEYO DASHBOARD - Main Scripts
// ==========================================

// Update current date
function updateDate() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            timeZone: 'Africa/Johannesburg'
        };
        dateElement.textContent = now.toLocaleDateString('en-ZA', options);
    }
}

// Animate progress bars on load
function animateProgressBars() {
    const progressFills = document.querySelectorAll('.progress-fill');
    progressFills.forEach(bar => {
        const width = bar.getAttribute('data-width');
        if (width) {
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 200);
        }
    });
}

// Todo list with local storage persistence
document.addEventListener('DOMContentLoaded', function() {
    // Update date
    updateDate();
    
    // Animate progress bars
    animateProgressBars();
    
    // Load saved checkbox states
    const checkboxes = document.querySelectorAll('.todo-item input[type="checkbox"]');
    checkboxes.forEach(cb => {
        const id = cb.id;
        if (localStorage.getItem(id) === 'checked') {
            cb.checked = true;
            cb.closest('.todo-text').classList.add('completed');
        }
        
        cb.addEventListener('change', function() {
            if (this.checked) {
                localStorage.setItem(this.id, 'checked');
            } else {
                localStorage.removeItem(this.id);
            }
        });
    });
    
    // Add completed class toggle
    document.addEventListener('change', function(e) {
        if (e.target.matches('.todo-item input[type="checkbox"]')) {
            const todoText = e.target.closest('.todo-item').querySelector('.todo-text');
            if (todoText) {
                if (e.target.checked) {
                    todoText.style.textDecoration = 'line-through';
                    todoText.style.color = '#95a5a6';
                } else {
                    todoText.style.textDecoration = 'none';
                    todoText.style.color = '';
                }
            }
        }
    });
});

// Smooth scroll to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Confirm destructive actions
function confirmAction(message) {
    return confirm(message || 'Are you sure?');
}

// Format date helper
function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        timeZone: 'Africa/Johannesburg'
    };
    return new Date(date).toLocaleDateString('en-ZA', options);
}

// Console greeting (for developers)
console.log('%c🧪 Professor Zakeyo Dashboard', 'font-size: 20px; font-weight: bold; color: #2c3e50;');
console.log('%cEducation & Business Management System', 'font-size: 14px; color: #7f8c8d;');
console.log('%cBuilt for Gift - Zero Budget, Maximum Impact', 'font-size: 12px; color: #27ae60;');

// Service worker registration for offline access (future enhancement)
if ('serviceWorker' in navigator) {
    // Service worker can be added later for offline functionality
    console.log('Service worker support available - ready for future offline features.');
}