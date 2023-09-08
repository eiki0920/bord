import { useState } from "react";
import { useEffect } from "react";

export const ThreadsList = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=1"
    )
      .then((response) => {
        return response.json();
      })
      .then((thread) => {
        console.log(thread);
        setThreads(thread);
      });
  }, []);

  return (
    <>
      {threads.map((thread) => (
        <p key={thread.id}>{thread.title}</p>
      ))}
    </>
  );
};
