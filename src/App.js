
import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/Chatfeed'
//import {ChatEngine} from 'react'

const App = () =>{
  return (
   <ChatEngine
   height ="100vh"
   projectID ="93617925-a6db-4ee1-997a-15c6cd06c4d7"
   userName="tomthomaspaul"
   userSecret="Chatttp@1993"
   renderChatFeed={(chatFeedProps)=><ChatFeed {...chatFeedProps}/>}
   
   
   /> 
  );
}

export default App;
