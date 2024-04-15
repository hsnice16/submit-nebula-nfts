import "./Steps.css";

const STEPS = [
  {
    title: "Connect Wallet",
    description: "To begin the process, connect your wallet to our platform.",
  },
  {
    title: "Submit Nebulas",
    description:
      "Ready to upgrade? Submit your existing Nebulas by clicking on “Submit” button",
  },
  {
    title: "Distribution",
    description:
      "At a certain date Galileo Protocol will distribute the Nebula Odyssey NFTs to your same wallet on Ethereum network",
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
