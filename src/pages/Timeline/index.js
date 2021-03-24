import { useState, useEffect } from 'react';
import api from '../../services/api';

import socket from 'socket.io-client';
import './styles.css';

import Message from '../../components/Message';

const Timeline = () => {
  const [messages, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [user] = useState(localStorage.getItem('username'));

  const subscribeToEvents = () => {
    const io = socket('https://sd-back-api.herokuapp.com/');

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
          <Message key={message._id} message={message} user={user} />
        ))}
      </ul>
      <form>
        <textarea value={newMessage} onChange={handleInputChange} />

        <button className="btn" onClick={handlelNewTweet}>
          Ok
        </button>
      </form>
    </div>
  );
};
export default Timeline;
