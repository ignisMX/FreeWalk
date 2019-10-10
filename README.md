# Free walk

You are on a horizontal line of infinite length. From your initial position, you can move either left or right. Your movements are represented by a string S of length L. This string can consist of two different types of characters, each denoting a move:

- A: You move 1 unit left.
- C: You move 1 unit right.

Write a program to find the maximum distance in units from your initial position in any direction.

# Examples

For example, following String should return 1, because you moved 1 unit to left

```bash
A
```
following String should return 1, because you moved 1 unit and return to your initial position.

```bash
AC
```

following String should return 3, because you moved 3 units to left, after that you returned 1 unit to right and after that you moved 1 unit to left, after that you moved 1 unit to right and after 1 unit to left again.

```bash
AAACACA
```

## Usage

You should install nodejs or copy code in console of any browser

```bash
cd /FreeWalk
node index.js
```

## Solution overview
For every character in string, you must define which adds and which direction subtract. Every time returns to initial position, direction who adds and who subtract can change.

## License
[MIT](https://choosealicense.com/licenses/mit/)