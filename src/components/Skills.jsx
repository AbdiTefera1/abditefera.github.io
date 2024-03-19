import { skills } from '../data/constants';

const Skills = () => {
  return (
    
    <div id="skills" className="py-6 max-w-[1200px] mx-auto">
      <div className="mx-auto px-4 md:px-8">
        <h2 className="text-2xl lg:text-3xl text-white">
              My <span>Skills</span>
            </h2>
        <p className=" text-gray-500">Here are some of my skills on which I have been working on for the past 2 years.</p>
        <div className="w-full flex flex-wrap justify-center mt-10 gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="max-w-500px w-full border border-purple-600 shadow-lg rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4 text-center">{skill.title}</h2>
              <div className="flex flex-wrap justify-center gap-2">
                {skill.skills.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-3 border border-purple-600 rounded-lg px-4 py-2">
                    <img src={item.image} alt={item.name} className="w-6 h-6" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
