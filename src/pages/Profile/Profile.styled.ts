import styled from 'styled-components'

export const Section = styled.section`
  max-width: 1000px;
  margin: 148px auto;
  color: white;

  .container{
    max-width: 800px;
    margin: 0 auto;

    @media (max-width: 768px){
      max-width: 420px;
    }
      
    .nameUser{
      display: flex;
      justify-content: space-between;

      @media (max-width: 768px){
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
        margin-left: 22px;
      }

      span {
        width: 70%;
        
        @media (max-width: 768px){
          width: 100%;
        }
      }

      span:first-child h3{
        margin: 0;
        font-size: 14px;
        font-weight: 400;
      }

      span .nome{
        color: #68E7E7;
        font-weight: 700;
        font-size: 48px;
        margin: 0;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: start;

        @media (max-width: 768px){
          font-size: 2rem;
          max-width: 95%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: start;
        }
      }

      .iconUser{
        width: 150px;
        border-radius: 100%;
      }
    }

    .informacoes{
      display: flex;
      flex-direction: column;
      margin-top: -40px;

      @media (max-width: 768px){
        margin-top: 30px;
        display: flex;
        margin-left: 22px;
      }

      .infoUser{
        display: flex;
        align-items: center;
        gap: 8px;

        .bio{
          max-width: 420px;
        }
      }

      .infoUserSeguidores{
        display: flex;
        gap: 20px;

        div{
          display: flex;
          align-items: center;
          gap: 8px;
        }
      }

      .icone{
        font-size: 1.3rem;
      }
    }
  }

  h1{
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    color: #68E7E7;
    margin-top: 50px;
  }
`

export const ContainerCards = styled.section`
  max-width: 1200px;
  margin: 30px auto;
  margin-top: -100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 22px;
`

export const Load = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`