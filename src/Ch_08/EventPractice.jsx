import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    correct: '',
    total: '',
  });
  const { correct, total } = form;
  const [scoreMessage, setScoreMessage] = useState('');

  const onChange = (e) => {
    setTimeout(() => console.log(e), 500);
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    const score = (correct / total) * 100;
    setScoreMessage(
      '맞은 단어 개수: ( ' + correct +
      ' ) 총 단어 개수: ( '+ total + '\n' +
      ' )  점수는 ' + score + '점 입니다.'
    );
    
    setForm({
      correct: '',
      total: '',
    });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

 return (
   <div>
     <h2>점수 환산</h2>
     <input
       type="text"
       name="correct"
       placeholder="맞은 단어 개수"
       value={correct}
       onChange={onChange}
     />

     <input
       type="text"
       name="total"
       placeholder="총 단어 개수"
       value={total}
       onChange={onChange}
       onKeyPress={onKeyPress}
     />
     
     <button onClick={onClick}>확인</button>
     
     {scoreMessage && <p>{scoreMessage}</p>}
   </div>
 );
};

export default EventPractice;
