// js/main.js
/**
 * HOTORI SKILLS — Main Application
 * Негізгі қолданба логикасы
 */

document.addEventListener('DOMContentLoaded', () => {
    // Loading screen
    AnimationsModule.hideLoadingScreen();

    // Init animations
    AnimationsModule.init();

    // Theme
    initTheme();

    // Navigation
    initNavigation();

    // Scroll to top
    initScrollTop();

    // Scroll navbar effect
    initNavbarScroll();

    // Sound toggle
    initSoundToggle();

    // Daily tip
    initDailyTip();

    // Check streak on load
    updateStreak();
});

/* ============================================
   THEME SWITCHER
   ============================================ */
function initTheme() {
    const savedTheme = StorageManager.get('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', next);
            StorageManager.set('theme', next);
            updateThemeIcon(next);
        });
    }
}

function updateThemeIcon(theme) {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) toggle.textContent = theme === 'light' ? '🌙' : '☀️';
}

/* ============================================
   NAVIGATION
   ============================================ */
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('open');
        });

        // Nav link click — close mobile menu
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('open');
            });
        });
    }

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (navMenu && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('open');
        }
    });
}

/* ============================================
   SCROLL TO TOP
   ============================================ */
function initScrollTop() {
    const btn = document.getElementById('scroll-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ============================================
   NAVBAR SCROLL EFFECT
   ============================================ */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ============================================
   SOUND TOGGLE
   ============================================ */
let soundEnabled = true;

function initSoundToggle() {
    const toggle = document.getElementById('sound-toggle');
    if (!toggle) return;

    const saved = StorageManager.get('sound');
    if (saved !== null) {
        soundEnabled = saved;
    }
    updateSoundIcon();

    toggle.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        StorageManager.set('sound', soundEnabled);
        updateSoundIcon();
    });
}

function updateSoundIcon() {
    const toggle = document.getElementById('sound-toggle');
    if (toggle) toggle.textContent = soundEnabled ? '🔊' : '🔇';
}

function playSound(type) {
    if (!soundEnabled) return;
    // Web Audio API арқылы дыбыс
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        if (type === 'correct') {
            osc.frequency.setValueAtTime(523, ctx.currentTime);
            osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
            osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.4);
        } else if (type === 'wrong') {
            osc.frequency.setValueAtTime(300, ctx.currentTime);
            osc.frequency.setValueAtTime(200, ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.3);
        } else if (type === 'click') {
            osc.frequency.setValueAtTime(800, ctx.currentTime);
            gain.gain.setValueAtTime(0.05, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.1);
        }
    } catch (e) { /* Audio not supported */ }
}

/* ============================================
   DAILY TIP
   ============================================ */
function initDailyTip() {
    const tips = [
        "Теңдеу шешкенде, теңдіктің екі жағына да бірдей амал қолдан!",
        "Теңсіздікті теріс санға көбейткенде, таңбаны өзгертуді ұмытпа!",
        "Айнымалы — мәні белгісіз шама, ол әріппен белгіленеді.",
        "Теңдеу түбірін тапқан соң, оны теңдеуге қойып тексер!",
        "x + a = b түріндегі теңдеуді шешу: x = b - a",
        "ax = b түріндегі теңдеуді шешу: x = b ÷ a",
        "Теңсіздік — екі өрнектің салыстырылуы (<, >, ≤, ≥).",
        "Координаталық сәуледе нүктенің орнын сан көрсетеді.",
        "|a| — a санының модулі, ол әрқашан теріс емес.",
        "Қос теңсіздік: a < x < b — x саны a мен b арасында.",
        "Есеп шығарғанда, әр қадамды мұқият жаз!",
        "Теңдеудің екі жағына бірдей сан қосуға болады.",
        "Бөлшек теңдеуде, екі жақты да бөлгішке көбейт.",
        "Практика — білімнің кілті! Көбірек жаттық!",
        "Қате жіберу — қалыпты жағдай. Одан үйрен!"
    ];

    const el = document.getElementById('daily-tip-text');
    if (el) {
        const dayIndex = new Date().getDate() % tips.length;
        el.textContent = tips[dayIndex];
    }
}

/* ============================================
   STREAK UPDATE
   ============================================ */
function updateStreak() {
    const progress = StorageManager.getProgress();
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    if (progress.lastActiveDate && progress.lastActiveDate !== today && progress.lastActiveDate !== yesterday) {
        progress.streak = 0;
        StorageManager.saveProgress(progress);
    }
}

/* ============================================
   INDEX PAGE: Stats counter
   ============================================ */
if (document.querySelector('.hero-stats')) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.stat-number').forEach(el => {
                    const target = parseInt(el.dataset.count);
                    AnimationsModule.animateCounter(el, target);
                });
                observer.disconnect();
            }
        });
    });
    observer.observe(document.querySelector('.hero-stats'));
}