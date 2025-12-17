export const metadata = {
  title: 'Sanity Studio | Imani Website',
  description: 'Content management for Imani Website',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      {children}
    </div>
  )
}
