import { FiArrowLeft, FiClock } from "react-icons/fi";
import { Container } from "./styles";
import { Rating } from "../../components/Rating";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <a href="/">
          <FiArrowLeft />
          Voltar
        </a>
        <div>
          <h1>Interestellar</h1>
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum error,
          doloribus excepturi, dignissimos minus quis, voluptas culpa sit optio
          veniam quam eveniet dolorum nobis mollitia! Minus voluptates unde amet
          distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iure at odio a eos ipsum fugiat voluptate vitae maxime soluta dicta
          labore, commodi doloribus dolores ullam. Rem eius error architecto
          quibusdam!
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum error,
          doloribus excepturi, dignissimos minus quis, voluptas culpa sit optio
          veniam quam eveniet dolorum nobis mollitia! Minus voluptates unde amet
          distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iure at odio a eos ipsum fugiat voluptate vitae maxime soluta dicta
          labore, commodi doloribus dolores ullam. Rem eius error architecto
          quibusdam!
        </p>
      </main>
    </Container>
  );
}
