"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Skin Health Analyzer",
    description:
      "A web-based application that helps users analyze skin conditions and provides basic health insights using image processing and AI concepts.",
    image:
      "project1.jpeg",
    tags: ["Machine Learning", "Healthcare", "Web App"],
    link: "https://github.com/NavneetBhangu/skin--health-analyzer",
  },
]

const categories = ["All", "Mobile App", "Web Design", "Dashboard", "Branding"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeCategory));

  return (
    <section className="py-24 bg-card" id="work">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Selected Work</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Projects I&apos;ve Crafted
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of design work that showcases my approach to solving
            problems through thoughtful, user-centered design.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-background rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
