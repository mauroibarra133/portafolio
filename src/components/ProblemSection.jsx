import { useState } from "react";
import { AlertTriangle, X, ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/problem-section.css";

function ProblemSection({ problem, theme }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!problem) return null;

  return (
    <section className={`problem-section ${theme}`}>
      <div className="container">
        {/* Header */}
        <div className="problem-header">
          <div className={`problem-icon ${theme}`}>
            <AlertTriangle size={24} />
          </div>
          <div className="problem-title-container">
            <h2 className={`problem-title ${theme}`}>{problem.title}</h2>
            <p className="problem-subtitle">El problema a resolver</p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="problem-content-layout">
          {/* Description */}
          <div className={`problem-description ${theme}`}>
            <p>{problem.description}</p>
          </div>

          {/* Images Grid */}
          {problem.images && problem.images.length > 0 && (
            <div className="problem-images-grid">
              {problem.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`problem-image-button ${theme}`}
                >
                  <div className="problem-image-wrapper">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="problem-image"
                    />
                    <div className="problem-image-overlay" />
                  </div>
                  {image.caption && (
                    <div className="problem-image-caption">
                      <p>{image.caption}</p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && problem.images && (
          <div
            className="problem-lightbox"
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
                src={problem.images[selectedImage].src}
                alt={problem.images[selectedImage].alt}
                className="lightbox-image"
              />
              {problem.images[selectedImage].caption && (
                <p className="lightbox-caption">
                  {problem.images[selectedImage].caption}
                </p>
              )}
            </div>

            {/* Navigation Arrows */}
            {problem.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) =>
                      prev === 0 ? problem.images.length - 1 : prev - 1
                    );
                  }}
                  className="lightbox-nav lightbox-nav-prev"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) =>
                      prev === problem.images.length - 1 ? 0 : prev + 1
                    );
                  }}
                  className="lightbox-nav lightbox-nav-next"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProblemSection;
