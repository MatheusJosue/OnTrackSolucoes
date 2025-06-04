"use client";

import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { MapPin, Mail, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

export default function FaleConosco() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const corpoEmail = `Nome: ${form.nome}\nE-mail: ${form.email}\nTelefone: ${form.telefone}\n\nMensagem:\n${form.mensagem}`;
    const mailto = `mailto:contato@ontrack.com?subject=Contato via site&body=${encodeURIComponent(
      corpoEmail
    )}`;
    window.location.href = mailto;
  };

  return (
    <main className="bg-white py-5 pb-0">
      <Container>
        <div className="text-center">
          <h2 className="fw-bold text-primary">Fale Conosco</h2>
        </div>

        <Row className="text-center mb-5">
          <Col md={4}>
            <Card className="border-0 bg-transparent">
              <Card.Body>
                <MapPin className="text-primary mb-2" size={32} />
                <h6 className="fw-bold">Nosso Endereço</h6>
                <p className="text-muted small mb-0">
                  R. Silva Jardim, 3517 – Parque Industrial,
                  <br /> São José do Rio Preto - SP, 15014-050
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 bg-transparent">
              <Card.Body>
                <Mail className="text-primary mb-2" size={32} />
                <h6 className="fw-bold">E-mail</h6>
                <p className="text-muted small mb-0">
                  contato@suzukicodificacoes.com.br
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 bg-transparent">
              <Card.Body>
                <Phone className="text-primary mb-2" size={32} />
                <h6 className="fw-bold">Telefone</h6>
                <p className="text-muted small mb-0">(17) 98816-3121</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="gx-0">
          <Col md={6}>
            <iframe
              title="Mapa"
              src="https://www.google.com/maps?q=R.+Silva+Jardim,+3517+-+Parque+Industrial,+São+José+do+Rio+Preto+-+SP,+15014-050&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </Col>

          <Col md={6} className="bg-primary text-white p-4">
            <h5 className="fw-bold mb-4">Entre em Contato</h5>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col>
                  <Form.Control
                    name="nome"
                    placeholder="Nome"
                    className="mb-2"
                    value={form.nome}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    className="mb-2"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control
                    name="telefone"
                    placeholder="Telefone"
                    value={form.telefone}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  name="mensagem"
                  rows={4}
                  placeholder="Mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="outline-light" type="submit">
                Enviar Mensagem
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <section className="bg-dark text-white mt-5 py-5">
        <Container>
          <h4 className="fw-bold mb-4 text-center">
            Por que escolher a Ontrack?
          </h4>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <p className="mb-2 fw-semibold">+15 anos de experiência</p>
              <p className="small">
                Atuando com excelência no mercado de codificação e
                rastreabilidade industrial.
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <p className="mb-2 fw-semibold">Suporte técnico especializado</p>
              <p className="small">
                Equipe preparada para oferecer soluções rápidas e
                personalizadas.
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <p className="mb-2 fw-semibold">Parcerias estratégicas</p>
              <p className="small">
                Trabalhamos com as principais marcas e tecnologias do mercado.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
