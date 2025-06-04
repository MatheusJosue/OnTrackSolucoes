"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import tijImage from "@/assets/images/TIJJ.png";
import cijImage from "@/assets/images/CIJ.png";
import styles from "./page.module.css";

const produtos = [
  {
    nome: "TIJ MINI SK12",
    slug: "tij-mini-sk12",
    imagem: tijImage,
    tecnologia: "TIJ",
    descricao: "Impressora compacta de alta resolução para pequenos volumes."
  },
  {
    nome: "CIJ SK2000 PLUS",
    slug: "cij-sk2000-plus",
    imagem: cijImage,
    tecnologia: "CIJ",
    descricao: "Datadora industrial robusta para operações de alto desempenho."
  }
];

export default function ProdutosPage() {
  return (
    <main className="bg-light py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">Nossos Produtos</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: 720 }}>
            Trabalhamos com impressoras industriais de alta qualidade, desenvolvidas para garantir codificações precisas, duráveis e com excelente desempenho em diferentes tipos de linhas de produção.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {produtos.map((produto, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} lg={3}>
              <Card className={`${styles.cardHover} h-100 text-center border-0 p-3`}>
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Image
                    src={produto.imagem}
                    alt={produto.nome}
                    style={{ objectFit: "contain", maxHeight: "100%", maxWidth: "100%" }}
                  />
                </div>
                <Card.Body>
                  <h6 className="fw-bold text-primary mb-2">{produto.nome}</h6>
                  <p className="text-muted small mb-2">Tecnologia: {produto.tecnologia}</p>
                  <p className="text-muted small">{produto.descricao}</p>
                  <Link href={`/produtos/${produto.slug}`} className="btn btn-outline-primary mt-3">
                    Ver Detalhes
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}
