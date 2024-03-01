import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CommonModal from '../elements/CommonModal';
import { set } from 'date-fns';

const OriginBackground = styled.div`
  width: 100%;
  z-index: 999;
`;

const BottonDiv = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: white;
  border: none;
`;

const TopImg = styled.img`
  width: 30px;
  height: 30px;
`;

const Left = styled.div`
  padding: 20px;
  cursor: pointer;
`;

const Right = styled.div`
  display: flex;
  gap: 16px;
  cursor: pointer;
`;

function TopBar() {
  const Navigate = useNavigate();
  const handleClick = (path) => {
    Navigate(path);
  };
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleBackgroundClick = (e) => {
    // 모달이 열려있을 때만 모달 밖의 영역을 클릭하여 닫을 수 있도록 처리
    if (showModal) {
      closeModal();
    }
  };

  return (
    <OriginBackground onClick={handleBackgroundClick}>
      <BottonDiv>
        <Left>
          <TopImg src='./home.SVG' onClick={() => handleClick('/main')} />
        </Left>
        <Right>
          <TopImg src='./search.SVG' onClick={() => handleClick('search')} />
          <TopImg src='./alarm.svg' onClick={openModal} />
          {showModal && <CommonModal closeModal={closeModal} />}
          <TopImg src='./person.svg' onClick={() => handleClick('myProfile')} />
        </Right>
      </BottonDiv>
    </OriginBackground>
  );
}

export default TopBar;
