import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useRef } from "react";

function App() {
  gsap.registerPlugin(TextPlugin);
  const { rive, RiveComponent } = useRive({
    src: "./daynighttoggle.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  const toggle = useStateMachineInput(rive, "State Machine 1", "toggle", false);
  const changeTheme = () => {
    console.log(toggle?.value);
    if (toggle?.value) {
      gsap.to(container.current, { backgroundColor: "#060e18" });
      gsap.to("h2", { color: "white", text: "Have a good night" });
    } else {
      gsap.to("h2", { color: "black", text: "Have a nice day" });
      gsap.to(container.current, { backgroundColor: "#eeeeFF" });
    }
  };
  const container = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={container}
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#eeeeFF",
        flexDirection: "column",
        gap: 50,
      }}
    >
      <h2 style={{ textTransform: "uppercase", fontSize: 40 }}>
        Have {toggle?.value ? "a good night" : "a nice day"}
      </h2>
      <RiveComponent
        style={{ width: 200, height: 200 }}
        onClick={changeTheme}
      />
    </div>
  );
}

export default App;
