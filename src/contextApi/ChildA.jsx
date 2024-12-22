import ChildD from "./ChildD"


const ChildA = (props) => {
  return (
    <div>
        <button onClick={props.alertmsg}>alert</button>
        <ChildD/>
    </div>
  )
}

export default ChildA