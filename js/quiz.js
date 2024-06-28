const QUESTIONS = [
    {
        label: 'Какие криптовалюты вас интересуют для инвестирования, и почему?',
        answers: [
            'Ripple привлекает внимание из-за своей цели улучшить глобальные финансовые транзакции через блокчейн.',
            'Cardano представляется перспективным из-за своего фокуса на научно обоснованные подходы к блокчейн.',
            'Меня интересует Bitcoin из-за его первоначального положения на рынке и широкого признания среди инвесторов.',
            'Ethereum мне интересен благодаря своей технологии смарт-контрактов, которая может изменить множество отраслей.',
        ],
    },
    {
        label: 'Как вы определяете свой уровень риска при торговле на финансовых рынках?',
        answers: [
            'Я определяю свой уровень риска на основе своего финансового положения и целей, а также терпимости к потерям.',
            'Использую различные методы, такие как анализ волатильности рынка и исторические данные, чтобы оценить потенциальные риски.',
            'Рассматриваю различные сценарии и планирую диверсификацию портфеля для снижения рисков.',
            'Сотрудничаю с финансовым консультантом для оценки и управления рисками на финансовых рынках.',
        ],
    },
    {
        label: 'Какие виды инвестиций вас больше всего привлекают, кроме криптовалют?',
        answers: [
            'Акции крупных технологических компаний, таких как Apple и Amazon, из-за их стабильного роста и инновационных продуктов.',
            'Облигации государственных казначейств из-за их низкого уровня риска и гарантированной доходности.',
            'Недвижимость как инвестиционный актив, который обеспечивает стабильный поток дохода и капиталовложения в долгосрочной перспективе.',
            'Инвестиции в сырьевые товары, такие как золото и нефть, как способ защиты от инфляции и геополитических рисков.',
        ],
    },
    {
        label: 'Какие факторы для вас являются ключевыми при выборе финансового консультанта или брокера?',
        answers: [
            'Опыт работы и репутация консультанта в индустрии финансовых услуг.',
            'Прозрачность и честность в отношениях с клиентами.',
            'Доступность персонального обслуживания и индивидуальный подход к потребностям клиента.',
            'Уровень комиссионных и условия сотрудничества, которые соответствуют моим финансовым целям и стратегиям.',
        ],
    },
    {
        label: 'С какой целью вы рассматриваете возможность участия в торговле на финансовых рынках?',
        answers: [
            'Моя цель - увеличение капитала и финансовая независимость в будущем.',
            'Я стремлюсь к долгосрочному росту и защите от инфляции через инвестиции на финансовых рынках.',
            'Торговля на рынках предоставляет мне возможность развивать финансовые навыки и улучшать свои инвестиционные стратегии.',
            'Интерес к потенциально высокой доходности и возможности участия в мировой экономике через разнообразные активы.',
        ],
    },
    {
        label: 'Что для вас является наиболее важным аспектом при выборе платформы для торговли криптовалютой?',
        answers: [
            'Надежность и безопасность хранения активов на платформе.',
            'Низкие комиссии на торговые операции и вывод средств.',
            'Доступность широкого спектра криптовалютных пар для торговли.',
            'Интуитивно понятный интерфейс и удобство использования платформы.',
        ],
    },
    {
        label: 'Какие инвестиционные стратегии вы считаете наиболее перспективными в текущем экономическом климате?',
        answers: [
            'Долгосрочное инвестирование в акции стабильных компаний с высоким потенциалом роста.',
            'Стратегия диверсификации портфеля между акциями, облигациями и альтернативными инвестициями.',
            'Инвестирование в криптовалюты с целью краткосрочной торговли на волатильных рынках.',
            'Использование стратегий хеджирования для защиты от потенциальных рисков на финансовых рынках.',
        ],
    },
    {
        label: 'Как вы оцениваете влияние глобальных экономических событий на рынок криптовалют?',
        answers: [
            'Глобальные экономические события, такие как изменения процентных ставок и геополитические кризисы, могут значительно повлиять на цены криптовалют.',
            'Экономическая нестабильность и инфляция могут спровоцировать рост спроса на криптовалюты в качестве защиты от денежной девальвации.',
            'Изменения в регулировании криптовалютных рынков могут вызвать значительные колебания цен на активы.',
            'Я внимательно следую за мировыми новостями и экономическими показателями для адекватной оценки влияния на рынок криптовалют.',
        ],
    },
    {
        label: 'Какие факторы влияют на ваш выбор времени участия в торговле на фондовом рынке?',
        answers: [
            'Анализ технических показателей и формирование прогнозов для определения наилучшего времени для входа и выхода из позиций.',
            'Учет макроэкономических тенденций и перспектив роста отдельных компаний или отраслей.',
            'Реакция на текущие события на рынке и новости, которые могут повлиять на цену активов.',
            'Сотрудничество с финансовыми консультантами для получения рекомендаций по времени участия в торговле на фондовом рынке.',
        ],
    },
    {
        label: 'Какие факторы вам кажутся ключевыми при выборе криптовалюты для долгосрочного инвестирования?',
        answers: [
            'Технологическая инновация и потенциал блокчейн-платформы для решения реальных проблем.',
            'Уровень адаптации криптовалюты и ее использование в реальной экономике.',
            'Степень децентрализации и защиты от киберугроз.',
            'История развития проекта и команда разработчиков, поддерживающих его долгосрочную целостность.',
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
    getProgress: () => (questionsStep.questionIndex / QUESTIONS.length) * 100,
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
