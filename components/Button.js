export default function Button({
  children,
  onClick,
  disabled,
  variant = 'primary',
  className = '',
  ...props
}) {
  const base =
    'w-full px-4 py-2 rounded-md font-semibold transition text-sm focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    disabled: 'bg-gray-400 text-white cursor-not-allowed',
  }

  const applied =
    disabled ? variants.disabled : variants[variant] || variants.primary

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${applied} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
