// Create styled components here
import styled from "styled-components";
const AppWrapperDiv = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const TagWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 80px;
  border-radius: 300px;
  padding: 0px 25px;
  margin-bottom: 25px;

  cursor: pointer;
  user-select: none;

  background-color: rgba(0, 0, 0, 0.4);


&:hover {
  background-color: rgba(0, 0, 0, 0.8);}
`;
const EmojiSpan = styled.span`
  margin-right: 20px;
  font-size: 1.6em;
`;
const NameSpan = styled.span`
  flex-grow: 1;
  font-size: 1.6em;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
`;

const GotogithubSpan = styled.span`
font-size: 0.8em;
user-select: none;
color: rgba(255, 255, 255, 0.3);
`;
export {EmojiSpan,NameSpan,GotogithubSpan,TagWrapperDiv,AppWrapperDiv}