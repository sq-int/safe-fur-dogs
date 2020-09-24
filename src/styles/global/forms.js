import styled from "styled-components";

export const MainSearch = styled.form`
  margin: 0;
  width: 50%;
  display: flex;

  @media (max-width: 700px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 80%;
  }

  input[type="text"] {
    width: 90%;
    height: 5rem;
    border: none;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    padding-left: 1rem;
    font-size: 2rem;
    font-weight: 300;
    line-height: 2.2rem;

    &:focus {
      outline: 1px solid #c4c4c4;
    }
  }

  button {
    width: 10%;
    height: 5rem;
    border: none;
    background: #c4c4c4;
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus {
      outline: 1px solid #c4c4c4;
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }

    &:hover {
      cursor: pointer;
    }

    img {
      height: 3rem;
      width: 100%;
    }
  }
`;

export const TextInput = styled.input.attrs((props) => ({
  type: "text",
}))`
  font-family: "Nunito", sans-serif;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : null)};
  margin: ${(props) => (props.margin ? props.margin : null)};
  padding-left: 0.5rem;
  font-size: ${(props) => (props.fontSize ? props.fontSize : null)};
`;

export const Button = styled.button`
  font-family: "Nunito", sans-serif;
  background: ${(props) => (props.bgColor ? props.bgColor : null)};
  color: ${(props) => (props.color ? props.color : "#000000")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.4rem")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  width: ${(props) => (props.width ? props.width : null)};
  height: ${(props) => (props.height ? props.height : null)};
  margin: ${(props) => (props.margin ? props.margin : null)};
  padding: ${(props) => (props.padding ? props.padding : null)};
  border: ${(props) => (props.border ? props.border : `none`)};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : null)};
  transition: all 300ms;

  &:hover {
    cursor: pointer;
    transition: opacity 300ms;
    opacity: 0.9;
  }
`;

export const FormLabel = styled.label`
  font-family: "Nunito", sans-serif;
  color: ${(props) => (props.color ? props.color : "#000000")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.4rem")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  width: ${(props) => (props.width ? props.width : null)};
  height: ${(props) => (props.height ? props.height : null)};
  margin: ${(props) => (props.margin ? props.margin : null)};
  padding: ${(props) => (props.padding ? props.padding : null)};
`;
