import { Container, Form } from "./styles";

import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useState } from "react";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

export function New() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLinks] = useState("");

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>
            <h1>Novo filme</h1>
          </header>
          <div>
            <Input placeholder="Título" type="text" />
            <Input placeholder="Sua nota(de 0 a 5)" type="text" />
          </div>
          <TextArea placeholder="Observações" />
          <div>
            <h2>Marcadores</h2>
            <div>
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </div>
          <div>
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
