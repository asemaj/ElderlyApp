import '../app/globals.css'; // Import global styles
import { withAuthenticator } from '@aws-amplify/ui-react'; // Import AWS Amplify's authentication components
import {Amplify, Auth} from 'aws-amplify'; // Import Amplify from aws-amplify library (no curly braces needed)
import awsExports from '../src/aws-exports'; // Import AWS Amplify configuration
import "@aws-amplify/ui-react/styles.css"
Amplify.configure(awsExports);

function App({ Component, pageProps }) {
    const onAuthenticated = async () => {
        console.log("User authenticated, redirecting to home");
        const user = await Auth.currentAuthenticatedUser();
        console.log(user);
        if (user) {
            window.location.href = '../app/profile';
        }
    }
    return (
        <>
            <Component {...pageProps} />
            <script
                dangerouslySetInnerHTML={{
                    __html: `(${onAuthenticated.toString()})();`
                }}
            />
        </>
    );
}

export default withAuthenticator(App); // Wrap your app with authentication components










