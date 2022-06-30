import "./App.css";
import ListOfBoards from "./components/ListofBoards";
import NewBoard from "./components/newBoard";
import ListOfCards from "./components/ListOfCards";

function App() {
  return (
    <>
      <header>
        <h1>INSPO BOARD</h1>
        // need form components??
        <form>Choose a board</form>
        <form>Create a board</form>
      </header>
      <main>
        <button>ADD</button>
        <ul>
          <li>board contents will go here</li>
        </ul>
      </main>
      <footer>current board selection name</footer>
    </>
  );
}

export default App;
