
import React from "react";
import { useStories } from "@/services/hackerNewsService";
import StoryCard from "./StoryCard";
import StoryCardSkeleton from "./StoryCardSkeleton";

interface StoriesListProps {
  searchQuery: string;
}

const StoriesList: React.FC<StoriesListProps> = ({ searchQuery }) => {
  const { data: stories, isLoading, isError } = useStories(searchQuery);

  // Generate an array of skeleton cards for loading state
  const skeletonCards = Array.from({ length: 10 }, (_, i) => (
    <StoryCardSkeleton key={`skeleton-${i}`} />
  ));

  if (isError) {
    return (
      <div className="flex items-center justify-center h-60">
        <div className="text-center">
          <h3 className="text-lg font-medium mb-2">Failed to load stories</h3>
          <p className="text-muted-foreground">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {isLoading
        ? skeletonCards
        : stories?.map((story) => (
            <StoryCard key={story.objectID} story={story} />
          ))}
      
      {stories?.length === 0 && !isLoading && (
        <div className="col-span-full text-center py-8">
          <h3 className="text-lg font-medium">No stories found</h3>
          <p className="text-muted-foreground mt-1">Try a different search term</p>
        </div>
      )}
    </div>
  );
};

export default StoriesList;
