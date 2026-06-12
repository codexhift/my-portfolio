interface OrnamentProps {
  color?: string;
  lineWidth?: number;
  className?: string;
  center?: boolean;
}

export default function Ornament({
  color = 'currentColor',
  lineWidth = 80,
  className = '',
  center = true,
}: OrnamentProps) {
  return (
    <div
      className={`ornament ${center ? 'justify-center' : ''} ${className}`}
      aria-hidden="true"
      style={{ color }}
    >
      <div className="ornament-line" style={{ width: lineWidth }} />
      <div className="ornament-diamond sm" />
      <div className="ornament-diamond" />
      <div className="ornament-diamond sm" />
      <div className="ornament-line rev" style={{ width: lineWidth }} />
    </div>
  );
}
