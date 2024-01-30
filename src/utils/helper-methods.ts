const getRandomTimestamp = (timeInterval: number) => {
  const currentDate = Date.now();
  const timeAgo = currentDate - timeInterval;
  return Math.floor(Math.random() * (currentDate - timeAgo + 1)) + timeAgo;
};

export const getTimeAgo = (timeInterval = 365 * 24 * 60 * 60 * 1000) => {
  const timestamp = getRandomTimestamp(timeInterval);
  const now = Date.now();
  const diffMillis = now - timestamp;

  // Convert milliseconds to seconds
  const diffSeconds = Math.floor(diffMillis / 1000);
  let timeAgo = "";

  if (diffSeconds < 60) {
    // Less than a minute ago
    timeAgo = `${diffSeconds}s ago`;
  } else if (diffSeconds < 3600) {
    // Less than an hour ago
    const diffMinutes = Math.floor(diffSeconds / 60);
    timeAgo = `${diffMinutes}m ago`;
  } else if (diffSeconds < 86400) {
    // Less than a day ago
    const diffHours = Math.floor(diffSeconds / 3600);
    timeAgo = `${diffHours}h ago`;
  } else if (diffSeconds < 2592000) {
    // Less than a month ago
    const diffDays = Math.floor(diffSeconds / 86400);
    timeAgo = `${diffDays}d ago`;
  } else if (diffSeconds < 7776000) {
    // Less than 3 months ago
    const diffWeeks = Math.floor(diffSeconds / 604800);
    timeAgo = `${diffWeeks}w ago`;
  } else {
    // Over 3 months ago
    const diffMonths = Math.floor(diffSeconds / 2592000);
    timeAgo = `${diffMonths}mo ago`;
  }

  return { timeAgo, timestamp };
};

export const getRandom = (rng = 10, mod = 0) => Math.floor(Math.random() * rng) + mod;