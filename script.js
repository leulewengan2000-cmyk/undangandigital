// =====================
// BUKA OVERLAY
// =====================
function bukaUndangan() {
    const overlay = document.getElementById('overlay');
    overlay.classList.add('hide');

    const main = document.getElementById('main-content');
    main.style.display = 'block';

    const music = document.getElementById('music');
    if (music) music.play().catch(() => console.log('Audio play blocked.'));
}

// =====================
// COUNTDOWN
// =====================
const countdownElements = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
};

const weddingDate = new Date('December 31, 2027 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    if (distance < 0) return;

    countdownElements.days.textContent = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
    countdownElements.hours.textContent = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    countdownElements.minutes.textContent = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    countdownElements.seconds.textContent = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// =====================
// LIGHTBOX
// =====================
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImg = document.getElementById('lightbox-img');

const prevBtn = document.querySelector('#lightbox-overlay .prev');
const nextBtn = document.querySelector('#lightbox-overlay .next');
const closeBtn = document.getElementById('lightbox-close');
const shareBtn = document.getElementById('lightbox-share');
const shareMenu = document.querySelector('.lightbox-share-menu');
const counter = document.getElementById('lightbox-counter');

let currentIndex = 0;

galleryItems.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        lightboxImg.src = img.src;
        lightboxOverlay.style.display = 'flex';
        updateCounter();
    });
});

function updateCounter() {
    counter.textContent = `${currentIndex + 1} / ${galleryItems.length}`;
}

prevBtn.addEventListener('click', e => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
    updateCounter();
});

nextBtn.addEventListener('click', e => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
    updateCounter();
});

closeBtn.addEventListener('click', e => {
    e.stopPropagation();
    lightboxOverlay.style.display = 'none';
});

// Share toggle
shareBtn.addEventListener('click', e => {
    e.stopPropagation();
    shareMenu.style.display = shareMenu.style.display === 'flex' ? 'none' : 'flex';
});

document.addEventListener('click', e => {
    if (!shareMenu.contains(e.target) && e.target !== shareBtn) {
        shareMenu.style.display = 'none';
    }
});

// =====================
// LOVE STORY TIMELINE PRO
// =====================
document.addEventListener("DOMContentLoaded", () => {
    const timeline = document.getElementById("timeline");
    if (!timeline) return;

    const line = timeline.querySelector(".timeline-line");
    const items = timeline.querySelectorAll(".timeline-item");

    function updateTimeline() {
        const rect = timeline.getBoundingClientRect();
        const viewHeight = window.innerHeight;

        /* progress scroll (dipelanin) */
        let progress = (viewHeight - rect.top) * 0.8; // ⬅️ KUNCI: bikin TURUN LEBIH PELAN
        progress = Math.max(0, progress);

        /* batas sampai marker terakhir */
        const lastMarker = items[items.length - 1]
            .querySelector(".timeline-marker")
            .getBoundingClientRect();

        const maxHeight =
            lastMarker.top - rect.top + 1;

        const height = Math.min(progress, maxHeight);
        line.style.height = `${height}px`;

        /* marker logic */
        items.forEach((item, index) => {
            const marker = item.querySelector(".timeline-marker");
            const markerRect = marker.getBoundingClientRect();

            if (markerRect.top < rect.top + height) {
                marker.classList.add("show");

                setTimeout(() => {
                    marker.classList.add("active");
                }, index * 120);
            } else {
                marker.classList.remove("active");
                marker.classList.remove("show");
            }
        });
    }

    window.addEventListener("scroll", updateTimeline);
    updateTimeline();
});
// =====================
// GIFS
// =====================

// =====================
// TOGGLE INFO PENGIRIM
// =====================
// Pastikan hanya ada 1 fungsi toggle
// Toggle Section Info Pengirim
const btnGift = document.getElementById('btn-gift');
const sectionGift = document.getElementById('info-kirim');

btnGift.addEventListener('click', function (e) {
    e.preventDefault();
    sectionGift.classList.toggle('show');

    if (sectionGift.classList.contains('show')) {
        sectionGift.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

// Copy teks biasa
function copyText(number) {
    navigator.clipboard.writeText(number).then(() => {
        alert("Nomor rekening berhasil disalin ✅");
    });
}

// Copy + buka WhatsApp
function copyWa(number) {
    navigator.clipboard.writeText(number).then(() => {
        window.open(`https://wa.me/${number}`, '_blank');
    });
}

// =====================
// COPY & WHATSAPP
// =====================
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Berhasil disalin ✅");
    });
}

function copyAndWa(number) {
    navigator.clipboard.writeText(number).then(() => {
        alert("Nomor rekening berhasil disalin ✅");
        window.open(`https://wa.me/${number}`, "_blank");
    });
}

function copyWa(number) {
    navigator.clipboard.writeText(number).then(() => {
        alert("Nomor berhasil disalin ✅");
        window.open(`https://wa.me/${number}`, "_blank");
    });
}
// =====================
// RSVP RSVP RSVP RSVPRSVP RSVPRSVP RSVP
// =====================
// Tampilkan jumlah orang saat pilih hadir / tidak hadir
// Tampilkan jumlah orang saat pilih hadir / tidak hadir
const attendanceRadios = document.querySelectorAll('input[name="attendance"]');
const guestCountGroup = document.getElementById('guestCountGroup');

attendanceRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        guestCountGroup.style.display = 'block';
    });
});

// Hitung kata pada textarea
const messageInput = document.getElementById('message');
const wordCountDisplay = document.getElementById('wordCount');

messageInput.addEventListener('input', () => {
    let words = messageInput.value.trim().split(/\s+/);
    let count = words.filter(word => word.length > 0).length;
    wordCountDisplay.textContent = count;
});

// Form submit
document.getElementById('rsvpForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Ambil data form
    const name = document.getElementById('guestName').value;
    const attendance = document.querySelector('input[name="attendance"]:checked')?.value;
    const guestCount = document.getElementById('guestCount').value;
    const message = document.getElementById('message').value;

    // Validasi sederhana
    if (!name || !attendance) {
        alert("Tolong isi nama dan kehadiran Anda.");
        return;
    }

    // Bisa dikirim ke server API / email / WA dsb
    console.log({
        name,
        attendance,
        guestCount,
        message
    });

    alert("Terima kasih! RSVP Anda berhasil dikirim ✅");

    // Reset form
    this.reset();
    guestCountGroup.style.display = 'none';
    wordCountDisplay.textContent = 0;
});
