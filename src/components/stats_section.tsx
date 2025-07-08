import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// Configuration GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const yearsRef = useRef<HTMLSpanElement>(null)
  const clientsRef = useRef<HTMLSpanElement>(null)
  const projectsRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const animateCounters = () => {
      // Configuration de l'animation pour chaque compteur
      const counters = [
        { element: yearsRef.current, end: 12, suffix: "+"  },
        { element: clientsRef.current, end: 96, suffix: "+" },
        { element: projectsRef.current, end: 150, suffix: "%" }
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
            onUpdate: function() {
              if (counter.suffix) {
                counter.element!.textContent = Math.floor(Number(this.targets()[0].textContent)) + counter.suffix
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

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gradient-to-r from-teal-400 to-green-600 text-black"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Années d'expérience */}
          <div className="stat-item p-8 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm">
            <span className="text-5xl md:text-6xl font-bold block mb-3">🎓</span>
            <span 
              ref={yearsRef}
              className="text-5xl md:text-6xl font-bold text-teal-700 block mb-3"
            > 0</span>
            <h3 className="text-xl font-medium">Années d'expérience</h3>
            <p className="mt-2 opacity-90">Depuis 2012</p>
          </div>

          {/* Clients satisfaits */}
          <div className="stat-item p-8 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm">
            <span className="text-5xl md:text-6xl font-bold block mb-3">🤝</span>
            <span 
              ref={clientsRef}
              className="text-5xl md:text-6xl font-bold text-teal-700 block mb-3"
            > 0</span>
            <h3 className="text-xl font-medium">Clients satisfaits</h3>
            <p className="mt-2 opacity-90">À travers le monde</p>
          </div>

          {/* Projets réalisés */}
          <div className="stat-item p-8 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm">
            <span className="text-5xl md:text-6xl font-bold block mb-3">🚀</span>
            <span 
              ref={projectsRef}
              className="text-5xl md:text-6xl font-bold block text-teal-700 mb-3"
            >0</span>
            <h3 className="text-xl font-medium">Projets réalisés</h3>
            <p className="mt-2 opacity-90">Livrés avec succès</p>
          </div>
        </div>
      </div>
    </section>
  )
}