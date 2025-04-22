"use client"

export function MonacoEditor({ code, onChange }: { code: string; onChange: (value: string) => void }) {
  // 実際の実装ではMonaco Editorを使用します
  // ここではシンプルなテキストエリアで代用
  return (
    <div className="h-full bg-gray-900 text-white">
      <textarea
        className="w-full h-full bg-gray-900 text-white p-4 font-mono text-sm resize-none focus:outline-none"
        value={code}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
      />
    </div>
  )
}
