import { useState } from "react";
import { AlertTriangle, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import "../styles/problem-section.css";

function ProblemSection({ problem, theme }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!problem) return null;

  const hasImages = problem.images && problem.images.length > 0;

  return (
    <section className={`problem-section ${theme}`}>
      <div className="problem-section-container">
        <div className={`problem-section-content ${hasImages ? "with-images" : ""}`}>
          {/* Left: Text content */}
          <div className={`problem-section-text ${hasImages ? "with-images" : ""}`}>
            {/* Label */}
            <div className={`problem-label ${theme}`}>
              <AlertTriangle className="problem-label-icon" size={14} />
              <span className="problem-label-text">El problema</span>
            </div>

            <h2 className={`problem-section-title ${theme}`}>{problem.title}</h2>

            <p className={`problem-section-description ${theme}`}>
              {problem.description}
            </p>
          </div>

          {/* Right: Image gallery */}
          {hasImages && (
            <div className="problem-section-gallery">
              <div className={`problem-gallery-grid ${problem.images.length === 1 ? "single" : "multiple"}`}>
                {problem.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`problem-gallery-item ${theme}`}
                  >
                    <div className={`problem-gallery-image-wrapper ${problem.images.length === 1 ? "aspect-video" : "aspect-square"}`}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="problem-gallery-image"
                      />
                      {/* Dark overlay on hover */}
                      <div className="problem-gallery-overlay" />
                      {/* Zoom icon */}
                      <div className="problem-gallery-zoom">
                        <div className="problem-gallery-zoom-icon">
                          <ZoomIn size={20} />
                        </div>
                      </div>
                    </div>
                    {/* Caption below image */}
                    {image.caption && (
                      <div className="problem-gallery-caption">
                        <p>{image.caption}</p>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && problem.images && (
        <div
          className="problem-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close */}
          <button
            onClick={() => setSelectedImage(null)}
            className="lightbox-close"
            aria-label="Cerrar"
          >
            <X size={20} />
          </button>

          <div
            className="lightbox-content-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={problem.images[selectedImage].src}
              alt={problem.images[selectedImage].alt}
              className="lightbox-content-image"
            />
            {problem.images[selectedImage].caption && (
              <p className="lightbox-content-caption">
                {problem.images[selectedImage].caption}
              </p>
            )}
          </div>

          {/* Navigation */}
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
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) =>
                    prev === problem.images.length - 1 ? 0 : prev + 1
                  );
                }}
                className="lightbox-nav lightbox-nav-next"
                aria-label="Siguiente"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
}

export default ProblemSection;
