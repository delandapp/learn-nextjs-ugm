import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

export default function App({ Component, pageProps }) {
  return (
  <MantineProvider
    withGlobalStyles
    withNormalizeCss
    theme={{
      colorScheme: 'dark',
    }}>
      <Component {...pageProps} />
    </MantineProvider>
  )
}
