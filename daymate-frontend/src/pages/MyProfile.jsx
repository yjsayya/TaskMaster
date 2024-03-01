import React, { useState } from 'react';
import styled from 'styled-components';
import { Text } from '../components/Profile';
import CommonTop from '../components/CommonTop';
import CommonModal from '../elements/CommonModal';
import ProfileEdit from './ProfileEdit';

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 80%;
  flex: 0.8;
`;

const Div3 = styled.div`
  display: flex;
  width: auto;
  height: 40%;
`;

const Div4 = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: wheat;
  cursor: pointer;
`;

const Div5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 170px;
  padding: 0 0 0 30px;
`;

const Div6 = styled.div`
  display: flex;
  gap: 50px;
`;

const Div7 = styled.span`
  color: #000000c5;
`;

const ProfileText = styled.span`
  font-weight: bold;
  font-size: large;
  color: ${(props) => props.color};
`;

const MemoContainer = styled.div`
  display: flex;
  flex: 1.2;
  width: auto;
  padding: 20px;
  border: 2px solid #eceae2;
  background-color: #eceae2;
  box-shadow: 2px 2px 5px rgba(119, 117, 117, 0.2);
  line-height: 1.8; /* 줄 높이 */
`;

const MemoHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const MemoContent = styled.div`
  font-size: 16px;
  padding: 5px 0 0 10px;
  color: #141414e8;
`;

function MyProfile() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = (content) => {
    setShowModal(false);
    setModalContent(content);
  };

  return (
    <>
      <CommonTop text={'나의 프로필'} text1={'확인'} />
      <Div1>
        <Div2>
          <Div3>
            <Div4
              src='./수정저성.PNG'
              onClick={() => openModal(<ProfileEdit />)}
            />
            {showModal && <CommonModal closeModal={closeModal} />}
            <Div5>
              <ProfileText>박준혁</ProfileText>
              <Text color='gray'>wnsgur1855@naver.com</Text>
              <Div6>
                <Div7>
                  팔로잉
                  <Text fontWeight='bold' marginL='10px'>
                    ?
                  </Text>
                </Div7>
                <Div7>
                  팔로워
                  <Text fontWeight='bold' marginL='10px'>
                    ?
                  </Text>
                </Div7>
              </Div6>
            </Div5>
          </Div3>
          <MemoContainer>
            <MemoHeader>@</MemoHeader>
            <MemoContent>버킷리스트 작성란</MemoContent>
          </MemoContainer>
        </Div2>
      </Div1>
    </>
  );
}

export default MyProfile;
