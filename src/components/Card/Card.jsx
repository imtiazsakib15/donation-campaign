import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

const Card = ({ donation, myDonation = false }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_button_bg,
    price,
  } = donation;

  const navigate = useNavigate();

  return (
    <div
      onClick={() => !myDonation && navigate(`/donation-details/${id}`)}
      style={{ backgroundColor: `${card_bg}` }}
      className={`rounded-lg h-full ${myDonation ? "flex" : "cursor-pointer"}`}
    >
      <img
        className={`${
          myDonation
            ? "w-1/3 max-h-60 rounded-l-lg"
            : "w-full h-48 lg:h-40 rounded-t-lg"
        }`}
        src={picture}
        alt={title}
      />
      <div className={`p-4 h-min ${myDonation ? "w-2/3" : ""}`}>
        <span
          style={{
            backgroundColor: `${category_bg}`,
            color: `${text_button_bg}`,
          }}
          className="text-sm font-medium px-2 py-1 rounded"
        >
          {category}
        </span>
        <h3
          style={{
            color: `${myDonation ? "" : text_button_bg}`,
          }}
          className="text-xl font-semibold mt-3"
        >
          {title}
        </h3>
        {myDonation && (
          <div>
            <p
              className="font-semibold mt-1"
              style={{
                color: `${text_button_bg}`,
              }}
            >
              ${price}
            </p>
            <button
              onClick={() => navigate(`/donation-details/${id}`)}
              className="text-white font-semibold px-4 py-2 mt-5 rounded"
              style={{ backgroundColor: `${text_button_bg}` }}
            >
              View Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  donation: PropTypes.object,
  myDonation: PropTypes.bool,
};

export default Card;
