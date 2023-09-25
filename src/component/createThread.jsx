import { useState } from "react";

function New() {
  const [text, setText] = useState("");

  const onClickButton = () => {
    // リクエストを送信
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: text,
        }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setText("");
        console.log(data);
      })
      .catch((error) => {
        console.log("エラーが発生しました: ");
      });
  };

  return (
    <>
      <h2>新しいスレッドを立てよう！！</h2>
      <form className="form">
        <input value={text} onChange={(event) => setText(event.target.value)} />
        <button onClick={onClickButton}>送信</button>
      </form>
    </>
  );
}

export default New;
