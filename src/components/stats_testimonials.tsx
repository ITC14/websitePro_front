import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// Configuration GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function StatsTestimonial() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const yearsRef = useRef<HTMLSpanElement>(null)
  const clientsRef = useRef<HTMLSpanElement>(null)
  const projectsRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const animateCounters = () => {
      // Configuration de l'animation pour chaque compteur
      const counters = [
        { element: yearsRef.current, end: 95, prefix: "",suffix:"%" },
        { element: clientsRef.current, end: 9,prefix: "4.", suffix: "/5" },
        { element: projectsRef.current, end: 24,prefix: "-", suffix: "h" }
      ]

      counters.forEach(counter => {
        if (!counter.element) return

        gsap.fromTo(counter.element,
          { textContent: "0" },
          {
            textContent: counter.end,
            duration: 2.5,
            ease: "power3.out",
            snap: { textContent: 1 },
            stagger: 1,
            onUpdate: function () {
              if (counter.element) {
                counter.element.textContent = formatValue(
                  Number(this.targets()[0].textContent),
                  counter.prefix,
                  counter.suffix
                );
              }
            },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none"
            }
          }
        )
      })
    }

    animateCounters()

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
function formatValue(value: number, prefix = "", suffix = "") {
  return `${prefix}${Math.floor(value)}${suffix}`;
}

  return (
    <section 
      ref={sectionRef}
      className="py-6 text-black"
    >
      <div className="container mx-auto px-6">
        <div className="grid items-center grid-cols-1 gap-8 text-center">

          {/* Clients satisfaits */}
          <div className="stat-item p-8 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm">
            <span className="text-3xl md:text-4xl font-bold block mb-3">⭐</span>
            <span 
              ref={clientsRef}
              className="text-3xl md:text-4xl font-bold text-teal-700 block mb-3"
            > 0</span>
            
            <p className="mt-2 opacity-90">Note Moyenne</p>
          </div>

          {/* Projets réalisés */}
          
        </div>
      </div>
    </section>
  )
}