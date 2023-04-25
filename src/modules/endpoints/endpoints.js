

class EndPoints {


     fetch(url, data) {
        return new Promise((resolve) => {

            const delay = 1000 + Math.random() * 2000

            setTimeout(() => {
                resolve(data)
            }, delay);

        })
    }
}

export const endPoints = new EndPoints()