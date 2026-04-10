import { useState, useRef, useEffect } from "react";
import { Play, Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/feature-tabs.css";

function FeatureTabs({ features, theme }) {
  const [activeFeature, setActiveFeature] = useState(features[0]);
  const [selectedImage, setSelectedImage] = useState(null);
  const tabsNavRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollTabs = (direction) => {
    if (tabsNavRef.current) {
      const { scrollWidth, clientWidth } = tabsNavRef.current;
      if (direction === 'left') {
        tabsNavRef.current.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      } else {
        tabsNavRef.current.scrollTo({
          left: scrollWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  const checkScroll = () => {
    if (tabsNavRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsNavRef.current;
      setCanScrollLeft(scrollLeft > 1);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    const navElement = tabsNavRef.current;
    if (navElement) {
      navElement.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        navElement.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [features]);

  return (
    <div className="feature-tabs">
      {/* Tabs */}
      <div className="feature-tabs-nav-container">
        <button
          className={`feature-tabs-nav-arrow feature-tabs-nav-arrow-left ${theme} ${!canScrollLeft ? 'hidden' : ''}`}
          onClick={() => scrollTabs('left')}
        >
          <ChevronLeft size={20} />
        </button>
        <div className="feature-tabs-nav" ref={tabsNavRef}>
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature)}
              className={`feature-tab ${theme} ${activeFeature.id === feature.id ? 'active' : ''}`}
            >
              {feature.name}
            </button>
          ))}
        </div>
        <button
          className={`feature-tabs-nav-arrow feature-tabs-nav-arrow-right ${theme} ${!canScrollRight ? 'hidden' : ''}`}
          onClick={() => scrollTabs('right')}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="feature-tabs-content">
        {/* Video/Screenshot area */}
        <div className={`feature-video-area ${theme}`}>
          {activeFeature.videoUrl ? (
            <video
              src={activeFeature.videoUrl}
              controls
              className="feature-video"
            />
          ) : activeFeature.image ? (
            <button
              onClick={() => setSelectedImage(activeFeature.image)}
              className="feature-image-button"
            >
              <img
                src={activeFeature.image}
                alt={activeFeature.name}
                className="feature-video"
              />
            </button>
          ) : (
            <div className="feature-video-placeholder">
              <div className={`play-icon ${theme}`}>
                <Play size={32} />
              </div>
              <p>Video proximamente</p>
            </div>
          )}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="feature-lightbox"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="lightbox-close"
            >
              <X size={24} />
            </button>
            <div className="lightbox-content">
              <img
                src={selectedImage}
                alt={activeFeature.name}
                className="lightbox-image"
              />
            </div>
          </div>
        )}

        {/* Description and highlights */}
        <div className="feature-details">
          <div className={`feature-description ${theme}`}>
            <h3>{activeFeature.name}</h3>
            <p>{activeFeature.description}</p>
          </div>

          {/* Highlights */}
          <div className={`feature-highlights ${theme}`}>
            <h4>Que resuelve</h4>
            <ul>
              {activeFeature.highlights.map((highlight, index) => (
                <li key={index}>
                  <span className={`check-icon ${theme}`}>
                    <Check size={12} />
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureTabs;
