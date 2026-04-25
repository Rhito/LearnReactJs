import React, { useEffect, useState, useMemo, useDeferredValue } from "react";

export default function Integration() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const deferredFilter = useDeferredValue(filter);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const result = await response.json();
        setIsLoading(false);
        setData(result);
      } catch (e) {
        console.error(`Error: ${e}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchingData();
  }, []);

  const filterUserData = useMemo(() => {
    return data?.filter((user) =>
      user.name.toLowerCase().includes(deferredFilter.toLowerCase()),
    );
  }, [data, deferredFilter]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {filterUserData?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}
