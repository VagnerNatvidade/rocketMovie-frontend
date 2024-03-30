import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0 0;
  padding: 32px;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLORS.PINK_500};

  footer {
    width: 100%;
    display: flex;
    margin: 32px 8px 0 0;
  }
`;
