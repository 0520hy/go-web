import React,{useState} from "react";
import WordList from "./WordList";



function Button(props) {
  const [showWarning, setShowWarning] = useState(false);

  const handleToggleClick = () => {
    setShowWarning(prevshowWarning=> !prevshowWarning);
  }
  return(
    <div>
      <WarningBanner warning = {showWarning}/>
      <button onClick={handleToggleClick}>
        {showWarning ? '닫기':'열기'}
      </button>
    </div>
  )
}

function WarningBanner(props){
  if(!props.warning) {
    return null;
  }
  return(
    <div><WordList/></div>
  )
}

export default Button;