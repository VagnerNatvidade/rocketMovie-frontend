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

  }
`;
