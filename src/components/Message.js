import './styles.css';

const Message = ({ message }) => {
  return (
    <li className="message">
      <strong>{message.user}</strong>
      <p>{message.message}</p>
    </li>
  );
};

export default Message;
