import { Container } from "./styles";

import { Input } from "../Input";
import { Avatar } from "../Avatar";

export function Header() {
  return (
    <Container>
      <h1>Rocketmovies</h1>
      <Input placeholder="Pesquisar pelo título" />
      <Avatar />
    </Container>
  );
}
