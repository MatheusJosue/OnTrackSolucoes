"use client";

import { FaWhatsapp } from "react-icons/fa";
import styles from "./page.module.css";

export default function WhatsappButton() {
  const phone = "553171597403";
  const message = encodeURIComponent("Olá! Tenho interesse em soluções de codificação industrial.");
  const link = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
