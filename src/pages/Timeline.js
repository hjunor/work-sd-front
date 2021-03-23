import { useState, useEffect } from 'react';
import api from '../services/api';

import socket from 'socket.io-client';
import './Timeline.css';

import Message from '../components/Message';

const Timeline = () => {
  const [messages, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const subscribeToEvents = () => {
    const io = socket('http://localhost:3333');

    io.on('tweet', (data) => {
      setMessage({ messages: [data, ...messages] });
    });
  };

  useEffect(() => {
    async function fetchData() {
      subscribeToEvents();

      const response = await api.get('message');
      setMessage(response.data);
    }
    fetchData();
    // eslint-disable-next-line
  }, [messages]);

  const handlelNewTweet = async (e) => {
    e.preventDefault();

    const message = newMessage;
    console.log(message);
    const user = localStorage.getItem('username');

    await api.post('message', { message, user });

    setNewMessage(' ');
  };
  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  return (
    <div className="timeline-wrapper">
      <ul className="tweet-list">
        {messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}
      </ul>
      <form>
        <textarea value={newMessage} onChange={handleInputChange} />

        <button onClick={handlelNewTweet}>Enviar</button>
      </form>
    </div>
  );
};
export default Timeline;
