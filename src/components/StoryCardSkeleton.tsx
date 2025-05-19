
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const StoryCardSkeleton: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start gap-2">
          <Skeleton className="h-6 w-full" />
        </div>
        <Skeleton className="h-3 w-24 mt-1" />
      </CardHeader>
      <CardContent className="py-2">
        <Skeleton className="h-4 w-16" />
      </CardContent>
      <CardFooter className="pt-2">
        <Skeleton className="h-3 w-full" />
      </CardFooter>
    </Card>
  );
};

export default StoryCardSkeleton;
