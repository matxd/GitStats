import styled from "styled-components";

export const CardContainer = styled.section`

  .cards{
    width: 250px;
    height: 250px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #33364E;
    padding: 19px 14px;
    border-radius: 10px;
    color: white;

      .icone{
        font-size: 2rem;
        width: 250px;
        display: flex;
        justify-content: space-between;

        .linkRepo{
          text-decoration: none;
          color: white;
          position: relative;

          &:hover{
            font-size: 2.3rem;
            transition: .7s;
          }

          &:hover::after{
            opacity: 1;
            pointer-events: all;
          }
            
          &::after{
            transition: .4s;
            pointer-events: none;
            white-space: nowrap;
            content: 'Visite o repositório';
            background-color: #474d7a;
            padding: 3px 4px;
            border-radius: 5px;
            font-size: 1rem;
            font-weight: 600;
            opacity: 0;
            position: absolute;
            top: 10px;
            margin-left: 5px;
          }
        }
      }

    .infoRepo{
      max-width: 250px;
      height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      word-wrap: break-word;
      text-align: center;
    }
  }
`