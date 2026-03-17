function calculateRTP(totalBet, totalReturned) {
  if (typeof totalBet !== "number" || typeof totalReturned !== "number") {
    throw new Error("Both totalBet and totalReturned must be numbers.");
  }

  if (totalBet <= 0) {
    throw new Error("totalBet must be greater than 0.");
  }

  return Number(((totalReturned / totalBet) * 100).toFixed(2));
}

function calculateHouseEdge(rtp) {
  if (typeof rtp !== "number" || rtp < 0 || rtp > 100) {
    throw new Error("RTP must be a number between 0 and 100.");
  }

  return Number((100 - rtp).toFixed(2));
}

function runExamples() {
  const examples = [
    { totalBet: 1000, totalReturned: 962 },
    { totalBet: 2500, totalReturned: 2410 },
    { totalBet: 5000, totalReturned: 4865 }
  ];

  examples.forEach((example, index) => {
    const rtp = calculateRTP(example.totalBet, example.totalReturned);
    const houseEdge = calculateHouseEdge(rtp);

    console.log(`Example ${index + 1}`);
    console.log(`Total Bet: ${example.totalBet}`);
    console.log(`Total Returned: ${example.totalReturned}`);
    console.log(`RTP: ${rtp}%`);
    console.log(`House Edge: ${houseEdge}%`);
    console.log("---");
  });
}

if (require.main === module) {
  runExamples();
}

module.exports = {
  calculateRTP,
  calculateHouseEdge
};
