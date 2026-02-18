window.addEventListener('load', () => {
    // ===== OLD SEX POPUP =====
    const countryPopup = document.getElementById('countryPopup');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    setTimeout(() => {
        if (countryPopup) countryPopup.classList.add('show');
    }, 500);

    if (yesBtn && countryPopup) {
        yesBtn.addEventListener('click', () => {
            countryPopup.classList.remove('show');
            console.log("Haa clicked");
        });
    }

    if (noBtn && countryPopup) {
        noBtn.addEventListener('click', () => {
            countryPopup.classList.remove('show');
            console.log("Nahi clicked");
        });
    }

    if (countryPopup) {
        countryPopup.addEventListener('click', (e) => {
            if (e.target === countryPopup) countryPopup.classList.remove('show');
        });
    }

    // ===== PAYMENT POPUP =====
    const offerPopup = document.getElementById("offerPopup");
    const popupImg = document.getElementById("popupImg");
    const popupCallBtn = document.getElementById("popupCallBtn");

    // Close function
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

    // ===== USER DATA =====
    const userLinks = {
        "Ayat Khan": { payment: "https://cashfee.com/ayat", final: "https://wa.me/1234567890" },
        "Kamini": { payment: "https://cashfee.com/kamini", final: "https://wa.me/9876543210" },
        "Neha": { payment: "https://cashfee.com/neha", final: "https://wa.me/1122334455" },
        "Pari": { payment: "https://cashfee.com/pari", final: "https://wa.me/5566778899" },
        "Radha": { payment: "https://cashfee.com/radha", final: "https://wa.me/9988776655" },
        "Ragini": { payment: "https://cashfee.com/ragini", final: "https://wa.me/6677889900" },
        "Sneha": { payment: "https://cashfee.com/sneha", final: "https://wa.me/2233445566" },
        "Sweta": { payment: "https://cashfee.com/sweta", final: "https://wa.me/3344556677" }
    };

    // ===== ATTACH CARD BUTTON EVENTS =====
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
                    // Set payment page link first
                    popupCallBtn.href = userLinks[userName].payment;
                    // Store final WhatsApp link for after payment
                    popupCallBtn.setAttribute("data-final-link", userLinks[userName].final);
                }

                if (offerPopup) offerPopup.style.display = "flex";
            });
        }
    });

    // ===== POPUP PAYMENT BUTTON CLICK =====
    if (popupCallBtn) {
        popupCallBtn.addEventListener("click", function(e) {
            e.preventDefault();

            // Open payment page in same tab
            const paymentLink = this.href;
            const finalLink = this.getAttribute("data-final-link");

            if (!paymentLink) return;

            // Open payment page first
            window.open(paymentLink, "_blank");

            // Optional: after payment complete, redirect to WhatsApp manually
            // (payment gateway integration needed to auto redirect)
            alert("Payment complete hone ke baad WhatsApp number open karein: " + finalLink);
        });
    }
});
