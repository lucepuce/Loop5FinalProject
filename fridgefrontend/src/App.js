import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserPage from "./components/UserPage";
import ItemsPage from "./components/ItemsPage";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import {UserAuthContextProvider} from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AddItem from "./components/AddItem";
import ItemInfo from "./components/ItemInfo";
import MiniGame from "./components/Minigame";
import CloudsBg from "./components/subcomponents/CloudsBg";

function App() {
  return (
    <UserAuthContextProvider>
      <CloudsBg />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="home" element={<Home />} />
          <Route path="user" element={<UserPage />} />
          <Route path="items" element={<ItemsPage />} />
          <Route path="items/add" element={<AddItem />} />
          <Route path="items/:id" element={<ItemInfo />} />
          <Route path="minigame" element={<MiniGame/>} />
          <Route path="*" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </UserAuthContextProvider>
  );
}
export default App;
