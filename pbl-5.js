function calculateSleepTime(times) {
  if (!Array.isArray(times) || typeof times !== 'number') {
    return "Invalid";
  }

  let totalSeconds = 0;
  for (const second of times) {
    totalSeconds += second;
  }

  const hour = Math.floor(totalSeconds / 3600);
  const minute = Math.floor((totalSeconds % 3600) / 60);
  const second = totalSeconds % 60;

  return { hour, minute, second };
}

console.log(calculateSleepTime([1000, 499, 519, 300]));
