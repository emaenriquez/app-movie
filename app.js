


const fetchData = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching data: ' + error);
    }
};

const getAllData = async () => {
    let nextPage = 'https://swapi.dev/api/people/?page=1';
    
    try {
        while (nextPage) {
            const responseData = await fetchData(nextPage);
            const results = responseData.results;

            results.forEach(element => {
                console.log(element.name);
            });

            nextPage = responseData.next; // Actualiza la URL de la siguiente página
        }

    } catch (error) {
        console.log('Error: ' + error.message);
    }
};

getAllData();
