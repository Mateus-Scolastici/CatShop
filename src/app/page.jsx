import Header from "../components/header";

export default function Home() {
  
  return (<>
    <Header />
    <div className="w-screen h-screen pt-[80px] flex flex-row justify-center items-center ml-auto px-[50px] gap-x-[100px]">
      <img className="border-2 border-black" src="https://placekitten.com/500/500" />
      <div className="flex flex-col pl-[100px]">
        <h1 className="font-black">Grande Abertura: Bem-Vindos à "Catmania" - Sua Loja de Gatos dos Sonhos!</h1>
        <h3 className="text-justify">
          É com grande alegria e entusiasmo que anunciamos a abertura de "Catmania", a loja de gatos mais encantadora e cativante que você já viu! Preparamos um mundo de maravilhas felinas, um paraíso dedicado aos amantes de gatos, onde a magia dos ronrons, bigodes e brincadeiras está sempre presente.
          Imagine um espaço que irradia amor, com uma equipe apaixonada por gatos e que entende o que é necessário para tornar a vida dos nossos amigos felinos ainda mais especial. Na Catmania, você encontrará tudo o que precisa para satisfazer as necessidades e desejos de seu querido bichinho de estimação.
        </h3>
      </div>
    </div>
  </>)
}