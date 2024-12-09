export const NavItems = [
  {
    name: "Home",
    id: "#home",
  },
  {
    name: "Experience",
    id: "#experience",
  },
  {
    name: "Projects",
    id: "#projects",
  },
  {
    name: "Blogs",
    id: "#blogs",
  },
  {
    name: "Contact",
    id: "#contact",
  },
];

export const BlogsData = [
  {
    date: "4-3-2023",
    title: "TorchServe",
    description: "How to use TorchServe",
    id: "torchserve",
    tags: ["Pytorch", "Deep Learning", "Machine Learning"],
    content: [
      { type: "h1", content: ["Introduction to PyTorch"] },
      {
        type: "paragraph",
        content: [
          "PyTorch is a popular deep learning framework that provides a flexible and dynamic approach to building neural networks. In this blog post, we will explore the basics of PyTorch and learn how to use PyTorch Serve.",
        ],
      },
      { type: "h2", content: ["Installing PyTorch"] },
      {
        type: "paragraph",
        content: [
          "To get started with PyTorch, you need to install it on your machine. You can install PyTorch using pip or conda, depending on your preference and environment setup.",
        ],
      },
      {
        type: "code",
        content: [
          "import torch",
          "import torchvision",
          "import torch.nn as nn",
        ],
      },
      { type: "h2", content: ["Loading and Preprocessing Data"] },
      {
        type: "paragraph",
        content: [
          "Before training a neural network with PyTorch, you need to load and preprocess your data. PyTorch provides various utilities and classes to handle data loading and preprocessing tasks.",
        ],
      },
      {
        type: "code",
        content: [
          "from torchvision import datasets",
          "from torchvision.transforms import ToTensor",
        ],
      },
      { type: "h2", content: ["Building and Training a Neural Network"] },
      {
        type: "paragraph",
        content: [
          "Once you have your data ready, you can start building and training your neural network using PyTorch. PyTorch provides a wide range of pre-built neural network layers and loss functions that you can use to construct your model.",
        ],
      },
      {
        type: "code",
        content: [
          "class NeuralNetwork(nn.Module):",
          "    def __init__(self):",
          "        super(NeuralNetwork, self).__init__()",
          "        self.flatten = nn.Flatten()",
          "        self.linear_relu_stack = nn.Sequential(",
          "            nn.Linear(784, 512),",
          "            nn.ReLU(),",
          "            nn.Linear(512, 10)",
          "        )",
        ],
      },
      { type: "h2", content: ["Using PyTorch Serve"] },
      {
        type: "paragraph",
        content: [
          "PyTorch Serve is a powerful tool that allows you to deploy your PyTorch models as a web service. It provides an easy-to-use interface for serving your models and handling incoming requests.",
        ],
      },
      {
        type: "code",
        content: [
          "from torchserve import Model",
          "from torchserve.model import ModelLoader",
          "from torchserve.utils import image_processing",
        ],
      },
    ],
  },
  {
    date: "4-3-2023",
    title: "TorchServe",
    description: "How to use TorchServe",
    id: "torchserve",
    tags: ["Pytorch", "Deep Learning", "Machine Learning"],
    content: [
      { type: "h1", content: ["Introduction to PyTorch"] },
      {
        type: "paragraph",
        content: [
          "PyTorch is a popular deep learning framework that provides a flexible and dynamic approach to building neural networks. In this blog post, we will explore the basics of PyTorch and learn how to use PyTorch Serve.",
        ],
      },
      { type: "h2", content: ["Installing PyTorch"] },
      {
        type: "paragraph",
        content: [
          "To get started with PyTorch, you need to install it on your machine. You can install PyTorch using pip or conda, depending on your preference and environment setup.",
        ],
      },
      {
        type: "code",
        content: [
          "import torch",
          "import torchvision",
          "import torch.nn as nn",
        ],
      },
      { type: "h2", content: ["Loading and Preprocessing Data"] },
      {
        type: "paragraph",
        content: [
          "Before training a neural network with PyTorch, you need to load and preprocess your data. PyTorch provides various utilities and classes to handle data loading and preprocessing tasks.",
        ],
      },
      {
        type: "code",
        content: [
          "from torchvision import datasets",
          "from torchvision.transforms import ToTensor",
        ],
      },
      { type: "h2", content: ["Building and Training a Neural Network"] },
      {
        type: "paragraph",
        content: [
          "Once you have your data ready, you can start building and training your neural network using PyTorch. PyTorch provides a wide range of pre-built neural network layers and loss functions that you can use to construct your model.",
        ],
      },
      {
        type: "code",
        content: [
          "class NeuralNetwork(nn.Module):",
          "    def __init__(self):",
          "        super(NeuralNetwork, self).__init__()",
          "        self.flatten = nn.Flatten()",
          "        self.linear_relu_stack = nn.Sequential(",
          "            nn.Linear(784, 512),",
          "            nn.ReLU(),",
          "            nn.Linear(512, 10)",
          "        )",
        ],
      },
      { type: "h2", content: ["Using PyTorch Serve"] },
      {
        type: "paragraph",
        content: [
          "PyTorch Serve is a powerful tool that allows you to deploy your PyTorch models as a web service. It provides an easy-to-use interface for serving your models and handling incoming requests.",
        ],
      },
      {
        type: "code",
        content: [
          "from torchserve import Model",
          "from torchserve.model import ModelLoader",
          "from torchserve.utils import image_processing",
        ],
      },
    ],
  },
  {
    date: "4-3-2023",
    title: "TorchServe",
    description: "How to use TorchServe",
    id: "torchserve",
    tags: ["Pytorch", "Deep Learning", "Machine Learning"],
    content: [
      { type: "h1", content: ["Introduction to PyTorch"] },
      {
        type: "paragraph",
        content: [
          "PyTorch is a popular deep learning framework that provides a flexible and dynamic approach to building neural networks. In this blog post, we will explore the basics of PyTorch and learn how to use PyTorch Serve.",
        ],
      },
      { type: "h2", content: ["Installing PyTorch"] },
      {
        type: "paragraph",
        content: [
          "To get started with PyTorch, you need to install it on your machine. You can install PyTorch using pip or conda, depending on your preference and environment setup.",
        ],
      },
      {
        type: "code",
        content: [
          "import torch",
          "import torchvision",
          "import torch.nn as nn",
        ],
      },
      { type: "h2", content: ["Loading and Preprocessing Data"] },
      {
        type: "paragraph",
        content: [
          "Before training a neural network with PyTorch, you need to load and preprocess your data. PyTorch provides various utilities and classes to handle data loading and preprocessing tasks.",
        ],
      },
      {
        type: "code",
        content: [
          "from torchvision import datasets",
          "from torchvision.transforms import ToTensor",
        ],
      },
      { type: "h2", content: ["Building and Training a Neural Network"] },
      {
        type: "paragraph",
        content: [
          "Once you have your data ready, you can start building and training your neural network using PyTorch. PyTorch provides a wide range of pre-built neural network layers and loss functions that you can use to construct your model.",
        ],
      },
      {
        type: "code",
        content: [
          "class NeuralNetwork(nn.Module):",
          "    def __init__(self):",
          "        super(NeuralNetwork, self).__init__()",
          "        self.flatten = nn.Flatten()",
          "        self.linear_relu_stack = nn.Sequential(",
          "            nn.Linear(784, 512),",
          "            nn.ReLU(),",
          "            nn.Linear(512, 10)",
          "        )",
        ],
      },
      { type: "h2", content: ["Using PyTorch Serve"] },
      {
        type: "paragraph",
        content: [
          "PyTorch Serve is a powerful tool that allows you to deploy your PyTorch models as a web service. It provides an easy-to-use interface for serving your models and handling incoming requests.",
        ],
      },
      {
        type: "code",
        content: [
          "from torchserve import Model",
          "from torchserve.model import ModelLoader",
          "from torchserve.utils import image_processing",
        ],
      },
    ],
  },
];

// "Developed a model deployment framework for inter-VM deployment of TensorFlow and PyTorch models as part of a scalable machine learning pipeline. Integrated GenAI LLMs like LLaMA and enterprise OCR into the platform and model training tool",
export const ExperienceData = [
  {
    date: "2023 - 2024",
    title: "Kanverse.ai - Software Engineer",
    description:
      "Developed machine learning pipelines for document extraction, integrating LLMs and in-house PyTorch and TensorFlow models.",
    tags: [
      "React",
      "Python",
      "FastAPI",
      "Nodejs",
      "Tensorflow",
      "Pytorch",
      "Javascript",
      "Docker",
      "Redis",
      "MongoDB",
    ],
  },
  {
    date: "2022 - 2022",
    title: "Cognologix (Uber) - Software Engineer Intern",
    description:
      // "Built ETL pipeline validation for Uber/Uber Eats with a throughput of ≈100,000 events per second, meeting sub-second SLAs. Built an ETL framework using Apache Flask, Apache pinot and Kafka.",
      "Built ETL pipeline validation for Uber/Uber Eats with throughput of ≈100,000 events/sec",
    tags: ["Golang", "Apache Kafka", "Apache Flink", "Apache Pinot"],
  },
  {
    date: "2023 - Present",
    title: "Freelance web developer",
    description: "Collaborated with clients on full-stack web development projects.",
    tags: ["Nextjs", "Vercel", "Postgresql"],
  },
];

export const ProjectsDataDetailed = [
  {
    date: "2024 - Present",
    title: "Visual note taking app",
    description: "Visual note taking app built with Nextjs and Postgresql, opensourced repo deployed on vercel",
    tags: ["Nextjs", "TurboRepo", "PostgreSQL", "Vercel", "Zod", "Shadcnui", "Supabase"],
    link: "https://github.com/imBLISP/visual-notes",
    preview_type: "twitter",
    preview_link: "1842224376260768102",
  },
  {
    date: "2022 - 2023",
    title: "Recommendation system",
    description:
      "Recommendation system for movies, Collaborative filtering using matrix factorization, Comparison of objective functions and optimizers, Retrieval of user recommendations and similar movies",
    tags: ["Tensorflow", "Pandas", "Numpy"],
    link: "https://github.com/imBLISP/RecSys",
    preview_type: "image",
    preview_link: "/recommendation_system.png"
  },
  {
    date: "2022 - 2023",
    title: "Ecommerce website for digital art",
    description:
      "Full-stack eCommerce website deployed on AWS where users can buy/sell digital art",
    tags: ["Python", "Flask", "SQLite", "Jquery", "Stripe", "AWS"],
    link: "https://github.com/imBLISP/Digital-art-ecommerce",
    preview_type: "image",
    preview_link: "/ecommerce_2.png"
  },
];

export const ProjectsData = [
  {
    date: "2024 - 2024",
    title: "Async blogs API",
    description: "Blogs API to integrate with any blog platform",
    tags: ["FastAPI", "Celery", "Elasticsearch", "Docker", "Kubernetes"],
    link: "https://github.com/imBLISP/blogs-api"
  },
  {
    date: "2024 - 2024",
    title: "Portfolio website",
    description: "Website you are on right now :)",
    tags: ["Nextjs", "Vercel", "Zod", "Threejs", "Shadcn"],
    link: "https://github.com/imBLISP/portfolio"
  },
  {
    date: "2021 - 2021",
    title: "Candy shop",
    description: "Landing page for a candy shop website",
    tags: ["Javascript", "CSS"],
    link: "https://github.com/imBLISP/candyland"
  },
]
