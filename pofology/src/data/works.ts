import { Work } from '@/types';

export const works: Work[] = [
  {
    id: 28,
    title: 'Personal Projects',
    category: 'Personal',
    thumbnailUrl: '/images/works/personal-projects.png',
    description: `Outside of my professional work, I build personal projects spanning algorithmic trading, full-stack
    web development, and real-time 3D, while continuously expanding my backend and cloud skill set.`,
    publishedAt: '',
    images: ['/images/works/personal-projects-hero.png'],
    previewUrl: '#',
    featureList: [],
    subProjects: [
      {
        name: 'Algorithmic Trading (QuantConnect)',
        summary:
          'Developed algorithmic day-trading strategies in Python and C# on the QuantConnect platform, building ' +
          'backtesting and optimization pipelines alongside live trading strategy code for execution through ' +
          'Interactive Brokers (IB).',
        featureList: [
          'Designed and implemented algorithmic day-trading strategies in Python and C#',
          'Built backtesting and optimization pipelines on the QuantConnect platform',
          'Developed live trading strategy code for execution through Interactive Brokers (IB)',
        ],
      },
      {
        name: 'Fundamental Stock Analysis Platform',
        summary:
          'Built the backend infrastructure and frontend website for a fundamental stock analysis platform, ' +
          'including an AI/ML recommendation engine that estimates how discounted a stock is and generates ' +
          'detailed fundamental analysis reports and daily email summaries. Built with Python Azure Functions and ' +
          'integrated with the GuruFocus API.',
        featureList: [
          'Backend infrastructure and frontend website for fundamental stock analysis',
          'AI/ML recommendation engine estimating stock discount levels with detailed analysis',
          'Daily email summaries delivering key insights to subscribers',
          'Built on Python Azure Functions, integrated with the GuruFocus API',
        ],
      },
      {
        name: 'Backend Development Certifications',
        summary:
          'Continuously expanding my backend development expertise through structured coursework and professional ' +
          'certifications.',
        featureList: [
          'Pursuing certifications in backend development and cloud fundamentals',
          'Applying new concepts through hands-on coursework and projects',
        ],
      },
      {
        name: 'Real-Time 3D Projects (Unreal Engine)',
        summary:
          'Developing personal real-time 3D projects in Unreal Engine to sharpen my engine and rendering skills ' +
          'outside of professional work.',
        featureList: [
          'Building real-time 3D projects and prototypes in Unreal Engine',
          'Exploring rendering, Blueprint, and gameplay systems to expand engine expertise',
        ],
      },
    ],
    attributes: [
      {
        name: 'Role',
        value: 'Software Engineer',
      },
      {
        name: 'Category',
        value: 'Personal',
      },
      {
        name: 'Skills',
        value: 'C++, C#, Python, Backend and Cloud Development',
      },
    ],
  },
  {
    id: 13,
    title: 'Unity Walmart Connect',
    category: 'SDK Development',
    thumbnailUrl: '/images/works/unity-walmart-connect.png',
    description: `At Unity Technologies and later Capgemini, I led the development of the Walmart Connect Unity
    SDK, enabling players to seamlessly access and purchase Walmart physical products with full in-game integrated
    order fulfillment and tracking. I architected a robust and extensible SDK framework to facilitate easy
    integration of future third-party sellers, and served as owner of the SDK front-end, helping the team
    successfully deliver through alpha and beta phases.`,
    publishedAt: '01 January 2024',
    images: ['/images/works/unity-walmart-connect.png'],
    previewUrl: 'https://www.youtube.com/watch?v=6v0eKqaOhhM',
    featureList: [
      'Led development of the Walmart Connect Unity SDK',
      'Architected an extensible SDK framework for future third-party sellers',
      'Owned the SDK front-end through alpha and beta delivery',
      'Publicly announced by Walmart & Unity, January 2024',
    ],
    attributes: [
      {
        name: 'Company',
        value: 'Unity Technologies / Capgemini / Walmart',
      },
      {
        name: 'Role',
        value: 'Lead SDK Developer, Front-End Owner',
      },
      {
        name: 'Category',
        value: 'SDK Development',
      },
      {
        name: 'Skills',
        value: 'Unity, C#, SDK Architecture, Commerce APIs',
      },
    ],
  },
  {
    id: 25,
    title: 'Image On Demand Server',
    category: 'Full Stack Development',
    thumbnailUrl: '/images/works/undisclosed-image-on-demand.png',
    description: `Details of this project are under NDA and cannot be publicly disclosed. At Unity Technologies, I
    led the development of all three core components of this Image-on-Demand platform, contributing as both Lead
    and Senior Developer and owning project planning, resource management, and delivery.`,
    publishedAt: '01 January 2021',
    images: ['/images/works/undisclosed-image-on-demand-hero.png'],
    previewUrl: '#',
    featureList: [],
    subProjects: [
      {
        name: 'Asset Ingestion Pipeline',
        summary:
          'Built a seamless asset ingestion and optimization pipeline in C#, using Pixyz and Forma, to process ' +
          'highly detailed 3D models and upload them to the backend server for review and production.',
        featureList: [
          'Seamless ingestion pipeline for highly detailed 3D models built in C#',
          'Automated model optimization using Pixyz',
          'Integrated with Forma for streamlined delivery to the backend server',
        ],
      },
      {
        name: 'Web-Based Review Tool',
        summary:
          'Developed a React-based review tool integrated with Jira, enabling stakeholders to review images ' +
          'generated by the Image-on-Demand server.',
        featureList: [
          'React-based web application for stakeholder image review',
          'Integrated with Jira for streamlined feedback and approval workflows',
          'Enabled direct review of images generated by the Image-on-Demand server',
        ],
      },
      {
        name: 'Image-on-Demand Server',
        summary:
          'Engineered a Unity and Forma-based application running on high-performance GPU virtual machines in ' +
          'the cloud, powering both the review tool and the production website.',
        featureList: [
          'Unity and Forma-based rendering application',
          'Deployed on high-performance GPU VMs in the cloud',
          'Powered both the review tool and production website',
        ],
      },
    ],
    attributes: [
      {
        name: 'Company',
        value: 'Unity Technologies',
      },
      {
        name: 'Role',
        value: 'Lead Developer',
      },
      {
        name: 'Category',
        value: 'Full Stack Development',
      },
      {
        name: 'Skills',
        value: 'C#, C++, React, Cloud Architecture, REST APIs and Rendering',
      },
    ],
  },
  {
    id: 27,
    title: 'Machine Learning Projects',
    category: 'Machine Learning',
    thumbnailUrl: '/images/works/undisclosed-ml-projects.png',
    description: `Details of these projects are under NDA and cannot be publicly disclosed. Across my time at Unity
    Technologies and Capgemini, I contributed to the following machine learning initiatives.`,
    publishedAt: '01 January 2021',
    images: ['/images/works/undisclosed-ml-projects-hero.png'],
    previewUrl: '#',
    featureList: [],
    subProjects: [
      {
        name: 'Reinforcement Learning for Unitree H1 (Sim2Real)',
        summary:
          'Trained a reinforcement learning model for the Unitree H1 humanoid robot in simulation, targeting ' +
          'Sim2Real transfer to the physical robot. Built simulation environments in NVIDIA Isaac and MuJoCo, ' +
          'writing the core training logic in Python with CUDA-accelerated training to teach the robot to walk ' +
          'and stand.',
        featureList: [
          'Reinforcement learning training pipeline for the Unitree H1 humanoid robot',
          'Simulation environments built in NVIDIA Isaac and MuJoCo',
          'Sim2Real transfer enabling deployment to the physical robot',
          'CUDA-accelerated training logic implemented in Python',
        ],
      },
      {
        name: 'Synthetic Data Generation for Perception ML',
        summary:
          'Built a Unity-based pipeline to generate tagged synthetic 3D data, used to train a perception ML model ' +
          'to identify different objects in the real world.',
        featureList: [
          'Unity-based synthetic 3D data generation pipeline',
          'Automated tagging to support supervised model training',
          'Trained a perception ML model to recognize real-world objects',
        ],
      },
    ],
    attributes: [
      {
        name: 'Company',
        value: 'Unity Technologies and Capgemini',
      },
      {
        name: 'Role',
        value: 'Senior Software Engineer',
      },
      {
        name: 'Category',
        value: 'Machine Learning',
      },
      {
        name: 'Skills',
        value: 'NVIDIA Isaac, MuJoCo, CUDA, Reinforcement Learning, Unity, Synthetic Data, Python, C++',
      },
    ],
  },
  {
    id: 22,
    title: 'Nissan In-Car HMI',
    category: 'Automotive HMI',
    thumbnailUrl: '/images/works/nissan-unity-hmi.png',
    description: `Across my time at Unity Technologies and Capgemini, I contributed to real-time 3D Human Machine
    Interface (HMI) solutions for Nissan, spearheading technical roadmap planning and the delivery of
    professional services solutions leveraging the Unity tech stack for next-generation in-car experiences.`,
    publishedAt: '01 January 2024',
    images: ['/images/works/nissan-unity-hmi.png'],
    previewUrl: 'https://www.youtube.com/watch?v=RMzgRVJ6M3A',
    featureList: [
      'Real-time 3D HMI solutions for next-generation in-car experiences',
      'Spearheaded technical roadmap planning across the Unity → Capgemini transition',
      'Featured in Unity Industry Evolution Summit, Atlanta 2024',
    ],
    attributes: [
      {
        name: 'Company',
        value: 'Unity Technologies / Capgemini / Nissan',
      },
      {
        name: 'Role',
        value: 'Senior Software Engineer',
      },
      {
        name: 'Category',
        value: 'Automotive HMI',
      },
      {
        name: 'Skills',
        value: 'Unity, C#, C++',
      },
    ],
  },
  {
    id: 24,
    title: 'Robotics Projects',
    category: 'Robotics',
    thumbnailUrl: '/images/works/undisclosed-robot-projects.png',
    description: `Details of these projects are under NDA and cannot be publicly disclosed. At Unity Technologies,
    I contributed to the following robotics initiatives.`,
    publishedAt: '01 January 2021',
    images: ['/images/works/undisclosed-robot-projects-hero.png'],
    previewUrl: '#',
    featureList: [],
    subProjects: [
      {
        name: 'Boston Dynamics Spot',
        summary:
          'Engineered a high-performance Unity desktop application for remote wireless control of the Boston ' +
          'Dynamics Spot robot, integrating a RabbitMQ messaging framework for low-latency, bi-directional ' +
          'communication with robot sensors and camera feeds over the internet.',
        featureList: [
          'High-performance Unity desktop application for remote wireless control of the Spot robot',
          'RabbitMQ messaging framework enabling low-latency, bi-directional communication',
          'Real-time access to robot sensors and camera feeds over the internet',
        ],
      },
      {
        name: 'Universal Robots UR5',
        summary:
          'Engineered a high-fidelity digital twin and simulation application in Unity for the Universal Robots ' +
          'UR5, including a C++ integration layer enabling direct control of the physical robot.',
        featureList: [
          'High-fidelity digital twin and simulation application built in Unity for the UR5',
          'C++ integration layer enabling direct control of the physical robot',
          'Simulation environment for validating robot behavior before real-world deployment',
        ],
      },
    ],
    attributes: [
      {
        name: 'Company',
        value: 'Unity Technologies',
      },
      {
        name: 'Role',
        value: 'C#, C++ & Unity Developer',
      },
      {
        name: 'Category',
        value: 'Robotics',
      },
      {
        name: 'Skills',
        value: 'Unity, C++, C#, RabbitMQ, Digital Twins',
      },
    ],
  },
  {
    id: 14,
    title: 'Age of Empires IV',
    category: 'Game Development',
    thumbnailUrl: '/images/works/age-of-empires-iv.png',
    description: `As a C++ Programmer at Relic Entertainment, I contributed as a programmer on the campaign team
    for Microsoft's flagship Age of Empires IV franchise. I identified and resolved critical performance
    bottlenecks in the proprietary Essence Engine, optimizing gameplay architecture across multiple
    projects, and partnered with the DevOps team to implement automated gameplay testing frameworks that
    improved release quality and efficiency.`,
    publishedAt: '01 January 2021',
    images: ['/images/works/age-of-empires-iv.png'],
    previewUrl: 'https://www.youtube.com/watch?v=5TnynE3PuDE',
    featureList: [
      'Contributed as a programmer on the campaign team for a AAA real-time strategy franchise',
      'Optimized gameplay systems within the proprietary Essence Engine (C++, VTune, Profiler)',
      `Implemented the engine's Save/Load system`,
      'Built automated gameplay testing frameworks with the DevOps team',
      'Facilitated engine workshops for gameplay designers',
    ],
    attributes: [
      {
        name: 'Company',
        value: 'Relic Entertainment / Microsoft',
      },
      {
        name: 'Role',
        value: 'C++ Programmer, Systems Developer',
      },
      {
        name: 'Category',
        value: 'Game Development',
      },
      {
        name: 'Skills',
        value: 'C++, Essence Engine, Gameplay Systems, VTune, Profiler',
      },
    ],
  },
  {
    id: 15,
    title: 'Company of Heroes 3',
    category: 'Game Development',
    thumbnailUrl: '/images/works/company-of-heroes-3.png',
    description: `As a C++ Programmer at Relic Entertainment, I worked concurrently on Company of Heroes 3
    alongside Age of Empires IV, contributing to critical game systems. I identified and resolved critical
    performance bottlenecks in the proprietary Essence Engine, optimizing gameplay architecture across multiple
    projects, and partnered with the DevOps team to implement automated gameplay testing frameworks that
    improved release quality and efficiency.`,
    publishedAt: '01 January 2021',
    images: ['/images/works/company-of-heroes-3.png'],
    previewUrl: 'https://www.youtube.com/watch?v=O6FOau5Mmvk',
    featureList: [
      'Part of the Engine Systems Team',
      'Optimized gameplay systems within the proprietary Essence Engine (C++)',
      'Implemented the Save/Load system',
      'Built automated gameplay testing frameworks with the DevOps team',
      'Facilitated engine workshops for gameplay designers',
    ],
    attributes: [
      {
        name: 'Company',
        value: 'Relic Entertainment / SEGA',
      },
      {
        name: 'Role',
        value: 'C++ Programmer, Systems Developer',
      },
      {
        name: 'Category',
        value: 'Game Development',
      },
      {
        name: 'Skills',
        value: 'C++, Essence Engine, Gameplay Systems',
      },
    ],
  },
  {
    id: 16,
    title: 'AWS Cloud Quest: Cloud Practitioner',
    category: 'Game Development',
    thumbnailUrl: '/images/works/aws-cloud-quest.png',
    description: `As Frontend and Gameplay Developer at Unity Technologies, I contributed to core gameplay systems
    and led the UI framework for the WebGL-based AWS Cloud Quest open-world game, implementing an MVC-based
    architecture on UGUI, building sandbox environments for gameplay testing and validation, and implementing a
    REST API integration layer connecting gameplay systems to backend services. I worked directly with the Amazon
    team to ensure the successful release of the game within budget and timelines.`,
    publishedAt: '01 May 2022',
    images: ['/images/works/aws-cloud-quest.png'],
    previewUrl: 'https://www.youtube.com/watch?v=lcmVvIeiFGc',
    featureList: [
      'WebGL open-world game built with Unity',
      'Contributed to core gameplay systems',
      'Core UI framework implemented on UGUI using an MVC pattern',
      'Built sandbox environments for gameplay testing and validation',
      'Implemented a REST API integration layer connecting gameplay to backend services',
      'Delivered in direct collaboration with the Amazon team',
    ],
    attributes: [
      {
        name: 'Company',
        value: 'Amazon Web Services (AWS) / Unity Technologies',
      },
      {
        name: 'Role',
        value: 'Frontend & Gameplay Developer',
      },
      {
        name: 'Category',
        value: 'Game Development',
      },
      {
        name: 'Skills',
        value: 'Unity, C#, UGUI, WebGL, MVC',
      },
    ],
  },
  {
    id: 17,
    title: 'Iron Maiden: Legacy of the Beast',
    category: 'Game Development',
    thumbnailUrl: '/images/works/iron-maiden-legacy-of-the-beast.png',
    description: `As a C# and Unity Developer at Roadhouse Interactive, I contributed to the successful launch of
    the highly anticipated Iron Maiden: Legacy of the Beast mobile game, optimizing game performance and memory
    usage to enhance user experience and stability.`,
    publishedAt: '01 January 2016',
    images: ['/images/works/iron-maiden-legacy-of-the-beast.png'],
    previewUrl: 'https://www.youtube.com/watch?v=HyFA0gEPVTc',
    featureList: [
      'Shipped as part of the launch team for a AAA-licensed mobile RPG',
      'Contributed to core gameplay and UI systems, and built the Dungeons feature',
      'Optimized game performance and memory usage',
      'Improved user experience and stability',
    ],
    attributes: [
      {
        name: 'Company',
        value: 'Roadhouse Interactive',
      },
      {
        name: 'Role',
        value: 'C# & Unity Developer',
      },
      {
        name: 'Category',
        value: 'Game Development',
      },
      {
        name: 'Skills',
        value: 'Unity, C#, Performance Optimization',
      },
    ],
  },
  {
    id: 18,
    title: 'Kill Shot Bravo',
    category: 'Game Development',
    thumbnailUrl: '/images/works/kill-shot-bravo.png',
    description: `As a C++, C# and Unity Developer at Hothead Games, I contributed to the successful launch of Kill
    Shot Bravo, led the initiative to implement MVC UI software architecture on the Unity game engine, and
    integrated third-party native mobile SDKs (C++, Java, Objective-C) with the Unity and Horque engines.`,
    publishedAt: '01 December 2014',
    images: ['/images/works/kill-shot-bravo.png'],
    previewUrl: 'https://www.youtube.com/watch?v=zSBw9MRly5w',
    featureList: [
      'Shipped as part of the launch team for a mobile FPS title',
      'Led MVC UI architecture implementation on Unity',
      'Integrated third-party native mobile SDKs (C++, Java, Objective-C)',
    ],
    attributes: [
      {
        name: 'Company',
        value: 'Hothead Games',
      },
      {
        name: 'Role',
        value: 'C++, C# & Unity Developer',
      },
      {
        name: 'Category',
        value: 'Game Development',
      },
      {
        name: 'Skills',
        value: 'Unity, C++, C#, MVC, Native SDK Integration',
      },
    ],
  },
  {
    id: 19,
    title: 'Boom Boom Soccer',
    category: 'Game Development',
    thumbnailUrl: '/images/works/boom-boom-soccer.png',
    description: `As a C++, C# and Unity Developer at Hothead Games, I contributed to the successful launch of Boom
    Boom Soccer, led the initiative to implement MVC UI software architecture on the Unity game engine, and
    integrated third-party native mobile SDKs (C++, Java, Objective-C) with the Unity and Horque engines.`,
    publishedAt: '01 December 2014',
    images: ['/images/works/boom-boom-soccer.png'],
    previewUrl: 'https://www.youtube.com/watch?v=O66eNTjhU2s',
    featureList: [
      'Shipped as part of the launch team for a mobile sports title',
      'Led MVC UI architecture implementation on Unity',
      'Integrated third-party native mobile SDKs (C++, Java, Objective-C)',
    ],
    attributes: [
      {
        name: 'Company',
        value: 'Hothead Games',
      },
      {
        name: 'Role',
        value: 'C++, C# & Unity Developer',
      },
      {
        name: 'Category',
        value: 'Game Development',
      },
      {
        name: 'Skills',
        value: 'Unity, C++, C#, MVC, Native SDK Integration',
      },
    ],
  },
  {
    id: 20,
    title: 'Boom Boom Football',
    category: 'Game Development',
    thumbnailUrl: '/images/works/boom-boom-football.png',
    description: `As a C++, C# and Unity Developer at Hothead Games, I contributed to the successful launch of Boom
    Boom Football, led the initiative to implement MVC UI software architecture on the Unity game engine, and
    integrated third-party native mobile SDKs (C++, Java, Objective-C) with the Unity and Horque engines.`,
    publishedAt: '01 December 2014',
    images: ['/images/works/boom-boom-football.png'],
    previewUrl: 'https://www.youtube.com/watch?v=o6rxts85duc',
    featureList: [
      'Shipped as part of the launch team for a mobile sports title',
      'Led MVC UI architecture implementation on Unity',
      'Integrated third-party native mobile SDKs (C++, Java, Objective-C)',
    ],
    attributes: [
      {
        name: 'Company',
        value: 'Hothead Games',
      },
      {
        name: 'Role',
        value: 'C++, C# & Unity Developer',
      },
      {
        name: 'Category',
        value: 'Game Development',
      },
      {
        name: 'Skills',
        value: 'Unity, C++, C#, MVC, Native SDK Integration',
      },
    ],
  },
  {
    id: 21,
    title: 'Mouse Smasher',
    category: 'Game Development',
    thumbnailUrl: '/images/works/mouse-smasher.png',
    description: `As Founder & Technical Director at Orange Mind LLC, the mobile game developer startup I founded, I
    worked as C# and Unity Programmer on Mouse Smasher, establishing the technical roadmap and building the game
    alongside the initial development team I hired.`,
    publishedAt: '01 February 2012',
    images: ['/images/works/mouse-smasher.png'],
    previewUrl: 'https://www.youtube.com/watch?v=PsZaJTIKXoo',
    featureList: [
      'Founded and led the studio delivering this title',
      'Established the technical roadmap on Unity/C#',
      'Hired and led the initial development team',
    ],
    attributes: [
      {
        name: 'Company',
        value: 'Orange Mind LLC',
      },
      {
        name: 'Role',
        value: 'Founder & Technical Director, C# & Unity Programmer',
      },
      {
        name: 'Category',
        value: 'Game Development',
      },
      {
        name: 'Skills',
        value: 'Unity, C#',
      },
    ],
  },
  {
    id: 23,
    title: 'My Fantasy DJ',
    category: 'Game Development',
    thumbnailUrl: '/images/works/my-fantasy-dj.png',
    description: `As a C# and Unity Developer at Avision Studio, I contributed to core front-end systems for My
    Fantasy DJ, implementing a highly responsive, extensible customization framework for 2D sprite-based
    characters and environments, and engineering a lightweight, scalable MVC-based UI framework to improve
    interface modularity and development speed. I also developed sandbox testing environments to streamline
    game validation and QA, and mentored the development team on Unity best practices.`,
    publishedAt: '01 November 2025',
    images: ['/images/works/my-fantasy-dj-hero.png'],
    previewUrl: 'https://apps.apple.com/us/app/my-fantasy-dj/id6746760611',
    featureList: [
      'Extensible customization framework for 2D sprite-based characters and environments',
      'Lightweight, scalable MVC-based UI framework',
      'Sandbox testing environments for game validation and QA',
      'Mentored the development team on Unity best practices',
    ],
    attributes: [
      {
        name: 'Company',
        value: 'Avision Studio',
      },
      {
        name: 'Role',
        value: 'C# & Unity Developer',
      },
      {
        name: 'Category',
        value: 'Game Development',
      },
      {
        name: 'Skills',
        value: 'Unity, C#, MVC, 2D Sprite Systems',
      },
    ],
  },
  {
    id: 26,
    title: 'Windows XP Embedded Security Application',
    category: 'Desktop Application',
    thumbnailUrl: '/images/works/winxp-embedded-security.png',
    description: `As Founder & Technical Director at KiaTech Bonyan LLC, I customized Windows XP Embedded for
    thin clients and built a Windows desktop application in C# and WPF that added a centralized security layer
    to the operating system, allowing all changes made during a session to be automatically reverted after
    restart, pioneering centralized security solutions for PC, Windows Embedded, and thin clients on top of the
    .NET Framework.`,
    publishedAt: '01 July 2005',
    images: ['/images/works/winxp-embedded-security-hero.png'],
    previewUrl: '#',
    featureList: [
      'Customized Windows XP Embedded for thin client deployments',
      'C# & WPF desktop application adding an OS-level security layer',
      'Automatic revert-on-restart of all session changes',
      'Centralized security solutions for PC, Windows Embedded, and thin clients',
    ],
    attributes: [
      {
        name: 'Role',
        value: 'Founder & Technical Director, C++ & C# Programmer',
      },
      {
        name: 'Category',
        value: 'Desktop Application',
      },
      {
        name: 'Skills',
        value: 'C++, C#, WPF, .NET Framework, Windows XP Embedded',
      },
    ],
  },
];
