import React from "react";
import skillsData from "../../../data/skillsData";
import "./Skill.css"; // Fichier CSS pour les styles
import {CogIcon} from "@heroicons/react/24/solid";

const Skill = () => {
  const sortedSkills = [...skillsData].sort((a, b) => a.name.localeCompare(b.name));
  const firstSkill = sortedSkills.slice(0, 9);
  const lastSkill = sortedSkills.slice(9);


  const renderSkillItem = (skill, index) => {
    if (skill.devi) {
      return (
        <i key={index} title={skill.name} className={`${skill.devi} colored text-6xl skill-item h-auto relative overflow-hidden`}></i>
      );
    } else if (skill.source) {
      return (
        <img
          loading="lazy"
          key={index}
          src={skill.source}
          className="w-16 skill-item h-auto relative overflow-hidden"
          alt={`logo ${skill.name}`}
          height="80"
          title={skill.name}
        />
      );
    }
    return null;
  };

  const renderSkillsList = (skills) => {
    return (
      <>
        {skills.map((skill, index) => (
          <li className="flex justify-center px-5 min-w-[45.5%] lg:min-w-[22.5%] relative" key={index}><div>{renderSkillItem(skill, index)}</div></li>
        ))}
      </>
    );
  };
  

  return (
    <section id="skills-section" className="in-the-light bg-customWhiteBlue max-md:mb-10">
    <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill" fill="#063148" ></path><path  d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill" fill="#063148" ></path><path  d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill" fill="#063148" ></path></svg>
    <h2 className="text-center">Compétences <CogIcon className="h-8 w-8 inline-block" /></h2>
      <div className="relative flex overflow-x-hidden overflow-y-visible w-auto">
       <ul className="w-full py-12 lg:py-14 whitespace-nowrap flex flex-row animate-skills">
        {renderSkillsList(firstSkill)}
       </ul>
               
       <ul className="w-full absolute top-0 py-12 lg:py-14 whitespace-nowrap flex flex-row animate-next-skills">
       {renderSkillsList(firstSkill)}
      </ul>
      
      </div>
      <div className="relative flex overflow-x-hidden overflow-y-visible w-auto">
       <ul className="w-full py-12 lg:py-14 whitespace-nowrap flex flex-row reverse-skills">
        {renderSkillsList(lastSkill)}
       </ul>
               
       <ul className="w-full absolute top-0 py-12 lg:py-14 whitespace-nowrap flex flex-row reverse-next-skills">
       {renderSkillsList(lastSkill)}
      </ul>
      
      </div>

    </section>
  );
};

export default Skill;
