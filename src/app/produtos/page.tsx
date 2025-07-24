"use client";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import tijImage from "@/assets/images/TIJJ.png";
import styles from "./page.module.css";
import datadoraSemiNova from "@/assets/images/datadoraseminovas.png";
import videojet from "@/assets/images/videojetcomfundo.png";
import { FaWhatsapp } from "react-icons/fa";

const produtos = [
  {
    nome: "CIJ - Novas",
    slug: "cij-mini-sk12",
    imagem: tijImage,
    tecnologia: "CIJ",
    descricao:
      "Impressoras de jato contínuo para ambientes industriais de alta demanda.",
  },
  {
    nome: "TIJ - Novas",
    slug: "cij-sk2000-plus",
    imagem: datadoraSemiNova,
    tecnologia: "TIJ",
    descricao:
      "Impressoras térmicas de alta resolução ideais para pequena e médias produção.",
  },
  {
    nome: "CIJ - Seminovas",
    slug: "cij-sk2000-plus",
    imagem: videojet,
    tecnologia: "CIJ",
    descricao:
      "Impressoras de jato contínuo para ambientes industriais de alta demanda.",
  },
];

export default function ProdutosPage() {
  return (

    <main className="bg-light py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">Nossos Produtos</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: 720 }}>
            Trabalhamos com impressoras industriais de alta qualidade,
            desenvolvidas para garantir codificações precisas, duráveis e com
            excelente desempenho em diferentes tipos de linhas de produção.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {produtos.map((produto, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} lg={3}>
              <Card
                className={`${styles.cardHover} h-100 text-center border-0 p-3`}
              >
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={produto.imagem}
                    alt={produto.nome}
                    style={{
                      objectFit: "contain",
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </div>
                <Card.Body>
                  <h6 className="fw-bold text-primary mb-2">{produto.nome}</h6>
                  <p className="text-muted small mb-2">
                    Tecnologia: {produto.tecnologia}
                  </p>
                  <p className="text-muted small">{produto.descricao}</p>
                  <Button
                    variant="success"
                    size="sm"
                    href={`https://wa.me/5531999538990?text=${encodeURIComponent(
                      `Olá, estou entrando em contato pois vi no site da Ontrack o produto ${produto.nome} e gostaria de mais informações.`
                    )}`}
                    target="_blank"
                    className="d-flex align-items-center py-2"
                  >
                    <FaWhatsapp className="me-2" /> Entrar em contato via
                    WhatsApp
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}
