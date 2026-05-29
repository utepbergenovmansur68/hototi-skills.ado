// js/animations.js
/**
 * HOTORI SKILLS — Animations Module
 * Анимациялар мен визуалды эффектілер
 */

const AnimationsModule = {
    // Particle system
    particles: [],
    particleCanvas: null,
    particleCtx: null,

    /**
     * Particle жүйесін бастау
     */
    initParticles() {
        this.particleCanvas = document.getElementById('particle-canvas');
        if (!this.particleCanvas) return;
        this.particleCtx = this.particleCanvas.getContext('2d');
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());

        // Particle-лар жасау
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random() * this.particleCanvas.width,
                y: Math.random() * this.particleCanvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.1
            });
        }
        this.animateParticles();
    },

    resizeCanvas() {
        if (!this.particleCanvas) return;
        this.particleCanvas.width = window.innerWidth;
        this.particleCanvas.height = window.innerHeight;
    },

    animateParticles() {
        if (!this.particleCtx || !this.particleCanvas) return;
        const ctx = this.particleCtx;
        const w = this.particleCanvas.width;
        const h = this.particleCanvas.height;

        ctx.clearRect(0, 0, w, h);

        this.particles.forEach((p, i) => {
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0) p.x = w;
            if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h;
            if (p.y > h) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(108, 99, 255, ${p.opacity})`;
            ctx.fill();

            // Байланыс сызықтары
            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(108, 99, 255, ${0.1 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(() => this.animateParticles());
    },

    /**
     * Floating math symbols
     */
    initFloatingSymbols() {
        const container = document.getElementById('floating-symbols');
        if (!container) return;

        const symbols = ['+', '-', '×', '÷', '=', '<', '>', 'x', 'y', 'π', '∞', '√', 'Σ', '∫', '%'];

        function createSymbol() {
            const el = document.createElement('span');
            el.className = 'float-symbol';
            el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            el.style.left = Math.random() * 100 + '%';
            el.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
            el.style.animationDuration = (Math.random() * 10 + 10) + 's';
            el.style.animationDelay = Math.random() * 5 + 's';
            container.appendChild(el);

            setTimeout(() => el.remove(), 25000);
        }

        // Бастапқы символдар
        for (let i = 0; i < 8; i++) {
            setTimeout(createSymbol, i * 500);
        }

        // Жаңа символдар қосу
        setInterval(createSymbol, 3000);
    },

    /**
     * Confetti эффектісі
     */
    showConfetti(count = 50) {
        const colors = ['#6C63FF', '#FF6584', '#00D68F', '#FFAA00', '#00B4D8', '#FF4081'];
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti-piece';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-10px';
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.width = (Math.random() * 8 + 5) + 'px';
                confetti.style.height = (Math.random() * 8 + 5) + 'px';
                confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
                confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
                document.body.appendChild(confetti);
                setTimeout(() => confetti.remove(), 4000);
            }, i * 30);
        }
    },

    /**
     * Notification көрсету
     */
    showNotification(message, type = 'info', duration = 3000) {
        const container = document.getElementById('notification-container');
        if (!container) return;

        const icons = { success: '✅', error: '❌', info: 'ℹ️' };
        const notif = document.createElement('div');
        notif.className = `notification ${type}`;
        notif.innerHTML = `
            <span class="notification-icon">${icons[type] || 'ℹ️'}</span>
            <span class="notification-text">${message}</span>
        `;
        container.appendChild(notif);

        setTimeout(() => {
            notif.style.opacity = '0';
            notif.style.transform = 'translateX(100%)';
            notif.style.transition = 'all 0.3s ease';
            setTimeout(() => notif.remove(), 300);
        }, duration);
    },

    /**
     * Achievement popup
     */
    showAchievement(title, desc, icon = '🏆') {
        const popup = document.getElementById('achievement-popup');
        if (!popup) return;

        document.getElementById('achievement-title').textContent = title;
        document.getElementById('achievement-desc').textContent = desc;
        popup.querySelector('.achievement-icon').textContent = icon;
        popup.classList.remove('hidden');

        this.showConfetti(30);

        setTimeout(() => {
            popup.classList.add('hidden');
        }, 3000);
    },

    /**
     * Scroll reveal анимациялар
     */
    initScrollReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('[data-aos]').forEach(el => {
            observer.observe(el);
        });
    },

    /**
     * Number counter анимация
     */
    animateCounter(element, target, duration = 2000) {
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    },

    /**
     * Loading screen
     */
    hideLoadingScreen() {
        const screen = document.getElementById('loading-screen');
        if (screen) {
            setTimeout(() => {
                screen.classList.add('hidden');
            }, 1500);
        }
    },

    /**
     * Bar chart анимация
     */
    animateBar(element, targetWidth) {
        setTimeout(() => {
            element.style.width = targetWidth + '%';
        }, 300);
    },

    /**
     * Circle progress анимация
     */
    animateCircle(element, percent) {
        const circumference = 314; // 2 * PI * 50
        const offset = circumference - (percent / 100) * circumference;
        setTimeout(() => {
            element.style.strokeDashoffset = offset;
        }, 300);
    },

    init() {
        this.initParticles();
        this.initFloatingSymbols();
        this.initScrollReveal();
    }
};