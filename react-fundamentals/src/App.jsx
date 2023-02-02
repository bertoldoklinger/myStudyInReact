import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Bertoldo Klinger"
        content="Lorem ipsum dolor sit amet consectur"
      />

      <Post author="Gabriel Buzzi" content="Um bem legal" />
    </div>
  );
}
