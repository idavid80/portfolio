import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
// Importamos nuestra "Cáscara Premium"
import GlassCard from "../ui/GlassCard";

const BlogCard = ({ post, lang, t }) => {
  
  // Creamos el badge de fecha para pasarlo como overlay a la imagen
  const dateBadge = (
    <div className="blog-date-badge">
      {post.date}
    </div>
  );

  return (
    <GlassCard
      // Pasamos los datos a la tarjeta maestra
      image={post.image}
      imageAlt={post.title[lang]}
      imageOverlay={dateBadge} // Inyectamos la fecha sobre la imagen
      className="blog-card-wrapper" // Por si necesitas estilos extra
    >
      {/* --- CONTENIDO INTERNO --- */}
      <h3 className="blog-post-title">{post.title[lang]}</h3>
      <p className="blog-excerpt">{post.excerpt[lang]}</p>
      
      <div className="blog-footer">
        <Link to={`/blog/${post.id}`} className="blog-readmore">
          {t('blog.read_more')} 
          <FaArrowRight className="btn-icon" />
        </Link>
      </div>
    </GlassCard>
  );
};

export default BlogCard;