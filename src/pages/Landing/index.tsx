import { LandingStyles } from "./styles";
import logoImg from "../../assets/logo.svg";
import { GameCard } from "../../components/GameCard";
import { MagnifyingGlassPlus } from "phosphor-react";
import { ButtonIcon } from "../../components/kit/ButtonIcon";

export const Landing = () => {
  return (
    <LandingStyles>
      <img src={logoImg} />
      <main>
        <div className="title-ads">
          <h1>
            Seu
            <span> duo </span>
            está aqui.
          </h1>
        </div>
        <ul>
          <GameCard
            name="League of Legends"
            url={"/src/assets/league.png"}
            numberAds={4}
          />
          <GameCard
            name="Apex Legends"
            url={"/src/assets/apex.png"}
            numberAds={4}
          />
          <GameCard
            name="Counter Strike"
            url={"/src/assets/cs.png"}
            numberAds={4}
          />
          <GameCard
            name="World of Warcraft"
            url={"/src/assets/warcraft.png"}
            numberAds={4}
          />
          <GameCard name="Dota" url={"/src/assets/dota.png"} numberAds={4} />
          <GameCard
            name="Fortnite"
            url={"/src/assets/fortnite.png"}
            numberAds={4}
          />
        </ul>
        <div className="custom-border">
          <div className="publish-ads">
            <section>
              <h2>Não encontrou seu duo?</h2>
              <p>Publique um anúncio para encontrar novos players!</p>
            </section>
            <ButtonIcon icon={MagnifyingGlassPlus} name="Publicar anúncio" />
          </div>
        </div>
      </main>
    </LandingStyles>
  );
};
