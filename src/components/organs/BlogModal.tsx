import React from 'react';
import { Image } from "../atoms/Image";
import { BlogTexts } from "../particles/Data";
import Image1 from "../../assets/luminar/bomber-8.jpeg";
import Image2 from "../../assets/luminar/2.jpeg";
import Image3 from "../../assets/luminar/3.jpeg";

interface BlogModalProps {
  index: number;
  onClose: () => void;
}

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

const BlogModal: React.FC<BlogModalProps> = ({ index, onClose }) => {
  const blog = BlogTexts.blogNews[index];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>Fechar</button>
        <div className="modal-inner-content">
          <Image alt={blog.title} className="w-full h-48" objectCover="object-cover" image={renderImage(index)} />
          <h1>{blog.title}</h1>
          <p>{blog.paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
