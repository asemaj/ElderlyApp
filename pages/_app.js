import '../app/globals.css'; // Import global styles
import { withAuthenticator } from '@aws-amplify/ui-react'; // Import AWS Amplify's authentication components
import {Amplify} from 'aws-amplify'; // Import Amplify from aws-amplify library (no curly braces needed)
import awsExports from './aws-exports'; // Import AWS Amplify configuration
// import config from './amplifyconfiguration.json';
import {AppProps } from 'next/app';
import "@aws-amplify/ui-react/styles.css"
Amplify.configure(awsExports);



function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default withAuthenticator(App); // Wrap your app with authentication components
