import styled from '@emotion/styled';
import './App.css';
import Rodape from './components/Rodape';
import Titulo from './components/Titulo';
import Cabecalho from './components/cabecalho';
import Container from './components/cabecalho/Conteiner';
import Tabela from './components/tabela';
import useDadosConsulta from './useDadosConsulta';
import Grafico from './components/Grafico';
import useDadosProfissional from './useDadosProfissionais';


function App() {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional();


if (consultasErro || profissionaisErro) {
  console.log("Ocorreu um erro na requisição")
}

  return (
    <>
    <Cabecalho />
    <Container>
      <Titulo>Área Administrativa</Titulo>
      <Tabela consultas={consultas} />
      <Grafico consultas={consultas} profissionais={profissionais} />
    </Container>
    <Rodape /> 
    </>
    
  );
}

export default App;
