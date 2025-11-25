// Sample game data - replace with your actual games
const games = [
    {
        id: 1,
        title: "Cyber Legends",
        genre: "RPG",
        rating: 4.8,
        image: "images/game1.jpg", // Replace with actual image path
        description: "Embark on an epic cyberpunk adventure in a dystopian future. Customize your character, build your team, and uncover the secrets of a world ruled by corporations.",
        features: [
            "Open world exploration",
            "Deep character customization",
            "Turn-based combat system",
            "Multiple story paths",
            "Stunning cyberpunk visuals"
        ],
        link: "https://example.com/game1" // Replace with actual game link
    },
    {
        id: 2,
        title: "Space Warriors",
        genre: "Action",
        rating: 4.6,
        image: "images/game2.jpg", // Replace with actual image path
        description: "Command your fleet in intense space battles. Strategize, upgrade your ships, and conquer the galaxy in this action-packed space combat game.",
        features: [
            "Real-time space combat",
            "Fleet management",
            "Multiple game modes",
            "Stunning space environments",
            "Online multiplayer"
        ],
        link: "https://example.com/game2" // Replace with actual game link
    },
    {
        id: 3,
        title: "Fantasy Quest",
        genre: "Adventure",
        rating: 4.9,
        image: "images/game3.jpg", // Replace with actual image path
        description: "Journey through magical realms, battle mythical creatures, and save the kingdom from an ancient evil in this enchanting adventure.",
        features: [
            "Rich fantasy world",
            "Puzzle-solving gameplay",
            "Epic boss battles",
            "Beautiful hand-drawn art",
            "Immersive soundtrack"
        ],
        link: "https://example.com/game3" // Replace with actual game link
    },
    {
        id: 4,
        title: "Racing Pro",
        genre: "Racing",
        rating: 4.5,
        image: "images/game4.jpg", // Replace with actual image path
        description: "Experience the thrill of high-speed racing with realistic physics, stunning graphics, and challenging tracks from around the world.",
        features: [
            "Realistic driving physics",
            "50+ licensed cars",
            "20+ detailed tracks",
            "Online racing leagues",
            "Car customization"
        ],
        link: "https://example.com/game4" // Replace with actual game link
    },
    {
        id: 5,
        title: "Puzzle Master",
        genre: "Puzzle",
        rating: 4.7,
        image: "images/game5.jpg", // Replace with actual image path
        description: "Challenge your mind with hundreds of unique puzzles. From simple brainteasers to complex logic challenges, there's something for everyone.",
        features: [
            "500+ unique puzzles",
            "Progressive difficulty",
            "Daily challenges",
            "Relaxing gameplay",
            "Achievement system"
        ],
        link: "https://example.com/game5" // Replace with actual game link
    },
    {
        id: 6,
        title: "Zombie Survival",
        genre: "Horror",
        rating: 4.4,
        image: "images/game6.jpg", // Replace with actual image path
        description: "Survive the zombie apocalypse in this intense horror survival game. Scavenge for resources, build defenses, and fight off hordes of the undead.",
        features: [
            "Intense survival gameplay",
            "Base building mechanics",
            "Resource management",
            "Co-op multiplayer",
            "Atmospheric horror"
        ],
        link: "https://example.com/game6" // Replace with actual game link
    }
];

// DOM Elements
const introLoader = document.getElementById('intro-loader');
const gamesGrid = document.getElementById('gamesGrid');
const modal = document.getElementById('gameModal');
const closeModal = document.querySelector('.close');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Hide intro loader after 2 seconds
    setTimeout(() => {
        introLoader.classList.add('fade-out');
    }, 2000);

    // Load games
    loadGames();

    // Initialize event listeners
    initializeEventListeners();

    // Initialize mobile menu
    initializeMobileMenu();

    // Initialize smooth scrolling
    initializeSmoothScrolling();

    // Initialize form handlers
    initializeFormHandlers();

    // Initialize rating system
    initializeRatingSystem();
});

// Load games into the grid
function loadGames() {
    gamesGrid.innerHTML = '';
    
    games.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

// Create a game card element
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.onclick = () => openModal(game);
    
    card.innerHTML = `
        <img src="${game.image}" alt="${game.title}" class="game-card-image" 
             onerror="this.src='https://via.placeholder.com/300x200/6366f1/ffffff?text=Game+Image'">
        <div class="game-card-content">
            <h3 class="game-card-title">${game.title}</h3>
            <p class="game-card-genre">${game.genre}</p>
            <div class="game-card-rating">
                ${generateStars(game.rating)}
                <span>${game.rating}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Open modal with game details
function openModal(game) {
    document.getElementById('modalImage').src = game.image;
    document.getElementById('modalImage').alt = game.title;
    document.getElementById('modalTitle').textContent = game.title;
    document.getElementById('modalGenre').textContent = game.genre;
    document.getElementById('modalRating').innerHTML = generateStars(game.rating) + ` ${game.rating}`;
    document.getElementById('modalDescription').textContent = game.description;
    
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    game.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    document.getElementById('modalLink').href = game.link;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModalFunc() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Initialize event listeners
function initializeEventListeners() {
    // Modal close events
    closeModal.addEventListener('click', closeModalFunc);
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModalFunc();
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            closeModalFunc();
        }
    });

    // Handle image errors in modal
    document.getElementById('modalImage').addEventListener('error', function() {
        this.src = 'https://via.placeholder.com/150x150/6366f1/ffffff?text=Game+Image';
    });
}

// Initialize mobile menu
function initializeMobileMenu() {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Initialize smooth scrolling
function initializeSmoothScrolling() {
    // Smooth scroll for anchor links
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

    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll to games section
function scrollToGames() {
    const gamesSection = document.getElementById('games');
    if (gamesSection) {
        gamesSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize form handlers
function initializeFormHandlers() {
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showSuccessMessage('Your message has been sent successfully!');
            contactForm.reset();
        });
    }

    // Feedback form
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showSuccessMessage('Thank you for your feedback!');
            feedbackForm.reset();
            resetRating();
        });
    }
}

// Initialize rating system
function initializeRatingSystem() {
    const stars = document.querySelectorAll('#starRating i');
    const ratingValue = document.getElementById('ratingValue');
    const ratingText = document.getElementById('ratingText');
    
    if (stars.length === 0) return;

    const ratingTexts = ['Click to rate', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.dataset.rating);
            ratingValue.value = rating;
            updateStars(rating);
            ratingText.textContent = ratingTexts[rating];
        });

        star.addEventListener('mouseenter', function() {
            const rating = parseInt(this.dataset.rating);
            updateStars(rating);
            ratingText.textContent = ratingTexts[rating];
        });
    });

    document.getElementById('starRating').addEventListener('mouseleave', function() {
        const currentRating = parseInt(ratingValue.value) || 0;
        updateStars(currentRating);
        ratingText.textContent = ratingTexts[currentRating];
    });
}

// Update stars display
function updateStars(rating) {
    const stars = document.querySelectorAll('#starRating i');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.remove('far');
            star.classList.add('fas', 'active');
        } else {
            star.classList.remove('fas', 'active');
            star.classList.add('far');
        }
    });
}

// Reset rating
function resetRating() {
    const ratingValue = document.getElementById('ratingValue');
    const ratingText = document.getElementById('ratingText');
    
    if (ratingValue) {
        ratingValue.value = 0;
    }
    
    if (ratingText) {
        ratingText.textContent = 'Click to rate';
    }
    
    updateStars(0);
}

// Show success message
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message show';
    successDiv.innerHTML = `
        <div class="success-content">
            <i class="fas fa-check-circle"></i>
            <h3>Success!</h3>
            <p>${message}</p>
        </div>
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(successDiv);
        }, 300);
    }, 3000);
}

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    const floatingCards = document.querySelectorAll('.floating-card');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    floatingCards.forEach((card, index) => {
        const speed = 0.1 + (index * 0.05);
        card.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.02}deg)`;
    });
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.game-card, .stat-card, .contact-card, .info-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.animation = 'fadeIn 0.5s ease';
        });
    });
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (modal.classList.contains('show')) {
        if (e.key === 'ArrowLeft') {
            navigateGame('prev');
        } else if (e.key === 'ArrowRight') {
            navigateGame('next');
        }
    }
});

// Navigate between games in modal
function navigateGame(direction) {
    const currentGameId = parseInt(document.getElementById('modalTitle').dataset.gameId);
    let nextGame;
    
    if (direction === 'prev') {
        nextGame = games.find(g => g.id === currentGameId - 1) || games[games.length - 1];
    } else {
        nextGame = games.find(g => g.id === currentGameId + 1) || games[0];
    }
    
    if (nextGame) {
        openModal(nextGame);
    }
}

// Performance optimization - debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(function() {
    // Scroll-based animations and updates
}, 10));