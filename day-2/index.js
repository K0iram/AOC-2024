import { reports } from "./data.js";

const isSafe = (report) => {
  if (report.length < 2) return false;

  let increasing = true;
  let decreasing = true;

  for (let i = 0; i < report.length - 1; i++) {
    const diff = report[i + 1] - report[i];
    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }
    if (diff < 0) {
      increasing = false;
    }
    if (diff > 0) {
      decreasing = false;
    }
  }
  return increasing || decreasing;
};

const getTotalSafeReports = (reports) => {
  let safeReports = 0;
  reports.forEach((report) => {
    if (isSafe(report)) {
      safeReports++;
    } else {
      // Part 2
      for (const i in report) {
        const modifiedReport = [...report];
        modifiedReport.splice(i, 1);
        if (isSafe(modifiedReport)) {
          safeReports++;
          break;
        }
      }
    }
  });
  return safeReports;
};

console.log(getTotalSafeReports(reports));
