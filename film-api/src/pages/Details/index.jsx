import { Container } from "./styles";

import { FiArrowLeft, FiClock } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { api } from "../../service/api";

import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { Rating } from "../../components/Rating";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchNote() {
      const res = await api.get(`/notes/${params.id}`);
      setData(res.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <a href="/">
            <FiArrowLeft />
            Voltar
          </a>
          <div>
            <h1>{data.title}</h1>
            <Rating />
          </div>
          <div>
            <span>
              <img
                src="https://avatars.githubusercontent.com/u/142853004?v=4"
                alt="imagem do usuário"
              />
              <p>Por Vagner Junior</p>
            </span>
            <span>
              <FiClock />
              <p>29/05/24 ás 08:00</p>
            </span>
          </div>
          <Tag title="Ficção científica" />
          <p>{data.description}</p>
        </main>
      )}
    </Container>
  );
}
