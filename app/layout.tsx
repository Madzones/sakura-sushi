import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Sakura Sushi",
  description: "Restaurante Japonês Premium",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">

      <body>

        {/* NAVBAR */}

        <header className="navbar">

          <div className="nav-container">

            {/* LOGO */}

            <Link href="/" className="logo">

              <span className="logo-white">
                Sakura
              </span>

              <span className="logo-red">
                {" "}Sushi
              </span>

            </Link>

            {/* LINKS */}

            <nav className="nav-links">

              <Link href="/">
                Home
              </Link>

              <Link href="/cardapio">
                Cardápio
              </Link>

              <Link href="/delivery">
                Delivery
              </Link>

              <Link href="/reservas">
                Reservas
              </Link>

              <Link href="/cadastro">
                Cadastro
              </Link>

            </nav>

            {/* BOTÃO */}

            <Link
              href="/delivery"
              className="pedido-button"
            >
              Peça Agora
            </Link>

          </div>

        </header>

        {/* CONTEÚDO */}

        {children}

      </body>

    </html>
  );
}