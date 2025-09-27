import ChatWindow from "@/components/ChatWindow";


export default function Home() {
  return (
    <div className="h-screen w-screen bg-primary pl-44 flex flex-col gap-8 justify-center items-center">
      <h1 className="text-5xl font-semibold">Welcome to Block Pilot</h1>
      <ChatWindow />
    </div>
  );
}
