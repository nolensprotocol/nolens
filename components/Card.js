// components/Card.js
export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-neutral-900 border border-white/10 rounded-xl p-6 shadow-sm hover:shadow-md transition ${className}`}>
      {children}
    </div>
  )
}
