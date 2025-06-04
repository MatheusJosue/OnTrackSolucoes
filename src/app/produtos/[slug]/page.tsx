"use client";

import { notFound, useParams } from "next/navigation";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import tijImage from "@/assets/images/TIJJ.png";
import cijImage from "@/assets/images/CIJ.png";

const produtos = [
  {
    slug: "tij-mini-sk12",
    nome: "TIJ MINI SK12",
    imagem: tijImage,
    descricao:
      "Impressora TIJ compacta para aplicações de baixo volume com alta definição.",
    detalhes: [
      "Tecnologia de impressão TIJ",
      "Resolução de até 600 dpi",
      "Fácil integração em linhas compactas",
      "Compatível com diversos tipos de tintas",
    ],
  },
  {
    slug: "cij-sk2000-plus",
    nome: "CIJ SK2000 PLUS",
    imagem: cijImage,
    descricao:
      "Datadora CIJ para ambientes industriais com alta demanda de impressão.",
    detalhes: [
      "Impressão contínua com mínima manutenção",
      "Alta velocidade com baixa emissão de resíduos",
      "Interface amigável com display touchscreen",
      "Ideal para setores alimentício e farmacêutico",
    ],
  },
];

export default function ProdutoDetalhePage() {
  const params = useParams();
  const produto = produtos.find((p) => p.slug === params?.slug);

  if (!produto) return notFound();

  return (
    <main className="bg-white py-5">
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <Image
              src={produto.imagem}
              alt={produto.nome}
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold text-primary mb-3">{produto.nome}</h2>
            <p className="text-muted mb-4">{produto.descricao}</p>
            <ul className="text-muted">
              {produto.detalhes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <Button
              variant="primary"
              href="/contato"
              className="mt-4 px-4 py-2"
            >
              Fale com um especialista
            </Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
