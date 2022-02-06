// gage percentage *
const gages = document.querySelectorAll('.gage');

gages.forEach(gage => {
    const infoElement = gage.parentNode.previousElementSibling;
    const percentage = parseInt(infoElement.childNodes[2].nextSibling.textContent);
    gage.style.width = `${percentage}%`;
})
//header opacity when scroll down
const header = document.querySelector('.header');
const height = header.getBoundingClientRect().height;
const handleScroll = (event) => {
    const y = window.scrollY;
    if (y >= height) {
        header.style.backgroundColor = 'transparent';
    } else {
        header.style.backgroundColor = 'var(--header-bg-color)';
    }
}
window.addEventListener('scroll', handleScroll);

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

//Project Filtering
const projects = document.querySelector('.projects');
const projectNodeList = document.querySelectorAll('.project');
const handleProjectBtnClicked = (event) => {
    const clicked = event.target;
    let button;
    if (clicked.localName === 'div' || 'span') {
        button = clicked.parentNode;
    }
    if (clicked.localName === 'button') {
        button = clicked;
    }
    const updated = Array.from(projectNodeList).filter(project => {
        return project.dataset.id === button.dataset.id;
    })
    //rendering filtered projects
    let template = '';
    if (button.dataset.id === 'all') {
        template = '';
        projectNodeList.forEach(item => {
            item.style.animation = 'test 500ms forwards ease-in-out';
            template += item.outerHTML;
        })
    }
    renderProject(updated, template)
}

const renderProject = (updated, template) => {
    updated.map(item => {
        item.style.animation = 'test 500ms forwards ease-in-out';
        template += `${item.outerHTML}`
    });
    projects.innerHTML = template;
}

const projectBtn = document.querySelector('.work-categories');
projectBtn.addEventListener('click', handleProjectBtnClicked)