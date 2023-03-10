const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options={method:'GET',headers:{
    'X-RapidAPI-Host':'youtube-v31.p.rapidapi.com','X-RapidAPI-Key':'c68edbdba9mshc3cb6eb8038f3b2p1f444ajsna5de19fe1256'
}};

// La logica de async : ir por los datos, esperar por ellos y finalmente retornarlos para transformalos a Objeto JSON
async function fetchData(urlApi){
    const response = await fetch (urlApi, options)
    const data = await response.json();
    return data;
}
// Ejecutamos una Funcion Autoejecutable

(async () =>{
    try{
        const videos = await fetchData(API);
        // cuando analizamos la salida de la API en rapidapi, hay una jerarquía de los datos, están los 9 “items” del 0 al 8 para la posición de cada vídeo, luego el “snippet” de cada item, luego “thumbnails” y éste a su vez los tamaños de la imagen (nos interesa con la más alta resolución “high”), también nos interesa mostrar la descripción “description” y nombre “title” de cada vídeo:
        
        let view = `
        ${videos.items.map(video =>`
        <div class="group relative">
            <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
            </h3>
            </div>
        </div>` ).slice(0,4).join('')}
           
        `;
        content.innerHTML = view;
    } catch (error){
        console.log(error);
    }
})();