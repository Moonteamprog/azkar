let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');


menu.onclick= () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
};

//   window.open

// alert("لا تنسى أذكارك اليومية" , 5000) ;


" <br> " ," <br> "
let array_words = [ 
   ' لا اله الا الله   ',
   'اللَّهُــمَّ صَلِّ وَسَـــلِّمْ وَبَارِكْ على نَبِيِّنَـــا مُحمَّدﷺ ',
   '  أذكر الله ',
   '  حسبي الله ونعم الوكيل  ' ,
   '  استغفر الله العظيم واتوب اليه ' ,
   ' لا حول ولا قوة الا بالله' ,
   ' سبحان الله  ',
   'الحمد الله ',
   ' الله أكبر',
   ' سبحان الله و بحمده ,سبحان الله العظيم ',
   ' لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ ',
   ' اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر  وَالفَـقْر  ، لا إلهَ إلاّ أَنْـتَ  ',
   ' سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ',
   ' يا حي يا قيُّوم، برحمتك أستغيث، أصلِح لي شأني كله ',
   ' سبحانك اللهم وبحمدك، وتبارك اسمك وتعالى جدّك، ولا إله غيرك ',
   ' اللهم اكفني بحلالك عن حرامك، وأغنني بفضلك عمّن سواك ',
   ' اللهم باسمك أحيا وأموت ',
   ' قراءة آية الكرسي ',
   ' رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا ',
   ' رَبِّ اجْعَلْنِي مُقِيمَ الصَّلاَةِ وَمِن ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ ',
   'اللَّهُــمَّ اني أَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ',
   '  اللَّهم إني أسألك بأني أشهد أنك أنت اللَّه لا إله إلا أنت ',
   'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا  ',
   'اللهم إني أسألك رحمة من عندك تهدي بها قلبي  ',
   ' اللَّهُمَّ إِنِّي أَسْأَلُكَ الثَّبَاتَ فِي الْأَمْرِ ',
   ' اللَّهمّ إني أسألك من الخير كله عاجله وآجله ',

 ] 
 document.getElementById('text-random').innerHTML = array_words[ Math.floor( Math.random() *   array_words.length ) ] ;





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

   startTime();






   //Initial References
const newTaskInput = document.querySelector("#new-task input");
const tasksDiv = document.querySelector("#tasks");
let deleteTasks, editTasks, tasks;
let updateNote = "";
let count;
//Function on window load
window.onload = () => {
  updateNote = "";
  count = Object.keys(localStorage).length;
  displayTasks();
};
//Function to Display The Tasks
const displayTasks = () => {
  if (Object.keys(localStorage).length > 0) {
    tasksDiv.style.display = "inline-block";
  } else {
    tasksDiv.style.display = "none";
  }
  //Clear the tasks
  tasksDiv.innerHTML = "";
  //Fetch All The Keys in local storage
  let tasks = Object.keys(localStorage);
  tasks = tasks.sort();
  for (let key of tasks) {
    let classValue = "";
    //Get all values
    let value = localStorage.getItem(key);
    let taskInnerDiv = document.createElement("div");
    taskInnerDiv.classList.add("task");
    taskInnerDiv.setAttribute("id", key);
    taskInnerDiv.innerHTML = `<span id="taskname">${key.split("_")[1]}</span>`;
    //localstorage would store boolean as string so we parse it to boolean back
    let editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    if (!JSON.parse(value)) {
      editButton.style.visibility = "visible";
    } else {
      editButton.style.visibility = "hidden";
      taskInnerDiv.classList.add("completed");
    }
    taskInnerDiv.appendChild(editButton);
    taskInnerDiv.innerHTML += `<button class="delete"><i class="fa-solid fa-trash"></i></button>`;
    tasksDiv.appendChild(taskInnerDiv);
  }
  //tasks completed
  tasks = document.querySelectorAll(".task");
  tasks.forEach((element, index) => {
    element.onclick = () => {
      //local storage update
      if (element.classList.contains("completed")) {
        updateStorage(element.id.split("_")[0], element.innerText, false);
      } else {
        updateStorage(element.id.split("_")[0], element.innerText, true);
      }
    };
  });
  //Edit Tasks
  editTasks = document.getElementsByClassName("edit");
  Array.from(editTasks).forEach((element, index) => {
    element.addEventListener("click", (e) => {
      //Stop propogation to outer elements (if removed when we click delete eventually rhw click will move to parent)
      e.stopPropagation();
      //disable other edit buttons when one task is being edited
      disableButtons(true);
      //update input value and remove div
      let parent = element.parentElement;
      newTaskInput.value = parent.querySelector("#taskname").innerText;
      //set updateNote to the task that is being edited
      updateNote = parent.id;
      //remove task
      parent.remove();
    });
  });
  //Delete Tasks
  deleteTasks = document.getElementsByClassName("delete");
  Array.from(deleteTasks).forEach((element, index) => {
    element.addEventListener("click", (e) => {
      e.stopPropagation();
      //Delete from local storage and remove div
      let parent = element.parentElement;
      removeTask(parent.id);
      parent.remove();
      count -= 1;
    });
  });
};
//Disable Edit Button
const disableButtons = (bool) => {
  let editButtons = document.getElementsByClassName("edit");
  Array.from(editButtons).forEach((element) => {
    element.disabled = bool;
  });
};
//Remove Task from local storage
const removeTask = (taskValue) => {
  localStorage.removeItem(taskValue);
  displayTasks();
};
//Add tasks to local storage
const updateStorage = (index, taskValue, completed) => {
  localStorage.setItem(`${index}_${taskValue}`, completed);
  displayTasks();
};
//Function To Add New Task
document.querySelector("#push").addEventListener("click", () => {
  //Enable the edit button
  disableButtons(false);
  if (newTaskInput.value.length == 0) {
    alert("Please Enter A Task");
  } else {
    //Store locally and display from local storage
    if (updateNote == "") {
      //new task
      updateStorage(count, newTaskInput.value, false);
    } else {
      //update task
      let existingCount = updateNote.split("_")[0];
      removeTask(updateNote);
      updateStorage(existingCount, newTaskInput.value, false);
      updateNote = "";
    }
    count += 1;
    newTaskInput.value = "";
  }
});