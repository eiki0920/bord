import "./App.css";
import { ThreadsList } from "./component/threads";
import New from "./component/createThread";
import { ThreadComment } from "./component/threadComments";
import { Link, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <header>
          <Link to="/">掲示板</Link>
          <Link to="/thread/new">新しいスレッドを立てる</Link>
        </header>

        <Routes>
          <Route path="/" element={<ThreadsList />} />
          <Route path="/thread/new" element={<New />} />
          <Route path="/thread/:thread_id" element={<ThreadComment />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
