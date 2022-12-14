import "../styles/globals.scss";
import "../styles/grid.scss";

// FontAwesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import AuthProviderClientComponent from "./auth-provider";
config.autoAddCss = false

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <AuthProviderClientComponent>
          {children}
        </AuthProviderClientComponent>
      </body>
    </html>
  )
}
