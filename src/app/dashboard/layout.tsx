export default function RootDashboard({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Dashboard</title>
      </head>
      <body>
          {children}
      </body>
    </html>
  );
}
