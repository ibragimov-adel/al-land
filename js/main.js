const suits = [
    {
        name: 'New Polar',
        tempIndex: 70
    },
    {
        name: 'New PolarM',
        tempIndex: 70
    },
    {
        name: 'New Polar 2.0',
        tempIndex: 70
    },
    {
        name: 'Savoonga',
        tempIndex: 60
    },
    {
        name: 'Russian Mission FS',
        tempIndex: 60
    },
    {
        name: 'Dakota',
        tempIndex: 45
    },
    {
        name: 'Dakota 2.0',
        tempIndex: 45
    },
    {
        name: 'Cherokee',
        tempIndex: 45
    },
    {
        name: 'Trophy',
        tempIndex: 19
    },
    {
        name: 'Без костюма',
        tempIndex: 0
    }
];

const underwears = [
    {
        name: 'Термобельё Polar+',
        tempIndex: 9
    },
    {
        name: 'Термобельё ManGuide C',
        tempIndex: 6
    },
    {
        name: 'Термобельё First Mission',
        tempIndex: 3
    },
    {
        name: 'Без термобелья',
        tempIndex: 0
    }
];

const fleeces = [
    {
        name: 'Kenai',
        tempIndex: 10
    },
    {
        name: 'Royal Fish',
        tempIndex: 14
    },
    {
        name: 'River Ranger',
        tempIndex: 12
    },
    {
        name: 'Без флиса',
        tempIndex: 0
    }
];

const state = {
    suit: null,
    underwear: null,
    fleece: null
};

document.addEventListener('DOMContentLoaded', () => {
    const suitsList = document.querySelector('#suit-list');
    const fleecesList = document.querySelector('#fleece-list');
    const underwearsList = document.querySelector('#underwear-list');

    const suitCard = document.querySelector('#suit-card');
    const fleeceCard = document.querySelector('#fleece-card');
    const underwearCard = document.querySelector('#underwear-card');

    // const therm = document.querySelector('#therm');
    // const MIN_TEMP = -50;
    // const MAX_TEMP = 30;

    // const thermValues = therm.querySelector('.therm__values');
    // const thermValues2 = therm.querySelector('.therm__values2');
    // const grayLine = therm.querySelector('.therm__line span.gray');
    // const mainLine = therm.querySelector('.therm__line span.main');

    const ati = document.querySelector('#ati');

    fillList('suit', suitsList, suits);
    fillList('fleece', fleecesList, fleeces);
    fillList('underwear', underwearsList, underwears);

    function fillList(type, list, data) {
        data.forEach(function(item) {
            const li = document.createElement('li');
            li.innerText = item.name;

            li.addEventListener('click', () => {
                changeState(type, item);
                Array.from(list.children).forEach((item) => item.classList.remove('active'));
                li.classList.add('active');
            });

            list.appendChild(li);
        });
    }

    function getTotalATI() {
        return (state.suit ? state.suit.tempIndex : 0) + (state.underwear ? state.underwear.tempIndex : 0) + (state.fleece ? state.fleece.tempIndex : 0);
    }

    function changeState(type, value) {
        const current = getTotalATI();

        state[type] = value;

        renderATI(current);
        renderCard(type);
        // renderTherm();
    }

    function renderTherm() {
        const ati = getTotalATI();
        const [gray, main] = getThermValues(ati);

        grayLine.style.width = `${gray}px`;
        mainLine.style.width = `${main}px`;
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

    function renderCard(type) {
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

        card.querySelector('.card__name').innerText = state[type].name;
        card.querySelector('.card__ati').innerText = `/ ATI = ${state[type].tempIndex}*`;
    }
    //
    // for (let i = MIN_TEMP; i <= MAX_TEMP; i += 10) {
    //     const div = document.createElement('div');
    //     div.innerText = i;
    //     div.classList.add('therm__value');
    //     div.style.width = '80px';
    //     thermValues.appendChild(div);
    // }
    //
    // for (let i = MIN_TEMP; i <= MAX_TEMP; i += 10) {
    //     const div = document.createElement('div');
    //     div.innerText = i;
    //     div.classList.add('therm__value');
    //     div.style.width = '80px';
    //     thermValues2.appendChild(div);
    // }
    //
    // function getThermValues(index) {
    //     if (index >= 85 && index <= 100) {
    //         return [40, 40 * 2];
    //     }
    //
    //     if (index >= 70 && index <= 84) {
    //         return [40 * 3, 40 * 2];
    //     }
    //
    //     if (index >= 55 && index <= 69) {
    //         return [40 * 4, 40 * 3];
    //     }
    //
    //     if (index >= 40 && index <= 54) {
    //         return [40 * 7, 40 * 2];
    //     }
    //
    //     if (index >= 30 && index <= 39) {
    //         return [40 * 8, 40 * 2];
    //     }
    //
    //     if (index >= 20 && index <= 29) {
    //         return [40 * 9, 40 * 3];
    //     }
    //
    //     if (index >= 10 && index <= 19) {
    //         return [40 * 10, 40 * 3];
    //     }
    //
    //     return [0, 0];
    // }
});
