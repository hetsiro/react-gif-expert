export const getGifs = async ( category ) => {
    const apiKey = '9x3EKHsI8KYf15AfY4ScmSaaUGEcNaKz';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${category}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

        const response = await fetch(url);
        const { data } = await response.json();


    const gifs = data.map( gif =>{
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url
        }
    })

    return gifs;
}
