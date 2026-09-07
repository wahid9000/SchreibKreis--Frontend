"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const AboutUsError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, []);

  return (
    <div>
      <h1>Oops! Something went wrong on the About Us Page.</h1>
      <Button onClick={() => reset()}>Try Again</Button>
    </div>
  );
};

export default AboutUsError;
