import React from "react";

function Bag(props) {
  return (
    <div>
      <h1>{`이 가방의 이름은 ${props.name}입니다.`}</h1>
      <h2>{`이 가방의 가격은 ${props.numOfPrice} 원 입니다`}</h2>
    </div>
  )
}
export default Bag;