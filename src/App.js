import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  // Тут распологается механизм роутинга
  return (
    <>
      <Header />
      <Main />
      <Footer />;
    </>
  );
}

export default App;
