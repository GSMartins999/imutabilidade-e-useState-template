import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'
import { useState } from 'react'

export default function App() {
  //criando um estado chamado nome
  const [nome, setNome] = useState("Giovanni")
  //criando um estado automovel para infos do carro
  const [automovel, setAutomovel] = useState({
    modelo:"Corsa",
    cor: "Branco",
    ano: 2020,
    flex: true,
    adicionadoPor: "Giovanni",
  },
  )

  const carro1 ={ 
    modelo:"Fusca",
    cor:"Azul",
    ano: 2005,
    flex: false,
    adicionadoPor: "Giovanni",
  }
  
  const carro2 ={ 
    modelo:"Toro",
    cor:"Preta",
    ano: 2020,
    flex: true,
    adicionadoPor: "Giovanni",

  }

  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome={nome} automovel={automovel} setNome={setNome} setAutomovel={setAutomovel} carro1={carro1} carro2 ={carro2}/>
    </div>
  )
}
