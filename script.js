let imageSrc=['https://images.unsplash.com/photo-1560847809-8a818fb8045f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm95YWwlMjBlbmZpZWxkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1611429532458-f8bf8f6121fe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm95YWwlMjBlbmZpZWxkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1601574013379-a98bfb813376?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm95YWwlMjBlbmZpZWxkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1614152412509-7a5afc18c75b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJveWFsJTIwZW5maWVsZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1621957670209-200b20d5776e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJveWFsJTIwZW5maWVsZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60']
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






 