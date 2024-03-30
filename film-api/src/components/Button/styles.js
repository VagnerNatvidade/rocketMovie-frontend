import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.PINK_900};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 56px;
  margin-top: 16px;
  padding: 0 16px;
  border: 0;
  border-radius: 10px;
  font-weight: 800;

  &:disabled {
    opacity: 0.5;
  }
`;
