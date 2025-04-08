// components/DocsBackLink.js
import Link from 'next/link'

export default function DocsBackLink() {
  return (
    <div className="mt-20 pt-8 border-t border-gray-200 text-sm">
      <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition">
        ← Back to Docs
      </Link>
    </div>
  )
}
