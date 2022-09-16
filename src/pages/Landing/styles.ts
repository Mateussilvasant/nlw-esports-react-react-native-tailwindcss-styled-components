import styled from "styled-components";
import tw from "twin.macro";

export const LandingStyles = styled.div`
  ${tw`
      flex
      flex-col
      items-center
      my-16
    `}

  main {
    ${tw` 
      flex
      flex-col
      items-center
      px-[74px]
      flex-wrap
    `}

    ul {
      ${tw`
          list-none
          flex
          flex-row
        `}
    }

    .title-ads {
      ${tw`
          text-center
          my-16
      `}

      h1 {
        ${tw`
        text-6xl  
        font-black 
      text-white
        text-center sm:text-left
      `}
      }

      span {
        ${tw` 
        text-transparent  
        bg-clip-text 
        bg-nlw-gradient 
      `}
      }
    }

    .custom-border {
      ${tw`
        w-full
        h-full
        pt-2
        m-8
        bg-nlw-gradient-border
        rounded-t-2xl	  
        rounded-b-3xl	       
      `}

      .publish-ads {
        ${tw`
          flex
          flex-row
          w-full
          justify-between
          items-center
        bg-violet-700
          py-6
          px-8
          rounded-t-[7.5px] 
          rounded-b-2xl	       
        `}

        section {
          ${tw`
          h-full
          w-full     
    
        `}

          h2 {
            ${tw`
            text-white
            text-2xl
            font-black
          `}
          }

          p {
            ${tw`
            text-base 
            font-normal
            leading-[-0.18px]
            mt-2
            text-zinc-400
          `}
          }
        }
      }
    }
  }
`;
