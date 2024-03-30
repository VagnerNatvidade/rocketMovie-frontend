import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: max-content auto;
  grid-template-areas:
    "HEADER"
    "CONTENT";
  height: 100vh;
  margin: 0 auto;

  > main {
    grid-area: CONTENT;
    overflow-y: scroll;
    padding: 24px 124px;

    &::-webkit-scrollbar {
      width: 12px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: ${({ theme }) => theme.COLORS.PINK_900};
    }
  }
`;

export const NewMovie = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 32px;
  border: none;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLORS.PINK_900};
`;

export const Content = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
