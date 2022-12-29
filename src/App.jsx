import { createGlobalStyle } from "styled-components";
import { HeaderPage } from "./components/HeaderPage";
import { Map } from "./components/Map";
import { Weapon } from "./components/Weapon";
import Agent from "./components/Agent";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HeaderPage />} />
        <Route path="/:id" element={<Agent />} />
        <Route path="/maps/:id" element={<Map />} />
        <Route path="/weapons/:id" element={<Weapon />} />
      </Routes>
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Saira', sans-serif;

}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}

:root {
  --background: #232946;
  --headline: #fffffe;
  --paragraph: #b8c1ec;
  --button: #eebbc3;
  --button_text: #232946;
  --card_background: #d4d8f0;
}


`;
