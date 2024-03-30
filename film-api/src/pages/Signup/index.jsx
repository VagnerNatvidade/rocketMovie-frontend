import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Signup() {
  return (
    <Container>
      <Form>
        <h1>RcoketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Faça seu login</h2>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para o início
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
