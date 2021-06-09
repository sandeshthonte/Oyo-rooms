import React, { useState, useEffect } from "react";

function GETFetch(url) {
  const [data, setdata] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  console.log(url);
  useEffect(() => {
    setTimeout(() => {
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          // if(!response.ok){
          //     throw new Error('Unable to fetch from server');
          // }
          return response.json();
        })
        .then((data) => {
          setdata(data);
          // console.log(data);
          setisPending(false);
          setError(null);
        })
        .catch((error) => {
          setisPending(false);
          setError(error.message);
          setdata(null);
        });
    }, 1000);
  }, []);

  return { data, isPending, error };
}

export default GETFetch;
