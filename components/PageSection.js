// components/PageSection.js
export default function PageSection({ children, className = '' }) {
  return (
    <div className={`max-w-7xl mx-auto px-6 md:px-8 ${className}`}>
      {children}
    </div>
  )
}
