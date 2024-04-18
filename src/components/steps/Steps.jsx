import "./Steps.css";

const STEPS = [
  {
    title: "Connect Wallet",
    description: "To begin the process, connect your wallet to our platform.",
  },
  {
    title: "Submit Nebulas",
    description:
      "Click on “Submit” button, to approve the Nebula transfer and submit your nebulas.",
  },
  {
    title: "Distribution",
    description:
      "Galileo Protocol will airdrop the upgraded Nebula Odyssey NFTs to the same wallet on Ethereum network. Date to be announced by April last week.",
  },
];

export function Steps() {
  return (
    <div className="steps-container">
      {STEPS.map((step, index) => (
        <div key={index} className="step">
          <h3 className="main-sub__container-head step-count">
            Step 0{index + 1}
          </h3>

          <p className="step-title">
            <strong>{step.title}</strong>
          </p>
          <p className="step-description">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
