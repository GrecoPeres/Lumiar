import { useState } from 'react';
import { Text } from "../atoms/Text";
import { Card } from "../molecules/Card";
import { BlogTexts } from "../particles/Data";
import Image1 from "../../assets/luminar/Notice-1.jpg";
import Image2 from "../../assets/luminar/Notice-2.jpg";
import Image3 from "../../assets/luminar/Notice-3.jpg";
import { Image } from "../atoms/Image";
import { Link } from "react-router-dom";
//import { ChatsCircle, Clock } from "@phosphor-icons/react";
import { Button } from "../atoms/Button";
// import BlogModal from './BlogModal'; // modal
// import { ChatsCircle, Clock } from "@phosphor-icons/react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import StickyIcons from '../molecules/StickyIcons';

const Blogs = () => {
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

  const renderImage = (element: number) => {
    switch (element) {
        case 0:
            return Image3;
        case 1:
            return Image2;
        case 2:
            return Image1;
        default:
            return "";
    }
};
  return (
    <section className="w-full h-auto flex items-center bg-zinc-900">
      <main className="w-full lg:h-[900px] md:h-[800px] flex flex-col justify-center items-center gap-20 lg:gap-28 py-12 md:py-0">
      <div className="flex flex-col mt-10 items-center relative before:absolute before:-bottom-6 before:left-30 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
                    <Text as="p" className="text-amber-500 lg:text-sm text-xs tracking-widest uppercase font-medium">{BlogTexts.firstText}</Text>
                    <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl">{BlogTexts.secondText}</Text>
                    <Text as="h1" className="absolute text-zinc-500/20 lg:left-24 left-20 lg:text-9xl md:text-7xl text-6xl font-extrabold lg:-top-32 md:-top-20 -top-16 -z-10"></Text>
        </div>
        
        <div className="w-full lg:w-3/4 grid md:grid-cols-3 lg:gap-8 md:gap-5 gap-8 px-6 md:px-4 lg:px-0">
          {BlogTexts.blogNews.map((blog, index) => (
            <Card key={index} className="flex flex-col justify-between bg-zinc-950 border-b-4 border-red-500">
              <Image alt={blog.title} className="w-full h-48" objectCover="object-cover" image={renderImage(index)} />
              <Link to="/" className="flex flex-col lg:p-6 md:p-4 p-6 gap-2 group">
                <Text as="h3" className="text-amber-500 text-xs group-hover:underline font-semibold uppercase">{blog.caption}</Text>
                <Text as="h1" className="text-zinc-300 text-base capitalize">{blog.title}</Text>
                <Text as="p" className="text-zinc-400 text-sm">
                  {blog.paragraph.length > 255 ? blog.paragraph.slice(0, 255) + '...' : blog.paragraph}
                  {/* {blog.paragraph.length > 255 && (
                    <Button
                      className="px-10 font-medium text-white py-2.5 bg-gradient-to-r whitespace-nowrap from-red-500 to-amber-500"
                      type="button"
                      onClick={() => openModal(index)}
                    >
                      Continue lendo
                    </Button>
                  )} */}
                </Text>
              </Link>
              <div className="flex justify-between lg:px-6 md:px-4 px-6 pb-6 items-center text-center justify-center center-div">
                <aside className="flex items-center gap-2 justify-center text-center items-center">
                  {/* <Text as="span" className="text-zinc-400 text-xs flex items-center gap-1 border-r border-zinc-400 pr-2">
                    <Clock size={15} color="currentColor" />
                    {blog.time}
                  </Text>
                  <Text as="span" className="text-zinc-300 capitalize text-xs">
                    {blog.author}
                  </Text> */}
                                      <Button
                      className="px-10 font-medium text-white py-2.5 bg-gradient-to-r whitespace-nowrap from-red-500 to-amber-500"
                      type="button"
                      onClick={() => openModal(index)}
                    >
                      Continue lendo
                    </Button>
                </aside>
                {/* <Text as="span" className="text-zinc-400 text-xs flex items-center gap-0.5">
                  <ChatsCircle size={15} color="currentColor" />
                  {blog.comments}
                </Text> */}
              </div>
            </Card>
          ))}
        </div>
        {isModalOpen && readMoreIndex !== -1 && (
          <Dialog open={isModalOpen} onClose={closeModal} classes={{ paper: 'custom-modal-class' }}>
            <DialogTitle>{BlogTexts.blogNews[readMoreIndex].title}</DialogTitle>
            <DialogContent>
              <div style={{ backgroundColor: '#000', padding: '16px' }}>
                <Image
                  alt={BlogTexts.blogNews[readMoreIndex].title}
                  className="w-full h-48 mb-4"
                  objectCover="object-cover"
                  image={renderImage(readMoreIndex)}
                />
                <DialogContentText style={{ color: '#999' }}>
                  {BlogTexts.blogNews[readMoreIndex].paragraph}
                </DialogContentText>
              </div>
            </DialogContent>
            <DialogActions>
              <Button className="px-10 font-medium text-white py-2.5 bg-gradient-to-r whitespace-nowrap from-red-500 to-amber-500"
                      type="button" style={{ borderRadius: '30px' }} onClick={closeModal} color="primary">
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

export default Blogs;
