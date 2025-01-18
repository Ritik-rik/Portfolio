import React, { useEffect } from "react";
import "github-calendar/dist/github-calendar-responsive.css";
import GitHubCalendar from "github-calendar";

const GitHubContributions = () => {
  useEffect(() => {
    GitHubCalendar(".calendar", "ritikrikm", {
      responsive: true,
      global_stats: false, // Hides the "Longest Streak" and other stats
    });
  }, []);

  return <div className="calendar"></div>;
};

export default GitHubContributions;
