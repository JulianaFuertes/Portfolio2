function showSection(sectionId) {
    
    const landingPage = document.getElementById('landing');
    landingPage.style.display = 'none';

    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';

    closeDropdown();

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

function showLanding() {

    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById('landing').style.display = 'block';

    closeDropdown();
}


function toggleDropdown() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active'); 
}


function closeDropdown() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('active'); 
}


document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.querySelector('.menu-icon');

    if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
        closeDropdown(); 
    }

    
});