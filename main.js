// gage percentage *
const gages = document.querySelectorAll('.gage');

gages.forEach(gage => {
    const infoElement = gage.parentNode.previousElementSibling;
    const percentage = parseInt(infoElement.childNodes[2].nextSibling.textContent);
    gage.style.width = `${percentage}%`;
})

//scrollIntoSection - header nav button
const category = document.querySelector('.category');

const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const handleCategoryClicked = (event) => {
    const clicked = event.target;
    if (clicked.localName === 'ul') {
        return;
    }
    goToSection(clicked.dataset.id);
}

category.addEventListener('click', handleCategoryClicked);

//scrollToInit - arrow up button click
const goUpBtn = document.querySelector('.fa-angle-up');

const handleGoUpBtnClicked = (event) => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

goUpBtn.addEventListener('click', handleGoUpBtnClicked);
//scrollToContact - section:home contact button click
const goContactBtn = document.querySelector('.contact');

const handleContactBtnClicked = (event) => {
    goToSection(event.target.className);
}

goContactBtn.addEventListener('click', handleContactBtnClicked)
