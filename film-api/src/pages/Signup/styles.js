import styled from "styled-components";
import backgroundImg from "../../assets/cinema.png";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 136px;
  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK_900};
  }

  > h2 {
    margin: 48px 0;
    font-size: 24px;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 40px;
    color: ${({ theme }) => theme.COLORS.PINK_900};

    svg {
      font-size: 18px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: brightness(0.4);
`;
