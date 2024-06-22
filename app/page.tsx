/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3Z2gfLUGQP3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ComponentPropsWithoutRef } from "react";

export default function Component() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]">
      <header className="flex items-center gap-4 p-4 bg-[#fff5ee] shadow-md">
        <Avatar className="w-10 h-10 border-2 border-[#fcb69f]">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <div className="text-lg font-medium text-[#fc8c8c]">Anime Chat</div>
      </header>
      <div className="flex-1 overflow-auto p-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <Avatar className="w-8 h-8 border-2 border-[#fcb69f]">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="bg-[#fff5ee] px-4 py-2 rounded-2xl rounded-bl-none shadow-md">
              <p className="text-sm text-[#fc8c8c]">
                Konnichiwa! How are you doing today?
              </p>
            </div>
          </div>
          <div className="flex justify-end items-start gap-3">
            <div className="bg-[#ffecd2] px-4 py-2 rounded-2xl rounded-br-none shadow-md">
              <p className="text-sm text-[#fc8c8c]">
                I'm doing great, thanks for asking! How about you?
              </p>
            </div>
            <Avatar className="w-8 h-8 border-2 border-[#fcb69f]">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-start gap-3">
            <Avatar className="w-8 h-8 border-2 border-[#fcb69f]">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="bg-[#fff5ee] px-4 py-2 rounded-2xl rounded-bl-none shadow-md">
              <p className="text-sm text-[#fc8c8c]">
                I'm doing great too! I love this anime-style chat interface,
                it's so cute and fun.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fff5ee] p-4 flex items-center gap-2">
        <Textarea
          placeholder="Type your message..."
          className="flex-1 rounded-full bg-[#ffecd2] border-none focus:ring-0 focus:outline-none px-4 py-2 text-sm text-[#fc8c8c]"
        />
        <Button
          variant="ghost"
          size="icon"
          className="bg-[#fcb69f] text-[#fff5ee] rounded-full p-2 hover:bg-[#fc8c8c]"
        >
          <SendIcon className="w-4 h-4" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  );
}

function SendIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
