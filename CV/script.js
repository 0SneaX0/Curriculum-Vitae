// Toggle navigation menu visibility
document.getElementById('checkbox').addEventListener('change', function () {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('visible', this.checked);
});

// Toggle dark mode
document.getElementById('toggle').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
});

// Parallax effect for the background
document.addEventListener('mousemove', function (e) {
    const x = (e.clientX / window.innerWidth) * 100 + '%';
    const y = (e.clientY / window.innerHeight) * 100 + '%';
    document.querySelector('.background').style.setProperty('--x', x);
    document.querySelector('.background').style.setProperty('--y', y);
    document.body.classList.add('parallax-active');
});
