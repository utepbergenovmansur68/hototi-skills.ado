// js/practice.js
/**
 * HOTORI SKILLS — Practice Page
 * Практикалық есептер
 */

const PracticeModule = {
    topics: [
        "Айнымалы ұғымы", "Санды өрнектер", "Әріпті өрнектер", "Теңдік және теңсіздік",
        "Теңдеу ұғымы", "Қарапайым теңдеулер", "Бір амалмен шешу", "Екі амалмен шешу",
        "Тексеру әдісі", "Мәтінді есептер", "Теңсіздік ұғымы", "Теңсіздік қасиеттері",
        "Қарапайым теңсіздіктер", "Координаталық сәуле", "Сан аралықтары", "Қос теңсіздіктер",
        "Модуль элементтері", "Күрделі теңдеулер", "Логикалық есептер", "Қайталау"
    ],

    // Есептер генераторы
    generateExercises(topicIndex) {
        const exercises = [];
        switch (topicIndex) {
            case 0: // Айнымалы ұғымы
                exercises.push(
                    { question: "x + 5 = 12 теңдеуіндегі x-ті тап", answer: "7", solution: "x = 12 - 5 = 7" },
                    { question: "3y = 21 болса, y нешеге тең?", answer: "7", solution: "y = 21 ÷ 3 = 7" },
                    { question: "a - 8 = 15 болса, a нешеге тең?", answer: "23", solution: "a = 15 + 8 = 23" },
                    { question: "24 ÷ b = 6 болса, b нешеге тең?", answer: "4", solution: "b = 24 ÷ 6 = 4" },
                    { question: "c + 13 = 30 болса, c нешеге тең?", answer: "17", solution: "c = 30 - 13 = 17" }
                );
                break;
            case 1: // Санды өрнектер
                exercises.push(
                    { question: "3 + 5 × 2 = ?", answer: "13", solution: "3 + 10 = 13" },
                    { question: "(10 - 4) × 3 = ?", answer: "18", solution: "6 × 3 = 18" },
                    { question: "20 ÷ 4 + 7 = ?", answer: "12", solution: "5 + 7 = 12" },
                    { question: "2 × (6 + 3) = ?", answer: "18", solution: "2 × 9 = 18" },
                    { question: "15 - 3 × 4 = ?", answer: "3", solution: "15 - 12 = 3" }
                );
                break;
            case 2: // Әріпті өрнектер
                exercises.push(
                    { question: "2x + 3, x = 5 болса, мәні неше?", answer: "13", solution: "2 × 5 + 3 = 13" },
                    { question: "a - b, a = 15, b = 7 болса", answer: "8", solution: "15 - 7 = 8" },
                    { question: "3y + 1, y = 4 болса", answer: "13", solution: "3 × 4 + 1 = 13" },
                    { question: "2a + 3b, a = 3, b = 2 болса", answer: "12", solution: "2 × 3 + 3 × 2 = 6 + 6 = 12" },
                    { question: "5x - 2, x = 6 болса", answer: "28", solution: "5 × 6 - 2 = 30 - 2 = 28" }
                );
                break;
            case 3: // Теңдік және теңсіздік
                exercises.push(
                    { question: "8 + 4 □ 15. □ орнына <, > немесе = қой", answer: "<", solution: "12 < 15" },
                    { question: "20 - 7 □ 13. □ орнына белгі қой", answer: "=", solution: "13 = 13" },
                    { question: "9 × 2 □ 17. □ орнына белгі қой", answer: ">", solution: "18 > 17" },
                    { question: "25 ÷ 5 □ 6. □ орнына белгі қой", answer: "<", solution: "5 < 6" },
                    { question: "6 + 6 □ 12. □ орнына белгі қой", answer: "=", solution: "12 = 12" }
                );
                break;
            case 4: // Теңдеу ұғымы
                exercises.push(
                    { question: "x + 9 = 17", answer: "8", solution: "x = 17 - 9 = 8" },
                    { question: "x - 6 = 14", answer: "20", solution: "x = 14 + 6 = 20" },
                    { question: "4x = 28", answer: "7", solution: "x = 28 ÷ 4 = 7" },
                    { question: "x ÷ 5 = 3", answer: "15", solution: "x = 3 × 5 = 15" },
                    { question: "x + 11 = 25", answer: "14", solution: "x = 25 - 11 = 14" }
                );
                break;
            case 5: // Қарапайым теңдеулер
                exercises.push(
                    { question: "x + 15 = 32", answer: "17", solution: "x = 32 - 15 = 17" },
                    { question: "x - 9 = 23", answer: "32", solution: "x = 23 + 9 = 32" },
                    { question: "6x = 42", answer: "7", solution: "x = 42 ÷ 6 = 7" },
                    { question: "x ÷ 8 = 4", answer: "32", solution: "x = 4 × 8 = 32" },
                    { question: "x + 20 = 50", answer: "30", solution: "x = 50 - 20 = 30" }
                );
                break;
            case 6: // Бір амалмен шешу
                exercises.push(
                    { question: "x + 7 = 19", answer: "12", solution: "x = 19 - 7 = 12" },
                    { question: "x - 13 = 27", answer: "40", solution: "x = 27 + 13 = 40" },
                    { question: "8x = 56", answer: "7", solution: "x = 56 ÷ 8 = 7" },
                    { question: "x ÷ 6 = 9", answer: "54", solution: "x = 9 × 6 = 54" },
                    { question: "x + 33 = 60", answer: "27", solution: "x = 60 - 33 = 27" }
                );
                break;
            case 7: // Екі амалмен шешу
                exercises.push(
                    { question: "2x + 3 = 13", answer: "5", solution: "2x = 10 → x = 5" },
                    { question: "3x - 4 = 17", answer: "7", solution: "3x = 21 → x = 7" },
                    { question: "4x + 6 = 26", answer: "5", solution: "4x = 20 → x = 5" },
                    { question: "5x - 10 = 25", answer: "7", solution: "5x = 35 → x = 7" },
                    { question: "2x + 8 = 20", answer: "6", solution: "2x = 12 → x = 6" }
                );
                break;
            case 8: // Тексеру әдісі
                exercises.push(
                    { question: "3x + 2 = 17, x = 5 дұрыс па? (1 - иә, 0 - жоқ)", answer: "1", solution: "3 × 5 + 2 = 15 + 2 = 17 ✓" },
                    { question: "2x - 3 = 9, x = 6 дұрыс па? (1 - иә, 0 - жоқ)", answer: "1", solution: "2 × 6 - 3 = 12 - 3 = 9 ✓" },
                    { question: "4x + 1 = 20, x = 5 дұрыс па? (1 - иә, 0 - жоқ)", answer: "0", solution: "4 × 5 + 1 = 21 ≠ 20 ✗" },
                    { question: "x + 8 = 15, x = 7 дұрыс па? (1 - иә, 0 - жоқ)", answer: "1", solution: "7 + 8 = 15 ✓" },
                    { question: "5x - 2 = 18, x = 3 дұрыс па? (1 - иә, 0 - жоқ)", answer: "0", solution: "5 × 3 - 2 = 13 ≠ 18 ✗" }
                );
                break;
            case 9: // Мәтінді есептер
                exercises.push(
                    { question: "Сенде x алма бар. 4 алма алдың, барлығы 11 болды. x неше?", answer: "7", solution: "x + 4 = 11 → x = 7" },
                    { question: "Қорапта x қарындаш. 3-ін алғанда 12 қалды. x неше?", answer: "15", solution: "x - 3 = 12 → x = 15" },
                    { question: "Бір сан екіншісінен 2 есе үлкен. Қосындысы 18. Кіші сан неше?", answer: "6", solution: "x + 2x = 18 → 3x = 18 → x = 6" },
                    { question: "5 бірдей дәптер 35 теңге тұрады. Бір дәптер неше теңге?", answer: "7", solution: "5x = 35 → x = 7" },
                    { question: "x метр матадан 4 көйлек тігілді. Әр көйлекке 3 метр кетті. x неше?", answer: "12", solution: "x ÷ 4 = 3 → x = 12" }
                );
                break;
            case 10: // Теңсіздік ұғымы
                exercises.push(
                    { question: "x > 5 теңсіздігін қанағаттандыратын ең кіші бүтін сан", answer: "6", solution: "6 > 5 ✓" },
                    { question: "x < 10 теңсіздігін қанағаттандыратын ең үлкен бүтін сан", answer: "9", solution: "9 < 10 ✓" },
                    { question: "3 + x > 8 болса, x > ?", answer: "5", solution: "x > 8 - 3 → x > 5" },
                    { question: "x - 4 < 7 болса, x < ?", answer: "11", solution: "x < 7 + 4 → x < 11" },
                    { question: "2x > 12 болса, x > ?", answer: "6", solution: "x > 12 ÷ 2 → x > 6" }
                );
                break;
            case 11: // Теңсіздік қасиеттері
                exercises.push(
                    { question: "3 < 7. Екі жағына 5 қоссақ: 8 □ 12. Белгіні жаз", answer: "<", solution: "8 < 12" },
                    { question: "5 < 9. Екі жағын 2-ге көбейтсек: 10 □ 18", answer: "<", solution: "10 < 18" },
                    { question: "4 < 6. Екі жағын -1-ге көбейтсек: -4 □ -6", answer: ">", solution: "-4 > -6 (таңба өзгерді!)" },
                    { question: "10 > 3. Екі жағынан 2 азайтсақ: 8 □ 1", answer: ">", solution: "8 > 1" },
                    { question: "6 < 12. Екі жағын 3-ке бөлсек: 2 □ 4", answer: "<", solution: "2 < 4" }
                );
                break;
            case 12: // Қарапайым теңсіздіктер
                exercises.push(
                    { question: "x + 3 > 10 → x > ?", answer: "7", solution: "x > 10 - 3 → x > 7" },
                    { question: "x - 5 < 12 → x < ?", answer: "17", solution: "x < 12 + 5 → x < 17" },
                    { question: "2x ≥ 14 → x ≥ ?", answer: "7", solution: "x ≥ 14 ÷ 2 → x ≥ 7" },
                    { question: "x ÷ 3 ≤ 4 → x ≤ ?", answer: "12", solution: "x ≤ 4 × 3 → x ≤ 12" },
                    { question: "x + 8 ≥ 15 → x ≥ ?", answer: "7", solution: "x ≥ 15 - 8 → x ≥ 7" }
                );
                break;
            case 13: // Координаталық сәуле
                exercises.push(
                    { question: "A(3) мен B(7) арасындағы қашықтық", answer: "4", solution: "AB = 7 - 3 = 4" },
                    { question: "C(2) мен D(10) арасындағы қашықтық", answer: "8", solution: "CD = 10 - 2 = 8" },
                    { question: "E(0) нүктесінен F(6) нүктесіне дейінгі қашықтық", answer: "6", solution: "EF = 6 - 0 = 6" },
                    { question: "M(1) мен N(9) арасындағы қашықтық", answer: "8", solution: "MN = 9 - 1 = 8" },
                    { question: "P(5) мен Q(5) арасындағы қашықтық", answer: "0", solution: "PQ = 5 - 5 = 0" }
                );
                break;
            case 14: // Сан аралықтары
                exercises.push(
                    { question: "(3, 8) аралығында неше бүтін сан бар?", answer: "4", solution: "4, 5, 6, 7 — 4 сан" },
                    { question: "[1, 5] аралығында неше бүтін сан бар?", answer: "5", solution: "1, 2, 3, 4, 5 — 5 сан" },
                    { question: "(0, 6) аралығындағы ең үлкен бүтін сан", answer: "5", solution: "1, 2, 3, 4, 5 → ең үлкені 5" },
                    { question: "[2, 10] аралығындағы ең кіші бүтін сан", answer: "2", solution: "2 — ең кіші (жабық аралық)" },
                    { question: "(5, 12) аралығында неше бүтін сан?", answer: "6", solution: "6, 7, 8, 9, 10, 11 — 6 сан" }
                );
                break;
            case 15: // Қос теңсіздіктер
                exercises.push(
                    { question: "2 < x < 7. Осы аралықтағы бүтін сандар саны", answer: "4", solution: "3, 4, 5, 6 — 4 сан" },
                    { question: "0 ≤ x ≤ 4. Бүтін сандар саны", answer: "5", solution: "0, 1, 2, 3, 4 — 5 сан" },
                    { question: "5 < x < 9. Ең үлкен бүтін сан", answer: "8", solution: "6, 7, 8 → ең үлкені 8" },
                    { question: "1 ≤ x ≤ 8. Ең кіші бүтін сан", answer: "1", solution: "1 — ең кіші" },
                    { question: "3 < x < 10. Бүтін сандар саны", answer: "6", solution: "4, 5, 6, 7, 8, 9 — 6 сан" }
                );
                break;
            case 16: // Модуль
                exercises.push(
                    { question: "|-5| = ?", answer: "5", solution: "|-5| = 5" },
                    { question: "|7| = ?", answer: "7", solution: "|7| = 7" },
                    { question: "|-12| = ?", answer: "12", solution: "|-12| = 12" },
                    { question: "|0| = ?", answer: "0", solution: "|0| = 0" },
                    { question: "|3 - 9| = ?", answer: "6", solution: "|-6| = 6" }
                );
                break;
            case 17: // Күрделі теңдеулер
                exercises.push(
                    { question: "2(x + 3) = 16", answer: "5", solution: "2x + 6 = 16 → 2x = 10 → x = 5" },
                    { question: "3(x - 2) = 15", answer: "7", solution: "3x - 6 = 15 → 3x = 21 → x = 7" },
                    { question: "4x + 2x = 30", answer: "5", solution: "6x = 30 → x = 5" },
                    { question: "5(x + 1) - 3 = 22", answer: "4", solution: "5x + 5 - 3 = 22 → 5x = 20 → x = 4" },
                    { question: "2(3x - 1) = 16", answer: "3", solution: "6x - 2 = 16 → 6x = 18 → x = 3" }
                );
                break;
            case 18: // Логикалық есептер
                exercises.push(
                    { question: "Үш тізбектей келген бүтін санның қосындысы 21. Ортаңғы сан неше?", answer: "7", solution: "(x-1) + x + (x+1) = 21 → 3x = 21 → x = 7" },
                    { question: "Екі санның қосындысы 20, айырмасы 4. Үлкен сан неше?", answer: "12", solution: "x + y = 20, x - y = 4 → 2x = 24 → x = 12" },
                    { question: "Бір сан екіншісінен 3 есе үлкен. Қосындысы 24. Кіші сан", answer: "6", solution: "x + 3x = 24 → 4x = 24 → x = 6" },
                    { question: "x + (x+2) + (x+4) = 30. x неше?", answer: "8", solution: "3x + 6 = 30 → 3x = 24 → x = 8" },
                    { question: "5x + 3x = 64. x неше?", answer: "8", solution: "8x = 64 → x = 8" }
                );
                break;
            case 19: // Қайталау
                exercises.push(
                    { question: "x + 15 = 27", answer: "12", solution: "x = 27 - 15 = 12" },
                    { question: "3x - 6 = 18", answer: "8", solution: "3x = 24 → x = 8" },
                    { question: "2(x + 4) = 20", answer: "6", solution: "2x + 8 = 20 → 2x = 12 → x = 6" },
                    { question: "x ÷ 4 + 3 = 8", answer: "20", solution: "x ÷ 4 = 5 → x = 20" },
                    { question: "|x| = 9, x > 0 болса x = ?", answer: "9", solution: "x = 9" }
                );
                break;
            default:
                exercises.push(
                    { question: "x + 5 = 10", answer: "5", solution: "x = 5" }
                );
        }
        return exercises;
    },

    state: {
        currentTopic: null,
        exercises: [],
        correctCount: 0,
        wrongCount: 0,
        streak: 0,
        xp: 0,
        answered: {}
    },

    init() {
        this.renderTopicChips();
        this.bindEvents();
        this.updateStats();
    },

    renderTopicChips() {
        const container = document.getElementById('topic-chips');
        if (!container) return;
        container.innerHTML = '';
        this.topics.forEach((topic, i) => {
            const chip = document.createElement('button');
            chip.className = 'topic-chip';
            chip.textContent = `${i + 1}. ${topic}`;
            chip.dataset.topic = i;
            container.appendChild(chip);
        });
    },

    bindEvents() {
        // Topic chip click
        document.getElementById('topic-chips').addEventListener('click', (e) => {
            const chip = e.target.closest('.topic-chip');
            if (!chip) return;

            document.querySelectorAll('.topic-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            const idx = parseInt(chip.dataset.topic);
            this.loadTopic(idx);
        });
    },

    loadTopic(topicIndex) {
        this.state.currentTopic = topicIndex;
        this.state.exercises = this.generateExercises(topicIndex);
        this.state.answered = {};
        this.state.correctCount = 0;
        this.state.wrongCount = 0;
        this.state.streak = 0;

        this.renderExercises();
        this.updateStats();
        playSound('click');
    },

    renderExercises() {
        const container = document.getElementById('exercise-container');
        if (!container) return;

        let html = `
            <div class="exercise-progress">
                <div class="exercise-progress-fill" id="exercise-progress-fill" style="width: 0%"></div>
            </div>
        `;

        this.state.exercises.forEach((ex, i) => {
            html += `
                <div class="exercise-card" id="exercise-${i}">
                    <div class="exercise-number">${i + 1}</div>
                    <div class="exercise-question">${ex.question}</div>
                    <div class="exercise-input-group">
                        <input type="text" class="exercise-input" id="input-${i}" placeholder="Жауабыңды жаз..." autocomplete="off">
                        <button class="btn-check" id="check-${i}" data-index="${i}">Тексеру ✓</button>
                    </div>
                    <div class="exercise-feedback" id="feedback-${i}"></div>
                    <div class="exercise-solution" id="solution-${i}"></div>
                </div>
            `;
        });

        container.innerHTML = html;

        // Bind check buttons
        this.state.exercises.forEach((_, i) => {
            const checkBtn = document.getElementById(`check-${i}`);
            const input = document.getElementById(`input-${i}`);

            if (checkBtn) {
                checkBtn.addEventListener('click', () => this.checkAnswer(i));
            }

            if (input) {
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') this.checkAnswer(i);
                });
            }
        });

        this.updateProgress();
    },

    checkAnswer(index) {
        if (this.state.answered[index]) return;

        const input = document.getElementById(`input-${index}`);
        const feedback = document.getElementById(`feedback-${index}`);
        const solution = document.getElementById(`solution-${index}`);
        const checkBtn = document.getElementById(`check-${index}`);
        const ex = this.state.exercises[index];

        if (!input || !feedback || !solution) return;

        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = ex.answer.toLowerCase();

        this.state.answered[index] = true;
        input.disabled = true;
        checkBtn.disabled = true;

        if (userAnswer === correctAnswer) {
            this.state.correctCount++;
            this.state.streak++;
            this.state.xp += 10;
            input.classList.add('correct');
            feedback.className = 'exercise-feedback correct show';
            feedback.innerHTML = '✅ Дұрыс! Жарайсың!';
            playSound('correct');
        } else {
            this.state.wrongCount++;
            this.state.streak = 0;
            input.classList.add('wrong');
            feedback.className = 'exercise-feedback wrong show';
            feedback.innerHTML = `❌ Қате! Дұрыс жауап: ${ex.answer}`;
            solution.classList.add('show');
            solution.innerHTML = `📝 Шешуі: ${ex.solution}`;
            playSound('wrong');
        }

        this.updateStats();
        this.updateProgress();

        // Save to storage
        StorageManager.savePracticeScore(this.state.currentTopic,
            this.state.correctCount,
            this.state.exercises.length
        );

        // Check if all answered
        const answeredCount = Object.keys(this.state.answered).length;
        if (answeredCount === this.state.exercises.length) {
            setTimeout(() => {
                const pct = (this.state.correctCount / this.state.exercises.length * 100);
                if (pct >= 80) {
                    AnimationsModule.showConfetti(30);
                    AnimationsModule.showNotification(`🎉 Тамаша! ${this.state.correctCount}/${this.state.exercises.length} дұрыс!`, 'success');
                } else {
                    AnimationsModule.showNotification(`${this.state.correctCount}/${this.state.exercises.length} дұрыс. Қайталап көр!`, 'info');
                }

                const newAch = StorageManager.checkAchievements();
                newAch.forEach(a => {
                    AnimationsModule.showAchievement(a.name, 'Жаңа жетістік!', a.icon);
                });
            }, 500);
        }
    },

    updateStats() {
        const el1 = document.getElementById('correct-count');
        const el2 = document.getElementById('wrong-count');
        const el3 = document.getElementById('xp-count');
        const el4 = document.getElementById('streak-count');
        if (el1) el1.textContent = this.state.correctCount;
        if (el2) el2.textContent = this.state.wrongCount;
        if (el3) el3.textContent = this.state.xp;
        if (el4) el4.textContent = this.state.streak;
    },

    updateProgress() {
        const fill = document.getElementById('exercise-progress-fill');
        if (!fill) return;
        const answered = Object.keys(this.state.answered).length;
        const total = this.state.exercises.length;
        fill.style.width = (total > 0 ? (answered / total * 100) : 0) + '%';
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    PracticeModule.init();
});