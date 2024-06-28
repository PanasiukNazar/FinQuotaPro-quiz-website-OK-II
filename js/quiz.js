const QUESTIONS = [
    {
        label: 'Какие криптовалюты вас интересуют для инвестирования, и почему?',
        answers: [
            'Ripple привлекает внимание из-за своей цели улучшить глобальные финансовые транзакции через блокчейн.',
            'Cardano представляется перспективным из-за своего фокуса на научно обоснованные подходы к блокчейн.',
            'Меня интересует Bitcoin из-за его первоначального положения на рынке и широкого признания среди инвесторов.',
        ],
    },
    {
        label: 'Как вы определяете свой уровень риска при торговле на финансовых рынках?',
        answers: [
            'Я определяю свой уровень риска на основе своего финансового положения и целей, а также терпимости к потерям.',
            'Использую различные методы, такие как анализ волатильности рынка и исторические данные, чтобы оценить потенциальные риски.',
            'Рассматриваю различные сценарии и планирую диверсификацию портфеля для снижения рисков.',
        ],
    },
    {
        label: 'Какие виды инвестиций вас больше всего привлекают, кроме криптовалют?',
        answers: [
            'Акции крупных технологических компаний, таких как Apple и Amazon, из-за их стабильного роста и инновационных продуктов.',
            'Облигации государственных казначейств из-за их низкого уровня риска и гарантированной доходности.',
            'Недвижимость как инвестиционный актив, который обеспечивает стабильный поток дохода и капиталовложения в долгосрочной перспективе.',
        ],
    },
    {
        label: 'Какие факторы для вас являются ключевыми при выборе финансового консультанта или брокера?',
        answers: [
            'Опыт работы и репутация консультанта в индустрии финансовых услуг.',
            'Прозрачность и честность в отношениях с клиентами.',
            'Доступность персонального обслуживания и индивидуальный подход к потребностям клиента.',
        ],
    },
    {
        label: 'С какой целью вы рассматриваете возможность участия в торговле на финансовых рынках?',
        answers: [
            'Моя цель - увеличение капитала и финансовая независимость в будущем.',
            'Я стремлюсь к долгосрочному росту и защите от инфляции через инвестиции на финансовых рынках.',
            'Интерес к потенциально высокой доходности и возможности участия в мировой экономике через разнообразные активы.',
        ],
    },
    {
        label: 'Что для вас является наиболее важным аспектом при выборе платформы для торговли криптовалютой?',
        answers: [
            'Надежность и безопасность хранения активов на платформе.',
            'Низкие комиссии на торговые операции и вывод средств.',
            'Доступность широкого спектра криптовалютных пар для торговли.',
        ],
    },
];

const $container = document.getElementById('container');

const startStep = {
    render: () => {
        $container.innerHTML = `
        <div class="container quiz-wrapper">
            <div class="row quiz-content">
                <div class="col-lg-6 col-md-6 col-lg-6">
                    <img class="quiz-img" src="img/quiz.jpg">
                </div>
                <div class="col-lg-6 col-md-6 col-lg-6">
                    <h2 class="title">ПроФинКвот</h2>
                    <h3>Как выбрать лучшие акции и монеты для инвестирования, проводя всего 30 минут в день на анализ рынка?</h3>
                    <button class="btn btn-primary w-100 py-3 first-button" data-action="startQuiz">Начать</button>
                </div>
            </div>
        </div>
      `;
    },
    onClick: (el) => {
        if (el.getAttribute('data-action') === 'startQuiz') {
            quiz.nextStep(questionsStep);
        }
    },
};

const questionsStep = {
    questionIndex: 0,
    answers: {},
    render: () => {
        const question = QUESTIONS[questionsStep.questionIndex];

        $container.innerHTML = `
        <div class="container quiz-wrapper">

            <div class="row quiz-content text-center">

                <h3>${question.label}</h3>

                <div class="row answers">
                    ${question.answers
                        .map(
                            (answer, index) =>
                                `
                                <button class="answer col-md-12 col-lg-5 border rounded" data-action="selectAnswer" data-answer-index="${index}">
                                    ${answer}
                                </button>
                            `,
                        )
                        .join('')}
                </div>
                <div class="row justify-content-center mt-4" style="margin: 0 auto;">
                    <div class="progress col-md-6" style="padding-left: 0 !important; padding-right: 0 !important;">
                        <div class="progress-bar" style="width: ${questionsStep.getProgress()}%">${questionsStep.getProgress()}%</div>
                    </div>
                </div>
            </div>
        </div>
      `;
    },
    getProgress: () =>
        Math.floor((questionsStep.questionIndex / QUESTIONS.length) * 100),
    onClick: (el) => {
        switch (el.getAttribute('data-action')) {
            case 'goToNextQuestion':
                return questionsStep.goToNextQuestion();
            case 'goToPreviousQuestion':
                return questionsStep.goToPreviousQuestion();
            case 'selectAnswer':
                return questionsStep.selectAnswer(
                    parseInt(el.getAttribute('data-answer-index'), 10),
                );
        }
    },
    goToPreviousQuestion: () => {
        questionsStep.questionIndex -= 1;
        questionsStep.render();
    },
    selectAnswer: (answerIndex) => {
        const question = QUESTIONS[questionsStep.questionIndex];
        const selectedAnswer = question.answers[answerIndex];

        questionsStep.answers = {
            ...questionsStep.answers,
            [question.label]: selectedAnswer,
        };

        if (questionsStep.isFinalQuestion()) {
            questionsStep.completeStep();
        } else {
            questionsStep.goToNextQuestion();
        }
    },
    isFinalQuestion: () => questionsStep.questionIndex === QUESTIONS.length - 1,
    goToNextQuestion: () => {
        questionsStep.questionIndex += 1;
        questionsStep.render();
    },
    completeStep: () => {
        quiz.setAnswers(questionsStep.answers);
        quiz.nextStep(finalStep);
    },
};

const finalStep = {
    render: () => {
        $container.innerHTML = `
        <div class="container quiz-wrapper">
            <div class="row quiz-content">
                <div class="col-lg-6 col-md-6 col-sm-12 form-block">
                    <h2 class="title">ПроФинКвот</h2>
                    <h1 class="title">Последний шаг!</h1>
                    <h3>Заполните форму, чтобы получить бесплатный доступ к пяти наиболее эффективным стратегиям в области криптовалютного трейдинга.</h3>
                    <form>
                        <input class="form-control" name="name" type="name" placeholder="Имя" required>
                        <input class="form-control" name="email" type="email" placeholder="Email" required>
                        <input class="form-control" name="phone" type="phone" placeholder="Номер" required>
                        
                        ${Object.keys(quiz.answers)
                            .map(
                                (question) =>
                                    `<input name="${question}" value="${quiz.answers[question]}" hidden>`,
                            )
                            .join('')}
                
                        <button data-action="submitAnswers" class="btn btn-primary w-50 py-3">Отправить</button>
                    </form>
                </div>
                <div class="col-lg-6 col-md-6 col-lg-6">
                    <img class="quiz-img" src="img/quiz-1.jpg">
                </div>
            </div>
        </div>
      `;
    },
    onClick: (el) => {
        if (el.getAttribute('data-action') === 'submitAnswers') {
            localStorage.setItem('quizDone', true);
            document.getElementById('main-page').classList.remove('hide');
            document.getElementById('quiz-page').classList.add('hide');
        }
    },
};

const quiz = {
    activeStep: startStep,
    answers: {},
    clear: () => ($container.innerHTML = ''),
    init: () => {
        $container.addEventListener('click', (event) =>
            quiz.activeStep.onClick(event.target),
        );
        $container.addEventListener('submit', (event) =>
            event.preventDefault(),
        );
    },
    render: () => {
        quiz.clear();
        quiz.activeStep.render();
    },
    nextStep: (step) => {
        quiz.activeStep = step;
        quiz.render();
    },
    setAnswers: (answers) => (quiz.answers = answers),
};

if (!localStorage.getItem('quizDone')) {
    document.getElementById('main-page').classList.add('hide');
    quiz.init();
    quiz.render();
}
