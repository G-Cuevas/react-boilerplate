import PropTypes from "prop-types";

export const ProductImg = ({ title, thumbnail, permalink }) => {
  //when click on image, open a new tab with the product
  return (
    <div className="card" onClick={() => window.open(permalink, "_blank")}>
      <img src={thumbnail} alt={title} />
      <p>{title}</p>
    </div>
  );
};

ProductImg.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};