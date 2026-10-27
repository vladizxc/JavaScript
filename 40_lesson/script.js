const laodPostFormElement = document.querySelector(".load-post-form")
const resultElement = document.querySelector(".result")
const postIdInputElement = document.querySelector("#post-id")


laodPostFormElement.addEventListener("submit", (event) => {
    event.preventDefault()

    fetch(`http://localhost:3000/posts/${postIdInputElement.value}`)
    .then(response => {
        console.log("response: ", response)
        
        //обработка, когда задача не найдена
        if (!response.ok) {
            const errorMessage = response.status === 404
            ? "Пост по указанному идентификатору не найдена"
            : "Что-то пошло не так"
            throw new Error(errorMessage)
        }

        return response.json()
    })
    .then((json) => {
        console.log(json)
        
        const { title, views } = json

        resultElement.innerHTML = `
            <p>${title}, просмотров: ${views}</p>
        `
    }).catch((error) => {
        //если возникает ошибка и мы ее ловим, 
        //выводим ее 
        resultElement.innerHTML = error.message
    })
})

const createPostFormElement = document.querySelector(".create-post-form")

createPostFormElement.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(createPostFormElement)
    const formDataObject = Object.fromEntries(formData)

    fetch(`http://localhost:3000/posts`, {
        method: "POST",
        body: JSON.stringify({
            ...formDataObject,
            views: 0,
        //узнавать у backend
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'X-Auth-Token': 'blablabla',
        //отправляет coockie на сервер
        credentials: 'include',
        }
        })
    }).then((response) => {
        console.log("response: ", response)
        return response.json()
    })
    .then((json) => {
        console.log("json: ", json)
    })
})

const searchPostsFormElement = document.querySelector(".search-posts-form")
const postViewsInputElement = document.querySelector("#post-views")

searchPostsFormElement.addEventListener("submit", (event) => {
    event.preventDefault()

    fetch(`http://localhost:3000/posts?views_gte=${postViewsInputElement.value}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)

            resultElement.innerHTML = json
                .map(({ title, views }) => `<p>${title}, просмотров: ${views}</p>`)
                .join('')
        })
})