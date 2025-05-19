
import { useQuery } from "@tanstack/react-query";

export interface Story {
  objectID: string;
  title: string;
  url: string;
  points: number;
  author: string;
  created_at: string;
  num_comments: number;
}

// Function to fetch the top stories
export const fetchTopStories = async (query: string = ""): Promise<Story[]> => {
  try {
    const endpoint = query
      ? `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}&hitsPerPage=100`
      : "https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=100";
      
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.hits as Story[];
  } catch (error) {
    console.error("Error fetching stories:", error);
    throw error;
  }
};

// Hook to use with React Query
export const useStories = (query: string = "") => {
  return useQuery({
    queryKey: ["stories", query],
    queryFn: () => fetchTopStories(query),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
