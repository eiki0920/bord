import { useState } from "react";

export const CommentCreate = (props) => {
  const [text, setText] = useState("");

  const onClickButton = () => {
    if (text) {
      fetch(
        `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${props.threadId}/posts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            post: text,
          }),
        },
        console.log(props.threadId)
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setText("");

          console.log(data);
        })
        .catch((error) => {
          console.log("エラーが発生しました");
        });
    } else {
      alert("コメントを入力してください");
    }
  };

  return (
    <>
      <div id="comment">
        <h2>スレッドにコメントをしよう</h2>
        <form>
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button onClick={onClickButton}>送信</button>
        </form>
      </div>
    </>
  );
};
