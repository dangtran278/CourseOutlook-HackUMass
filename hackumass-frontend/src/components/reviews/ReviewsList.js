const ReviewsList = (props) => {
  return (
    reviews.map(r => {

      return(<ReviewCard name={r.name} text={r.text} rating={r.rating}/>)
    })
  );
};

const ReviewCard = (props) => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="card">
        <div className="card-body">
          <div className="card-title">Name: {props.name}</div>
          <div className="card-text">
            Rating: {props.rating}
            <div className="progress w-50">
              <div
                className="progress-bar progress-bar-striped"
                style={{width: props.rating / 5 * 100 + "%"}}
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {props.rating}
              </div>
            </div>
          </div>
          <div className="card-text">Review: {props.text}</div>
        </div>
      </div>
    </div>
  );
}

const reviews = [
  {
    name: 'Nhan',
    text: 'lop nhu cac',
    rating: 1
  },
  {
    name: 'Steve',
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In tempore sed consequuntur, voluptatem deserunt dolores sequi quibusdam veniam? Nisi impedit odio omnis iure commodi, debitis magnam eligendi ullam sapiente nulla!",
    rating: 2
  },
  {
    name: 'Thinh',
    text: 'lop nhu cac',
    rating: 3
  },
]


const temp = 4

export default ReviewsList;
