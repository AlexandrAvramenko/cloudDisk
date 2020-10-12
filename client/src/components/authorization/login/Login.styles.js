import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: center;
  background-color: #fff;
  color: var(--ink);
  border-radius: 20px;
  padding: 30px;
  align-self: center;
  margin: 100px auto;
  box-shadow: 0px 5px 11px 1px rgba(0, 0, 0, 0.2);
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Styled = {
  Form,
  Title,
};
