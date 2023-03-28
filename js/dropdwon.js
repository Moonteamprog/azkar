
/* share*/
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
 


/* text function */

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




/* masa  */ 
let zkr_masa=[
    
        [
            `
                 بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم  <br>
                 اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ         
            `, 
            1
        ],
        [
            `
                 بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم  <br>
                 آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ وَقَالُوا سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ ۝ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ 

        `,
         1
        ],
        [
            `
                 بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم  <br>
                 قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ        
            `, 3

        ],
        [
            `
                 بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم  <br>
                 قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ          
            `, 3
        ], 
        [
            `
                 بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم  <br>
                 قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ          
            `, 3
        ],
        [
            `
            أَمْسَيْـنا وَأَمْسـى المـلكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذهِ اللَّـيْلَةِ وَخَـيرَ ما بَعْـدَهـا ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذهِ اللَّـيْلةِ وَشَرِّ ما بَعْـدَهـا ، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْ            
            `, 1
        ],
        [
            `اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ      
            `, 1
        ],
        [
            `
            اللّهُـمَّ إِنِّـي أَمسيتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك    
            `, 3
        ],
        [
            `
            اللّهُـمَّ ما أَمسى بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر   

            `, 1
        ],
        [
            `
                 حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم       
                 `, 7
        ],
        [
            `
            أَمْسَيْنَا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ  
      
            `, 1
        ],
        [
            `
            سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه              

            `, 3
        ],
        [
            `
            اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ

            `, 3
        ],
        [
            `
            اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ     
            `, 3
        ],
        [
            `
         اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي     
                 `, 1
        ],
        [
            `
                 أَمْسَيْنا وَأَمْسَى الْمُلْكُ للهِ رَبِّ الْعَالَمَيْنِ، اللَّهُمَّ إِنَّي أسْأَلُكَ خَيْرَ هَذَه اللَّيْلَةِ فَتْحَهَا ونَصْرَهَا، ونُوْرَهَا وبَرَكَتهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فيهِا وَشَرَّ مَا بَعْدَهَا  
                 `, 1
        ],
        [
            `
          اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم 
                 `, 1
        ],
        [
            `
            أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق                         
            `, 1
        ],
        [
            `
            اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد 
            `, 1
        ],
        [
            `
            اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ   
            `, 1
        ],
        [
            `
            اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ       
            `, 1
        ],
        [
            `
            أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ             
            `, 1
        ],
        [
            `
            يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ  
            `, 1
        ],
        [
            `
            اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ , مَا شَاءَ اللَّهُ كَانَ ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ , أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا , اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي ، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا ، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ      
            `, 1
        ],
        [
            `
            لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ  
            `, 10
        ],
        [
            `
            سُبْحـانَ اللهِ وَبِحَمْـدِهِ  
            `, 99
        ],
      
        
];
/* sabah*/
let arra_zkr = [
            [
                `
                     بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم  <br>
                     اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ        
                `, 1
    
            ],
            [
                `
                     بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم  <br>
                     آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ وَقَالُوا سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ ۝ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ 
    
            `, 1
            ],
            [
                `
                     بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم  <br>
                     قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ        
                `, 3
    
            ],
            [
                `
                     بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم  <br>
                     قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ          
                `, 3
    
            ], 
           [
                `
                     بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم  <br>
                     قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ  
    
                `, 3
    
            ],
            [
                `
                     بسمِ اللهِ الذي لا يَضرُ مع اسمِه شيءٌ في الأرضِ ولا في السماءِ وهو السميعُ العليمِ  
    
                `, 1
    
            ],
            [
                `
                     أصـبحنا وأصـبح المـلك لله والحمد لله ، لا إله إلا الله وحده لا شريك له، له المـلك وله الحمـد، وهو على كل شيء قدير ، رب أسـألـك خـير ما في هـذا اليوم وخـير ما بعـده ، وأعـوذ بك من شـر ما في هـذا اليوم وشر ما بعـده، رب أعـوذبك من الكسـل وسـوء الكـبر ، رب أعـوذ بك من عـذاب في النـار وعـذاب في القـبر.                    
                `, 1
    
            ],
            [
                `اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ
    
                     
    
                `, 1
    
            ],
            [
                `
                اللّهُـمَّ إِنِّـي أصبـحت أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك
                `, 3
    
            ],
            [
                `
                اللّهُـمَّ ما أصبـح بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر                        
    
                `, 1
    
            ],
            [
                `
                                        حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم
    
                `, 7
    
            ],
            [
                `
                اللّهُـمَّ ما أصبـح بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر                        
    
                `, 3
    
            ],
            [
                `
                اللّهُـمَّ بِكَ أَمْسَـينا وَبِكَ أَصْـبَحْنا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ الْمَصِيرُ
    
                `, 3
    
            ],
            [
                `
                أَصْـبَحْنا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ 
    
                `, 1
    
            ],
            [
                `
                اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ 
    
                `, 3
    
            ],
            [
                `
                اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ 
    
                `, 3
    
            ],
            [
                `
                اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي 
    
                `, 1
    
            ],
            [
                `
                اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم 
    
                `, 1
    
            ],
            [
                `
                اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ
    
                `, 1
    
            ],
            [
                `
                اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد 
    
                `, 10
    
            ],
            [
                `
                اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ                                                                              
    
                `, 1
    
            ],
            [
                `
                أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ 
    
                `, 5
    
            ],
            [
                `
                يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ 
    
                `, 1
    
            ],
            [
                `
                اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ , مَا شَاءَ اللَّهُ كَانَ ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ , أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا , اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي ، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا ، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ
    
                `, 1
    
            ],
            [
                `
                لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ 
    
                `, 10
    
            ],
            [
                `
                سُبْحـانَ اللهِ وَبِحَمْـدِهِ
    
                `, 99
    
            ],
           
      
            
 ];
/* nabuş*/ 
let arra_nabui=[
    [
        `
        اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي، وأبوء بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت.    

        `, 1

    ],
    [
        `
          اللهم إني ظلمت نفسي ظلما كثيرا، ولا يغفر الذنوب إلا أنت، فاغفر لي مغفرة من عندك وارحمني إنك أنت الغفور الرحيم.  

    `, 1
    ],
    [
        `
        رب اغفر لي خطيئتي وجهلي وإسرافي في أمري كله وما أنت أعلم به مني، اللهم اغفر لي خطاياي وعمدي وجهلي وهزلي، وكل ذلك عندي، اللهم اغفر لي ما قدمت وما أخرت وما أسررت وما أعلنت أنت المقدم وأنت المؤخر وأنت على كل شيء قدير.      

        `, 1

    ],  
    [
        `
        اللهم اغفر لي ذنبي كله، دقه، وجله، وأوله، وآخره، وعلانيته، وسره.
        `, 1

    ],
    [
        `
        اللهم إني أعوذ بك من الهم والحزن والعجز والكسل والجبن والبخل وضلع الدين وغلبة الرجال.
        <br>
رواه البخاري (6369) عن أنس  
        `, 1

    ],
    [
        `
        اللهم إني أعوذ بك من البخل، وأعوذ بك من الجبن، وأعوذ بك أن أرد إلى أرذل العمر، وأعوذ بك من فتنة الدنيا، وأعوذ بك من عذاب القبر.  <br>
        رواه البخاري (6365) عن سعد بن أبي وقاص.
        `, 1
    ],
    [
        `
        اللهم إني أعوذ بك من الكسل والهرم والمأثم والمغرم، ومن فتنة القبر وعذاب القبر، ومن فتنة النار وعذاب النار، ومن شر فتنة الغنى، وأعوذ بك من فتنة الفقر، وأعوذ بك من فتنة المسيح الدجال، اللهم اغسل عني خطاياي بماء الثلج والبرد، ونق قلبي من الخطايا كما نقيت الثوب الأبيض من الدنس، وباعد بيني وبين خطاياي كما باعدت بين المشرق والمغرب. <br>
        رواه البخاري (6368) ومسلم (6871) عن عائشة.
        `, 1

    ],
    [
        `
        اللهم رب السموات ورب الأرض ورب العرش العظيم، ربنا ورب كل شيء، فالق الحب والنوى ومنزل التوراة والإنجيل والفرقان، أعوذ بك من شر كل شيء أنت آخذ بناصيته، اللهم أنت الأول فليس قبلك شيء، وأنت الآخر فليس بعدك شيء، وأنت الظاهر فليس فوقك شيء، وأنت الباطن فليس دونك شيء، اقض عنا الدين وأغننا من الفقر. <br>
        رواه مسلم (6889) عن أبي هريرة.
        `, 1

    ],
    [
        `                                             اللهم إني أعوذ بك من شر ما عملت ومن شر ما لم أعمل. <br>
        رواه مسلم (6895) عن عائشة
        `, 1

    ],
    [
        `                        اللهم أصلح لي ديني الذي هو عصمة أمري، وأصلح لي دنياي التي فيها معاشي، وأصلح لي آخرتي التي فيها معادي واجعل الحياة زيادة لي في كل خير، واجعل الموت راحة لي من كل شر. <br>
        رواه مسلم (6903) عن أبي هريرة.
        `, 1

    ],
    [
        `                          اللهم إني أسألك الهدى والتقى والعفاف والغنى. <br>
        رواه مسلم (6904) عن ابن مسعود.
        `, 1

    ],
    [
        `  اللهم إني أعوذ بك من العجز والكسل، والجبن والبخل، والهرم وعذاب القبر، اللهم آت نفسي تقواها وزكها أنت خير من زكاها، أنت وليها ومولاها، اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها. <br>
        رواه مسلم (6906) عن زيد بن أرقم.
        `, 1

    ],
    [
        `                                                            اللهم لك أسلمت وبك آمنت، وعليك توكلت وإليك أنبت وبك خاصمت، اللهم إني أعوذ بعزتك لا إله إلا أنت أن تضلني، أنت الحي الذي لا يموت والجن والإنس يموتون. <br>
        رواه البخاري (7383) ومسلم (6899) عن ابن عباس.
        `, 1

    ],
    [
        `                                          للهم إني أعوذ بك من زوال نعمتك وتحول عافيتك وفجاءة نقمتك وجميع سخطك. 
        رواه مسلم (6943) عن ابن عمر.
        `, 1

    ],
    [
        `                                  اللهم مصرف القلوب صرف قلوبنا على طاعتك. 
        رواه مسلم (6750) عن عبد الله بن عمرو.
        `, 1

    ],
    [
        `                             اللهم رب جبرائيل وميكائيل وإسرافيل، فاطر السموات والأرض، عالم الغيب والشهادة، أنت تحكم بين عبادك فيما كانوا فيه يختلفون، اهدني لما اختلف فيه من الحق بإذنك، إنك تهدي من تشاء إلى صراط مستقيم. 
        رواه مسلم (1811) عن عائشة.
        `, 1

    ],
    [
        `                                                     اللهم إني أعوذ برضاك من سخطك، وبمعافاتك من عقوبتك، وأعوذ بك منك، لا أحصي ثناء عليك، أنت كما أثنيت على نفسك. 
        رواه مسلم (1090) عن عائشة.
        `, 1

    ],
    [
        `                                      اللهم إني أعوذ بك من جهد البلاء ودرك الشقاء وسوء القضاء وشماتة الأعداء. 
        رواه البخاري (6347) ومسلم (6877) عن أبي هريرة.
        `, 1

    ],
    [
        `                                         اللهم اجعل لي في قلبي نورا، وفي لساني نورا، وفي سمعي نورا، وفي بصري نورا، ومن فوقي نورا، ومن تحتي نورا، وعن يميني نورا، وعن شمالي نورا، ومن بين يدي نورا، ومن خلفي نورا، واجعل في نفسي نورا، وأعظم لي نورا. 
        رواه البخاري (6316) ومسلم (1797) عن ابن عباس.
        `, 1

    ],
    [
        `                                                اللهم إني أسألك من الخير كله عاجله وآجله ما علمت منه وما لم أعلم، وأعوذ بك من الشر كله عاجله وآجله ما علمت منه وما لم أعلم، اللهم إني أسألك من خير ما سألك عبدك ونبيك، وأعوذ بك من شر ما عاذ به عبدك ونبيك، اللهم إني أسألك الجنة وما قرب إليها من قول أو عمل، وأعوذ بك من النار وما قرب إليها من قول أو عمل وأسألك أن تجعل كل قضاء قضيته لي خيرا. 
        رواه ابن ماجه (3846) بإسناد صحيح عن عائشة.
        `, 1

    ],
    [
        `                                               اللهم بعلمك الغيب وقدرتك على الخلق أحيني ما علمت الحياة خيرا لي، وتوفني إذا علمت الوفاة خيرا لي، اللهم وأسألك خشيتك في الغيب والشهادة، وأسألك كلمة الحق في الرضا والغضب، وأسألك القصد في الفقر والغنى، وأسألك نعيما لا ينفد، وأسألك قرة عين لا تنقطع، وأسألك الرضاء بعد القضاء، وأسألك برد العيش بعد الموت، وأسألك لذة النظر إلى وجهك والشوق إلى لقائك في غير ضراء مضرة ولا فتنة مضلة، اللهم زينا بزينة الإيمان، واجعلنا هداة مهتدين. 
        رواه النسائي (1305) بإسناد حسن عن عمار بن ياسر.
        `, 1

    ],
    [
        `                                                 اللهم إني أسألك العفو والعافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي، اللهم استر عوراتي وآمن روعاتي، واحفظني من بين يدي ومن خلفي وعن يميني وعن شمالي ومن فوقي، وأعوذ بعظمتك أن أغتال من تحتي. 
        رواه أبو داود (5074) وغيره بإسناد صحيح عن ابن عمر.
        `, 1

    ],
    [
        `       اللهم إني أسألك الثبات في الأمر، والعزيمة على الرشد، وأسألك موجبات رحمتك، وعزائم مغفرتك، وأسألك شكر نعمتك، وحسن عبادتك، وأسألك قلبا سليما، ولسانا صادقا، وأسألك من خير ما تعلم، وأعوذ بك من شر ما تعلم، وأستغفرك لما تعلم، إنك أنت علام الغيوب. <br>
        رواه الطبراني في "الكبير" (7135) عن شداد بن أوس. 
        `, 1

    ],
    [
        ` اللهم اكفني بحلالك عن حرامك وأغنني بفضلك عمن سواك. 
        رواه الترمذي (3563) بإسناد حسن عن علي.
        `, 1

    ],
    [
        `اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت، اللهم إني أعوذ بك من الكفر والفقر، اللهم إني أعوذ بك من عذاب القبر، لا إله إلا أنت. 
        رواه أبو داود (5090) بإسناد حسن عن أبي بكرة.
        `, 1

    ],
    [
        ` رب أعني ولا تعن علي، وانصرني ولا تنصر علي، وامكر لي ول اتمكر علي، واهدني ويسر الهدى لي، وانصرني على من بغى علي، رب اجعلني لك شكارا، لك ذكارا، لك رهابا، لك مطواعا، لك مخبتا إليك أواها منيبا، رب تقبل توبتي واغسل حوبتي وأجب دعوتي وثبت حجتي وسدد لساني واهد قلبي واسلل سخيمة صدري. 
        رواه الترمذي (3551) وغيره بإسناد صحيح عن ابن عباس.
        `, 1

    ],
    [
        ` اللهم لك الحمد كله، اللهم لا قابض لما بسطت، ولا باسط لما قبضت، ولا هادي لما أضللت، ولا مضل لمن هديت، ولا معطي لما منعت، ولا مانع لما أعطيت، ولا مقرب لما باعدت، ولا مباعد لما قربت، اللهم ابسط علينا من بركاتك ورحمتك وفضلك ورزقك، اللهم إني أسألك النعيم المقيم الذي لا يحول ولا يزول، اللهم إني أسألك النعيم يوم العيلة، والأمن يوم الخوف، اللهم إني عائذ بك من شر ما أعطيتنا وشر ما منعت، اللهم حبب إلينا الإيمان وزينه في قلوبنا، وكره إلينا الكفر والفسوق والعصيان، واجعلنا من الراشدين، اللهم توفنا مسلمين، وأحينا مسلمين، وألحقنا بالصالحين غير خزايا ولا مفتونين، اللهم قاتل الكفرة الذين يكذبون رسلك، ويصدون عن سبيلك، واجعل عليهم رجزك وعذابك، اللهم قاتل الكفرة الذين أوتوا الكتاب إله الحق. 
        رواه الإمام أحمد (15492) عن رفاعة الزرقي بإسناد صحيح.
        `, 1

    ],
    [
        `  اللهم صل على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم، إنك حميد مجيد، اللٰهم بارك على محمد وعلى آل محمد كما باركت على إبراهيم وعلى آل إبراهيم إنك حميد مجيد. 
        رواه البخاري (3370) ومسلم (908) عن كعب بن عجرة.
        `, 1

    ],
    
]

/* alsaah*/ 
let zkr_alsalah=[
    [
        `أَسْـتَغْفِرُ الله، أَسْـتَغْفِرُ الله، أَسْـتَغْفِرُ الله.
        اللّهُـمَّ أَنْـتَ السَّلامُ ، وَمِـنْكَ السَّلام ، تَبارَكْتَ يا ذا الجَـلالِ وَالإِكْـرام 
        `, 1

    ],
    [
        `
        لا إلهَ إلاّ اللّهُ وحدَهُ لا شريكَ لهُ، لهُ المُـلْكُ ولهُ الحَمْد، وهوَ على كلّ شَيءٍ قَدير، اللّهُـمَّ لا مانِعَ لِما أَعْطَـيْت، وَلا مُعْطِـيَ لِما مَنَـعْت، وَلا يَنْفَـعُ ذا الجَـدِّ مِنْـكَ الجَـد 
        `, 1

    ],
    [
        `
        لا إلهَ إلاّ اللّه, وحدَهُ لا شريكَ لهُ، لهُ الملكُ ولهُ الحَمد، وهوَ على كلّ شيءٍ قدير، لا حَـوْلَ وَلا قـوَّةَ إِلاّ بِاللهِ، لا إلهَ إلاّ اللّـه، وَلا نَعْـبُـدُ إِلاّ إيّـاه, لَهُ النِّعْـمَةُ وَلَهُ الفَضْل وَلَهُ الثَّـناءُ الحَـسَن، لا إلهَ إلاّ اللّهُ مخْلِصـينَ لَـهُ الدِّينَ وَلَوْ كَـرِهَ الكـافِرون

        `, 1

    ],
    [
        `
        بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
        قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ<hr>
        بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
        قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ<hr>
        بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
        قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ<hr>
        ثلاث مرات بعد صلاتي الفجر والمغرب. ومرة بعد الصلوات الأخرى
        `, 1

    ],
    [
        `
        لا إلهَ إلاّ اللّهُ وحْـدَهُ لا شريكَ لهُ، لهُ المُلكُ ولهُ الحَمْد، يُحيـي وَيُمـيتُ وهُوَ على كُلّ شيءٍ قدير 

        `, 10

    ],
    [
        `
        اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ

        `, 1

    ],
    [
        `
        اللَّهُمَّ إِنِّـي أَسْأَلُـكَ عِلْمـاً نافِعـاً وَرِزْقـاً طَيِّـباً ، وَعَمَـلاً مُتَقَـبَّلاً 

        `, 5

    ],
    [
        `
        اللَّهُمَّ أَجِرْنِي مِنْ النَّار

        `, 3

    ],
    [
        `
        اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ

        `, 1

    ],
    [
        `

        سبحان الله

        `, 33

    ],
    [
        `
        الحمد لله 

        `, 33

    ],
    [
        `
        الله اكبر

        `, 33

    ],
    
  
 ]

if( document.getElementById('sec1') ) {
    for( var m = 0 ; m < zkr_masa.length ; m++ ) {
        sec1.innerHTML += `<div class="div_loop"  >  
                    <span>${zkr_masa[m][0]}</span> <div class="icon">  
                    <button onclick="copeNew(\``+zkr_masa[m][0]+`\`)" class="bi" ><i class="far fa-copy"></i>نسخ</button>  
                    <button onclick="omar1(${m})" class="loop-btn" id="loop${m}" >التكرار (${zkr_masa[m][1]})</button>  
                </div>`
    };
}
else if( document.getElementById('sec2') ) {
    for( var m = 0 ; m < arra_zkr.length ; m++ ) {
        sec2.innerHTML += `<div class="div_loop"  >  
                    <span>${arra_zkr[m][0]}</span> <div class="icon">  
                    <button onclick="copeNew(\``+arra_zkr[m][0]+`\`)" class="bi" ><i class="far fa-copy"></i>نسخ</button>  
                    <button onclick="omar2(${m})" class="loop-btn" id="loop${m}" >التكرار (${arra_zkr[m][1]})</button>  
                </div>`
    };
}
else if( document.getElementById('sec3') ) {
    for( var m = 0 ; m < arra_nabui.length ; m++ ) {
        sec3.innerHTML += `<div class="div_loop"  >  
                    <span>${arra_nabui[m][0]}</span> <div class="icon">  
                    <button onclick="copeNew(\``+arra_nabui[m][0]+`\`)" class="bi" ><i class="far fa-copy"></i>نسخ</button>  
                    <button onclick="omar3(${m})" class="loop-btn" id="loop${m}" >التكرار (${arra_nabui[m][1]})</button>  
                </div>`
    };
}
else if( document.getElementById('sec4') ) {
    for( var m = 0 ; m < zkr_alsalah.length ; m++ ) {
        sec4.innerHTML += `<div class="div_loop"  >  
                    <span>${zkr_alsalah[m][0]}</span> <div class="icon">  
                    <button onclick="copeNew(\``+zkr_alsalah[m][0]+`\`)" class="bi" ><i class="far fa-copy"></i>نسخ</button>  
                    <button onclick="omar4(${m})" class="loop-btn" id="loop${m}" >التكرار (${zkr_alsalah[m][1]})</button>  
                </div>`
    };
}
   
    
    
    

    function omar1(morhaf) { 
        if( zkr_masa[morhaf][1] > 1 ) zkr_masa[morhaf][1]-- ; 
        else document.getElementsByClassName('div_loop')[morhaf].style.display = 'none'; 
        document.getElementById('loop'+morhaf).innerHTML = 'التكرار ('+ zkr_masa[morhaf][1] +')';
    } ;

    function omar2(morhaf) { 
        if( arra_zkr[morhaf][1] > 1 ) arra_zkr[morhaf][1]-- ; 
        else document.getElementsByClassName('div_loop')[morhaf].style.display = 'none'; 
        document.getElementById('loop'+morhaf).innerHTML = 'التكرار ('+ arra_zkr[morhaf][1] +')';
    } ;

    function omar3(morhaf) { 
        if( arra_nabui[morhaf][1] > 1 ) arra_nabui[morhaf][1]-- ; 
        else document.getElementsByClassName('div_loop')[morhaf].style.display = 'none'; 
        document.getElementById('loop'+morhaf).innerHTML = 'التكرار ('+ arra_nabui[morhaf][1] +')';
    } ;
    function omar4(morhaf) { 
        if( zkr_alsalah[morhaf][1] > 1 ) zkr_alsalah[morhaf][1]-- ; 
        else document.getElementsByClassName('div_loop')[morhaf].style.display = 'none'; 
        document.getElementById('loop'+morhaf).innerHTML = 'التكرار ('+ zkr_alsalah[morhaf][1] +')';
    } ;


/*  navbar menu */ 
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick= () => {
menu.classList.toggle('bx-x')
navbar.classList.toggle('open')
};





                   /* function +1  */
 zkr.onclick = () => lab.innerHTML = parseInt(lab.innerHTML) + 1
 
 // عند النزول على الصفحة تظهر و عند الذهاب تختفي
//  setInterval( () => {
//    if( window.pageYOffset > 500 ) {
//      zkr.style.opacity = 1
//    } else {
//      zkr.style.opacity = 0
//    }
//  } , 1000 )





function share2(status) {
    if(!status) {
        con_share.style.display = 'none'
    } else {
        con_share.style.display = 'grid'
    }
}


function copeNew(text) {
    

  navigator.clipboard.writeText(text);
  
  // Alert the copied text
  alert("Copied the text: " + text);
}
