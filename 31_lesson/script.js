const boxElement = document.querySelector(".box")

//текстовое содержимое boxElement
boxElement.textContent

boxElement.textContent = "updated content"
boxElement.textContent += " concataneted content"


//HTML-content of boxElement
boxElement.innerHTML

//изменяем HTML-content 
boxElement.innerHTML = `
    updated text
    <p>New Line</p>
`

//добавление HTML-content 
boxElement.innerHTML += `
    updated text
    <p>New Line</p>
`

//HTML-content of boxElement + boxElement
boxElement.outerHTML

boxElement.outerHTML = `
    <article>123</article>
`

const newParagraphElement = document.createElement("p")
newParagraphElement.textContent = "4. Paragraph"
newParagraphElement.classList.add("paragraph-4")

const boxElement = document.querySelector(".box")

//добавляет в конец
boxElement.append(newParagraphElement)
//добавляет в начало
boxElement.prepend(newParagraphElement)
//добавляет новый элемент перед box 
boxElement.before(newParagraphElement)
//добавляет новый элемент после box
boxElement.after(newParagraphElement)
//аналог 
boxElement.insertAdjacentElement("afterbegin", newParagraphElement)

//полностью заменяет элемент 
boxElement.replaceWith(newParagraphElement)


boxElement.insertAdjacentHTML("afterbegin", newParagraphElement)

newParagraphElement.remove()

//поверхостное клонирование (не клонирует внутренности)
const boxElementClone = boxElement.cloneNode()
//глубокое клонирование
const boxElementClone2 = boxElement.cloneNode(true)
boxElement.after(boxElement)

const firstBoxElement = document.querySelector("box-1")
const secondBoxElement = document.querySelector("box-2")

firstBoxElement.after(secondBoxElement)
//тоже самое
secondBoxElement.insertAdjacentElement("afterend", firstBoxElement)