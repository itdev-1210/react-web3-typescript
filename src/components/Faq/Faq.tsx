import FaqDetail from './Detail';

const Faq = () => {
  return (
    <section className="section faq" id="faq">
      <div className="container container--small">
        <div className="section-title">faq</div>
        <div className="row">
          <FaqDetail question="What is COMP, and why is it being distributed?"
            answer="In posuere, odio sit amet dignissim interdum, sem lacus finibus ante, quis congue purus ligula id elit. Donec maximus luctus purus, sed auctor leo venenatis id. Mauris sed augue arcu."
          ></FaqDetail>
          <FaqDetail question="As a user, what do I need to do to receive COMP?"
            answer="In posuere, odio sit amet dignissim interdum, sem lacus finibus ante, quis congue purus ligula id elit. Donec maximus luctus purus, sed auctor leo venenatis id. Mauris sed augue arcu."
          ></FaqDetail>
          <FaqDetail question="How does the distribution work?"
            answer="In posuere, odio sit amet dignissim interdum, sem lacus finibus ante, quis congue purus ligula id elit. Donec maximus luctus purus, sed auctor leo venenatis id. Mauris sed augue arcu."
          ></FaqDetail>
          <FaqDetail question="I'm building an application; how should I design for the distribution?"
            answer="In posuere, odio sit amet dignissim interdum, sem lacus finibus ante, quis congue purus ligula id elit. Donec maximus luctus purus, sed auctor leo venenatis id. Mauris sed augue arcu."
          ></FaqDetail>
        </div>
      </div>
    </section>
  );
};

export default Faq;
