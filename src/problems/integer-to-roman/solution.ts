// 12. Integer to Roman

// Seven different symbols represent Roman numerals with the following values:
// Symbol	Value
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000

// Roman numerals are formed by appending the conversions of decimal place values from
// highest to lowest. Converting a decimal place value into a Roman numeral has the
// following rules:

//     If the value does not start with 4 or 9, select the symbol of the maximal value that
// can be subtracted from the input, append that symbol to the result, subtract its value,
// and convert the remainder to a Roman numeral.

//     If the value starts with 4 or 9 use the subtractive form representing one symbol
// subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and
// 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV),
// 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).

//     Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to
// represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times.
// If you need to append a symbol 4 times use the subtractive form.
type Roman = "I" | "V" | "X" | "L" | "C" | "D" | "M";

const symbols: Record<Roman, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// Given an integer, convert it to a Roman numeral.
function intToRoman(num: number): string {
  return helper(num, "");
}

function helper(num: number, res: string): string {
  if (num === 0) return res;

  if (numStartsWith(num, 4) || numStartsWith(num, 9)) {
    // TODO
    return "";
  }

  const char = getMaxSubstraction(num);

  return helper(num - symbols[char], res + char);
}

function numStartsWith(num: number, target: number): boolean {
  const numStr = String(num);

  return numStr.startsWith(String(target));
}

function getMaxSubstraction(num: number): Roman {
  let maxSubsSymbol: Roman = "I";

  for (const entry of Object.entries(symbols)) {
    const [key, value] = entry as [Roman, number];
    if (value < num && symbols[key] > symbols[maxSubsSymbol]) {
      maxSubsSymbol = key;
    }
  }

  return maxSubsSymbol;
}
