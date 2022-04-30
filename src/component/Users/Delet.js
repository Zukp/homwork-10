import { useState } from "react"
import ButtonDelet from "./ButtonDelet"

function Delet (props) {

console.log(props)
    const [openModal,setOpneModal] = useState(false)
    return (
        <div>
            <button onClick={() => {
                setOpneModal(true)
            }}>Delet</button>
            { openModal && <ButtonDelet onDelet={props.onDelete} closeModal={setOpneModal} id={props.id} />}
        </div>
    )
}
export default Delet