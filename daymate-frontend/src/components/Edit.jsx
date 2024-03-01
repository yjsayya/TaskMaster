import React from 'react';
import styled from 'styled-components';

const EditBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-top: 40px; */
  padding: 30px;
`;

const ImgEdit = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: wheat;
  padding: 25px;
  cursor: pointer;
`;

const One = styled.div`
  display: flex;
  margin-top: 20px;
`;

const TextDiv = styled.div`
  width: ${(props) => props.width};
  color: gray;
  font-weight: bold;
  border-bottom: 1px solid black;
  padding: 10px 15px 10px 10px;
  margin-top: 5px;
`;

const TextInput = styled.input`
  /* width: 70vw; */
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
`;

function Edit() {
  return (
    <EditBox>
      <ImgEdit src='./수정저성.PNG' />
      <One>
        <TextDiv width='50px'>이름 </TextDiv>
        <TextInput placeholder='박준혁' />
      </One>
      <One>
        <TextDiv width='70px'>자기소개 </TextDiv>
        <TextInput placeholder='지윤이 남자친구' />
      </One>
    </EditBox>
  );
}

export default Edit;
