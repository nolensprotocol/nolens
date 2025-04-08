// components/Card.js
export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-neutral-900 border border-white/10 rounded-2xl p-6 transition duration-300 hover:shadow-lg hover:border-white/20 ${className}`}>
      {children}
    </div>
  )
}

