import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 36px;
  padding: 0 12px;
  border: none;
  border-bottom: solid 1px var(--sky);
  font-size: 16px;
  line-height: 1.5;
  background-color: #fff;
  text-overflow: ellipsis;
  color: var(--ink);
  appearance: none;
  box-sizing: border-box;
  margin: 0 20px 10px;
  transition: color 0.2s ease-out, box-shadow 0.2s ease-out,
    border-color 0.2s ease-out;

  &:focus,
  &.focus-visible {
    box-shadow: none;
    outline: none;
    border-color: none;
  }

  &::placeholder {
    color: var(--ink-l3);
  }
`;

export const Styled = {
  Input,
};
