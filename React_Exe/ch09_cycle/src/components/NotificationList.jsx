import React, { Component } from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id: 1,
    message: "안녕하세요. 오늘 일정을 알려드립니다.",
  },
  {
    id: 2,
    message: "점심 식사 시간입니다.",
  },
  {
    id: 3,
    message: "이제 곧 미팅이 시작됩니다.",
  },
];

let timer;

class NotificationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  // 컴포넌트 시작 시 호출
  componentDidMount() {
    const { notifications } = this.state;
    // 컴포넌트가 시작되면 timer가 1초 단위로 반복함
    // 1초에 한 번씩 reservedNotification에 잇는 데이터를 notifications에 저장함
    // 모두 저장했으면 타이머 종료
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

  // 컴포넌트 종료 시 호출
  componentWillUnmount() {
    if (timer) clearInterval(timer);
  }

  // 화면에 그릴 때 호출
  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;
