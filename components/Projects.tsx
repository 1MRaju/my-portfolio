import Image from "next/image";

const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas dolorum libero quaerat repudiandae!',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToy2qrV6hKoUYK6r-BnH7HKk-WWWZNXBpT-w&s',
      caseStudyUrl: '#'
    },
    {
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas dolorum libero quaerat repudiandae!',
      imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?cs=srgb&dl=pexels-kevin-ku-92347-577585.jpg&fm=jpg',
      caseStudyUrl: 'https://github.com/NoahGdev/LiquidTools',
    },
    {
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas dolorum libero quaerat repudiandae!',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:800/1*cQAZ2YrXqmmrsKMFM4-oMw.jpeg',
      caseStudyUrl: 'https://github.com/NoahGdev/LiquidTools',
    }
  ];

  const Projects: React.FC = () => {
    return (
      <div id='projects' className="bg-transparent text-white py-16 ">
      {/* <svg className="absolute right-0 top-0  z-[-1]" viewBox="0 0 800 800">
        <defs>
            <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="73" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
            </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
            <ellipse rx="127.5" ry="144.5" cx="158.48854527148316" cy="63.1451261127883" fill="hsla(286, 59%, 10%, 1.00)"></ellipse>
        </g>
      </svg> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-widest text-center mb-20 text-text2">My Projects</h2>
          <div className=" grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

            {projects.map((project) => (
              <div key={project.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#0a0a0a] border border-text3">
                <div className="flex-shrink-0">
                  <Image className="h-48 w-full object-cover" src={project.imageUrl} alt={project.title} />
                </div>
                <div className="flex-1 bg-transparent p-6 flex flex-col justify-between pw-bg">
                  <div className="flex-1">
                    {project.caseStudyUrl !== '#' ? (
                      <a href={project.caseStudyUrl} target='_blank' rel='noopener noreferrer'>
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-text3 tracking-wider">{project.title}</p>
                          <p className="mt-3 text-base text-text3 tracking-widest">{project.description}</p>
                        </div>
                      </a>
                    ) : (
                      <a>
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-text3 tracking-wider">{project.title}</p>
                          <p className="mt-3 text-base text-text3 tracking-widest">{project.description}</p>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;
  