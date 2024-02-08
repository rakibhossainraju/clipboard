import { HeroComponent } from "./components/HeroComponent.jsx";
import { SnippetsComponent } from "./components/SnippetsComponent.jsx";
import { FeaturesComponent } from "./components/FeaturesComponent.jsx";
import { ReferencesComponent } from "./components/ReferencesComponent.jsx";

export default function App() {
  return (
    <main>
      <HeroComponent />
      <SnippetsComponent />
      <FeaturesComponent />
      <ReferencesComponent />
    </main>
  );
}
