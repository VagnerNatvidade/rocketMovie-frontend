import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <Section title="Meus filmes">
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
