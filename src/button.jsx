import styled from "styled-components";

function Button() {
  const Button = styled.button`
    background-color: rgb(128, 128, 233);
    font-size: 2rem;
    border: 0;
    padding: 1rem 1.6rem;
    float: right;
    margin-right: 4rem;
    color: white;
    border-radius: 0.4rem;
    box-shadow: 0px 5px 7px 10px rgb(205, 205, 236);
  `;
  const Dov = styled.div`
    background-color: white;
    height: 7rem;
  `;
  return (
    <Dov>
      <Button>Save</Button>
    </Dov>
  );
}

export default Button;
