import styled from "styled-components";

export const AboutContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 90vw;
    height: 55vh;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;

    .title {
      font-size: 2.375rem;
      background: linear-gradient(
        -225deg,
        #231557 0%,
        #44107a 29%,
        #ff1361 67%,
        #fff800 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .content {
      font-size: 1.6875rem;
      font-family: "Ubuntu", sans-serif;
      width: 43.75rem;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    width: 90vw;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    .title {
      font-size: 1.16375rem;
      background: linear-gradient(
        -225deg,
        #231557 0%,
        #44107a 29%,
        #ff1361 67%,
        #fff800 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .content {
      font-size: 0.826875rem;
      font-family: "Ubuntu", sans-serif;
      width: 21.4375rem;
    }
  }
  @media screen and (max-width: 768px) {
    width: 90vw;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    .title {
      font-size: 1.16375rem;
      background: linear-gradient(
        -225deg,
        #231557 0%,
        #44107a 29%,
        #ff1361 67%,
        #fff800 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .content {
      font-size: 0.826875rem;
      font-family: "Ubuntu", sans-serif;
      width: 21.4375rem;
    }
  }
`;
