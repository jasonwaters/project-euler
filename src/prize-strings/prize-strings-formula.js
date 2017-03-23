
// Credit for the math formula goes to http://jsomers.net/blog/project-euler-problem-191-or-how-i-learned-to-stop-counting-and-love-induction
// I cleaned it up a bit so it is more readable.

function makeTally(numDays, numPrizeWinning, numEligibleEndingTwoAbsences, numEligibleNoLates, numEligibleEndingAbsence, numEligibleEndingTwoAbsencesWithOneLate, numEligibleEndingAbsenseWithOneLate, numEligibleWithOneLateNotEndingInAbsence) {
  return {
    numDays,
    numPrizeWinning,
    numEligibleEndingTwoAbsences,
    numEligibleNoLates,
    numEligibleEndingAbsence,
    numEligibleEndingTwoAbsencesWithOneLate,
    numEligibleEndingAbsenseWithOneLate,
    numEligibleWithOneLateNotEndingInAbsence
  };
}

/* O(n) */
function getNumPrizeWinning(numDays) {
  let runningTally = makeTally(1, 3, 0, 2, 1, 0, 0, 1);

  while (runningTally.numDays < numDays) {

    runningTally = makeTally(
      runningTally.numDays + 1,
      2 * runningTally.numPrizeWinning + runningTally.numEligibleNoLates - runningTally.numEligibleEndingTwoAbsences,
      runningTally.numEligibleEndingAbsence,
      2 * runningTally.numEligibleNoLates - runningTally.numEligibleEndingTwoAbsences + runningTally.numEligibleEndingTwoAbsencesWithOneLate,
      runningTally.numPrizeWinning - (runningTally.numEligibleEndingTwoAbsences + runningTally.numEligibleEndingAbsence),
      runningTally.numEligibleEndingAbsenseWithOneLate,
      runningTally.numEligibleWithOneLateNotEndingInAbsence,
      runningTally.numPrizeWinning
    );

  }
  return runningTally.numPrizeWinning;
}

module.exports = getNumPrizeWinning;
