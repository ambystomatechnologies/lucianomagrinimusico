/**
 * Luciano Magrini - Web Portfolio
 * Lógica principal: Carretes tipo Instagram, Visor Lightbox, Reproductor YouTube y Navegación
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    renderInstagramFeed();
    renderVideosGrid();
    initFilters();
    initFooterYear();
    initKeyboardListeners();
});

// Variables globales del Lightbox
let currentLightboxImages = [];
let currentLightboxIndex = 0;
let currentLightboxTitle = '';

/**
 * RENDERIZADO DE CARRETES TIPO INSTAGRAM
 */
function renderInstagramFeed() {
    const grid = document.getElementById('instagram-feed-grid');
    if (!grid || !PORTFOLIO_DATA || !PORTFOLIO_DATA.events) return;

    grid.innerHTML = '';

    PORTFOLIO_DATA.events.forEach((event, eventIdx) => {
        const card = document.createElement('article');
        card.className = 'insta-card';
        card.dataset.category = event.category;
        card.id = `event-${event.id}`;

        // Codificación segura de URLs para GitHub Pages
        const folderEncoded = encodeURIComponent(event.folder);

        // Slides HTML
        const slidesHtml = event.images.map((imgName, imgIdx) => {
            const imgEncoded = encodeURIComponent(imgName);
            const imgSrc = `${folderEncoded}/${imgEncoded}`;

            return `
                <div class="insta-slide-item" 
                     data-event-index="${eventIdx}" 
                     data-slide-index="${imgIdx}"
                     onclick="handleSlideClick(event, ${eventIdx}, ${imgIdx})">
                    <img src="${imgSrc}" 
                         alt="${event.title} - Foto ${imgIdx + 1}" 
                         class="insta-slide-img" 
                         loading="${eventIdx < 3 ? 'eager' : 'lazy'}"
                         onerror="this.onerror=null; this.src='assets/dossier_page_1.png'">
                </div>
            `;
        }).join('');

        // Dots HTML
        const dotsHtml = event.images.map((_, dotIdx) => `
            <span class="insta-dot ${dotIdx === 0 ? 'active' : ''}" 
                  data-event-index="${eventIdx}" 
                  data-dot-index="${dotIdx}"
                  onclick="scrollToSlide(${eventIdx}, ${dotIdx})"></span>
        `).join('');

        // Card HTML completo estilo Instagram
        card.innerHTML = `
            <header class="insta-header">
                <div class="insta-profile">
                    <img src="assets/luciano_portrait.jpg" alt="Luciano Magrini" class="insta-avatar">
                    <div class="insta-info">
                        <h3 class="insta-title" title="${event.title}">${event.title}</h3>
                        <span class="insta-location">
                            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            ${event.categoryName}
                        </span>
                    </div>
                </div>
                <span class="insta-header-badge">${event.count} fotos</span>
            </header>

            <div class="insta-media-viewport" id="viewport-${eventIdx}">
                <div class="insta-slider-track" id="track-${eventIdx}" onscroll="handleTrackScroll(${eventIdx})">
                    ${slidesHtml}
                </div>

                <div class="insta-count-badge" id="badge-${eventIdx}">1 / ${event.count}</div>

                ${event.count > 1 ? `
                    <button class="insta-nav-btn insta-prev-btn" onclick="stepSlide(${eventIdx}, -1)" aria-label="Foto anterior">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button class="insta-nav-btn insta-next-btn" onclick="stepSlide(${eventIdx}, 1)" aria-label="Foto siguiente">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                ` : ''}
            </div>

            <div class="insta-dots-bar" id="dots-${eventIdx}">
                ${dotsHtml}
            </div>

            <footer class="insta-post-footer">
                <div class="insta-caption">
                    <span class="insta-caption-user">@luciano.magrini.musica</span>
                    Registro visual de mi presentación en vivo en: <strong>${event.title}</strong>.
                </div>
            </footer>
        `;

        grid.appendChild(card);
    });
}

/**
 * NAVEGACIÓN Y SLIDER DEL CARRETE INSTAGRAM
 */
function handleTrackScroll(eventIdx) {
    const track = document.getElementById(`track-${eventIdx}`);
    const badge = document.getElementById(`badge-${eventIdx}`);
    const dotsContainer = document.getElementById(`dots-${eventIdx}`);
    if (!track) return;

    const eventData = PORTFOLIO_DATA.events[eventIdx];
    const width = track.clientWidth;
    const currentSlide = Math.round(track.scrollLeft / width);

    // Actualizar badge tipo Instagram
    if (badge) {
        badge.textContent = `${currentSlide + 1} / ${eventData.count}`;
    }

    // Actualizar dots
    if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.insta-dot');
        dots.forEach((dot, idx) => {
            if (idx === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
}

function scrollToSlide(eventIdx, slideIdx) {
    const track = document.getElementById(`track-${eventIdx}`);
    if (!track) return;
    const width = track.clientWidth;
    track.scrollTo({
        left: slideIdx * width,
        behavior: 'smooth'
    });
}

function stepSlide(eventIdx, delta) {
    const track = document.getElementById(`track-${eventIdx}`);
    if (!track) return;
    const width = track.clientWidth;
    const currentSlide = Math.round(track.scrollLeft / width);
    const eventData = PORTFOLIO_DATA.events[eventIdx];
    let nextSlide = currentSlide + delta;
    if (nextSlide < 0) nextSlide = 0;
    if (nextSlide >= eventData.count) nextSlide = eventData.count - 1;

    scrollToSlide(eventIdx, nextSlide);
}

function handleSlideClick(e, eventIdx, slideIdx) {
    // Al hacer clic en cualquier foto, se abre directamente el visor HD
    openEventLightbox(eventIdx, slideIdx);
}

/**
 * LIGHTBOX MODAL PARA FOTOS
 */
function openEventLightbox(eventIdx, slideIdx) {
    const eventData = PORTFOLIO_DATA.events[eventIdx];
    if (!eventData) return;

    currentLightboxImages = eventData.images.map(img => {
        return `${encodeURIComponent(eventData.folder)}/${encodeURIComponent(img)}`;
    });
    currentLightboxTitle = eventData.title;
    currentLightboxIndex = slideIdx;

    updateLightboxView();

    const modal = document.getElementById('lightbox-modal');
    if (modal) {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
}

function openImageLightbox(src, title) {
    currentLightboxImages = [src];
    currentLightboxTitle = title || 'Fotografía';
    currentLightboxIndex = 0;

    updateLightboxView();

    const modal = document.getElementById('lightbox-modal');
    if (modal) {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
}

function updateLightboxView() {
    const imgEl = document.getElementById('lightbox-img');
    const titleEl = document.getElementById('lightbox-title');
    const counterEl = document.getElementById('lightbox-counter');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    if (!imgEl) return;

    imgEl.src = currentLightboxImages[currentLightboxIndex];
    if (titleEl) titleEl.textContent = currentLightboxTitle;
    if (counterEl) {
        counterEl.textContent = `${currentLightboxIndex + 1} de ${currentLightboxImages.length}`;
    }

    // Mostrar/ocultar botones si hay una sola foto
    if (prevBtn && nextBtn) {
        const hasMultiple = currentLightboxImages.length > 1;
        prevBtn.style.display = hasMultiple ? 'flex' : 'none';
        nextBtn.style.display = hasMultiple ? 'flex' : 'none';
    }
}

function lightboxNavigate(delta) {
    if (currentLightboxImages.length <= 1) return;
    currentLightboxIndex += delta;
    if (currentLightboxIndex < 0) {
        currentLightboxIndex = currentLightboxImages.length - 1;
    } else if (currentLightboxIndex >= currentLightboxImages.length) {
        currentLightboxIndex = 0;
    }
    updateLightboxView();
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

/**
 * REPRODUCCIÓN DE VIDEOS DE YOUTUBE
 */
function renderVideosGrid() {
    const grid = document.getElementById('videos-grid');
    if (!grid || !PORTFOLIO_DATA || !PORTFOLIO_DATA.videos) return;

    grid.innerHTML = '';

    PORTFOLIO_DATA.videos.forEach((video) => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.onclick = () => openVideoModal(video.id, video.title, video.description);

        const thumbUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

        card.innerHTML = `
            <div class="video-thumb-wrapper">
                <img src="${thumbUrl}" alt="${video.title}" class="video-thumb-img" loading="lazy">
                <div class="video-thumb-play">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                </div>
                <span class="video-category-tag">${video.categoryLabel}</span>
            </div>
            <div class="video-card-body">
                <h4 class="video-card-title">${video.title}</h4>
                <p class="video-card-desc">${video.description}</p>
            </div>
        `;

        grid.appendChild(card);
    });
}

function playFeaturedVideo(videoId) {
    const holder = document.getElementById('featured-iframe-holder');
    const facade = document.getElementById('featured-facade');
    if (!holder || !facade) return;

    facade.style.display = 'none';
    holder.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1" 
                title="Trailer Música Para Ver" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
    `;
}

function openTrailerModal() {
    openVideoModal('va-IkpnlCAE', 'Trailer Oficial: Música Para Ver (MPV)', 'El espectáculo audiovisual con música en vivo');
}

function openVideoModal(videoId, title, desc) {
    const modal = document.getElementById('video-modal');
    const frame = document.getElementById('video-modal-frame');
    const titleEl = document.getElementById('video-modal-title');
    const descEl = document.getElementById('video-modal-desc');

    if (!modal || !frame) return;

    frame.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1" 
                title="${title}" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
    `;

    if (titleEl) titleEl.textContent = title;
    if (descEl) descEl.textContent = desc || '';

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const frame = document.getElementById('video-modal-frame');
    if (!modal) return;

    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    if (frame) frame.innerHTML = ''; // Detiene la reproducción inmediatamente
    document.body.style.overflow = '';
}

/**
 * FILTROS DE CARRETES DE EVENTOS
 */
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            const cards = document.querySelectorAll('.insta-card');

            cards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/**
 * COMPARTIR / TOAST
 */
function shareEvent(title) {
    const url = window.location.href.split('#')[0] + '#galeria-eventos';
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            showToast(`¡Enlace copiado al portapapeles!`);
        }).catch(() => {
            showToast(`Evento: ${title}`);
        });
    } else {
        showToast(`Evento: ${title}`);
    }
}

function showToast(message) {
    const toast = document.getElementById('toast-notification');
    const msgEl = document.getElementById('toast-message');
    if (!toast || !msgEl) return;

    msgEl.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

/**
 * TECLADO (Navegación accesible con teclas)
 */
function initKeyboardListeners() {
    document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('lightbox-modal');
        const videoModal = document.getElementById('video-modal');

        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') lightboxNavigate(-1);
            if (e.key === 'ArrowRight') lightboxNavigate(1);
        }

        if (videoModal && videoModal.classList.contains('active')) {
            if (e.key === 'Escape') closeVideoModal();
        }
    });
}

/**
 * NAVBAR & SCROLL BEHAVIOR
 */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('menu-toggle');
    const links = document.getElementById('nav-links');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    if (toggle && links) {
        toggle.addEventListener('click', () => {
            const isOpen = links.classList.contains('active');
            links.classList.toggle('active');
            toggle.classList.toggle('active');
            toggle.setAttribute('aria-expanded', !isOpen);
        });

        // Cerrar menú al hacer clic en un link en móviles
        links.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                links.classList.remove('active');
                toggle.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Observador para resaltar sección activa en menú
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            const height = section.offsetHeight;
            if (window.scrollY >= top && window.scrollY < top + height) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }, { passive: true });
}

function initFooterYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}
