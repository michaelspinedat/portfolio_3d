import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  airbnb,
  twitter,
  ecommerce,
  task,
  restaurant,
  threejs,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Mobile Developer',
    icon: backend,
  },
  {
    title: 'Full Stack Developer',
    icon: mobile,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      "Contributed to the development of the user interface for Facebook's advertising platform, improving usability and performance.",
      'Designed and developed a new feature for the ad dashboard, resulting in a 20% increase in workflow efficiency.',
      'Collaborated on the development of an internal library of reusable components, speeding up the delivery of new features by 30%.',
      'Participated in code review sessions and provided constructive feedback to team members.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Twitter',
    icon: twitter,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Worked on implementing a new "conversation thread" functionality on the Twitter platform, allowing users to easily follow conversations.',
      'Optimized the performance of the Twitter mobile application by reducing timeline loading time by 40%.',
      'Developed an internal data monitoring and analysis tool that helped the support team quickly identify and resolve issues.',
      'Participated in the migration of the backend infrastructure to a microservices-based architecture.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Airbnb',
    icon: airbnb,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Contributed to the frontend development team at Airbnb, improving the booking experience for users and increasing the conversion rate by 15%.',
      'Implemented an advanced search feature using filtering and sorting technologies to help users find more relevant accommodations.',
      'Participated in creating a personalized recommendation system that improved the accuracy of accommodation suggestions by 20%.',
      'Collaborated on implementing automated testing to ensure code quality and stability.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'CodeWizard is an exceptionally talented developer. Their meticulous approach to code quality and attention to detail has led to remarkable results in our collaborative projects.',
    name: 'Olivia',
    designation: 'Project Manager',
    company: 'Twitter',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      'Working with CodeWizard has been a wonderful experience. Their ability to find creative solutions to complex problems and their positive attitude always make teamwork a pleasure.',
    name: 'Sarah',
    designation: 'UX/UI Designer',
    company: 'Meta',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    testimonial:
      'CodeWizard is a highly skilled and reliable developer. Their broad technical knowledge and effective communication skills have been invaluable in our collaborative work.',
    name: 'David',
    designation: 'CTO',
    company: 'Airbnb',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
]

const projects = [
  {
    name: 'Fashion E-commerce',
    description:
      'I developed a fashion e-commerce website that allows users to browse and purchase fashion products. It includes features like a shopping cart, product search, and secure payment options.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'node-js',
        color: 'pink-text-gradient',
      },
    ],
    image: ecommerce,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Task Management Application',
    description:
      'I created a task management application that allows users to organize and track their daily tasks. It includes functionalities such as task creation, reminders, and task categorization.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'firebase',
        color: 'pink-text-gradient',
      },
    ],
    image: task,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Restaurant Reservation App',
    description:
      ' I developed a mobile application for reserving tables at restaurants. Users can search for restaurants, view table availability, and make reservations. It also includes restaurant rating and review features.',
    tags: [
      {
        name: 'react native',
        color: 'blue-text-gradient',
      },
      {
        name: 'GraphQL',
        color: 'green-text-gradient',
      },
      {
        name: 'firebase',
        color: 'pink-text-gradient',
      },
    ],
    image: restaurant,
    source_code_link: 'https://github.com/',
  },
]

export { services, technologies, experiences, testimonials, projects }
