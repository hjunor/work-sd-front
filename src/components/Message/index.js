import { Container, UserName, Content } from './styles';
const Message = ({ message, user }) => {
  return (
    <Container message={message} user={user}>
      <UserName message={message} user={user}>
        {message.user}
      </UserName>
      <Content message={message} user={user}>
        {message.message}
      </Content>
    </Container>
  );
};

export default Message;
