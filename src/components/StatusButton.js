import React, {useState} from 'react';

const StatusButton = (props) =>{
    const [todoStatus, setTodoStatus] = useState('作業中'); 
    
    // ステータスボタンの状態を変更⇔完了で変更
    const updateStatus = () => {
        const isTodoStatus = todoStatus === '作業中'; 
        isTodoStatus ? setTodoStatus('完了') : setTodoStatus('作業中');
    } 

    return (
        <button onClick={()=>{updateStatus()}}>{todoStatus}</button>
    )
}

export default StatusButton;