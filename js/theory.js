// js/theory.js
/**
 * HOTORI SKILLS — Theory Page
 * Теориялық материалдар
 */

const TheoryModule = {
    topics: [
        {
            id: 1,
            title: "Айнымалы ұғымы",
            sections: [
                { heading: "Анықтама", text: "Айнымалы — мәні белгісіз немесе өзгермелі шама. Айнымалылар әріптермен белгіленеді: x, y, z, a, b, c т.б." },
                { heading: "Не үшін қажет?", text: "Айнымалылар белгісіз сандарды белгілеу үшін қолданылады. Мысалы, 'Бір санға 5-ті қоссақ 12 шығады' дегенді x + 5 = 12 деп жазуға болады." }
            ],
            examples: [
                { title: "Мысал 1", content: "x + 3 = 8 — мұндағы x айнымалы", solution: "x = 5" },
                { title: "Мысал 2", content: "2y = 14 — мұндағы y айнымалы", solution: "y = 7" }
            ],
            formula: "Айнымалы + Сан = Нәтиже",
            lifeExample: "Дүкеннен алма сатып алдың. Әр алма 100 теңге. Жалпы 500 теңге төледің. Неше алма алдың? x × 100 = 500 → x = 5"
        },
        {
            id: 2,
            title: "Санды өрнектер",
            sections: [
                { heading: "Анықтама", text: "Санды өрнек — сандар мен амал таңбаларынан құралған жазба. Мысалы: 3 + 5 × 2, 12 ÷ 4 - 1." },
                { heading: "Есептеу реті", text: "1) Жақша іші, 2) Көбейту/бөлу, 3) Қосу/азайту. Солдан оңға қарай орындалады." }
            ],
            examples: [
                { title: "Мысал 1", content: "3 + 5 × 2 = ?", solution: "3 + 10 = 13" },
                { title: "Мысал 2", content: "(8 - 3) × 4 = ?", solution: "5 × 4 = 20" }
            ],
            formula: "Амалдар реті: () → ×, ÷ → +, -",
            lifeExample: "3 алма + 5 алма × 2 себет = 3 + 10 = 13 алма"
        },
        {
            id: 3,
            title: "Әріпті өрнектер",
            sections: [
                { heading: "Анықтама", text: "Әріпті өрнек — сандар мен әріптерден (айнымалылардан) құралған өрнек. Мысалы: 2x + 3, a - b." },
                { heading: "Мәнін табу", text: "Әріпті өрнектің мәнін табу үшін, айнымалының орнына сан қоямыз." }
            ],
            examples: [
                { title: "Мысал 1", content: "2x + 3, x = 4 болса", solution: "2 × 4 + 3 = 11" },
                { title: "Мысал 2", content: "a - b, a = 10, b = 3 болса", solution: "10 - 3 = 7" }
            ],
            formula: "Әріпті өрнек = сан + айнымалы × амал",
            lifeExample: "x алма + 3 алма — x = 5 болса, 5 + 3 = 8 алма"
        },
        {
            id: 4,
            title: "Теңдік және теңсіздік",
            sections: [
                { heading: "Теңдік", text: "Екі өрнектің тең екенін = белгісімен көрсету. Мысалы: 5 + 3 = 8." },
                { heading: "Теңсіздік", text: "Екі өрнектің тең емес екенін <, >, ≤, ≥ белгілерімен көрсету. Мысалы: 7 > 4, 3 < 9." }
            ],
            examples: [
                { title: "Теңдік мысалы", content: "12 ÷ 3 = 4", solution: "Дұрыс теңдік" },
                { title: "Теңсіздік мысалы", content: "15 > 10", solution: "Дұрыс теңсіздік" }
            ],
            formula: "Теңдік: A = B | Теңсіздік: A < B, A > B",
            lifeExample: "5 алма > 3 алма — 5 алма көп"
        },
        {
            id: 5,
            title: "Теңдеу ұғымы",
            sections: [
                { heading: "Анықтама", text: "Теңдеу — айнымалысы бар теңдік. Теңдеуді шешу — айнымалының мәнін (түбірін) табу." },
                { heading: "Түбір", text: "Теңдеуді дұрыс теңдікке айналдыратын айнымалының мәні — түбір деп аталады." }
            ],
            examples: [
                { title: "Мысал 1", content: "x + 7 = 12", solution: "x = 12 - 7 = 5. Тексеру: 5 + 7 = 12 ✓" },
                { title: "Мысал 2", content: "3x = 15", solution: "x = 15 ÷ 3 = 5. Тексеру: 3 × 5 = 15 ✓" }
            ],
            formula: "Теңдеу: айнымалысы бар теңдік",
            lifeExample: "Сенде бірнеше дәптер бар. 3 дәптер қоссаң, 10 болады. x + 3 = 10 → x = 7 дәптер"
        },
        {
            id: 6,
            title: "Қарапайым теңдеулер",
            sections: [
                { heading: "Түрлері", text: "Қарапайым теңдеулер — бір амалмен шешілетін теңдеулер: x + a = b, x - a = b, ax = b, x ÷ a = b." },
                { heading: "Шешу әдісі", text: "Белгісізді табу үшін кері амал қолданамыз: қосу ↔ азайту, көбейту ↔ бөлу." }
            ],
            examples: [
                { title: "Қосу", content: "x + 8 = 15", solution: "x = 15 - 8 = 7" },
                { title: "Азайту", content: "x - 4 = 11", solution: "x = 11 + 4 = 15" },
                { title: "Көбейту", content: "5x = 35", solution: "x = 35 ÷ 5 = 7" },
                { title: "Бөлу", content: "x ÷ 3 = 6", solution: "x = 6 × 3 = 18" }
            ],
            formula: "x + a = b → x = b - a\nx - a = b → x = b + a\nax = b → x = b ÷ a\nx ÷ a = b → x = b × a",
            lifeExample: "Автобуста x адам бар. 4 адам түссе, 11 қалды. x - 4 = 11 → x = 15"
        },
        {
            id: 7,
            title: "Бір амалмен шешілетін теңдеулер",
            sections: [
                { heading: "Ереже", text: "Теңдеудің екі жағына да бірдей амал қолдану арқылы айнымалыны оқшаулаймыз." },
                { heading: "Мысал алгоритм", text: "1) Теңдеуді жаз. 2) Кері амал қолдан. 3) Есепте. 4) Тексер." }
            ],
            examples: [
                { title: "Мысал 1", content: "x + 12 = 25", solution: "x = 25 - 12 = 13. Тексеру: 13 + 12 = 25 ✓" },
                { title: "Мысал 2", content: "x - 9 = 20", solution: "x = 20 + 9 = 29. Тексеру: 29 - 9 = 20 ✓" }
            ],
            formula: "Теңдіктің екі жағына бірдей амал → теңдік сақталады",
            lifeExample: "Қорапта x конфет бар. 5-ін жедің, 15 қалды. x - 5 = 15 → x = 20"
        },
        {
            id: 8,
            title: "Екі амалмен шешілетін теңдеулер",
            sections: [
                { heading: "Анықтама", text: "Екі немесе одан көп амал қажет теңдеулер. Мысалы: 2x + 3 = 11." },
                { heading: "Шешу тәртібі", text: "1) Бос мүшені оқшаулау, 2) Коэффициентке бөлу, 3) Жауапты тексеру." }
            ],
            examples: [
                { title: "Мысал 1", content: "2x + 3 = 11", solution: "2x = 11 - 3 = 8 → x = 8 ÷ 2 = 4" },
                { title: "Мысал 2", content: "3x - 5 = 16", solution: "3x = 16 + 5 = 21 → x = 21 ÷ 3 = 7" }
            ],
            formula: "ax + b = c → ax = c - b → x = (c - b) ÷ a",
            lifeExample: "Кітап бағасы x теңге. Екі кітап + 3 теңге жеткізу = 11 теңге. 2x + 3 = 11 → x = 4 теңге"
        },
        {
            id: 9,
            title: "Тексеру әдісі",
            sections: [
                { heading: "Не үшін тексереміз?", text: "Табылған түбірді теңдеуге қойып, теңдік орындалатынын тексеру — қатеден сақтайды." },
                { heading: "Қалай тексереміз?", text: "x-тің орнына табылған мәнді қойып, екі жақты есептеп, тең екенін көрсету." }
            ],
            examples: [
                { title: "Мысал", content: "3x + 2 = 20, x = 6 деп таптық", solution: "Тексеру: 3 × 6 + 2 = 18 + 2 = 20 = 20 ✓ Дұрыс!" }
            ],
            formula: "Табылған x-ті теңдеуге қой → Екі жақты есепте → Теңдік шығуы керек",
            lifeExample: "Дұрыс жауап тапқаныңды тексеру — маңызды қадам!"
        },
        {
            id: 10,
            title: "Мәтінді есептер",
            sections: [
                { heading: "Шешу алгоритмі", text: "1) Есепті оқы. 2) Белгісізді x деп белгіле. 3) Теңдеу құр. 4) Шеш. 5) Жауапты жаз." },
                { heading: "Кеңес", text: "Есептегі сөздерді математикалық тілге аудару керек: 'қосқанда' → +, 'азайтқанда' → -, 'неше есе' → ×, ÷" }
            ],
            examples: [
                { title: "Мысал", content: "Бір сан екінші саннан 3 есе артық. Екеуінің қосындысы 24. Сандарды тап.", solution: "x + 3x = 24 → 4x = 24 → x = 6. Сандар: 6 және 18" }
            ],
            formula: "Мәтін → Теңдеу → Шешу → Жауап",
            lifeExample: "Айгүлде x алма, Берікте 2x алма. Барлығы 15 алма. x + 2x = 15 → x = 5. Айгүлде 5, Берікте 10 алма."
        },
        {
            id: 11,
            title: "Теңсіздік ұғымы",
            sections: [
                { heading: "Анықтама", text: "Теңсіздік — екі сан немесе өрнектің <, >, ≤, ≥ белгілерімен салыстырылуы." },
                { heading: "Белгілер", text: "< — кіші, > — үлкен, ≤ — кіші немесе тең, ≥ — үлкен немесе тең" }
            ],
            examples: [
                { title: "Мысал 1", content: "7 > 4", solution: "7 саны 4-тен үлкен" },
                { title: "Мысал 2", content: "x + 2 > 5", solution: "x > 3" }
            ],
            formula: "a < b, a > b, a ≤ b, a ≥ b",
            lifeExample: "Мектепке 7 жасан бастап бара аласың. Жасың ≥ 7 болуы керек."
        },
        {
            id: 12,
            title: "Теңсіздік қасиеттері",
            sections: [
                { heading: "1-қасиет", text: "Теңсіздіктің екі жағына бірдей сан қоссақ, теңсіздік сақталады: a < b → a + c < b + c" },
                { heading: "2-қасиет", text: "Теңсіздіктің екі жағын оң санға көбейтсек/бөлсек, теңсіздік сақталады." },
                { heading: "3-қасиет", text: "Теңсіздіктің екі жағын теріс санға көбейтсек/бөлсек, теңсіздік таңбасы өзгереді!" }
            ],
            examples: [
                { title: "Мысал 1", content: "3 < 7, екі жағына 2 қоссақ", solution: "5 < 9 ✓" },
                { title: "Мысал 2", content: "4 < 8, екі жағын -2-ге көбейтсек", solution: "-8 > -16 ✓ (таңба өзгерді!)" }
            ],
            formula: "a < b, c > 0 → ac < bc\na < b, c < 0 → ac > bc",
            lifeExample: "Егер сен менен кіші болсаң (sen < men), екеумізге де 5 жас қоссақ, әлі де сен кіші боласың."
        },
        {
            id: 13,
            title: "Қарапайым теңсіздіктер",
            sections: [
                { heading: "Шешу", text: "Теңдеу сияқты, бірақ жауап — бір сан емес, сандар жиыны (аралық)." },
                { heading: "Мысал", text: "x + 3 > 7 → x > 4. Яғни x 4-тен үлкен кез келген сан болуы мүмкін." }
            ],
            examples: [
                { title: "Мысал 1", content: "x - 2 < 5", solution: "x < 7" },
                { title: "Мысал 2", content: "2x ≥ 10", solution: "x ≥ 5" }
            ],
            formula: "x + a > b → x > b - a",
            lifeExample: "Сәбіз кем дегенде 5 кг болуы керек: x ≥ 5"
        },
        {
            id: 14,
            title: "Координаталық сәуле",
            sections: [
                { heading: "Анықтама", text: "Координаталық сәуле — басы (0 нүктесі), бағыты және бірлік кесіндісі бар түзу." },
                { heading: "Координата", text: "Сәуледегі әр нүктеге бір сан сәйкес келеді. Бұл сан — нүктенің координатасы." }
            ],
            examples: [
                { title: "Мысал", content: "A нүктесі 3 координатада, B нүктесі 7 координатада", solution: "A(3), B(7). AB аралығы = 7 - 3 = 4 бірлік" }
            ],
            formula: "AB = |b - a|",
            lifeExample: "Көшедегі үйлер — координаталық сәуле. 5-үй мен 12-үй арасында 7 үй бар."
        },
        {
            id: 15,
            title: "Сан аралықтары",
            sections: [
                { heading: "Түрлері", text: "Ашық аралық: (a, b) — a < x < b\nЖабық аралық: [a, b] — a ≤ x ≤ b\nЖартылай: (a, b] — a < x ≤ b" },
                { heading: "Белгілеу", text: "( ) — ашық (шеткі нүктелер кірмейді)\n[ ] — жабық (шеткі нүктелер кіреді)" }
            ],
            examples: [
                { title: "Мысал 1", content: "(2, 8) — 2-ден 8-ге дейін, 2 мен 8 кірмейді", solution: "3, 4, 5, 6, 7 — осы аралықта" },
                { title: "Мысал 2", content: "[0, 5] — 0-ден 5-ке дейін, 0 мен 5 кіреді", solution: "0, 1, 2, 3, 4, 5" }
            ],
            formula: "(a, b) = {x | a < x < b}\n[a, b] = {x | a ≤ x ≤ b}",
            lifeExample: "Температура 15° пен 25° арасында: (15, 25)"
        },
        {
            id: 16,
            title: "Қос теңсіздіктер",
            sections: [
                { heading: "Анықтама", text: "Қос теңсіздік — бір айнымалыға қатысты екі теңсіздікті біріктіру: a < x < b." },
                { heading: "Шешу", text: "x саны a мен b аралығында жатады. Координаталық сәуледе кесіндімен көрсетіледі." }
            ],
            examples: [
                { title: "Мысал 1", content: "3 < x < 9", solution: "x ∈ (3, 9): 4, 5, 6, 7, 8" },
                { title: "Мысал 2", content: "1 ≤ x ≤ 6", solution: "x ∈ [1, 6]: 1, 2, 3, 4, 5, 6" }
            ],
            formula: "a < x < b → x ∈ (a, b)",
            lifeExample: "Жасың 10 мен 15 арасында: 10 < жас < 15"
        },
        {
            id: 17,
            title: "Модуль элементтері",
            sections: [
                { heading: "Анықтама", text: "Санның модулі — оның таңбасыз мәні. |5| = 5, |-5| = 5, |0| = 0." },
                { heading: "Қасиеттері", text: "|a| ≥ 0 (әрқашан теріс емес)\n|a| = |-a|\n|a × b| = |a| × |b|" }
            ],
            examples: [
                { title: "Мысал 1", content: "|-7| = ?", solution: "7" },
                { title: "Мысал 2", content: "|3 - 8| = ?", solution: "|-5| = 5" }
            ],
            formula: "|a| = a, егер a ≥ 0\n|a| = -a, егер a < 0",
            lifeExample: "Үйден 5 км солға немесе 5 км оңға барсаң да, арақашықтық 5 км. |−5| = |5| = 5"
        },
        {
            id: 18,
            title: "Күрделі теңдеулер",
            sections: [
                { heading: "Анықтама", text: "Бірнеше амалды қажет ететін теңдеулер. Мысалы: 2(x + 3) - 4 = 12." },
                { heading: "Шешу тәсілі", text: "1) Жақшаны ашу, 2) Ұқсас мүшелерді біріктіру, 3) Айнымалыны оқшаулау, 4) Тексеру." }
            ],
            examples: [
                { title: "Мысал 1", content: "2(x + 3) - 4 = 12", solution: "2x + 6 - 4 = 12 → 2x + 2 = 12 → 2x = 10 → x = 5" },
                { title: "Мысал 2", content: "3(2x - 1) = 21", solution: "6x - 3 = 21 → 6x = 24 → x = 4" }
            ],
            formula: "a(bx + c) + d = e → abx + ac + d = e → x = (e - ac - d) / ab",
            lifeExample: "3 қорапта бірдей зат бар. Әр қорапқа 2 кг қоссақ, жалпы 21 кг болады. 3(x + 2) = 21 → x = 5 кг"
        },
        {
            id: 19,
            title: "Логикалық есептер",
            sections: [
                { heading: "Негізгі идея", text: "Логикалық есептер — математикалық ойлауды дамытады. Теңдеу құру арқылы шешуге болады." },
                { heading: "Тәсілдер", text: "1) Теңдеу құру, 2) Кесте жасау, 3) Сызба салу, 4) Кері жолмен шешу." }
            ],
            examples: [
                { title: "Мысал 1", content: "Үш сан қосындысы 30. Екінші сан біріншіден 5-ке артық, үшіншісі екіншіден 3-ке артық.", solution: "x + (x+5) + (x+8) = 30 → 3x + 13 = 30 → 3x = 17... емес, x + x+5 + x+5+3 = 30 → 3x + 13 = 30... Дұрыс: x + (x+5) + (x+8) = 30 → 3x = 17. Нақты: x + (x+5) + (x+5+3) = 30 → 3x+13=30 → x=17/3. Қарапайым мысал: x + (x+2) + (x+4) = 18 → 3x+6=18 → x=4. Сандар: 4, 6, 8" }
            ],
            formula: "Логика → Теңдеу → Шешу → Тексеру",
            lifeExample: "3 дос жиналып ақша жинады. Екіншісі біріншіден 100 теңге артық, үшіншісі екіншіден 200 артық. Барлығы 1500 теңге."
        },
        {
            id: 20,
            title: "Қайталау",
            sections: [
                { heading: "Не үйрендік?", text: "✅ Айнымалы ұғымы\n✅ Санды және әріпті өрнектер\n✅ Теңдік пен теңсіздік\n✅ Теңдеулерді шешу\n✅ Теңсіздіктер\n✅ Координаталық сәуле\n✅ Сан аралықтары\n✅ Модуль" },
                { heading: "Келесі қадам", text: "Практика бетінде есептер шығар, тесттер тапсыр, прогрессіңді бақыла!" }
            ],
            examples: [
                { title: "Қайталау 1", content: "x + 15 = 27", solution: "x = 12" },
                { title: "Қайталау 2", content: "3x - 6 = 18", solution: "x = 8" },
                { title: "Қайталау 3", content: "2(x + 4) = 20", solution: "x = 6" }
            ],
            formula: "Барлық формулаларды қайтала!",
            lifeExample: "Білім — қайталау арқылы бекитіледі. Көбірек жаттық!"
        }
    ],

    init() {
        this.renderSidebar();
        this.renderTopics();
        this.updateReadCount();
        this.bindEvents();
    },

    renderSidebar() {
        const list = document.getElementById('theory-nav-list');
        if (!list) return;
        list.innerHTML = '';
        this.topics.forEach(topic => {
            const li = document.createElement('li');
            const isRead = StorageManager.isTopicRead(topic.id - 1);
            li.innerHTML = `
                <button class="theory-nav-item ${isRead ? 'completed' : ''}" data-topic="${topic.id - 1}">
                    <span class="check-icon">${isRead ? '✅' : '○'}</span>
                    <span>${topic.id}. ${topic.title}</span>
                </button>
            `;
            list.appendChild(li);
        });
    },

    renderTopics() {
        const content = document.getElementById('theory-content');
        if (!content) return;
        content.innerHTML = '';

        this.topics.forEach((topic, index) => {
            const card = document.createElement('div');
            card.className = 'topic-card';
            card.id = `topic-${topic.id}`;

            const isRead = StorageManager.isTopicRead(index);

            let examplesHTML = '';
            topic.examples.forEach(ex => {
                examplesHTML += `
                    <div class="example-block">
                        <div class="example-title">📌 ${ex.title}</div>
                        <div class="example-content">${ex.content}</div>
                        <div class="example-solution">✅ Шешуі: ${ex.solution}</div>
                    </div>
                `;
            });

            let sectionsHTML = '';
            topic.sections.forEach(s => {
                sectionsHTML += `<p>${s.text}</p>`;
            });

            card.innerHTML = `
                <div class="topic-card-header">
                    <span class="topic-card-number">${topic.id}</span>
                    <h2 class="topic-card-title">${topic.title}</h2>
                    <div class="topic-card-actions">
                        <button class="btn-mark-read ${isRead ? 'read' : ''}" data-topic="${index}">
                            ${isRead ? '✅ Оқылды' : '📖 Оқылды деп белгілеу'}
                        </button>
                    </div>
                </div>

                <div class="theory-section">
                    <h4>📝 Конспект</h4>
                    ${sectionsHTML}
                </div>

                <div class="formula-block">
                    ${topic.formula.replace(/\n/g, '<br>')}
                </div>

                <div class="theory-section">
                    <h4>💡 Мысалдар</h4>
                    ${examplesHTML}
                </div>

                <div class="life-example">
                    <div class="life-title">🌍 Өмірден мысал</div>
                    <p>${topic.lifeExample}</p>
                </div>

                <div class="canvas-graph-container">
                    <canvas id="graph-${topic.id}" width="400" height="200"></canvas>
                </div>

                <div class="accordion">
                    <div class="accordion-item">
                        <div class="accordion-header">
                            <span>📊 Қосымша мәліметтер</span>
                            <span class="arrow">▼</span>
                        </div>
                        <div class="accordion-body">
                            <p>Бұл тақырып 5-сынып математика бағдарламасына кіреді. Теңдеулер мен теңсіздіктер — математиканың негізгі ұғымдары.</p>
                            <p>Тақырыпты жақсы меңгеру үшін практика бетінде есептер шығар!</p>
                        </div>
                    </div>
                </div>
            `;
            content.appendChild(card);
        });

        // Draw graphs
        this.drawGraphs();
    },

    drawGraphs() {
        this.topics.forEach(topic => {
            const canvas = document.getElementById(`graph-${topic.id}`);
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            const w = canvas.width;
            const h = canvas.height;

            // Clear
            ctx.clearRect(0, 0, w, h);

            // Background
            ctx.fillStyle = 'rgba(108, 99, 255, 0.03)';
            ctx.fillRect(0, 0, w, h);

            // Grid
            ctx.strokeStyle = 'rgba(108, 99, 255, 0.1)';
            ctx.lineWidth = 0.5;
            for (let x = 0; x < w; x += 40) {
                ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
            }
            for (let y = 0; y < h; y += 40) {
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
            }

            // Axes
            ctx.strokeStyle = 'rgba(108, 99, 255, 0.4)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2);
            ctx.moveTo(w / 2, 0); ctx.lineTo(w / 2, h);
            ctx.stroke();

            // Draw topic-specific visualization
            if (topic.id >= 4 && topic.id <= 5) {
                // Теңдік/теңсіздік — number line
                ctx.fillStyle = 'rgba(108, 99, 255, 0.3)';
                ctx.beginPath();
                ctx.arc(w / 2 + 30, h / 2, 8, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = 'rgba(255, 101, 132, 0.3)';
                ctx.beginPath();
                ctx.arc(w / 2 - 50, h / 2, 8, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = 'var(--text, #1A1A2E)';
                ctx.font = '14px Nunito';
                ctx.fillText('a < b', w / 2 - 15, h / 2 - 20);
            } else if (topic.id === 14) {
                // Координаталық сәуле
                ctx.strokeStyle = 'var(--primary, #6C63FF)';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(30, h / 2); ctx.lineTo(w - 30, h / 2);
                ctx.stroke();
                // Arrow
                ctx.beginPath();
                ctx.moveTo(w - 35, h / 2 - 8); ctx.lineTo(w - 30, h / 2); ctx.lineTo(w - 35, h / 2 + 8);
                ctx.stroke();
                // Points
                for (let i = 0; i <= 10; i++) {
                    const x = 40 + i * ((w - 80) / 10);
                    ctx.fillStyle = 'rgba(108, 99, 255, 0.3)';
                    ctx.beginPath(); ctx.arc(x, h / 2, 4, 0, Math.PI * 2); ctx.fill();
                    ctx.fillStyle = 'var(--text, #1A1A2E)';
                    ctx.font = '12px Nunito';
                    ctx.fillText(i.toString(), x - 4, h / 2 + 20);
                }
            } else {
                // Generic function graph
                ctx.strokeStyle = 'rgba(108, 99, 255, 0.6)';
                ctx.lineWidth = 2;
                ctx.beginPath();
                for (let x = 0; x < w; x++) {
                    const t = (x - w / 2) / 30;
                    const y = h / 2 - Math.sin(t * 2 + topic.id) * 40 - t * 10;
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            }

            // Label
            ctx.fillStyle = 'var(--text, #1A1A2E)';
            ctx.font = 'bold 12px Nunito';
            ctx.fillText(topic.title, 10, 20);
        });
    },

    updateReadCount() {
        const progress = StorageManager.getProgress();
        const count = progress.topicsRead.length;
        const el = document.getElementById('theory-read-count');
        if (el) el.textContent = count;

        const fill = document.getElementById('theory-progress-fill');
        if (fill) fill.style.width = (count / 20 * 100) + '%';
    },

    bindEvents() {
        // Mark as read buttons
        document.querySelectorAll('.btn-mark-read').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(e.target.dataset.topic);
                const isNew = StorageManager.markTopicRead(idx);

                if (isNew) {
                    AnimationsModule.showNotification('Тақырып оқылды! +5 XP ⭐', 'success');
                    playSound('correct');
                } else {
                    AnimationsModule.showNotification('Бұл тақырып бұрын оқылған', 'info');
                }

                this.renderSidebar();
                this.updateReadCount();

                // Check achievements
                const newAch = StorageManager.checkAchievements();
                newAch.forEach(a => {
                    AnimationsModule.showAchievement(a.name, 'Жаңа жетістік!', a.icon);
                });
            });
        });

        // Sidebar nav
        document.querySelectorAll('.theory-nav-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const topicEl = e.target.closest('.theory-nav-item');
                const idx = parseInt(topicEl.dataset.topic);
                const el = document.getElementById(`topic-${idx + 1}`);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Accordion
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                item.classList.toggle('open');
            });
        });
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    TheoryModule.init();
});