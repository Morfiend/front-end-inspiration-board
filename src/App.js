import "./App.css";
import ListOfBoards from "./components/ListOfBoards";
import NewBoard from "./components/NewBoard";
import ListOfCards from "./components/ListOfCards";
import NewCard from "./components/NewCard";

function App() {
  return (
    <>
      <header>
        <h1>INSPO BOARD</h1>
        {/* need form components?? */}
        <ListOfBoards />
        <NewBoard />
      </header>
      <main>
        <NewCard />
        <ul>
          <li>board contents will go here</li>
        </ul>
      </main>
      <footer>current board selection name</footer>
    </>
  );
}

export default App;
