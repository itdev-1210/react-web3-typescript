import { useState } from "react";

interface FaqProps {
  question: string;
  answer: string;
}

const FaqDetail = (props: FaqProps) => {
  const [isShow, setShow] = useState(false);

  const handleClick = () => {
    setShow(!isShow)
  }

  return (
    <div className="col-lg-6 faq-item">
      <div className="faq-item__header" onClick={handleClick}>
        <h5 className="faq-item__header">{props.question}</h5>
        {isShow ? <div onClick={()=>setShow(false)} className="faq-detail hide"></div> : <div onClick={()=>setShow(true)} className="faq-detail show"></div>}
      </div>
      {isShow && <div className="faq-item__content">{props.answer}</div>}
    </div>
  );
};

export default FaqDetail;
