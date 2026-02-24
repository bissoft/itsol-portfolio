const Backdrop = ({ onClick, children }) => {
    return (
      <div
        onClick={onClick}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 999,  // Ensure backdrop is above other content
        }}
      >
        {children}
      </div>
    );
  };
  
  export default Backdrop;
  