import React from "react";
import getFriendList from "../../API/friend";
import {useParams} from "react-router-dom";
import {useState, useEffect} from 'react'
import Avatar from '../img/avatar.jpg'
import Conversation from "./Conversations";

function Friend(props){
    return (<div>
        <img src={Avatar} alt="avatar" width={50} height={50}/>
        <button>{props.name}</button>
    </div>)
}

function FriendList(){

    const {userID} = useParams();
    const [friendList, setFriendList] = useState([])
    const [curFriendID, setCurFriendID] = useState('')
    const [curFriendName, setCurFriendName] = useState('')

    useEffect(() => {
        async function callAPI(){
            try{
                const response = await getFriendList(userID); 
                console.log(response.data)
                setFriendList(response.data)
                setCurFriendID(friendList[0].userID)
                setCurFriendName(friendList[0].name)
            }catch(err){
                console.log(err)
            }
        }

        callAPI();
    }, [])
    
    return (
        <div>
            {friendList.map((x) => (<Friend key={x.userID} name={x.name}/>))}
            {friendList.length && 
            <Conversation userID={userID} curFriendID={curFriendID} curFriendName={curFriendName}/>}

        </div>
    )
}

export default FriendList; 