import { GameCardStyles } from "./styles";

export interface GameCardProps {
  name: string;
  numberAds: number;
  url: string;
}

export const GameCard = ({ name, numberAds, url }: GameCardProps) => {
  return (
    <GameCardStyles url={url}>
      <a>
        <div className="ads-description">
          <strong>{name}</strong>
          {numberAds >= 1 ? (
            <small>{`${numberAds} anúncios`}</small>
          ) : (
            <small>Nenhum anúncio</small>
          )}
        </div>
      </a>
    </GameCardStyles>
  );
};
