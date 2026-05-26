"use client";

import { useState } from "react";

export default function CadastroPage(){

  const [nome, setNome] = useState("");

  const [email, setEmail] = useState("");

  const [senha, setSenha] = useState("");

  function cadastrar(){

    if(
      nome.trim() === "" ||
      email.trim() === "" ||
      senha.trim() === ""
    ){

      alert(
        "Preencha todos os campos."
      );

      return;
    }

    alert(
      "Cadastro realizado com sucesso!"
    );

    setNome("");
    setEmail("");
    setSenha("");

  }

  return(

    <main className="delivery-page">

      <section className="hero">

        <h1>
          Criar <span>Conta</span>
        </h1>

        <p>
          Cadastre-se para realizar pedidos e reservas.
        </p>

      </section>

      <div className="auth-container">

        <div className="auth-card">

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
            placeholder="Seu e-mail"
            value={email}
            onChange={(e)=>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            className="delivery-input"
            placeholder="Sua senha"
            value={senha}
            onChange={(e)=>
              setSenha(e.target.value)
            }
          />

          <button
            className="finish-button"
            onClick={cadastrar}
          >
            Criar Conta
          </button>

        </div>

      </div>

    </main>

  );
}