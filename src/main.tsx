import { createRoot } from "react-dom/client";
import App from "./App.tsx";

/**
 * This is the entry point for React in our app.
 * We are using the createRoot function to initialize React in the #root element in our index.html file.
 */
createRoot(document.getElementById("root")!).render(<App />);
