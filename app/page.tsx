import Link from "next/link";

export default function Home() {
  return (
    <main className="pattern-bg min-h-screen flex items-center">

      <section className="w-full max-w-[1600px] mx-auto px-8 py-32">

        <div className="grid lg:grid-cols-2 items-center gap-20">

          {/* TEXTO */}

          <div className="flex flex-col justify-center items-center text-center">

            <p className="text-red-600 uppercase tracking-[6px] font-bold mb-6 text-xl">
              Exclusivo Sakura Sushi
            </p>

            <h1 className="text-6xl lg:text-8xl font-black leading-[1.1]">

              Combinações

              <span className="text-red-700 block">
               Irresistíveis
              </span>

            </h1>

            <p className="text-gray-300 text-2xl leading-10 mt-10 max-w-[850px]">

              Experimente os melhores combos japoneses preparados
              com ingredientes frescos e apresentação premium.

            </p>

            {/* BOTÕES */}

            <div className="flex flex-wrap justify-center gap-10 mt-16">

              <Link
                href="/delivery"
                className="bg-red-700 hover:bg-red-800 transition px-20 py-8 rounded-full text-3xl font-black shadow-2xl hover:scale-105"
              >
                🍣 PEÇA JÁ
              </Link>

              <Link
                href="/cardapio"
                className="border-2 border-white hover:bg-white hover:text-black transition px-20 py-8 rounded-full text-3xl font-black hover:scale-105"
              >
                Ver Cardápio
              </Link>

            </div>

          </div>

          {/* IMAGEM */}

          <div className="flex justify-center mt-16 lg:mt-24">

            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1611762687807-7cdd09aef422?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop"
                alt="Sushi"
                className="w-[700px] h-[520px] object-cover rounded-[40px] border-4 border-red-700 shadow-2xl"
              />

              {/* PREÇO */}

              <div className="absolute -bottom-10 -left-10 bg-red-700 w-52 h-52 rounded-full flex flex-col items-center justify-center border-8 border-black shadow-2xl">

                <span className="text-white text-lg">
                  A partir de
                </span>

                <span className="text-yellow-400 text-6xl font-black">
                  R$59
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}