import React from 'react';

const experiences = [
  {
    id: 1,
    role: 'Fullstack Web Developer Intern',
    company: 'Seven Mentors',
    date: '04-May-2023 to 31-Oct-2023',
    description: `During my internship, I leveraged my web
development skills with React, Tailwind CSS,
Express, Node.js, and MongoDB to build impactful
projects. This experience not only enhanced my
technical abilities but also prepared me to excel in
the industry`,
  },
  // {
  //   id: 2,
  //   role: 'Associate Software Engineer',
  //   company: 'Consociate Soltions Pvt Ltd',
  //   date: '14-Feb-2024 to Present',
  //   description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas dolorum libero quaerat repudiandae!',
  // }
  {
    id: 2,
    role: 'Fullstack Web Developer Intern',
    company: 'Seven Mentors',
    date: '04-May-2023 to 31-Oct-2023',
    description:`During my internship, I leveraged my web
development skills with React, Tailwind CSS,
Express, Node.js, and MongoDB to build impactful
projects. This experience not only enhanced my
technical abilities but also prepared me to excel in
the industry`,
  }
];

interface TimelineItemProps {
  experience: typeof experiences[0];
  side: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, side }) => {
  return (
    <div className={`relative rounded-md w-full bg-black my-6 border border-text3 ${side === 'right' ? 'md:ml-auto' : 'md:mr-auto'} md:w-2/5 ${side === 'right' ? 'timeline-bg1' : 'timeline-bg2'}`}>
      <div className={`bg-transparent rounded-lg p-6  tracking-wider`}>
        <h3 className="text-xl text-text3 font-semibold mb-2 tracking-wider">{experience.role}</h3>
        <h4 className="text-text3 mb-4">{experience.company}</h4>
        <p className="text-text2 mb-2">{experience.date}</p>
        <p className="text-text3 tracking-wider leading-8">{experience.description}</p>
      </div>
    </div>
  );
}; 

const WorkExperiences: React.FC = () => {
  return (
    <div id='experiences' className="max-h-max text-black bg-bodyBackground w-full py-16">
     {/* <svg className="absolute right-0 top-0  z-[-1]" viewBox="0 0 800 800">
        <defs>
            <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="73" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
            </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
            <ellipse rx="127.5" ry="144.5" cx="558.48854527148316" cy="63.1451261127883" fill="hsla(286, 59%, 10%, 1.00)"></ellipse>
        </g>
      </svg> */}
      <h2 className="text-4xl mb-20 text-center text-text2 tracking-widest font-extrabold">Work Experience</h2>
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