import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiSpringboot,
  SiMysql,
  SiPostman,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { AiFillFileExcel, AiFillFileWord, AiFillFilePpt } from "react-icons/ai";
import { SiIntellijidea } from "react-icons/si";

const About = () => {
  return (
      <div id="about" className="bg-[#ffffff] min-h-screen flex items-center">
        <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
            About Me
          </h1>

          {/* About Me Section */}
          <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
            I’m <span className="font-bold text-[#fe5617]">Suthais Noordeen</span>, I am a dedicated and
            self-motivated software engineering student with a passion for learning and
            problem-solving. I possess a solid foundation in programming languages,
            algorithms, and data structures. I aspire to develop my expertise in
            Information Technology, leveraging my technical skills for personal growth
            and contributing to organizational success.
          </p>

          {/* Skills Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-[#fe5617] text-center">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {/* Skill Icons */}
              <div className="flex flex-col items-center space-y-2">
                <FaHtml5 size={40} className="text-[#e34c26]" />
                <span className="font-bold">HTML5</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaCss3Alt size={40} className="text-[#264de4]" />
                <span className="font-bold">CSS3</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaJsSquare size={40} className="text-[#f7df1e]" />
                <span className="font-bold">JavaScript</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaReact size={40} className="text-[#61dbfb]" />
                <span className="font-bold">React.js</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <SiMongodb size={40} className="text-[#47a248]" />
                <span className="font-bold">MongoDB</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaGitAlt size={40} className="text-[#f05032]" />
                <span className="font-bold">Git</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaGithub size={40} className="text-black" />
                <span className="font-bold">GitHub</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <DiVisualstudio size={40} className="text-[#0078d7]" />
                <span className="font-bold">VS Code</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaFigma size={40} className="text-[#F24E1E]" />
                <span className="font-bold">Figma</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaJava size={40} className="text-[#007396]" />
                <span className="font-bold">Java</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FaPython size={40} className="text-[#3776ab]" />
                <span className="font-bold">Python</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <SiSpringboot size={40} className="text-[#6db33f]" />
                <span className="font-bold">Spring Boot</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <SiMysql size={40} className="text-[#4479a1]" />
                <span className="font-bold">MySQL</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <SiPostman size={40} className="text-[#ef5b25]" />
                <span className="font-bold">Postman</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <SiIntellijidea size={40} className="text-[#000000]" />
                <span className="font-bold">IntelliJ Ultimate</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-[#fe5617] text-3xl font-bold">OOP</span>
                <span className="font-bold">Object-Oriented Programming</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <AiFillFileExcel size={40} className="text-[#217346]" />
                <span className="font-bold">Excel</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <AiFillFileWord size={40} className="text-[#2B579A]" />
                <span className="font-bold">Word</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <AiFillFilePpt size={40} className="text-[#D24726]" />
                <span className="font-bold">PowerPoint</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
