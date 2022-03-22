function firstRecurringCharacter(input) {
  const map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
}

input = [2, 5, 1, 2, 3, 5, 1, 2, 4];
console.log(firstRecurringCharacter(input));

input = [2, 1, 1, 2, 3, 5, 1, 2, 4];
console.log(firstRecurringCharacter(input));

input = [2, 3, 4, 5];
console.log(firstRecurringCharacter(input));

input = [2, 5, 5, 2, 3, 5, 1, 2, 4];
console.log(firstRecurringCharacter(input));
