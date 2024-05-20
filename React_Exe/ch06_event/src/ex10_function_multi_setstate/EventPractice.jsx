import React, { useState } from "react";

// 클래스에서 1개 이벤트 메서드로 다수의 요소를 처리하는 방식을
// 함쉥서도 사용하기 위해서 추가한 기법

const EventPractice = () => {
  // form은 username과 message를 변수로 갖는 객체가 저장됨
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  // 이벤트 핸들러 함수
  const { username, message } = form;
  const onChange = (e) => {
    // 기존 form객체 변수를 갱신한 새로운 nextForm 객체 생성
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    };
    // 객체는 참조값으로 관리되므로, 새로운 객체를 전달해야 Hook이 이벤트를 받음
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") onClick();
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
