import { FiPlus } from "react-icons/fi";
import { Container, Content, NewMovie } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { Rating } from "../../components/Rating";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <Section title="Meus filmes">
            <NewMovie to="/new">
              <FiPlus />
              Adicionar filme
            </NewMovie>
            <Note
              data={{
                title: "Interestelar",
                tags: [
                  { id: "1", name: "Ficção científica" },
                  { id: "2", name: "Drama" },
                  { id: "3", name: "Família" },
                ],
              }}
            />
          </Section>
        </Content>
      </main>
    </Container>
  );
}
