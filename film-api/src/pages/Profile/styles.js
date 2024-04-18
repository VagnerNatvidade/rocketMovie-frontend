import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "HEADER"
    "CONTENT";
  grid-template-rows: 144px auto;
`;

export const Header = styled.header`
  grid-area: HEADER;
  display: flex;
  align-items: center;
  padding: 24px 124px;
  background: ${({ theme }) => theme.COLORS.PINK_500};

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.PINK_900};
  }
`;

export const Content = styled.main`
  grid-area: CONTENT;
  width: 340px;
  margin: -100px auto;

  > div:nth-child(1) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 180px;
      height: 180px;
      margin-bottom: 40px;
      border-radius: 50%;
    }

    label {
      position: absolute;
      top: 140px;
      right: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: ${({ theme }) => theme.COLORS.PINK_900};
      cursor: pointer;

      > input {
        display: none;
      }

      > svg {
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      }
    }

    div {
      width: 100%;
    }

    div:nth-child(3) {
      margin-top: 12px;
    }
  }
`;
