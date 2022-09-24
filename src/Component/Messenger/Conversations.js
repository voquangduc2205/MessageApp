import React from "react";
import {useState, useEffect} from 'react'
import getConversation from '../../API/message';

function Conversation(props){
    console.log(props.curFriendName)
    const [userID, setUserID] = useState(props.userID);
    const [curFriendID, setCurFriendID] = useState(props.curFriendID);
    const [curFriendName, setCurFriendName] = useState(props.curFriendName);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        console.log(curFriendID);
        async function callAPI(){
            const params = {
                'user1ID': userID,
                'user2ID': curFriendID,
            }
            console.log(params)
            const result = await getConversation(params);
            setMessages(result.data);
        }

        callAPI();
    }, [curFriendID])

    return (
        <>{
            messages.length  ? (
                <div>
                    {messages.map((x) => {
                        return <p style={
                            {color: x.type === "sent" ? 'red' : 'blue'}
                        }>{x.type === "sent" ? "You: " + x.details : curFriendName + ": " + x.details}</p>
                    })}
                </div>
            ) : (
                <p>No messages to shown yet!</p>
            )
        }
        </>
    )

}

export default Conversation;