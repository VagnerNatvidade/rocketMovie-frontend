import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const NewMovie = styled(Link)`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 32px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  background: ${({ theme }) => theme.COLORS.PINK_900};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const Content = styled.div`
  position: relative;

  h2 {
    margin-bottom: 12px;
  }
`;
