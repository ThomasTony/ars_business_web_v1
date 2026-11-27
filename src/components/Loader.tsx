// Loader 
type LoaderProps = {
  className?: string
}

export default function Loader({ className = '' }: LoaderProps) {
  return (
    <div className={`loader-wrapper ${className}`}>
      <div className="loader" />

      <div className="loader-section section-left" />
      <div className="loader-section section-right" />
    </div>
  )
}
