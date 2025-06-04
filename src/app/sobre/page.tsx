"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import { Rocket, Lightbulb, BarChart3 } from "lucide-react";
import styles from "./page.module.css";
import Image from "next/image";
import equipe from "@/assets/images/equipe.png";
import { Mail } from "lucide-react";

export default function Sobre() {
  return (
    <main className="bg-white py-5 pb-0">
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="fw-bold text-primary mb-3">Conheça a Ontrack</h2>
            <p className="text-dark">
              A Ontrack é uma empresa especializada em soluções de codificação
              industrial, rastreabilidade e manutenção de equipamentos. Buscamos
              parcerias duradouras com empresas que valorizam a eficiência na
              identificação de seus produtos.
            </p>
            <p className="text-dark">
              Nosso objetivo é contribuir com a produtividade das empresas,
              oferecendo serviços que aumentam a rastreabilidade, reduzem custos
              operacionais e garantem mais segurança aos processos industriais.
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <Image
              src={equipe}
              alt="Equipe Ontrack"
              width={500}
              height={333}
              className={`${styles.imgHoverEffect} img-fluid rounded-4 shadow`}
            />
          </Col>
        </Row>

        <Row className="g-4">
          {[
            {
              title: "Missão",
              text: "Oferecer soluções em codificação industrial com qualidade, tecnologia e suporte personalizado.",
              icon: <Rocket size={40} className="text-primary mb-3" />,
            },
            {
              title: "Visão",
              text: "Ser referência nacional em rastreabilidade e assistência em codificação industrial.",
              icon: <Lightbulb size={40} className="text-primary mb-3" />,
            },
            {
              title: "Valores",
              text: "Comprometimento, integridade, inovação e foco no cliente.",
              icon: <BarChart3 size={40} className="text-primary mb-3" />,
            },
          ].map((item, idx) => (
            <Col md={4} key={idx}>
              <Card
                className={`${styles.cardHover} h-100 text-center shadow-sm p-4 border-primary`}
                style={{ borderWidth: "2px", borderRadius: "16px" }}
              >
                <div>{item.icon}</div>
                <h5 className="fw-bold text-primary">{item.title}</h5>
                <p className="text-muted small">{item.text}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <section className="py-3 bg-dark text-white mt-5">
        <Container>
          <div className="text-center p-5 mx-auto" style={{ maxWidth: 720 }}>
            <h4 className="fw-bold text-white mb-3">
              Temos a solução para você!
            </h4>
            <p className="text-white fw-semibold mb-4">
              Fale conosco e saiba como podemos te ajudar com as suas
              <br />
              necessidades de codificação e marcação industrial
            </p>
            <a href="/contato" className="d-flex justify-content-center">
              <button
                className={`${styles.shake} btn btn-primary px-4 py-2 shadow-sm d-flex align-items-center gap-2`}
              >
                <Mail size={18} />
                Entre em contato
              </button>
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
