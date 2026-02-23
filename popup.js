window.addEventListener('load', () => {

    /* ================= COUNTRY POPUP ================= */

    const countryPopup = document.getElementById('countryPopup');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    // Show popup after small delay
    setTimeout(() => {
        if (countryPopup) countryPopup.classList.add('show');
    }, 500);

    // YES button
    if (yesBtn && countryPopup) {
        yesBtn.addEventListener('click', () => {
            countryPopup.classList.remove('show');
        });
    }

    // NO button
    if (noBtn && countryPopup) {
        noBtn.addEventListener('click', () => {
            countryPopup.classList.remove('show');
        });
    }

    // Click outside popup → close
    if (countryPopup) {
        countryPopup.addEventListener('click', (e) => {
            if (e.target === countryPopup) {
                countryPopup.classList.remove('show');
            }
        });
    }

    /* ================= PAYMENT POPUP ================= */

    const PAYMENT_LINK = "https://rzp.io/rzp/bPMWiAOd";

    const offerPopup = document.getElementById("offerPopup");
    const popupImg = document.getElementById("popupImg");
    const popupCallBtn = document.getElementById("popupCallBtn");
    const confirmBtn = document.getElementById("confirmBtn");

    function closePopup() {
        if (offerPopup) offerPopup.style.display = "none";
    }

    const closeBtn = offerPopup?.querySelector(".close-btn");
    if (closeBtn) closeBtn.addEventListener("click", closePopup);

    if (offerPopup) {
        offerPopup.addEventListener("click", (e) => {
            if (e.target === offerPopup) closePopup();
        });
    }

    // WhatsApp links
    const userLinks = {
        "Priyanka Singh": "https://wa.me/1234567890",
        "Kamini": "https://wa.me/9876543210",
        "Neha": "https://wa.me/1122334455",
        "Pari": "https://wa.me/5566778899",
        "Radha": "https://wa.me/9988776655",
        "Ragini": "https://wa.me/6677889900",
        "Sneha": "https://wa.me/2233445566",
        "Sweta": "https://wa.me/3344556677"
    };

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const btn = card.querySelector(".card-btn");
        const userImg = card.querySelector(".media img")?.src;
        const userName = card.querySelector(".info h3")?.textContent;

        if (btn && userImg && userName && userLinks[userName]) {
            btn.addEventListener("click", (e) => {
                e.preventDefault();

                if (popupImg) popupImg.src = userImg;

                if (popupCallBtn) {
                    popupCallBtn.href = PAYMENT_LINK;
                    popupCallBtn.setAttribute("data-final-link", userLinks[userName]);
                }

                if (offerPopup) offerPopup.style.display = "flex";
            });
        }
    });

    /* ================= PAY NOW ================= */

    if (popupCallBtn) {
        popupCallBtn.addEventListener("click", function (e) {
            e.preventDefault();
            if (this.href) {
                window.open(this.href, "_blank");
            }
        });
    }

    /* ================= CONFIRM PAYMENT ================= */

    if (confirmBtn) {
        confirmBtn.addEventListener("click", (e) => {
            e.preventDefault();

            const finalLink = popupCallBtn?.getAttribute("data-final-link");

            if (finalLink) {
                window.location.href = finalLink;
            }
        });
    }

});