const suits = [
    {
        name: 'New Polar M',
        tempIndex: 70,
        description: 'Модель New Polar M – это модифицированный костюм New Polar. Изменения коснулись центральной ветрозащитной планки. Теперь планка, а также клапаны боковых карманов имеют магнитные застежки. Материал внутренних манжет заменен на более гигроскопичный флис с удобным отверстием для большого пальца. Капюшон получил фиксацию передних пат. Благодаря материалу AERO-TEX, который не промокает, устойчив к воздействию ветра, а также обладает высокими «дышащими» свойствами, костюм создает максимальный комфорт в экстремальных условиях. Все швы проклеены. В комплект входит сумка для хранения.',
        img: 'img/suits/new-polar-m.jpg'
    },
    {
        name: 'New Polar 2.0',
        tempIndex: 70,
        description: 'Утепленный раздельный костюм для зимней рыбалки. Температурный режим до – 45 0С. Флагманский костюм NewPolar в обновленной версии 2.0 получил современный дизайн и улучшенный функционал. Теперь костюм предлагается в трехцветном сочетании (красный/серый/черный). Увеличилось количество карманов на куртке. В новой модели практически все они имеют магнитную застежку, как и центральная планка. Внутренние карманы получили новый дизайн. Флисовая подкладка куртки с рисунком «клетка». Материал внутренних манжет – гигроскопичный флис с отверстием для большого пальца. Капюшон теперь имеет фиксацию передних пат. Благодаря материалу AERO-TEX, который не промокает, устойчив к воздействию ветра, а также обладает высокими «дышащими» свойствами, костюм создает максимальный комфорт в экстремальных условиях. Все швы проклеены. В комплект входит сумка для хранения костюма и съемное хлопковое полотенце.',
        img: 'img/suits/new-polar-2.png'
    },
    {
        name: 'Savoonga',
        tempIndex: 60,
        description: 'ТМ Alaskan представляет новинку 2021 года – раздельный костюм Savoonga. Температурный режим до -35 0С. Куртка имеет ассиметричный дизайн. Высокий штормовой капюшон с регулировкой по высоте и ширине. Глубокий нагрудный карман с брызгозащитной молнией и флисовой подкладкой. Под центральной ветрозащитной планкой карман на молнии. Подкладка куртки комбинированная (фольгированная + флис). Куртка оснащена светоотражающими элементами (на спине под кокеткой, груди и правом рукаве). Полукомбинезон имеет два кармана для рук на брызгозащитных молниях, двухзамочную молнию, расположенную под центральной ветрозащитной планкой. В верхней части полукомбинезона есть большой объемный карман для мобильного телефона. Эргономичные детали колен имеют усиление и съемные детали из пенки. Задняя часть полукомбинезона также усилена пенкой. Нижняя часть штанин имеет регулировку по ширине (молния + пата на застежке Велкро (липучка)).',
        img: 'img/suits/savoonga.png'
    },
    {
        name: 'Russian Mission FS',
        tempIndex: 60,
        description: 'Теплый, непродуваемый раздельный костюм Alaskan Russian Mission FS из непромокаемой ткани c мембраной AERO-TEX и проклеенными швами. Костюм предназначен для зимней рыбалки в сырую холодную погоду до - 35 С.',
        img: 'img/suits/russian-mission.png'
    },
    {
        name: 'Dakota',
        tempIndex: 45,
        description: 'Теплый, легкий (2,8 кг), непродуваемый, костюм спортивного дизайна изготовлен из непромокаемой ткани с мембраной AERO-TEX, предназначен для рыбалки в сырую, холодную погоду до -30 С. Все швы проклеены.',
        img: 'img/suits/dakota.jpg'
    },
    {
        name: 'Dakota 2.0',
        tempIndex: 45,
        description: 'Обновленная версия раздельного костюма Dakota отличается от предыдущей версии тканью верха (теперь это 100% нейлон), а также дизайном. Куртка теперь имеет два боковых кармана, два кармана для рук, а также два внутренних накладных кармана на молниях, центральную планку на застежке Велкро (липучка). В рукавах внутренние манжеты из гигроскопичного флиса. Подкладка куртки комбинированная (флис + полиэстер). Дизайн полукомбинезона также претерпел изменения. Теперь у него имеется два кармана для рук на флисовой подкладке, два больших накладных кармана, а также дополнительные усиления на эргономичных деталях колен и сзади. Нижняя часть штанин полукомбинезона имеет регулировку на застежке Велкро (липучка). Все швы проклеены. В комплект входит съемное хлопковое полотенце.',
        img: 'img/suits/dakota-2.png'
    },
    {
        name: 'Cherokee',
        tempIndex: 45,
        description: 'Поддерживающий на воде зимний костюм Alaskan Cherokee. Его особенность состоит в том, что куртка имеет вставки из «пенки» на передней и задней деталях. Куртка утеплена искусственным утеплителем Synthetic Down, имеет яркое цветовое сочетание и снабжена светоотражающими декоративными элементами. Рукава куртки имеют внутренний неопреновый манжет. Полукомбинезон, как полагается зимнему костюму, имеет искусственный утеплитель Synthetic Down, а также вставки из «пенки» на задней части комбинезона и коленях. Благодаря материалу AERO-TEX, который не промокает, устойчив к воздействию ветра, а также обладает высокими «дышащими» свойствами, костюм создает максимальный комфорт в экстремальных условиях. Все швы проклеены.',
        img: 'img/suits/cheeroke.png'
    },
    {
        name: 'Trophy',
        tempIndex: 19,
        description: 'Раздельный костюм Alaskan Trophy предназначен для «теплой» европейской зимы (от -5 С до +15 С). Новая современная модель будет иметь успех как на ледовой рыбалке, так и в городских условиях. Ткань верха 100% нейлон с текстурой «Rip Stop». Куртка имеет высокий штормовой капюшон с регулировками по высоте и ширине, эргономичный крой рукава с внутренними трикотажными манжетами. Подкладка куртки – микрофлис. Полукомбинезон имеет два кармана для рук, а также два кармана на молнии в верхней части, центральную двухзамочную молнию, закрытую центральной ветрозащитной планкой. С правой стороны на поясе полукомбинезона (рядом с карманом для рук) размещено полукольцо для крепления инструментов.',
        img: 'img/suits/trophy.png'
    },
    {
        name: 'Без костюма', tempIndex: 0
    }
];

const underwears = [
    {
        name: 'Термобельё Polar+',
        tempIndex: 9,
        description: 'Универсальный компрессионный комплект Alaskan Polar+ предназначен для использования в качестве гигиенического первого слоя в экстремально холодных условиях. Данная модель термобелья изготовлена из двух видов ткани. Первая (более плотная фактурная ткань) служит для быстрого выведения влаги в наружный слой и сохранения тепла. Вторая - более эластичная - предназначена для плотного облегания тела и быстрого выведения влаги в наружный слой. Анатомический крой, плоские швы и эластичность ткани позволяют плотно облегать тело, не стесняя движений. Волокна AEROWARM обладают антибактериальными и гипоаллергенными свойствами, гарантируют превосходный микроклимат и функциональность, не вызывают раздражения кожных покровов. Волокна CREORA придают ткани прекрасную эластичность и износостойкость.',
        img: 'img/underwears/polar-plus.png'
    },
    {
        name: 'Термобельё ManGuide C',
        tempIndex: 6,
        description: 'Универсальный компрессионный комплект Man Guide C предназначен для использования в качестве гигиенического первого слоя в экстремальных условиях (для активного отдыха, рыбалки, занятий спортом). В дизайн комплекта входит воротник-стойка и короткая застежка-молния. Анатомический крой, плоские швы и повышенная эластичность ткани позволяют плотно облегать тело, не стесняя движений, благодаря чему не происходит раздражение кожных покровов. Волокна AEROWARM обладают антибактериальными и гипоаллергенными свойствами, гарантируют превосходный микроклимат и функциональность. Волокна CREORA придают ткани прекрасную эластичность, износостойкость и добавляют комфортных ощущений при носке.',
        img: 'img/underwears/man-guide.png'
    },
    {
        name: 'Термобельё First Mission',
        tempIndex: 3,
        description: 'Универсальный компрессионный комплект First Mission предназначен для использования в качестве гигиенического первого слоя. Анатомический крой, плоские швы и повышенная эластичность ткани позволяют плотно облегать тело, не стесняя движений. Подходит для активного отдыха на природе, занятий спортом и ежедневного использования в городских условиях. Используемые в ткани волокна AEROWARM обладают отличной паропроницаемостью, влагоотведением, а также антибактериальными свойствами. Волокна CREORA придают ткани высокую эластичность, износостойкость и комфорт, поэтому предлагаемый комплект не только быстро высыхает без потери размера, но и сохраняет высокую мягкость и эластичность.',
        img: 'img/underwears/first-mission.png'
    },
    {
        name: 'Без термобелья', tempIndex: 0
    }
];

const fleeces = [
    {
        name: 'Kenai',
        tempIndex: 10,
        description: 'Микрофлисовый комплект Alaskan Kenai предназначен для межсезонного использования, а так же холодным летом как первый слой. Комплект состоит из топа с короткой застежкой-молнией и штанов с эластичным поясом и карманами. Изделие декорировано вышивками с Alaskan логотипом. Отлично подойдет в качестве первого слоя для забродной экипировки или лодочного костюма.',
        img: 'img/fleeces/kenai.png'
    },
    {
        name: 'Royal Fish',
        tempIndex: 14,
        description: 'Флисовый комплект Royal Fish предназначен для использования в качестве второго, утепляющего слоя одежды. Флисовые материалы известны своей хорошей гигроскопичностью и способностью удерживать тепло тела за счет структуры ткани. Куртка сложного анатомического кроя с центральной молнией, одним нагрудным и двумя боковыми карманами. Брюки с эластичным поясом и двумя боковыми карманами. Этот комплект предназначен для использования на рыбалке, охоте и занятий активными видами спорта в любое время года.',
        img: 'img/fleeces/royal-fish.png'
    },
    {
        name: 'River Ranger',
        tempIndex: 12,
        description: 'Флисовый полукомбинезон River Ranger предназначен для использования в качестве второго, утепляющего слоя одежды. Флисовые материалы известны своей хорошей гигроскопичностью и способностью удерживать тепло тела за счет структуры ткани. Особенность кроя заключается в легком облегании тела, что облегчает использование комплекта с утепленной верхней одеждой. Отсутствие лишних складок и толщин в области голени обеспечивает комфортное ношение. Эластичные манжеты штанин не позволяют им «задираться» при надевании верхнего слоя, вейдерсов или обуви. В демисезонных температурных условиях River Ranger можно использовать как первый слой (в комплекте с лодочным костюмом или вейдерсами). Комплект имеет центральную застежку-молнию с двумя замками, а также накладной карман с молнией на груди.',
        img: 'img/fleeces/river-ranger.jpeg'
    },
    {
        name: 'Без флиса', tempIndex: 0
    }
];

const state = {
    suit: null, underwear: null, fleece: null
};

let isAppStarted = false;

document.addEventListener('DOMContentLoaded', () => {
    const suitsList = document.querySelector('#suit-list');
    const fleecesList = document.querySelector('#fleece-list');
    const underwearsList = document.querySelector('#underwear-list');

    const suitCard = document.querySelector('#suit-card');
    const fleeceCard = document.querySelector('#fleece-card');
    const underwearCard = document.querySelector('#underwear-card');

    const ati = document.querySelector('#ati');
    const thermImg = document.querySelector('#therm-img');

    fillList('suit', suitsList, suits);
    fillList('fleece', fleecesList, fleeces);
    fillList('underwear', underwearsList, underwears);

    suitsList.parentElement.querySelector('.list-wears__selected').addEventListener('click', () => suitsList.style.display = 'block');
    fleecesList.parentElement.querySelector('.list-wears__selected').addEventListener('click', () => fleecesList.style.display = 'block');
    underwearsList.parentElement.querySelector('.list-wears__selected').addEventListener('click', () => underwearsList.style.display = 'block');

    suitsList.addEventListener('click', () => suitsList.style.display = 'none');
    fleecesList.addEventListener('click', () => fleecesList.style.display = 'none');
    underwearsList.addEventListener('click', () => underwearsList.style.display = 'none');

    function fillList(type, list, data) {
        data.forEach(function (item) {
            const li = document.createElement('li');
            li.innerText = item.name;

            li.addEventListener('click', () => {
                changeState(type, item);
                Array.from(list.children).forEach((item) => item.classList.remove('active'));
                li.classList.add('active');
                list.parentElement.querySelector('.list-wears__selected').innerText = item.name;
            });

            list.appendChild(li);
        });
    }

    function getTotalATI() {
        return (state.suit ? state.suit.tempIndex : 0) + (state.underwear ? state.underwear.tempIndex : 0) + (state.fleece ? state.fleece.tempIndex : 0);
    }

    function changeState(type, value) {
        if (!isAppStarted) {
            isAppStarted = true;
            document.querySelector('.ati').classList.remove('hidden');
            document.querySelector('.welcome-text').classList.add('hidden');
        }

        const current = getTotalATI();

        state[type] = value;

        renderATI(current);
        renderCard(type, value);
        renderTherm();
    }

    function renderTherm() {
        const total = getTotalATI();
        let src;

        if (total >= 85 && total <= 100) {
            src = 'img/-35-45.png';
        } else if (total >= 70 && total <= 84) {
            src = 'img/-35-25.png';
        } else if (total >= 55 && total <= 69) {
            src = 'img/-15-30.png';
        } else if (total >= 40 && total <= 54) {
            src = 'img/-5-15.png';
        } else if (total >= 30 && total <= 39) {
            src = 'img/0-10.png';
        } else if (total >= 20 && total <= 29) {
            src = 'img/+10-5.png';
        } else if (total >= 10 && total <= 19) {
            src = 'img/+15-0.png';
        } else {
            src = 'img/therm.png';
        }

        thermImg.setAttribute('src', src);
    }

    function renderATI(current) {
        let i = current;
        const total = getTotalATI();

        renderATIRec(i, total);
    }

    function renderATIRec(val, target) {
        if (val === target) {
            return ati.innerText = val;
        }

        if (val < target) {
            return setTimeout(() => {
                ati.innerText = val;
                renderATIRec(val + 1, target);
            }, 20);
        }

        if (val > target) {
            return setTimeout(() => {
                ati.innerText = val;
                renderATIRec(val - 1, target);
            }, 20);
        }
    }

    function renderCard(type, value) {
        let card;

        switch (type) {
            case 'suit':
                card = suitCard;
                break;
            case 'fleece':
                card = fleeceCard;
                break;
            case 'underwear':
                card = underwearCard;
                break;
        }

        if (value.name === 'Без костюма' || value.name === 'Без флиса' || value.name === 'Без термобелья') {
            card.querySelector('.card__not-selected').classList.remove('hidden');
            card.querySelector('.card__content').classList.add('hidden');
        } else {
            card.querySelector('.card__content').classList.remove('hidden');
            card.querySelector('.card__not-selected').classList.add('hidden');
        }

        card.querySelector('.card__name').innerText = state[type].name;
        card.querySelector('.card__ati').innerText = `/ ATI = ${state[type].tempIndex}*`;
        card.querySelector('.card__description').innerText = state[type].description ? state[type].description : '-';
        card.querySelector('.card__img img').setAttribute('src', state[type].img);
    }
});
