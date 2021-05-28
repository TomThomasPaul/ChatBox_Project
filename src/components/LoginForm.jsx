import {React,useState} from 'react';
import axios from 'axios';

const LoginForm =()=>{

    const [username, setUsername] =useState('');
    const [password, setPassword] =useState('');
    const [error, setError]= useState('');

    const handleSubmit = async (e)=>{
            e.preventDefault();

            const authObject ={'Project-ID' : "93617925-a6db-4ee1-997a-15c6cd06c4d7" , 'User-Name' : username, 'User-Secret' : password};


            try{
                 await axios.get('https://api.chatengine.io/chats', {headers: authObject}); //authenticate user

                 localStorage.setItem('username',username);
                 localStorage.setItem('password',password);

                 window.location.reload();

            }catch(e){

               setError('Sorry, your credentials are incorrect');
            }

    }

    return <div className='wrapper'>
               <div className='form'>
                   <h1 className='title'>ChatBox</h1>
                   <form onSubmit={handleSubmit}>
                         <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} className='input' placeholder='Username' required />
                         <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='input' placeholder='Password' required  />
                         <div align='center'>
                              <button type='submit' className='button' style={{backgroundColor : 'black', opacity: 0.8}}>

                                  <span style={{color: 'white'}}>Start Chatting Now</span>

                              </button>

                         </div>
                         <h2 className='error'>{error}</h2>

                   </form>

               </div>


           </div>


}   


export default LoginForm;