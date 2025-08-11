interface PortfolioItem {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

interface PortfolioCardProps {
  item: PortfolioItem;
  onPlay: () => void;
}

export default function PortfolioCard({ item, onPlay }: PortfolioCardProps) {
  return (
    <div className="portfolio-card" onClick={onPlay}>
      <div className="card-image">
        <img src={item.thumbnail} alt={item.title} />
        <div className="play-overlay">
          <div className="play-button">▶</div>
        </div>
      </div>
      <h3>{item.title}</h3>
    </div>
  );
}