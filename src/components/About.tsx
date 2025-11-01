import { Code2, Database, Brain, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Developer",
      description: "Experienced in React, JavaScript, and modern web technologies",
    },
    {
      icon: Brain,
      title: "ML Enthusiast",
      description: "Passionate about machine learning and AI applications",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Skilled in Power BI, SQL, and data visualization",
    },
    {
      icon: TrendingUp,
      title: "Quick Learner",
      description: "Adaptable and eager to embrace new technologies",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate Computer Science student with a strong foundation in software development and machine learning
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Bio */}
            <div className="space-y-4 animate-slide-up">
              <h3 className="text-2xl font-semibold">Hello! I'm Sai Suhas</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently pursuing my B.Tech in Computer Science at SRM Institute of Science and Technology, Chennai, 
                with a CGPA of 8.46. My journey in tech has been driven by curiosity and a passion for solving real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I've had the opportunity to work as a Machine Learning Developer Intern at Sameeksha Data Solutions and 
                a Data Analytics Intern at iCover, where I developed predictive models, built analytics dashboards, and 
                collaborated with cross-functional teams.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm particularly interested in the intersection of machine learning and web development, and I love 
                building projects that make a positive impact.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold gradient-text mb-2">8.46</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold gradient-text mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </Card>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;