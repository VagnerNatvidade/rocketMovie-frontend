import { Container, Header, Content } from "./styles";

import { Link } from "react-router-dom";
import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <Header>
        <Link to="/">
          <FiArrowLeft />
          voltar
        </Link>
      </Header>
      <Content>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/142853004?v=4"
            alt="imagem do usuário"
          />
          <div>
            <Input placeholder="Nome" type="text" icon={FiUser} />
            <Input placeholder="E-mail" type="mail" icon={FiMail} />
          </div>
          <div>
            <Input placeholder="Senha atual" type="password" icon={FiLock} />
            <Input placeholder="Nova Senha" type="password" icon={FiLock} />
          </div>
        </div>
        <Button title="Salvar" />
      </Content>
    </Container>
  );
}
