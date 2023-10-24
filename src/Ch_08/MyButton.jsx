import React, { useState} from "react";


// class MyButton extends React.Component {
//   handleClick = () =>{
//     console.log('this is:', this);
//   }
//   render(){
//     return(
//       <button onClick={this.handleClick}>
//         클릭
//       </button>
//     )
//   }
// }


function MyButton(props){ // 함수 컴포넌트에서 이벤트 핸들러에 매개변수 전달방법
  const handleDelete = (id, event)=>{
    console.log(id, event.target);
  }
  return(
    <button onClick={(event)=> handleDelete(1,event)}>삭제하기</button>
  )
}

export default MyButton;