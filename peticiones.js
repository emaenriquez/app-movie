const data = async () => {
    try {
        // const res = await fetch('https://swapi.dev/api/') // https://swapi.dev/api/people/
        const res = await fetch('https://swapi.dev/api/people/')
        const data = await res.json()
        console.log(data)
        re(data)
    } catch (error) {
        console.log('el error es: ' + error)
    }
}

data()

const re = (item) => { 
    item.forEach(item => {
        console.log(item.results.name)
    });

}