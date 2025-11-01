import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Skill Swap",
      description: "A smart skill-sharing platform where users can post talent videos, follow others, and chat in real-time. Built a dynamic skill-swap system that matches users based on what they know and want to learn, using NLP for language and skill detection.",
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "Supabase", "NLP", "PostgreSQL", "Realtime Chat"],
      github: "https://github.com/saisuhas",
      gradient: "from-primary to-primary-glow",
    },
    {
      title: "Wildfire Detection Using ML",
      description: "Developed a machine learning-based system to detect wildfires using satellite and camera images by analyzing visual data for early signs of fires. Utilizes deep learning for accurate and early detection.",
      technologies: ["Python", "PyTorch", "Deep Learning", "OpenCV", "InceptionV3", "Grad-CAM", "NumPy"],
      github: "https://github.com/saisuhas",
      gradient: "from-secondary to-accent",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Some of my recent work showcasing my skills and passion for development
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      className="bg-foreground text-background hover:bg-foreground/90"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://github.com/saisuhas", "_blank")}
          >
            <Github className="mr-2 h-5 w-5" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;