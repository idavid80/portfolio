import React from 'react';
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


import Spinner from "../components/ui/Spinner"
import './styles/NotFound.css'

export default function NotFound() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
     <div className="not_found-page">

      <div className="not_found-container">

        {/* Spinner + 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}

        >
<div className="not_found-spinner">
          <Spinner size={180} />
</div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h1
              className="text-5xl sm:text-6xl md:text-7xl
                         font-black tracking-tighter
                         text-slate-900/10 dark:text-white/10
                         select-none"
            >
              {t("not_found.title")}
            </h1>
          </div>
        </motion.div>

        {/* Textos */}
        <div className="mt-10 space-y-4">
          <motion.h2
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl
                       font-bold text-slate-800 dark:text-white"
          >
            {t("not_found.desc")}
          </motion.h2>

          <motion.h2
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base
                       text-slate-600 dark:text-slate-400"
          >
            {t("not_found.comment")}
          </motion.h2>
        </div>

        {/* Botón */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
       <button
  onClick={() => navigate("/")}
>
  {t("not_found.button")}
</button>
        </motion.div>
      </div>

    </div>
  );
}        