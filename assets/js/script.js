const elementLists = document.querySelectorAll('.events__item');

console.log(elementLists.length);

let indexImage = 0;
let indexPlace = 0;
let indexDate = 0;

const eventsImage = document.querySelectorAll('.events__image');
const eventsPlace = document.querySelectorAll('.events__place');
const eventsDate = document.querySelectorAll('.events__date');

let rectImage = [];
let rectPlace = [];
let rectDate = [];

eventsImage.forEach((el) => {
	rectImage.push(el.getBoundingClientRect());
});

eventsPlace.forEach((el) => {
	rectPlace.push(el.getBoundingClientRect());
});

eventsDate.forEach((el) => {
	rectDate.push(el.getBoundingClientRect());
});

const parallaxFunc = () => {
	console.log('alalalal');
	if (rectImage[0].top > 0) {
		rectImage.shift();
		console.log('huy');
	}
};

window.addEventListener('scroll', () => {
	console.log(eventsImage[0].children[0]);
	if (
		rectImage &&
		rectImage[indexImage] &&
		rectImage[indexImage].y - window.pageYOffset - window.innerHeight < 0
	) {
		eventsImage[indexImage].children[0].classList.add('active');
		indexImage = indexImage + 1;
	}

	if (
		rectPlace &&
		rectPlace[indexPlace] &&
		rectPlace[indexPlace].y - window.pageYOffset - window.innerHeight < 0
	) {
		eventsPlace[indexPlace].children[0].classList.add('active');
		indexPlace = indexPlace + 1;
	}

	if (
		rectDate &&
		rectDate[indexDate] &&
		rectDate[indexDate].y - window.pageYOffset - window.innerHeight < 0
	) {
		eventsDate[indexDate].children[0].classList.add('active');
		indexDate = indexDate + 1;
	}
});

window.addEventListener('load', () => {
	while (
		rectImage &&
		rectImage[indexImage] &&
		rectImage[indexImage].y - window.pageYOffset - window.innerHeight < 0
	) {
		eventsImage[indexImage].children[0].classList.add('active');
		indexImage = indexImage + 1;
	}

	while (
		rectPlace &&
		rectPlace[indexPlace] &&
		rectPlace[indexPlace].y - window.pageYOffset - window.innerHeight < 0
	) {
		{
			eventsPlace[indexPlace].children[0].classList.add('active');

			indexPlace = indexPlace + 1;
		}
	}

	while (
		rectDate &&
		rectDate[indexDate] &&
		rectDate[indexDate].y - window.pageYOffset - window.innerHeight < 0
	) {
		eventsDate[indexDate].children[0].classList.add('active');
		indexDate = indexDate + 1;
	}
});
