"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useAuth, useUser } from "@clerk/nextjs";
import { usePostHog } from "posthog-js/react";

export default function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { user } = useUser();
  const posthog = usePostHog();

  useEffect(() => {
    if (user) {
      user;
      if (!user.emailAddresses?.[0]?.emailAddress) {
        return;
      }

      posthog.identify(
        user.id, // Replace 'distinct_id' with your user's unique identifier
        {
          ...user.emailAddresses,
          name: `${user.firstName} ${user.lastName}`,
        }, // optional: set additional user properties
      );
    }
  }, [user, posthog]);

  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }

      if (user?.id) {
        posthog.capture("$pageview", {
          $current_url: url,
        });
      }
    }
  }, [pathname, searchParams, posthog]);

  return null;
}
