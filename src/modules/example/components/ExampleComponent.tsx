"use client";

import { useExample } from "../contexts/ExampleContext";

interface Props {}

const ExampleComponent = ({}: Props) => {
  const { result } = useExample();
  return (
    <div className="flex flex-col border rounded-3xl border-black-200 p-6">
      {result.result}
    </div>
  );
};

export default ExampleComponent;
