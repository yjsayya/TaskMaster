import React, { useState } from 'react';
import styled from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import CalendarMy from './CalendarMy';

const CalendarContainer = styled.div`
  width: 500px;
  height: auto;
  margin-bottom: 50px;
`;

const CalendarTable = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid rgba(128, 128, 128, 0.2);
`;

const CalendarCell = styled.td`
  display: ${(props) => props.display};
  width: 100vw;
  padding: 10px;
  border: none;
  font-family: 'Nanum Gothic', sans-serif;
  text-align: ${({ textAlign }) => textAlign || 'center'};
  font-size: ${({ fontSize }) => fontSize || 'normal'};
  font-weight: ${(props) => props.fontWeight};
  border: 1px solid rgba(128, 128, 128, 0.2);
  border-radius: 10px;
  color: #2e2c2c;
`;

const PrevMonth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState(null);

  const daysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const generateCalendar = (year, month) => {
    const firstDay = new Date(year, month - 1, 1).getDay();
    const totalDays = daysInMonth(year, month);
    const calendar = [];

    let dayCounter = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push('');
        } else if (dayCounter > totalDays) {
          break;
        } else {
          week.push(dayCounter);
          dayCounter++;
        }
      }
      calendar.push(week);
      if (dayCounter > totalDays) {
        break;
      }
    }

    return calendar;
  };

  const handlePrevMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handleMonthChange = (increment) => {
    const newMonth = month + increment;
    if (newMonth < 1) {
      setMonth(12);
      setYear(year - 1);
    } else if (newMonth > 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(newMonth);
    }
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const calendar = generateCalendar(year, month);

  return (
    <CalendarContainer>
      <CalendarMy />
      <CalendarTable>
        <thead>
          <tr>
            <CalendarCell
              colSpan='7'
              textAlign='none'
              fontWeight='bold'
              fontSize='large'
            >
              <PrevMonth>
                <BsChevronLeft
                  onClick={() => handleMonthChange(-1)}
                  style={{ cursor: 'pointer' }}
                />
                {year}년 {month}월
                <BsChevronRight
                  onClick={() => handleMonthChange(1)}
                  style={{ cursor: 'pointer' }}
                />
              </PrevMonth>
            </CalendarCell>
          </tr>
          <tr>
            <CalendarCell>월</CalendarCell>
            <CalendarCell>화</CalendarCell>
            <CalendarCell>수</CalendarCell>
            <CalendarCell>목</CalendarCell>
            <CalendarCell>금</CalendarCell>
            <CalendarCell>토</CalendarCell>
            <CalendarCell>일</CalendarCell>
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => (
                <CalendarCell
                  selectedDate={selectedDate}
                  key={dayIndex}
                  onClick={() => handleDateClick(day)}
                  style={{
                    backgroundColor:
                      day === selectedDate ? 'lightblue' : 'inherit',
                  }}
                >
                  {day}
                </CalendarCell>
              ))}
            </tr>
          ))}
        </tbody>
      </CalendarTable>
    </CalendarContainer>
  );
};

export default Calendar;
