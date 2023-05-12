import React, { useState, useEffect, useCallback, useRef } from "react";
import { io } from "socket.io-client";
import * as Stompjs from "@stomp/stompjs";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/user/atoms/userState";
import useQueryHook from "../../common/hooks/useQueryHook";
import { getChatMessageList } from "../../common/api/chat/chatApi";
import axios from "axios";
import customAxios from "../../common/utils/customAxios";

const Chat = () => {
  const client = useRef({});
  const ROOM_ID = 1;

  const userInfo = useRecoilValue(userState);
  const [message, setMessage] = useState("");
  const [chatList, setChatList] = useState([]);
  const [newMessage, setNewMessage] = useState([]);

  const { request: chatMessageList } = useQueryHook({
    query: getChatMessageList(),
    params: {},
    callbacks: {
      onSuccess: (data) => {
        console.log(data);
      },
    },
  });

  useEffect(() => {
    chatMessageList();
  }, [newMessage]);

  // 채팅 상태

  const connect = () => {
    client.current = new Stompjs.Client({
      brokerURL: "ws://localhost:8080/ws/websocket",
      onConnect: () => {
        subscribe();
      },
    });
    client.current.activate();
  };

  const subscribe = () => {
    client.current.subscribe(`/sub/chat/room/${ROOM_ID}`, ({ body }) => {
      setNewMessage((prev) => [...prev, JSON.parse(body)]);
    });
  };

  useEffect(() => {
    console.log(newMessage);
  }, [newMessage]);

  const disconnect = () => {
    client.current.deactivate();
  };

  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

  const onPublishHandler = (e) => {
    e.preventDefault();

    client.current.publish({
      destination: "/pub/chat/message",
      body: JSON.stringify({
        userId: 1,
        chatRoomId: 1,
        message: message,
      }),
    });

    setMessage("");
  };

  const onChangeHandler = (e) => {
    let value = e.target.value;

    setMessage(value);
  };

  return (
    <div>
      <h1>채팅방</h1>
      <div>
        {chatList?.map((chat, index) => (
          <div key={index}>{chat?.message}</div>
        ))}
      </div>

      <form onSubmit={onPublishHandler}>
        <input type="text" onChange={onChangeHandler} value={message} />
        <button>전송</button>
      </form>
    </div>
  );
};

export default Chat;
