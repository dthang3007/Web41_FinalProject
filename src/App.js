import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Home/Navbar";
import { CreatePost } from "./Components/Posts/CreatePost";
import { ListPost } from "./Components/Posts/ListPost";
import { Post } from "./Components/Posts/Post";
import { Topics } from "./Components/Topics/Topics";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route path="/create-post" component={CreatePost} />
        <Route path="/topics" component={Topics}  />
        <Route path="/bai-dang" component={Post}/>
        {/* <Route path="/tat-ca" component={ListPost} />
        <Route path="/quan-diem-tranh-luan"  component={ListPost} />
        <Route path="/science2vn" component={ListPost} />
        <Route path="/truyen-cam-hung" component={ListPost} />
        <Route path="/danh-muc-khac"  component={ListPost}/>
        <Route path="/author"/> */}
      </Switch>
    </div>
  );
}

export default App;
