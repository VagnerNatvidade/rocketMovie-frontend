import { Container, Form } from "./styles";

import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../service/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite um título");
    }

    if (newTag) {
      return alert("Vc deixou uma tag no campo e não adicionou ainda.");
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      // rating
    });

    alert("Nota criada com sucesso");
    navigate("/");
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
            <Input
              placeholder="Título"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input placeholder="Sua nota(de 0 a 5)" type="text" />
          </div>
          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />
          <div>
            <h2>Marcadores</h2>
            <div>
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <NoteItem
                isNew
                placeholder="Novo marcador"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </div>
          <div>
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" onClick={handleNewNote} />
          </div>
        </Form>
      </main>
    </Container>
  );
}
