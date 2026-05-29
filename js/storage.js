// js/storage.js
/**
 * HOTORI SKILLS — LocalStorage Manager
 * Базаны басқару модулі
 */

const StorageManager = {
    /**
     * Деректерді оқу
     */
    get(key) {
        try {
            const data = localStorage.getItem('hotori_' + key);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Storage read error:', e);
            return null;
        }
    },

    /**
     * Деректерді жазу
     */
    set(key, value) {
        try {
            localStorage.setItem('hotori_' + key, JSON.stringify(value));
        } catch (e) {
            console.error('Storage write error:', e);
        }
    },

    /**
     * Деректерді өшіру
     */
    remove(key) {
        try {
            localStorage.removeItem('hotori_' + key);
        } catch (e) {
            console.error('Storage remove error:', e);
        }
    },

    /**
     * Прогресс деректерін алу
     */
    getProgress() {
        return this.get('progress') || {
            xp: 0,
            level: 1,
            streak: 0,
            lastActiveDate: null,
            topicsRead: [],
            practiceScores: {},
            testScores: {},
            activities: [],
            achievements: []
        };
    },

    /**
     * Прогресс деректерін сақтау
     */
    saveProgress(progress) {
        this.set('progress', progress);
    },

    /**
     * XP қосу
     */
    addXP(amount, activity) {
        const progress = this.getProgress();
        progress.xp += amount;

        // Деңгейді есептеу
        const newLevel = Math.floor(progress.xp / 100) + 1;
        if (newLevel > progress.level) {
            progress.level = newLevel;
            return { xp: progress.xp, level: progress.level, leveledUp: true };
        }

        // Стreak жаңарту
        const today = new Date().toDateString();
        if (progress.lastActiveDate !== today) {
            const yesterday = new Date(Date.now() - 86400000).toDateString();
            if (progress.lastActiveDate === yesterday) {
                progress.streak++;
            } else if (progress.lastActiveDate !== today) {
                progress.streak = 1;
            }
            progress.lastActiveDate = today;
        }

        // Activity log
        if (activity) {
            progress.activities.unshift({
                text: activity,
                time: new Date().toISOString(),
                xp: amount
            });
            if (progress.activities.length > 50) {
                progress.activities = progress.activities.slice(0, 50);
            }
        }

        this.saveProgress(progress);
        return { xp: progress.xp, level: progress.level, leveledUp: false, streak: progress.streak };
    },

    /**
     * Тақырыпты оқылған деп белгілеу
     */
    markTopicRead(topicIndex) {
        const progress = this.getProgress();
        if (!progress.topicsRead.includes(topicIndex)) {
            progress.topicsRead.push(topicIndex);
            this.saveProgress(progress);
            this.addXP(5, '📖 Тақырып оқылды: #' + (topicIndex + 1));
            return true;
        }
        return false;
    },

    /**
     * Практика нәтижесін сақтау
     */
    savePracticeScore(topicIndex, correct, total) {
        const progress = this.getProgress();
        const key = 'practice_' + topicIndex;
        const prev = progress.practiceScores[key] || { correct: 0, total: 0 };
        progress.practiceScores[key] = {
            correct: prev.correct + correct,
            total: prev.total + total
        };
        this.saveProgress(progress);

        const xp = correct * 10;
        this.addXP(xp, '✏️ Практика: ' + correct + '/' + total);
        return xp;
    },

    /**
     * Тест нәтижесін сақтау
     */
    saveTestScore(topicIndex, correct, total) {
        const progress = this.getProgress();
        const key = 'test_' + topicIndex;
        const prev = progress.testScores[key] || { bestScore: 0 };
        if (correct > prev.bestScore) {
            prev.bestScore = correct;
        }
        progress.testScores[key] = prev;
        this.saveProgress(progress);

        const xp = correct * 15;
        this.addXP(xp, '📝 Тест: ' + correct + '/' + total);
        return xp;
    },

    /**
     * Барлық прогресті тазалау
     */
    clearAll() {
        const keys = Object.keys(localStorage).filter(k => k.startsWith('hotori_'));
        keys.forEach(k => localStorage.removeItem(k));
    },

    /**
     * Тақырыптың оқылғанын тексеру
     */
    isTopicRead(topicIndex) {
        const progress = this.getProgress();
        return progress.topicsRead.includes(topicIndex);
    },

    /**
     * Achievement тексеру және қосу
     */
    checkAchievements() {
        const progress = this.getProgress();
        const achievements = progress.achievements || [];
        const newAchievements = [];

        const allAchievements = [
            { id: 'first_step', name: 'Алғашқы қадам', icon: '👣', condition: () => progress.topicsRead.length >= 1 },
            { id: 'reader', name: 'Оқырман', icon: '📚', condition: () => progress.topicsRead.length >= 5 },
            { id: 'scholar', name: 'Ғалым', icon: '🎓', condition: () => progress.topicsRead.length >= 10 },
            { id: 'master', name: 'Мастер', icon: '🏅', condition: () => progress.topicsRead.length >= 20 },
            { id: 'first_practice', name: 'Алғашқы есеп', icon: '✏️', condition: () => Object.keys(progress.practiceScores).length >= 1 },
            { id: 'practice_pro', name: 'Практикашы', icon: '💪', condition: () => Object.keys(progress.practiceScores).length >= 10 },
            { id: 'first_test', name: 'Алғашқы тест', icon: '📝', condition: () => Object.keys(progress.testScores).length >= 1 },
            { id: 'test_master', name: 'Тест шебері', icon: '🎯', condition: () => Object.keys(progress.testScores).length >= 10 },
            { id: 'xp_100', name: '100 XP', icon: '⭐', condition: () => progress.xp >= 100 },
            { id: 'xp_500', name: '500 XP', icon: '🌟', condition: () => progress.xp >= 500 },
            { id: 'xp_1000', name: '1000 XP', icon: '💫', condition: () => progress.xp >= 1000 },
            { id: 'streak_3', name: '3 күн streak', icon: '🔥', condition: () => progress.streak >= 3 },
            { id: 'streak_7', name: '7 күн streak', icon: '🔥🔥', condition: () => progress.streak >= 7 },
            { id: 'perfect_test', name: 'Мінсіз тест', icon: '💯', condition: () => Object.values(progress.testScores).some(s => s.bestScore >= 10) },
            { id: 'level_5', name: '5-деңгей', icon: '🏆', condition: () => progress.level >= 5 },
            { id: 'level_10', name: '10-деңгей', icon: '👑', condition: () => progress.level >= 10 },
        ];

        allAchievements.forEach(a => {
            if (!achievements.includes(a.id) && a.condition()) {
                achievements.push(a.id);
                newAchievements.push(a);
            }
        });

        progress.achievements = achievements;
        this.saveProgress(progress);
        return newAchievements;
    }
};