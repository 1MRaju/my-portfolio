import Image from "next/image";

const projects = [
    {
      title: 'Grocery E-Commerce App',
      description: 'Developed an e-commerce grocery platform with Next.js for the frontend and Strapi CMS for the backend.',
      imageUrl: '/groceryapp.png',
      caseStudyUrl: 'https://github.com/1MRaju/grocery-next'
    },
    {
      title: 'Blood Management System',
      description: 'Developed a comprehensive blood bank management system utilizing the MERN stack to streamline operations and improve data management.',
      imageUrl: '/bloodbank-app1.png',
      caseStudyUrl: 'https://github.com/1MRaju/MERN-Projects/tree/main/FinalProject-using-MERN',
    },
    {
      title: 'Currency Converter',
      description: 'Created a currency converter application using JavaScript, CSS, and HTML to facilitate real-time currency exchanges.',
      imageUrl: '/currency-conversion.png',
      caseStudyUrl: 'https://1mraju.github.io/Currency_converter_Javascript/',
    },
    {
      title: 'Login & Registration System',
      description: 'Developed a user login and registration system using the MERN stack to manage secure authentication and user data',
      imageUrl: '/login-registration.png',
      caseStudyUrl: 'https://github.com/1MRaju/user-login-register-system',
    },
    {
      title: 'E-Commerce Application',
      description: 'Built a React-based e-commerce application utilizing Faker.js to dynamically generate and display fake product data',
      imageUrl: '/online-shop.png',
      caseStudyUrl: 'https://github.com/1MRaju/React-Projects/tree/main/E-Commerce',
    },
    {
      title: 'Zomato page cloned',
      description: 'Cloned a Zomato page using HTML and CSS to replicate its design and layout.',
      imageUrl: '/zomato.webp',
      caseStudyUrl: 'https://1mraju.github.io/Zomato-Webpage/',
    },
    {
      title: 'Add to Cart',
      description: 'Created Add to Cart functionality using Html, css and Javascript.',
      imageUrl: '/addcart.png',
      caseStudyUrl: 'https://1mraju.github.io/addtocart-js/',
    },
    {
      title: 'Seven Mentor clone',
      description: 'Created a Clone of Seven Mentors page using HTML and CSS.',
      imageUrl: '/sevenmentor.png',
      caseStudyUrl: 'https://1mraju.github.io/sevenMentor-clone/',
    }
  ];

  const Projects: React.FC = () => {
    return (
      <div id='projects' className="bg-transparent text-white py-8 md:py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-widest text-center mb-10 md:mb-20 text-text2">My Projects</h2>
          <div className=" grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

            {projects.map((project) => (
              <div key={project.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#0a0a0a] border border-text3 p-5">
                <div className="flex-shrink-0">
                  <Image className=" h-[80px] md:h-[100px] w-full object-contain" src={project.imageUrl} alt={project.title} width={100}  height={100}/>
                </div>
                <div className="flex-1 bg-transparent  flex flex-col justify-between pw-bg text-center">
                  <div className="flex-1">
                    {project.caseStudyUrl !== '#' ? (
                      <a href={project.caseStudyUrl} target='_blank' rel='noopener noreferrer'>
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-text3 tracking-wider">{project.title}</p>
                          <p className="mt-3 text-sm leading-6 text-text1 font-thin tracking-wider ">{project.description}</p>
                        </div>
                      </a>
                    ) : (
                      <a>
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-text3 tracking-wider">{project.title}</p>
                          <p className="mt-3 text-sm text-text1 font-thin leading-4 tracking-wider">{project.description}</p>
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
  