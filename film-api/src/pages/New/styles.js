import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "HEADER"
    "CONTENT";
  width: 100%;
  height: 100vh;

  > main {
    grid-area: CONTENT;
    overflow-y: auto;
    margin-top: 8px;

    &::-webkit-scrollbar {
      width: 8px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: ${({ theme }) => theme.COLORS.PINK_900};
    }
  }
`;

export const Form = styled.form`
  padding: 24px 124px;

  a {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.COLORS.PINK_900};

    svg {
      margin-right: 8px;
    }
  }

  h1 {
    margin-bottom: 24px;
  }

  > div:nth-child(2) {
    display: flex;
    gap: 24px;
  }
  
  > div:nth-child(4) {
    h2 {
      font-weight: 300;
      margin: 32px 0 24px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    
    > div {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      padding: 12px;
      border-radius: 10px;
      background: ${({ theme }) => theme.COLORS.PINK_500};
    }
  }

  > div:last-child {
    display: flex;
    gap: 24px;
    margin-top: 24px;

    button {
      flex: 1;
    }

    button:nth-child(1) {
      background: ${({ theme }) => theme.COLORS.PINK_500};
      color: ${({ theme }) => theme.COLORS.PINK_900};
    }
  }
`;
