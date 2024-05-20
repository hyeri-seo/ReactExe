import React from 'react';
import { useState } from 'react';

/*
names에 새로운 데이터를 추가하는데
id는 nextId에서 가져오고,
입력 데이터는 inputText에서 가져와서
setNames를 통해서 새로운 데이터를 추가함
*/
 
const IterationSample = () => {
  const [names, setNames] = useState([
    {id: 1, text: "눈사람"},
    {id: 2, text: "얼음"},
    {id: 3, text: "눈"},
    {id: 4, text: "바람"},
  ]);
  const [inputText, setInputText] = useState('');

  // 현재 초기값의 마지막 id가 4이므로, 새롭게 추가될 항목의 id는 5로 제공
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    // 새로 부여된 id와 입력데이터를 가져와서, names에 새로 추가
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1);  // id는 unique해야 하므로 하나씩 증가
    setNames(nextNames);    // names에 새로운 데이터 추가
    setInputText("");       // 입력 필드는 비우기
  }

  const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);

  return(
    <>
      <input value={inputText} onChange={onChange}/>
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  )
};
 
export default IterationSample;