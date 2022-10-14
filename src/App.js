import "./App.css";
import Favorites from "./components/Fovorites";
import Modal from "./components/Modal";
import Search from "./components/Search";
import Meals from "./components/Meals";
import { useGolbalContext } from "./context";

function App() {
  const { showModal, setShowModal } = useGolbalContext();
  return (
    <main>
      <Search />
      {/* <Favorites /> */}
      <Meals />
      {showModal && <Modal />}
    </main>
  );
}

export default App;
