import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ donation }) => {
  const { id, picture, title, category, category_bg, card_bg, text_button_bg } =
    donation;

  return (
    <Link
      to={`/donation-details/${id}`}
      style={{ backgroundColor: `${card_bg}` }}
      className="rounded-lg"
    >
      <img className="w-full h-48 lg:h-40 rounded-t-lg" src={picture} alt="" />
      <div className="p-4">
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
          style={{ color: `${text_button_bg}` }}
          className="text-xl font-semibold mt-3"
        >
          {title}
        </h3>
      </div>
    </Link>
  );
};

Card.propTypes = {
  donation: PropTypes.object,
};

export default Card;
