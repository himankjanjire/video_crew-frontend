import { useState, useEffect } from "react";

import ImgWithFallback from "../utils/FallbackImage";

interface PortfolioItem {
  _id: string;
  title: string;
  thumbnail_url: string;
  video_url: string;
}

const VideoPortfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const isYouTubeUrl = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  const isCloudinaryUrl = (url: string) => {
    return url.includes('cloudinary.com');
  };

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch(
          "https://video-crew-backend-production.up.railway.app/api/portfolio/"
        );
        const data = await response.json();
        setPortfolioItems(data);
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <div className="w-full text-white">
      {/* Header */}

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-6 overflow-hidden bg-black">
          {/* Foreground Content */}
          <div className="text-center max-w-7xl mx-auto z-10">
            <p className="text-sm text-gray-400 mb-8 tracking-widest uppercase">
              Portfolio
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mb-16 leading-tight">
              We Create Beautiful,
              <br />
              <span className="text-blue-500">Practical Works</span>
            </h1>

            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-8 py-3 border border-gray-600 rounded-full text-sm hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
                광고 · 홍보 영상
              </button>
              <button className="px-8 py-3 border border-gray-600 rounded-full text-sm hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
                이러닝 영상
              </button>
              <button className="px-8 py-3 border border-gray-600 rounded-full text-sm hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
                기업 행사 영상
              </button>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <div className="px-8 py-16">
          <div className="max-w-6xl mx-auto space-y-6">
            {loading ? (
              <div className="text-center py-16">
                <div className="text-gray-400">Loading portfolio...</div>
              </div>
            ) : (
              portfolioItems.map((item) => (
                <div
                  key={item._id}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className="aspect-[16/9] relative bg-gradient-to-br from-gray-800 to-gray-900">
                    <ImgWithFallback
                      src={item.thumbnail_url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-6 right-6">
                      <button
                        onClick={() => setSelectedVideo(item)}
                        className="flex items-center bg-black/80 backdrop-blur-sm text-white rounded-full px-4 py-2 hover:bg-black/70 transition"
                      >
                        <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs mr-3">
                          ▶
                        </div>
                        <div className="flex flex-col items-start cursor-pointer">
                          <span className="text-sm font-semibold">
                            {item.title}
                          </span>
                          <span className="text-xs text-gray-300">
                            Play Video
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {!loading && portfolioItems.length > 0 && (
            <div className="text-center mt-16">
              <button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105">
                Load More
              </button>
            </div>
          )}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-4xl aspect-video">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl z-10"
              >
                ✕
              </button>
              {isYouTubeUrl(selectedVideo.video_url) ? (
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo.video_url)}?autoplay=1`}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : isCloudinaryUrl(selectedVideo.video_url) ? (
                <video
                  src={selectedVideo.video_url}
                  className="w-full h-full rounded-lg"
                  controls
                  autoPlay
                />
              ) : (
                <iframe
                  src={selectedVideo.video_url}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default VideoPortfolio;
