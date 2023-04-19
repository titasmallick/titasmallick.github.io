import './globals.css'

export const metadata = {
  title: 'Titas Mallick',
  description: 'biology Teacher and NextJs Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
