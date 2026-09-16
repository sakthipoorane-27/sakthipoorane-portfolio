export default function BackgroundFX() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-40" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="noise" />
    </div>
  );
}
