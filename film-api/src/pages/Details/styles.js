import styled from "styled-components";

export const Container = styled.div`
  > main {
    padding: 24px 124px;
    text-align: justify;

    a {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      color: ${({ theme }) => theme.COLORS.PINK_900};

      svg {
        margin-right: 8px;
      }
    }

    div:nth-child(2) {
      display: flex;
      align-items: baseline;
      margin-bottom: 24px;

      h1 {
        margin-right: 18px;
      }

      svg {
        margin-right: 8px;
        font-size: 20px;
      }
    }

    div:nth-child(3) {
      display: flex;
      gap: 12px;
      margin-bottom: 40px;

      span {
        display: flex;
        align-items: center;
        gap: 4px;

        img {
          width: 24px;
          height: 24px;
          border-radius: 50%;
        }

        svg {
          color: ${({ theme }) => theme.COLORS.PINK_900};
        }
      }
    }

    > p {
      margin-top: 40px;
    }
  }
`;
