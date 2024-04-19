import { Container, Content, NewMovie } from "./styles";

import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";

import { api } from "../../service/api";

import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";

export function Home() {
  const [notes, setNotes] = useState([]);

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const res = await api.get("/notes");
      console.log(res);
      setNotes(res.data);
    }

    fetchNotes();
  }, []);

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
            {notes.map((note) => (
              <Note key={String(note.id)} data={note} onClick={handleDetails} />
            ))}
          </Section>
        </Content>
      </main>
    </Container>
  );
}
