"use client"

import { useState, useRef, useEffect } from "react"
import {
  ExternalLink,
  Search,
  Filter,
  Calendar,
  Building,
  Download,
  Share2,
  Eye,
  CheckCircle,
  Zap,
  X,
} from "lucide-react"
import azureCertImg from "../assets/CertificateOfCompletion_AzureAI.png"
import sheKunjCert from "../assets/Shekunj AI Course Certificate-1.png"
import documentDBCert from "../assets/Amazon DocumentDB Certificate-1.png"
import azureFundamentCert from "../assets/Azure Fundamentals Certificate-1.png"
import azureWorkscert from "../assets/Azure Fundamentals Workshop Certificate-1.png"
import basicAzurecert from "../assets/Basics Of Azure Services-1.png"
import containerSecCert from "../assets/Dive Deep on Container Security-1.png"
import gatewayLoadCert from "../assets/GateWay Load Balancer Certificate-1.png"
import githubCoCert from "../assets/GitHub Copilot By SimpliLearn-1.png"
import cssCert from "../assets/HackerRank CSS Certificate-1.png"
import frontendDevCert from "../assets/HackerRank Frontend Devloper React Certificate-1.png"
import javascriptBasicCert from "../assets/HackerRank Javascript Certificate-1.png"
import javascriptInterCert from "../assets/HackerRank JavaScript(Intermediate) Certificate-1.png"
import problemSolveCert from "../assets/HackerRank Problem Solving Certificate-1.png"
import reactBasiccert from "../assets/HackerRank React (Basic) Certificate-1.png"
import restAPIInterCert from "../assets/RestAPI Intermediate Certificate-1.png"

// Sample certificate data
const certificates = [
  {
    id: 1,
    title: "Microsoft Azure AI Certificate",
    issuer: "Microsoft",
    date: "2025",
    category: "AI/ML",
    image: azureCertImg,
    certificateUrl: "https://drive.google.com/file/d/1oabLxwGn8qr3NRyKHZqa9JBJtk_OUe2p/view?usp=drive_link",
    skills: ["Azure", "AI", "ML"],
    verified: true,
    description:
      "Comprehensive certification exploring core AI concepts, machine learning fundamentals, and practical applications using Microsoft Azure services.",
    credentialId: "b085332aa7e353e7d208ecf1a0001f597b697c8aaed2b507149b0a830809da31",
    color: "#8B5CF6",
  },
  {
    id: 2,
    title: "SheKunj AI Course Certificate",
    issuer: "SheKunj",
    date: "2025",
    category: "AI/ML",
    image: sheKunjCert,
    certificateUrl: "https://drive.google.com/file/d/1J4gIVxJ0yXVegp7Rf9Ram2CsTeg0cW10/view?usp=drive_link",
    skills: ["AI", "ML"],
    verified: true,
    description: "Comprehensive certification exploring core AI concepts, machine learning fundamentals, and practical applications for GenAI by SheKunj.",
    credentialId: "SH108-25EW14887",
    color: "#A855F7",
  },
  {
    id: 3,
    title: "Amazon DocumentDB Certificate",
    issuer: "Simplilearn & Skillup",
    date: "2025",
    category: "Cloud",
    image: documentDBCert,
    certificateUrl: "https://simpli-web.app.link/e/5PWdSlQl3Tb",
    skills: ["AWS", "Data Modeling", "Querying "],
    verified: true,
    description: "Advanced cloud architecture certification focusing on scalable and secure cloud solutions.",
    color: "#7C3AED",
  },
  {
    id: 4,
    title: "Azure Fundamentals Certificate",
    issuer: "Simplilearn & Skillup",
    date: "2025",
    category: "Cloud",
    image: azureFundamentCert,
    certificateUrl: "https://simpli-web.app.link/e/bucKOabm3Tb",
    skills: ["Cloud", "Azure", "SLAs"],
    verified: true,
    description: "Foundational certification covering core cloud concepts, Azure services, pricing, security, and identity management.",
    color: "#9333EA",
  },
  {
    id: 5,
    title: "Azure WorkShop Certificate",
    issuer: "Microsoft",
    date: "2025",
    category: "Cloud",
    image: azureWorkscert,
    certificateUrl: "https://drive.google.com/file/d/1c6kUQ_EgQz2X6UO6pdW8nFmLSGPjoTV7/view?usp=sharing",
    skills: ["Azure", "TechTools"],
    verified: true,
    description: "Hands-on workshop certificate demonstrating practical skills in deploying, managing, and monitoring applications using Microsoft Azure tools and services.",
    color: "#7C3AED",
  },
  {
    id: 6,
    title: "Basics of Azure Services Certificate",
    issuer: "Simplilearn & Skillup",
    date: "2025",
    category: "Cloud",
    image: basicAzurecert,
    certificateUrl: "https://simpli-web.app.link/e/9yhH9Qdm3Tb",
    skills: ["VMs", "Azure Storage", "Cloud Computing"],
    verified: true,
    description: "Foundational course introducing core Azure services, cloud computing basics, and essential tools for managing and deploying resources on Microsoft Azure.",
    color: "#8B5CF6",
  },
  {
    id: 7,
    title: "Deep Dive into Container Security Certificate",
    issuer: "Simplilearn & Skillup",
    date: "2025",
    category: "Security",
    image: containerSecCert,
    certificateUrl: "https://simpli-web.app.link/e/P7GT5E2l3Tb",
    skills: ["Container", "Docker", "Kubernates", "Access Control"],
    verified: true,
    description: "A focused certification exploring security best practices, tools, and techniques for protecting Docker and Kubernetes containerized environments.",
    color: "#8B5CF6",
  },
  {
    id: 8,
    title: "Gateway Load Balancer Certificate",
    issuer: "Simplilearn & Skillup",
    date: "2025",
    category: "Cloud",
    image: gatewayLoadCert,
    certificateUrl: "https://simpli-web.app.link/e/9PyjfBNl3Tb",
    skills: ["Load Balancing", "Cloud Networking", "ELB", "VPC"],
    verified: true,
    description: "Introduction to AWS Gateway Load Balancer focusing on cloud traffic management, network security, and scalable infrastructure deployment.",
    color: "#8B5CF6",
  },
  {
    id: 9,
    title: "GitHub Copilot Certificate",
    issuer: "Simplilearn & Skillup",
    date: "2025",
    category: "AI/Ml",
    image: githubCoCert,
    certificateUrl: "https://simpli-web.app.link/e/DJhrGhVl3Tb",
    skills: ["Copilot", "VS Code integration", "Version Control"],
    verified: true,
    description: "A concise introduction to GitHub Copilot, exploring AI-powered code suggestions, developer productivity, and modern coding automation.",
    color: "#8B5CF6",
  },
  {
    id: 10,
    title: "RestAPI Intermediate Certificate",
    issuer: "HackerRank",
    date: "2025",
    category: "FullStack",
    image: restAPIInterCert,
    certificateUrl: "https://www.hackerrank.com/certificates/06321767fa90",
    skills: ["RstAPI", "HTTP", "CRUD"],
    verified: true,
    description: "A practical certification demonstrating intermediate-level skills in building, consuming, and securing RESTful APIs using modern web standards.",
    credentialId: "06321767FA90",
    color: "#8B5CF6",
  },
  {
    id: 11,
    title: "FrontEnd Devloper Certificate",
    issuer: "HackerRank",
    date: "2025",
    category: "Frontend",
    image: frontendDevCert,
    certificateUrl: "https://www.hackerrank.com/certificates/06321767fa90",
    skills: ["React", "Frontend", "DOM", "Web Devlopment"],
    verified: true,
    description: "A certification validating core frontend development skills including HTML, CSS, JavaScript, DOM manipulation, and responsive UI design.",
    credentialId: "C2242B94323C",
    color: "#8B5CF6",
  },
  {
    id: 12,
    title: "Css Certificate",
    issuer: "HackerRank",
    date: "2025",
    category: "Design",
    image: cssCert,
    certificateUrl: "https://www.hackerrank.com/certificates/a987a929cba1",
    skills: ["CSS", "GRID", "FlexBox", "Transitions"],
    verified: true,
    description: "A certification demonstrating proficiency in CSS concepts including selectors, layouts, styling, and responsive design techniques.",
    credentialId: "A987A929CBA1",
    color: "#8B5CF6",
  },
  {
    id: 13,
    title: "JavaScript Basics Certificate",
    issuer: "HackerRank",
    date: "2025",
    category: "Backend",
    image: javascriptBasicCert,
    certificateUrl: "https://www.hackerrank.com/certificates/700e50151382",
    skills: ["Functions", "Variables & DataTypes", "Event Handling"],
    verified: true,
    description: "Fundamental course covering core JavaScript concepts like variables, functions, control flow, and DOM interactions.",
    credentialId: "700E50151382",
    color: "#8B5CF6",
  },
  {
    id: 14,
    title: "JavaScript Intermediate Certificate",
    issuer: "HackerRank",
    date: "2025",
    category: "Backend",
    image: javascriptInterCert,
    certificateUrl: "https://www.hackerrank.com/certificates/895974834bdf",
    skills: ["ES6+", "Error Handling", "Event Loop", "HOF"],
    verified: true,
    description: "Covers advanced JavaScript concepts including asynchronous programming, closures, ES6 features, and functional programming techniques.",
    credentialId: "895974834BDF",
    color: "#8B5CF6",
  },
  {
    id: 15,
    title: "React Certificate",
    issuer: "HackerRank",
    date: "2025",
    category: "Frontend",
    image: reactBasiccert,
    certificateUrl: "https://www.hackerrank.com/certificates/c5680401328b",
    skills: ["JSX", "State Management", "Hooks", "Virtual DOM", "Props"],
    verified: true,
    description: "A foundational certificate demonstrating proficiency in building dynamic user interfaces using React.js, hooks, and component-based architecture.",
    credentialId: "895974834BDF",
    color: "#8B5CF6",
  },
  {
    id: 16,
    title: "Problem Solving Certificate",
    issuer: "HackerRank",
    date: "2025",
    category: "Backend",
    image: problemSolveCert,
    certificateUrl: "https://www.hackerrank.com/certificates/cff7d5d2dce9",
    skills: ["Algorithms", "Data Structures", "Time Complexxity", "Logical Thinking"],
    verified: true,
    description: "A certificate showcasing proficiency in solving algorithmic challenges using efficient logic, data structures, and analytical thinking.",
    credentialId: "C5680401328B",
    color: "#8B5CF6",
  },
]

const categories = ["All", "Frontend", "Full Stack", "Cloud", "AI/ML", "Security", "Design", "Backend"];

// Animated Background Blob Component
function AnimatedBlob({ className, delay = "0s" }) {
  return (
    <div
      className={`absolute rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob ${className}`}
      style={{ animationDelay: delay }}
    ></div>
  )
}

// 3D Floating Element Component
function FloatingElement({ className, children, size = "md", delay = 0 }) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-40 h-40",
  }

  return (
    <div
      className={`absolute ${sizeClasses[size]} bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl transform-gpu ${className}`}
      style={{
        transformStyle: "preserve-3d",
        animation: `float ${3 + delay}s ease-in-out ${delay}s infinite`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="flex items-center justify-center h-full">{children}</div>
    </div>
  )
}

// Custom Card Component
function Card({ children, className, ...props }) {
  return (
    <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg ${className}`} {...props}>
      {children}
    </div>
  )
}

// Custom Button Component
function Button({ children, variant = "default", size = "default", className, ...props }) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"

  const variants = {
    default:
      "bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-lg hover:shadow-purple-500/25",
    outline: "border border-white/20 text-white hover:bg-white/5 bg-white/5",
  }

  const sizes = {
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Custom Badge Component
function Badge({ children, className }) {
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${className}`}>
      {children}
    </span>
  )
}

// Custom Input Component
function Input({ className, ...props }) {
  return (
    <input
      className={`w-full px-3 py-2 bg-transparent border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/30 ${className}`}
      {...props}
    />
  )
}

// Custom Modal Component
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-slate-900/95 backdrop-blur-sm border border-white/10 rounded-lg max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  )
}

export default function Certificates() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredCertificates, setFilteredCertificates] = useState(certificates)
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef(null)

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Filter certificates
  useEffect(() => {
    let filtered = certificates

    if (searchTerm) {
      filtered = filtered.filter(
        (cert) =>
          cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cert.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter((cert) => cert.category === selectedCategory)
    }

    setFilteredCertificates(filtered)
  }, [searchTerm, selectedCategory])

  const getCategoryColor = (category) => {
    const colors = {
      Frontend: "bg-cyan-500/20 text-cyan-400",
      "Full Stack": "bg-violet-500/20 text-violet-400",
      Cloud: "bg-sky-500/20 text-sky-400",
      "AI/ML": "bg-emerald-500/20 text-emerald-400",
      Security: "bg-rose-500/20 text-rose-400",
      Design: "bg-pink-500/20 text-pink-400",
    }
    return colors[category] || "bg-gray-500/20 text-gray-400"
  }

  const openModal = (cert) => {
    setSelectedCertificate(cert)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCertificate(null)
  }

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)",
        minHeight: "calc(100vh - 80px)", // Subtract navbar height
        paddingTop: "80px", // Add space for fixed navbar
      }}
    >
      {/* CSS-based Animated Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Animated Blobs */}
        <AnimatedBlob className="bg-purple-700/30 top-0 -left-4 w-72 h-72" />
        <AnimatedBlob className="bg-violet-700/20 -bottom-8 right-0 w-96 h-96" delay="2s" />
        <AnimatedBlob className="bg-fuchsia-700/20 bottom-1/4 left-1/4 w-64 h-64" delay="4s" />
        <AnimatedBlob className="bg-indigo-700/20 top-1/3 right-1/4 w-80 h-80" delay="6s" />

        {/* 3D Floating Elements */}
        <FloatingElement className="top-1/4 left-10 hidden md:flex" size="lg" delay={1}>
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full transform rotate-45"></div>
        </FloatingElement>

        <FloatingElement className="bottom-1/4 right-10 hidden md:flex" size="md" delay={2}>
          <div className="w-8 h-8 border-4 border-purple-400 rounded-lg transform rotate-12"></div>
        </FloatingElement>

        <FloatingElement className="top-2/3 left-1/3 hidden lg:flex" size="sm" delay={0.5}>
          <div className="w-6 h-6 bg-gradient-to-r from-violet-400 to-fuchsia-400 transform rotate-45"></div>
        </FloatingElement>

        <FloatingElement className="top-1/3 right-1/3 hidden lg:flex" size="xl" delay={1.5}>
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-2 border-purple-400 rounded-lg transform rotate-45"></div>
            <div className="absolute inset-2 border-2 border-violet-400 rounded-lg transform -rotate-45"></div>
          </div>
        </FloatingElement>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50"></div>

        {/* Animated Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-violet-400/15 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-fuchsia-400/10 to-transparent animate-pulse delay-2000"></div>

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-purple-400/50 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full bg-violet-400/50 animate-float-delay"></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 rounded-full bg-fuchsia-400/50 animate-float-delay-2"></div>
        <div className="absolute top-1/3 right-1/2 w-1 h-1 rounded-full bg-indigo-400/50 animate-float-delay-3"></div>
      </div>

      {/* 3D Perspective Container */}
      <div className="relative z-10 perspective-1000">
        <div
          className="absolute top-20 left-10 w-40 h-40 hidden lg:block"
          style={{ transform: "rotateX(45deg) rotateZ(-10deg)", transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-0 border-2 border-purple-500/30 rounded-lg transform-gpu"
            style={{ transform: "translateZ(20px)" }}
          ></div>
          <div
            className="absolute inset-4 border-2 border-violet-500/30 rounded-lg transform-gpu"
            style={{ transform: "translateZ(40px)" }}
          ></div>
          <div
            className="absolute inset-8 border-2 border-fuchsia-500/30 rounded-lg transform-gpu"
            style={{ transform: "translateZ(60px)" }}
          ></div>
          <div
            className="absolute inset-12 border-2 border-indigo-500/30 rounded-lg transform-gpu"
            style={{ transform: "translateZ(80px)" }}
          ></div>
        </div>

        <div
          className="absolute bottom-20 right-10 w-40 h-40 hidden lg:block"
          style={{ transform: "rotateX(45deg) rotateZ(10deg)", transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-0 border-2 border-purple-500/30 rounded-full transform-gpu"
            style={{ transform: "translateZ(20px)" }}
          ></div>
          <div
            className="absolute inset-4 border-2 border-violet-500/30 rounded-full transform-gpu"
            style={{ transform: "translateZ(40px)" }}
          ></div>
          <div
            className="absolute inset-8 border-2 border-fuchsia-500/30 rounded-full transform-gpu"
            style={{ transform: "translateZ(60px)" }}
          ></div>
          <div
            className="absolute inset-12 border-2 border-indigo-500/30 rounded-full transform-gpu"
            style={{ transform: "translateZ(80px)" }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 px-3 sm:px-4 md:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-violet-200 bg-clip-text text-transparent mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
              My Achievements
            </h1>

            <div className="relative px-4">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-8">
                These certifications tell the story of my learning journey—one step at a time, growing with every course and challenge in tech.
              </p>
              <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"></div>
            </div>
          </div>

          {/* Search and Category Filter */}
          <div
            className={`mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
              {/* Search */}
              <div className="relative w-full max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-1">
                  <div className="relative">
                    <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-4 sm:w-5 h-4 sm:h-5" />
                    <Input
                      placeholder="Search certificates, skills, or issuers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-transparent border-0 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500/50 text-sm sm:text-base md:text-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Category Filter */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-lg sm:rounded-xl blur-sm sm:blur-lg"></div>
                <div className="relative flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3">
                  <Filter className="w-3 sm:w-4 h-3 sm:h-4 text-purple-400 flex-shrink-0" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-transparent text-white focus:outline-none cursor-pointer text-sm sm:text-base w-full"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-slate-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-10 gap-x-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-[0px]">            {filteredCertificates.map((cert, index) => (
            <Card
              key={cert.id}
              className={`max-w-[550px] w-full mx-auto group relative bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/30 transition-all duration-700 cursor-pointer overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                transformStyle: "preserve-3d",
              }}
              onMouseEnter={() => setHoveredCard(cert.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl"
                style={{
                  background: `linear-gradient(45deg, ${cert.color}20, ${cert.color}40)`,
                  transform: "translateZ(-10px)",
                }}
              ></div>

              {/* Hover Shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-violet-500/0 group-hover:from-purple-500/10 group-hover:to-violet-500/10 transition-all duration-500 rounded-lg"></div>

              <div className="p-0 relative">
                {/* Certificate Image */}
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    style={{
                      filter: hoveredCard === cert.id ? "saturate(1.2) contrast(1.1)" : "saturate(1) contrast(1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Verification Badge */}
                  {cert.verified && (
                    <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-full p-1.5 sm:p-2 md:p-3 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-green-400" />
                      <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping"></div>
                    </div>
                  )}

                  {/* Animated Elements */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 border-2 border-white/30 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-1 sm:inset-2 border border-purple-400/50 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-4 sm:p-6 md:p-8 relative">
                  {/* Animated Particles */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float opacity-0 group-hover:opacity-100"
                        style={{
                          left: `${20 + i * 15}%`,
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: "3s",
                        }}
                      ></div>
                    ))}
                  </div>

                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2 leading-tight">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="p-1.5 sm:p-2 bg-white/5 rounded-lg">
                      <Building className="w-3 sm:w-4 h-3 sm:h-4 text-purple-400" />
                    </div>
                    <span className="text-gray-300 font-medium sm:font-semibold text-sm sm:text-base">
                      {cert.issuer}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="p-1.5 sm:p-2 bg-white/5 rounded-lg">
                      <Calendar className="w-3 sm:w-4 h-3 sm:h-4 text-violet-400" />
                    </div>
                    <span className="text-gray-400 text-sm sm:text-base">{cert.date}</span>
                  </div>

                  {/* Category Badge */}
                  <Badge
                    className={`${getCategoryColor(cert.category)} mb-4 sm:mb-6 px-2 sm:px-3 py-0.5 sm:py-1 group-hover:scale-105 transition-transform duration-300 text-xs sm:text-sm`}
                  >
                    {cert.category}
                  </Badge>

                  {/* Skills */}
                  {/* <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs bg-gradient-to-r from-white/10 to-white/5 text-gray-300 px-2 sm:px-3 py-1 sm:py-2 rounded-full border border-white/10 hover:border-purple-500/30 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-xs bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-300 px-2 sm:px-3 py-1 sm:py-2 rounded-full border border-purple-500/30">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div> */}

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
  {cert.skills.slice(0, 3).map((skill, skillIndex) => (
    <span
      key={skillIndex}
      className="text-xs font-medium bg-slate-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full border border-slate-700 hover:bg-blue-700 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
    >
      {skill}
    </span>
  ))}
  {cert.skills.length > 3 && (
    <span className="text-xs font-medium bg-slate-700 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full border border-slate-600 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-500/30 transition-all duration-300">
      +{cert.skills.length - 3} more
    </span>
  )}
</div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 h-10 sm:h-12 hover:scale-105 transition-all duration-300 text-sm sm:text-base font-medium sm:font-semibold"
                      onClick={() => openModal(cert)}
                    >
                      <Eye className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                      Preview
                    </Button>

                    <Button
                      size="lg"
                      className="flex-1 h-10 sm:h-12 hover:scale-105 transition-all duration-300 text-sm sm:text-base font-medium sm:font-semibold"
                      onClick={() => window.open(cert.certificateUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                      View Certificate
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
          </div>

          {/* No Results */}
          {filteredCertificates.length === 0 && (
            <div className="text-center py-12 sm:py-16 md:py-20">
              <div className="relative w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-gradient-to-br from-white/5 to-white/10 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 backdrop-blur-sm border border-white/10">
                <Search className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 text-purple-400" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">No certificates found</h3>
              <p className="text-gray-400 text-base sm:text-lg">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* Certificate Preview Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedCertificate && (
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Certificate Details
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {/* Certificate Image */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg sm:rounded-xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img
                    src={selectedCertificate.image || "/placeholder.svg"}
                    alt={selectedCertificate.title}
                    className="relative w-full rounded-lg sm:rounded-xl border border-white/10 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Modal Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <Button
                    size="lg"
                    className="h-12 sm:h-14 hover:scale-105 transition-all duration-300 text-sm sm:text-base font-medium sm:font-semibold"
                    onClick={() => window.open(selectedCertificate.certificateUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                    View
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 sm:h-14 hover:scale-105 transition-all duration-300 text-sm sm:text-base font-medium sm:font-semibold"
                  >
                    <Download className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                    Download
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 sm:h-14 hover:scale-105 transition-all duration-300 text-sm sm:text-base font-medium sm:font-semibold"
                  >
                    <Share2 className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                    {selectedCertificate.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                    <label className="text-xs sm:text-sm text-purple-400 uppercase tracking-wide font-semibold">
                      Issuer
                    </label>
                    <p className="text-white font-bold text-sm sm:text-base md:text-lg">{selectedCertificate.issuer}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                    <label className="text-xs sm:text-sm text-violet-400 uppercase tracking-wide font-semibold">
                      Date
                    </label>
                    <p className="text-white font-bold text-sm sm:text-base md:text-lg">{selectedCertificate.date}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                    <label className="text-xs sm:text-sm text-violet-400 uppercase tracking-wide font-semibold">
                      Category
                    </label>
                    <Badge className={`${getCategoryColor(selectedCertificate.category)} mt-2 text-xs sm:text-sm`}>
                      {selectedCertificate.category}
                    </Badge>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10">
                  <label className="text-xs sm:text-sm text-purple-400 uppercase tracking-wide mb-3 block font-semibold">
                    Credential ID
                  </label>
                  <code className="bg-black/30 border border-purple-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-purple-300 font-mono text-xs sm:text-sm block break-all">
                    {selectedCertificate.credentialId}
                  </code>
                </div>

                <div>
                  <label className="text-xs sm:text-sm text-violet-400 uppercase tracking-wide mb-3 sm:mb-4 block font-semibold">
                    Skills & Technologies
                  </label>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {selectedCertificate.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-300 border border-purple-500/30 px-2 sm:px-3 py-1 sm:py-2 hover:scale-105 transition-transform duration-300 text-xs sm:text-sm"
                      >
                        <Zap className="w-2 sm:w-3 h-2 sm:h-3 mr-1" />
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {selectedCertificate.verified && (
                  <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg sm:rounded-xl">
                    <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-green-400 flex-shrink-0" />
                    <span className="text-green-300 font-medium sm:font-semibold text-sm sm:text-base md:text-lg">
                      Verified Certificate
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 4s ease-in-out 1s infinite;
        }
        .animate-float-delay-2 {
          animation: float 5s ease-in-out 2s infinite;
        }
        .animate-float-delay-3 {
          animation: float 6s ease-in-out 3s infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
