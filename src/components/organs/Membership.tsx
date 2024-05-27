import { useState, useRef } from 'react';
import Slider from 'react-slick';
import avcb from "../../assets/luminar/AVCB_e_CLCB.jpg";
import laudos from "../../assets/luminar/LAUDOS.jpg";
import projetos from "../../assets/luminar/PROJETOS.jpg";
import obras_manutencao from "../../assets/luminar/OBRAS_MANUTENCOES.jpg";
import servicos_eletricos from "../../assets/luminar/SERVICOS_ELETRICOS.jpg";
import brigada_incendio from "../../assets/luminar/PRODUTO4.jpeg";
import { MembershipPlans } from "../particles/Data";
import { Text } from "../atoms/Text";
import { Card } from "../molecules/Card";
import { Button } from "../atoms/Button";
//import { List } from "../atoms/List";
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowCircleRight, ArrowCircleLeft } from "@phosphor-icons/react";
import StickyIcons from '../molecules/StickyIcons';

const Membership = () => {
  const navigate = useNavigate();
  const sliderRef = useRef<Slider | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleNavigateToNovaPagina = (category: string) => {
    navigate(`/nova-pagina/${category}`);
  };

  const handleExpand = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  // Função para limitar o texto e adicionar "..." no final
  const limitText = (text: string, limit: number) => {
    if (text.length <= limit) {
      return text;
    } else {
      return text.slice(0, limit) + "...";
    }
  };

  // Configurações do CAROUSEL para CARDS
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
    nextArrow: <br />,
    prevArrow: <br />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <section className="w-full h-auto py-20 md:py-28 lg:py-40 bg-zinc-950 flex flex-col md:gap-28 gap-20 justify-center items-center">
      <div className="flex flex-col items-center relative before:absolute before:-bottom-6 before:left-30 before:w-36 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
        <Text as="p" className="text-amber-500 md:text-sm text-xs tracking-widest uppercase">{MembershipPlans.firstText}</Text>
        <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl">{MembershipPlans.secondText}</Text>
      </div>

      <main className="w-full lg:w-[90%] md:w-[96%] w-[90%] md:grid-cols-4 items-center gap-8 md:gap-4 lg:gap-8 relative">
      <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
        {MembershipPlans.cards.map((card, index) => (
          <Card
            key={index}
            className={`w-full flex flex-col items-center text-center gap-4 border border-zinc-500 transition-all duration-200 cursor-pointer hover:border-red-500/50 py-10`}
          >
            <img
              src={index === 0 ? avcb : index === 1 ? laudos : index === 2 ? projetos : index === 3 ? obras_manutencao : index === 4 ? servicos_eletricos : index === 5 ? brigada_incendio : '/caminho-para-imagem-padrao.jpg'}
              alt={`Client ${index + 1}`}
              className="w-full h-80 object-cover mb-4 rounded-md"
            />
            <Text as="h6" className="text-zinc-100 items-center gap-0.5">
              <span className={`font-extrabold text-2xl`}>{card.amount}</span>
            </Text>
            <div className="text-zinc-300 text-center px-4 mb-4">
              {expandedIndex === index ? card.benefits[0] : limitText(card.benefits[0], 286)}
              {card.benefits[0].length > 287 && index !== 5 && (
                <Button className="text-red-500" onClick={() => handleExpand(index)}>
                  {expandedIndex === index ? "Ver menos" : "Continuar lendo"}
                </Button>
              )}
            </div>
            {index === 5 ? (
              <Button
              className="px-4 py-2 text-white bg-gradient-to-r from-red-500 to-amber-500"
              onClick={() => handleNavigateToNovaPagina(card.category)}
              >
                Ver mais
              </Button>
            ) : (
              <Button
                className="px-4 py-2 text-white bg-gradient-to-r from-red-500 to-amber-500"
                onClick={() => handleNavigateToNovaPagina(card.category)}
              >
                Ver mais
              </Button>
            )}
          </Card>
        ))}
      </Slider>

        <div className="flex justify-center mt-8">
          <Button onClick={previous} type="button" className="w-8 h-8 border rounded-full border-amber-500 flex items-center justify-center text-amber-500 hover:text-red-500 hover:border-red-500">
            <ArrowCircleLeft size={20} color="currentColor" weight="light" />
          </Button>
          <Button onClick={next} type="button" className="w-8 h-8 border rounded-full border-amber-500 flex items-center justify-center text-amber-500 hover:text-red-500 hover:border-red-500">
            <ArrowCircleRight size={20} color="currentColor" weight="light" />
          </Button>
        </div>
      </main>
      <StickyIcons />
    </section>
  );
};

export default Membership;
