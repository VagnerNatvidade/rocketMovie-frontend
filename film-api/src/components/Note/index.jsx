import { Container } from "./styles";

import { Tag } from "../Tag";
import { Rating } from "../Rating";

export function Note({ title, data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Rating />
      <p>{data.description}</p>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
