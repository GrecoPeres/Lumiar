import React from "react";
import { Image } from "../atoms/Image";
import { Text } from "../atoms/Text";
import SistemaCombate from "../../assets/luminar/SISTEMA_COMBATE.png";
import AVCB_CLCB from "../../assets/luminar/AVCB_e_CLCB.jpg";
import Laudos_INCENDIO from "../../assets/luminar/LAUDO_COMBATE_INCENDIO.jpg";
import Laudos_ELETRICO from "../../assets/luminar/LAUDO_ELÉTRICO.png";
import Laudos_ESTANQUEIDADE from "../../assets/luminar/LAUDO_ESTANQUEIDADE.jpg";
import Projeto_ELETRICO from "../../assets/luminar/PROJETO_ELETRICO.png";
import Projeto_EMISSAO from "../../assets/luminar/EMISSAO_PROJETOS.jpg";
import Projeto_ATUALIZACAO from "../../assets/luminar/ATUALIZACAO_PROJETOS.jpg";
import { Fade } from "react-awesome-reveal";
import { useParams } from 'react-router-dom';

const NovaPagina = () => {
  const { categoria } = useParams();

  const renderConteudo = () => {
    switch (categoria) {
      case 'laudos':
        return {
          titulo: 'LAUDOS',
          descricao: 'Descrição para Laudos...',
          conteudo: 'Descrição para Laudos...',
          imagem: Laudos_INCENDIO,
          imagem2: Laudos_ELETRICO,
          imagem3: Laudos_ESTANQUEIDADE,
        };
      case 'avcb-clcb':
        return {
          titulo: 'AVCB e CLCB',
          descricao: 'Descrição para AVCB e CLCB...',
          conteudo: 'Descrição para AVCB e CLCB...',
          imagem: AVCB_CLCB,
        };
      case 'projetos':
        return {
          titulo: 'PROJETOS',
          descricao: 'Descrição para PROJETOS...',
          conteudo: 'Caso sua edificação ultrapasse os 750 m² é obrigatório a emissão e aprovação de projeto de proteção de combate a incêndio (PPCI), onde a partir de 1500 m² o projeto precisa ser aprovado junto ao corpo de bombeiros, e somente após a aprovação, a execução das medidas de segurança contra incêndio vigente devem ser aplicadas.',
          imagem: Projeto_ELETRICO,
          imagem2: AVCB_CLCB,
          imagem3: Laudos_ESTANQUEIDADE,
        };
      case 'obras_manutencao':
        return {
          titulo: 'OBRAS E MANUTENÇÕES',
          descricao: 'Descrição para OBRAS e MANUTENÇÕES...',
          conteudo: 'Descrição para OBRAS e MANUTENÇÕES...',
          imagem: SistemaCombate,
        };
      case 'servicos_eletricos':
        return {
          titulo: 'servicos_eletricos',
          descricao: 'Descrição para SERVIÇOS ELÉTRICOS...',
          conteudo: 'Descrição para SERVIÇOS ELÉTRICO...',
          imagem: SistemaCombate,
        };
      default:
        return {
          titulo: 'Categoria não encontrada',
          descricao: 'Esta categoria não possui informações...',
          conteudo: 'Esta categoria não possui informações...',
          imagem: null,
        };
    }
  };

  const { titulo, descricao, conteudo, imagem } = renderConteudo();

  return (
    <section className="w-full h-auto flex items-center bg-zinc-900">
      <main className="w-full lg:h-[800px] grid md:grid-cols-2 items-center gap-20 md:gap-0 lg:gap-8 ">
        <div className="h-full w-full md:order-1 order-2 pt-12 md:pt-0 lg:px-8 px-4 flex flex-col lg:justify-center justify-center items-start lg:gap-20 gap-16">
          <Fade className="w-full">
            <div className="w-full flex flex-col mt-10 items-center relative before:absolute before:-bottom-6 before:left-38 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
              <Text as="p" className="text-amber-500 lg:text-sm text-xs tracking-widest uppercase font-medium">{`${titulo}`}</Text>
              <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl">{descricao}</Text>
            </div>
            <Text as="p" className="text-zinc-400 text-justify text-base">{`${conteudo}`}</Text>

          </Fade>
        </div>

        <div className="w-full lg:h-[800px] md:h-[600px] h-[300px] md:order-2 order-1 grid">
          {imagem && <Image alt="Imagem Categoria" objectCover="object-cover" className="w-full h-full" image={imagem} />}
        </div>
      </main>
    </section>
    
  );
};

export default NovaPagina;
