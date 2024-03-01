import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdAdd, MdDelete, MdEdit, MdDone, MdClear } from 'react-icons/md';
import MemoCRUD from './MemoCRUD';
import MemoPage from './MemoPage';
import { useMutation, useQueryClient, useQuery } from 'react-query';
import {
  getItem,
  postItem,
  delItem,
  putItem,
  detailItem,
} from '../../utils/api/axios';

const MemoContainer = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 500px;
  margin: 50px 0 0 20px;
  border: 1px solid rgba(128, 128, 128, 0.2);
`;

const TodoListBox = styled.div`
  width: 100%;
  height: 300px;
`;

const TodoList = styled.ul`
  width: 100%;
  padding: 0;
  list-style-type: none;
`;

const TodoItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
`;

const IconButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 10px;
  transition: color 0.3s;

  &:hover {
    color: #4caf50;
  }
`;

const TodoInput = styled.input`
  width: calc(100% - 30px);
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
`;

const Memo = ({ selectedDate }) => {
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTodo, setEditedTodo] = useState('');
  const queryClient = useQueryClient(); // QueryClient 인스턴스

  // 데이터 가져오기 쿼리
  const { data: todos, isLoading, isError } = useQuery('todos', getItem);

  // 새 메모 추가 뮤테이션
  const addMutation = useMutation(postItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  // 메모 삭제 뮤테이션
  const deleteMutation = useMutation(delItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos'); // 성공적으로 삭제되면 데이터를 다시 가져오도록 쿼리를 무효화
    },
  });

  // 메모 수정 뮤테이션
  const editMutation = useMutation(putItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });
  //
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  //엔터 시 추가
  const handleInputKeyDown = async (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      try {
        await addMutation.mutateAsync({
          title: inputValue.trim(),
          completeYn: 'N',
        });
        setInputValue('');
        setShowInput(false);
      } catch (error) {
        console.error('할 일을 추가하는 중 오류 발생:', error);
      }
    }
  };
  // input에 텍스트 쓰기
  const handleAddButtonClick = () => {
    setShowInput(true);
  };

  //삭제
  const deleteTodo = async (id) => {
    try {
      await deleteMutation.mutateAsync(id);
    } catch (error) {
      console.error('할 일을 삭제하는 중 오류 발생:', error);
    }
  };

  const startEditingTodo = (index, text) => {
    setEditingTodoId(index);
    setEditedTodo(text);
  };

  const cancelEditingTodo = () => {
    setEditingTodoId(null);
    setEditedTodo('');
  };

  //수정
  const saveEditedTodo = async (id, index) => {
    try {
      await editMutation.mutateAsync({ id, put: { title: editedTodo } });
      setEditingTodoId(null);
      setEditedTodo('');
    } catch (error) {
      console.error('할 일을 수정하는 중 오류 발생:', error);
    }
  };
  // if (isLoading) {
  //   return <p>로딩중입니다</p>;
  // }
  // if (isError) {
  //   return <p>오류발생</p>;
  // }

  return (
    <MemoContainer>
      <TodoListBox>
        <TodoList>
          {todos &&
            todos.map((todo, index) => (
              <TodoItem key={index}>
                {editingTodoId === index ? (
                  <>
                    <TodoInput
                      type='text'
                      value={editedTodo}
                      onChange={(e) => setEditedTodo(e.target.value)}
                    />
                    <IconButton onClick={() => saveEditedTodo(todo.id, index)}>
                      <MdDone />
                    </IconButton>
                    <IconButton onClick={cancelEditingTodo}>
                      <MdClear />
                    </IconButton>
                  </>
                ) : (
                  <>
                    <span>
                      {index + 1}.{todo.title}
                    </span>
                    <IconButton
                      onClick={() => startEditingTodo(index, todo.title)}
                    >
                      <MdEdit />
                    </IconButton>
                    <IconButton onClick={() => deleteTodo(todo.id)}>
                      <MdDelete />
                    </IconButton>
                  </>
                )}
              </TodoItem>
            ))}
          {showInput && (
            <TodoItem>
              <TodoInput
                type='text'
                placeholder='할일을 체크해주세용'
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
              />
            </TodoItem>
          )}
          {!showInput && (
            <TodoItem>
              <IconButton onClick={handleAddButtonClick}>
                <MdAdd />
              </IconButton>
            </TodoItem>
          )}
        </TodoList>
      </TodoListBox>
      <MemoPage />
      <MemoCRUD />
    </MemoContainer>
  );
};

export default Memo;
