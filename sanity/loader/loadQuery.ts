import "server-only";

import * as queryStore from "@sanity/react-loader";
import { client } from "@/lib/client";
import { token } from "@/lib/token";
import { draftMode } from "next/headers";
import { HomePayloadType } from "@/types";
import {
  HOME_QUERY,
  HERO_QUERY,
  CONTACT_QUERY,
  OFFICE_QUERY,
  REVIEW_QUERY,
  SERVICE_QUERY,
  PRICE_QUERY,
} from "@/sanity/lib/queries";

const serverClient = client.withConfig({
  token,
  // Enable stega if it's a Vercel preview deployment, as the Vercel Toolbar has controls that shows overlays
  stega: process.env.VERCEL_ENV === "preview",
});

/**
 * Sets the server client for the query store, doing it here ensures that all data fetching in production, happens on the server and not on the client
 */
queryStore.setServerClient(serverClient);
const usingCdn = serverClient.config().useCdn;

export const loadQuery = ((query, params = {}, options = {}) => {
  const {
    perspective = draftMode().isEnabled ? "previewDrafts" : "published",
  } = options;
  // Don't cache by default
  let revalidate: NextFetchRequestConfig["revalidate"] = 0;
  // If `next.tags` is set, and we're not using the CDN, then it's safe to cache
  if (!usingCdn && Array.isArray(options.next?.tags)) {
    revalidate = false;
  } else if (usingCdn) {
    revalidate = 60;
  }
  return queryStore.loadQuery(query, params, {
    ...options,
    next: {
      revalidate,
      ...(options.next || {}),
    },
    perspective,
    // Enable stega if in Draft Mode, to enable overlays when outside Sanity Studio
    stega: draftMode().isEnabled,
  });
}) satisfies typeof queryStore.loadQuery;

export function loadHome() {
  // third arg uses in template: { next: { tags: ['home', 'project'] } }
  return loadQuery<HomePayloadType | null>(HOME_QUERY, {}, {});
}
