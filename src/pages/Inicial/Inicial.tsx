import { Link } from 'react-router-dom'
import { InicialContainer } from './Inicial.styled'
import { FiSend } from 'react-icons/fi'
import { useState } from 'react'

export const Inicial = () => {
  const [name, setName] = useState<string>('')

  return (
    <>
      <InicialContainer>
        <div className='infos'>
          <h1>Gitstats</h1>
          <p>Digite seu nome de usuário e veja informações sobre seu perfil</p>
          <div className='input'>
            <input type="text" placeholder='Username' onChange={(e) => setName(e.target.value)} />
            {!name && <button type='submit' disabled><i><FiSend size={28} /></i></button>}
            {name && <Link to={`/perfil/${name}`}><button type='submit' disabled={!name}><i><FiSend size={28} /></i></button></Link>}
          </div>
        </div>
      </InicialContainer>
    </>
  )
}
