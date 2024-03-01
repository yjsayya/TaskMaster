import React from 'react';
import styled from 'styled-components';

const CrudBox = styled.div`
  width: 98.5%;
  height: 40px;
  background-color: rgba(94, 91, 91, 0.219);
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  overflow: hidden;
`;

const Icon = styled.span`
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

function MemoCRUD() {
  return (
    <CrudBox>
      <Icon>✏️</Icon>
      <Icon>🗑️</Icon>
      <Icon>💾</Icon>
    </CrudBox>
  );
}

export default MemoCRUD;
