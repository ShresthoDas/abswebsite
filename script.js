// Sample event data
 
const eventsData = [
    {
        id: 1,
        title: "Mahalaya",
        date: "2025-09-21",
        time: "6:00 AM",
        location: "ABS Pujo Ground, Kharadi",
        description: "Join us for the traditional Mahalaya celebration marking the beginning of Durga Puja festivities.",
        category: "puja",
        price: "Free",
        image: "mahalaya",
        registerRequired: true
    },
    {
        id: 2,
        title: "Anondo Mela & Cultural Programs",
        date: "2025-09-26",
        time: "7:00 PM",
        location: "ABS Pujo Ground, Kharadi",
        description: "Join us for Anondo Mela and other cultural programs to start the festivities.",
        category: "social",
        price: "Free",
        
    },
    {
        id: 3,
        title: "Panchami",
        date: "2025-09-27",
        time: "5:30 PM",
        location: "ABS Pujo Ground, Kharadi",
        description: "Boron of Maa Durga and Garba Night",
        category: "puja",
        price: "Free",
        image: "sasthi"
    },
     {
        id: 4,
        title: "Shosthi",
        date: "2025-09-28",
        time: "9:30 AM",
        PushPanjali : "10:00 AM",
        Lunch : "01:00 PM",
        Arati : "07:00 PM",
        location: "ABS Pujo Ground, Kharadi",
        description: "Shosthi Puja and Pushpanjali followed by community lunch.",
        category: "puja",
        price: "Free only for members",
        image: "sasthi",
        registerRequired: true
    },
    {
        id: 4,
        title: "Saptami Puja & Pushpanjali",
        date: "2025-09-29",
        time: "8:00 AM",
        PushPanjali : "10:00 AM",
        Bhog : "01:00 PM",
        Arati : "07:00 PM",
        location: "ABS Pujo Ground, Kharadi",
        description: "Morning puja followed by traditional pushpanjali ceremony.",
        category: "puja",
        price: "Free",
        image: "saptami"
    },
    {
        id: 5,
        title: "Ashtami Puja & Kumari Puja",
        date: "2025-09-30",
        time: "08:00 AM",
        PushPanjali : "10:00 AM",
        Bhog : "01:00 PM",
        Arati : "07:00 PM",
        location: "ABS Pujo Ground, Kharadi",
        description: "Special Ashtami puja with Kumari puja ceremony for young girls.",
        category: "puja",
        price: "Free",
        image: "ashtami"
    },
    {
        id: 6,
        title: "Sandhi Pujo",
        date: "2025-09-30",
        time: "01:00 PM",
        Boli : "01:45 PM",
        location: "ABS Pujo Ground, Kharadi",
        description: "Sandhi Pujo at the juncture of Ashtami and Navami with traditional boli ceremony.",
        category: "puja",
        price: "Free",
        image: "ashtami"
    },
    {
        id: 7,
        title: "Navami Puja & Homa",
        date: "2025-10-01",
        time: "08:00 AM",
        PushPanjali : "10:00 AM",
        Bhog : "01:00 PM",
        Arati : "07:00 PM",
        location: "ABS Pujo Ground, Kharadi",
        description: "Navami puja with special homa ceremony and cultural performances.",
        category: "puja",
        price: "Free",
        image: "navami"
    },
    {
        id: 8,
        title: "Dashami Puja",
        date: "2025-10-02",
        time: "09:00 AM",
        PushPanjali : "10:00 AM",
        location: "ABS Pujo Ground, Kharadi",
        description: "Final day of Durga Puja with visarjan ceremony and sindoor khela.",
        category: "puja",
        price: "Free",
        image: "dashami"
    },
    {
        id: 8,
        title: "Sindoor Khela",
        date: "2025-10-02",
        time: "11:00 AM",
        PushPanjali : "10:00 AM",
        location: "ABS Pujo Ground, Kharadi",
        description: "Final day of Durga Puja with visarjan ceremony and sindoor khela.",
        category: "puja",
        price: "Free",
        image: "dashami",
        registerRequired: true
    },
     {
        id: 9,
        title: "Protima Visarjan",
        date: "2025-10-02",
        time: "04:00 PM",
        location: "ABS Pujo Ground, Kharadi",
        description: "Visarjan procession and farewell to Maa Durga.",
        category: "puja",
        price: "Free",
        image: "dashami"
    },
    {
        id: 10,
        title: "Dashami Dinner",
        date: "2025-10-02",
        time: "10:00 PM",
        location: "ABS Pujo Ground, Kharadi",
        description: "Community dinner to conclude the Durga Puja celebrations.",
        category: "puja",
        price: "Free",
        image: "dashami",
        registerRequired: true
    },
    {
        id: 11,
        title: "In-House Cultural Night",
        date: "2025-09-28",
        time: "07:00 PM",
        location: "ABS Pujo Ground, Kharadi",
        description: "An evening of cultural performances and community bonding.",
        category: "cultural",
        price: "Free",
        image: "dashami"
    },
    {
        id: 12,
        title: "In-House Cultural Night",
        date: "2025-09-29",
        time: "07:00 PM",
        location: "ABS Pujo Ground, Kharadi",
        description: "An evening of cultural performances and community bonding.",
        category: "cultural",
        price: "Free",
        image: "dashami"
    },
    {
        id: 13,
        title: "Dohaar Live Concert",
        date: "2025-09-30",
        time: "07:00 PM",
        location: "ABS Pujo Ground, Kharadi",
        description: "An evening of cultural performances and community bonding.",
        category: "cultural",
        price: "Free",
        image: "dashami"
    },
    {
        id: 14,
        title: "Ranita Banerjee and Ayan Banerjee Live Concert",
        date: "2025-10-01",
        time: "07:00 PM",
        location: "ABS Pujo Ground, Kharadi",
        description: "An evening of cultural performances and community bonding.",
        category: "cultural",
        price: "Free",
        image: "dashami"
    },
    {
        id: 15,
        title: "Garba Night",
        date: "2025-09-27",
        time: "07:00 PM",
        location: "ABS Pujo Ground, Kharadi",
        description: "An evening of garba dance and festivities for all ages.",
        category: "cultural",
        price: "Free",
        image: "dashami"
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
   // const isAvailable = availability > 0;
   const isAvailable = event.registerRequired ;
    card.innerHTML = `
       
        <div class="event-content">
            <div class="event-date">${formatDate(event.date)} at ${event.time}</div>
            <h3 class="event-title">${event.title}</h3>
            <p class="event-description">${event.description}</p>
            <div class="event-meta">
                <span class="event-location">
                    <i class="fas fa-map-marker-alt"></i> ${event.location}
                </span>
             </div>
            ${isAvailable ? `<button class="register-btn">Register Now</button>` : ''}
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
    return icons[imageType] ;/*|| 'calendar';*/
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

// In the modal form submit handler, save registration to Firebase
function setupEventModalHandlers(title) {
    const modal = document.getElementById('event-modal-'+title);
    const form = document.getElementById('event-register-form-'+title);
    const eventRegistrations = "/UAT/Events/2025/Registrations/";
    if (!form) return;
    document.getElementById('event-modal-close').onclick = function() {
        modal.style.display = 'none';
        form.reset();
    };
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            form.reset();
        }
    };
    form.onsubmit = function(ev) {
        ev.preventDefault();
        // Get form values
        const memberId = document.getElementById('event-member-id').value;
        const memberName = document.getElementById('event-member-name').value;
        const participants = document.getElementById('event-participants').value;
        const eventDetails = document.getElementById('event-details').value;
        // Save to Firebase
        const database = firebase.database();
        const newRegRef = database.ref(eventRegistrations).push();
        newRegRef.set({
            memberId,
            memberName,
            participants,
            eventDetails,
            key : newRegRef.key
        })
        .then(() => {
            alert('Registration submitted!');
            modal.style.display = 'none';
            form.reset();
        })
        .catch((error) => {
            alert('Error submitting registration: ' + error.message);
        });
    };
}

// Load event registration modal from external file
function loadEventModal(callback) {
    // Only load if not already loaded
    if (document.querySelector('[id^="event-modal"]')) {
        if (callback) callback();
        return;
    }
    fetch('events-modal.html')
        .then(response => response.text())
        .then(html => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            // Append all modals with id starting with 'event-modal' to body
            tempDiv.querySelectorAll('[id^="event-modal"]').forEach(modal => {
                document.body.appendChild(modal);
            });
            if (callback) callback();
        });
}

document.addEventListener('DOMContentLoaded', function() {
    // Attach to all register-btns
    document.body.addEventListener('click', function(e) {
        if (e.target.classList.contains('register-btn')) {
            loadEventModal(function() {
                                // Prefill event details
                                const card = e.target.closest('.event-card');
                                let title = card.querySelector('.event-title').textContent;
                                
                                // Normalize event title for modal/form ID (lowercase, trim, remove non-alphanum)
                                let normalized = title.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().trim();
                                let modalId = 'event-modal-' + normalized;
                                let formId = 'event-register-form-' + normalized;
                                let closeBtnId = 'event-modal-close-' + normalized;
                                let modal = document.getElementById(modalId);
                                let form = document.getElementById(formId);
                                let closeBtn = document.getElementById(closeBtnId);
                                const eventRegistrations = "/UAT/Events/2025/Registrations/" + normalized;
                               
                                // Fallback to generic modal if not found
                                if (!modal || !form || !closeBtn) {
                                    console.warn('[DEBUG] Falling back to generic modal/form/closeBtn');
                                    modal = document.getElementById('event-modal');
                                    form = document.getElementById('event-register-form');
                                    closeBtn = document.getElementById('event-modal-close');
                                }
                                if (!modal || !form || !closeBtn) {
                                    console.error('[DEBUG] Modal, form, or close button not found:', {modalId, formId, closeBtnId});
                                    alert('Registration form not found for this event.');
                                    return;
                                }
                modal.style.display = 'block';
                modal.querySelector('#modal-event-title').textContent = 'Register for ' + title;
                modal.querySelector('#event-details').value = title;
                // Setup handlers for this modal
                form.onsubmit = function(ev) {
                    ev.preventDefault();
                    // Save to Firebase
                    const database = firebase.database();
                    const newRegRef = database.ref(eventRegistrations).push();

                    // Get form values
                    const memberId = modal.querySelector('#event-member-id').value;
                    const memberName = modal.querySelector('#event-member-name').value;
                    const eventDetails = modal.querySelector('#event-details').value;
                    var vegParticipants = 0;
                    var nonVegParticipants =0;
                    var participants = 0;
        
                    console.log("Normalized Event Title: ", normalized);

                    if (normalized === 'shosthi') {
                        vegParticipants = modal.querySelector('#event-participants').value;
                         
                    } else  if (normalized === 'dashamidinner') {
                        vegParticipants = modal.querySelector('#event-participants-veg').value;
                       nonVegParticipants = modal.querySelector('#event-participants-nonveg').value;
                       
                    } else {
                         participants = modal.querySelector('#event-participants').value;
                        
                    }

                    
                    
                    newRegRef.set({
                        memberId,
                        memberName,
                        vegParticipants,
                        nonVegParticipants,
                        participants,
                        eventDetails,
                        key : newRegRef.key
                    })
                    .then(() => {
                        alert('Registration submitted!');
                        modal.style.display = 'none';
                        form.reset();
                    })
                    .catch((error) => {
                        alert('Error submitting registration: ' + error.message);
                    });
                };
                // Close logic
                closeBtn.onclick = function() {
                    modal.style.display = 'none';
                    form.reset();
                };
                window.onclick = function(event) {
                    if (event.target === modal) {
                        modal.style.display = 'none';
                        form.reset();
                    }
                };
            });
        }
    });
});

// Firebase related functions
function saveMembers(){
    const members = "/UAT/Accounts/2025/UnauthMembers/";
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const database = firebase.database();
    const form = document.getElementById('membership-form');
    // Remove any existing submit listeners before adding a new one
    if (form) {
        form.removeEventListener('submit', window._membershipSubmitHandler);
        window._membershipSubmitHandler = function(e) {
            e.preventDefault();
            const newMemberRef = database.ref(members).push();
            const key = newMemberRef.key;
            console.log("Generated Key: ", key);
            const data = {
                firstName: form.memberName.value,
                email: form.memberEmail.value,
                mobileNo: form.memberPhone.value,
                pan: form.memberPan.value,
                address: form.memberAddress.value + ', ' + form.memberCity.value + ' - ' + form.memberPincode.value,
                secondName: form.familyMembers.value,
                memberId: "0",
                amount: "8000",
                paymentStatus: "Y",
                key: key
            };
            newMemberRef.set(data)
                .then(() => {
                    alert('Membership application submitted!');
                    form.reset();
                })
                .catch((error) => {
                    alert('Error submitting application: ' + error.message);
                });
        };
        form.addEventListener('submit', window._membershipSubmitHandler);
    }
}





// Initialize the page when DOM is loaded

document.addEventListener('DOMContentLoaded', function() {
    initializeHomePage();
    saveMembers();
  //  eventRegistration();
});

console.log('Pune Durga Puja Cultural Club website loaded successfully!');
