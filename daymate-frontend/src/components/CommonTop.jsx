import React from 'react';
import styled from 'styled-components';
import { BsChevronLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const CommonBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  width: 100%;
  height: 60px;
`;

const IconStyle = styled(BsChevronLeft)`
  font-weight: bolder;
  cursor: pointer;
  stroke-width: 4px;
`;

const D12 = styled.div`
  font-weight: 900;
  font-size: 19px;
  cursor: pointer;
`;

function CommonTop({ text, text1 }) {
  const navigate = useNavigate();
  const goback = () => {
    navigate(-1);
  };
  return (
    <CommonBox>
      <IconStyle onClick={goback} />
      <D12>{text}</D12>
      <D12>{text1}</D12>
    </CommonBox>
  );
}

export default CommonTop;
