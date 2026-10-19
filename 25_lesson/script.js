console.dir(document)
console.dir(document.documentElement)
console.dir(document.head)
console.dir(document.body)

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