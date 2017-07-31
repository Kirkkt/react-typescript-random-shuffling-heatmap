# What is this?

Show a visual heatmap of different array shuffling/randomizing methods

### Ordered
The array is sorted (no randomization at all)

### Plain
The array is shuffled with the following algorithm:

```
for (let i = 0; i < $array.length; i++) {
  shuffledArray.push(...$array.splice(Math.random() * $array.length, 1));
}
```

### Tricky
The array is shuffled with the following algorithm:

```
$array.sort(() => Math.random() - 0.5);
```

### Pure
The array is not shuffled, but rather randomized (meaning there is no guarantee that two distinct
elements must have the same number of appearances)

# How to run?
- `yarn`
    - you do this once
- `yarn start`
