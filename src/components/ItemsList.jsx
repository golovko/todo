import { useState } from 'react';

const itemsArr = [
        {id: 0, created: '01/06/2023', text:"First task text", status: false},
        {id: 1, created: '02/06/2023', text:"Second super task text", status: true},
        {id: 2, created: '02/06/2023', text:"Third task text", status: false},
        {id: 3, created: '03/06/2023', text:"4 task text", status: false},
        {id: 4, created: '04/06/2023', text:"5 task text", status: true},
        {id: 5, created: '04/06/2023', text:"6 task text", status: true}
];

export default function ItemsList() {
    const [text, setText] = useState("new task");
    const [task, setTask] = useState(itemsArr);
    const [id, setId] = useState(itemsArr.length)


    function Submiter(){
        let date = new Date();
        setId(id + 1);
        let tempArr = [...task];
        tempArr.unshift({created: date.toLocaleDateString(), id: id, text: text, status: false})
        setTask(tempArr);
    }

    function MarkDone(taskId){
        let tempArr = [...task];
        tempArr.find(el => el.id === taskId).status = !tempArr.find(el => el.id === taskId).status;
        setTask(tempArr);
    }

    function Delete(elementId)
    {
        let tempArr = [...task];
        tempArr = tempArr.filter(el => el.id !== elementId);
        setTask(tempArr);
    }

    // let item = task.map(element => {
    //     return (
    //         <li key={element.id}>
    //             <p>{element.status?<del>{element.text +" "+element.created}</del>:element.text + " " + element.created} 
    //             <input type="checkbox" checked={element.status} onChange={e=>MarkDone(element.id)}></input> 
    //             <button onClick={e=>Delete(element.id)}>Del</button>
    //             </p> 
    //         </li>
    //     );
    // });

    let item = task.map(element => {
        return (
            <li key={element.id}>
                <p className='item'>
                <input 
                    type='text' 
                    placeholder={element.text} 
                    disabled={element.status} 
                    size="30"
                    />
                {element.created}
                <input type="checkbox" checked={element.status} onChange={e=>MarkDone(element.id)}></input> 
                <button onClick={e=>Delete(element.id)}>Del</button> 
                </p>
            </li>
        );
    });

  return (
    <div>
        <div>
            <input 
                type='text' 
                placeholder={text} 
                onChange={e => setText(e.target.value)}
                size="30"
                onKeyDown={e => (e.key === 'Enter') ? Submiter() : null}
            />
            <button onClick={Submiter}>Add</button>
        </div>
       <ol>
        {item}
       </ol>
    </div>
  );
}
