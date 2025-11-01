import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      name: "Microsoft Power BI Data Analyst",
      issuer: "Microsoft (Coursera)",
      icon: "📊",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Alteryx Designer Core Certificate",
      issuer: "Alteryx",
      icon: "🔧",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Full Stack Development (Python)",
      issuer: "Academix Edu",
      icon: "💻",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Salesforce AI Associate",
      issuer: "Salesforce",
      icon: "🤖",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Oracle Cloud Infrastructure Foundations",
      issuer: "Oracle",
      icon: "☁️",
      color: "from-red-600 to-orange-500",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-1.5 bg-gradient-to-r ${cert.color}`} />
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-4xl">{cert.icon}</div>
                    <Award className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                    {cert.name}
                  </CardTitle>
                  <CardDescription className="text-sm pt-2">
                    <Badge variant="outline" className="mt-1">
                      {cert.issuer}
                    </Badge>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Additional Platforms */}
          <Card className="animate-fade-in overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Coding Profiles</h3>
                <p className="text-muted-foreground mb-6">
                  Active on competitive programming platforms
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() => window.open("https://github.com/saisuhas", "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open("https://linkedin.com/in/saisuhas", "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    HackerRank
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    LeetCode
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;