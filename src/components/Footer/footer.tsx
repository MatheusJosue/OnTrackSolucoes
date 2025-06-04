"use client";

import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Info,
  Wrench,
  PackageSearch,
  Send,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-4 pb-2 mt-auto small">
      <Container>
        <Row className="gy-3">
          <Col md={4}>
            <h6 className="d-flex align-items-center gap-2">
              <Info size={16} />
              Institucional
            </h6>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center gap-2">
                <Info size={16} />
                <Link href="/sobre" className="text-white text-decoration-none">
                  Sobre a Ontrack
                </Link>
              </li>
              <li className="d-flex align-items-center gap-2">
                <PackageSearch size={16} />
                <Link
                  href="/produtos"
                  className="text-white text-decoration-none"
                >
                  Produtos
                </Link>
              </li>
              <li className="d-flex align-items-center gap-2">
                <Wrench size={16} />
                <Link
                  href="/consumiveis"
                  className="text-white text-decoration-none"
                >
                  Consumíveis e Manutenções
                </Link>
              </li>
              <li className="d-flex align-items-center gap-2">
                <Send size={16} />
                <Link
                  href="/contato"
                  className="text-white text-decoration-none"
                >
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h6 className="d-flex align-items-center gap-2">
              <Wrench size={16} />
              Soluções
            </h6>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center gap-2">
                <PackageSearch size={16} />
                <Link
                  href="/produtos"
                  className="text-white text-decoration-none"
                >
                  Venda de Máquinas
                </Link>
              </li>
              <li className="d-flex align-items-center gap-2">
                <PackageSearch size={16} />
                <Link
                  href="/produtos"
                  className="text-white text-decoration-none"
                >
                  Aluguel de Máquinas
                </Link>
              </li>
              <li className="d-flex align-items-center gap-2">
                <Wrench size={16} />
                <Link
                  href="/consumiveis#manutencao"
                  className="text-white text-decoration-none"
                >
                  Manutenções em Datadoras
                </Link>
              </li>
              <li className="d-flex align-items-center gap-2">
                <PackageSearch size={16} />
                <Link
                  href="/consumiveis"
                  className="text-white text-decoration-none"
                >
                  Consumíveis e Suprimentos
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h6 className="d-flex align-items-center gap-2">
              <Send size={16} />
              Contato
            </h6>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center gap-2">
                <MapPin size={16} />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=R.+Silva+Jardim,+3517,+São+José+do+Rio+Preto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  R. Silva Jardim, 3517 - SP
                </a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:contato@suzukicodificacoes.com.br"
                  className="text-white text-decoration-none"
                >
                  contato@suzukicodificacoes.com.br
                </a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <Phone size={16} />
                <a
                  href="tel:+5517988163121"
                  className="text-white text-decoration-none"
                >
                  (17) 98816-3121
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="border-light opacity-25 my-3" />

        <Row>
          <Col className="text-center text-white-50">
            &copy; {new Date().getFullYear()} Ontrack Solutions. Todos os
            direitos reservados.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
