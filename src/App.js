import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {Routes, Route} from 'react-router-dom'
import Topbar from './scenes/global/Topbar'
import SideBar from './scenes/global/SideBar'
import Resources from './resources'


function App() {
  const [theme, colorMode] = useMode();
    
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
          <Routes>
            <Route path="/" element={<Resources.Dashboard />}/>
            {/* <Route path="/team" element={<Resources.Team />}/> */}
            {/* <Route path="/contacts" element={<Resources.Contacts />}/> */}
            {/* <Route path="/invoices" element={<Resources.Invoices />}/> */}
            {/* <Route path="/form" element={<Resources.Form />}/> */}
            {/* <Route path="/bar" element={<Resources.Bar />}/> */}
            {/* <Route path="/pie" element={<Resources.Pie />}/> */}
            {/* <Route path="/line" element={<Resources.Line />}/> */}
            {/* <Route path="/faq" element={<Resources.FAQ />}/> */}
            {/* <Route path="/geography" element={<Resources.Geography />}/> */}
            {/* <Route path="/calendar" element={<Resources.Calendar />}/> */}
          </Routes>
          </main>
      
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
