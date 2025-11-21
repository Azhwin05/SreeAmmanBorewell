import React from 'react';

const SEO = ({ title, description, keywords, canonical }) => {
    return (
        <>
            <title>{title} | Sri Amman Borewell Services</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {canonical && <link rel="canonical" href={canonical} />}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
        </>
    );
};

export default SEO;
