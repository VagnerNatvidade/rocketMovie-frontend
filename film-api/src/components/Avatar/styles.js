import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  align-items: center;

  p {
    width: 124px;
    text-align: end;
    margin-right: 8px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
