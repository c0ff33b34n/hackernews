
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Story } from "@/services/hackerNewsService";
import { ExternalLink } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const timeAgo = formatDistanceToNow(new Date(story.created_at), { addSuffix: true });
  
  // Format hostname from URL
  const getHostname = (url: string) => {
    try {
      return new URL(url).hostname.replace("www.", "");
    } catch {
      return "";
    }
  };

  return (
    <Card className="story-card hover:border-primary transition-all duration-200">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-lg font-semibold line-clamp-2">
            {story.title}
          </h3>
          {story.url && (
            <a 
              href={story.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 flex items-center gap-1 shrink-0"
              title="Read more"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
        {story.url && (
          <p className="text-xs text-muted-foreground mt-1">
            {getHostname(story.url)}
          </p>
        )}
      </CardHeader>
      <CardContent className="py-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium">{story.points || 0}</span>
          <span className="text-muted-foreground">points</span>
        </div>
      </CardContent>
      <CardFooter className="pt-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>by {story.author}</span>
          <span>•</span>
          <span>{timeAgo}</span>
          <span>•</span>
          <span>{story.num_comments || 0} comments</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default StoryCard;
