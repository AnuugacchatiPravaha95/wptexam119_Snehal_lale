import "./App.css";
import axios from "axios";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyWhatsApp />
    </div>
  );
}
function MyWhatsApp() {
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const addUser = async () => {
    const url = "http://localhost:5000/add-user";
    const data = {
      message: message,
    };

    await axios.post(url, data);

    const newList = [data, ...list];
    setList(newList);

    setMessage("");
  };

  return (
    <div>
      <div className="bg-secondary text-white p-3 fs-1">
        My ChatApp by Snehal Lale 119
      </div>
      <div>
        <input
          className="w-75 m-1 "
          type="text"
          name=""
          id=""
          value={message}
          onChange={handleMessageChange}
          placeholder="Let's chat here..."
        />
        <input className="w-10" type="button" value="Send" onClick={addUser} />
      </div>

      {list.map((item, index) => (
        <div key={index} className=" alert alert-secondary m-1">
          {item.message}
        </div>
      ))}
    </div>
  );
}
