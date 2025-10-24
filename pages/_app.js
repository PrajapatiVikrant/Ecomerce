// pages/_app.js
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";  // adjust the path if needed
import { Provider } from "react-redux";
import store from "@/state/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="pt-16">
          <Component {...pageProps} />
        </main>
      </div>
    </Provider>
  );
}

export default MyApp;
