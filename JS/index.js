// FeatherIcons
feather.replace();

// Memanggil Element
const profilePicture = document.querySelector('.profile-picture');
const openBtn = document.getElementById('profile-btn');

// Animasi hover pada profile button
profilePicture.addEventListener('mouseover', () => {
    openBtn.style.width = '105px'; 
});

profilePicture.addEventListener('mouseout', () => {
    openBtn.style.width = '100px'; 
});

openBtn.addEventListener('mouseover', () => {
    openBtn.style.width = '105px'; 
});
