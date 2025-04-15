

const success = true;

const simplePromise = new Promise((resolve, reject) => {
    console.log("Promise is initialized");

    setTimeout(() => {
        if(success) {
            resolve("This is a success");
        } else {
            reject("This is a failure");
        }
    }, 1000)
})

simplePromise
    .then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })

    async function getUser() {
        try {
            const result = await simplePromise;
            console.log(result);
        } catch(error) {
            console.log(error);
        }
    }

    getUser();

// console.log("Running!")

// setTimeout(() => {
//   console.log("Hello World");
// }, 3000);