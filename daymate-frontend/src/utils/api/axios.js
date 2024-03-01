import axios from 'axios';
import React from 'react';

//get 요청
export const getItem = async () => {
  const response = await axios.get(
    'http://localhost:8080/api/events/${eventAt}'
  );
  console.log('서버와 연결 성공!');
  return response;
};

export const detailItem = async (payload) => {
  const response = await axios.get(`/api${payload}`);
  return response;
};

//post 요청
export const postItem = async (payload) => {
  const response = await axios.post('/api', payload);
  console.log(payload);
  return response;
};

//delete 요청
export const delItem = async (payload) => {
  console.log(payload);
  const response = await axios.delete(`/api/${payload}`);
  console.log(payload);
  return response;
};

//put요청
export const putItem = async ({ id, put }) => {
  console.log({ id });
  console.log(put);
  const response = await axios.put(`http://localhost:4001/posts/${id}`, put);
  console.log(response);
  console.log(id);
  console.log(put);
  return response;
};
