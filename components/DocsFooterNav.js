import Link from 'next/link'

export default function DocsFooterNav({ prev, next }) {
  return (
    <div className="mt-20 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-600">
      {prev ? (
        <Link href={prev.href} className="hover:text-gray-900 transition">
          ← {prev.label}
        </Link>
      ) : <span />}

      {next ? (
        <Link href={next.href} className="hover:text-gray-900 transition self-end md:self-auto">
          {next.label} →
        </Link>
      ) : <span />}
    </div>
  )
}
