import DOMPurify from "dompurify";
import parse from "html-react-parser";

interface HtmlDescriptionProps {
  html: string;
}

export function HtmlDescription({ html }: HtmlDescriptionProps) {
  const clean = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ["p", "ul", "ol", "li", "strong", "em", "br", "img", "div", "span"],
    ALLOWED_ATTR: ["src", "width", "height", "style", "alt"],
    ADD_ATTR: ["style"],
  });

  return <div className="text-muted-foreground">{parse(clean)}</div>;
}
