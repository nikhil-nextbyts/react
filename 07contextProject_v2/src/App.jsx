import { TheamProvider } from "./context/theam"
import { useState, useEffect } from "react";
import TheamBtn from "./components/TheamBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme

  useEffect(() => {
    let page = document.querySelector("html");
    page.classList.remove("light", "dark");
    page.classList.add(themeMode);
  }, [themeMode]);


  return (
    <TheamProvider value={{ themeMode, lightTheme, darkTheme }}>
      <h1 className="bg-pink-400 text-center py-2">
        Change Theam with Context API!
      </h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <TheamBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </TheamProvider>
  );
}

export default App
