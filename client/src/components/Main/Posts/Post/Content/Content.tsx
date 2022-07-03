import { useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import { darcula, prism } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  source: string;
}
export const Content: FC<Props> = ({ source }) => {
  const { colorMode } = useColorMode();
  return (
    <Markdown
      children={source}
      components={{
        code({ node, inline, children, className, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={colorMode === "light" ? prism : darcula}
              language={match[1]}
              PreTag="div"
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};
