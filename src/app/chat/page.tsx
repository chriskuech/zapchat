import Chat from "./_components/Chat";
import { getMessages } from "./actions";

export default async function Page() {
  const maybeMessages = await getMessages();

  if ("error" in maybeMessages) {
    return <div>{maybeMessages.error}</div>;
  }

  return <Chat messages={maybeMessages.value} />;
}
