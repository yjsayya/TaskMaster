import React from 'react';
import styled from 'styled-components';

const Intro = styled.div`
  width: 285px;
  height: 100px;
  display: flex;
  align-items: center;
`;

const MyImgBox = styled.div`
  display: flex;
  justify-content: center;
  width: 70px;
  padding: 5px 10px 5px 10px;
`;

export const MyImg = styled.img`
  background-color: #f0dfdfef;
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;
const IntroTextBox = styled.div`
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
`;
export const Text = styled.span`
  color: ${({ color }) => color || 'black'};
  font-size: ${({ fontSize }) => fontSize || 'normal'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  margin-left: ${(props) => props.marginL};
`;

function Profile() {
  return (
    <Intro>
      <MyImgBox>
        <MyImg src='./수정저성.PNG' />
      </MyImgBox>
      <IntroTextBox>
        <Text fontWeight='bold' fontSize='large'>
          박준혁
        </Text>
        <Text color='gray'>인간시대</Text>
      </IntroTextBox>
    </Intro>
  );
}

export default Profile;
