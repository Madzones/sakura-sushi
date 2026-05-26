"use client";

import { useState } from "react";
import Link from "next/link";

export default function Cardapio() {

  const [carrinho, setCarrinho] = useState<any[]>([]);

  function adicionarCarrinho(nome: string, preco: number) {

    const novoCarrinho = [
      ...carrinho,
      { nome, preco }
    ];

    setCarrinho(novoCarrinho);

    localStorage.setItem(
      "carrinho",
      JSON.stringify(novoCarrinho)
    );
  }

  const total = carrinho.reduce(
    (acc, item) => acc + item.preco,
    0
  );

  return (
    <main>

      <section className="hero">

        <h1>
          Nosso <span>Cardápio</span>
        </h1>

        <p>
          Uma experiência gastronômica japonesa premium preparada
          com ingredientes frescos e selecionados.
        </p>

      </section>

      <section className="menu-grid">

        <div className="food-card">

          <img
            src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200&auto=format&fit=crop"
            alt="Sushi"
          />

          <div className="food-content">

            <h2>Sushi Premium</h2>

            <p>
              Seleção especial com peças frescas e ingredientes nobres. (20 peças)
            </p>

            <div className="line"></div>

            <div className="price">
              R$ 89,90
            </div>

            <button
              className="delivery-button"
              onClick={() =>
                adicionarCarrinho(
                  "Sushi Premium",
                  89.9
                )
              }
            >
              Adicionar ao Carrinho
            </button>

          </div>

        </div>

        <div className="food-card">

          <img
            src="https://plus.unsplash.com/premium_photo-1738099524886-5697dd327725?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVtYWtpfGVufDB8fDB8fHwwauto=format&fit=crop"
            alt="Temaki"
          />

          <div className="food-content">

            <h2>Temaki Especial</h2>

            <p>
              Temaki recheado com salmão fresco e cream cheese. (5 peças)
            </p>

            <div className="line"></div>

            <div className="price">
              R$ 32,90
            </div>

            <button
              className="delivery-button"
              onClick={() =>
                adicionarCarrinho(
                  "Temaki Especial",
                  32.9
                )
              }
            >
              Adicionar ao Carrinho
            </button>

          </div>

        </div>

        <div className="food-card">

          <img
            src="https://images.unsplash.com/photo-1674516584901-e6d78a62f0df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop"
            alt="Yakisoba"
          />

          <div className="food-content">

            <h2>Yakisoba Tradicional</h2>

            <p>
              Macarrão oriental preparado no molho especial da casa. (Serve 2 pessoas)
            </p>

            <div className="line"></div>

            <div className="price">
              R$ 44,90
            </div>

            <button
              className="delivery-button"
              onClick={() =>
                adicionarCarrinho(
                  "Yakisoba Tradicional",
                  44.9
                )
              }
            >
              Adicionar ao Carrinho
            </button>

          </div>

        </div>

      </section>

      {/* BEBIDAS */}

      <h2 className="text-5xl font-black text-center text-red-600 mt-24 mb-14">
        Bebidas
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-[#111] border border-red-900 rounded-2xl p-6 hover:border-red-600 transition">

          <h2 className="text-2xl font-black text-white">
            Coca-Cola 2L
          </h2>

          <p className="text-gray-400 mt-2">
            Refrigerante gelado.
          </p>

          <div className="line"></div>

          <div className="text-yellow-400 text-3xl font-black mt-4">
            R$ 16,90
          </div>

          <button
            className="delivery-button"
            onClick={() =>
              adicionarCarrinho(
                "Coca-Cola 2L",
                16.9
              )
            }
          >
            Adicionar ao Carrinho
          </button>

        </div>

        <div className="bg-[#111] border border-red-900 rounded-2xl p-6 hover:border-red-600 transition">

          <h2 className="text-2xl font-black text-white">
            Guaraná 2L
          </h2>

          <p className="text-gray-400 mt-2">
            Refrigerante brasileiro.
          </p>

          <div className="line"></div>

          <div className="text-yellow-400 text-3xl font-black mt-4">
            R$ 14,90
          </div>

          <button
            className="delivery-button"
            onClick={() =>
              adicionarCarrinho(
                "Guaraná 2L",
                14.9
              )
            }
          >
            Adicionar ao Carrinho
          </button>

        </div>

        <div className="bg-[#111] border border-red-900 rounded-2xl p-6 hover:border-red-600 transition">

          <h2 className="text-2xl font-black text-white">
            Fanta Laranja
          </h2>

          <p className="text-gray-400 mt-2">
            Refrescante e gelada.
          </p>

          <div className="line"></div>

          <div className="text-yellow-400 text-3xl font-black mt-4">
            R$ 12,90
          </div>

          <button
            className="delivery-button"
            onClick={() =>
              adicionarCarrinho(
                "Fanta Laranja",
                12.9
              )
            }
          >
            Adicionar ao Carrinho
          </button>

        </div>

      </div>

      {/* MOLHOS */}

      <h2 className="text-5xl font-black text-center text-yellow-500 mt-24 mb-14">
        Molhos e Acompanhamentos
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        <div className="food-card">

          <div className="food-content">

            <h2>Shoyu</h2>

            <p>
              Molho tradicional japonês.
            </p>

            <div className="line"></div>

            <div className="price">
              R$ 3,00
            </div>

            <button
              className="delivery-button"
              onClick={() =>
                adicionarCarrinho(
                  "Shoyu",
                  3
                )
              }
            >
              Adicionar ao Carrinho
            </button>

          </div>

        </div>

        <div className="food-card">

          <div className="food-content">

            <h2>Molho Tarê</h2>

            <p>
              Molho agridoce especial.
            </p>

            <div className="line"></div>

            <div className="price">
              R$ 4,00
            </div>

            <button
              className="delivery-button"
              onClick={() =>
                adicionarCarrinho(
                  "Molho Tarê",
                  4
                )
              }
            >
              Adicionar ao Carrinho
            </button>

          </div>

        </div>

        <div className="food-card">

          <div className="food-content">

            <h2>Wasabi</h2>

            <p>
              Pasta japonesa picante.
            </p>

            <div className="line"></div>

            <div className="price">
              R$ 2,50
            </div>

            <button
              className="delivery-button"
              onClick={() =>
                adicionarCarrinho(
                  "Wasabi",
                  2.5
                )
              }
            >
              Adicionar ao Carrinho
            </button>

          </div>

        </div>

        <div className="food-card">

          <div className="food-content">

            <h2>Gengibre</h2>

            <p>
              Conserva tradicional japonesa.
            </p>

            <div className="line"></div>

            <div className="price">
              R$ 2,00
            </div>

            <button
              className="delivery-button"
              onClick={() =>
                adicionarCarrinho(
                  "Gengibre",
                  2
                )
              }
            >
              Adicionar ao Carrinho
            </button>

          </div>

        </div>

      </div>

      <div className="floating-cart">

        <h3>Carrinho</h3>

        <p>
          {carrinho.length} itens
        </p>

        <span>
          R$ {total.toFixed(2)}
        </span>

        <Link href="/delivery">

          <button className="finish-button">
            Ir para Delivery
          </button>

        </Link>

      </div>

    </main>
  );
}