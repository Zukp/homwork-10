import styles from './ButtonDelet.module.css';


function ButtonDelet(props) {
    console.log(props)
 return (
     <div className={styles.modalBackground}>
         <div className={styles.modalContainer}>
             <button  onClick={() => props.closeModal(false)}> X </button>
             <div className={styles.title}>
            <h3>сиз чындап эле удалить кылгыныз келип жатабы?</h3> 
             </div>
           
             <div className={styles.footer}>
                <button id={styles.cancelBtn} onClick={() => props.closeModal(false)}>cancel</button>
                <button id={props.id} onClick={props.onDelet}>contimui</button>
             </div>
         </div>
     </div>
 )
}
export default ButtonDelet