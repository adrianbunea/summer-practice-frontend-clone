import { Layout } from "./components/layout";
import { All } from "./pages/all";
import { ThemeStylesheetSwitch } from "./theme-context";


const App = () => (
    <Layout>
        <ThemeStylesheetSwitch/>
        <All/>
    </Layout>
)

export default App;
