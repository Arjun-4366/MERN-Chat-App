import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainContainer from "./Components/MainContainer";
import Login from "./Components/Login";
import ChatHome from "./Components/ChatHome";
import Chatlist from "./Components/Chatlist";
import ChatArea from "./Components/ChatArea";
import UserGroups from "./Components/UserGroups";
import CreateGroup from "./Components/CreateGroup";

import AllUsers from "./Components/AllUsers";
import Register from "./Components/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<ChatHome />} />
          <Route path="chat" element={<ChatArea />} />
          <Route path="createGroup" element={<CreateGroup />} />
          <Route path="users" element={<AllUsers />} />
          <Route path="groups" element={<UserGroups />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
