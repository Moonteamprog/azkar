
function share(){
   var shareData={
      title:document.title,
      Text:'hello',
      url:document.location.href
   }
   if(navigator.canShare(shareData)){
      navigator.share(shareData)
   }
   else{
      
   }
};






let value_text_title = document.getElementById('text-title').innerHTML , stat_value = false
 let value_new = null
         setInterval( () => {
             if( stat_value ) {
                 document.getElementById('text-title').innerHTML = ' '
                 for( var j = 0 ; j < value_text_title.length ; j++ ) {
                     setTime_fun(j , value_text_title[j] , true)
                 }
             } else {
                 for( var j = 0 ; j < value_text_title.length ; j++ ) {
                     
                     setTime_fun(j , j , false)
                 }
             }
 
             stat_value = !stat_value
 
             
         } , (value_text_title.length * 52) + 2000 )
 
 
         function setTime_fun( time , text , stat ) {
             if( stat ) {
                 setTimeout( () => {
                     document.getElementById('text-title').innerHTML += text
                 } , time * 50 )
             } else {
                 setTimeout( () => {
                     value_new = ' '
                     for( var j = 0 ; j < value_text_title.length ; j++ ) {
                        if( value_text_title.length-text > j+1 ) value_new += value_text_title[j]
                     }
                     document.getElementById('text-title').innerHTML = value_new
                 } , time * 50 )
             };
         };
