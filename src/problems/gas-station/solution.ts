// There are n gas stations along a circular route, where the amount of gas at the ith
// station is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from
// the ith station to its next (i + 1)th station. You begin the journey with an empty
// tank at one of the gas stations.

// Given two integer arrays gas and cost, return the starting gas station's index if you
// can travel around the circuit once in the clockwise direction, otherwise return -1.
// If there exists a solution, it is guaranteed to be unique.
export function canCompleteCircuit(gas: number[], cost: number[]): number {
  // we can start by computing sum gas[i] - cost[i]
  // if at some point when adding element 'j' the difference becomes negative.
  // It means for all intermediate sums from 's' > 'i' till 'j' the same will be true
  // for instance:
  // gas =  [1,2,3,2,1,1, ...] -> starting from index 0 is not feasible
  // cost = [1,2,3,2,5,1, ...]
  const n = gas.length;

  const totalGas = gas.reduce((acc, val) => acc + val, 0);
  const totalCost = cost.reduce((acc, val) => acc + val, 0);

  if (totalCost > totalGas) return -1;

  let s = 0; // start index
  let i = 0; // iterator
  let tank = 0;

  while (i < n) {
    const cur = (s + i) % n;
    tank += gas[cur] - cost[cur];

    if (tank < 0) {
      tank = 0;
      s = cur + 1; // if tank < 0, it means all intermediate starting points will follow the same luck
      i = 0;
      continue;
    }

    i++;
  }

  return s;
}

// There are n gas stations along a circular route, where the amount of gas at the ith
// station is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from
// the ith station to its next (i + 1)th station. You begin the journey with an empty
// tank at one of the gas stations.

// Given two integer arrays gas and cost, return the starting gas station's index if you
// can travel around the circuit once in the clockwise direction, otherwise return -1.
// If there exists a solution, it is guaranteed to be unique.
// export function canCompleteCircuit(gas: number[], cost: number[]): number {
//   const n = gas.length;

//   const totalGas = gas.reduce((acc, val) => acc + val, 0);
//   const totalCost = cost.reduce((acc, val) => acc + val, 0);

//   if (totalGas < totalCost) return -1;
//   // OBS: we go from n-1 -> 0 index
//   // if I'm at gas station "i", and want to move to "i+1", then we need gas[i] >= cost[i]
//   // This feels like a problem we can solve via brute force if we get the constraints right
//   for (let s = 0; s < n; s++) { // i is the starting index of the circuit
//     let isFeasible = true
//     let tank = 0; // liters in the tank
//     for (let i = 0; i < n; i++) { // i is the starting index of the circuit
//       const pos = (s + i) % n // n = 5, s = 4, i = 1
//       tank += gas[pos]
//       if (tank < cost[pos]) {
//         isFeasible = false;
//         break;
//       } else {
//         tank -= cost[pos]
//       }
//     }
//     if (isFeasible) return s;
//   }

//   return -1
// };
