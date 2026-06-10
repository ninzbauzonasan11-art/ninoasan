/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

const WorkCard = ({ images = [], img, name, description, onClick }) => {
  const gallery = images.length ? images : img ? [img] : [];
  const slides = gallery.slice(0, 3);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (event) => {
    event.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = (event) => {
    event.stopPropagation();
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="group card-accent relative overflow-hidden rounded-[2rem] p-2 laptop:p-4 first:ml-0 link bg-gradient-to-br from-cyan-50 via-sky-50 to-fuchsia-50 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border border-cyan-500/35 dark:border-fuchsia-600/35 ring-1 ring-cyan-300/20 dark:ring-fuchsia-500/20 shadow-[0_18px_55px_rgba(15,23,42,0.12)] hover:shadow-[0_24px_80px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-2"
      onClick={onClick}
    >
      <div className="image-shell cert-image relative overflow-hidden rounded-[1.75rem] border border-cyan-400/45 dark:border-fuchsia-500/45 mb-5 aspect-[4/3] flex items-center justify-center p-4 bg-gradient-to-br from-cyan-50 via-sky-50 to-fuchsia-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 shadow-sm transition-all duration-700 ease-out group-hover:-translate-y-1">
        <div className="relative h-full w-full">
          <div
            className="flex h-full w-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full h-full overflow-hidden flex items-center justify-center relative inner-img">
                <img
                  alt={`${name} image ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  src={slide}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              </div>
            ))}
          </div>

          {slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevSlide}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 text-xl shadow-lg transition hover:bg-white dark:bg-slate-900/90 dark:text-white"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 text-xl shadow-lg transition hover:bg-white dark:bg-slate-900/90 dark:text-white"
              >
                ›
              </button>
            </>
          )}
        </div>

        {slides.length > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-slate-900 dark:bg-white"
                    : "bg-slate-400 dark:bg-slate-600"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="mt-5 rounded-3xl bg-white/90 dark:bg-slate-950/90 p-6 tablet:p-7 shadow-sm">
        <h1 className="text-2xl tablet:text-2xl laptop:text-3xl font-semibold text-slate-900 dark:text-white">
          {name ? name : "Project Name"}
        </h1>
        <h2 className="text-base tablet:text-lg laptop:text-xl text-slate-600 dark:text-slate-300 mt-3 leading-7">
          {description ? description : "Description"}
        </h2>
      </div>
    </div>
  );
};

export default WorkCard;
