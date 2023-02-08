import React from 'react'

import { CardContainer } from './CardRepositorio.styled'
import './LangColors.css'

import {BsFolder2Open} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'

type Tprops = {
  repoNome: string,
  repoDescricao: string,
  repoLinguagens: string,
  repoLink: string
}

export const CardRepositorio: React.FC<Tprops>= ({repoNome, repoDescricao, repoLinguagens, repoLink}) => {
  return (
    <>
      <CardContainer>
        <div className='cards'>
          <span className='icone'>
            <a className='linkRepo' href={repoLink} rel="noreferrer" target='_blank'><i><BsFolder2Open/></i></a>
            <i><FiGithub/></i>
          </span>
          <div className='infoRepo'>
            <p>{repoNome}</p>
            {!repoDescricao && <p>Repositório sem descrição</p>}
            {repoDescricao && <p>{repoDescricao}</p>}
            {!repoLinguagens && <p style={{ color: "#ccc", fontWeight: "700" }}>Repositório sem linguagem</p>}
            {repoLinguagens && <p style={{ fontWeight: "700" }} className={repoLinguagens}>{repoLinguagens}</p>}
          </div>
        </div>
      </CardContainer>
    </>
  )
}
