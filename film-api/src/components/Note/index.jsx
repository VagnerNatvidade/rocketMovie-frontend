import { Container } from "./styles";

import { Tag } from "../Tag";
import { Rating } from "../Rating";

export function Note({ title, data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Rating />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        voluptatem architecto similique voluptates, adipisci dolores est minus
        magni quos officia nihil commodi tenetur, soluta reprehenderit delectus
        eaque in id culpa.
      </p>
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
