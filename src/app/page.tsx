"use client";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import {
  Handshake,
  Lightbulb,
  PackageSearch,
  PenLine,
  Repeat,
  ShoppingCart,
  Wrench,
} from "lucide-react";
import tijImage from "@/assets/images/TIJJ.png";
import cijImage from "@/assets/images/CIJ.png";
import datadora from "@/assets/images/datadora.png";
import datadoraSemiNova from "@/assets/images/datadoraseminovas.png";
import cliente1 from "@/assets/images/cliente1.jpg";
import cliente2 from "@/assets/images/cliente2.jpg";
import cliente3 from "@/assets/images/cliente3.jpg";
import cliente4 from "@/assets/images/cliente4.jpg";
import cliente5 from "@/assets/images/cliente5.jpg";
import cliente6 from "@/assets/images/cliente6.jpg";
import cliente7 from "@/assets/images/cliente7.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import TypewriterText from "@/components/TypewriterText/TypewriterText";
import videojet from "@/assets/images/videojetcomfundo.png";

export default function Home() {
  const logos = [
    cliente1,
    cliente2,
    cliente3,
    cliente4,
    cliente5,
    cliente6,
    cliente7,
  ];

  return (
    <main className="bg-light">
      <section className={styles.heroVideoSection}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.backgroundVideo}
        >
          <source src="/videos/bgHome.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo HTML5.
        </video>

        <div className={styles.overlay}>
          <Container>
            <div className="text-center text-white">
              <h1 className="fw-bold display-5 mb-3">
                Sua codificação em ótimas mãos!
              </h1>
              <p className="lead mb-4">
                Na Ontrack você fica tranquilo com seus produtos e máquinas.
              </p>
            </div>
          </Container>
        </div>
      </section>

      <section className={styles.featureCards}>
        <Container>
          <Row className="gy-4 justify-content-center">
            {[
              {
                title: "Equipamentos Modernos",
                text: "Equipe técnica especializada e equipamentos modernos, garantem a satisfação dos nossos clientes!",
                icon: <Lightbulb size={48} className="text-white mb-3" />,
              },
              {
                title: "Codificações Perfeitas",
                text: "As impressoras da Ontrack são o segredo para codificações perfeitas em alimentos e embalagens!",
                icon: <PenLine size={48} className="text-white mb-3" />,
              },
              {
                title: "Cobrimos As Tecnologias",
                text: "Nossos produtos top de linha garantem confiança e durabilidade!",
                icon: <Handshake size={48} className="text-white mb-3" />,
              },
            ].map((item, idx) => (
              <Col key={idx} xs={12} md={4}>
                <div className={styles.featureCard}>
                  {item.icon}
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="mb-0">{item.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* SERVIÇOS EM DESTAQUE */}
      <section style={{ backgroundColor: "#dee3ea" }} className="py-5">
        <Container>
          <div className="mb-5">
            <h2 className="fw-bold text-primary">Nossos Serviços</h2>
            <p className="text-black">
              Soluções completas para codificação, rastreabilidade e manutenção
              industrial
            </p>
          </div>
          <Row className="text-center gy-4">
            {[
              {
                title: "Venda de Máquinas",
                href: "/produtos",
                icon: <ShoppingCart size={32} className="mb-3 text-primary" />,
                description:
                  "Equipamentos modernos e confiáveis para sua linha de produção.",
              },
              {
                title: "Aluguel de Máquinas",
                href: "/produtos",
                icon: <Repeat size={32} className="mb-3 text-primary" />,
                description:
                  "Flexibilidade e economia com soluções sob demanda.",
              },
              {
                title: "Manutenção em Datadoras",
                href: "/consumiveis#manutencao",
                icon: <Wrench size={32} className="mb-3 text-primary" />,
                description: "Assistência técnica especializada e preventiva.",
              },
              {
                title: "Insumos e Consumíveis",
                href: "/consumiveis",
                icon: <PackageSearch size={32} className="mb-3 text-primary" />,
                description:
                  "Tintas, solventes e peças com qualidade garantida.",
              },
            ].map((item, idx) => (
              <Col md={3} key={idx}>
                <Card className={`${styles.serviceCard} h-100 p-3 shadow-sm`}>
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                    {item.icon}
                    <Card.Title className="fw-bold mb-2">
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-muted small mb-3">
                      {item.description}
                    </Card.Text>
                    <Link href={item.href}>
                      <Button variant="outline-primary" size="sm">
                        Saiba mais
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* NOSSOS PRODUTOS */}
      <section className="bg-white py-5 text-center">
        <Container>
          <h2 className="mb-3 fw-bold text-primary">Nossos Produtos</h2>
          <p className="text-black mb-5">
            Trabalhamos com impressoras industriais de alta qualidade,
            desenvolvidas para garantir codificações precisas, duráveis e com
            excelente desempenho em diferentes tipos de linhas de produção.
          </p>

          <Row className="justify-content-center gy-4">
            {[
              {
                title: "CIJ - Novas",
                description:
                  "Impressoras de jato contínuo para ambientes industriais de alta demanda.",

                image: tijImage,
                link: "/produtos/tij-mini-sk12",
              },
              {
                title: "TIJ - Novas",
                description:
                  "Impressoras térmicas de alta resolução ideais para pequena e médias produção.",
                image: datadoraSemiNova,
                link: "/produtos/cij-sk2000-plus",
              },
              {
                title: "CIJ - Seminovas",
                description:
                  "Impressoras de jato contínuo para ambientes industriais de alta demanda.",
                image: videojet,
                link: "/produtos/tij-mini-sk12",
              },
            ].map((product, idx) => (
              <Col key={idx} md={6} lg={3}>
                <div className={styles.productCard}>
                  <div className={styles.productImageWrapper}>
                    <Image
                      src={product.image}
                      alt={`Imagem ${product.title}`}
                      className={styles.productImage}
                    />
                    <div className={styles.productOverlay}>
                      <h5 className="fw-bold mb-3">{product.title}</h5>
                      <p className="mb-3">{product.description}</p>
                      <Link href={product.link}>
                        <Button variant="primary">Ver modelos</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <Button className="mt-5" variant="outline-primary" size="lg">
            Ver Produtos
          </Button>
        </Container>
      </section>

      {/* TEXTO INSTITUCIONAL + IMAGEM */}
      <section className={`${styles.brandSection} py-5`}>
        <Container>
          <Row className="align-items-center text-center text-md-start">
            <Col md={6}>
              <h3 className="text-white mb-3">
                Como garantir a qualidade da sua marca?
              </h3>
              <TypewriterText
                text="As impressoras Ontrack asseguram códigos nítidos, duráveis e de alta precisão, garantindo a integridade visual do seu produto com o menor custo operacional do mercado."
                className="text-light fs-5"
              />
            </Col>
            <Col md={6} className="d-flex justify-content-center mt-4 mt-md-0">
              <Image
                src={datadora}
                alt="Datadora"
                width={300}
                height={300}
                className={`${styles.circularImage}`}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* CLIENTES / PARCEIROS */}
      <section className={styles.clientesSection}>
        <Container className="text-center">
          <h2 className="mb-5 fw-bold text-primary">Nossos Clientes</h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            loop
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
            }}
          >
            {logos.map((logo, idx) => (
              <SwiperSlide key={idx}>
                <div
                  style={{
                    width: "250px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={logo}
                    alt={`Logo ${idx + 1}`}
                    width={250}
                    height={100}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
    </main>
  );
}
