const getApiData = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const json = await response.json();
            return json;
        } else {
            throw new Error('Virhe haettaessa dataa');
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

export { getApiData };
