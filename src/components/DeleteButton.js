
const DeleteButton = (props) =>{

    const onClickDelete = () => {
        const todos = props.todoList; //todosにtodoListをコピー
        todos.splice(props.index, 1); //todoから対象のtaskを削除
        props.setTodoList([...todos]); //todoListを上書き
    }   

    return (
        <button onClick = {()=>{onClickDelete()}}>削除</button>
    )
}
export default DeleteButton;