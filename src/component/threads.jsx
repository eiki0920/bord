import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const ThreadsList = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0"
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
      <div className="main">
        <h2>新着スレッド</h2>

        <div className="ViewThreads">
          {threads.map((thread) => (
            <Link to={`/thread/${thread.id}`} key={thread.id}>
              {thread.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
