import axios from "axios";

const API_URL = "http://localhost:5001/api/projects";  // Backend URL

// Fetch all projects
export const getProjects = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

// Create a new project
export const createProject = async (projectData) => {
  try {
    const response = await axios.post(API_URL, projectData);
    return response.data;
  } catch (error) {
    console.error("Error creating project:", error);
    return null;
  }
};