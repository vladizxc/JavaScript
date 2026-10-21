const boxElement = document.querySelector(".box")

boxElement.style.position = "absolute"

boxElement.style.cssText = `
    position: absolute;
    top: 40px;
    left: 80px;
    width: 80px;
    borderWidth: 10ox;
`

boxElement.style.cssText += `
    position: absolute;
    top: 40px;
    left: 80px;
    width: 80px;
    borderWidth: 10ox;
`

//вычисленные значения стилей boxElement:
getComputedStyle(boxElement)

//значение text-decoration 
//псевдоэлементов ::after у boxElement:
getComputedStyle(boxElement, "::after".textDecoration)


//возвращает лист классов
boxElement.classList

//добавление класса
boxElement.classList.add('red', 'big')

//удаление класса
boxElement.classList.remove('red')

//добавляет класс, если его не было 
//и удаляет класс, если он был
//удобно для изменения состояния элемента (e.g visible)
boxElement.classList.toggle('red')

//проверка на наличие класса
boxElement.classList.contains('box')


boxElement.style.setProperty('--border-color', 'blue', 'important') 