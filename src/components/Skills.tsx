import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "Java", "C++", "C", "JavaScript", "SQL"],
      color: "bg-primary/10 text-primary hover:bg-primary/20",
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React.js", "TensorFlow", "PyTorch", "NumPy", "Pandas", "Matplotlib"],
      color: "bg-secondary/10 text-secondary hover:bg-secondary/20",
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "Supabase", "MySQL"],
      color: "bg-accent/10 text-accent hover:bg-accent/20",
    },
    {
      category: "Tools & Platforms",
      skills: ["Power BI", "Git", "GitHub", "Docker", "Postman", "Vite"],
      color: "bg-primary/10 text-primary hover:bg-primary/20",
    },
    {
      category: "Web Technologies",
      skills: ["HTML", "CSS", "Tailwind CSS", "Angular", "REST APIs"],
      color: "bg-secondary/10 text-secondary hover:bg-secondary/20",
    },
    {
      category: "Other Skills",
      skills: ["Machine Learning", "Data Analytics", "NLP", "Deep Learning", "OpenCV"],
      color: "bg-accent/10 text-accent hover:bg-accent/20",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I work with
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary mr-2" />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    className={`${category.color} transition-all duration-300 cursor-default`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <div className="mt-12 text-center animate-fade-in">
          <p className="text-muted-foreground">
            Continuously learning and adapting to new technologies...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;