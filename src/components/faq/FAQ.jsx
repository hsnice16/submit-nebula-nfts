import "./FAQ.css";

const QUESTIONS = [
  {
    question: "Which chain will I receive new Nebulas on?",
    answer:
      "You'll receive new Nebulas via airdrop on the Ethereum chain, enhancing support for staking and voting platforms.",
  },
  {
    question: "Why should I submit my older Nebulas?",
    answer:
      "Submitting your older Nebulas allows you to exchange them for new ones. We'll securely lock your older Nebulas, taking them out of circulation, and then airdrop the new Nebula to you.",
  },
  {
    question: "When will I receive my new Nebulas?",
    answer:
      "Galileo plans to reveal the upgraded Nebulas minting date by the last week of April. Keep an eye on Galileo's social media channels for the official announcement.",
  },
  {
    question:
      "Why do I have to approve the transfer of all Nebulas when submitting them?",
    answer:
      "Before submitting your Nebulas, you need to approve Galileo to transfer them from your wallet to our vault. To simplify the process for you, we request approval to move all your Nebulas at once, rather than asking for approval for each individual Nebula.",
  },
  {
    question: "What will happen to non-submitted Nebulas after the end date?",
    answer:
      "Galileo will set a clear end date for the exchange of Nebulas, giving the community ample time to participate. After the end date, all the older Nebulas metadata will be invalidated. If Nebulas are not exchanged by the deadline, the new Nebulas against the non-submitted ones will be minted to Galileo Protocol treasury, facilitating future collaborations with brands and projects.",
  },
  {
    question: "What will happen to already burnt Nebulas?",
    answer:
      "Already burnt Nebulas will not be minted again. They are considered permanently gone from the new collection.",
  },
  {
    question: "How will the new Nebulas affect rarity?",
    answer:
      "The new Nebulas will maintain the same rarity as the older ones, while also offering extended utility, enhanced aesthetics, and captivating narratives.",
  },
  {
    question: "My question is not listed above",
    answer: "Please reach out to us at hello@galieoprotocol.io",
  },
];

export function FAQ() {
  return (
    <div className="faq-container">
      <h2 className="main-sub__container-head">FAQ</h2>

      <ul className="faq-container__list">
        {QUESTIONS.map((question) => (
          <li key={question.question}>
            <h4 className="">{question.question}</h4>
            <p className="">{question.answer} </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
