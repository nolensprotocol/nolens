// components/Button.js
export default function Button({ children, onClick, type = 'button', variant = 'primary', className = '', disabled }) {
  const base = 'inline-flex justify-center items-center px-5 py-2.5 font-semibold rounded-full transition-all text-sm';
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-200',
    secondary: 'border border-white text-white hover:bg-white hover:text-black',
    disabled: 'opacity-50 cursor-not-allowed',
  }

  const style =
    disabled
      ? `${base} ${variants.disabled} ${className}`
      : `${base} ${variants[variant]} ${className}`;

  return (
    <button onClick={onClick} type={type} className={style} disabled={disabled}>
      {children}
    </button>
  )
}
