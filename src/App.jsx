import { useState } from "react";
import Header from "./pages/header/header";
import Main from "./pages/main/main";
import Footer from "./pages/footer/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main></Main>
      <Footer />
    </>
  );
}

export default App;
