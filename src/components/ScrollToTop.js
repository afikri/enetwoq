import { useEffect, useState } from 'react';

const ScrollToTop = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {
        isVisible && (
          <div className="scroll-style-float" onClick={handleClick}>
            <i className="fa fa-arrow-up scroll-float"></i>
          </div>
        )}
    </div>
  );
}

export default ScrollToTop;





