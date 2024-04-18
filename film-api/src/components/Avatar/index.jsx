import { Container } from "./styles";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { api } from "../../service/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Avatar() {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleClickToProfile() {
    navigate("/profile");
  }

  return (
    <Container>
      <div>
        <p>
          {user.name}
          <button onClick={signOut}> sair </button>
        </p>
      </div>
      <img onClick={handleClickToProfile} src={avatarUrl} alt={user.name} />
    </Container>
  );
}
