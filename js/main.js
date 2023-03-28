

let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');


menu.onclick= () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
};






//clock

function startTime() {  
   var today = new Date();  
   
   var h = today.getHours();  
   var m = today.getMinutes();  
   var s = today.getSeconds();  
    
    
   let today2 = today.toLocaleString('ar-EG') , 
       h2 = h.toLocaleString('ar-EG') , 
       m2 = m.toLocaleString('ar-EG') , 
       s2 = s.toLocaleString('ar-EG') ; 
   
   m = checkTime(m);  
   s = checkTime(s);  
    
   document.getElementById('txt').innerHTML = h2 + ':' + m2 + ':' + s2 + '<br>'   + today2  + '<br>'  ;  
   var t = setTimeout(startTime, 500);  
  }  
  function checkTime(i) {  
   if (i < 10) {i = '0' + i};  // add zero in front of numbers < 10  
   return i;  
  } 
   
  document.write(  
    startTime() 
   );



//////////share      /////////

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
       
    };
 };





/* function round zkr*/ 

 let array_words = [ 
   '                لا اله الا الله   ',
   'اللَّهُــمَّ صَلِّ وَسَـــلِّمْ وَبَارِكْ على نَبِيِّنَـــا مُحمَّدﷺ ',
   '  أذكر الله ',
   '  حسبي الله ونعم الوكيل  ' ,
   '  استغفر الله العظيم واتوب اليه ' ,
   ' لا حول ولا قوة الا بالله' ,
   ' سبحان الله  ',
   'الحمد الله ',
   ' الله أكبر',
   ' سبحان الله و بححمده ,سبحان الله العظيم ',
   ' لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ. ',
   ' اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ  ',
   ' سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ',
   ' يا حي يا قيُّوم، برحمتك أستغيث، أصلِح لي شأني كله، ولا تَكلني إلى نفسي طرْفة عينٍ. ',
   ' سبحانك اللهم وبحمدك، وتبارك اسمك وتعالى جدّك، ولا إله غيرك ',
   ' اللهم اكفني بحلالك عن حرامك، وأغنني بفضلك عمّن سواك ',
   ' اللهم باسمك أحيا وأموت ',
   ' قراءة آية الكرسي ',
   ' رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا ',
   ' رَبِّ اجْعَلْنِي مُقِيمَ الصَّلاَةِ وَمِن ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ ',
   '  ',
   '   ',
   
 ] ;

 document.getElementById('text-random').innerHTML = array_words[ Math.floor( Math.random() * array_words.length ) ] ;





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







      // for(var y= 0; y <= 20;  y++ )document.innerHTML = "<img src = '/image/quran-00"+y+" .jpg'>





      
