const inputBox = document.getElementById('input-box');
const lc = document.getElementById('list-container');

function addTask(){
    if(inputBox.value ===''){
        alert('Please Add Task');
    }else{
        let li = document.createElement('li');
        li.innerHTML=inputBox.value;
        lc.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML ='\u00d7';
        li.appendChild(span)
    }
    inputBox.value='';
    saveData();
}

lc.addEventListener('click', function(e){
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem('data',lc.innerHTML);
}

function showTask(){
    lc.innerHTML = localStorage.getItem('data')
}
showTask()
