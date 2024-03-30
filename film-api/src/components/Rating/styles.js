import styled from "styled-components";

export const Container = styled.div`
  margin: 12px 0;

  > svg {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.PINK_900};
  }
`;
