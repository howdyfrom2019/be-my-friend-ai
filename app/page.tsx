"use client";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3Z2gfLUGQP3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useCreateChat } from "@/requests/openai";
import { SendIcon } from "lucide-react";
import { useState } from "react";

interface ConversationType {
  role: "assistant" | "user";
  content: string;
}

export default function Component() {
  const [text, setText] = useState("");
  const [conversationHistory, setConversationHistory] = useState<
    ConversationType[]
  >([
    {
      role: "assistant",
      content:
        "안녕안녕~! 뭐하고 있었어?? 궁금한거 있으면 다 나한테 물어봐! 😊 난 감정적인 챗봇이얌",
    },
  ]);
  const { mutate, isPending } = useCreateChat({
    onSuccess: (data) => {
      console.log(data);
      setConversationHistory((prev) => [
        ...prev,
        {
          role: data.choices[0].message.role,
          content: data.choices[0].message.content,
        },
      ]);
    },
  });

  const handleSubmit = () => {
    setConversationHistory((prev) => [
      ...prev,
      {
        role: "user",
        content: text,
      },
    ]);
    mutate(text);
    setText("");
  };

  return (
    <div className={"flex items-stretch h-screen w-full"}>
      <div className="mx-auto flex flex-col h-screen bg-gradient-to-br from-[#b7cbf3] to-[#99c8ef] max-w-[437px] border shadow-lg">
        <header className="flex items-center gap-4 p-4 bg-[#eef2ff] shadow-md">
          <Avatar className="w-10 h-10 border-2 border-[#f6d770]">
            <AvatarImage src="/ai-chan.png" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="text-lg font-medium text-[#15122d]">ENFP Chat</div>
        </header>
        <ScrollArea className={"w-full h-full px-4 py-2"}>
          <div className="flex flex-col gap-4">
            {conversationHistory.map((conversation, i) => (
              <div key={i}>
                {conversation.role === "assistant" ? (
                  <AIChat>{conversation.content}</AIChat>
                ) : (
                  <MyChat>{conversation.content}</MyChat>
                )}
              </div>
            ))}
            {isPending && (
              <p className={"text-xs text-zinc-200"}>
                Waiting for response....
              </p>
            )}
          </div>
          <ScrollBar orientation={"vertical"} />
        </ScrollArea>
        <div className="bg-[#d4d7f4] p-4 flex items-center gap-2">
          <Textarea
            placeholder="한글로 메시지를 입력해주세요"
            className="flex-1 rounded-md bg-[#e7eaf1] border-none focus:ring-0 focus:outline-none px-4 py-2 text-sm text-[#0c0e22] outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          />
          <Button
            variant="ghost"
            size="icon"
            disabled={isPending}
            className="bg-[#9fa8fc] text-[#eeefff] rounded-full p-2 hover:bg-[#8caefc]"
            onClick={handleSubmit}
          >
            <SendIcon className="w-4 h-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

const AIChat = ({ children }: { children: string }) => {
  return (
    <div className="flex items-start gap-3">
      <Avatar className="w-8 h-8 border-2 border-[#f6d770]">
        <AvatarImage src="/ai-chan.png" />
        <AvatarFallback>AC</AvatarFallback>
      </Avatar>
      <div className="bg-[#eef1ff] px-4 py-2 rounded-2xl rounded-bl-none shadow-md">
        <p className="text-sm text-[#0e111b]">{children}</p>
      </div>
    </div>
  );
};

const MyChat = ({ children }: { children: string }) => {
  return (
    <div className="flex justify-end items-start gap-3">
      <div className="bg-[#4b6bf7] px-4 py-2 rounded-2xl rounded-br-none shadow-md">
        <p className="text-sm text-[#eceef4]">{children}</p>
      </div>
      <Avatar className="w-8 h-8 border-2 border-[#f6d770]">
        <AvatarImage src="/my-profile.png" />
        <AvatarFallback>AC</AvatarFallback>
      </Avatar>
    </div>
  );
};
