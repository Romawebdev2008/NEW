// Initial page content
const defaultContent = {
    home: '    <a href="./kn/index.html"></a>',
    about: '    <a href="./kn/about.html"></a>',
    news: '    <a href="./kn/news.html"></a>',
    team: '    <a href="./kn/work.html"></a>',
    contact: '    <a href="./kn/contact.html"></a>',
    profile: `
        <div class="profile-page">
            <div class="profile-header">
                <div class="profile-avatar">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                </div>
                <h2 class="profile-name" id="profileNameDisplay">Loading...</h2>
                <div class="profile-email" id="profileEmailDisplay">Loading...</div>
                <div class="profile-phone" id="profilePhoneDisplay">Loading...</div>
            </div>
            <div class="profile-menu">
                <a href="#" class="menu-item" id="deliveryAddressBtn">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span>Delivery Address</span>
                    <span class="arrow">›</span>
                </a>
                <a href="#" class="menu-item" id="paymentMethodsBtn">
                    <svg viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                    </svg>
                    <span>Payment Methods</span>
                    <span class="arrow">›</span>
                </a>
                <a href="#" class="menu-item" id="settingsBtn">
                    <svg viewBox="0 0 24 24">
                        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.03-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                    </svg>
                    <span>Settings</span>
                    <span class="arrow">›</span>
                </a>
                <a href="#" class="menu-item" id="helpSupportBtn">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                    </svg>
                    <span>Help & Support</span>
                    <span class="arrow">›</span>
                </a>
            </div>
            <button class="logout-button" id="profileLogoutBtn">
                <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                </svg>
                Logout
            </button>
            <div class="bottom-nav">
                <a href="#" data-page="home">
                    <svg viewBox="0 0 24 24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg>
                    <span>Home</span>
                </a>
                <a href="#" data-page="search">
                    <svg viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                    <span>Search</span>
                </a>
                <a href="#" data-page="orders">
                    <svg viewBox="0 0 24 24">
                        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                    <span>Orders</span>
                </a>
                <a href="#" data-page="profile" class="active">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    <span>Profile</span>
                </a>
            </div>
        </div>
    `
};

// Initialize localStorage if empty
if (!localStorage.getItem('pageContent')) {
    localStorage.setItem('pageContent', JSON.stringify(defaultContent));
}
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}
if (!localStorage.getItem('profiles')) {
    localStorage.setItem('profiles', JSON.stringify({}));
}

// DOM Elements
const mainContent = document.getElementById('mainContent');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const profileModal = document.getElementById('profileModal');
const adminPanel = document.getElementById('adminPanel');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const logoutBtn = document.getElementById('logoutBtn');
const adminPanelBtn = document.getElementById('adminPanelBtn');
const profileContainer = document.getElementById('profileContainer');
const profileBtn = document.getElementById('profileBtn');
const profileDropdown = document.getElementById('profileDropdown');
const viewProfileBtn = document.getElementById('viewProfileBtn');
const syncDataBtn = document.getElementById('syncDataBtn');
const userInfo = document.getElementById('userInfo');

// Navigation
document.querySelectorAll('.nav-links a, .bottom-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        document.querySelectorAll('.nav-links a, .bottom-nav a').forEach(a => a.classList.remove('active'));
        document.querySelectorAll(`[data-page="${page}"]`).forEach(a => a.classList.add('active'));
        loadPage(page);
    });
});

// Load page content
function loadPage(page) {
    const content = JSON.parse(localStorage.getItem('pageContent'));
    mainContent.innerHTML = content[page] || content.home;
    
    if (page === 'profile') {
        initializeProfilePage();
    }
}

// Initialize profile page
function initializeProfilePage() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        const profiles = JSON.parse(localStorage.getItem('profiles'));
        const profile = profiles[currentUser.email];
        
        document.getElementById('profileNameDisplay').textContent = profile?.name || 'No name set';
        document.getElementById('profileEmailDisplay').textContent = currentUser.email;
        document.getElementById('profilePhoneDisplay').textContent = profile?.phone || 'No phone number set';
        
        // Add event listeners for menu items
        document.getElementById('deliveryAddressBtn')?.addEventListener('click', () => alert('Delivery Address clicked'));
        document.getElementById('paymentMethodsBtn')?.addEventListener('click', () => alert('Payment Methods clicked'));
        document.getElementById('settingsBtn')?.addEventListener('click', () => alert('Settings clicked'));
        document.getElementById('helpSupportBtn')?.addEventListener('click', () => alert('Help & Support clicked'));
        document.getElementById('profileLogoutBtn')?.addEventListener('click', logout);
    }
}

// Profile Dropdown
profileBtn?.addEventListener('click', () => {
    profileDropdown.classList.toggle('show');
});

// Close dropdown when clicking outside
window.addEventListener('click', (e) => {
    if (!profileBtn?.contains(e.target)) {
        profileDropdown?.classList.remove('show');
    }
});

// Authentication
loginBtn?.addEventListener('click', () => loginModal.style.display = 'block');
registerBtn?.addEventListener('click', () => registerModal.style.display = 'block');
logoutBtn?.addEventListener('click', logout);
viewProfileBtn?.addEventListener('click', () => {
    profileDropdown.classList.remove('show');
    loadPage('profile');
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal.style.display = 'none';
    if (e.target === registerModal) registerModal.style.display = 'none';
    if (e.target === profileModal) profileModal.style.display = 'none';
    if (e.target === adminPanel) adminPanel.style.display = 'none';
});

// Login Form
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateAuthUI();
        loginModal.style.display = 'none';
        loadPage('profile');
    } else {
        alert('Invalid credentials');
    }
});

// Register Form
document.getElementById('registerForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const role = email.toLowerCase().startsWith('admin') ? 'admin' : 'user';
    
    const users = JSON.parse(localStorage.getItem('users'));
    if (users.some(u => u.email === email)) {
        alert('Email already registered');
        return;
    }
    
    const newUser = { email, password, role };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Initialize empty profile
    const profiles = JSON.parse(localStorage.getItem('profiles'));
    profiles[email] = { email, name: '', bio: '', phone: '' };
    localStorage.setItem('profiles', JSON.stringify(profiles));
    
    registerModal.style.display = 'none';
    alert('Registration successful! Please login.' + (role === 'admin' ? ' You have administrator privileges.' : ''));
});

// Profile Form
document.getElementById('profileForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('profileEmail').value;
    const name = document.getElementById('profileName').value;
    const bio = document.getElementById('profileBio').value;
    const phone = document.getElementById('profilePhone').value;
    
    const profiles = JSON.parse(localStorage.getItem('profiles'));
    profiles[email] = { email, name, bio, phone };
    localStorage.setItem('profiles', JSON.stringify(profiles));
    
    profileModal.style.display = 'none';
    alert('Profile updated successfully!');
    updateAuthUI();
    
    // Refresh profile page if we're on it
    if (document.querySelector('.profile-page')) {
        loadPage('profile');
    }
});

// Show Profile
function showProfile() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        const profiles = JSON.parse(localStorage.getItem('profiles'));
        const profile = profiles[currentUser.email] || { email: currentUser.email, name: '', bio: '', phone: '' };
        
        document.getElementById('profileEmail').value = profile.email;
        document.getElementById('profileName').value = profile.name;
        document.getElementById('profileBio').value = profile.bio;
        document.getElementById('profilePhone').value = profile.phone;
        
        profileModal.style.display = 'block';
    }
}

// Sync Data
syncDataBtn?.addEventListener('click', () => {
    const timestamp = new Date().toLocaleString();
    alert(`Data synchronized successfully! Last sync: ${timestamp}`);
    profileDropdown.classList.remove('show');
});

// Update UI based on authentication
function updateAuthUI() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        profileContainer.style.display = 'inline-block';
        
        const profiles = JSON.parse(localStorage.getItem('profiles'));
        const profile = profiles[currentUser.email];
        userInfo.textContent = profile && profile.name ? profile.name : currentUser.email;
        
        if (currentUser.role === 'admin') {
            adminPanelBtn.style.display = 'block';
        } else {
            adminPanelBtn.style.display = 'none';
        }
    } else {
        loginBtn.style.display = 'inline';
        registerBtn.style.display = 'inline';
        profileContainer.style.display = 'none';
        adminPanelBtn.style.display = 'none';
    }
}

// Logout
function logout() {
    localStorage.removeItem('currentUser');
    updateAuthUI();
    profileDropdown?.classList.remove('show');
    loadPage('home');
}

// Admin Panel
adminPanelBtn?.addEventListener('click', () => {
    adminPanel.style.display = 'block';
    profileDropdown.classList.remove('show');
    const pageSelector = document.getElementById('pageSelector');
    const pageContent = document.getElementById('pageContent');
    const content = JSON.parse(localStorage.getItem('pageContent'));
    pageContent.value = content[pageSelector.value];
});

document.getElementById('pageSelector')?.addEventListener('change', (e) => {
    const content = JSON.parse(localStorage.getItem('pageContent'));
    document.getElementById('pageContent').value = content[e.target.value];
});

document.getElementById('saveContent')?.addEventListener('click', () => {
    const pageSelector = document.getElementById('pageSelector');
    const pageContent = document.getElementById('pageContent');
    const content = JSON.parse(localStorage.getItem('pageContent'));
    content[pageSelector.value] = pageContent.value;
    localStorage.setItem('pageContent', JSON.stringify(content));
    loadPage(pageSelector.value);
    adminPanel.style.display = 'none';
    alert('Content updated successfully!');
});

// Initialize UI
updateAuthUI();