import { Container } from "./styles";
import { Tag } from "../Tag";
import { Rating } from "../Rating";

export function Note({ title, data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Rating />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo eos
        nulla inventore dolorem non earum molestias ipsa porro aspernatur
        dignissimos, suscipit labore iusto neque nemo quia quis? Dolor, ullam!
        Expedita.
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
