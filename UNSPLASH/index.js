const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid')[0];
window.onload = dayNightMods()
input.addEventListener('keydown',function(event){
    if(event.key == 'Enter'){
        loadImg();
    }
})
function loadImg(){
    removeImages();
    const url = 'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=30&client_id=s33tjBLxe-_MEfhH3sTbPLoDJdlIyJf28bLVbCCTh0Y';
    
    fetch(url)

    .then(response =>{
        if(response.ok){
            return response.json();
        }else{
            alert(response.status)
        }
    })
    
    .then(data =>{
        const imageNodes = [];
        for(let i=0; i<data.results.length; i++){
            imageNodes[i]= document.createElement('div');
            imageNodes[i].className = 'img'
            imageNodes[i].style.backgroundImage = 'url(' + data.results[i].urls.raw+')';
            imageNodes[i].addEventListener("dblclick",function(){
                window.open(data.results[i].links.download,'_blank');
            })
            grid.appendChild(imageNodes[i]);
        }
    })

}
function removeImages(){
    grid.innerHTML = ''
}
function dayNightMods(){
    const date = new Date();
    const hour = date.getHours();
    if(hour >= 7 && hour <= 19){
        document.body.style.backgroundColor = "whitesmoke";
        document.body.style.color = 'black';
    }else{
        document.body.style.backgroundColor = "rgb(16, 50, 88)";
        document.body.style.color = 'white';
    }
}

