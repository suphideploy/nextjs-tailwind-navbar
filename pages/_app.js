import '@/styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { ThemeProvider } from 'next-themes'


export default function App({ Component, pageProps } ) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
       <Component {...pageProps} />
    </ThemeProvider>
 
  )
}
