"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, ChevronDown, ShoppingCart, Play, Pause } from "lucide-react"

export default function PenguinairePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [spriteFrame, setSpriteFrame] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      setSpriteFrame(Math.floor(scrollPercent * 10) % 2)
    }
    window.addEventListener("scroll", handleScroll)

    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play()
          setIsPlaying(true)
        } catch (error) {
          console.log("Autoplay prevented by browser")
        }
      }
    }
    playAudio()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })
  }

  const penguikImages = [
    {
      url: "/penguik-political.png",
      title: "Political Penguik",
      description: "Leading with charisma and determination",
    },
    {
      url: "/penguik-wallstreet.png",
      title: "Financial Penguik",
      description: "Conquering Wall Street",
    },
    {
      url: "/penguik-abstract.png",
      title: "Abstract Penguik",
      description: "Avant-garde and modern style",
    },
    {
      url: "/penguik-time-magazine.png",
      title: "Environmental Penguik",
      description: "TIME magazine cover defending the planet",
    },
    {
      url: "/penguik-men-in-black.png",
      title: "Secret Agent Penguik",
      description: "Classified missions with style",
    },
    {
      url: "/penguik-friendly-wave.png",
      title: "Friendly Penguik",
      description: "Waving with joy and charisma",
    },
    {
      url: "/penguik-headphones-office.png",
      title: "Office Penguik",
      description: "Professional focus with headphones",
    },
    {
      url: "/penguik-walking-hallway.png",
      title: "Corporate Penguik",
      description: "Walking the halls of power",
    },
    {
      url: "/penguik-businessman-street.png",
      title: "Street Penguik",
      description: "Business on the move with briefcase",
    },
  ]

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url(/financial-district-background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#00dd73]/70 z-0"></div>

      <audio ref={audioRef} loop autoPlay>
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mareux%20-%20The%20Perfect%20Girl%20%28The%20Motion%20Retrowave%20Remix%29-9ttvyknuFdnEyjYlXrrsebdBW5KTne.mp3" type="audio/mpeg" />
      </audio>

      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-fall opacity-90"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          >
            <img src="/golden-coin.png" alt="Golden Coin" className="w-12 h-12" />
          </div>
        ))}
      </div>

      <div className="fixed bottom-8 right-8 z-30 pointer-events-none">
        <img
          src={spriteFrame === 0 ? "/penguik-sprite-1.png" : "/penguik-sprite-2.png"}
          alt="Penguik Sprite"
          className="w-24 h-24 transition-all duration-300 hover:scale-110"
        />
      </div>

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#00dd73]/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src="/penguinaire-logo.png" alt="Penguinaire" className="h-16 md:h-20" />
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-white text-[#00dd73] hover:bg-gray-100 border-white font-semibold"
              onClick={toggleAudio}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-white text-[#00dd73] hover:bg-gray-100 border-white font-semibold"
              onClick={() => window.open("https://x.com/ABSPenguinaire", "_blank")}
            >
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-20 pb-16 px-4 relative z-20">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="relative group mx-auto mb-8 rounded-2xl shadow-lg overflow-hidden max-w-full">
              <img
                src="/penguik-trading-hero.png"
                alt="Penguik - Master of Finance"
                className="w-full h-auto transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src="/penguik-trading-hover.png"
                alt="Penguik - OK Gesture"
                className="absolute inset-0 w-full h-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to <span className="text-white font-bold">Penguinaire</span>!
            </h2>
            <div className="bg-white/95 rounded-2xl p-6 mb-8 shadow-lg">
              <p className="text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
                Welcome to Penguinaire, the wild finance playground. Meet Penguik, the sharpest penguin since Wall
                Street's golden days. Between soaring charts, slick suits, and mooning missions, Penguinaire is your way
                to be part of the financial revolution, absurd humor, and pure retro energy.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={scrollToGallery}
                className="bg-white hover:bg-gray-100 text-[#00dd73] px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View Gallery
                <ChevronDown className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse"
              >
                <ShoppingCart className="mr-2 w-5 h-5" />
                BUY NOW
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 px-4 bg-white/10 backdrop-blur-sm relative z-20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            <span className="text-white font-bold">Penguik</span> Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {penguikImages.map((image, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white"
              >
                <CardContent className="p-0 relative">
                  <img
                    src={image.url || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="font-semibold text-lg mb-1">{image.title}</h4>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 relative z-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            About the <span className="text-white font-bold">Project</span>
          </h3>
          <div className="bg-white/95 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Penguinaire isn't just a project – it's a 3D financial fever dream. Born from the idea that capitalism can
              be both hilarious and adorable, Penguik is the ultimate Trader: a suit-wearing penguin who dodges bullets
              like Neo, hustles like Gordon Gekko, and celebrates every green candle like there's no tomorrow.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Penguinaire celebrates the thrill of risk, the madness of markets, and the sheer joy of the game, all with
              shades on and a smirk.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#00b85f] text-white py-8 px-4 relative z-20">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <h4 className="text-xl font-semibold mb-2">Penguinaire</h4>
            <p className="opacity-90">© 2024 Penguinaire. All rights reserved.</p>
          </div>
          <div className="flex justify-center space-x-6 text-sm">
            <a
              href="#"
              className="hover:text-white hover:font-bold transition-all duration-200 opacity-90 hover:opacity-100"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="hover:text-white hover:font-bold transition-all duration-200 opacity-90 hover:opacity-100"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 0.9;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0.3;
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  )
}
