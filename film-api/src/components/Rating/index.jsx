import { BiStar } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";
import { Container } from "./styles";

export function Rating() {
  return (
    <Container>
      <BiSolidStar />
      <BiStar />
      <BiStar />
      <BiStar />
      <BiStar />
    </Container>
  );
}
