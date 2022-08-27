
console.log("welcome to my music app");
let songIndex=0;
let audioElement=new Audio('samjhawan.mp3');

 let   masterPlay=document.getElementById('masterPlay');
let myprogress=document.getElementById('myprogress');
let gif=document.getElementById('gif');
let songs=[
    {songName:"sarang dariya",filePath:"samjhawan.mp3" ,coverPath:"sarang.png"},
    {songName:"sarang dariya",filePath:"srivalli.mp3",coverPath:"dosti.png"},
    {songName:"sarang dariya",filePath:"srivalli.mp3",coverPath:"arabic_kuthu.jpg"},
    // {songName:"sarang dariya",filePath:"srivalli.mp3",coverPath:""};
    // {songName:"sarang dariya",filePath:"srivalli.mp3"};
    // {songName:"sarang dariya",filePath:"srivalli.mp3"};
    // {songName:"sarang dariya",filePath:"srivalli.mp3"};
     
]
//audioELement.play(); 
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove(' fa-play ');
        masterPlay.classList.add('  fa-pause');  
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
masterPlay.classList.remove('fa-solid fa-pause');
masterPlay.classList.add('fa-solid fa-play');
gif.style.opacity=0;

    }
    
})

//Listern to Events

audioElement .addEventListener('timeupdate',()=>{
console.log('timeupdate');
progress =parseInt ((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myprogress.value=progress;
});
myprogress.addEventListener('change',()=>{
    audioElement.currentTime=myprogress.value*audioElement.duration/100;
})
