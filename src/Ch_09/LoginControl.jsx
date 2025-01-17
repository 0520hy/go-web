import React,{useState} from "react";
function UserGreeting(props){
  return <h1>다시 오셨군요!</h1>
}

function GuestGreeting(props){
  return <h1>회원가입을 해주세요.</h1>
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;

  if(isLoggedIn){
    return <UserGreeting/>
  }
  return <GuestGreeting/>
}

function LoginButton(props){
  return <button onClick={props.onClick}>로그인</button>
}

function LogoutButton(props){
  return (
    <button onClick={props.onClick}>로그아웃
    </button>
  )
}

function LoginControl(props){
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handelLoginClick = () =>{
    setIsLoggedIn(true);
  }
  const handelLogoutClick=()=>{
    setIsLoggedIn(false);
  }
  // let button;
  // if(isLoggedIn){
  //   button = <LogoutButton onClick={handelLogoutClick}/>
  //  }else{
  //   button = <LoginButton onClick={handelLoginClick}/>
  //  }
  //  return(
  //   <div>
  //     <Greeting isLoggedIn = {isLoggedIn}/>
  //     {button}
  //   </div>
  //  )
  
  /*삼항연산자 */
 return(
  <div>
    <Greeting is isLoggedIn ={isLoggedIn}/>
    {isLoggedIn? <LogoutButton onClick={handelLogoutClick}/>
    : <LoginButton onClick={handelLoginClick}/>}
  </div>
 )

}

export default LoginControl;