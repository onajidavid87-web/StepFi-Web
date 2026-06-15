export function Spinner({ size = 20 }: { size?: number }) {
  return (
    <div
      className="border-2 border-border border-t-brand
        rounded-full animate-spin"
      style={{ width: size, height: size }}
    />
  )
}
