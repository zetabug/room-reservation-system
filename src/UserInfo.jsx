import { useState, useEffect, useContext } from "react";
import Space from "./space";

export default function UserInfo() {
  const { userData, rooms } = useContext(Space);
  const [table, setTable] = useState([]);

  useEffect(() => {
    if (rooms) {
      const v = rooms.filter((n) => n.isReserved);
      setTable(v);
    }
  }, [rooms]);

  return (
    <div className="userInfo">
      {userData && (
        <div>
          <span>
            Hello {userData.firstname} {userData.lastname} <br />
            <br />
          </span>
          <span>Available Credits: {userData.credits}</span>
        </div>
      )}
      {table.length > 0 ? (
        <div className="table__container">
          <h3>Reserved Rooms</h3>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <th>Room no.</th>
                <th>Room Cost</th>
              </tr>
              {table.map((x) => (
                <tr key={x.roomNumber}>
                  <td>{x.roomNumber}</td>
                  <td>{x.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
