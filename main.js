const gages = document.querySelectorAll('.gage');

gages.forEach(gage => {
    const infoElement = gage.parentNode.previousElementSibling;
    const percentage = parseInt(infoElement.childNodes[2].nextSibling.textContent);
    gage.style.width = `${percentage}%`;
})