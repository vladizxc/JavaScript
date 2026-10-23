const sectionElements = document.querySelectorAll('section')

const animateSections = () => {
    sectionElements.forEach((sectionElement)=> {
        sectionElements.classList.add("is-visible")
    }) 
}

document.addEventListener('preloadClose', () => {
    animateSections()
})