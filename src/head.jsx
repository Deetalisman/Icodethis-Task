import styled from "styled-components";
function Head() {
  const Div = styled.div`
    background-color: #54485f;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
  `;
  return (
    <Div>
      <h1>Task Name</h1>
      <h1>X</h1>
    </Div>
  );
}

export default Head;
