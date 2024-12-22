import ChildA from "./ChildA"
import ChildB from "./ChildB"
import ChildC from "./ChildC"

const Parent = () => {
    const danger= ()=>{
        alert("danger here if you click")
    }
  return (
    <div>
        <ChildA alertmsg={danger}/>
        <ChildB/>
        <ChildC/>
    </div>
  )
}

export default Parent