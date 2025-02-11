import Chat from "./_client/Chat";
import { getMessages } from "./actions";

export default async function Home() {
  const messages = await getMessages().catch(() => null);

  if (!messages) {
    return <div>Error loading messages</div>;
  }

  return <Chat messages={messages} />;
}
