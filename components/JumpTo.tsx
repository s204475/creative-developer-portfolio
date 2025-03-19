interface JumpToProps {
  projectsRef: React.RefObject<HTMLDivElement>;
  gamesRef: React.RefObject<HTMLDivElement>;
}

const JumpTo: React.FC<JumpToProps> = ({ projectsRef, gamesRef }) => {
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={containerStyle}>
      <button onClick={() => scrollToSection(projectsRef)} style={buttonStyle}>
        Jump to Projects
      </button>
      <button onClick={() => scrollToSection(gamesRef)} style={buttonStyle}>
        Jump to Games
      </button>
    </div>
  );
};

// Centered container styles
const containerStyle = {
  display: "flex",
  justifyContent: "center", // Centers horizontally
  alignItems: "center", // Centers vertically (if needed)
  gap: "15px",
  margin: "40px 0",
};

// Button styles
const buttonStyle = {
  padding: "12px 24px",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#007bff",
  color: "white",
  transition: "background 0.3s",
};

export default JumpTo;
