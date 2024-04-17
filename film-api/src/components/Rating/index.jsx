import { Container } from "./styles";
import { useState } from "react";
import { BiSolidStar } from "react-icons/bi";

export function Rating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <Container>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label>trdzq
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <BiSolidStar
              color={currentRating <= (hover || rating) ? "pink" : "gray"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </Container>
  );
}
