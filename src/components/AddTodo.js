import { useDispatch } from "react-redux";
import { addHandler } from "../redux/action";
export default function AddTodo() {

    const dispatch = useDispatch()
    const [input, setinput] = useState('')
    
    return (
        <div>
           <input
           id='myInput' 
           onChange={(e)=> setinput(e.target.value)}
           /> 
           <button className='btn-add'>ADD </button>
        </div>
    )
}
