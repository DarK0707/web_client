import React, { useEffect, useState } from "react";

import axios from "axios";

function Feedback() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const url = "https://shinesafelyapi.herokuapp.com/api/feedback";
      try {
        const result = await axios.get(url);
        setData(result.data);

        console.log();
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {data.map((item, i) => {
        return (
          <div key={i}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Feedback;
