import AboutSection from "./SubComponents/AboutSection";
import Members from "./SubComponents/Members";

export default function InfoPage() {
  return (
    <div className="w-full">
      <div className="min-h-screen">
        <AboutSection />
      </div>
      <Members />
    </div>
  );
}
