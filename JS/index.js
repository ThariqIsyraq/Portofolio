// FeatherIcons
feather.replace();

// Memanggil Element
const profilePicture = document.querySelector('.profile-picture');
const openBtn = document.getElementById('profile-btn');
const popup = document.getElementById('side-profile');

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

// Sidebar slide feature
openBtn.addEventListener('click', () => {
    popup.classList.add('show');
    popup.classList.remove('hidden')
});

document.addEventListener('click', (e) => {
    const clicked = popup.contains(e.target) || openBtn.contains(e.target);

    if (!clicked) {
        popup.classList.remove('show');
        popup.classList.add('hidden');
    }
})