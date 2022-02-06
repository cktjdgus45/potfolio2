// gage percentage *
const gages = document.querySelectorAll('.gage');

gages.forEach(gage => {
    const infoElement = gage.parentNode.previousElementSibling;
    const percentage = parseInt(infoElement.childNodes[2].nextSibling.textContent);
    gage.style.width = `${percentage}%`;
})

//scrollTo getBoundingClientRect

//document.getElementById("mine").scrollIntoView(true);


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
