import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CommentCreate } from "./commentCreate";

export const ThreadComment = () => {
  const params = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(
      `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${params.thread_id}/posts?offset=0`
    )
      .then((response) => {
        return response.json();
      })
      .then((thread) => {
        if (thread.posts) {
          setComments(thread.posts);
          console.log(thread.posts);
        } else {
          setComments([]);
          console.log("コメントはありません");
        }
      });
  }, [params.thread_id]);

  return (
    <>
      <div className="main">
        <h2>新着スレッド</h2>

        {comments ? (
          <ul className="ViewThreadComments">
            {comments.map((comment) => (
              <li key={comment.id}>{comment.post}</li>
            ))}
          </ul>
        ) : (
          <span>コメントはありません</span>
        )}

        <CommentCreate threadId={params.thread_id} />
      </div>
    </>
  );
};
