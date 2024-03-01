import React, { useState } from 'react';
import Calendar from '../components/Main/Calendar';
import styled from 'styled-components';
import Memo from '../components/Main/Memo';

const MainPageLargeBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Main() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <MainPageLargeBox>
      <Calendar setSelectedDate={setSelectedDate} />
      <Memo selectedDate={selectedDate} />
    </MainPageLargeBox>
  );
}

export default Main;
