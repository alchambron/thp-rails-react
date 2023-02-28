import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch("http://localhost:3000/articles");
      const fetchdata = await resp.json();
      setData(fetchdata);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return isLoading ? (
    "Loading..."
  ) : (
    <>
    <div>
      <h1> Créer un nouveau post</h1>
      <Link to="/posts/create">Nouveau</Link>
    </div>
      <div className="Content">
        {data.map((value) => (
          <>
            <h1>{value.title}</h1>
            <p>{value.content} </p>
          </>
        ))}
      </div>
    </>
  );
}
