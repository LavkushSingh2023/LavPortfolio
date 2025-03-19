const experience = [
  {
    company: "CodSoft",
    role: "Intern",
    duration: "Summer 2024",
    description:
      "Gained hands-on experience in web development while building over 48 projects during college for learning purposes."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Professional Experience
            </h2>   
            <p className="mt-4">My journey in web development and professional learning.</p> 
        </div>   
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700 md:before:ml-2.5">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-12 md:pl-8">
              <div className="absolute left-0 top-2 w-4 h-4 bg-blue-600 rounded-full" />
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.duration}</p>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
