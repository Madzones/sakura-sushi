"use client";

import { useEffect, useState } from "react";

export default function DeliveryPage() {

  const [carrinho, setCarrinho] = useState<any[]>([]);

  const [bairro, setBairro] = useState("");

  const [nome, setNome] = useState("");

  const [endereco, setEndereco] = useState("");

  useEffect(() => {

    const dados = localStorage.getItem("carrinho");

    if(dados){
      setCarrinho(JSON.parse(dados));
    }

  }, []);

  const subtotal = carrinho.reduce(
    (acc, item) => acc + item.preco,
    0
  );

  let taxaEntrega = 4.99;

  if(
    bairro.toLowerCase().includes("centro")
  ){
    taxaEntrega = 5;
  }
  else if(bairro !== "Sul"){
    taxaEntrega = 7.99;
  }

  const total = subtotal + taxaEntrega;

  function finalizarPedido(){

    if(
      nome.trim() === "" ||
      endereco.trim() === "" ||
      bairro.trim() === ""
    ){

      alert(
        "Preencha todos os campos para finalizar o pedido."
      );

      return;
    }

    if(carrinho.length === 0){

      alert(
        "Seu carrinho está vazio."
      );

      return;
    }

    alert(
      "Pedido realizado com sucesso!"
    );

    localStorage.removeItem("carrinho");

    setCarrinho([]);

    setNome("");

    setEndereco("");
  }
  return (

    <main className="delivery-page">

      <section className="hero">

        <h1>
          Finalizar <span>Pedido</span>
        </h1>

        <p>
          Confira seus itens e informe o endereço para entrega.
        </p>

      </section>

      <section className="delivery-layout">

        {/* PRODUTOS */}

        <div className="delivery-products">

          {carrinho.length === 0 ? (

            <div className="food-card">

              <div className="food-content">

                <h2>
                  Seu carrinho está vazio.
                </h2>

              </div>

            </div>

          ) : (

            carrinho.map((item, index) => (

              <div
                className="food-card"
                key={index}
              >

                <div className="food-content">

                  <h2>
                    {item.nome}
                  </h2>

                  <div className="line"></div>

                  <div className="price">
                    R$ {item.preco.toFixed(2)}
                  </div>

                </div>

              </div>

            ))

          )}

        </div>

        {/* RESUMO */}

        <aside className="floating-cart">

          <h3>
            Resumo
          </h3>

          <p>
            {carrinho.length} itens
          </p>

          <div className="cart-line">

            <span>
              Total
            </span>

            <strong>
              R$ {subtotal.toFixed(2)}
            </strong>

          </div>

          <div className="cart-line">

            <span>
              Entrega
            </span>

            <strong>
              R$ {taxaEntrega.toFixed(2)}
            </strong>

          </div>

          <div className="cart-total">
            R$ {total.toFixed(2)}
          </div>

          <input
            className="delivery-input"
            placeholder="Seu nome"
            value={nome}
            onChange={(e)=>
              setNome(e.target.value)
            }
          />

          <input
            className="delivery-input"
            placeholder="Seu endereço"
            value={endereco}
            onChange={(e)=>
              setEndereco(e.target.value)
            }
          />

          <input
            className="delivery-input"
            placeholder="Seu bairro"
            value={bairro}
            onChange={(e)=>
              setBairro(e.target.value)
            }
          />

          <button
            className="finish-button"
            onClick={finalizarPedido}
          >
            Finalizar Pedido
          </button>

        </aside>

      </section>

    </main>

  );
}