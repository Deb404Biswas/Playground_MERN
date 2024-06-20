let tasks=[{
    task:'',
    date:''
}];
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
    for(let i=0;i<tasks.length;i++)
        {
            const eletask=tasks[i].task;
            const eledate=tasks[i].date;
            let html=`
            <p>${eletask}   ${eledate}</p>
            <button onclick="deleteToDo(${i})">Delete</button>
            `;
            console.log(html);
            displayhtml+=html;  
            document.querySelector('.js-display').innerHTML=displayhtml; 
        }
        displayhtml=''
};

function deleteToDo(i)
{
    tasks.slice(i,1)
    console.log(tasks)
}




