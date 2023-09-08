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
        if (response.ok) {
          return response.json();
        } else {
          // エラーレスポンスを受け取った場合の処理
          console.log("リクエストが失敗しました");
        }
      })
      .then((data) => {
        setText("");
        console.log(data);
      })
      .catch((error) => {
        // リクエスト送信中にエラーが発生した場合の処理
        console.log("エラーが発生しました: " + error.message);
      });
  };

  return (
    <>
      <h2>新しいスレッドを立てよう！！</h2>
      <div className="form">
        <input value={text} onChange={(event) => setText(event.target.value)} />
        <button onClick={onClickButton}>送信</button>
      </div>
    </>
  );
}

export default New;
