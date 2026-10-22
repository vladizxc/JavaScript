const boxElement = document.querySelector(".box")

//полная ширина (в пикселях)
boxElement.offsetWidth

//полная высота (в пикселях)
boxElement.offsetHight

//ширина левой рамки 
//(ширина = растояние от левой границы documnet 
//до левой границы box + scrollbar)
boxElement.clientLeft

//ширина верхней рамки
boxElement.clientTop

//ширина без учета рамки и скроллбара
boxElement.clientWidth

//высота без учета рамки и скроллбара
boxElement.clientHeight

//ширина без учета рамки, включая прокручиваемаю область
boxElement.scrollWidth

//Высота без учета рамки, включая прокручиваемаю область
boxElement.scrollHeight

/**
 * Прокрутка содержимого элемента
 * на 10px вправо и 50px вниз
 * относительно начального положения
 */
boxElement.scroll(10, 50)
boxElement.scrollLeft = 10 // тоже самое

//Ширина невидимой уже прокрученной по горизонтали 
//области
boxElement.scrollLeft

//Высота невидимой уже прокрученной по горизонтали 
//области
boxElement.scrollTop


//Вычесленная из свойств height высота элемента
//лучше не применять
getComputedStyle(boxElement).height


const boxElementRectParams = boxElement.getBoundingClientRect()
//Координаты левого верхнего угла элемента 
//относительно окна браузера (актуальные)
boxElementRectParams.x
boxElementRectParams.y


//Координаты позиции скрола страницы
window.scrollX
window.scrollY

//Координаты левого верхнего угла элемента 
//относительно страницы
boxElementRectParams.x + window.scrollX
boxElementRectParams.y + window.scrollY