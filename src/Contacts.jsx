import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { Toast } from "primereact/toast";
import useWindowSize from "./hooks/useWindowSize";
import useInView from "./hooks/useInView";

const SERVICE_ID = "service_uc7ntyk";
const TEMPLATE_ID = "template_vwy4hqs";
const PUBLIC_KEY = "aeBvHuj5CUchLlQgR";

export default function Contacts() {
  const toast = useRef(null);
  const width = useWindowSize();
  const isMobile = width < 768;
  const [chargement, setChargement] = useState(false);
  const [refTitre, titreVisible] = useInView();
  const [refForm, formVisible] = useInView();
  const [refInfos, infosVisible] = useInView();

  const [form, setForm] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const handleEnvoyer = async () => {
    if (!form.nom || !form.email || !form.message) {
      toast.current.show({
        severity: "warn",
        summary: "Champs requis",
        detail: "Merci de remplir tous les champs.",
        life: 3000,
      });
      return;
    }

    setChargement(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.nom,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );

      toast.current.show({
        severity: "success",
        summary: "Message envoyé !",
        detail: "Je vous répondrai très vite.",
        life: 4000,
      });
      setForm({ nom: "", email: "", message: "" });

    } catch {
      toast.current.show({
        severity: "error",
        summary: "Erreur",
        detail: "Une erreur est survenue, réessayez.",
        life: 4000,
      });
    } finally {
      setChargement(false);
    }
  };

  return (
    <section id="contact" style={{
      padding: isMobile ? "4rem 1.5rem" : "6rem 2rem",
      maxWidth: 700,
      margin: "0 auto",
    }}>
      <Toast ref={toast} />

      {/* En-tête avec animation */}
      <div
        ref={refTitre}
        className={`fade-in ${titreVisible ? 'visible' : ''}`}
        style={{ textAlign: "center", marginBottom: "3rem" }}
      >
        <Tag
          value="Contact"
          style={{
            background: "rgba(34,211,238,0.1)",
            color: "#67e8f9",
            border: "1px solid rgba(34,211,238,0.3)",
            marginBottom: 16,
          }}
        />
        <h2 style={{ fontSize: isMobile ? "1.8rem" : "2.5rem", fontWeight: 800 }}>
          Travaillons ensemble
        </h2>
        <p style={{ color: "#94a3b8", marginTop: 8 }}>
          Vous avez un projet en tête ou souhaitez simplement échanger ? N'hésitez pas à me contacter !
        </p>
      </div>

      {/* Formulaire avec animation */}
      <div
        ref={refForm}
        className={`fade-in ${formVisible ? 'visible' : ''}`}
        style={{
          background: "rgba(99,102,241,0.05)",
          border: "1px solid rgba(99,102,241,0.15)",
          borderRadius: 16,
          padding: isMobile ? "1.5rem" : "2rem",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* Nom */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={{ fontSize: 14, color: "#94a3b8" }}>Nom</label>
          <InputText
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
            placeholder="Votre nom"
          />
        </div>

        {/* Email */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={{ fontSize: 14, color: "#94a3b8" }}>Email</label>
          <InputText
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Votre adresse email"
          />
        </div>

        {/* Message */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={{ fontSize: 14, color: "#94a3b8" }}>Message</label>
          <InputTextarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Votre message"
            rows={5}
            autoResize
          />
        </div>

        <Button
          label={chargement ? "Envoi en cours..." : "Envoyer"}
          icon={chargement ? "pi pi-spin pi-spinner" : "pi pi-send"}
          iconPos="right"
          onClick={handleEnvoyer}
          disabled={chargement}
          style={{
            background: "linear-gradient(135deg, #6366f1, #a855f7)",
            border: "none",
            marginTop: 8,
          }}
        />
      </div>

      {/* Infos contact avec animation */}
      <div
        ref={refInfos}
        className={`fade-in ${infosVisible ? 'visible' : ''}`}
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          gap: isMobile ? 12 : 32,
          marginTop: "2rem",
        }}
      >
        {[
          { icon: "pi pi-envelope", label: "quentinkou@gmail.com", href: "mailto:quentinkou@gmail.com" },
          { icon: "pi pi-map-marker", label: "Toulouse, France", href: null },
          { icon: "pi pi-linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/quentin-kouzmitch-35014b221" },
        ].map(({ icon, label, href }) => (
          <div
            key={label}
            onClick={() => href && window.open(href, "_blank")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#94a3b8",
              fontSize: 14,
              cursor: href ? "pointer" : "default",
            }}
          >
            <i className={icon} style={{ color: "#6366f1" }} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}