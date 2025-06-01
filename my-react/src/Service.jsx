import { Link } from 'react-router-dom';

const Service = ({ title, description, imageUrl, linkTo }) => {
  return (
<div
  className="border-4 border-amber-600 relative bg-cover bg-center rounded-lg shadow-lg text-white px-6 sm:px-8 py-12 sm:py-16 max-w-4xl mx-auto mb-10 w-full hover:animate-pulse"
  style={{ backgroundImage: `url(${imageUrl})` }}
>
      <div className=" bg-opacity-50 rounded-lg p-4 sm:p-6">
        <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold text-center mb-4 drop-shadow-md">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-center drop-shadow-sm">
          {description}
        </p>

        <p className="text-right mt-6 text-lg font-semibold underline underline-offset-4 cursor-pointer hover:text-yellow-300 transition">
          <Link to={linkTo} className="text-white visited:text-purple-600 hover:text-blue-800">
            Explore Now →
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Service;
