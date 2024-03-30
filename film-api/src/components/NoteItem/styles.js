import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  padding-right: 16px;
  border-radius: 10px;

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.BACKGROUND_800}` : "none"};
  background: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  > button {
    border: none;
    background: none;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK_900};
    }
  }

  > input {
    height: 56px;
    padding: 12px;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;
