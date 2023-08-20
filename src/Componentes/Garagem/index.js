import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'

export function Garagem({ nome, automovel, setNome, setAutomovel,carro1,carro2 }) {
 
  function passarPraCima(){
    setAutomovel(carro1)
    setNome("Lin") 
  }

  return (
    <GaragemContainer>
      <h1>Garagem do {nome}</h1>
      <Botao onClick={passarPraCima}>Outro usuário tem: </Botao>
  

      <Estacionamento>
        <Carro
          modelo={automovel.modelo}
          cor={automovel.cor}
          ano={automovel.ano}
          adicionadoPor={automovel.adicionadoPor}
          flex={automovel.flex}
        />
      </Estacionamento>
    </GaragemContainer>
  )
}
