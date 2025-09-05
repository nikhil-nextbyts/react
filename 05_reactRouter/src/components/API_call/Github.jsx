import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState({});

  useEffect(() => {
    let URL = "https://api.github.com/users/octocat";
    
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="h-96 flex flex-col bg-fuchsia-200 justify-center items-center">
      <h2>test</h2>
      <div className="flex justify-center text-3xl py-3 my-2">
        <img src={data.avatar_url} alt="picture" className="h-48 mx-3" />
        <h3>rates : {data.followers}</h3>
      </div>
    </div>
  );
}

export default Github;
