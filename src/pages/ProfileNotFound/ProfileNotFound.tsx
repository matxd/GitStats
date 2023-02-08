import image from '../../assets/404.png'
import { ProfileNotFoundContainer } from './ProfileNotFound.styled'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const ProfileNotFound = () => {
  return (
    <>
      <ProfileNotFoundContainer>
        <div>
          <h1>Usuário não encontrado</h1>
          <img src={image} alt="404 Github" />
          <Link to={'/'}><button><i><BiArrowBack /></i></button></Link>
        </div>
      </ProfileNotFoundContainer>
    </>
  )
}

export default ProfileNotFound