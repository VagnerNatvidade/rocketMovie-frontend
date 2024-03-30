import { Container } from "./styles";
import { Button } from "../Button";

export function Section({ title, children }) {
  return (
    <Container>
      <div>
        <h2>{title}</h2>
        <Button title="+ Adicionar filme"></Button>
      </div>
      {children}
    </Container>
  );
}
