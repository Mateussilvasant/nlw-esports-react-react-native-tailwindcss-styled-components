import styled from "styled-components";
import tw from "twin.macro";

export type GameCardCSS = {
  url: string;
};

export const GameCardStyles = styled.li`
  ${(props: GameCardCSS) =>
    `background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 90%),url(${props.url});`}

  ${tw`
      m-3
      w-[180px]
      h-[240px]
      rounded-lg
      bg-no-repeat
    `}

  a {
    ${tw`
      w-full
      h-full
      flex
      flex-col
      justify-end
      `}
  }

  .ads-description {
    ${tw`
      flex
      flex-col
      items-start
      rounded
      mx-4
      mb-4
    `}
  }
`;
