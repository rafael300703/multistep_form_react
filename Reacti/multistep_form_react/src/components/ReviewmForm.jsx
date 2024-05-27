import{
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill
} from 'react-icons/bs'

import "./ReviewmForm.css"

const ReviewmForm = ({data, updateFieldHandler}) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" value="unsatisfield" name='review' required checked={data.review === "unsatisfield"} onChange={(e) => updateFieldHandler("review", e.target.value)} />
           <BsFillEmojiFrownFill/>
            <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="neutral" name='review' required checked={data.review === "neutral"} onChange={(e) => updateFieldHandler("review", e.target.value)} />
           <BsFillEmojiNeutralFill/>
            <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="satisfiel" name='review' required checked={data.review === "satisfiel"} onChange={(e) => updateFieldHandler("review", e.target.value)} />
           <BsFillEmojiSmileFill/>
            <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="very_satisfield" name='review' required checked={data.review === "very_satisfield"} onChange={(e) => updateFieldHandler("review", e.target.value)} />
           <BsFillEmojiHeartEyesFill/>
            <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário</label>
        <textarea name="comment" id="comment" placeholder='Conte como foi a sua experiência com o produto...' value={data.comment || ""} onChange={(e) => updateFieldHandler("comment", e.target.value)} ></textarea>
      </div>
    </div>
  );
};


export default ReviewmForm;
