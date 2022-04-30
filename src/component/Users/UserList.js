import Card from './UI/Card';
import styles from './UserList.module.css';
import Delet from './Delet';


const UserList = ({users, setUserList}) => {
   
  function deleteHanlder(e){
     setUserList(
         users.filter((el)=> el.id !== e.target.id)
     )
  }

  
   return (
       <Card className={styles.users}>
          <ul >
            
              {users.map( user => (
                 
                  <li key={user.id}>
                      
        
                      {user.name} {user.age} years old

                   <Delet  onDelete={deleteHanlder} id={user.id}/> 
                  </li>
 
              ) )}

          </ul>
        
    

       </Card>
   )

}
export default UserList