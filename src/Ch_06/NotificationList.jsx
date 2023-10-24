import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
     id: 1, 
     name : "민지",
      message: "안녕하세요!",
      imgUrl: "https://search.pstatic.net/common?type=n&size=174x196&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Fcdd163b6-fabd-4f95-9775-cc2f80d362ac.jpg",
  },
  {
     id: 2, 
     name : "하니",
      message: "안녕하세요 반가워요.",
      imgUrl:"https://search.pstatic.net/common?type=n&size=174x196&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Fbd7fff23-8e54-4f0a-86e5-a1140dd8a98a.jpg"
  },
  {
     id: 3, 
     name : "다니엘",
      message: "Hello!",
      imgUrl:"https://search.pstatic.net/common?type=n&size=174x196&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Fa0f317ad-e2e4-43dd-a7e2-a9d93a5c2099.jpg"
  },
  {
   id: 4, 
   name : "해린",
    message: "안녕하세요:)",
    imgUrl:"https://search.pstatic.net/common?type=n&size=174x196&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2Fa7af039a-27e3-4bb5-9f29-efd35b052948.jpg"
},
{
   id: 5, 
   name : "혜인",
    message: "안녕하세요",
    imgUrl:"https://search.pstatic.net/common?type=n&size=174x196&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2F74fe64c2-999f-42f4-be5d-2f938330e661.jpg"
},
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification
                            key={notification.id}
                            // id={notification.id}
                            name={notification.name}
                            message={notification.message}
                            imgUrl={notification.imgUrl}

                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;