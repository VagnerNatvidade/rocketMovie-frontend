import { Container } from "./styles";

export function Avatar() {
  return (
    <Container to="/profile">
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
    </Container>
  );
}
