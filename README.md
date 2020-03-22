# Motivation-Based Pomodoro Timer

A pomodoro timer with durations that change depending on your motivation. The more motivated you are, the longer the timer duration and vice versa.

Check out the demo [here](https://pomo-feeling.now.sh/).

![intro](https://i.postimg.cc/d15Z93Mz/pomo-feeling.gif)

---

## Installation

### Clone

- Clone this repo to your local machine using `https://github.com/wanzulfikri/random-movie.git`

### Setup

Install dependencies with `npm`:

```shell 
npm install
```

### Start a development server or serve a production build

**Development server**

```shell
npm start
```

By default, you should be able to view the site at `http://localhost:3000`

**Build a production version and deploy**

```shell
npm run build
```

And deploy accordingly.

With `node`, you can serve the build with:

```shell
npm install -g serve
serve -s build
```

---

## Features

1. Start and stop timer
2. Set motivation level, and change level anytime.
3. Skip work or break.
4. Pause timer.

---

## Modification

You can modify the durations for work and rest of all motivation levels. Just change the `MOTIVATIONOPTIONSMINUTESLIST` constant in `Motivation.js`.

```react
/* ./src/Components/Motivation/Motivation.js */
const MOTIVATIONOPTIONSMINUTESLIST = [
  [5, 1],
  [10, 2],
  [15, 3],
  [20, 4],
  [25, 5],
  [35, 7],
  [45, 9],
  [50, 10],
  [60, 12],
  [75, 15],
  [90, 30]
];

```

Make sure that the array has 11 elements and each element has 2 integers.

---

## Contributing

### Step 1

- **Option 1**
    -  Fork this repo.

- **Option 2**
    - Clone this repo to your local machine using `https://github.com/wanzulfikri/random-movie.git`

### Step 2

- Do whatever you want with the code.

### Step 3

- Create a new pull request using [https://github.com/wanzulfikri/pomo-feeling/compare/](https://github.com/wanzulfikri/pomo-feeling/compare).


---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**

