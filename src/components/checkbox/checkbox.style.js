import styled from "styled-components";

export const CheckboxInput = styled.input`
  appearance: none;
  background-color: inherit;
  margin: 0;
  font: inherit;
  color: rgb(255 153 90);
  width: 20px;
  height: 20px;
  border: 2px solid currentColor;
  border-radius: 50%;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em rgb(255 153 90);
  }

  &:checked::before {
    transform: scale(1);
  }
`;