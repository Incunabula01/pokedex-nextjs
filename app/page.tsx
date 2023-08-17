// import Image from 'next/image'
import PokedexContainer from "./components/Pokedex/PokedexContainer";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col">
      <header className="text-center p-1">
        <h1>Pokedex</h1>
      </header>
      <section className="p-2">
        <PokedexContainer/>
      </section>
    </main>
  )
}


