import Rooms from "./Rooms";
import UserInfo from "./UserInfo";
import { useState, useEffect } from "react";
import { fetchRoomsDetails, fetchUserDetails } from "./utils";
import Space from "./space";

export default function Sub() {
  const [rooms, setRooms] = useState(null);
  const [userData, setUserData] = useState(null);

  async function p() {
    await fetchRoomsDetails().then((d) => setRooms(d));
    await fetchUserDetails().then((d) => setUserData(d));
  }

  useEffect(() => {
    if (!rooms && !userData) {
      p();
    }
  });

  return (
    <Space.Provider value={{ rooms, setRooms, userData, setUserData }}>
      <div className="sub">
        <div className="left">
          <Rooms />
        </div>

        <div className="right">
          <UserInfo />
        </div>
      </div>
    </Space.Provider>
  );
}
