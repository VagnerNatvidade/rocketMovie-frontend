import { Container } from "./styles";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h1>Rocketmovies</h1>
      <Input placeholder="Pesquisar pelo título" />
      <div to='/profile'>
        <div>
          <p>
            Vagner Junior
            <span> sair </span>
          </p>
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/142853004?v=4"
          alt="imagem do usuário"
        />
      </div>
    </Container>
  );
}
