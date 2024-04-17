import { Container, Content, NewMovie } from "./styles";

import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";

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
