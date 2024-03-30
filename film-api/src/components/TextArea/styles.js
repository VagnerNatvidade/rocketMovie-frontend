import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;
  margin: 24px 0;
  padding: 16px;
  border: none;
  border-radius: 10px;
  resize: none;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;
