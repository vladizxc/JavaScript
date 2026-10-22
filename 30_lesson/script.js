const htmlElement = document.documentElement
const bodyElement = document.body

//ширина окна
htmlElement.clientWidth

//высота окна
htmlElement.clientHeight


//(не учитывает скроллбары)
//высота окна 
window.innerHeight

//ширина окна
window.innerWidth


//ширина страницы
htmlElement.scrollWidth

//высота страницы
htmlElement.scrollHeight

const fullPageHeight = Math.max(
    htmlElement.clientHeight, htmlElement.scrollHeight, htmlElement.offsetHeight,
    bodyElement.clientHeight, bodyElement.scrollHeight, bodyElement.offsetHeight
)

//координаты позиции скролла страницы
window.scrollX
window.scrollY

//программный скролл 
//скроллит на позицию от начала строницы, 
//т.е координаты 0.0
window.scroll({
    top: 200,
    behavior: "smooth"
})

//скроллит на позицию в 
//зависимости от актуальной позиции 
window.scrollBy({
    top: 200,
    behavior: "smooth"
})

//скролл до видимости определенного элемента
const reviewSectionElement = document.querySelector("reviews")

//лучше обарачивать в setTimeout, так как 
//браузер не сразу отрисовывает все элементы
setTimeout(() => {
    //скролл до верхней границы
    reviewSectionElement.scrollIntoView({
    behavior: "smooth",
    block: "end", //если задан параметр block, то до этого значения
    })
}, 300)

