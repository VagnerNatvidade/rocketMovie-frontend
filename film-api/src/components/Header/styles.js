import styled from "styled-components";

export const Container = styled.header`
  height: max-content;
  grid-area: "HEADER";
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 124px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK_900};
  }

  > div {
    display: flex;
    align-items: center;

    p {
      width: 124px;
      text-align: end;
      margin-right: 8px;

      span {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
      }
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
