import { useEffect, useState } from "react";

const FetchUserData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchUser = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error("failed to fetch data...");
        }

        const data = await response.json();

        setData(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setLoading(false);
        console.log("fetching finished...");
      }
    };
    fetchUser();

    return () => {
      controller.abort();
    };
  }, []);

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default FetchUserData;
