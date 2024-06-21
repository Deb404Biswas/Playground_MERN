let tasks=[];
let displayhtml=''
function todo()
{
    let inputEle = document.querySelector('.js-input');
    let inputEleDate=document.querySelector('.js-date');
    const date=inputEleDate.value;
    const task=inputEle.value;
    console.log(task);
    console.log(date);
    tasks.push(
        {
            task:task,
            date:date
        }
    );
    console.log(tasks);
    inputEle.value="";
    display_task();
};

function deletetask(i){
    tasks.splice(i,1);
    console.log(tasks);
    display_task();
}
function display_task(){
    for(let i=0;i<tasks.length;i++)
        {
            const eletask=tasks[i].task;
            const eledate=tasks[i].date;
            let html=`
            <div class="css-task-display">
            <div>${eletask}</div> 
            <div>${eledate}</div> 
            <button class="css-delete-btn" onclick="deletetask(${i})">Delete</button>
            </div>
            `;
            console.log(html);
            displayhtml+=html;  
            document.querySelector('.js-display').innerHTML=displayhtml; 
        }
        displayhtml=''
        console.log(tasks)
}






