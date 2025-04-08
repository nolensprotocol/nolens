export default function Card({ children, className = '' }) {
  return (
    <div
      className={`border rounded-xl p-6 shadow-md bg-white dark:bg-zinc-900 transition-all hover:shadow-xl hover:scale-[1.02] ${className}`}
    >
      {children}
    </div>
  )
}
