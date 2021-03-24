import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) =>
    props.user !== props.message.user ? '#fff' : '#d8e5ed'};
  margin: 5px 0 0;
  padding: 9px;
  border: 1px solid #d8e5ed;
  border-radius: 8px;
  transform: rotate(180deg);
`;

export const UserName = styled.label`
  margin-left: 10px;
  display: flex;
  justify-content: ${(props) =>
    props.user !== props.message.user ? 'end' : 'flex-end'};
  color: ${(props) =>
    props.user !== props.message.user ? '#00099' : '#42a1db'};
  font-weight: bold;
`;

export const Content = styled.p`
  display: flex;
  justify-content: ${(props) =>
    props.user !== props.message.user ? 'end' : 'flex-end'};
  margin-left: 10px;
  font-size: 14px;
  line-height: 20px;
`;
