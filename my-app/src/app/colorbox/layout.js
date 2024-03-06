export default function ColorBoxLayout({ children, left, right }) {
  const isColor = true;
  return (
    <section>
      {children}
      {isColor ? left : right}
      {/* {left}
      {right} */}
    </section>
  );
}
