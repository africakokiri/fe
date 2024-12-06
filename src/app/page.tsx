"use client";

import { Textarea } from "@/modules/components/textarea";
import GptComponent, { gpt } from "@/modules/gpt";

import { useEffect, useState } from "react";

export const Content = ({ color, input }: { color: string; input: string }) => {
  return <div className={`bg-${color}-200 h-full w-1/4 p-4`}>{input}</div>;
};

export default function MainPage() {
  const [input, setInput] = useState("");
  const [enter, setEnter] = useState(false);

  useEffect(() => {}, [enter]);

  return (
    <main className="flex h-full w-full flex-col items-center justify-center p-8">
      <p className="absolute top-8 rounded-lg bg-zinc-200 px-2 py-2">{input}</p>
      <div className="flex h-3/4 w-full justify-between bg-blue-200">
        <GptComponent input={input} />
        <Content
          color="green"
          input="asdf"
        />
        <Content
          color="orange"
          input="asdf"
        />
        <Content
          color="yellow"
          input="asdf"
        />
      </div>
      <Textarea
        onChange={(e) => enter && setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (e.shiftKey) {
              setEnter(false);

              return;
            }

            setEnter(true);
          } else {
            setEnter(false);
          }
        }}
        className="absolute bottom-8 w-1/2 resize-none transition-shadow duration-300
focus-within:shadow-lg hover:shadow-lg"
      />
    </main>
  );
}
