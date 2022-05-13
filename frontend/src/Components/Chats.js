import React, { useEffect, useState } from "react";
import axios from "axios";

function Chats() {
  const [chats, setChats] = useState(["ss", "sss"]);
  const [is, setIs] = useState(false);
  useEffect(() => {
    const fetchChats = async () => {
      const { data } = await axios.get("/api/chats");
      setChats(data);
    };
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((e) => (
        <div key={e._id}>{e.chatName}</div>
      ))}
      Chats
    </div>
  );
}

export default Chats;
