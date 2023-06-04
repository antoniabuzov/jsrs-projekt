import React, { useEffect } from 'react';
import "./css/PageLoader.css"

function PageLoader() {
  useEffect(() => {
    const handleLoad = () => {
      const pageLoader = document.querySelector('.js-page-loader');
      if (pageLoader) {
        pageLoader.classList.add('fade-out');
        setTimeout(() => {
          pageLoader.style.display = 'none';
        }, 600);
      }
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="page-loader js-page-loader">
      <div></div>
    </div>
  );
}

export default PageLoader;
