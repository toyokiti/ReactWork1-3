import React, {useState} from 'react';

const StatusButton = (props) =>{
    const [todoStatus, setTodoStatus] = useState('作業中'); 
    
    // ステータスボタンの状態を変更⇔完了で変更
    const handleStatus = () => {
        const isTodoStatus = todoStatus === '作業中'; 
        if(isTodoStatus) {
            setTodoStatus('完了');
        } else {
            setTodoStatus('作業中');
        }
    } 

    return (
        <button onClick={()=>{handleStatus()}}>{todoStatus}</button>
    )
}

export default StatusButton;