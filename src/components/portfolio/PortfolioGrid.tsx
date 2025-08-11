import { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import VideoModal from './VideoModal';

export default function PortfolioGrid() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const portfolioItems = [
    { id: 1, title: "Tech Startup Commercial", thumbnail: "/thumb1.jpg", videoUrl: "/video1.mp4" },
    { id: 2, title: "Corporate Training", thumbnail: "/thumb2.jpg", videoUrl: "/video2.mp4" },
    { id: 3, title: "Product Launch", thumbnail: "/thumb3.jpg", videoUrl: "/video3.mp4" },
    { id: 4, title: "Event Highlights", thumbnail: "/thumb4.jpg", videoUrl: "/video4.mp4" }
  ];

  return (
    <div className="portfolio-grid">
      <div className="grid">
        {portfolioItems.map(item => (
          <PortfolioCard 
            key={item.id}
            item={item}
            onPlay={() => setSelectedVideo(item.videoUrl)}
          />
        ))}
      </div>
      {selectedVideo && (
        <VideoModal 
          videoUrl={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}