import { useState, useEffect } from "react";

// Define a custom hook called 'useMediaQuery'.
const useMediaQuery = (query: string) => {
  // Initialize state to track whether the media query matches.
  const [matches, setMatches] = useState(false);

  // Use the 'useEffect' hook to run code when the component is mounted or 'query' changes.
  useEffect(() => {
    // Create a 'media' object that represents the specified media query.
    const media = window.matchMedia(query);

    // Check if the media query matches and update the 'matches' state accordingly.
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Define a listener function to handle changes in the media query status.
    const listener = () => setMatches(media.matches);

    // Add an event listener to the window's resize event to monitor changes in the viewport size.
    window.addEventListener("resize", listener);

    // Remove the event listener when the component is unmounted to avoid memory leaks.
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  // Return the current 'matches' state, which indicates whether the media query matches.
  return matches;
};

// Export the 'useMediaQuery' custom hook for use in other components.
export default useMediaQuery;
