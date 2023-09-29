import { useContext } from "react";
import Space from "./space";

export default function Rooms() {
  const { rooms, setRooms, userData, setUserData } = useContext(Space);
  function handleClick(item) {
    if (item.cost > userData.credits && !item.isReserved) {
      return;
    }

    const newData = [...rooms].map((n) => {
      if (n.roomNumber === item.roomNumber) {
        if (n.isReserved) {
          setUserData({ ...userData, credits: userData.credits + n.cost });
          return { ...n, isReserved: false };
        } else {
          setUserData({ ...userData, credits: userData.credits - n.cost });

          return { ...n, isReserved: true };
        }
      } else {
        return n;
      }
    });

    setRooms(newData);
  }
  return (
    <div className="rooms__container">
      {rooms &&
        rooms.map((x) => {
          return (
            <div
              className="room__box"
              onClick={() => handleClick(x)}
              key={x.roomNumber}
            >
              <span style={{ color: "white" }}>R{x.roomNumber}</span>
              <span style={{ color: "white" }}>Cost:{x.cost}</span>
              {userData && x.isReserved ? (
                <span style={{ color: "blue" }}>Reserved</span>
              ) : userData && x.cost <= userData.credits ? (
                <span style={{ color: "#39FF14" }}>Available</span>
              ) : (
                <span style={{ color: "#FF3131" }}>Not enough credits</span>
              )}
            </div>
          );
        })}
    </div>
  );
}
