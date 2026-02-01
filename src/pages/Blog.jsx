import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { useTranslation } from "react-i18next";
import { posts } from "../data/posts";
// Importamos el componente refactorizado
import BlogCard from "../components/blog/BlogCard";
import "./styles/Blog.css";
// Importamos tus utilidades de animación centralizadas
import { 
  containerVariants, 
  titleVariants, 
  viewportConfig 
} from "../utils/motion";

export default function Blog({ id }) {
  const { t, i18n } = useTranslation();

  return (
    <section id={id} className="blog">
      <div className="blog-container">
        {/* Título animado con utils */}
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="blog-title"
        >
          {t('blog.title')}
        </motion.h2>

        {posts.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="no-posts"
          >
            <p>{t('blog.no_posts')}</p>
          </motion.div>
        ) : (
          /* El Grid actúa como el orquestador de la animación (containerVariants) */
          <motion.div 
            className="blog-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {posts.map((post) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                lang={i18n.language} 
                t={t} 
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}