import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="
          hidden sm:block
          fixed bottom-24 left-5
          bg-blue-600 text-white p-3 rounded-full
          shadow-lg hover:bg-blue-700
          transition-all duration-300 z-50
          hover:scale-110
        "
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    )
  );
};

export default ScrollToTop;