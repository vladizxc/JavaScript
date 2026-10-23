const preloaderElement = document.querySelector(".preloader")

//событие всплывает по dom-дереву вверх
const preloaderCloseEvent = new CustomEvent('preloaderClose', 
    {bubbles: true,
     detail: {
        closeAnimationName: event.animationName,
        closeAnimationDuration: event.elapsedTime,
     }
})

preloaderElement.addEventListener('animationend', (event) => {
    if(event.animationName === 'fade-out') {
        preloaderElement.dispatchEvent(preloaderCloseEvent)
    }
})