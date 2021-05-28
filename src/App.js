
import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/Chatfeed'
import LoginForm from './components/LoginForm';
//import {ChatEngine} from 'react'

const App = () =>{
if(!localStorage.getItem('username')) return <LoginForm />

  return (
   <ChatEngine
   height ="100vh"
   projectID ="93617925-a6db-4ee1-997a-15c6cd06c4d7"
   userName={localStorage.getItem('username')}
   userSecret={localStorage.getItem('password')}
   renderChatFeed={(chatFeedProps)=><ChatFeed {...chatFeedProps}/>}
   
   
   /> 
  );
}

export default App;
