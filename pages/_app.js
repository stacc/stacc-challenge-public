import "../styles/globals.css";
import "../styles/reset.css";
// _app.js is a special Next.js file that allows you to
// write code that is applied to every page in the application

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
