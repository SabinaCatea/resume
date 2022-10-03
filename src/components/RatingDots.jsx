import './css/rating-dots.scss'

export const RatingDots = function ({ rate }) {
  //make an array out of the value
  const dots = Array.from(Array(10).keys());
  console.log(dots)
  return (
    <div className="rating-dots">
      {dots.map((val,index) => (
        <span className ={index < +rate ? 'rated' : ''}
        key={val}/>
      ))}
    </div>
  );
};
