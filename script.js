document.getElementById('loader-overlay').style.display = 'flex';
setTimeout(function () {
    document.getElementById('loader-overlay').style.display = 'none';

    // Display the website content after 3 seconds
    document.getElementById('website-content').style.display = 'block';
}, 3000);
