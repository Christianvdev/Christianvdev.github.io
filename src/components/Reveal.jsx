import { useReveal } from "../hooks";

// Wrap anything in <Reveal> to make it fade up when scrolled into view.
// Use the "as" prop to change the HTML tag, e.g. <Reveal as="article">.
export default function Reveal({ as: Tag = "div", className = "", children }) {
  const ref = useReveal();
  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>;
}
