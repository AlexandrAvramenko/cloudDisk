import styled from "styled-components";

const Container = styled.div`
  width: 1170px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

const Navbar = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.backgroundHeader};

  .link {
    margin-right: 20px;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.linkHover};
    }
  }
`;

const Logo = styled.div`
  width: 50px;
  img {
    width: 100%;
  }
`;

const Brand = styled.div`
  margin-left: 15px;
  font-size: 24px;
  font-weight: 700;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Styled = {
  Navbar,
  Container,
  Logo,
  Brand,
  ListItem,
};
