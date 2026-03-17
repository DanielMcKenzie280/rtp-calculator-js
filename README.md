# rtp-calculator-js

A lightweight JavaScript calculator for estimating RTP (Return to Player) values based on slot-style payout data.

This project demonstrates how RTP and house edge can be calculated using simple mathematical formulas based on total bets and total payouts.

It can be used for educational purposes, backend simulations, testing payout datasets, or learning basic gaming math concepts.

---

## What is RTP?

RTP (Return to Player) represents the percentage of wagered money that a game returns to players over time.

Example:

If players wager a total of **$1000** and receive **$960** in winnings:

RTP = 96%

The remaining **4%** represents the **house edge**.

---

## Features

- RTP calculation
- House edge calculation
- Simple JavaScript implementation
- Example simulations
- No external dependencies
- Works with Node.js

---

## Installation

Clone the repository:

git clone https://github.com/DanielMcKenzie280/rtp-calculator-js.git

Move into the project directory:

cd rtp-calculator-js

No additional packages are required.

---

## Usage

Run the script using Node.js:

node rtp.js

The script will automatically run example payout calculations.

---

## Example Code

```javascript
function calculateRTP(totalBet, totalReturned) {
  return (totalReturned / totalBet) * 100;
}

const totalBet = 1000;
const totalReturned = 962;

const rtp = calculateRTP(totalBet, totalReturned);

console.log("RTP:", rtp.toFixed(2) + "%");
