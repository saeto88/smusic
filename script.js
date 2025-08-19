// Global state
let currentScreen = 'landing';
let onboardingStep = 0;
let planStep = 1;
let userProfile = {
    name: '',
    musicPreferences: [],
    socialStyle: '',
    notifications: true,
    level: 3,
    xp: 750,
    achievements: ['rockero-total', 'organizador-vip'],
    eventsAttended: 12,
    friends: 8
};

// Budget calculator state
let budgetData = {
    tickets: { quantity: 2, unitPrice: 600, total: 1200 },
    fees: { price: 120 },
    transport: { type: 'uber', price: 300 },
    dinner: { quantity: 2, unitPrice: 200, total: 400 },
    drinks: { quantity: 4, unitPrice: 80, total: 320 },
    merchandise: { price: 150 },
    afterParty: { enabled: false, price: 400 }
};

// Events data
let eventsData = [
    {
        id: 1,
        title: "Bad Bunny World Tour",
        date: "2024-11-25",
        time: "21:00",
        venue: "Foro Sol",
        category: "music",
        price: 1500,
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop",
        description: "El conejo malo regresa a México con su tour mundial más esperado."
    },
    {
        id: 2,
        title: "Exposición Frida Kahlo",
        date: "2024-11-28",
        time: "10:00",
        venue: "Museo de Arte Moderno",
        category: "art",
        price: 250,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
        description: "Una retrospectiva completa de la vida y obra de Frida Kahlo."
    },
    {
        id: 3,
        title: "Festival Gastronómico CDMX",
        date: "2024-12-01",
        time: "12:00",
        venue: "Parque México",
        category: "food",
        price: 300,
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=200&fit=crop",
        description: "Los mejores chefs de la ciudad en un solo lugar."
    },
    {
        id: 4,
        title: "Pumas vs América",
        date: "2024-11-30",
        time: "19:00",
        venue: "Estadio Olímpico",
        category: "sports",
        price: 800,
        image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=200&fit=crop",
        description: "El clásico capitalino más esperado del año."
    },
    {
        id: 5,
        title: "Zoé - Reptilectric Tour",
        date: "2024-11-23",
        time: "21:00",
        venue: "Foro Sol",
        category: "music",
        price: 650,
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop",
        description: "El regreso triunfal de una de las bandas más importantes del rock mexicano."
    },
    {
        id: 6,
        title: "Stand Up Comedy Night",
        date: "2024-11-27",
        time: "20:30",
        venue: "Teatro Metropolitano",
        category: "art",
        price: 400,
        image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=200&fit=crop",
        description: "Una noche llena de risas con los mejores comediantes del país."
    },
    {
        id: 7,
        title: "Manu Chao en México",
        date: "2024-12-05",
        time: "20:00",
        venue: "Palacio de los Deportes",
        category: "music",
        price: 950,
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop",
        description: "El icónico músico francés regresa con su energía única."
    },
    {
        id: 8,
        title: "Festival de Cine de Horror",
        date: "2024-12-10",
        time: "18:00",
        venue: "Cineteca Nacional",
        category: "art",
        price: 150,
        image: "https://images.unsplash.com/photo-1489599763544-e2ad5bf4fe8e?w=400&h=200&fit=crop",
        description: "Las mejores películas de terror contemporáneo."
    },
    {
        id: 9,
        title: "Mercado de Navidad Polanco",
        date: "2024-12-15",
        time: "10:00",
        venue: "Antara Fashion Hall",
        category: "food",
        price: 50,
        image: "https://images.unsplash.com/photo-1543083477-4f785aeafaa9?w=400&h=200&fit=crop",
        description: "Mercado navideño con artesanías y comida típica."
    },
    {
        id: 10,
        title: "Torneo de eSports CDMX",
        date: "2024-12-20",
        time: "14:00",
        venue: "Arena Ciudad de México",
        category: "sports",
        price: 200,
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop",
        description: "Competencia de League of Legends y Valorant."
    },
    {
        id: 11,
        title: "Jesse & Joy Acústico",
        date: "2024-12-08",
        time: "20:30",
        venue: "Teatro Metropolitan",
        category: "music",
        price: 750,
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop",
        description: "Concierto íntimo con sus grandes éxitos."
    },
    {
        id: 12,
        title: "Noche de Museos Gratis",
        date: "2024-11-29",
        time: "19:00",
        venue: "Múltiples museos",
        category: "art",
        price: 0,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
        description: "Recorrido gratuito por los mejores museos de la ciudad."
    }
];

// Friend activities data
let friendActivities = [
    "Ana se unió al Festival de Jazz",
    "Miguel creó un plan para Bad Bunny",
    "Sofía marcó como favorito el Mercado Navideño",
    "Carlos invitó amigos a Pumas vs América",
    "Laura planifica ir al Festival de Cine",
    "Diego se apuntó a Jesse & Joy Acústico",
    "Carla organizó grupo para Manu Chao",
    "Roberto agregó el Torneo de eSports",
    "Valentina invitó amigas a Noche de Museos",
    "Andrés creó plan para Stand Up Comedy",
    "Marina compró boletos para el Festival Gastronómico",
    "Javier invitó al grupo a ver Zoé",
    "Paola marcó el mercado navideño como favorito",
    "Ricardo planifica el after para Bad Bunny",
    "Camila organizó cena pre-concierto Jesse & Joy",
    "Sebastián creó grupo para el torneo de eSports",
    "Isabella sugirió restaurante cerca del Foro Sol",
    "Fernando compartió presupuesto para Manu Chao"
];

// Weekly challenges
let weeklyChallenges = [
    {
        title: "Explorador Cultural",
        description: "Asiste a 2 eventos culturales diferentes esta semana",
        progress: 50,
        reward: 300,
        icon: "🎭"
    },
    {
        title: "Foodie Social",
        description: "Prueba 3 restaurantes nuevos con amigos",
        progress: 33,
        reward: 250,
        icon: "🍽️"
    },
    {
        title: "Música en Vivo",
        description: "Ve a 2 conciertos este mes",
        progress: 75,
        reward: 400,
        icon: "🎵"
    },
    {
        title: "Organizador Pro",
        description: "Crea 3 planes grupales exitosos",
        progress: 67,
        reward: 500,
        icon: "👥"
    },
    {
        title: "Presupuesto Maestro",
        description: "Usa la calculadora en 5 eventos",
        progress: 80,
        reward: 200,
        icon: "💰"
    },
    {
        title: "Aventurero Nocturno",
        description: "Explora 3 eventos después de las 9 PM",
        progress: 40,
        reward: 350,
        icon: "🌙"
    },
    {
        title: "Networking Master",
        description: "Conecta con 10 nuevos amigos este mes",
        progress: 60,
        reward: 450,
        icon: "🤝"
    },
    {
        title: "Cazador de Ofertas",
        description: "Encuentra 5 eventos con descuento",
        progress: 20,
        reward: 150,
        icon: "💸"
    }
];

let currentChallengeIndex = 0;

// Screen management
function showScreen(screenId) {
    // Hide all screens first
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show the requested screen
    const targetScreen = document.getElementById(screenId);
    
    if (targetScreen) {
        targetScreen.classList.add('active');
        currentScreen = screenId;
        
        // Update navigation
        updateNavigation(screenId);
        
        // Update breadcrumb
        updateBreadcrumb(screenId);
        
        // Initialize screen-specific content
        if (screenId === 'explore') {
            initializeExploreScreen();
        } else if (screenId === 'calendar') {
            generateCalendar();
        } else if (screenId === 'profile') {
            updateProfileData();
        }
    }
}

function updateNavigation(screenId) {
    // Update bottom navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const navMap = {
        dashboard: 0,
        explore: 1,
        calendar: 2,
        profile: 3
    };
    
    const navItems = document.querySelectorAll('.nav-item');
    if (navMap[screenId] !== undefined && navItems[navMap[screenId]]) {
        navItems[navMap[screenId]].classList.add('active');
    }
    
    // Update top navigation
    document.querySelectorAll('.navbar-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const topNavMap = {
        dashboard: 0,
        explore: 1,
        calendar: 2
    };
    
    const topNavItems = document.querySelectorAll('.navbar-link');
    if (topNavMap[screenId] !== undefined && topNavItems[topNavMap[screenId]]) {
        topNavItems[topNavMap[screenId]].classList.add('active');
    }
}

// Landing page functionality
function startOnboarding() {
    showScreen('onboarding');
    initializeOnboarding();
}

// Onboarding functionality
function initializeOnboarding() {
    onboardingStep = 0;
    showOnboardingStep();
}

const onboardingSteps = [
    {
        message: "¡Hola! Soy Sparky, tu asistente personal de planes. Para encontrar las mejores experiencias para ti, necesito conocerte un poco. ¿Empezamos por la música? 🎵",
        options: [
            { icon: "🎵", title: "Conectar Spotify", subtitle: "Análisis automático de gustos", action: "spotify" },
            { icon: "🍎", title: "Conectar Apple Music", subtitle: "Importar biblioteca musical", action: "apple" },
            { icon: "✋", title: "Elegir manualmente", subtitle: "Seleccionar géneros favoritos", action: "manual" }
        ]
    },
    {
        message: "¡Perfecto! Analizando tus gustos... Veo que te encanta el Indie Rock pero también tienes un placer culpable con el Pop de los 90. ¡Lo tengo en cuenta! 😉",
        delay: 2000,
        auto: true
    },
    {
        message: "Ahora, ¿cómo es tu fin de semana ideal? 🌴",
        options: [
            { icon: "🎸", title: "Noche de Concierto", subtitle: "Live music y energía", action: "concert" },
            { icon: "🎨", title: "Arte y Museos", subtitle: "Cultura y contemplación", action: "art" },
            { icon: "🌲", title: "Aventura al Aire Libre", subtitle: "Naturaleza y actividades", action: "outdoor" },
            { icon: "🥂", title: "Brunch y Amigos", subtitle: "Social y relajado", action: "social" },
            { icon: "🎬", title: "Cine y Series", subtitle: "Entretenimiento íntimo", action: "entertainment" }
        ]
    },
    {
        message: "¡Entendido! Veo que eres un alma aventurera que disfruta tanto de la cultura como de la música en vivo. ¿Cuál es tu nombre para personalizar tu experiencia?",
        input: true,
        placeholder: "Escribe tu nombre..."
    },
    {
        message: "¡Genial, [NAME]! Por último, para que no te pierdas nada increíble, ¿me permites enviarte notificaciones inteligentes cuando encuentre eventos perfectos para ti?",
        options: [
            { icon: "🔔", title: "Sí, sorpréndeme", subtitle: "Recibe recomendaciones proactivas", action: "notifications_yes" },
            { icon: "🔕", title: "Ahora no", subtitle: "Puedes activarlas después", action: "notifications_no" }
        ]
    }
];

function showOnboardingStep() {
    const chatMessages = document.getElementById('chatMessages');
    const chatInputArea = document.getElementById('chatInputArea');
    const progressFill = document.getElementById('progressFill');
    const currentStepSpan = document.getElementById('currentStep');
    
    const step = onboardingSteps[onboardingStep];
    
    // Update progress
    const progress = ((onboardingStep + 1) / onboardingSteps.length) * 100;
    progressFill.style.width = progress + '%';
    currentStepSpan.textContent = onboardingStep + 1;
    
    // Add AI message
    setTimeout(() => {
        addMessage(step.message, 'ai');
        
        // Handle different step types
        if (step.options) {
            showOptions(step.options);
        } else if (step.input) {
            showInput(step.placeholder);
        } else if (step.auto) {
            setTimeout(() => {
                nextOnboardingStep();
            }, step.delay || 1000);
        }
    }, 500);
}

function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    if (sender === 'ai') {
        messageDiv.innerHTML = `
            <div class="message-avatar">🤖</div>
            <div class="message-content">${text}</div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-content">${text}</div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showOptions(options) {
    const chatInputArea = document.getElementById('chatInputArea');
    chatInputArea.innerHTML = `
        <div class="chat-options">
            ${options.map(option => `
                <button class="option-button" onclick="selectOption('${option.action}', '${option.title}')">
                    <div class="option-icon">${option.icon}</div>
                    <div class="option-text">
                        <h4>${option.title}</h4>
                        <p>${option.subtitle}</p>
                    </div>
                </button>
            `).join('')}
        </div>
    `;
}

function showInput(placeholder) {
    const chatInputArea = document.getElementById('chatInputArea');
    chatInputArea.innerHTML = `
        <div class="input-group">
            <input type="text" placeholder="${placeholder}" id="nameInput" onkeypress="handleNameInput(event)">
            <button class="btn-primary" onclick="submitName()" style="margin-top: 1rem; width: 100%;">Continuar</button>
        </div>
    `;
    document.getElementById('nameInput').focus();
}

function selectOption(action, title) {
    // Add user message
    addMessage(title, 'user');
    
    // Store user preference
    switch(action) {
        case 'spotify':
        case 'apple':
        case 'manual':
            userProfile.musicSource = action;
            break;
        case 'concert':
        case 'art':
        case 'outdoor':
        case 'social':
        case 'entertainment':
            userProfile.socialStyle = action;
            break;
        case 'notifications_yes':
            userProfile.notifications = true;
            break;
        case 'notifications_no':
            userProfile.notifications = false;
            break;
    }
    
    setTimeout(() => {
        nextOnboardingStep();
    }, 1000);
}

function handleNameInput(event) {
    if (event.key === 'Enter') {
        submitName();
    }
}

function submitName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    
    if (name) {
        userProfile.name = name;
        addMessage(name, 'user');
        
        // Update next message with user name
        if (onboardingSteps[onboardingStep + 1]) {
            onboardingSteps[onboardingStep + 1].message = 
                onboardingSteps[onboardingStep + 1].message.replace('[NAME]', name);
        }
        
        setTimeout(() => {
            nextOnboardingStep();
        }, 1000);
    }
}

function nextOnboardingStep() {
    onboardingStep++;
    
    if (onboardingStep < onboardingSteps.length) {
        showOnboardingStep();
    } else {
        completeOnboarding();
    }
}

function completeOnboarding() {
    // Final message
    addMessage(`¡Perfecto ${userProfile.name}! Tu perfil está listo. Ahora voy a crear tu dashboard personalizado con eventos que te van a encantar...`, 'ai');
    
    // Update dashboard with user name
    setTimeout(() => {
        document.getElementById('userName').textContent = userProfile.name;
        document.getElementById('profileName').textContent = userProfile.name;
        
        // Update navbar with user info
        document.getElementById('navUserName').textContent = userProfile.name;
        document.getElementById('navUserInitial').textContent = userProfile.name.charAt(0).toUpperCase();
        
        // Show top navbar
        document.getElementById('topNavbar').style.display = 'flex';
        
        showScreen('dashboard');
        showWelcomeNotification();
        
        // Initialize all screens now that onboarding is complete
        initializeExploreScreen();
        initializeCalendarScreen();
        initializeProfileScreen();
        
        // Add enhanced navigation features
        addBreadcrumbNavigation();
        addQuickActions();
    }, 3000);
}

function showWelcomeNotification() {
    const notification = document.getElementById('successNotification');
    notification.querySelector('.notification-text h4').textContent = `¡Bienvenido ${userProfile.name}!`;
    notification.querySelector('.notification-text p').textContent = 'Tu dashboard personalizado está listo';
    showNotification();
}

// Dashboard functionality
function createPlan(eventId) {
    const modal = document.getElementById('planModal');
    modal.classList.add('active');
    planStep = 1;
    showPlanStep();
}

function closePlanModal() {
    const modal = document.getElementById('planModal');
    modal.classList.remove('active');
}

function showPlanStep() {
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById(`step${planStep}`).classList.add('active');
}

function nextStep() {
    planStep++;
    showPlanStep();
}

function createFinalPlan() {
    // Simulate plan creation
    closePlanModal();
    
    setTimeout(() => {
        const notification = document.getElementById('successNotification');
        showNotification();
    }, 500);
}

function showNotification() {
    const notification = document.getElementById('successNotification');
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}

// Interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to bento cards
    document.querySelectorAll('.bento-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click handlers for navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all nav items
            document.querySelectorAll('.nav-item').forEach(navItem => {
                navItem.classList.remove('active');
            });
            
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
    
    // Add realistic typing animation for chat
    const originalAddMessage = addMessage;
    addMessage = function(text, sender) {
        if (sender === 'ai') {
            // Show typing indicator
            const chatMessages = document.getElementById('chatMessages');
            const typingDiv = document.createElement('div');
            typingDiv.className = 'message ai typing-indicator';
            typingDiv.innerHTML = `
                <div class="message-avatar">🤖</div>
                <div class="message-content">
                    <div class="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            `;
            chatMessages.appendChild(typingDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            // Remove typing indicator and show actual message
            setTimeout(() => {
                typingDiv.remove();
                originalAddMessage(text, sender);
            }, 1000 + Math.random() * 1000);
        } else {
            originalAddMessage(text, sender);
        }
    };
    
    // Add pulse animation to CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        setInterval(() => {
            ctaButton.style.transform = 'scale(1.05)';
            setTimeout(() => {
                ctaButton.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }
    
    // Simulate real-time updates
    setTimeout(() => {
        if (currentScreen === 'dashboard') {
            // Update notification count
            const notificationCount = document.querySelector('.notification-count');
            if (notificationCount) {
                const currentCount = parseInt(notificationCount.textContent);
                notificationCount.textContent = currentCount + 1;
                
                // Add pulse animation
                notificationCount.style.animation = 'pulse 0.5s ease-in-out';
                setTimeout(() => {
                    notificationCount.style.animation = '';
                }, 500);
            }
        }
    }, 10000);
    
    // Add smooth scrolling for mobile
    document.addEventListener('touchstart', function() {}, {passive: true});
    
    // Add click outside modal to close
    document.getElementById('planModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closePlanModal();
        }
    });
    
    // Add click outside to close budget modal
    document.getElementById('budgetModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeBudgetCalculator();
        }
    });
    
    // Add click outside to close stats modal
    document.getElementById('statsModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeStatsModal();
        }
    });
    
    // Add escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePlanModal();
            closeBudgetCalculator();
            closeStatsModal();
        }
    });
    
    // Add content rotation functions
    function rotateFriendActivity() {
        const friendCard = document.querySelector('.friend-activity');
        if (!friendCard) return;
        
        const activityText = friendCard.querySelector('p');
        if (!activityText) return;
        
        // Get random activity that's different from current
        const currentActivity = activityText.textContent;
        let newActivity;
        do {
            newActivity = friendActivities[Math.floor(Math.random() * friendActivities.length)];
        } while (newActivity === currentActivity && friendActivities.length > 1);
        
        // Smooth transition
        activityText.style.opacity = '0.5';
        setTimeout(() => {
            activityText.textContent = newActivity;
            activityText.style.opacity = '1';
        }, 300);
    }
    
    function rotateWeeklyChallenge() {
        const challengeCard = document.querySelector('.weekly-challenge');
        if (!challengeCard) return;
        
        // Move to next challenge
        currentChallengeIndex = (currentChallengeIndex + 1) % weeklyChallenges.length;
        const newChallenge = weeklyChallenges[currentChallengeIndex];
        
        // Update challenge content
        const icon = challengeCard.querySelector('.challenge-icon');
        const title = challengeCard.querySelector('h4');
        const description = challengeCard.querySelector('p');
        const progressBar = challengeCard.querySelector('.progress-fill');
        const progressText = challengeCard.querySelector('.progress-text');
        
        if (icon) icon.textContent = newChallenge.icon;
        if (title) title.textContent = newChallenge.title;
        if (description) description.textContent = newChallenge.description;
        if (progressBar) progressBar.style.width = newChallenge.progress + '%';
        if (progressText) progressText.textContent = newChallenge.progress + '% completado';
    }
    
    // Initialize content rotation for dashboard
    setTimeout(() => {
        setInterval(rotateFriendActivity, 8000); // Every 8 seconds
        setInterval(rotateWeeklyChallenge, 12000); // Every 12 seconds
    }, 3000);
});

// CSS animations for typing indicator
const style = document.createElement('style');
style.textContent = `
    .typing-indicator .message-content {
        padding: 1rem 1.25rem 0.8rem;
    }
    
    .typing-dots {
        display: flex;
        gap: 4px;
    }
    
    .typing-dots span {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ccc;
        animation: typing 1.4s ease-in-out infinite;
    }
    
    .typing-dots span:nth-child(2) {
        animation-delay: 0.2s;
    }
    
    .typing-dots span:nth-child(3) {
        animation-delay: 0.4s;
    }
    
    @keyframes typing {
        0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.5;
        }
        30% {
            transform: translateY(-10px);
            opacity: 1;
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
    }
`;
document.head.appendChild(style);

// Add service worker for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Simulate AI recommendations
function updateRecommendations() {
    if (currentScreen === 'dashboard' && userProfile.name) {
        // Simulate new event recommendation
        const events = [
            {
                title: "Bad Bunny en el Foro Sol",
                date: "Viernes 29 Nov • 21:00",
                reason: "Basado en tu gusto por el reggaeton y 5 amigos interesados"
            },
            {
                title: "Festival Cervantino",
                date: "Domingo 1 Dec • 19:00", 
                reason: "Perfecto para tu amor por la cultura y el arte"
            },
            {
                title: "Café Tacvba Unplugged",
                date: "Miércoles 4 Dec • 20:30",
                reason: "Recomendado por tu perfil de rock alternativo mexicano"
            }
        ];
        
        // Randomly update main recommendation every 30 seconds
        setInterval(() => {
            const randomEvent = events[Math.floor(Math.random() * events.length)];
            const mainEventCard = document.querySelector('.main-event');
            if (mainEventCard) {
                const title = mainEventCard.querySelector('h3');
                const date = mainEventCard.querySelector('.event-date');
                const reason = mainEventCard.querySelector('.ai-reason');
                
                if (title && date && reason) {
                    title.textContent = randomEvent.title;
                    date.textContent = randomEvent.date;
                    reason.textContent = randomEvent.reason;
                }
            }
        }, 30000);
    }
}

// Initialize recommendations when dashboard loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(updateRecommendations, 5000);
    
    // Initialize all screens
    initializeExploreScreen();
    initializeCalendarScreen();
    initializeProfileScreen();
});

// Budget Calculator Functions
function showBudgetCalculator() {
    const modal = document.getElementById('budgetModal');
    modal.classList.add('active');
    updateBudgetCalculations();
}

function closeBudgetCalculator() {
    const modal = document.getElementById('budgetModal');
    modal.classList.remove('active');
}

function updateQuantity(item, change) {
    const quantities = {
        tickets: { element: 'ticketsQuantity', price: 'ticketsPrice', unitPrice: 600 },
        dinner: { element: 'dinnerQuantity', price: 'dinnerPrice', unitPrice: 200 },
        drinks: { element: 'drinksQuantity', price: 'drinksPrice', unitPrice: 80 }
    };
    
    const config = quantities[item];
    if (!config) return;
    
    const quantityElement = document.getElementById(config.element);
    const priceElement = document.getElementById(config.price);
    
    let currentQuantity = parseInt(quantityElement.textContent);
    currentQuantity = Math.max(0, currentQuantity + change);
    
    quantityElement.textContent = currentQuantity;
    const totalPrice = currentQuantity * config.unitPrice;
    priceElement.textContent = totalPrice;
    
    // Update budget data
    budgetData[item].quantity = currentQuantity;
    budgetData[item].total = totalPrice;
    
    updateBudgetCalculations();
}

function updateTransport(type) {
    const prices = {
        uber: 300,
        metro: 40,
        car: 200
    };
    
    budgetData.transport.type = type;
    budgetData.transport.price = prices[type];
    updateBudgetCalculations();
}

function updateMerchandise(value) {
    document.getElementById('merchandisePrice').textContent = value;
    budgetData.merchandise.price = parseInt(value);
    updateBudgetCalculations();
}

function toggleAfterParty(enabled) {
    budgetData.afterParty.enabled = enabled;
    document.getElementById('afterPartyPrice').textContent = enabled ? budgetData.afterParty.price : 0;
    updateBudgetCalculations();
}

function updateBudgetCalculations() {
    let subtotal = 0;
    
    // Calculate subtotal
    subtotal += budgetData.tickets.total;
    subtotal += budgetData.fees.price;
    subtotal += budgetData.transport.price;
    subtotal += budgetData.dinner.total;
    subtotal += budgetData.drinks.total;
    subtotal += budgetData.merchandise.price;
    if (budgetData.afterParty.enabled) {
        subtotal += budgetData.afterParty.price;
    }
    
    const people = budgetData.tickets.quantity || 1;
    const perPerson = Math.round(subtotal / people);
    
    // Update UI
    document.getElementById('subtotal').textContent = subtotal;
    document.getElementById('perPerson').textContent = perPerson;
    document.getElementById('grandTotal').textContent = subtotal;
}

function shareBudget() {
    const total = document.getElementById('grandTotal').textContent;
    const perPerson = document.getElementById('perPerson').textContent;
    
    if (navigator.share) {
        navigator.share({
            title: 'Presupuesto del Evento - Plan Saver',
            text: `💰 Presupuesto para Zoé en el Foro Sol\nTotal: $${total}\nPor persona: $${perPerson}\n\n¡Planificado con Plan Saver!`,
            url: window.location.href
        });
    } else {
        // Fallback - copy to clipboard
        const text = `💰 Presupuesto para Zoé en el Foro Sol\nTotal: $${total}\nPor persona: $${perPerson}\n\n¡Planificado con Plan Saver!`;
        navigator.clipboard.writeText(text).then(() => {
            showNotificationMessage('Presupuesto copiado al portapapeles');
        });
    }
}

function saveBudget() {
    // Simulate saving budget
    showNotificationMessage('Presupuesto guardado exitosamente');
    closeBudgetCalculator();
}

function splitEqually() {
    const total = document.getElementById('grandTotal').textContent;
    const people = budgetData.tickets.quantity;
    const perPerson = Math.round(parseInt(total) / people);
    
    showNotificationMessage(`Dividido equitativamente: $${perPerson} por persona`);
}

function splitCustom() {
    // This would open a more detailed splitting interface
    showNotificationMessage('Función de división personalizada próximamente');
}

// Explore Screen Functions
function initializeExploreScreen() {
    populateEventsGrid();
    
    // Add search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterEvents(this.value);
        });
    }
    
    // Add filter tab functionality
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            filterEventsByCategory(this.dataset.filter);
        });
    });
}

function populateEventsGrid() {
    const eventsGrid = document.getElementById('eventsGrid');
    if (!eventsGrid) return;
    
    eventsGrid.innerHTML = '';
    
    eventsData.forEach(event => {
        const eventCard = createEventCard(event);
        eventsGrid.appendChild(eventCard);
    });
}

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
        <div class="event-card-image" style="background-image: url('${event.image}')">
            <div class="event-category">${getCategoryName(event.category)}</div>
        </div>
        <div class="event-card-content">
            <h4>${event.title}</h4>
            <div class="event-card-meta">
                <span>${formatEventDate(event.date)} • ${event.time}</span>
                <span class="event-card-price">$${event.price}</span>
            </div>
            <p>${event.venue}</p>
            <div class="event-card-actions">
                <button class="btn-primary" onclick="createPlan('${event.id}')">Crear Plan</button>
                <button class="btn-secondary" onclick="showBudgetCalculator()">💰</button>
                <button class="btn-secondary">💖</button>
            </div>
        </div>
    `;
    
    return card;
}

function getCategoryName(category) {
    const names = {
        music: 'Música',
        art: 'Arte',
        food: 'Gastronomía',
        sports: 'Deportes'
    };
    return names[category] || category;
}

function formatEventDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        weekday: 'short', 
        day: 'numeric', 
        month: 'short' 
    };
    return date.toLocaleDateString('es-MX', options);
}

function filterEvents(searchTerm) {
    const cards = document.querySelectorAll('.event-card');
    cards.forEach(card => {
        const title = card.querySelector('h4').textContent.toLowerCase();
        const venue = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm.toLowerCase()) || venue.includes(searchTerm.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterEventsByCategory(category) {
    if (category === 'all') {
        populateEventsGrid();
        return;
    }
    
    const filteredEvents = eventsData.filter(event => event.category === category);
    const eventsGrid = document.getElementById('eventsGrid');
    eventsGrid.innerHTML = '';
    
    filteredEvents.forEach(event => {
        const eventCard = createEventCard(event);
        eventsGrid.appendChild(eventCard);
    });
}

// Calendar Screen Functions
function initializeCalendarScreen() {
    generateCalendar();
}

function generateCalendar() {
    const calendarGrid = document.querySelector('.calendar-grid');
    if (!calendarGrid) return;
    
    // Keep existing headers, generate days
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    // Get first day of month and number of days
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    // Clear existing days (keep headers)
    const existingDays = calendarGrid.querySelectorAll('.calendar-day');
    existingDays.forEach(day => day.remove());
    
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day empty';
        calendarGrid.appendChild(emptyDay);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        // Mark today
        if (day === today.getDate()) {
            dayElement.classList.add('today');
        }
        
        // Add events markers (simulate some events)
        if ([18, 23, 30].includes(day)) {
            dayElement.classList.add('has-event');
        }
        
        dayElement.addEventListener('click', () => {
            selectCalendarDay(dayElement, day);
        });
        
        calendarGrid.appendChild(dayElement);
    }
}

function selectCalendarDay(element, day) {
    // Remove previous selection
    document.querySelectorAll('.calendar-day.selected').forEach(d => {
        d.classList.remove('selected');
    });
    
    // Add selection to clicked day
    element.classList.add('selected');
    
    // Show day details (simulate)
    if (element.classList.contains('has-event')) {
        showNotificationMessage(`Tienes eventos el día ${day}`);
    }
}

// Profile Screen Functions
function initializeProfileScreen() {
    updateProfileData();
}

function updateProfileData() {
    // Update profile name
    const profileNameElements = document.querySelectorAll('#profileName, #userName');
    profileNameElements.forEach(element => {
        if (userProfile.name) {
            element.textContent = userProfile.name;
        }
    });
    
    // Update stats
    const statsElements = {
        events: document.querySelector('.stat-number'),
        friends: document.querySelectorAll('.stat-number')[1],
        xp: document.querySelectorAll('.stat-number')[2]
    };
    
    if (statsElements.events) statsElements.events.textContent = userProfile.eventsAttended;
    if (statsElements.friends) statsElements.friends.textContent = userProfile.friends;
    if (statsElements.xp) statsElements.xp.textContent = userProfile.xp;
}

function showSettings() {
    showNotificationMessage('Configuración próximamente');
}

// New navigation functions
function showNotifications() {
    showNotificationMessage('Centro de notificaciones - Tienes 2 notificaciones nuevas');
}

function showQuickStats() {
    showStatsModal();
}

// Statistics Modal Functions
function showStatsModal() {
    const modal = document.getElementById('statsModal');
    modal.classList.add('active');
    updateStatsModalContent();
}

function closeStatsModal() {
    const modal = document.getElementById('statsModal');
    modal.classList.remove('active');
}

function updateStatsModalContent() {
    // Update basic stats
    document.getElementById('statsEventsCount').textContent = userProfile.eventsAttended;
    document.getElementById('statsFriendsCount').textContent = userProfile.friends;
    document.getElementById('statsXPCount').textContent = userProfile.xp;
    document.getElementById('statsLevel').textContent = userProfile.level;
    
    // Update additional metrics
    document.getElementById('statsMonthlyEvents').textContent = Math.floor(userProfile.eventsAttended / 3); // Simulate monthly average
    document.getElementById('statsAverageSpent').textContent = 450; // Simulate average spending
    document.getElementById('statsFavoriteCategory').textContent = 'Música';
    document.getElementById('statsActiveStreak').textContent = 15; // Simulate streak
}

// Enhanced Breadcrumb Navigation
function addBreadcrumbNavigation() {
    const breadcrumbContainer = document.createElement('div');
    breadcrumbContainer.className = 'breadcrumb-nav';
    breadcrumbContainer.style.cssText = `
        position: fixed;
        top: 60px;
        left: 0;
        right: 0;
        background: rgba(255,255,255,0.95);
        backdrop-filter: blur(10px);
        padding: 0.5rem 1rem;
        border-bottom: 1px solid #e9ecef;
        z-index: 99;
        display: none;
    `;
    
    document.body.appendChild(breadcrumbContainer);
    
    return breadcrumbContainer;
}

function updateBreadcrumb(currentScreen) {
    const breadcrumb = document.querySelector('.breadcrumb-nav');
    if (!breadcrumb) return;
    
    const screenNames = {
        dashboard: 'Dashboard',
        explore: 'Explorar Eventos', 
        calendar: 'Mi Calendario',
        profile: 'Mi Perfil'
    };
    
    const screenIcons = {
        dashboard: '🏠',
        explore: '🔍',
        calendar: '📅',
        profile: '👤'
    };
    
    if (currentScreen === 'dashboard') {
        breadcrumb.style.display = 'none';
        return;
    }
    
    breadcrumb.style.display = 'block';
    breadcrumb.innerHTML = `
        <span style="color: #667eea; cursor: pointer;" onclick="showScreen('dashboard')">
            🏠 Dashboard
        </span>
        <span style="margin: 0 0.5rem; color: #ccc;">></span>
        <span style="color: #333;">
            ${screenIcons[currentScreen]} ${screenNames[currentScreen]}
        </span>
    `;
}

// Add quick action buttons to events
function addQuickActions() {
    const quickActionsStyle = document.createElement('style');
    quickActionsStyle.textContent = `
        .quick-actions {
            position: fixed;
            bottom: 100px;
            right: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 98;
        }
        
        .quick-action-btn {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: none;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .quick-action-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 25px rgba(102, 126, 234, 0.4);
        }
    `;
    document.head.appendChild(quickActionsStyle);
    
    const quickActions = document.createElement('div');
    quickActions.className = 'quick-actions';
    quickActions.innerHTML = `
        <button class="quick-action-btn" onclick="showBudgetCalculator()" title="Calculadora de Presupuesto">
            💰
        </button>
        <button class="quick-action-btn" onclick="showScreen('explore')" title="Explorar Eventos">
            🔍
        </button>
        <button class="quick-action-btn" onclick="showScreen('calendar')" title="Mi Calendario">
            📅
        </button>
    `;
    
    document.body.appendChild(quickActions);
}

// Enhanced Notification System
function showNotificationMessage(message) {
    const notification = document.getElementById('successNotification');
    notification.querySelector('.notification-text h4').textContent = 'Información';
    notification.querySelector('.notification-text p').textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}


// Achievement System
function unlockAchievement(achievementId) {
    if (userProfile.achievements.includes(achievementId)) return;
    
    userProfile.achievements.push(achievementId);
    
    const achievements = {
        'primer-plan': { title: 'Primer Plan', description: 'Creaste tu primer plan grupal' },
        'social-butterfly': { title: 'Mariposa Social', description: 'Invitaste a más de 5 amigos' },
        'budget-master': { title: 'Maestro del Presupuesto', description: 'Usaste la calculadora de presupuesto' }
    };
    
    const achievement = achievements[achievementId];
    if (achievement) {
        showNotificationMessage(`🏆 ¡Logro desbloqueado! ${achievement.title}: ${achievement.description}`);
    }
}

// Enhanced Plan Creation
const originalCreatePlan = createPlan;
createPlan = function(eventId) {
    originalCreatePlan(eventId);
    unlockAchievement('primer-plan');
};

// Enhanced Budget Calculator trigger
const originalShowBudgetCalculator = showBudgetCalculator;
showBudgetCalculator = function() {
    originalShowBudgetCalculator();
    unlockAchievement('budget-master');
};

// Social Features
function simulateFriendActivity() {
    setInterval(() => {
        if (currentScreen === 'dashboard') {
            // Randomly update friend activity
            const activities = [
                'Ana se unió al Festival de Jazz',
                'Miguel creó un plan para el teatro',
                'Sofía marcó como favorito Bad Bunny',
                'Carlos invitó amigos a Pumas vs América'
            ];
            
            const randomActivity = activities[Math.floor(Math.random() * activities.length)];
            
            // Update notification count
            const notificationBtn = document.querySelector('.notification-count');
            if (notificationBtn) {
                const count = parseInt(notificationBtn.textContent) + 1;
                notificationBtn.textContent = count;
                notificationBtn.style.animation = 'pulse 0.5s ease-in-out';
                setTimeout(() => {
                    notificationBtn.style.animation = '';
                }, 500);
            }
        }
    }, 15000); // Every 15 seconds
}

// Enhanced User Experience
function addAdvancedInteractions() {
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    showScreen('dashboard');
                    break;
                case '2':
                    e.preventDefault();
                    showScreen('explore');
                    break;
                case '3':
                    e.preventDefault();
                    showScreen('calendar');
                    break;
                case '4':
                    e.preventDefault();
                    showScreen('profile');
                    break;
            }
        }
        
        if (e.key === 'Escape') {
            closeBudgetCalculator();
            closePlanModal();
            closeStatsModal();
        }
    });
    
    // Add swipe gestures for mobile
    let startX = 0;
    let startY = 0;
    
    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', function(e) {
        if (!startX || !startY) return;
        
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            const screens = ['dashboard', 'explore', 'calendar', 'profile'];
            const currentIndex = screens.indexOf(currentScreen);
            
            if (diffX > 0 && currentIndex < screens.length - 1) {
                // Swipe left - next screen
                showScreen(screens[currentIndex + 1]);
            } else if (diffX < 0 && currentIndex > 0) {
                // Swipe right - previous screen
                showScreen(screens[currentIndex - 1]);
            }
        }
        
        startX = 0;
        startY = 0;
    });
}

// Initialize enhanced features
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if we're in main app (not onboarding)
    if (currentScreen === 'dashboard' || currentScreen === 'landing') {
        // Initialize will happen after onboarding
    } else {
        initializeExploreScreen();
        initializeCalendarScreen();
        initializeProfileScreen();
    }
    
    setTimeout(updateRecommendations, 5000);
    setTimeout(simulateFriendActivity, 10000);
    addAdvancedInteractions();
    
    // Add CSS for selected calendar day
    const style = document.createElement('style');
    style.textContent = `
        .calendar-day.selected {
            background: #ff6b6b !important;
            color: white;
        }
        .calendar-day.empty {
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);
});

// Floating Action Button Menu Toggle
function toggleFabMenu(button) {
    const menu = button.nextElementSibling;
    const isActive = button.classList.contains('active');
    
    if (isActive) {
        button.classList.remove('active');
        menu.classList.remove('active');
    } else {
        button.classList.add('active');
        menu.classList.add('active');
        
        // Add haptic-like feedback animation
        button.style.animation = 'pulse 0.3s ease';
        setTimeout(() => {
            button.style.animation = '';
        }, 300);
    }
    
    // Close on outside click
    if (!isActive) {
        setTimeout(() => {
            document.addEventListener('click', closeFabMenuOnOutside);
        }, 100);
    } else {
        document.removeEventListener('click', closeFabMenuOnOutside);
    }
}

function closeFabMenuOnOutside(e) {
    const fabContainer = document.querySelector('.fab-container');
    if (fabContainer && !fabContainer.contains(e.target)) {
        const fabMain = fabContainer.querySelector('.fab-main');
        const fabMenu = fabContainer.querySelector('.fab-menu');
        if (fabMain && fabMenu) {
            fabMain.classList.remove('active');
            fabMenu.classList.remove('active');
        }
        document.removeEventListener('click', closeFabMenuOnOutside);
    }
}

// Enhanced swipe gestures with smooth transitions
let touchStartX = 0;
let touchStartY = 0;
let swipeThreshold = 50;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', function(e) {
    if (!touchStartX || !touchStartY) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;
    
    // Only trigger if horizontal swipe is more prominent
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
        const screens = ['dashboard', 'explore', 'calendar', 'profile'];
        const currentIndex = screens.indexOf(currentScreen);
        
        if (diffX > 0 && currentIndex < screens.length - 1) {
            // Swipe left - next screen
            animateScreenTransition(screens[currentIndex + 1], 'left');
        } else if (diffX < 0 && currentIndex > 0) {
            // Swipe right - previous screen
            animateScreenTransition(screens[currentIndex - 1], 'right');
        }
    }
    
    touchStartX = 0;
    touchStartY = 0;
}, { passive: true });

// Smooth screen transition with animation
function animateScreenTransition(screenId, direction) {
    const currentScreenEl = document.querySelector('.screen.active');
    const nextScreenEl = document.getElementById(screenId);
    
    if (!nextScreenEl) return;
    
    // Add transition classes
    currentScreenEl.style.animation = `slide-out-${direction} 0.3s ease-out`;
    nextScreenEl.style.animation = `slide-in-${direction} 0.3s ease-out`;
    
    setTimeout(() => {
        showScreen(screenId);
        currentScreenEl.style.animation = '';
        nextScreenEl.style.animation = '';
    }, 300);
}

// Add slide animations
const slideAnimations = document.createElement('style');
slideAnimations.textContent = `
    @keyframes slide-out-left {
        to { transform: translateX(-100%); opacity: 0; }
    }
    @keyframes slide-in-left {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slide-out-right {
        to { transform: translateX(100%); opacity: 0; }
    }
    @keyframes slide-in-right {
        from { transform: translateX(-100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(slideAnimations);

// AI Voice Assistant Functions
function toggleVoiceAssistant() {
    const voiceBtn = document.querySelector('.voice-btn');
    const voiceListening = document.getElementById('voiceListening');
    const voiceIcon = voiceBtn.querySelector('.voice-icon');
    const voiceText = voiceBtn.querySelector('.voice-text');
    
    if (voiceListening.classList.contains('active')) {
        // Stop listening
        voiceListening.classList.remove('active');
        voiceIcon.style.display = 'block';
        voiceText.textContent = 'Hablar';
        voiceBtn.style.background = 'linear-gradient(135deg, #FF6B6B, #4ECDC4)';
    } else {
        // Start listening
        voiceListening.classList.add('active');
        voiceIcon.style.display = 'none';
        voiceText.textContent = 'Escuchando...';
        voiceBtn.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
        
        // Simulate AI response after 3 seconds
        setTimeout(() => {
            voiceListening.classList.remove('active');
            voiceIcon.style.display = 'block';
            voiceText.textContent = 'Hablar';
            voiceBtn.style.background = 'linear-gradient(135deg, #FF6B6B, #4ECDC4)';
            
            // Show AI response
            showNotificationMessage('🤖 "Encontré 3 conciertos de rock este fin de semana que te encantarán"');
            
            // Trigger premium modal after voice demo
            setTimeout(() => {
                showPremiumModal();
            }, 2000);
        }, 3000);
    }
}

// Friend Matching Quiz Functions
let quizStep = 1;
let quizAnswers = {};

function startFriendMatching() {
    const modal = document.getElementById('matchingModal');
    modal.classList.add('active');
    quizStep = 1;
    showQuizStep(1);
}

function closeMatchingModal() {
    const modal = document.getElementById('matchingModal');
    modal.classList.remove('active');
}

function selectQuizOption(answer) {
    quizAnswers[`step${quizStep}`] = answer;
    
    if (quizStep < 2) {
        quizStep++;
        showQuizStep(quizStep);
    } else {
        // Show results
        showQuizStep('results');
    }
}

function showQuizStep(step) {
    // Hide all steps
    document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
    
    // Update progress dots
    document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
    
    if (step === 'results') {
        document.getElementById('quizResults').classList.add('active');
        document.getElementById('dot3').classList.add('active');
    } else {
        document.getElementById(`quizStep${step}`).classList.add('active');
        document.getElementById(`dot${step}`).classList.add('active');
    }
}

function joinSquad() {
    closeMatchingModal();
    showNotificationMessage('🎉 ¡Te uniste al squad! Revisa tu calendario para ver los próximos planes');
}

// Premium Modal Functions
function showPremiumModal() {
    const modal = document.getElementById('premiumModal');
    modal.classList.add('active');
}

function closePremiumModal() {
    const modal = document.getElementById('premiumModal');
    modal.classList.remove('active');
}

function selectPricing(type) {
    document.querySelectorAll('.price-option').forEach(opt => opt.classList.remove('active'));
    event.target.closest('.price-option').classList.add('active');
}

function upgradeToPremium() {
    closePremiumModal();
    showNotificationMessage('🎉 ¡Bienvenido a Plan Saver PRO! Tu prueba gratis de 7 días ha comenzado');
}

// FOMO Notifications System
const fomoMessages = [
    { main: 'Ana y 8 amigos', sub: 'acaban de unirse a Zoé en el Foro Sol', icon: '🎸' },
    { main: 'Bad Bunny', sub: 'solo quedan 100 boletos disponibles', icon: '⚡' },
    { main: '234 personas', sub: 'están viendo este evento ahora', icon: '👀' },
    { main: 'Carlos creó un plan', sub: 'para el after party de Jesse & Joy', icon: '🎉' },
    { main: 'Precio aumentará', sub: 'en 2 horas para Manu Chao', icon: '📈' }
];

function showFomoNotification() {
    const notification = document.getElementById('fomoNotification');
    const randomMsg = fomoMessages[Math.floor(Math.random() * fomoMessages.length)];
    
    notification.querySelector('.fomo-main').textContent = randomMsg.main;
    notification.querySelector('.fomo-sub').textContent = randomMsg.sub;
    notification.querySelector('.fomo-icon').textContent = randomMsg.icon;
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// Start FOMO notifications every 15 seconds
setInterval(showFomoNotification, 15000);
setTimeout(showFomoNotification, 3000); // First one after 3 seconds

// Live Ticker Animation
function startLiveTicker() {
    const ticker = document.getElementById('liveTicker');
    if (currentScreen === 'dashboard') {
        ticker.style.display = 'block';
    }
}

// Heatmap Updates
function updateHeatmap() {
    const zones = document.querySelectorAll('.zone-count');
    zones.forEach(zone => {
        const currentCount = parseInt(zone.textContent);
        const change = Math.floor(Math.random() * 20) - 10;
        zone.textContent = Math.max(0, currentCount + change);
    });
}

// Update heatmap every 5 seconds
setInterval(updateHeatmap, 5000);

// Initialize on dashboard load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        if (currentScreen === 'dashboard') {
            startLiveTicker();
        }
    }, 1000);
});