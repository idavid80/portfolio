import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/contact/ContactForm";
import './styles/Contact.css';

// 1. IMPORTAMOS LAS UTILIDADES
import { 
  containerVariants, 
  titleVariants, 
  itemVariants,
  viewportConfig 
} from "../utils/motion";

export default function ContactSection({ id }) {
  const { t } = useTranslation();

  return (
    <section id={id} className="contact">
      {/* 2. CONVERTIMOS EL CONTAINER EN UN ORQUESTADOR */}
      <motion.div 
        className="contact-container"
        variants={containerVariants} // Define el ritmo (stagger)
        initial="hidden"
        whileInView="visible" // Se activa al hacer scroll
        viewport={viewportConfig}
      >
        {/* 3. TÍTULO SIN CONFIGURACIÓN MANUAL */}
        <motion.h2
          variants={titleVariants}
          className="contact-title"
        >
          {t("contact.title")}
        </motion.h2>

        {/* 4. SUBTÍTULO COMO UN ITEM DE LA LISTA */}
        <motion.p
          variants={itemVariants} // Aparece suavemente después del título
          className="contact-subtitle"
        >
          {t("contact.subtitle")}
        </motion.p>

        {/* 5. EL FORMULARIO APARECE AL FINAL */}
        {/* Lo envolvemos para que respete el turno de animación */}
        <motion.div variants={itemVariants}>
          <ContactForm />
        </motion.div>
        
      </motion.div>
    </section>
  );
}