"use client";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import styles from "./page.module.css";
import videojet from "@/assets/images/videojet.png";
import markemImaje from "@/assets/images/markemImaje.png";
import domino from "@/assets/images/domino.png";
import bestCode from "@/assets/images/bestCode.png";

export default function Consumiveis() {
  const produtos = [
    {
      title: "Video Jet",
      image: videojet,
      description:
        "Tintas e solventes 100% compatíveis com a linha Video Jet. Qualidade garantida.",
    },
    {
      title: "Markem Imaje",
      image: markemImaje,
      description:
        "Consumíveis com alta performance para modelos Imaje. Mais economia e confiança.",
    },
    {
      title: "Domino",
      image: domino,
      description:
        "Toda a linha de tintas e solventes para equipamentos Domino. Pronto para sua produção.",
    },
    {
      title: "BestCode",
      image: bestCode,
      description:
        "Alto rendimento e nitidez. Compatíveis com toda a linha BestCode.",
    },
  ];

  return (
    <main className="bg-light">
      <section className="py-5">
        <Container>
          <div className="mb-5 text-center">
            <h2 className="fw-bold text-primary">
              Compatíveis com as principais marcas de datadores inkjet do mercado
            </h2>
            <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "720px" }}>
              Oferecemos uma linha completa de consumíveis compatíveis com as principais marcas do mercado. Produtos de alta qualidade que garantem desempenho, durabilidade e o melhor custo-benefício para sua operação.
            </p>
          </div>

          <h5 className="text-dark mb-4 fw-bold">Consumíveis para Datadoras:</h5>

          <Row className="g-4">
            {produtos.map((item, idx) => (
              <Col key={idx} xs={12} sm={6} md={3}>
                <Card className={`${styles.cardHover} h-100 text-center border-0 rounded-4`}>
                  <Card.Body className="d-flex flex-column align-items-center justify-content-between">
                    <h6 className="fw-bold text-primary mb-3">{item.title}</h6>
                    <div
                      style={{
                        width: "100%",
                        height: "180px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "1rem",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        style={{
                          objectFit: "contain",
                          maxHeight: "100%",
                          maxWidth: "100%",
                        }}
                      />
                    </div>
                    <p className="text-muted small">{item.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5 d-flex flex-column flex-md-row justify-content-center gap-3">
            <Button
              variant="outline-primary"
              size="lg"
              href="mailto:contato@ontrack.com"
              className="d-flex align-items-center gap-2 px-4 py-2"
            >
              <FaEnvelope /> Entrar em contato via E-mail
            </Button>
            <Button
              variant="success"
              size="lg"
              href="https://wa.me/5517999999999"
              target="_blank"
              className="d-flex align-items-center gap-2 px-4 py-2"
            >
              <FaWhatsapp /> Entrar em contato via WhatsApp
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
