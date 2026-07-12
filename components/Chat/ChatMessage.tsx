type ChatMessageProps = {
  role: "user" | "assistant";
  message: string;
};

export default function ChatMessage({
  role,
  message,
}: ChatMessageProps) {
  return (
    <div
      className={`mb-4 flex ${
        role === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          role === "user"
            ? "bg-blue-600 text-white"
            : "bg-zinc-800 text-white"
        }`}
      >
        {message}
      </div>
    </div>
  );
}