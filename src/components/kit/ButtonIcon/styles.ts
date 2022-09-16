import styled from "styled-components";
import tw from "twin.macro";

export const ButtonIconStyles = styled.button`
  ${tw`
        flex
        flex-row
        items-center
        rounded
        px-4
        py-3
        bg-violet-400
        h-12
    `}

  span {
    ${tw`
            ml-3
            leading-5
            text-base
            whitespace-nowrap	
    `}
  }
`;
