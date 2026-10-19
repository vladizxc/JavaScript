/*
const wait = (ms, callback) => {
    setTimeout(callback, ms)
}

console.log(1)
wait(5000, () => console.log(2))
console.log(3)

//синхронный код, выполняется сразу
console.log("Code beginning")

//асинхронная операция с использования setTimeout
setTimeout(() => {
    console.log("Async code")
}, 2000) // задержка в 2 секунды 

//синхронный код, выполняется сразу
console.log("Code ending")

/*
// ПРИМЕР
const makeRequest = (url, onSuccess) => {}

const sellerId = 154

makeRequest(`/api/sellers/${sellerId}`, (seller) => {
    const firstProductId = seller.productIds[0]

    makeRequest(`/api/products/${firstProductId}`, (product) => {
        const firstReviewId = product.reviewsIds[0]

        makeRequest(`/api/reviews/${firstReviewId}`, (review) => {
            const authorName = review.author.name
        })
    })
})

*/
/*
const promise = new Promise((fulfill, reject) => {
    console.log("Beginning, pending state...")

    setTimeout(() => {
        if(Math.random() > 0.5) {
            fulfill("state fulfilled")
        } else {
            reject("state rejected")
        }
    }, 3000)
})

promise
    .then((successData) => {
        console.log("Success! Got data: ", successData)
    })
    .catch((errorData) => {
        console.log("Error. Got data: ", errorData)
    })
    .finally(() => {
        console.log("Code always executed")
    })

const makeRequest = (url, onSuccess) => {
    return new Promise((fulfill) => {
        fulfill("Success, state fulfilled")
    }) 
}

const sellerId = 154

makeRequest(`/api/sellers/${sellerId}`)
    .then((seller) => {
        const firstProductId = seller.productIds[0]
        return makeRequest(`/api/products/${firstProductId}`)
    })
    .then((product) => {
        const firstReviewId = product.reviewsIds[0]
        return makeRequest(`/api/reviews/${firstReviewId}`)
    }).then((review) => {
        const authorName = review.author.name
    })
    .catch((error) => {
        console.log(error)
    })
*/
//async function getSomething() {}
//или стрелочная функция
//const getSomething = async () => {}
/*
async function doSomething() {
    return new Promise((fulfill) => {
        setTimeout(() => {
            fulfill("Hello!")
        }, 3000)
    })
}

console.log("Begin...")

const something = await doSomething()

console.log(something)

console.log("Ending...")
*/

const makeRequest = async (url, onSuccess) => {
    return new Promise((fulfill) => {
        fulfill("Success, state fulfilled")
    })
}

try {
    const seller = await makeRequest(`/api/sellers/${sellerId}`)
    const firstProductId = seller.productId[0]

    const product = await makeRequest(`/api/products/${firstProductId}`)
    const firstReviewedId = product.reviewsIds[0]

    const review = await makeRequest(`/api/reviews/${firstReviewedId}`)
    const authorName = review.author.name 
} catch (error) {
    console.log(error)
}


