import Head from "./head";
import styled from "styled-components";
import Progress from "./progress";
import Foot from "./foot";
import Button from "./button";
function App() {
  const DIV = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: 100vh;
  `;
  return (
    <DIV>
      <nav>
        <Head />
        <Progress />
        <Foot />
        <Button />
      </nav>
    </DIV>
  );
}

export default App;
