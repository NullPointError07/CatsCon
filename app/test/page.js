"use client";

import { useEffect, useState } from "react";

const Test = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://35d2-35-184-201-144.ngrok.io/diabetes_prediction"
        );

        const data = await response.json();
        console.log(data);
        setDatas(data);
        // console.log(data); [testing purpose]
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // Call the async function here
  }, []);

  return <div>Test</div>;
};

export default Test;
