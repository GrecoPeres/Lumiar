import React from "react";
import { Image } from "../atoms/Image";
import { Text } from "../atoms/Text";
import AVCB_CLCB from "../../assets/luminar/AVCB_e_CLCB.jpg";
// import Laudos_INCENDIO from "../../assets/luminar/LAUDO_COMBATE_INCENDIO.jpg";
import Laudos_ELETRICO from "../../assets/luminar/LAUDO_ELÉTRICO.png";
import Laudos_ESTANQUEIDADE from "../../assets/luminar/LAUDO_ESTANQUEIDADE.jpg";
import Laudos_POPULACIONAL from "../../assets/luminar/LAUDO_POPULACIONAL.jpg";
import Laudos_COMBATE from "../../assets/luminar/LAUDO_COMBATE_INCENDIO.jpg";
// import Projeto_ELETRICO from "../../assets/luminar/PROJETO_ELETRICO.png";
import Projeto_EMISSAO from "../../assets/luminar/EMISSAO_PROJETOS.jpg";
import Projeto_ATUALIZACAO from "../../assets/luminar/ATUALIZACAO_PROJETOS.jpg";
import Obras_ALARME from "../../assets/luminar/SISTEMA_DE_ALARME.png";
import Obras_COMBATE from "../../assets/luminar/SISTEMA_COMBATE.png";
import Obras_MOTORES from "../../assets/luminar/SISTEMA_MOTORES.png";
import Servicos_ENERGIA from "../../assets/luminar/ATUALIZACAO_DADOS.png";
import Servicos_CARGA from "../../assets/luminar/ALTERAÇÃO DE CARGA.png";
import Servicos_DIMENSIONAMENTOS from "../../assets/luminar/DIMENSIONAMENTOS.png";
import Servicos_ELETRICOS from "../../assets/luminar/SERVICOS_ELETRICOS.jpg";
import { Fade } from "react-awesome-reveal";
import { useParams } from 'react-router-dom';
import StickyIcons from "../molecules/StickyIcons";

const NovaPagina = () => {
  const { categoria } = useParams();

  const renderConteudo = () => {
    switch (categoria) {
      case 'laudos':
        return {
          titulo: 'LAUDOS',
          descricao: 'LAUDO ESTANQUEIDADE (GÁS GLP OU GÁS NATURAL)',
          conteudo: 'O Laudo de estanqueidade visa o teste da tubulação de gás, onde será atestada a conformidade de todo o sistema, assim como a central GLP, tubulação e materiais aplicados. O teste é feito mediante a presença do técnico especializado com equipamento específico e após a conclusão é gerado o laudo de conformidade quando atestado toda a conformidade das instalações.',
          imagem: Laudos_ESTANQUEIDADE,
          descricao2: 'LAUDO SISTEMA DE PROTEÇÃO E COMBATE A INCÊNDIOS - SPCI (ALARME, DETECÇÃO, DETECÇÃO)',
          conteudo2: 'O laudo para SPCI se da para a completa análise das medidas de segurança contra incêndio instaladas na edificação, visando a correta aplicação, seguindo decretos e instruções técnicas vigentes, onde a partir de sua ocupação medidas de segurança específicas são aplicadas, a qual um técnico irá até a sua edificação verificar todas as medidas instaladas, caso haja alguma divergência das normas vigentes, adequações deverão ser feitas para a correta instalação de todo o sistema. Após constatada toda conformidade, um laudo é gerado apresentando toda conformidade da edificação e assinado por engenheiro responsável.',
          imagem2: Laudos_COMBATE,
          descricao3: 'LAUDO POPULACIONAL',
          conteudo3: 'Laudo populacional é exigido para edificação onde a principal ocupação é reunião de público, sejam elas, bares, restaurantes, lanchonetes, salões, auditórios e qualquer outra ocupação que haja reunião de público. O laudo é necessário para comprovar a lotação máxima de pessoas na edificação e o tamanho das saídas de emergência obrigatórios para a quantidade máxima de pessoas no local, ou seja apresentar que a quantidade de público e as saídas de emergência, garantem a segurança de todos em caso de algum sinistro. Tornando possível assim a evacuação de todos em segurança.',
          imagem3: Laudos_POPULACIONAL,
          descricao4: 'LAUDO ELÉTRICO',
          conteudo4: 'Emitido por Engenheiro Eletricista, o laudo elétrico é necessário para comprovar que sua edificação apresenta todas as instalações e proteções corretas e necessárias para o sistema elétrico. A correta instalação garante uma instalação segura e estável, diminuindo assim os riscos de choque elétrico e incêndio.',
          imagem4: Laudos_ELETRICO,
        };
      case 'avcb-clcb':
        return {
          titulo: 'AVCB e CLCB',
          descricao: 'CLCB',
          conteudo: 'Certificado de licença do corpo de bombeiros (CLCB) é o documento obrigatório para edificações multifamiliares, comerciais e industriais que atuam com ocupação de baixo e médio risco de incêndio, com até 750 m² e até 6m de altura. Cada edificação possui medidas de segurança específicas que são determinadas pela sua ocupação e área total construída. Lembrando que manter o seu Certificado de licença do corpo de bombeiros em dia é obrigatório além das medidas de combate a incêndio, algo muito importante para manter a proteção do seu patrimônio e para todas as pessoas que frequentam seu ambiente. Entre em contato conosco para mais informações, seja para a primeira emissão, renovação do seu CLCB ou para sanar qualquer dúvida pertinente.',
          imagem: AVCB_CLCB,
          descricao2: 'AVCB',
          conteudo2: 'Auto de vistoria do corpo de bombeiros (AVCB), é o documento obrigatório para edificações acima de 750 m², onde a ocupação apresenta um risco mais elevado para a edificação e para as pessoas que o frequentam. Cada edificação possui as medidas de segurança específicas, mas tradicionalmente, quando se trata de AVCB é obrigatório a instalação de central de alarme, sistema de hidrantes, sistema de iluminação de emergência, entre outros. Para tirar dúvidas sobre quais medidas a sua edificação necessita, entre em contato conosco. Contamos com uma equipe especializada para lhe atender.',
          imagem2: AVCB_CLCB,
        };
      case 'projetos':
        return {
          titulo: 'NOSSOS PROJETOS',
          descricao: 'Elaborações de Projetos',
          conteudo: 'Caso sua edificação ultrapasse os 750 m² é obrigatório a emissão e aprovação de projeto de proteção de combate a incêndio (PPCI), onde a partir de 1500 m² o projeto precisa ser aprovado junto ao corpo de bombeiros, e somente após a aprovação, a execução das medidas de segurança contra incêndio vigente devem ser aplicadas.',
          imagem: Projeto_EMISSAO,
          descricao2: 'Atualização de Projeto',
          conteudo2: 'A atualização de projeto de proteção contra incêndio é necessária quando há uma ampliação ou alteração da área construída da edificação, onde esta alteração influencia diretamente as medidas de segurança contra incêndio exigidas para a edificação.',
          imagem2: Projeto_ATUALIZACAO,
        };
      case 'obras_manutencao':
        return {
          titulo: 'OBRAS E MANUTENÇÕES',
          descricao: 'SISTEMA DE ALARME E DETECÇÃO',
          conteudo: 'O sistema de alarme e detecção é obrigatório para edificações a partir de 750m² ou edificações menores, porém com grau de risco maior, sendo responsável pela identificação e alerta sobre algum sinistro (incêndio). O primeiro equipamento sendo o principal deste sistema é a central de alarme de incêndio, onde a mesma pode ser convencional ou endereçável, independente do tipo de sistema instalado, é obrigatório a utilização de sirenes e acionadores manuais para alerta, caso haja algum sinistro. Para o sistema de detecção, são utilizados detectores de fumaça, detectores de temperatura, Sprinkler, entre outros, sendo estes equipamentos necessários caso as medidas de segurança contra incêndio da ocupação os exijam.',
          imagem: Obras_ALARME,
          descricao2: 'SISTEMA DE COMBATE',
          conteudo2: 'O sistema de combate a incêndio, se dá pelos equipamentos que irão combater algum sinistro, sendo os principais deles, o sistema de hidrantes, onde é composto por uma bomba de incêndio, abrigo para mangueira, mangueira de incêndio e registro, porém, existem outros sistema, como o comumente conhecido sistema de extintores de incêndio e os sprinkler, os quais atuam a partir do rompimento do sensor, quando a temperatura é elevado, liberando assim o fluxo de água pela tubulação, para combater o sinistro.',
          imagem2: Obras_COMBATE,
          descricao3: 'SISTEMAS DE MOTORES E BOMBAS',
          conteudo3: 'A correta instalação da bomba de incêndio, determina a melhor execução do sistema no momento da aplicação, para a instalação correta do sistema, é necessário a confecção de projeto junto ao cálculo volumétrico, onde será determinado a potência correta da bomba, o diâmetro correto da tubulação e quais acessórios obrigatórios deverão ser utilizados.',
          imagem3: Obras_MOTORES,
        };
      case 'servicos_eletricos':
        return {
          titulo: 'servicos_eletricos',
          descricao: 'ATUALIZAÇÃO DE DADOS DA CONTA DE ENERGIA',
          conteudo: 'A solicitação de alteração de dados cadastrais junto a CPFL é necessária quando há alteração de morador, seja para imóvel próprio ou alugado, o processo é feito a partir dos dados do novo morador. A atualização é importante para que o cliente possa ter acesso a todas as informações referente a sua instalação e estar sempre por dentro dos assuntos pertinentes.',
          imagem: Servicos_ENERGIA,
          descricao2: 'ALTERAÇÃO DE CARGA',
          conteudo2: 'A alteração de carga é necessária quando o cliente necessita utilizar mais carga em sua edificação, seja por instalação de mais equipamentos ou por necessitar alimentar máquinas para seus serviços. É importante realizar a alteração de carga caso você seja um cliente com instalação monofásica que necessita de uma instalação bifásica ou trifásica, além de trazer a segurança de estar utilizando a potência correta para seus equipamentos.',
          imagem2: Servicos_CARGA,
          descricao3: 'DIMENSIONAMENTOS',
          conteudo3: 'Caso esteja construindo uma edificação e não tenha muitas informações sobre a parte elétrica, nós contamos com uma equipe especializada de engenheiros eletricistas, que irão realizar todo o dimensionamento elétrico de sua edificação, para que tenha uma instalação estável e segura. O dimensionamento é necessário para que a seção dos cabos, os disjuntores, tomadas e todos os equipamentos, sejam compatíveis com todas as necessidades elétricas que a edificação possua.',
          imagem3: Servicos_DIMENSIONAMENTOS,
          descricao4: 'PROJETO ELÉTRICO',
          conteudo4: 'O projeto elétrico é importante para que antes de se iniciar a execução das instalações, haja o conhecimento prévio de tudo que será instalado e o dimensionamento correto dos pontos, por exemplo: onde estão as tomadas 220v, os disjuntores de cada cômodo, quais as proteções e aterramentos que devem ser usados e qual a carga necessária para a edificação. Informações essas que são trazidas claramente com o projeto elétrico antes da execução, o projeto traz facilidade e reduz custo, trazendo também mais segurança.',
          imagem4: Servicos_ELETRICOS,
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

  const { titulo, descricao, conteudo, imagem, descricao2, conteudo2, imagem2, descricao3, conteudo3, imagem3, descricao4, conteudo4, imagem4 } = renderConteudo();

// Função para renderizar uma seção para desktop
const renderDesktopSection = (tituloSec: string, descricaoSec: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined, conteudoSec: string, imagemSec: string | null, reverse = false) => {
  const orderClass = reverse ? 'md:order-2 order-1' : 'md:order-1 order-2';
  const flexDirectionClass = reverse ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <section className={`hidden md:flex w-full lg:h-[800px] items-center gap-20 lg:gap-8 ${flexDirectionClass}`}>
      <div className={`h-full w-1/2 pt-12 lg:pt-0 lg:px-8 px-4 flex flex-col lg:justify-center justify-center items-start lg:gap-20 gap-16 ${orderClass}`}>
        <Fade className="w-full">
          <div className="w-full flex flex-col mt-10 items-center relative before:absolute before:-bottom-6 before:left-38 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
            <Text as="p" className="text-amber-500 lg:text-sm text-xs tracking-widest uppercase font-medium">{`${tituloSec}`}</Text>
            <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl">{descricaoSec}</Text>
          </div>
          <Text as="p" className="text-zinc-400 text-justify text-base">{`${conteudoSec}`}</Text>
        </Fade>
      </div>

      <div className="w-1/2 lg:h-[800px] lg:h-[600px] h-[300px] grid items-center">
        {imagemSec && (
          <div className="w-100 h-100 overflow-hidden border-4">
            <Image alt={`Imagem ${tituloSec}`} objectCover="object-cover" className="w-full h-full" image={imagemSec} />
          </div>
        )}
      </div>
      <StickyIcons />
    </section>
  );
};

// Função para renderizar uma seção para dispositivos móveis
const renderMobileSection = (tituloSec: string, descricaoSec: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined, conteudoSec: string, imagemSec: string | null) => {
  return (
    <section className="md:hidden w-full flex flex-col items-center gap-6">
      <div className="w-full pt-12 px-4 flex flex-col justify-center items-start gap-6">
        <Fade className="w-full">
          <div className="w-full flex flex-col items-center relative">
            <Text as="p" className="text-amber-500 lg:text-sm text-xs tracking-widest uppercase font-medium">{`${tituloSec}`}</Text>
            <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl">{descricaoSec}</Text>
          </div>
          <Text as="p" className="text-zinc-400 text-justify text-base">{`${conteudoSec}`}</Text>
        </Fade>
      </div>

      <div className="w-full flex items-center justify-center">
        {imagemSec && (
          <div className="w-64 h-64 overflow-hidden border-4">
            <Image alt={`Imagem ${tituloSec}`} objectCover="object-cover" className="w-full h-full" image={imagemSec} />
          </div>
        )}
      </div>
      <StickyIcons />
    </section>
  );
};

// Renderizar cada seção
return (
  <div className="w-full bg-zinc-900">
    {renderDesktopSection(titulo, descricao, conteudo, imagem)}
    {conteudo2 && imagem2 && renderDesktopSection(titulo, descricao2, conteudo2, imagem2, true)}
    {conteudo3 && imagem3 && renderDesktopSection(titulo, descricao3, conteudo3, imagem3)}
    {conteudo4 && imagem4 && renderDesktopSection(titulo, descricao4, conteudo4, imagem4, true)}

    {renderMobileSection(titulo, descricao, conteudo, imagem)}
    {conteudo2 && imagem2 && renderMobileSection(titulo, descricao2, conteudo2, imagem2)}
    {conteudo3 && imagem3 && renderMobileSection(titulo, descricao3, conteudo3, imagem3)}
    {conteudo4 && imagem4 && renderMobileSection(titulo, descricao4, conteudo4, imagem4)}
  </div>
);
};

export default NovaPagina;