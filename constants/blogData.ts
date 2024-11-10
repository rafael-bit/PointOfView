import { PostTypes } from "@/types/postTypes";

interface User {
  image: string;
  name: string;
}

export const blogData: PostTypes[] = [
  {
    id: "1",
    title: "Travel to the great beyond and never stop!",
    image_path: "/post1.jpg",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    featured: true,
    topPost: true,
    latestPost: true,
    tags: ["Adventure"],
    authorImage: "https://images.unsplash.com/photo-1579038773867-044c48829161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    authorName: "Rafael Áquila", 
    publishDate: "October 27, 2024"
  },
  {
    id: "2",
    title: "Wanderlust Chronicles: Tales of a Nomadic Soul",
    image_path: "/post2.jpg",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    featured: true,
    topPost: true,
    latestPost: false,
    tags: ["Culture"],
    authorImage:
      "https://images.unsplash.com/photo-1579038773867-044c48829161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    authorName: "Rafael Áquila",
    publishDate: "September 27, 2024",
  },
  {
    id: "3",
    title:
      "Wander Without Borders: Exploring Boundless Beauty",
    image_path: "/post3.jpg",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    featured: true,
    topPost: true,
    latestPost: false,
    tags: ["Discovery"],
    authorImage:
      "https://images.unsplash.com/photo-1579038773867-044c48829161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    authorName: "Rafael Áquila",
    publishDate: "September 27, 2024",
  },
  {
    id: "4",
    title: "Off the Map Adventures: Chasing the Unknown",
    image_path: "/post4.jpg",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    featured: true,
    topPost: true,
    latestPost: false,
    tags: ["Journeys"],
    authorImage:
      "https://images.unsplash.com/photo-1579038773867-044c48829161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    authorName: "Rafael Áquila",
    publishDate: "September 27, 2024",
  },
  {
    id: "5",
    title: "Roaming with Purpose: Life on the Road",
    image_path: "/post5.jpg",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    featured: false,
    latestPost: true,
    topPost: true,
    tags: ["Adventure"],
    authorImage:
      "https://images.unsplash.com/photo-1579038773867-044c48829161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    authorName: "Rafael Áquila",
    publishDate: "September 27, 2024",
  },
  {
    id: "6",
    title:
      "Footprints Across Continents: The Traveler's Tale",
    image_path: "/post6.jpg",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    featured: false,
    latestPost: true,
    topPost: true,
    tags: ["Wanderlust"],
    authorImage:
      "https://images.unsplash.com/photo-1579038773867-044c48829161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    authorName: "Rafael Áquila",
    publishDate: "September 27, 2024",
  },
  {
    id: "7",
    title: "Travel to the great beyond and never stop!",
    image_path: "/post7.jpg",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    featured: false,
    topPost: false,
    latestPost: true,
    tags: ["Adventure"],
    authorImage:
      "https://images.unsplash.com/photo-1579038773867-044c48829161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    authorName: "Rafael Áquila",
    publishDate: "September 27, 2024",
  },
  {
    id: "8",
    title: "Travel to the great beyond and never stop!",
    image_path: "/post8.jpg",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    featured: false,
    topPost: false,
    latestPost: true,
    tags: ["Odyssey"],
    authorImage:
      "https://images.unsplash.com/photo-1579038773867-044c48829161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    authorName: "Rafael Áquila",
    publishDate: "September 27, 2024",
  },
  {
    id: "8",
    title: "Travel to the great beyond and never stop!",
    image_path: "/post9.jpg",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    featured: false,
    topPost: false,
    latestPost: true,
    tags: ["Exploration"],
    authorImage:
      "https://images.unsplash.com/photo-1579038773867-044c48829161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    authorName: "Rafael Áquila",
    publishDate: "September 27, 2024",
  },
  {
    id: "8",
    title: "Travel to the great beyond and never stop!",
    image_path: "/post9.jpg",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    featured: false,
    topPost: false,
    latestPost: true,
    tags: ["Exploration"],
    authorImage:
      "https://images.unsplash.com/photo-1579038773867-044c48829161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    authorName: "Rafael Áquila",
    publishDate: "September 27, 2024",
  },
];