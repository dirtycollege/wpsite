window.addEventListener('load', () => {
    const popup = document.getElementById('countryPopup');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    // Popup show after 500ms
    setTimeout(() => {
        popup.classList.add('show');
    }, 500);

    // Haa button click
    yesBtn.addEventListener('click', () => {
        popup.classList.remove('show');
        // optional: koi aur action jaise alert ya redirect
        console.log("Haa clicked");
    });

    // Nahi button click
    noBtn.addEventListener('click', () => {
        popup.classList.remove('show');
        console.log("Nahi clicked");
    });

    // Optional: click outside popup to close (remove agar nahi chahiye)
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('show');
        }
    });
});
