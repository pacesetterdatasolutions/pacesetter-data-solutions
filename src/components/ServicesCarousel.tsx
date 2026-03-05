import { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const services = [
  {
    type: "service" as const,
    title: "Data Analysis",
    anchor: "data-analysis",
    image: "/images/service-data-analysis.webp",
    tags: ["Statistical Methods", "Data Cleaning"],
  },
  {
    type: "service" as const,
    title: "Evidence Synthesis",
    anchor: "evidence-synthesis",
    image: "/images/service-evidence-synthesis.webp",
    tags: ["Systematic Reviews", "Meta-Analysis"],
  },
  {
    type: "intro" as const,
    title: "Comprehensive data analysis, research, and writing services tailored to your needs.",
    description:
      "We provide cutting-edge data analysis, research services, and medical writing & editing services for individuals, academics, academic institutions, medical research organisations, charities & social enterprises.",
  },
  {
    type: "service" as const,
    title: "Epidemiology",
    anchor: "epidemiology",
    image: "/images/service-epidemiology.webp",
    tags: ["Study Design", "Observational"],
  },
  {
    type: "service" as const,
    title: "Clinical Trials",
    anchor: "clinical-trials",
    image: "/images/service-clinical-trials.webp",
    tags: ["Trial Design", "Protocol"],
  },
  {
    type: "service" as const,
    title: "Grant Writing",
    anchor: "grant-writing",
    image: "/images/service-grant-writing.webp",
    tags: ["Funding", "Applications"],
  },
  {
    type: "service" as const,
    title: "Medical Writing",
    anchor: "medical-writing",
    image: "/images/service-medical-writing.webp",
    tags: ["Journals", "Scientific"],
  },
  {
    type: "service" as const,
    title: "Proofreading & Editing",
    anchor: "proofreading-editing",
    image: "/images/service-proofreading.webp",
    tags: ["Dissertations", "Reports"],
  },
];

const ServicesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    containScroll: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Mouse wheel horizontal scrolling (throttled)
  useEffect(() => {
    if (!emblaApi) return;
    const rootNode = emblaApi.rootNode();
    let lastScrollTime = 0;
    const THROTTLE_MS = 600;
    
    const onWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime < THROTTLE_MS) {
        e.preventDefault();
        return;
      }
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 5) return; // ignore tiny movements
      if (delta > 0) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollPrev();
      }
      lastScrollTime = now;
      e.preventDefault();
    };

    rootNode.addEventListener("wheel", onWheel, { passive: false });
    return () => rootNode.removeEventListener("wheel", onWheel);
  }, [emblaApi]);

  return (
    <div className="relative" ref={carouselRef}>
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {services.map((service, index) => {
            if (service.type === "intro") {
              return (
                <div
                  key="intro"
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                >
                  <div className="h-[420px] sm:h-[480px] p-8 sm:p-10 flex flex-col justify-center"
                    style={{
                      background: `linear-gradient(145deg, hsl(220 70% 14% / 0.95), hsl(214 56% 42% / 0.85))`,
                    }}
                  >
                    <p className="text-lg sm:text-xl font-heading font-semibold leading-relaxed mb-6" style={{ color: "hsl(217 100% 98%)" }}>
                      {service.title}
                    </p>
                    <p className="text-sm sm:text-base font-body leading-relaxed" style={{ color: "hsl(217 100% 98% / 0.7)" }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={service.anchor}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                <Link
                  to={`/what-we-do#${service.anchor}`}
                  className="group block h-[420px] sm:h-[480px] overflow-hidden relative transition-transform duration-500 ease-out"
                >
                  {/* Image */}
                  <img
                    src={service.image}
                    alt={`${service.title} service`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Gradient overlays */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to bottom, hsl(220 70% 14% / 0.3) 0%, hsl(220 70% 14% / 0.15) 40%, hsl(220 70% 14% / 0.7) 75%, hsl(220 70% 14% / 0.92) 100%)`,
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      background: `linear-gradient(135deg, hsl(214 56% 42% / 0.4), transparent 60%)`,
                    }}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-8">
                    <h3
                      className="text-xl sm:text-2xl font-heading font-bold mb-3 tracking-tight transition-transform duration-300 group-hover:translate-y-[-2px]"
                      style={{ color: "hsl(0 0% 100%)" }}
                    >
                      {service.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium font-body px-3 py-1 rounded-full backdrop-blur-sm transition-colors duration-300"
                          style={{
                            background: "hsl(0 0% 100% / 0.12)",
                            color: "hsl(195 100% 75%)",
                            border: "1px solid hsl(0 0% 100% / 0.1)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span
                      className="inline-flex items-center gap-2 text-sm font-medium font-body transition-all duration-300 group-hover:gap-3"
                      style={{ color: "hsl(195 100% 75%)" }}
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation arrows on sides */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-4 sm:left-8 lg:left-[max(2rem,calc((100%-1280px)/2+1rem))] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary z-10"
        style={{ color: "hsl(0 0% 100%)" }}
        aria-label="Previous services"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-4 sm:right-8 lg:right-[max(2rem,calc((100%-1280px)/2+1rem))] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary z-10"
        style={{ color: "hsl(0 0% 100%)" }}
        aria-label="Next services"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Navigation dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "w-8 h-2.5 bg-primary"
                : "w-2.5 h-2.5 bg-border hover:bg-primary/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;
