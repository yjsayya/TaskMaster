import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ProfileEdit from '../pages/ProfileEdit';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* 투명한 검은색 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const CommonModalBox1 = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 370px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

const CommonModalBox2 = styled.div`
  color: black;
  font-weight: bold;
`;

const CommonModalBox3 = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 30px;
  border: none;
  box-shadow: 0px 0px 10px 0px rgba(197, 193, 193, 0.5);
`;

const ModalText1 = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 0 0 10px;
  font-weight: bold;
`;

function CommonModal({ closeModal }) {
  const [type, setType] = useState(null);
  return (
    <Overlay onClick={closeModal}>
      {
        <CommonModalBox1>
          <CommonModalBox3>
            <ModalText1>알림</ModalText1>
          </CommonModalBox3>
          <CommonModalBox2>받으신 알림이 없습니다.</CommonModalBox2>
        </CommonModalBox1>
      }
      {/* {<ProfileEdit />} */}
    </Overlay>
  );
}

export default CommonModal;
//if no data 일땐 "받으신 알림이 없습니다. 아닐땐 박스 띄우기"
