import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { Provider } from "./components/provider";
import { LangProvider } from "./lib/i18n";
import Home from "./pages/index";
import Services from "./pages/services";
import Cases from "./pages/cases";
import CaseEcommerce from "./pages/case-ecommerce";
import Contacts from "./pages/contacts";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function App() {
  return (
    <LangProvider>
      <Provider>
        <ScrollToTop />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/cases" component={Cases} />
          <Route path="/cases/ecommerce-marketplace" component={CaseEcommerce} />
          <Route path="/contacts" component={Contacts} />
        </Switch>

      </Provider>
    </LangProvider>
  );
}

export default App;
