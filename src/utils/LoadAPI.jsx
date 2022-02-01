import { useEffect } from "react";

const LoadAPI = (props) => {
  useEffect(() => {
    fetch(props.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props.sourceLink),
    }).then((response) =>
      response.json().then((data) => {
        console.log(data);
        if (props.loadPlayerObject !== undefined) {
          props.loadPlayerObject(data);
        }
      })
    );
  });

  return null;
};

export default LoadAPI;
