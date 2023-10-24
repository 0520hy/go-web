import React,{useState} from "react";

function MainPage(props) {
  const [showWarning, setShowWarning] = useState(false);

  const handleToggleClick = () => {
    setShowWarning(prevshowWarning=> !prevshowWarning);
  }
  return(
    <div>
      <WarningBanner warning = {showWarning}/>
      <button onClick={handleToggleClick}>
        {showWarning ? '감추기':'보이기'}
      </button>
    </div>
  )
}

function WarningBanner(props){
  if(!props.warning) {
    return null;
  }
  return(
    <div>경고</div>
  )
}

export default MainPage;