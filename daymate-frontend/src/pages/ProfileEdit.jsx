import React from 'react';
import CommonTop from '../components/CommonTop';
import Edit from '../components/Edit';

function ProfileEdit() {
  return (
    <>
      <CommonTop text={'프로필 수정'} text1={'확인'} />
      <Edit />
    </>
  );
}

export default ProfileEdit;
