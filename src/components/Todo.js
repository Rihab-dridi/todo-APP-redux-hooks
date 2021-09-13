import { useDispatch } from "react-redux";
import {deleteHandler,doneHandler  } from "../redux/action";

export default function Todo({ task }) {
    const dispatch = useDispatch()


const doneTodo=()=>{
dispatch(doneHandler(task.id))
}

  return (
    <div className="todo-container">
      {/* <h5 style={ task.isDone ? { backgroundColor:'black'  } :{} }>{task.text} </h5> */}
     <h5    className={task.isDone&& 'done' }  > {task.text} </h5>
      <div>
        <button  onClick={doneTodo}   >Done</button>
        <button onClick={()=> dispatch(deleteHandler(task.id))  }  >DLT</button>
      </div>
    </div>
  );
}
