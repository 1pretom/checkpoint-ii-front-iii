// import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ThemeProvider from "./context/theme-context";

function App() {
  // Definindo o estado "isDarkMode" como "false" por padrão
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // Função para alternar o estado do modo claro/escuro
  // function toggleDarkMode() {
  //   setIsDarkMode(!isDarkMode);
  // }

  // Definindo a classe correta com base no estado do modo claro/escuro
  // const appClassName = `app ${isDarkMode ? "dark" : "light"}`;

  // return (
  //   <>
  //     <div className={appClassName}>
  //       <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
  //       <main>
  //         <Outlet />
  //       </main>
  //       <Footer />
  //     </div>
  //   </>
  // );

  // return (
  //   <ThemeProvider>
  //   <div className={appClassName}>
  //       <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
  //        <main>
  //          <Outlet />
  //        </main>
  //        <Footer />
  //   </div>
  //   </ThemeProvider>
  // )

  return (
    <ThemeProvider>
      <div className={`app`}>
        <Navbar/>
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App;
