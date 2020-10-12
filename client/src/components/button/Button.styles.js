import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  background-color: #fff;
  border: 1px solid var(--sky);
  font-size: 16px;
  color: var(--ink);
  border-radius: 4px;
  line-height: 1.5;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  padding: 6px 12px;
  transition: background-color 0.2s ease-out, color 0.2s ease-out,
    border-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover {
    border-color: var(--sky);
    background-color: var(--sky-l3);
  }

  &:active {
    border-color: var(--sky);
    background-color: var(--primary-l4);
    box-shadow: inset 0 2px 0 0 rgba(33, 39, 54, 0.04);
  }

  &.focus-visible {
    border-color: var(--primary);
    box-shadow: 0 0 0 1px var(--primary), 0 1px 0 0 rgba(33, 39, 54, 0.12);
  }
`;

export const Styled = { Button };
