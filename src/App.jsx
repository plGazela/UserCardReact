import user from "./data/user.json";
import "./App.css";
import UserCard from "./components/UserCard";
import "bootstrap-icons/font/bootstrap-icons.min.css";

function App() {
  return (
    <section className="app">
      <UserCard user={ user } />
    </section>
  );
}

export default App;