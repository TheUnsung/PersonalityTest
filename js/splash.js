// Wait for the page to fully load
window.addEventListener('load', function () {
    // Hide the splash screen after a delay
    setTimeout(function () {
        document.getElementById('splash-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
    }, 2000); // 2000 milliseconds = 2 seconds delay
});
