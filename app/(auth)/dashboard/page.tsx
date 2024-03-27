import React from "react";
import {Chat} from "@/components/chat/chat";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";

export default function page() {
  const queryClient = new QueryClient();

    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Chat />
      </HydrationBoundary>
    )
}