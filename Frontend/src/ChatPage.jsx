import { PrettyChatWindow } from "react-chat-engine-pretty"
const ChatPage = (props) => {
    
    return <div style={{ height: '100vh' }}>
      <PrettyChatWindow 
      projectId="138ae8c4-31a9-4a3e-8be0-8a07a20332b9"
      username={props.user.username}
      secret={props.user.secret}
      style={{height:'100%'}}
      />
    </div>
}

export default ChatPage