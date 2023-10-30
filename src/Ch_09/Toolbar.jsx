import React from "react";

const styles = {
    wrapper: {
      padding: 16,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between", 
      alignItems: "center",
      borderBottom: "1px solid grey",
      backgroundColor: "#E6E6E6"
        
    },
    greeting: {
        marginRight: 8,
        
    },
  

};



function Toolbar(props) {
    const { isLoggedIn, onClickLogin, onClickLogout } = props;

    return (
        <div style={styles.wrapper}>
         <h2 style={{textAlign: "left"}}>Webprogramming</h2>
            {isLoggedIn && <span style={styles.greeting}>안녕하세요! </span>}

            {isLoggedIn ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogin}>로그인</button>
            )}
        </div>
    );
}

export default Toolbar;