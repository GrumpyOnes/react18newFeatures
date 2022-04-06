import {
    // startTransition
    useTransition,
  } from "react";
  
  export default function Button({ refresh }) {
    const [isPending, startTransition] = useTransition();
    return (
      <div>
        <button
          disabled={isPending}
          onClick={() => {
            startTransition(refresh);
          }}
        >
          Transtion Refresh
        </button>
        <p>{isPending ? "loading" : ""}</p>
      </div>
    );
  }