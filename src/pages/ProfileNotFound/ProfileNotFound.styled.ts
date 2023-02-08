import styled from 'styled-components'

export const ProfileNotFoundContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 2rem;
      color: #68E7E7;
    }

    button {
      margin-top: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      max-height: 45px;
      padding: 10px 20px;
      border-radius: 5px;
      border: none;
      background-color: #68E7E7;
      transition: 0.3s;
      
      &:hover {
        filter: brightness(.8);
        transition: .3s;
        cursor: pointer;
      }

      i {
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
      }
    }
  }
`