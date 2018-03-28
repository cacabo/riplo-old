// Import frameworks
import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

/**
 * Component which leverages react hemlet to set meta tags of the page
 * TODO more tags
 */
const Tags = ({title, description, image, keywords}) => {
  // Crosscheck passed in props with default props
  const tags = {
    title: title ? `Riplo | ${title}` : "Riplo",
    description: description ? description : "A driven group of student developers centered at the University of Pennsylvania.",
    keywords: keywords ? keywords : "Riplo, web, development, students, coding, websites, mobile, web app",
    // image: image ? image : "https://s3.amazonaws.com/nalda/nalda-overview.png",
  };

  return (
    <Helmet>
      <title>{tags.title}</title>
      <meta name="description" content={tags.description} />
      <meta name="keywords" content={tags.keywords} />
      <meta property="og:image" content={tags.image} />
      <meta property="og:title" content={tags.title} />
      <meta property="og:description" content={tags.description} />
      <meta property="og:image" content={tags.image} />
    </Helmet>
  );
};

// Prop validations
Tags.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.string,
};

// Export
export default Tags;
