import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  p {
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    text-align: end;
    min-width: 120px;
    margin-right: 8px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &:hover {
      cursor: pointer;
    }

    button {
      border: none;
      background: none;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

    &:hover {
      cursor: pointer;
    }
  }
`;
