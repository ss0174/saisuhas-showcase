import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Data Analytics and PowerBI Intern",
      company: "iCover",
      duration: "June 2024 - November 2024",
      description: [
        "Built a consumer-facing analytics prototype using Power BI, SQL, Excel, and Angular",
        "Developed impactful dashboards and reports to support business decisions",
        "Collaborated with mentors to integrate solutions into the analytics portal",
        "Demonstrated strong problem-solving skills and eagerness to learn new technologies",
      ],
      skills: ["Power BI", "SQL", "Excel", "Angular", "Data Analytics"],
    },
    {
      type: "work",
      title: "Machine Learning Developer Intern",
      company: "Sameeksha Data Solutions Pvt Ltd",
      duration: "May 2024 - July 2024",
      description: [
        "Developed and optimized machine learning models for predictive analytics",
        "Worked on image classification tasks using deep learning frameworks",
        "Collaborated with a team on data preprocessing and transformation techniques",
        "Created functional and effective ML models for real-world applications",
      ],
      skills: ["Python", "Machine Learning", "TensorFlow", "Data Preprocessing"],
    },
  ];

  const education = [
    {
      degree: "B.Tech Computer Science",
      institution: "SRM Institute of Science and Technology, Chennai",
      duration: "July 2022 - May 2026",
      grade: "CGPA: 8.46",
    },
    {
      degree: "Intermediate (TSBIE)",
      institution: "Excellencia Junior College, Hyderabad",
      duration: "2020 - 2022",
      grade: "Percentage: 96.9",
    },
    {
      degree: "Secondary Education (TSBSE)",
      institution: "FIITJEE World School, Hyderabad",
      duration: "Batch 2020",
      grade: "CGPA: 9.8",
    },
  ];

  const responsibilities = [
    {
      title: "Technical Team Manager",
      organization: "Qwiklabs Developer Club SRMIST",
      duration: "March 2024 - January 2025",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Work Experience */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary rounded-lg">
                <Briefcase className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                        <CardDescription className="text-base font-medium text-foreground">
                          {exp.company}
                        </CardDescription>
                        <CardDescription className="text-sm mt-1">{exp.duration}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-secondary rounded-lg">
                <GraduationCap className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:scale-[1.01] animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <CardDescription className="text-base">{edu.institution}</CardDescription>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-muted-foreground">{edu.duration}</span>
                      <Badge variant="outline" className="font-semibold">
                        {edu.grade}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Positions of Responsibility */}
          <div className="animate-slide-up" style={{ animationDelay: "300ms" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent rounded-lg">
                <Award className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Leadership</h3>
            </div>
            <div className="space-y-4">
              {responsibilities.map((resp, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:scale-[1.01] animate-slide-up"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{resp.title}</CardTitle>
                    <CardDescription className="text-base">{resp.organization}</CardDescription>
                    <span className="text-sm text-muted-foreground pt-2">{resp.duration}</span>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;