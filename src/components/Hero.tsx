import { ArrowDown, Github, Linkedin, Mail, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-hero animate-gradient">
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Text Content */}
          <div className="max-w-4xl text-white animate-slide-up">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 animate-float">
                👋 Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <br />
              <span className="text-white drop-shadow-lg">Sai Suhas Sangaraju</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90 font-light animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Computer Science Student & ML Enthusiast
            </p>
            <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Passionate about building innovative solutions with Machine Learning, Full-Stack Development, and Data Analytics
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm shadow-lg hover:scale-105 transition-all duration-300"
                onClick={() => window.open('/SAI_SUHAS_RESUME.pdf', '_blank')}
              >
                <FileDown className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <a 
                href="https://github.com/saisuhas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://linkedin.com/in/saisuhas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a 
                href="mailto:suhas.sangaraju@gmail.com"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;