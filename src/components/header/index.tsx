const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#343434",
        position: "absolute",
        width: "100%",
        zIndex: 99999,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4px 0",
        fontSize: 13,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          marginLeft: 16,
        }}
      >
        <img
          style={{ width: 20, height: 20, filter: "invert(1)" }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        />
        <a href="https://github.com/Sammer55/flappybird-react">
          GitHub project
        </a>
      </div>
      <p style={{ marginRight: 16, color: "white" }}>
        made with ❤️ by <a href="https://www.sammer.website/">Sammer55</a>
      </p>
    </header>
  );
};

export default Header;
