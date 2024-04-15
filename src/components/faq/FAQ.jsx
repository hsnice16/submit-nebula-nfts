import "./FAQ.css";

const QUESTIONS = [
  {
    question: "Which chain will I receive new nebulas on?",
    answer:
      "You'll receive new nebulas via airdrop on the Ethereum chain, enhancing support for staking and voting platforms.",
  },
  {
    question: "Why should I submit my older nebulas?",
    answer:
      "Submitting your older nebulas allows you to exchange them for new ones. We'll securely lock your older nebulas, taking them out of circulation, and then airdrop the new nebula to you.",
  },
  {
    question: "When will I receive my new nebulas?",
    answer:
      "Expect to receive your new nebulas within 15 days from April 20. Stay tuned to Galileo's social handles for the official announcement date.",
  },
  {
    question:
      "Why do I have to approve the transfer of all nebulas when submitting them?",
    answer:
      "Before submitting your nebulas, you need to approve Galileo to transfer them from your wallet to our vault. To simplify the process for you, we request approval to move all your nebulas at once, rather than asking for approval for each individual nebula.",
  },
  {
    question: "What will happen to non-submitted nebulas after the end date?",
    answer:
      "Galileo will set a clear end date for the exchange of nebulas, giving the community ample time to participate. After the end date, all the older nebulas metadata will be invalidated. If nebulas are not exchanged by the deadline, the new Nebulas against the non-submitted ones will be minted to Galileo Protocol treasury, facilitating future collaborations with brands and projects.",
  },
  {
    question: "What will happen to already burnt nebulas?",
    answer:
      "Already burnt nebulas will not be minted again. They are considered permanently gone from the new collection.",
  },
  {
    question: "How will the new nebulas affect rarity?",
    answer:
      "The new nebulas will maintain the same rarity as the older ones, while also offering extended utility, enhanced aesthetics, and captivating narratives.",
  },
  {
    question: "I have a question",
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
