export default function PageWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='w-full mx-auto max-w-7xl px-4 pt-8 pb-20 flex flex-col'>
      {children}
    </main>
  )
}
