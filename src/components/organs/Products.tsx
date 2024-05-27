import { useState } from 'react';
import { Text } from "../atoms/Text";
import { Card } from "../molecules/Card";
import { ProductTexts } from "../particles/Data";
import { Image } from "../atoms/Image";
import { Link } from "react-router-dom";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Button } from "../atoms/Button";
import ProductImage1 from "../../assets/luminar/PRODUTO1.jpeg";
import ProductImage2 from "../../assets/luminar/PRODUTO2.jpeg";
import ProductImage3 from "../../assets/luminar/PRODUTO3.jpeg";
import ProductImage5 from "../../assets/luminar/PRODUTO5.jpeg";
import StickyIcons from '../molecules/StickyIcons';

const Products = () => {
  const [readMoreIndex, setReadMoreIndex] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setReadMoreIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setReadMoreIndex(-1);
    setIsModalOpen(false);
  };

  // Função para renderizar as imagens dos produtos
  const renderProductImage = (element: number) => {
    switch (element) {
      case 0:
        return ProductImage1;
      case 1:
        return ProductImage2;
      case 2:
        return ProductImage3;
      case 3:
        return ProductImage5;
      default:
        return "";
    }
  };

  return (
    <section className="w-full h-auto flex items-center bg-zinc-900">
        <main className="w-full lg:h-[1250px] md:h-[1000px] flex flex-col justify-center items-center gap-20 lg:gap-28 py-12 md:py-0">
            <div className="flex flex-col mt-10 items-center relative before:absolute before:-bottom-6 before:left-30 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
                <Text as="p" className="text-amber-500 lg:text-sm text-xs tracking-widest uppercase font-medium">{ProductTexts.firstText}</Text>
                <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl text-center">{ProductTexts.secondText}</Text>
                <Text as="h1" className="absolute text-zinc-500/20 lg:left-24 left-20 lg:text-9xl md:text-7xl text-6xl font-extrabold lg:-top-32 md:-top-20 -top-16 -z-10"></Text>
            </div>

            {/* Seção de cards de produtos */}
            <div className="w-full lg:w-3/4 grid md:grid-cols-3 lg:gap-8 md:gap-5 gap-8 px-6 md:px-4 lg:px-0">
            {ProductTexts.products.map((product, index) => (
                <Card key={index} className="flex flex-col justify-between bg-zinc-950 border-b-4 border-red-500">
                {/* Imagem do produto */}
                <Image alt={product.name} className="w-full h-48" objectCover="object-cover" image={renderProductImage(index)} />

                {/* Informações do produto */}
                <Link to="/" className="flex flex-col lg:p-6 md:p-4 p-6 gap-2 group">
                    <Text as="h3" className="text-amber-500 text-xs group-hover:underline font-semibold uppercase">{product.name}</Text>
                    <Text as="p" className="text-zinc-400 text-sm">{product.description}</Text>
                </Link>

                <div className="flex justify-center pb-6">
                    <Button
                    className="px-10 font-medium text-white py-2.5 bg-gradient-to-r whitespace-nowrap from-red-500 to-amber-500"
                    type="button"
                    onClick={() => openModal(index)}
                    >
                    Ver mais
                    </Button>
                </div>
                </Card>
            ))}
            </div>

            {/* Modal */}
            {isModalOpen && readMoreIndex !== -1 && (
            <Dialog open={isModalOpen} onClose={closeModal} classes={{ paper: 'custom-modal-class' }}>
                <DialogTitle>{ProductTexts.products[readMoreIndex].name}</DialogTitle>
                <DialogContent>
                <div style={{ backgroundColor: '#000', padding: '16px' }}>
                    {/* Imagem do produto no modal */}
                    <Image
                    alt={ProductTexts.products[readMoreIndex].name}
                    className="w-full h-48 mb-4"
                    objectCover="object-cover"
                    image={renderProductImage(readMoreIndex)}
                    />

                    {/* Descrição detalhada do produto */}
                    <DialogContentText style={{ color: '#999' }}>
                    {ProductTexts.products[readMoreIndex].detailedDescription}
                    </DialogContentText>
                </div>
                </DialogContent>

                {/* Botão "Fechar" */}
                <DialogActions>
                <Button
                    className="px-10 font-medium text-white py-2.5 bg-gradient-to-r whitespace-nowrap from-red-500 to-amber-500"
                    type="button"
                    style={{ borderRadius: '30px' }}
                    onClick={closeModal}
                    color="primary"
                >
                    Fechar
                </Button>
                </DialogActions>
            </Dialog>
            )}
        </main>
        <StickyIcons />
    </section>
  );
};

export default Products;
