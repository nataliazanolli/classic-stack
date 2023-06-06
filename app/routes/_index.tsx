import type { V2_MetaFunction } from "@remix-run/node";

import { useOptionalUserId } from "~/utils";

export const meta: V2_MetaFunction = () => [{ title: "Remix Classic Stack" }];

export default function Index() {
  const id = useOptionalUserId();
  return (
    <main style={{ textAlign: "center" }}>
      <h1>Remix Classic Stack</h1>
      <img
        src="https://user-images.githubusercontent.com/1500684/157774694-99820c51-8165-4908-a031-34fc371ac0d6.jpg"
        alt="Sonic Youth On Stage"
        style={{ maxHeight: "80vh", maxWidth: "80vw" }}
      />
      <p>{id || ""}</p>
    </main>
  );
}
