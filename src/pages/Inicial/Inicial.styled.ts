import styled from 'styled-components'

export const InicialContainer = styled.section`
  height: 100vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  .infos {
    max-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    h1 {
      color: #68E7E7;
      margin: 0;
      padding: 0;
      font-size: 2.5rem;
    }

    p {
      margin: 30px 0;
      text-align: center;
      font-size: 1.8rem;
    }
  }

  .input {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    input {
      width: 220px;
      padding: 15px 10px;
      border-radius: 5px;
      border: none;
      background-color: #32364E;
      color: #fff;

      &::placeholder {
        font-size: 16px;
      }

      &:focus{
        outline: 2px solid #68E7E7;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      max-height: 45px;
      padding: 15px 10px;
      border-radius: 5px;
      border: none;
      background-color: #68E7E7;
      transition: 0.3s;
      
      &:hover {
        filter: brightness(.8);
        transition: .3s;
        cursor: pointer;
      }

      &:disabled{
        cursor: not-allowed;
        background-color:#256b6b;
      }

      i {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
      }
    }
  }
`