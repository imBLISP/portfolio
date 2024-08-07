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
    name: "Blogs",
    id: "#blogs",
  },
  {
    name: "Projects",
    id: "#projects",
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

export const ExperienceData = [
  {
    date: "2023-2024",
    title: "Software engineer - Kanverse.ai",
    description: 
      "Developed a model deployment framework for inter-VM deployment of TensorFlow and PyTorch models as part of a scalable machine learning pipeline. Integrated GenAI LLMs like LLaMA and enterprise OCR into the platform and model training tool",
    tags: [
      "Nodejs",
      "Tensorflow",
      "Vuejs",
      "Pytorch",
      "Javascript",
      "Python",
      "Docker",
      "FastAPI",
      "Redis",
      "MongoDB",
    ],
  },
  {
    date: "2022-2022",
    title: "Software engineer intern - Cognologix (Uber)",
    description:
      "Built ETL pipeline validation for Uber/Uber Eats with a throughput of ≈100,000 events per second, meeting sub-second SLAs. Built an ETL framework using Apache Flask, Apache pinot and Kafka.",
    tags: ["Golang", "Apache Kafka", "Apache Flink", "Apache Pinot"],
  },
  {
    date: "2023-Present",
    title: "Freelance web developer",
    description: "Worked with clients for full stack web development projects.",
    tags: ["Nextjs", "Vercel", "Postgresql"],
  },
];

export const ProjectsData = [
{
    data: "2024-Present",
    title: "Visual note taking app",
    description: "Visual note taking app built with Nextjs and Postgresql, opensourced repo deployed on vercel",
    tags: ["Nextjs", "TurboRepo", "PostgreSQL", "Vercel", "Zod", "Shadcnui", "Supabase"],
    link: "https://github.com/imBLISP/visual-notes"
},
  {
    date: "2024-2024",
    title: "Portfolio website",
    description: "Portfolio website built with Nextjs and deployed on Vercel",
    tags: ["Nextjs", "Vercel", "Zod", "Threejs", "Shadcn"],
    link: "https://dub.sh/vineet"
  },
  {
    date: "2022-2023",
    title: "Ecommerce website for digital art",
    description:
      "Full-stack eCommerce website deployed on AWS where users can buy/sell digital art",
    tags: ["Python", "Flask", "SQLite", "Jquery", "Stripe", "AWS"],
    link: "http://flask-env.eba-ippramjd.ap-south-1.elasticbeanstalk.com/"
  },
  {
    date: "2022-2023",
    title: "Recommendation system",
    description:
      "Recommendation system for movies, Collaborative filtering using matrix factorization, Comparison of objective functions and optimizers, Retrieval of user recommendations and similar movies",
    tags: ["Tensorflow", "Pandas", "Numpy"],
    link: "https://github.com/imBLISP/RecSys"
  },
  {
    date: "2021-2021",
    title: "Candy shop frontend design",
    description: "Fronted design for a candy shop website",
    tags: ["Javascript", "CSS"],
    link: "https://github.com/imBLISP/candyland"
  },
];
