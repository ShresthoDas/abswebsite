// Sample event data
const eventsData = [
    {
        id: 1,
        title: "Durga Puja 2025 - Mahalaya",
        date: "2025-09-02",
        time: "6:00 AM",
        location: "Community Center, Koregaon Park",
        description: "Join us for the traditional Mahalaya celebration marking the beginning of Durga Puja festivities.",
        category: "puja",
        price: "Free",
        image: "mahalaya",
        maxParticipants: 200,
        registered: 45
    },
    {
        id: 2,
        title: "Sasthi Puja & Kalparambho",
        date: "2025-10-10",
        time: "6:00 PM",
        location: "Community Center, Koregaon Park",
        description: "The official beginning of Durga Puja with Sasthi puja and Kalparambho rituals.",
        category: "puja",
        price: "Free",
        image: "sasthi",
        maxParticipants: 150,
        registered: 32
    },
    {
        id: 3,
        title: "Saptami Puja & Pushpanjali",
        date: "2025-10-11",
        time: "8:00 AM",
        location: "Community Center, Koregaon Park",
        description: "Morning puja followed by traditional pushpanjali ceremony.",
        category: "puja",
        price: "Free",
        image: "saptami",
        maxParticipants: 200,
        registered: 67
    },
    {
        id: 4,
        title: "Ashtami Puja & Kumari Puja",
        date: "2025-10-12",
        time: "9:00 AM",
        location: "Community Center, Koregaon Park",
        description: "Special Ashtami puja with Kumari puja ceremony for young girls.",
        category: "puja",
        price: "Free",
        image: "ashtami",
        maxParticipants: 180,
        registered: 89
    },
    {
        id: 5,
        title: "Navami Puja & Homa",
        date: "2025-10-13",
        time: "10:00 AM",
        location: "Community Center, Koregaon Park",
        description: "Navami puja with special homa ceremony and cultural performances.",
        category: "puja",
        price: "Free",
        image: "navami",
        maxParticipants: 200,
        registered: 123
    },
    {
        id: 6,
        title: "Dashami Puja & Visarjan",
        date: "2025-10-14",
        time: "4:00 PM",
        location: "Community Center, Koregaon Park",
        description: "Final day of Durga Puja with visarjan ceremony and sindoor khela.",
        category: "puja",
        price: "Free",
        image: "dashami",
        maxParticipants: 250,
        registered: 156
    },
    {
        id: 7,
        title: "Rabindra Jayanti Celebration",
        date: "2025-10-25",
        time: "6:00 PM",
        location: "Cultural Hall, Koregaon Park",
        description: "Celebrating the birth anniversary of Rabindranath Tagore with poetry, music, and dance.",
        category: "cultural",
        price: "₹100",
        image: "rabindra",
        maxParticipants: 100,
        registered: 23
    },
    {
        id: 8,
        title: "Bengali Cooking Workshop",
        date: "2025-11-05",
        time: "10:00 AM",
        location: "Community Kitchen, Koregaon Park",
        description: "Learn to cook traditional Bengali dishes with expert chefs.",
        category: "cultural",
        price: "₹500",
        image: "cooking",
        maxParticipants: 20,
        registered: 8
    },
    {
        id: 9,
        title: "Durga Puja Cultural Night",
        date: "2025-10-12",
        time: "7:00 PM",
        location: "Main Stage, Community Center",
        description: "An evening of Bengali music, dance, and drama performances.",
        category: "cultural",
        price: "₹200",
        image: "cultural-night",
        maxParticipants: 300,
        registered: 187
    },
    {
        id: 10,
        title: "Community Picnic",
        date: "2024-11-15",
        time: "9:00 AM",
        location: "Pashan Lake, Pune",
        description: "Annual community picnic with games, food, and cultural activities.",
        category: "social",
        price: "₹300",
        image: "picnic",
        maxParticipants: 150,
        registered: 45
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const upcomingEventsGrid = document.getElementById('events-grid');
const today = new Date();

// Navigation functionality
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Display events in grid
function displayEvents(events, container) {
    if (!container) return;
    
    container.innerHTML = '';
    
    events.forEach(event => {
        const eventCard = createEventCard(event);
        container.appendChild(eventCard);
    });
}

// Create event card element
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card fade-in-up';
    
    const availability = event.maxParticipants - event.registered;
    const isAvailable = availability > 0;
    
    card.innerHTML = `
        <div class="event-image">
            <i class="fas fa-${getEventIcon(event.image)}"></i>
        </div>
        <div class="event-content">
            <div class="event-date">${formatDate(event.date)} at ${event.time}</div>
            <h3 class="event-title">${event.title}</h3>
            <p class="event-description">${event.description}</p>
            <div class="event-meta">
                <span class="event-location">
                    <i class="fas fa-map-marker-alt"></i> ${event.location}
                </span>
                <span class="event-price">${event.price}</span>
            </div>
            <div class="event-availability">
                <small>${availability} spots remaining</small>
            </div>
            <button class="register-btn" ${!isAvailable ? 'disabled' : ''}>
                ${isAvailable ? 'Register Now' : 'Fully Booked'}
            </button>
        </div>
    `;
    
    return card;
}

// Get icon for event
function getEventIcon(imageType) {
    const icons = {
        'mahalaya': 'sun',
        'sasthi': 'moon',
        'saptami': 'star',
        'ashtami': 'heart',
        'navami': 'fire',
        'dashami': 'water',
        'rabindra': 'book',
        'cooking': 'utensils',
        'cultural-night': 'music',
        'picnic': 'tree'
    };
    return icons[imageType] || 'calendar';
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Initialize home page
function initializeHomePage() {
    if (upcomingEventsGrid) {
        // Show only upcoming events (next 3)
       
        const upcomingEvents = eventsData
            .filter(event => new Date(event.date) >= today)
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            ;
        
        displayEvents(upcomingEvents, upcomingEventsGrid);
    }
}

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#ffffff';
            navbar.style.backdropFilter = 'none';
        }
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.about-card, .event-card');
    animatedElements.forEach(el => observer.observe(el));
});

// Membership form functionality
function selectPlan(planType) {
    const formSection = document.querySelector('.membership-form-section');
    if (formSection) {
        // Show the form with animation
        formSection.classList.add('show');
        
        // Scroll to the form smoothly
        setTimeout(() => {
            formSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 100);
        
        // Update the form header to show selected plan
        const formHeader = formSection.querySelector('h2');
        if (formHeader) {
            formHeader.textContent = `Join Our Community - ${planType.charAt(0).toUpperCase() + planType.slice(1)} Plan`;
        }
        
        // Store selected plan in a hidden field or data attribute
        const form = document.getElementById('membership-form');
        if (form) {
            form.setAttribute('data-selected-plan', planType);
        }
    }
}

function resetForm() {
    const form = document.getElementById('membership-form');
    if (form) {
        form.reset();
        form.removeAttribute('data-selected-plan');
    }
}

function resetContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.reset();
    }
}

//event button functionality
const tabButtons = document.querySelectorAll(".tab-btn");
//const events = document.querySelectorAll(".event");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove "active" from all buttons
    tabButtons.forEach(btn => btn.classList.remove("active"));
    
    // Add "active" to clicked button
    button.classList.add("active");
    
    // Get selected category
    const category = button.getAttribute("data-category");
    var categoryEvents = eventsData;
    // Show/Hide events
    if (upcomingEventsGrid) {
        // Show only upcoming events (next 3)
       // const today = new Date();
       if (category === "all") {
         categoryEvents = eventsData
         .filter(event => new Date(event.date) >= today)
         .sort((a, b) => new Date(a.date) - new Date(b.date))
         ;;
       } else {
         categoryEvents = eventsData.filter(event => event.category === category).filter(event => new Date(event.date) >= today)
         .sort((a, b) => new Date(a.date) - new Date(b.date));
       }
      
      
        displayEvents(categoryEvents, upcomingEventsGrid);
    }
    
   
   
  });
});




// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeHomePage);

console.log('Pune Durga Puja Cultural Club website loaded successfully!');
