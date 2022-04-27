import React, { useEffect, useState } from "react";
import "./main.css";

const Main = () => {
  const [fetch, setFetch] = useState(false);
  const [AllData, setAllData] = useState([]);
  useEffect(() => {
    if (fetch) {
      async function fetchData() {
        let res = await window.fetch(
          "https://swapi.dev/api/people/" + (Math.floor(Math.random() * 10) + 1)
        );
        let json = await res.json();
        setAllData([...AllData, json.name]);
        setFetch(false);
      }
      fetchData();
      // console.log(AllData);
    }
  });

  return (
    <div className="main">
      <button onClick={() => setFetch(true)} className="addrecord">
        Add Record
      </button>
      <div className="scroll">
        {AllData.length == 0 ? (
          <h1 className="Norecords">No Record</h1>
        ) : (
          AllData.map((ele, idx) => {
            return (
              <div key={idx} className="column">
                <h2>{ele}</h2>
                <button
                  className="delete"
                  onClick={() => {
                    setAllData(AllData.filter((item) => item !== ele));
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Main;
