import {
  Github,
  GithubName,
  LastScore,
  MadeWithLove,
  Wrapper,
  WrapperGithub,
} from "./styles";

const gitHubProject = "https://github.com/Sammer55/flappybird-react";
const sammer55 = "https://www.sammer.website/";

const Header = () => {
  return (
    <Wrapper>
      <WrapperGithub href={gitHubProject}>
        <Github
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.438 9.82 8.207 11.436.6.113.793-.262.793-.586 0-.288-.01-1.25-.015-2.27-3.188.697-3.86-1.53-3.86-1.53-.52-1.32-1.266-1.67-1.266-1.67-1.032-.707.078-.692.078-.692 1.137.08 1.734 1.168 1.734 1.168 1.006 1.72 2.637 1.22 3.28.932.102-.725.394-1.22.716-1.504-2.51-.286-5.14-1.255-5.14-5.576 0-1.23.45-2.236 1.172-3.02-.117-.285-.504-1.43.112-2.98 0 0 .94-.303 3.08 1.15.894-.25 1.848-.375 2.796-.378.948.003 1.902.128 2.796.378 2.14-1.454 3.08-1.15 3.08-1.15.617 1.55.23 2.695.112 2.98.722.784 1.17 1.79 1.17 3.02 0 4.333-2.636 5.286-5.156 5.566.406.348.768 1.04.768 2.095 0 1.514-.015 2.734-.015 3.104 0 .327.187.706.8.586C20.565 21.818 24 17.31 24 12c0-6.63-5.373-12-12-12'%3E%3C/path%3E%3C/svg%3E"
          alt="GitHub icon"
        />
        <GithubName>GitHub</GithubName>
      </WrapperGithub>
      <LastScore>
        Last score:{" "}
        <strong style={{ color: "#58d858" }}>
          {localStorage.getItem("score") || 0}
        </strong>
      </LastScore>
      <MadeWithLove>
        with ❤️ by <a href={sammer55}>Sammer55</a>
      </MadeWithLove>
    </Wrapper>
  );
};

export default Header;
