console.dir(document)
console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

console.log(
    `Element <body>:`,
    document.body
)

console.log(
    `Parent Element above <body>:`,
    document.body.parentElement
)

console.log(
    `Previous Element before <body>:`,
    document.body.previousElementSibling
)

console.log(
    `Next Element after <body>:`,
    document.body.nextElementSibling
)

console.log(
    `Children Elements <body>:`,
    document.body.children
)

const divElement = document.body.children[0]

console.log(
    `Element <div>:`,
    divElement
)

console.log(
    `First Element Child in <div>:`,
    divElement.firstElementChild
)

console.log(
    `Last Element Child in <div>:`,
    divElement.lastElementChild
)

console.log(`
    previous element before <div>:`,
    divElement.previousElementSibling
)

console.log(`
    previous node before <div>:`,
    divElement.previousSibling
)

console.log(`
    next element after <div>:`,
    divElement.nextElementSibling
)

console.log(`
    next node after <div>:`,
    divElement.nextSibling
)

console.log(`
    first child node in <div>:`,
    divElement.firstChild
)

console.log(`
    last child node in <div>:`,
    divElement.lastChild
)

console.log(
    `children nodes in <div>:`,
    divElement.childNodes
)