let imageSrc=['https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Froyal-enfield&psig=AOvVaw1AWisyj_Q-5AkbRnCvgc6a&ust=1628847197861000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDR0_mWq_ICFQAAAAAdAAAAABAJ',
'https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2F783978247614732277%2F&psig=AOvVaw1AWisyj_Q-5AkbRnCvgc6a&ust=1628847197861000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDR0_mWq_ICFQAAAAAdAAAAABAP',
'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpapertip.com%2Fwpic%2FTTTJih_royal-enfield-photos-download%2F&psig=AOvVaw1AWisyj_Q-5AkbRnCvgc6a&ust=1628847197861000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDR0_mWq_ICFQAAAAAdAAAAABAa',
'https://www.google.com/url?sa=i&url=http%3A%2F%2Fm.gettywallpapers.com%2Froyal-enfield-bullet-wallpapers%2F&psig=AOvVaw1AWisyj_Q-5AkbRnCvgc6a&ust=1628847197861000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDR0_mWq_ICFQAAAAAdAAAAABAf',
'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpinposters.com%2Fautomobiles-wallpaper%2Froyal-enfield-hd-wallpaper%2F&psig=AOvVaw1AWisyj_Q-5AkbRnCvgc6a&ust=1628847197861000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDR0_mWq_ICFQAAAAAdAAAAABAx']
let i=0;
let imageTurn
turn=()=>
   { 
    console.log(i)
    if(i < imageSrc.length)
    {  
    
    document.getElementById('image').src=imageSrc[i];
    i++;
    }
    else{
        i=0;
    }
   }
 imageTurn=setInterval(turn,2000*2);
 function pauseTurn() {
   clearInterval(imageTurn);
 }
 function resumeTurn()
 {
    imageTurn=setInterval(turn,2000*2);
 }
 function previousTurn(){
    
     clearInterval(imageTurn);
     if(i > 0)
     {   
        i=i-1;
         document.getElementById('image').src=imageSrc[i] 
     }
     else{
       i=4
         document.getElementById('image').src=imageSrc[i]
     }

      imageTurn=setInterval(turn,2000);
 }
 function nextTurn(){
    console.log(i)
     clearInterval(imageTurn);
     if(i >= 4  )
     {   
         i=0;
         document.getElementById('image').src=imageSrc[i] 
     }
     else{
         i=i+1;
         document.getElementById('image').src=imageSrc[i]
     }
     console.log(i)
      imageTurn=setInterval(turn,2000);
 }

 function slide()
 {
     x=document.getElementById('image');
     x.className="fade"
 }






 