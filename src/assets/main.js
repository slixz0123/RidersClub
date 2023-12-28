const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCB0XsAiWxR_jN_9BNnA9vmQ&part=snippet%2Cid&order=date&maxResults=4';

const content= null || document.getElementById('content')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '07124c8d8dmsh4753c10fd9b6281p1f13e5jsn7ae327da4918',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetcdata(urlapi){
    const response =  await fetch(urlapi, options);
    const data  =  await response.json();
    return data;

}
(async ()=> {
// permitir ejecutar la funcion 
 try{
   const videos = await fetcdata(API);
   //crea un template para iterear 

   let view =`
   ${videos.items.map(video => `
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
   </div>
   `).slice(0,5).join('')}
   
   `;
   //insrcion de vista 
   content.innerHTML= view;
 } catch (error){
    console.log(error);

 }
})();
