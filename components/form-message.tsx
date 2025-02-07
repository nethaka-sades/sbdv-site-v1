export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  return (
    <div className="flex flex-col w-full text-center text-md font-medium">
      {"success" in message && (
        <div className="text-green-500 animate-pulse">
          {message.success}
        </div>
      )}
      {"error" in message && (
        <div className="text-red-500 animate-pulse">
          {message.error}
        </div>
      )}
      {"message" in message && (
        <div className="text-foreground">{message.message}</div>
      )}
    </div>
  );
}