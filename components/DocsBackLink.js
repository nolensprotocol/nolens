import Link from 'next/link'

export default function DocsBackLink() {
  return (
    <div className="mt-20 pt-8 border-t border-gray-200 flex justify-center">
      <Link
        href="/docs"
        className="text-gray-600 hover:text-gray-900 transition text-sm"
      >
        ← Back
      </Link>
    </div>
  )
}

