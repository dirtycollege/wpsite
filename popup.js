window.addEventListener('load', () => {

    /* ================= COUNTRY POPUP ================= */

    const countryPopup = document.getElementById('countryPopup');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    setTimeout(() => {
        countryPopup?.classList.add('show');
    }, 500);

    function closeCountryPopup() {
        countryPopup?.classList.remove('show');
    }

    yesBtn?.addEventListener('click', closeCountryPopup);
    noBtn?.addEventListener('click', closeCountryPopup);

    countryPopup?.addEventListener('click', (e) => {
        if (e.target === countryPopup) closeCountryPopup();
    });

    /* ================= PAYMENT POPUP ================= */

    const PAYMENT_LINK = "https://rzp.io/rzp/bPMWiAOd";

    const offerPopup = document.getElementById("offerPopup");
    const popupImg = document.getElementById("popupImg");
    const popupCallBtn = document.getElementById("popupCallBtn");

    function closePopup() {
        if (offerPopup) offerPopup.style.display = "none";
    }

    offerPopup?.querySelector(".close-btn")
        ?.addEventListener("click", closePopup);

    offerPopup?.addEventListener("click", (e) => {
        if (e.target === offerPopup) closePopup();
    });

    /* ================= CARD BUTTON LOGIC ================= */

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const btn = card.querySelector(".card-btn");
        const userImg = card.querySelector(".media img")?.src;
        const userName = card.querySelector(".info h3")?.textContent;

        if (!btn || !userImg || !userName) return;

        btn.addEventListener("click", (e) => {
            e.preventDefault();

            if (popupImg) popupImg.src = userImg;

            if (popupCallBtn) {
                popupCallBtn.href =
                    PAYMENT_LINK + "?name=" + encodeURIComponent(userName.trim());
            }

            if (offerPopup) offerPopup.style.display = "flex";
        });
    });

    /* ================= PAY NOW BUTTON ================= */

    popupCallBtn?.addEventListener("click", function (e) {
        e.preventDefault();

        if (this.href) {
            window.location.href = this.href;
        }
    });

});