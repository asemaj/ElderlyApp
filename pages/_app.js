import '../app/globals.css'; // Import global styles
import { withAuthenticator } from '@aws-amplify/ui-react'; // Import AWS Amplify's authentication components
import Amplify from 'aws-amplify'; // Import Amplify from aws-amplify library (no curly braces needed)
import awsExports from '../aws-exports'; // Import AWS Amplify configuration

Amplify.configure({ ...awsExports }); // Configure AWS Amplify with the settings from awsExports

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default withAuthenticator(MyApp); // Wrap your app with authentication components
