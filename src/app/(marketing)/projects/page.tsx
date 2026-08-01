"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Wrapper from "@/components/global/wrapper";
import Link from "next/link";
import { toast } from "sonner";
import { projectService } from "@/http/projects";

// Static projects that will appear AFTER API projects
const STATIC_PROJECTS = [
  {
    id: "static-2",
    title: "Chinhat Cold Storage",
    category: "industrial",
    location: "Matihari Chinhat, Lucknow, IN",
    year: "2017",
    description:
      "Large-scale cold storage facility with 12,000 MT capacity, specializing in potato and agricultural product preservation.",
    images: ["/images/chinhat.jpg"],
    stats: [
      { label: "Storage Capacity", value: "12,000 MT" },
      { label: "Type", value: "Agricultural Cold Storage" },
      { label: "Location", value: "Gomti Nagar, Chinhat" },
    ],
    featured: false,
    clickable: false,
  },
  {
    id: "static-3",
    title: "Chisti Cold Storage & Allied Industries",
    category: "industrial",
    location: "Barabanki, Lucknow, IN",
    year: "N/A",
    description:
      "Modern cold storage and allied industries facility with 12,500 MT capacity, serving the agricultural sector in Barabanki district.",
    images: ["/images/chistii.jpg"],
    stats: [
      { label: "Storage Capacity", value: "12,600 MT" },
      { label: "Type", value: "Cold Storage & Allied Industries" },
      { label: "District", value: "Barabanki" },
    ],
    featured: false,
    clickable: false,
  },
];

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "industrial", label: "Industrial" },
  { id: "healthcare", label: "Healthcare" },
  { id: "renovation", label: "Renovation" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [projects, setProjects] = useState<any[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await projectService.getPublishedProjects({
          page: currentPage,
          limit: 50,
        });

        if (response.success) {
          // ORDER SWAPPED: API data first, then Static data
          setProjects([...response.data, ...STATIC_PROJECTS]);
          setTotalPages(response.pagination?.pages || 1);
        } else {
          setProjects(STATIC_PROJECTS);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        toast.error("Failed to load projects");
        setProjects(STATIC_PROJECTS);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [currentPage]);

  // Filter projects by category
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory),
      );
    }
  }, [activeCategory, projects]);

  const featuredProject = projects.find((p) => p.featured) || projects[0];

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        className="relative rounded-b-[200px] h-screen w-full overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{ scale: heroScale, y: heroY }}
        >
          <Image
            src={
              typeof featuredProject?.images?.[0] === "string"
                ? featuredProject.images[0]
                : featuredProject?.images?.[0]?.url || "/images/4.avif"
            }
            alt="Projects Showcase"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 mix-blend-multiply" />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1 bg-amber-500/90 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm shadow-lg shadow-amber-500/30">
              OUR PORTFOLIO
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl tracking-tighter font-thin text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Exceptional <span className="text-amber-400">Projects</span>
            <div className="mt-6"> Built to Last</div>
          </motion.h1>
          <motion.p
            className="text-xl md:text-xl font-sans text-gray-300 max-w-3xl mx-auto mb-12 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Browse our showcase of award-winning construction projects spanning
            residential, commercial, and industrial sectors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            {featuredProject && (
              <Link
                href={`/projects/${featuredProject.slug || featuredProject.id}`}
              >
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl transition-all duration-300 hover:shadow-amber-500/40 hover:scale-105 mr-4">
                  Explore {featuredProject.title}
                </button>
              </Link>
            )}
            <Link href="/contact">
              <button className="bg-transparent text-white border-2 border-white/80 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 hover:bg-white/10 hover:border-white">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Projects Content */}
      <Wrapper className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-6xl font-bold text-white mb-6">
              Discover Our <span className="text-amber-500">Portfolio</span>
            </h2>
            <p className="text-gray-400 font-sans max-w-2xl mx-auto text-lg">
              Each project represents our commitment to excellence, innovation,
              and client satisfaction.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 relative">
            <div className="absolute inset-y-0 -left-4 -right-4 bg-zinc-800/50 rounded-full -z-10" />
            {CATEGORIES.map((category) => (
              <motion.button
                key={category.id}
                className={`px-6 py-3 font-sans rounded-full text-base font-thin transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                    : "bg-zinc-800 text-gray-300 hover:bg-zinc-700 hover:text-white"
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
          </div>
        )}

        {/* Projects Grid */}
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => {
                  const firstImg = project.images?.[0];
                  const projectImage =
                    typeof firstImg === "string"
                      ? firstImg
                      : firstImg?.url ||
                        project.logoUrl ||
                        "/images/placeholder.jpg";

                  const ProjectCardContent = (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className={`relative group overflow-hidden rounded-2xl shadow-2xl shadow-black/50 h-[400px] ring-1 ring-white/10 hover:ring-amber-500/50 ${
                        project.clickable !== false
                          ? "cursor-pointer"
                          : "cursor-default"
                      }`}
                      whileHover={project.clickable !== false ? { y: -10 } : {}}
                    >
                      <Image
                        src={projectImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-90"
                      />
                      {project.featured && (
                        <div className="absolute top-4 left-4 z-20">
                          <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg shadow-amber-500/30">
                            Featured
                          </span>
                        </div>
                      )}
                      {project.status && (
                        <div className="absolute top-4 right-4 z-20">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg ${
                              project.status === "COMPLETED"
                                ? "bg-emerald-500 text-white shadow-emerald-500/30"
                                : "bg-amber-600 text-white shadow-amber-600/30"
                            }`}
                          >
                            {project.status === "COMPLETED"
                              ? "Completed"
                              : "Under Construction"}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
                      <div className="absolute inset-0 flex flex-col justify-end p-8">
                        <span className="text-amber-400 text-sm uppercase tracking-wider mb-2">
                          {project.category || "Project"}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex font-sans items-center text-gray-400 text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {project.location || "N/A"} •{" "}
                          {project.year ||
                            (project.completionDate
                              ? new Date(project.completionDate).getFullYear()
                              : "N/A")}
                        </div>

                        <div className="mt-4 overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-300">
                          <p className="text-gray-400 font-sans text-sm line-clamp-2">
                            {project.description}
                          </p>
                        </div>

                        {project.clickable !== false && (
                          <motion.div className="flex items-center mt-6 text-amber-400 text-sm font-medium">
                            View Project Details
                            <svg
                              className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  );

                  if (project.clickable === false) {
                    return <div key={project.id}>{ProjectCardContent}</div>;
                  }

                  return (
                    <Link
                      href={`/projects/${project.slug || project.id}`}
                      key={project.id}
                    >
                      {ProjectCardContent}
                    </Link>
                  );
                })}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </Wrapper>
    </div>
  );
}
