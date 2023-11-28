import "./quoteOne.scss";

export default function QuoteOne() {
  return (
    <section id="quoteOne-section">
      <div className="quote-container">
        <div className="quote">
          “There are only two hard things in Computer Science:&nbsp;
          <span>cache invalidation and naming things.”</span>
        </div>
        <div className="credit">- Phil Karlton</div>
      </div>
    </section>
  );
}
