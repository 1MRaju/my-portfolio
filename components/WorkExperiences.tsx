import React from 'react';

const experiences = [
  {
    id: 1,
    role: 'Fullstack Web Developer Intern',
    company: 'Seven Mentors & Training Pvt Ltd',
    date: '04-May-2023 to 31-Oct-2023',
    description: `During my internship, I leveraged my web
development skills with React, Tailwind CSS,
Express, Node.js, and MongoDB to build impactful
projects. This experience not only enhanced my
technical abilities but also prepared me to excel in
the industry`,
  },
  {
    id: 2,
    role: 'Associate Software Engineer',
    company: 'Consociate Solutions Pvt Ltd',
    date: '14-Feb-2024 to 31-July-2024',
    description:`As an Associate Software Engineer at Consociate Solutions Pvt. Ltd., I focused on creating intuitive and engaging user interfaces. This role enhanced my development skills and prepared me for advanced challenges in the tech industry.`,
  }
];

interface TimelineItemProps {
  experience: typeof experiences[0];
  side: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, side }) => {
  return (
    <div className={`relative rounded-md w-full bg-black my-6 border border-text3 ${side === 'right' ? 'md:ml-auto' : 'md:mr-auto'} md:w-2/5 ${side === 'right' ? 'timeline-bg1' : 'timeline-bg2'}`}>
      <div className={`bg-transparent rounded-lg p-6  tracking-wider text-center md:text-left`}>
        <h3 className="text-xl text-text3 font-semibold mb-2 tracking-wider">{experience.role}</h3>
        <h4 className="text-text3 mb-4">{experience.company}</h4>
        <p className="text-text2 mb-2">{experience.date}</p>
        <p className="text-text1 tracking-wider text-sm leading-6 font-thin">{experience.description}</p>
      </div>
    </div>
  );
}; 

const WorkExperiences: React.FC = () => {
  return (
    <div id='experiences' className="max-h-max text-black bg-bodyBackground w-full py-16">
      <h2 className="text-4xl mb-10 md:mb-20 text-center text-text2 tracking-widest font-extrabold">Work Experience</h2>
      <div className="container mx-auto px-6">
        <div className="relative w-full ">
          <div className="hidden md:block border-l-2 absolute left-1/2 transform -translate-x-1/2 bg-text3 h-full"></div>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              side={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperiences;