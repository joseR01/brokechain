import React, { useRef, useState } from 'react'
import 'react-chat-elements/dist/main.css';
import { ChatItem, MessageBox, MeetingMessage, SystemMessage, MessageList,ChatList,Input,Buttom,Popup,SildeBar,Navbar, Dropdown, Avatar,LocationMessage,SpotifyMessage,MeetingItem,MeetingList } from 'react-chat-elements'
import avatar from '../img/images.jpg'
import avatar1 from '../img/venezuela.jpg'
import { Button, Card } from 'react-bootstrap';

const DataBaseMessage = [
  { 
    position: 'right',
    type: 'text',
    text: 'Hola! Bienvenido a nuestro sistema de cambio ¿como podemos ayudarle?',
    data: {
      uri: avatar1,
      status: {
        click: false,
        loading: 0,
      }
    }
    

  },
]
const Chats = () => {
  const inputRef = useRef("");
  const messagesAreaRef = useRef();
  const [message, setMessage] = useState("");
  const [updatedMessages, setUpdatedMessages] = useState(DataBaseMessage); 
  const [messageFile, setMessageFile] = useState("")

  

  const clearTextInput = () => {
    inputRef.current.clear();
  };

  const processMessage = ()=>{
      const array ={
        position: 'left',
        type: 'text',
        text: message,
        date: new Date(),
        data: {
          uri: "",
          status: {
            click: false,
            loading: 0,
          }
        }
      }
      const AuxupdatesMessages = [...updatedMessages,array]
      console.log(AuxupdatesMessages)
      if(message!==""){ 
           return  setUpdatedMessages(AuxupdatesMessages)
        }else {return   clearTextInput()
      }
  }

  const handleSend = () => {
        processMessage()
        clearTextInput()
  };

  return (
    <div className=" my-auto chat-page">
      <Card className="card border border-primary mx-auto my-auto " style={{ width:"80% ", height:"500px"}}>
      <Card.Header className="m-0 p-0 border border-0">
          <ChatItem
            avatar={avatar}
            alt={'avatar de maria'}
            title={"Maria Gabriela"}
            subtitle={'en linea'}
            statusColor	={"green"}
            date={new Date()}
            unread={0} />
        </Card.Header>
      <Card.Body className="overflow-auto">
          <MessageList
          className='message-list'
          lockable={true}
          toBottomHeight={'100%'}
          dataSource={
              
                updatedMessages.map((msg,index)=>{
                    return  {
                      position: msg.position,
                      type: msg.type,
                      text: msg.text,
                      date: msg.date,
                      data: msg.data,
                  }      
                })
                
          } />
      </Card.Body>
      <Card.Footer className="text-muted ">
          <Input 
          ref={inputRef}
          placeholder="Type here..."
          multiline={true}
          maxHeight={60}
          onChange={(e)=>{setMessage(e.target.value)}}
          rightButtons={
            <>    <input type="file" id="media"
                      onChange={e =>
                        setMessageFile(document.getElementById("media").files[0])
                      }
                  />
                  <button className="btn btn-primary rounded-pill" onClick={()=>{handleSend()}}>SEND</button>
            </>    
          }/>
        
      </Card.Footer>
      </Card>

      
    </div>
  )
}

export default Chats
