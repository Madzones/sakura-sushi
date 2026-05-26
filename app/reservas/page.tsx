"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Reservas() {

  const [nome, setNome] = useState("");
  const [pessoas, setPessoas] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  async function reservar() {

    if (
      nome.trim() === "" ||
      pessoas.trim() === "" ||
      data.trim() === "" ||
      hora.trim() === ""
    ) {

      alert("Preencha todos os campos.");
      return;
    }

    const { error } = await supabase
      .from("reservas")
      .insert([
        {
          nome,
          pessoas,
          data,
          hora
        }
      ]);

    if (error) {

      console.log(error);

      alert("Erro ao realizar reserva.");
      return;
    }

    alert("Reserva realizada com sucesso!");

    setNome("");
    setPessoas("");
    setData("");
    setHora("");
  }

  return (

    <main className="min-h-screen flex items-center justify-center px-6 py-32">

      <div className="w-full max-w-2xl bg-[#111] border border-red-900 rounded-[35px] p-10 shadow-2xl">

        <h1 className="text-5xl font-black text-center mb-6">

          Faça sua

          <span className="text-red-600">
            {" "}Reserva
          </span>

        </h1>

        <p className="text-gray-400 text-center mb-10">

          Reserve sua mesa no Sakura Sushi
          e tenha uma experiência premium.

        </p>

        <div className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) =>
              setNome(e.target.value)
            }
            className="delivery-input"
          />

          <input
            type="number"
            placeholder="Quantidade de pessoas"
            value={pessoas}
            onChange={(e) =>
              setPessoas(e.target.value)
            }
            className="delivery-input"
          />

          <input
            type="text"
            placeholder="Data da reserva (dd/mm/aaaa)"
            value={data}
            onChange={(e) =>
              setData(e.target.value)
            }
            className="delivery-input"
          />

          <input
            type="time"
            value={hora}
            onChange={(e) =>
              setHora(e.target.value)
            }
            className="delivery-input"
          />

          <button
            onClick={reservar}
            className="finish-button"
          >

            Confirmar Reserva

          </button>

        </div>

      </div>

    </main>
  );
}