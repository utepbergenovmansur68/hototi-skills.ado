// js/tests.js
/**
 * HOTORI SKILLS — Tests Module
 * Тесттер жүйесі (Толық нұсқа)
 */

const TestsModule = {
    topics: [
        "Айнымалы ұғымы", "Санды өрнектер", "Әріпті өрнектер", "Теңдік және теңсіздік",
        "Теңдеу ұғымы", "Қарапайым теңдеулер", "Бір амалмен шешу", "Екі амалмен шешу",
        "Тексеру әдісі", "Мәтінді есептер", "Теңсіздік ұғымы", "Теңсіздік қасиеттері",
        "Қарапайым теңсіздіктер", "Координаталық сәуле", "Сан аралықтары", "Қос теңсіздіктер",
        "Модуль элементтері", "Күрделі теңдеулер", "Логикалық есептер", "Қайталау"
    ],

    questionsBank: [
        // 0: Айнымалы ұғымы
        [
            { q: "x + 7 = 15 теңдеуіндегі x нешеге тең?", opts: ["7", "8", "9", "22"], correct: 1 },
            { q: "3y = 18 болса, y нешеге тең?", opts: ["4", "5", "6", "54"], correct: 2 },
            { q: "a - 9 = 5 болса, a нешеге тең?", opts: ["4", "14", "-4", "45"], correct: 1 },
            { q: "20 ÷ b = 4 болса, b нешеге тең?", opts: ["4", "5", "80", "16"], correct: 1 },
            { q: "Айнымалы дегеніміз не?", opts: ["Тұрақты сан", "Мәні белгісіз шама", "Амал таңбасы", "Формула"], correct: 1 },
            { q: "x + 12 = 20, x = ?", opts: ["6", "7", "8", "32"], correct: 2 },
            { q: "4x = 36, x = ?", opts: ["6", "7", "8", "9"], correct: 3 },
            { q: "x ÷ 3 = 7, x = ?", opts: ["4", "10", "21", "3"], correct: 2 },
            { q: "Айнымалы әдетте немен белгіленеді?", opts: ["Санмен", "Әріппен", "Белгімен", "Суретпен"], correct: 1 },
            { q: "c + 25 = 40, c = ?", opts: ["15", "65", "25", "40"], correct: 0 }
        ],
        // 1: Санды өрнектер
        [
            { q: "3 + 5 × 2 = ?", opts: ["16", "13", "10", "25"], correct: 1 },
            { q: "(8 - 3) × 4 = ?", opts: ["20", "5", "32", "12"], correct: 0 },
            { q: "12 ÷ 4 + 5 = ?", opts: ["8", "3", "7", "17"], correct: 0 },
            { q: "2 × (3 + 7) = ?", opts: ["20", "13", "17", "10"], correct: 0 },
            { q: "Амалдардың орындалу реті: бірінші не?", opts: ["Қосу", "Жақша іші", "Көбейту", "Азайту"], correct: 1 },
            { q: "6 × 3 - 4 = ?", opts: ["14", "18", "10", "22"], correct: 0 },
            { q: "(15 - 7) × 2 = ?", opts: ["16", "14", "22", "10"], correct: 0 },
            { q: "20 ÷ (6 - 2) = ?", opts: ["5", "10", "3", "8"], correct: 0 },
            { q: "100 - 25 × 3 = ?", opts: ["25", "225", "75", "300"], correct: 0 },
            { q: "9 + 3 × (4 - 1) = ?", opts: ["18", "36", "21", "12"], correct: 0 }
        ],
        // 2: Әріпті өрнектер
        [
            { q: "2x + 1, x = 3 болса, мәні неше?", opts: ["6", "7", "8", "5"], correct: 1 },
            { q: "a + b, a = 5, b = 8 болса", opts: ["10", "12", "13", "40"], correct: 2 },
            { q: "3y - 2, y = 4 болса", opts: ["10", "14", "8", "12"], correct: 0 },
            { q: "x × y, x = 6, y = 3 болса", opts: ["9", "18", "3", "2"], correct: 1 },
            { q: "5a + 2, a = 2 болса", opts: ["10", "12", "7", "20"], correct: 1 },
            { q: "a - b, a = 20, b = 13 болса", opts: ["5", "6", "7", "33"], correct: 2 },
            { q: "4x, x = 7 болса", opts: ["11", "28", "4", "7"], correct: 1 },
            { q: "x ÷ 2, x = 16 болса", opts: ["6", "7", "8", "32"], correct: 2 },
            { q: "2a + 3b, a = 1, b = 2 болса", opts: ["5", "7", "8", "10"], correct: 2 },
            { q: "x + y + z, x=1, y=2, z=3 болса", opts: ["5", "6", "7", "1"], correct: 1 }
        ],
        // 3: Теңдік және теңсіздік
        [
            { q: "7 + 3 □ 12. □ орнына белгі қой", opts: ["<", ">", "=", "≠"], correct: 0 },
            { q: "15 - 5 □ 10. □ орнына белгі қой", opts: ["<", ">", "=", "≤"], correct: 2 },
            { q: "4 × 6 □ 25. □ орнына белгі қой", opts: ["<", ">", "=", "≥"], correct: 0 },
            { q: "18 ÷ 3 □ 5. □ орнына белгі қой", opts: ["<", ">", "=", "≠"], correct: 1 },
            { q: "Теңсіздік белгілері: ", opts: ["=, ≠", "<, >, ≤, ≥", "+, -, ×", "(, )"], correct: 1 },
            { q: "9 + 2 □ 11", opts: ["<", ">", "=", "≠"], correct: 2 },
            { q: "20 - 8 □ 10", opts: ["<", ">", "=", "≤"], correct: 1 },
            { q: "3 × 5 □ 16", opts: ["<", ">", "=", "≥"], correct: 0 },
            { q: "50 ÷ 5 □ 10", opts: ["<", ">", "=", "≠"], correct: 2 },
            { q: "100 □ 99", opts: ["<", ">", "=", "≤"], correct: 1 }
        ],
        // 4: Теңдеу ұғымы
        [
            { q: "x + 5 = 13, x = ?", opts: ["6", "7", "8", "18"], correct: 2 },
            { q: "x - 8 = 12, x = ?", opts: ["4", "20", "12", "8"], correct: 1 },
            { q: "5x = 35, x = ?", opts: ["5", "6", "7", "30"], correct: 2 },
            { q: "Теңдеу дегеніміз не?", opts: ["Санды өрнек", "Айнымалысы бар теңдік", "Теңсіздік", "Формула"], correct: 1 },
            { q: "Теңдеу түбірі деген не?", opts: ["Кез келген сан", "Теңдікті дұрыс ететін мән", "Айнымалы", "Коэффициент"], correct: 1 },
            { q: "x ÷ 4 = 6, x = ?", opts: ["2", "10", "24", "6"], correct: 2 },
            { q: "15 + x = 22, x = ?", opts: ["5", "6", "7", "37"], correct: 2 },
            { q: "x - 10 = 5, x = ?", opts: ["15", "5", "10", "2"], correct: 0 },
            { q: "8x = 64, x = ?", opts: ["6", "7", "8", "56"], correct: 2 },
            { q: "x + 0 = 9, x = ?", opts: ["0", "9", "1", "-9"], correct: 1 }
        ],
        // 5: Қарапайым теңдеулер
        [
            { q: "x + 15 = 30, x = ?", opts: ["10", "15", "45", "2"], correct: 1 },
            { q: "x - 7 = 18, x = ?", opts: ["11", "25", "7", "18"], correct: 1 },
            { q: "9x = 72, x = ?", opts: ["6", "7", "8", "63"], correct: 2 },
            { q: "x ÷ 5 = 8, x = ?", opts: ["3", "13", "40", "8"], correct: 2 },
            { q: "x + 22 = 50, x = ?", opts: ["28", "72", "22", "50"], correct: 0 },
            { q: "x - 13 = 20, x = ?", opts: ["7", "33", "20", "13"], correct: 1 },
            { q: "7x = 49, x = ?", opts: ["5", "6", "7", "42"], correct: 2 },
            { q: "x ÷ 6 = 7, x = ?", opts: ["1", "13", "42", "6"], correct: 2 },
            { q: "x + 33 = 60, x = ?", opts: ["27", "93", "33", "60"], correct: 0 },
            { q: "x - 25 = 25, x = ?", opts: ["0", "25", "50", "1"], correct: 2 }
        ],
        // 6: Бір амалмен шешу
        [
            { q: "x + 11 = 25, x = ?", opts: ["12", "14", "36", "11"], correct: 1 },
            { q: "x - 16 = 9, x = ?", opts: ["7", "25", "9", "16"], correct: 1 },
            { q: "10x = 90, x = ?", opts: ["8", "9", "10", "100"], correct: 1 },
            { q: "x ÷ 7 = 5, x = ?", opts: ["12", "35", "5", "7"], correct: 1 },
            { q: "x + 44 = 80, x = ?", opts: ["36", "124", "44", "80"], correct: 0 },
            { q: "x - 30 = 45, x = ?", opts: ["15", "75", "30", "45"], correct: 1 },
            { q: "6x = 54, x = ?", opts: ["7", "8", "9", "48"], correct: 2 },
            { q: "x ÷ 9 = 3, x = ?", opts: ["6", "12", "27", "3"], correct: 2 },
            { q: "x + 50 = 100, x = ?", opts: ["40", "50", "150", "100"], correct: 1 },
            { q: "x - 1 = 99, x = ?", opts: ["98", "99", "100", "1"], correct: 2 }
        ],
        // 7: Екі амалмен шешу
        [
            { q: "2x + 4 = 14, x = ?", opts: ["3", "4", "5", "9"], correct: 2 },
            { q: "3x - 5 = 16, x = ?", opts: ["5", "6", "7", "11"], correct: 2 },
            { q: "4x + 3 = 19, x = ?", opts: ["3", "4", "5", "16"], correct: 1 },
            { q: "5x - 10 = 25, x = ?", opts: ["5", "6", "7", "3"], correct: 2 },
            { q: "2x + 6 = 18, x = ?", opts: ["4", "5", "6", "12"], correct: 2 },
            { q: "3x + 1 = 10, x = ?", opts: ["2", "3", "4", "9"], correct: 1 },
            { q: "6x - 12 = 18, x = ?", opts: ["3", "4", "5", "6"], correct: 2 },
            { q: "2x - 3 = 11, x = ?", opts: ["4", "5", "6", "7"], correct: 3 },
            { q: "4x + 8 = 28, x = ?", opts: ["3", "4", "5", "20"], correct: 2 },
            { q: "7x - 7 = 21, x = ?", opts: ["2", "3", "4", "7"], correct: 2 }
        ],
        // 8: Тексеру әдісі
        [
            { q: "x + 5 = 12, x = 7 дұрыс па? (1 - иә)", opts: ["1 (иә)", "0 (жоқ)", "2", "5"], correct: 0 },
            { q: "3x = 18, x = 5 дұрыс па?", opts: ["1 (иә)", "0 (жоқ)", "3", "18"], correct: 1 },
            { q: "x - 4 = 10, x = 14 дұрыс па?", opts: ["1 (иә)", "0 (жоқ)", "4", "10"], correct: 0 },
            { q: "x ÷ 3 = 5, x = 15 дұрыс па?", opts: ["1 (иә)", "0 (жоқ)", "3", "5"], correct: 0 },
            { q: "2x + 1 = 9, x = 4 дұрыс па?", opts: ["1 (иә)", "0 (жоқ)", "2", "9"], correct: 0 },
            { q: "5x = 30, x = 5 дұрыс па?", opts: ["1 (иә)", "0 (жоқ)", "5", "30"], correct: 1 },
            { q: "x + 8 = 15, x = 7 дұрыс па?", opts: ["1 (иә)", "0 (жоқ)", "8", "15"], correct: 0 },
            { q: "x - 6 = 20, x = 26 дұрыс па?", opts: ["1 (иә)", "0 (жоқ)", "6", "20"], correct: 0 },
            { q: "4x = 24, x = 7 дұрыс па?", opts: ["1 (иә)", "0 (жоқ)", "4", "24"], correct: 1 },
            { q: "x ÷ 2 = 8, x = 16 дұрыс па?", opts: ["1 (иә)", "0 (жоқ)", "2", "8"], correct: 0 }
        ],
        // 9: Мәтінді есептер
        [
            { q: "x + 3 = 10. x неше?", opts: ["5", "6", "7", "13"], correct: 2 },
            { q: "Бір сан 5-ке артық болса 12 болады. Сан неше?", opts: ["5", "7", "17", "12"], correct: 1 },
            { q: "5 дәптер 25 теңге. Бір дәптер неше теңге?", opts: ["3", "4", "5", "20"], correct: 2 },
            { q: "x алма + 4 алма = 9 алма. x = ?", opts: ["3", "4", "5", "13"], correct: 2 },
            { q: "Қорапта x қарындаш. 2-ін алғанда 8 қалды. x = ?", opts: ["6", "8", "10", "16"], correct: 2 },
            { q: "3x = 27. x = ?", opts: ["7", "8", "9", "24"], correct: 2 },
            { q: "Айгүлде x теңге. 50 теңге жұмсағанда 100 қалды. x = ?", opts: ["50", "100", "150", "200"], correct: 2 },
            { q: "x ÷ 4 = 6. x = ?", opts: ["2", "10", "24", "6"], correct: 2 },
            { q: "Екі сан қосындысы 15. Біреуі 8. Екіншісі?", opts: ["5", "6", "7", "23"], correct: 2 },
            { q: "x - 20 = 35. x = ?", opts: ["15", "35", "55", "20"], correct: 2 }
        ],
        // 10: Теңсіздік ұғымы
        [
            { q: "x > 3 теңсіздігін қанағаттандыратын ең кіші бүтін сан", opts: ["2", "3", "4", "5"], correct: 2 },
            { q: "x < 7 теңсіздігін қанағаттандыратын ең үлкен бүтін сан", opts: ["5", "6", "7", "8"], correct: 1 },
            { q: "≤ белгісі нені білдіреді?", opts: ["Кіші", "Үлкен", "Кіші немесе тең", "Тең емес"], correct: 2 },
            { q: "x ≥ 5. x неше болуы мүмкін?", opts: ["3", "4", "5", "2"], correct: 2 },
            { q: "x + 2 > 6 → x > ?", opts: ["2", "3", "4", "8"], correct: 2 },
            { q: "x - 3 < 5 → x < ?", opts: ["2", "6", "8", "5"], correct: 2 },
            { q: "2x > 8 → x > ?", opts: ["2", "3", "4", "6"], correct: 2 },
            { q: "x ÷ 2 < 4 → x < ?", opts: ["2", "4", "6", "8"], correct: 3 },
            { q: "x + 1 ≥ 10 → x ≥ ?", opts: ["8", "9", "10", "11"], correct: 1 },
            { q: "x - 5 ≤ 3 → x ≤ ?", opts: ["2", "6", "8", "3"], correct: 2 }
        ],
        // 11: Теңсіздік қасиеттері
        [
            { q: "3 < 7. Екі жағына 2 қоссақ:", opts: ["5 < 9", "5 > 9", "5 = 9", "3 < 7"], correct: 0 },
            { q: "4 < 8. Екі жағын 2-ге көбейтсек:", opts: ["8 < 16", "8 > 16", "8 = 16", "4 < 8"], correct: 0 },
            { q: "5 < 10. Екі жағын -1-ге көбейтсек:", opts: ["-5 < -10", "-5 > -10", "-5 = -10", "5 < 10"], correct: 1 },
            { q: "6 > 2. Екі жағынан 1 азайтсақ:", opts: ["5 > 1", "5 < 1", "5 = 1", "6 > 2"], correct: 0 },
            { q: "Теңсіздікті теріс санға бөлгенде не болады?", opts: ["Өзгермейді", "Таңба өзгереді", "Жойылады", "0 болады"], correct: 1 },
            { q: "2 < 5. Екі жағын 3-ке көбейтсек:", opts: ["6 < 15", "6 > 15", "6 = 15", "2 < 5"], correct: 0 },
            { q: "10 > 4. Екі жағын 2-ге бөлсек:", opts: ["5 > 2", "5 < 2", "5 = 2", "10 > 4"], correct: 0 },
            { q: "1 < 3. Екі жағына 10 қоссақ:", opts: ["11 < 13", "11 > 13", "11 = 13", "1 < 3"], correct: 0 },
            { q: "8 > 6. Екі жағын -2-ге бөлсек:", opts: ["-4 > -3", "-4 < -3", "-4 = -3", "8 > 6"], correct: 1 },
            { q: "a < b болса, a + c □ b + c", opts: ["<", ">", "=", "≥"], correct: 0 }
        ],
        // 12: Қарапайым теңсіздіктер
        [
            { q: "x + 5 > 12 → x > ?", opts: ["5", "6", "7", "17"], correct: 2 },
            { q: "x - 3 < 8 → x < ?", opts: ["5", "8", "11", "3"], correct: 2 },
            { q: "3x ≥ 15 → x ≥ ?", opts: ["3", "4", "5", "12"], correct: 2 },
            { q: "x ÷ 4 ≤ 3 → x ≤ ?", opts: ["7", "10", "12", "3"], correct: 2 },
            { q: "2x + 1 > 9 → x > ?", opts: ["3", "4", "5", "8"], correct: 1 },
            { q: "x + 10 ≥ 25 → x ≥ ?", opts: ["10", "15", "25", "35"], correct: 1 },
            { q: "x - 7 ≤ 3 → x ≤ ?", opts: ["-4", "3", "10", "7"], correct: 2 },
            { q: "5x < 20 → x < ?", opts: ["2", "3", "4", "5"], correct: 2 },
            { q: "x ÷ 2 > 6 → x > ?", opts: ["3", "8", "12", "6"], correct: 2 },
            { q: "4x - 2 < 14 → x < ?", opts: ["2", "3", "4", "16"], correct: 2 }
        ],
        // 13: Координаталық сәуле
        [
            { q: "A(2) мен B(8) арасындағы қашықтық", opts: ["4", "6", "10", "2"], correct: 1 },
            { q: "C(0) мен D(5) арасындағы қашықтық", opts: ["0", "5", "10", "3"], correct: 1 },
            { q: "Координаталық сәуледе неше бағыт бар?", opts: ["1", "2", "3", "4"], correct: 1 },
            { q: "E(3) мен F(10) арасындағы қашықтық", opts: ["5", "7", "13", "3"], correct: 1 },
            { q: "Координаталық сәуленің басы қай сан?", opts: ["1", "0", "-1", "10"], correct: 1 },
            { q: "G(1) мен H(6) арасындағы қашықтық", opts: ["3", "4", "5", "7"], correct: 2 },
            { q: "M(4) мен N(4) арасындағы қашықтық", opts: ["0", "4", "8", "1"], correct: 0 },
            { q: "P(0) мен Q(9) арасындағы қашықтық", opts: ["0", "9", "18", "5"], correct: 1 },
            { q: "R(7) мен S(2) арасындағы қашықтық", opts: ["3", "5", "7", "9"], correct: 1 },
            { q: "T(3) мен U(11) арасындағы қашықтық", opts: ["6", "8", "14", "3"], correct: 1 }
        ],
        // 14: Сан аралықтары
        [
            { q: "(2, 6) аралығында неше бүтін сан бар?", opts: ["2", "3", "4", "5"], correct: 2 },
            { q: "[1, 5] аралығында неше бүтін сан бар?", opts: ["3", "4", "5", "6"], correct: 2 },
            { q: "( ) белгісі нені білдіреді?", opts: ["Жабық аралық", "Ашық аралық", "Жартылай", "Шексіз"], correct: 1 },
            { q: "[ ] белгісі нені білдіреді?", opts: ["Ашық аралық", "Жабық аралық", "Жартылай", "Шексіз"], correct: 1 },
            { q: "(0, 5) аралығындағы ең үлкен бүтін сан", opts: ["3", "4", "5", "6"], correct: 1 },
            { q: "[3, 9] аралығындағы ең кіші бүтін сан", opts: ["2", "3", "4", "9"], correct: 1 },
            { q: "(4, 10) аралығында неше бүтін сан?", opts: ["4", "5", "6", "7"], correct: 1 },
            { q: "[0, 3] аралығында неше бүтін сан?", opts: ["2", "3", "4", "5"], correct: 2 },
            { q: "(7, 12) аралығындағы сандар", opts: ["7,8,9,10,11,12", "8,9,10,11", "7,8,9,10,11", "8,9,10,11,12"], correct: 1 },
            { q: "[5, 5] аралығында неше сан?", opts: ["0", "1", "2", "5"], correct: 1 }
        ],
        // 15: Қос теңсіздіктер
        [
            { q: "1 < x < 5. Бүтін сандар саны", opts: ["2", "3", "4", "5"], correct: 1 },
            { q: "0 ≤ x ≤ 3. Бүтін сандар саны", opts: ["2", "3", "4", "5"], correct: 2 },
            { q: "3 < x < 8. Ең үлкен бүтін сан", opts: ["6", "7", "8", "5"], correct: 1 },
            { q: "2 ≤ x ≤ 6. Ең кіші бүтін сан", opts: ["1", "2", "3", "6"], correct: 1 },
            { q: "5 < x < 10. Бүтін сандар саны", opts: ["3", "4", "5", "6"], correct: 1 },
            { q: "a < x < b. Бұл қандай аралық?", opts: ["Жабық", "Ашық", "Жартылай", "Шексіз"], correct: 1 },
            { q: "a ≤ x ≤ b. Бұл қандай аралық?", opts: ["Ашық", "Жабық", "Жартылай", "Шексіз"], correct: 1 },
            { q: "4 < x < 9. x мүмкін мәндері", opts: ["4,5,6,7,8,9", "5,6,7,8", "4,5,6,7,8", "5,6,7,8,9"], correct: 1 },
            { q: "1 ≤ x ≤ 4. x мүмкін мәндері", opts: ["1,2,3,4", "2,3", "1,2,3", "1,2,3,4,5"], correct: 0 },
            { q: "0 < x < 3. Бүтін сандар", opts: ["0,1,2,3", "1,2", "0,1,2", "1,2,3"], correct: 1 }
        ],
        // 16: Модуль
        [
            { q: "|-8| = ?", opts: ["-8", "0", "8", "16"], correct: 2 },
            { q: "|5| = ?", opts: ["-5", "0", "5", "10"], correct: 2 },
            { q: "|-15| = ?", opts: ["-15", "0", "15", "30"], correct: 2 },
            { q: "|0| = ?", opts: ["1", "-1", "0", "10"], correct: 2 },
            { q: "|3 - 7| = ?", opts: ["-4", "0", "4", "10"], correct: 2 },
            { q: "Модуль әрқашан қандай?", opts: ["Теріс", "Оң немесе 0", "Тек оң", "Нөл"], correct: 1 },
            { q: "|-100| = ?", opts: ["-100", "0", "100", "200"], correct: 2 },
            { q: "|6 - 10| = ?", opts: ["-4", "4", "16", "-16"], correct: 1 },
            { q: "|-1| + |1| = ?", opts: ["0", "1", "2", "-2"], correct: 2 },
            { q: "|x| = 7. x неше болуы мүмкін?", opts: ["Тек 7", "Тек -7", "7 немесе -7", "0"], correct: 2 }
        ],
        // 17: Күрделі теңдеулер
        [
            { q: "2(x + 1) = 10, x = ?", opts: ["3", "4", "5", "6"], correct: 1 },
            { q: "3(x - 2) = 12, x = ?", opts: ["4", "5", "6", "8"], correct: 2 },
            { q: "4x + 2x = 30, x = ?", opts: ["3", "4", "5", "6"], correct: 2 },
            { q: "2(2x + 1) = 14, x = ?", opts: ["2", "3", "4", "5"], correct: 1 },
            { q: "5(x - 3) = 20, x = ?", opts: ["5", "6", "7", "8"], correct: 2 },
            { q: "3x + 2x = 25, x = ?", opts: ["3", "4", "5", "6"], correct: 2 },
            { q: "2(x + 5) = 20, x = ?", opts: ["3", "4", "5", "10"], correct: 2 },
            { q: "4(x - 1) = 12, x = ?", opts: ["2", "3", "4", "5"], correct: 2 },
            { q: "6x - 3x = 15, x = ?", opts: ["3", "4", "5", "6"], correct: 2 },
            { q: "3(2x - 1) = 15, x = ?", opts: ["2", "3", "4", "5"], correct: 1 }
        ],
        // 18: Логикалық есептер
        [
            { q: "Үш тізбектей санның қосындысы 15. Ортаңғы сан?", opts: ["4", "5", "6", "3"], correct: 1 },
            { q: "Екі сан қосындысы 18, айырмасы 4. Үлкен сан?", opts: ["7", "10", "11", "14"], correct: 2 },
            { q: "Бір сан екіншісінен 2 есе үлкен. Қосындысы 12. Кіші сан?", opts: ["2", "3", "4", "6"], correct: 2 },
            { q: "x + (x+1) + (x+2) = 12. x = ?", opts: ["2", "3", "4", "5"], correct: 1 },
            { q: "4x + 2x = 36. x = ?", opts: ["4", "5", "6", "8"], correct: 2 },
            { q: "Екі сан көбейтіндісі 24, біреуі 6. Екіншісі?", opts: ["2", "3", "4", "18"], correct: 2 },
            { q: "x + x = 20. x = ?", opts: ["5", "10", "20", "40"], correct: 1 },
            { q: "3 санның орташа мәні 10. Қосындысы?", opts: ["10", "20", "30", "40"], correct: 2 },
            { q: "x - 5 = x ÷ 2. x = ?", opts: ["5", "10", "15", "20"], correct: 1 },
            { q: "5 санның орташа мәні 8. Қосындысы?", opts: ["8", "16", "32", "40"], correct: 3 }
        ],
        // 19: Қайталау
        [
            { q: "x + 10 = 25, x = ?", opts: ["10", "15", "25", "35"], correct: 1 },
            { q: "4x - 4 = 12, x = ?", opts: ["2", "3", "4", "5"], correct: 2 },
            { q: "|-6| = ?", opts: ["-6", "0", "6", "12"], correct: 2 },
            { q: "2 < x < 6. Бүтін сандар саны", opts: ["2", "3", "4", "5"], correct: 1 },
            { q: "3(x + 2) = 18, x = ?", opts: ["2", "3", "4", "6"], correct: 2 },
            { q: "x ÷ 5 + 3 = 7, x = ?", opts: ["10", "15", "20", "35"], correct: 2 },
            { q: "(3, 8) аралығында неше бүтін сан?", opts: ["3", "4", "5", "6"], correct: 1 },
            { q: "5x + 3x = 40, x = ?", opts: ["3", "4", "5", "8"], correct: 2 },
            { q: "x - 8 = 17, x = ?", opts: ["9", "17", "25", "8"], correct: 2 },
            { q: "Теңдеу шешу дегеніміз не?", opts: ["Санды табу", "Түбірлерді табу", "Формула жазу", "График салу"], correct: 1 }
        ]
    ],

    state: {
        currentTopic: null,
        questions: [],
        currentIndex: 0,
        score: 0,
        timer: null,
        timeLeft: 300,
        startTime: null,
        selectedOption: null,
        answered: false
    },

    /**
     * Модульді іске қосу
     */
    init() {
        this.renderTopicGrid();
        this.bindEvents();
    },

    /**
     * Тақырыптар торын салу
     */
    renderTopicGrid() {
        const grid = document.getElementById('test-topics-grid');
        if (!grid) return;
        grid.innerHTML = '';

        const progress = typeof StorageManager !== 'undefined' ? StorageManager.getProgress() : { testScores: {} };

        this.topics.forEach((topic, i) => {
            const key = 'test_' + i;
            const best = progress.testScores?.[key]?.bestScore || 0;

            const card = document.createElement('div');
            card.className = 'test-topic-card';
            card.dataset.topic = i;
            card.innerHTML = `
                <div class="topic-icon">📝</div>
                <h3>${i + 1}. ${topic}</h3>
                <p>10 сұрақ</p>
                ${best > 0 ? `<div class="best-score">⭐ Ең жақсы: ${best}/10</div>` : ''}
            `;
            grid.appendChild(card);
        });
    },

    /**
     * Оқиғаларды байланыстыру
     */
    bindEvents() {
        document.getElementById('test-topics-grid')?.addEventListener('click', (e) => {
            const card = e.target.closest('.test-topic-card');
            if (card) this.startTest(parseInt(card.dataset.topic));
        });

        document.getElementById('retry-test-btn')?.addEventListener('click', () => {
            this.startTest(this.state.currentTopic);
        });

        document.getElementById('back-to-tests-btn')?.addEventListener('click', () => {
            this.showSelection();
        });
    },

    /**
     * Тестті бастау
     */
    startTest(topicIndex) {
        if (!this.questionsBank[topicIndex]) return;

        this.state.currentTopic = topicIndex;
        this.state.questions = this.shuffleArray([...this.questionsBank[topicIndex]]);
        this.state.currentIndex = 0;
        this.state.score = 0;
        this.state.timeLeft = 300;
        this.state.startTime = Date.now();
        this.state.selectedOption = null;
        this.state.answered = false;

        // Экрандарды ауыстыру
        document.getElementById('test-selection')?.classList.add('hidden');
        document.getElementById('test-running')?.classList.remove('hidden');
        document.getElementById('test-results')?.classList.add('hidden');

        document.getElementById('test-topic-name').textContent = this.topics[topicIndex];
        document.getElementById('test-total-q').textContent = this.state.questions.length;

        this.stopTimer();
        this.startTimer();
        this.renderQuestion();

        if (typeof playSound === 'function') playSound('click');
    },

    /**
     * Таймерді бастау
     */
    startTimer() {
        this.updateTimerDisplay();
        this.state.timer = setInterval(() => {
            this.state.timeLeft--;
            this.updateTimerDisplay();
            if (this.state.timeLeft <= 0) this.finishTest();
        }, 1000);
    },

    stopTimer() {
        if (this.state.timer) {
            clearInterval(this.state.timer);
            this.state.timer = null;
        }
    },

    updateTimerDisplay() {
        const el = document.getElementById('timer-text');
        const container = document.getElementById('test-timer');
        if (!el) return;

        const min = Math.floor(this.state.timeLeft / 60);
        const sec = this.state.timeLeft % 60;
        el.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

        if (container) {
            container.classList.remove('warning', 'danger');
            if (this.state.timeLeft <= 30) container.classList.add('danger');
            else if (this.state.timeLeft <= 60) container.classList.add('warning');
        }
    },

    /**
     * Сұрақты көрсету
     */
    renderQuestion() {
        const container = document.getElementById('question-container');
        if (!container) return;

        const q = this.state.questions[this.state.currentIndex];
        const current = this.state.currentIndex + 1;
        const total = this.state.questions.length;
        const letters = ['A', 'B', 'C', 'D'];

        // Header жаңарту
        document.getElementById('test-current-q').textContent = current;
        document.getElementById('test-score').textContent = this.state.score;
        const fill = document.getElementById('test-progress-fill');
        if (fill) fill.style.width = `${((current - 1) / total) * 100}%`;

        // Нұсқалар HTML
        let optsHTML = '';
        q.opts.forEach((opt, i) => {
            optsHTML += `
                <div class="option-item" data-index="${i}">
                    <div class="option-radio"></div>
                    <span class="option-letter">${letters[i]}</span>
                    <span class="option-text">${opt}</span>
                </div>
            `;
        });

        container.innerHTML = `
            <div class="question-card animate-fadeInUp">
                <div class="question-number">${current}</div>
                <div class="question-text">${q.q}</div>
                <div class="options-list">${optsHTML}</div>
                <div class="exercise-feedback" id="question-feedback"></div>
                <button class="btn-next-question" id="btn-next" disabled>
                    ${current < total ? 'Келесі сұрақ →' : 'Нәтижені көру 📊'}
                </button>
            </div>
        `;

        // State reset
        this.state.selectedOption = null;
        this.state.answered = false;

        // Event binding
        container.querySelectorAll('.option-item').forEach(item => {
            item.addEventListener('click', () => this.selectOption(parseInt(item.dataset.index)));
        });

        document.getElementById('btn-next')?.addEventListener('click', () => this.nextQuestion());
    },

    /**
     * Нұсқа таңдау
     */
    selectOption(index) {
        if (this.state.answered) return;
        this.state.answered = true;
        this.state.selectedOption = index;

        const q = this.state.questions[this.state.currentIndex];
        const isCorrect = index === q.correct;
        if (isCorrect) this.state.score++;

        const optionsList = document.querySelector('.options-list');
        const feedback = document.getElementById('question-feedback');
        const nextBtn = document.getElementById('btn-next');

        if (!optionsList || !feedback) return;

        optionsList.querySelectorAll('.option-item').forEach((item, i) => {
            item.style.pointerEvents = 'none';
            if (i === q.correct) item.classList.add('correct');
            if (i === index && !isCorrect) item.classList.add('wrong');
            if (i === index) item.classList.add('selected');
        });

        if (isCorrect) {
            feedback.className = 'exercise-feedback correct show';
            feedback.innerHTML = '✅ Дұрыс!';
            if (typeof playSound === 'function') playSound('correct');
        } else {
            feedback.className = 'exercise-feedback wrong show';
            feedback.innerHTML = `❌ Қате! Дұрыс жауап: ${q.opts[q.correct]}`;
            if (typeof playSound === 'function') playSound('wrong');
        }

        if (nextBtn) {
            nextBtn.disabled = false;
            nextBtn.style.opacity = '1';
        }
    },

    /**
     * Келесі сұрақ
     */
    nextQuestion() {
        this.state.currentIndex++;
        if (this.state.currentIndex < this.state.questions.length) {
            this.renderQuestion();
        } else {
            this.finishTest();
        }
    },

    /**
     * Тестті аяқтау
     */
    finishTest() {
        this.stopTimer();
        const total = this.state.questions.length;
        const correct = this.state.score;
        const xp = correct * 15;

        // Сақтау
        if (typeof StorageManager !== 'undefined') {
            StorageManager.saveTestScore(this.state.currentTopic, correct, total);
            const newAch = StorageManager.checkAchievements();
            newAch.forEach((a, i) => {
                setTimeout(() => {
                    if (typeof AnimationsModule !== 'undefined') {
                        AnimationsModule.showAchievement(a.name, 'Жаңа жетістік!', a.icon);
                    }
                }, 1000 + i * 1500);
            });
        }

        this.showResults(correct, total, xp);
    },

    /**
     * Нәтижені көрсету
     */
    showResults(correct, total, xp) {
        document.getElementById('test-running')?.classList.add('hidden');
        const res = document.getElementById('test-results');
        if (!res) return;
        res.classList.remove('hidden');

        const percent = Math.round((correct / total) * 100);
        const timeTaken = Math.round((Date.now() - this.state.startTime) / 1000);
        const min = Math.floor(timeTaken / 60);
        const sec = timeTaken % 60;

        let grade, gradeClass, emoji;
        if (percent >= 90) { grade = 5; gradeClass = 'grade-5'; emoji = '🎉'; }
        else if (percent >= 70) { grade = 4; gradeClass = 'grade-4'; emoji = '👏'; }
        else if (percent >= 50) { grade = 3; gradeClass = 'grade-3'; emoji = '📚'; }
        else { grade = 2; gradeClass = 'grade-2'; emoji = '💪'; }

        document.getElementById('results-icon').textContent = emoji;
        document.getElementById('results-title').textContent = percent >= 70 ? 'Тамаша нәтиже!' : 'Жаттығу керек!';
        document.getElementById('results-score-num').textContent = correct;
        document.getElementById('results-total-num').textContent = total;
        
        const gradeEl = document.getElementById('results-grade');
        gradeEl.textContent = `Баға: ${grade}`;
        gradeEl.className = `results-grade ${gradeClass}`;
        
        document.getElementById('results-correct').textContent = correct;
        document.getElementById('results-wrong').textContent = total - correct;
        document.getElementById('results-time').textContent = `${min}:${String(sec).padStart(2, '0')}`;
        document.getElementById('results-xp').textContent = `+${xp}`;

        if (percent >= 70 && typeof AnimationsModule !== 'undefined') {
            setTimeout(() => AnimationsModule.showConfetti(50), 300);
        }
    },

    /**
     * Таңдау экранына қайту
     */
    showSelection() {
        document.getElementById('test-selection')?.classList.remove('hidden');
        document.getElementById('test-running')?.classList.add('hidden');
        document.getElementById('test-results')?.classList.add('hidden');
        this.stopTimer();
        this.renderTopicGrid();
    },

    /**
     * Массивті араластыру
     */
    shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
};

// DOM дайын болғанда іске қосу
document.addEventListener('DOMContentLoaded', () => {
    TestsModule.init();
});