import { charsetArr } from "./charset";

export enum T_Charset {
  Low,
  Big,
  Number,
  Special,
  Emoji,
}

export const updateSets = (
  set: T_Charset,
  selectedSets: T_Charset[],
): T_Charset[] =>
  selectedSets.includes(set)
    ? selectedSets.filter((selected) => selected !== set)
    : [...selectedSets, set];

const maxRand = (max: number) => Math.round(Math.random() * max);

const getChar = (charset: string[][]) => {
  const ar = maxRand(charset.length - 1);
  return charset[ar][maxRand(charset[ar].length - 1)];
};

const shuffle = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const getPassword = (power: number, genSet: T_Charset[]): string => {
  const charset = genSet.map((set) => charsetArr[set]);
  const passAr = [];
  if (!(genSet.length === 1 && genSet[0] === T_Charset.Emoji)) {
    for (let i = 0; i < charset.length; i++) {
      const symbol = charset[i][maxRand(charset[i].length - 1)];
      power = power - symbol.length;
      passAr.push(symbol);
    }
    while (power > 0) {
      const symbol = getChar(charset);
      if (symbol.length <= power) {
        power = power - symbol.length;
        passAr.push(symbol);
      }
    }
  } else {
    while (power > 0) {
      const symbol = charset[0][maxRand(charset[0].length - 1)];
      if (symbol.length <= power) {
        power = power - symbol.length;
        passAr.push(symbol);
      }
    }
  }
  shuffle(passAr);
  return passAr.join("");
};
