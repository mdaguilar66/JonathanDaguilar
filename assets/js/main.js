// remove class
function removeClass(el, klass) {
	el.classList.remove(klass);
};

// add class
function addClass(el, klass) {
	el.classList.add(klass);
};


// create accordian
const accordianItems = document.querySelectorAll('.accordian-item');
const accordianContents = document.querySelectorAll('.accordian-content');

accordianItems.forEach(function(accordianItem) {
	
	const accordianHeading = accordianItem.firstElementChild;
	accordianHeading.addEventListener('click', toggleAccordian);
});

function toggleAccordian(e) {
	accordianContents.forEach(function(accordianContent) {
		if (accordianContent.previousElementSibling.firstElementChild === e.target && accordianContent.parentElement.classList.contains('active') == false) {
			removeClass(accordianContent, 'hidden');
			addClass(accordianContent.parentElement, 'active');
			console.log(accordianContent.parentElement.classList.contains('active'));
		} else if (accordianContent.previousElementSibling.firstElementChild === e.target && accordianContent.parentElement.classList.contains('active') == true) {
			addClass(accordianContent, 'hidden');
			removeClass(accordianContent.parentElement, 'active');
			console.log('here');
		} else {
			addClass(accordianContent, 'hidden');
			removeClass(accordianContent.parentElement, 'active');
		}
	})
};

// create slider for reviews 
const elem = document.querySelector('.carousel');

const flkty = new Flickity( elem, {
  autoPlay: true,
  autoPlay: 4000,
  pageDots: true,
  wrapAround: true,
  adaptiveHeight: true,
});

// nav scroll

function navClick(event) {
	event.preventDefault();
	const sectionRef = event.target.getAttribute('js-section-link');
	const offsetTop = document.querySelector(`[js-site-section="${sectionRef}"]`).offsetTop - 100;

	console.log(offsetTop, 'offset top')

	scroll({
    top: offsetTop,
    behavior: "smooth"
  });
};

[...document.querySelectorAll('.site-nav__link')].forEach((navItem) => {
	navItem.addEventListener('click', (event) => {
		console.log('here');
		navClick(event);
	});
});

// nav animation 

const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
	const offset = window.pageYOffset;

	if(offset > 75) {
		navBar.classList.add('scroll');
	} else {
		navBar.classList.remove('scroll');
	}
})