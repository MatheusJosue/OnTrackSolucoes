"use client";

import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/images/onTrackLogo.png";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  return (
    <Navbar expand="lg" bg="light" variant="light" className="border-bottom shadow-sm py-2">
      <Container fluid className="px-4">
        <Navbar.Brand as={Link} href="/" className="d-flex align-items-center">
          <Image
            src={logo}
            alt="Logo OnTrack"
            width={150}
            style={{ height: "auto", maxWidth: "100%" }}
            priority
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar-nav" />

        <Navbar.Collapse id="main-navbar-nav">
          {/* LINKS DE MENU */}
          <Nav
            className="mx-auto my-2 my-lg-0 text-center d-flex flex-column flex-lg-row gap-0 gap-lg-4"
          >
            <Nav.Link as={Link} href="/produtos" active={pathname === "/produtos"}>
              Produtos
            </Nav.Link>
            <Nav.Link as={Link} href="/consumiveis" active={pathname === "/consumiveis"}>
              Consumíveis e Manutenções
            </Nav.Link>
            <Nav.Link as={Link} href="/sobre" active={pathname === "/sobre"}>
              Sobre
            </Nav.Link>
          </Nav>

          {/* BOTÃO FALE CONOSCO */}
          <div className="d-flex justify-content-center justify-content-lg-end mt-2 mt-lg-0">
            <Link href="/contato">
              <Button variant="primary">Fale Conosco</Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
