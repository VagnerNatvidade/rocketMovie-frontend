import { Container, Header, Content } from "./styles";

import { Link } from "react-router-dom";
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi";
import { useState } from "react";

import { useAuth } from "../../hooks/auth";
import { api } from "../../service/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();
  
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };

    await updateProfile({ user, avatarFile });
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file);

    const imgPreview = URL.createObjectURL(file);
    setAvatar(imgPreview);
  }

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
          <img src={avatar} alt="imagem do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
          <div>
            <Input
              placeholder="Nome"
              type="text"
              icon={FiUser}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="E-mail"
              type="mail"
              icon={FiMail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Input
              placeholder="Senha atual"
              type="password"
              icon={FiLock}
              onChange={(e) => setPasswordOld(e.target.value)}
            />
            <Input
              placeholder="Nova Senha"
              type="password"
              icon={FiLock}
              onChange={(e) => setPasswordNew(e.target.value)}
            />
          </div>
        </div>
        <Button title="Salvar" onClick={handleUpdate} />
      </Content>
    </Container>
  );
}
