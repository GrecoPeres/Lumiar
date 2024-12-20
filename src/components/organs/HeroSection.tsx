import { useCallback, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { Image } from "../atoms/Image";
import avcb from "../../assets/luminar/Hero-New.png";
import laudos from "../../assets/luminar/LAUDOS.jpg";
import projetos from "../../assets/luminar/PROJETOS.jpg";
import obras_manutencao from "../../assets/luminar/OBRAS_MANUTENCAO-NEW.jpg";
import servicos_eletricos from "../../assets/luminar/SERVICOS_ELETRICOS.jpg";
import { HeroTexts } from "../particles/Data";
import Slider from "react-slick";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import StickyIcons from "../molecules/StickyIcons";
import { Slide, Zoom } from "react-awesome-reveal";

const HeroSection = () => {
    const navigate = useNavigate();
    const sliderRef = useRef<Slider | null>();

    // Function for next button
    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    // function for previous button
    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        cssEase: "linear",
    };

    // aki é onde redirecionar para a nova página com a categoria do card - NAÕ ESQUECER
    const handleVerMais = (category: string) => {
        navigate(`/nova-pagina/${category}`);
    };

    const renderProfileImg = useCallback((element: number) => {
        switch (element) {
            case 0:
                return avcb;
            case 1:
                return laudos;
            case 2:
                return projetos;
            case 3:
                return obras_manutencao;
            case 4:
                return servicos_eletricos;
            default:
                return "";
        }
    }, []);

    return (
        <section className="w-full h-auto bg-gradient-to-r from-red-500 to-amber-500 relative overflow-x-hidden">
            <Slider ref={(slider) => (sliderRef.current = slider)} {...settings} className="h-full">
                {
                    HeroTexts.map((hero, index) => (
                        <main className="w-full lg:h-screen md:h-[50vh] h-screen relative bg-zinc-900 overflow-x-hidden" key={index}>
                            <Zoom className="h-full">
                                <Image className="md:w-[60%] w-full md:h-full h-1/2" alt="Image1" objectCover="object-cover" image={renderProfileImg(index)} />
                            </Zoom>

                            <div className="md:w-[50%] w-full md:h-full h-1/2 absolute md:top-0 top-1/2 right-0 bg-zinc-900 flex flex-col md:justify-center justify-start lg:gap-8 md:gap-4 gap-2 lg:px-20 md:px-6 px-4 overflow-x-hidden">
                                <Text as="h1" className={`font-extrabold text-zinc-100 ${hero.Heading === "OBRAS E MANUTENÇÕES" || hero.Heading === "SERVIÇOS ELÉTRICOS" ? "lg:text-4xl md:text-2xl text-2xl" : "lg:text-6xl md:text-4xl text-4xl"} md:mt-10 mt-10`}>
                                    <Slide direction="right">
                                        {hero.Heading}
                                    </Slide>
                                </Text>
                                <Text as="p" className="lg:text-lg text-base text-zinc-400 my-4">
                                    <Slide direction="left">
                                        {hero.Paragraph}
                                    </Slide>
                                </Text>
                                
                                <div className="flex items-center gap-8">
                                    <Slide direction="up">
                                        <Button onClick={() => handleVerMais(hero.category)} type="button" className="px-10 font-medium text-white py-2.5 bg-gradient-to-r whitespace-nowrap from-red-500 to-amber-500">
                                            {hero.Button}
                                        </Button>
                                    </Slide>
                                </div> 
                               
                            </div>
                        </main>
                    ))
                }
            </Slider>
            <div className="flex justify-end lg:justify-start items-center gap-4 absolute lg:bottom-10 md:bottom-5 md:right-15 right-4 bottom-4">
                <Button onClick={previous} type="button" className="w-8 h-8 border rounded-full border-amber-500 flex items-center justify-center text-amber-500 hover:text-red-500 hover:border-red-500">
                    <ArrowCircleLeft size={20} color="currentColor" weight="light" />
                </Button>
                <Button onClick={next} type="button" className="w-8 h-8 border rounded-full border-amber-500 flex items-center justify-center text-amber-500 hover:text-red-500 hover:border-red-500">
                    <ArrowCircleRight size={20} color="currentColor" weight="light" />
                </Button>
            </div>

            <StickyIcons />

        </section>
    );
};

export default HeroSection;
