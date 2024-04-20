import '../app/globals.css'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Amplify } from 'aws-amplify'
import awsExports from '../aws-exports' 
Amplify.configure({ ...awsExports })

function MyApp ({ Component, pageProps }) {
    return <Component {...pageProps} />
}
export default withAuthenticator(MyApp)