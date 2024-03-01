import React from 'react';
import styled from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const MemoPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 98.5%;
  height: 30px;
  background-color: rgba(128, 128, 128, 0.658);
  gap: 20px;
  cursor: pointer;
`;

function MemoPage() {
  return (
    <MemoPageContainer>
      <BsChevronLeft />

      <BsChevronRight />
    </MemoPageContainer>
  );
}

export default MemoPage;
