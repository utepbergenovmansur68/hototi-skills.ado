// js/progress.js
/**
 * HOTORI SKILLS — Progress Page
 * Прогресс пен статистика
 */

const ProgressModule = {
    topics: [
        "Айнымалы ұғымы", "Санды өрнектер", "Әріпті өрнектер", "Теңдік және теңсіздік",
        "Теңдеу ұғымы", "Қарапайым теңдеулер", "Бір амалмен шешу", "Екі амалмен шешу",
        "Тексеру әдісі", "Мәтінді есептер", "Теңсіздік ұғымы", "Теңсіздік қасиеттері",
        "Қарапайым теңсіздіктер", "Координаталық сәуле", "Сан аралықтары", "Қос теңсіздіктер",
        "Модуль элементтері", "Күрделі теңдеулер", "Логикалық есептер", "Қайталау"
    ],

    achievements: [
        { id: 'first_step', name: 'Алғашқы қадам', icon: '👣' },
        { id: 'reader', name: 'Оқырман', icon: '📚' },
        { id: 'scholar', name: 'Ғалым', icon: '🎓' },
        { id: 'master', name: 'Мастер', icon: '🏅' },
        { id: 'first_practice', name: 'Алғашқы есеп', icon: '✏️' },
        { id: 'practice_pro', name: 'Практикашы', icon: '💪' },
        { id: 'first_test', name: 'Алғашқы тест', icon: '📝' },
        { id: 'test_master', name: 'Тест шебері', icon: '🎯' },
        { id: 'xp_100', name: '100 XP', icon: '⭐' },
        { id: 'xp_500', name: '500 XP', icon: '🌟' },
        { id: 'xp_1000', name: '1000 XP', icon: '💫' },
        { id: 'streak_3', name: '3 күн streak', icon: '🔥' },
        { id: 'streak_7', name: '7 күн streak', icon: '🔥🔥' },
        { id: 'perfect_test', name: 'Мінсіз тест', icon: '💯' },
        { id: 'level_5', name: '5-деңгей', icon: '🏆' },
        { id: 'level_10', name: '10-деңгей', icon: '👑' }
    ],

    init() {
        this.renderXP();
        this.renderCircles();
        this.renderTopicBars();
        this.renderAchievements();
        this.renderActivityLog();
        this.bindEvents();
    },

    renderXP() {
        const progress = StorageManager.getProgress();

        document.getElementById('player-level').textContent = `Деңгей: ${progress.level}`;
        document.getElementById('current-xp').textContent = progress.xp % 100;
        document.getElementById('xp-needed').textContent = 100;
        document.getElementById('total-xp-display').textContent = progress.xp;
        document.getElementById('streak-display').textContent = progress.streak;

        // Calculate active days
        const activities = progress.activities || [];
        const activeDays = new Set();
        activities.forEach(a => {
            const date = new Date(a.time).toDateString();
            activeDays.add(date);
        });
        document.getElementById('days-active').textContent = activeDays.size || 0;

        // XP bar
        const xpPercent = progress.xp % 100;
        document.getElementById('xp-bar-fill').style.width = xpPercent + '%';
    },

    renderCircles() {
        const progress = StorageManager.getProgress();

        // Theory circle
        const theoryRead = progress.topicsRead?.length || 0;
        const theoryPercent = Math.round((theoryRead / 20) * 100);
        AnimationsModule.animateCircle(document.getElementById('theory-circle'), theoryPercent);
        document.getElementById('theory-percent').textContent = theoryPercent + '%';
        document.getElementById('theory-detail').textContent = `${theoryRead} / 20 тақырып`;

        // Practice circle
        const practiceScores = progress.practiceScores || {};
        let totalPracticeCorrect = 0;
        let totalPracticeTotal = 0;
        Object.values(practiceScores).forEach(s => {
            totalPracticeCorrect += s.correct;
            totalPracticeTotal += s.total;
        });
        const practicePercent = totalPracticeTotal > 0 ? Math.round((totalPracticeCorrect / totalPracticeTotal) * 100) : 0;
        AnimationsModule.animateCircle(document.getElementById('practice-circle'), practicePercent);
        document.getElementById('practice-percent').textContent = practicePercent + '%';
        document.getElementById('practice-detail').textContent = `${totalPracticeCorrect} дұрыс жауап`;

        // Test circle
        const testScores = progress.testScores || {};
        const totalTests = Object.keys(testScores).length;
        const maxTests = 20;
        const testPercent = Math.round((totalTests / maxTests) * 100);
        AnimationsModule.animateCircle(document.getElementById('test-circle'), testPercent);
        document.getElementById('test-percent').textContent = testPercent + '%';
        document.getElementById('test-detail').textContent = `${totalTests} тест тапсырылды`;
    },

    renderTopicBars() {
        const container = document.getElementById('topic-bars');
        if (!container) return;
        container.innerHTML = '';

        const progress = StorageManager.getProgress();

        this.topics.forEach((topic, i) => {
            // Calculate score for this topic
            let score = 0;
            if (progress.topicsRead.includes(i)) score += 20;
            const pKey = 'practice_' + i;
            if (progress.practiceScores[pKey]) {
                const ps = progress.practiceScores[pKey];
                score += Math.round((ps.correct / ps.total) * 30);
            }
            const tKey = 'test_' + i;
            if (progress.testScores[tKey]) {
                score += Math.round((progress.testScores[tKey].bestScore / 10) * 50);
            }

            const barItem = document.createElement('div');
            barItem.className = 'topic-bar-item';
            barItem.innerHTML = `
                <span class="topic-bar-label" title="${topic}">${i + 1}. ${topic}</span>
                <div class="topic-bar-track">
                    <div class="topic-bar-fill" style="width: 0%"></div>
                </div>
                <span class="topic-bar-percent">0%</span>
            `;
            container.appendChild(barItem);

            // Animate
            setTimeout(() => {
                const fill = barItem.querySelector('.topic-bar-fill');
                const percent = barItem.querySelector('.topic-bar-percent');
                fill.style.width = score + '%';
                percent.textContent = score + '%';

                // Color based on score
                if (score >= 80) fill.style.background = 'linear-gradient(90deg, #00D68F, #00B4D8)';
                else if (score >= 50) fill.style.background = 'linear-gradient(90deg, #FFAA00, #FF6584)';
                else if (score > 0) fill.style.background = 'linear-gradient(90deg, #FF6584, #FF4081)';
                else fill.style.background = 'linear-gradient(90deg, #6B7280, #9CA3AF)';
            }, 100 + i * 50);
        });
    },

    renderAchievements() {
        const container = document.getElementById('achievements-grid');
        if (!container) return;
        container.innerHTML = '';

        const progress = StorageManager.getProgress();
        const unlocked = progress.achievements || [];

        this.achievements.forEach(ach => {
            const isUnlocked = unlocked.includes(ach.id);
            const item = document.createElement('div');
            item.className = `achievement-item ${isUnlocked ? 'unlocked' : 'locked'}`;
            item.innerHTML = `
                <span class="ach-icon">${ach.icon}</span>
                <span class="ach-name">${ach.name}</span>
            `;
            if (isUnlocked) {
                item.title = 'Қол жеткізілді! ✅';
            } else {
                item.title = 'Қол жеткізілмеген 🔒';
            }
            container.appendChild(item);
        });
    },

    renderActivityLog() {
        const container = document.getElementById('log-list');
        if (!container) return;
        container.innerHTML = '';

        const progress = StorageManager.getProgress();
        const activities = progress.activities || [];

        if (activities.length === 0) {
            container.innerHTML = '<li class="log-empty">Әлі әрекет жоқ. Оқуды баста!</li>';
            return;
        }

        activities.slice(0, 20).forEach(a => {
            const li = document.createElement('li');
            li.className = 'log-item';

            // Icon based on text
            let icon = '📌';
            if (a.text.includes('📖')) icon = '📖';
            else if (a.text.includes('✏️')) icon = '✏️';
            else if (a.text.includes('📝')) icon = '📝';

            const time = new Date(a.time);
            const timeStr = this.formatTime(time);

            li.innerHTML = `
                <span class="log-icon">${icon}</span>
                <span class="log-text">${a.text} (+${a.xp} XP)</span>
                <span class="log-time">${timeStr}</span>
            `;
            container.appendChild(li);
        });
    },

    formatTime(date) {
        const now = new Date();
        const diff = now - date;

        if (diff < 60000) return 'Қазір';
        if (diff < 3600000) return Math.round(diff / 60000) + ' мин бұрын';
        if (diff < 86400000) return Math.round(diff / 3600000) + ' сағ бұрын';
        if (diff < 604800000) return Math.round(diff / 86400000) + ' күн бұрын';

        return date.toLocaleDateString('kk-KZ');
    },

    bindEvents() {
        // Reset button
        const resetBtn = document.getElementById('reset-progress-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (confirm('Сіз шынымен прогресті тазалағыңыз келе ме? Бұл әрекет қайтарылмайды!')) {
                    StorageManager.clearAll();
                    AnimationsModule.showNotification('Прогресс тазаланды!', 'info');
                    setTimeout(() => location.reload(), 1500);
                }
            });
        }
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    ProgressModule.init();
});