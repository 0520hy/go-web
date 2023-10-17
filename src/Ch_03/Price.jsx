import React from "react";
import Bag from "./Bag";

function Price(props) {
  return(
    <div>
      <Bag name="칼하트" numOfPrice={30000}/>
      <Bag name="뉴발란스" numOfPrice={40000}/>
      <Bag name="나이키" numOfPrice={50000}/>
    </div>
  )
}
export default Price;