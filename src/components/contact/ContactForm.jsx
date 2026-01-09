import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContactSchema } from "../../schema/contact.schema";
import FormStatus from "./FormStatus";
import GlassCard from "../ui/GlassCard";
import "./styles/ContactForm.css"; // Tu CSS adaptado

export default function ContactForm() {
  const { t } = useTranslation();
  const schema = createContactSchema(t);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const [status, setStatus] = React.useState(null);

  const onSubmit = async (data) => {
    setStatus(null);
    try {
      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      if (res.ok) {
        reset();
        setStatus({ type: "success", message: t("contact.success") });
      } else {
        setStatus({ type: "error", message: resData.error || t("contact.error") });
      }
    } catch {
      setStatus({ type: "error", message: t("contact.conection") });
    }
  };

  React.useEffect(() => {
    if (!status) return;
    const timer = setTimeout(() => setStatus(null), 3000);
    return () => clearTimeout(timer);
  }, [status]);

  return (
    /* Usamos GlassCard pero le añadimos tu clase específica para aplicar tus estilos */
    <GlassCard className="contact-form-glass">
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form-content">
        
        {/* Wrapper del input (necesario para tu CSS de centrado) */}
        <div className="input-wrapper">
          <input
            type="text"
            placeholder={t("contact.name")}
            className={errors.name ? "input-error-border" : ""}
            {...register("name")}
          />
          {errors.name && <span className="error-text">{errors.name.message}</span>}
        </div>

        <div className="input-wrapper">
          <input
            type="email"
            placeholder={t("contact.email")}
            className={errors.email ? "input-error-border" : ""}
            {...register("email")}
          />
          {errors.email && <span className="error-text">{errors.email.message}</span>}
        </div>

        <div className="input-wrapper">
          <textarea
            placeholder={t("contact.message")}
            rows="5"
            className={errors.message ? "input-error-border" : ""}
            {...register("message")}
          />
          {errors.message && <span className="error-text">{errors.message.message}</span>}
        </div>

        <div className="btn-contain">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? t("contact.sending") : t("contact.send")}
          </button>
        </div>
      </form>
      
      <FormStatus status={status} onClose={() => setStatus(null)} />
    </GlassCard>
  );
}