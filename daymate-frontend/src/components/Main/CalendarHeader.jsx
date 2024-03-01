import React from 'react';
import styled from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Text } from './CalendarMy';

const HeaderContainer = styled.div`
  display: flex;
  font-family: 'Nanum Gothic', sans-serif;
  background-color: gray;
`;
const DateSelector = styled.div`
  width: 287px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: red;
  padding: 0 0 0 10px;
`;

const MonthSelector = styled.select`
  margin-right: 10px;
  border: none;
  ${Text};
`;

const YearSelector = styled.input`
  width: 50px;
  margin-right: 10px;
  border: none;
`;

const CalendarHeader = ({
  year,
  month,
  onPrevMonth,
  onNextMonth,
  onMonthChange,
  onYearChange,
}) => {
  return (
    <HeaderContainer>
      <DateSelector>
        <div>
          <YearSelector type='number' value={year} onChange={onYearChange} />
          <MonthSelector
            value={month}
            onChange={onMonthChange}
            fontWeight='bold'
          >
            <option value={1}>1월</option>
            <option value={2}>2월</option>
            <option value={3}>3월</option>
            <option value={4}>4월</option>
            <option value={5}>5월</option>
            <option value={6}>6월</option>
            <option value={7}>7월</option>
            <option value={8}>8월</option>
            <option value={9}>9월</option>
            <option value={10}>10월</option>
            <option value={11}>11월</option>
            <option value={12}>12월</option>
          </MonthSelector>
        </div>
        <div>
          <BsChevronLeft onClick={onPrevMonth} style={{ cursor: 'pointer' }} />
          <BsChevronRight onClick={onNextMonth} style={{ cursor: 'pointer' }} />
          {year}년
        </div>
      </DateSelector>
    </HeaderContainer>
  );
};

export default CalendarHeader;
