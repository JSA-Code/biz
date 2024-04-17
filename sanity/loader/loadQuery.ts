import "server-only";

import * as queryStore from "@sanity/react-loader";
import { client } from "@/lib/client";
import { token } from "@/lib/token";
import { draftMode } from "next/headers";
import {
  HomePayloadType,
  SupportPayloadType,
  HeroType,
  ContactType,
  OfficeType,
  ReviewType,
  ServiceType,
  PriceType,
} from "@/types";
import {
  HOME_QUERY,
  SUPPORT_QUERY,
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
    // USE THIS IN DEV
    // revalidate = 0;
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
  // in template, third arg used as: { next: { tags: ['home', 'project'] } }
  return loadQuery<HomePayloadType | null>(
    HOME_QUERY,
    {},
    {
      next: {
        tags: [
          "home",
          "hero",
          "contact",
          "office",
          "review",
          "service",
          "price",
        ],
      },
    }
  );
}

export function loadSupport() {
  // in template, third arg used as: { next: { tags: ['home', 'project'] } }
  return loadQuery<SupportPayloadType | null>(
    SUPPORT_QUERY,
    {},
    {
      next: {
        tags: ["support"],
      },
    }
  );
}

export function loadHero() {
  return loadQuery<HeroType | null>(
    HERO_QUERY,
    {},
    {
      next: {
        tags: ["hero"],
      },
    }
  );
}

export function loadContact() {
  return loadQuery<ContactType | null>(
    CONTACT_QUERY,
    {},
    {
      next: {
        tags: ["contact"],
      },
    }
  );
}

export function loadOffice() {
  return loadQuery<OfficeType | null>(
    OFFICE_QUERY,
    {},
    {
      next: {
        tags: ["office"],
      },
    }
  );
}

export function loadReview() {
  return loadQuery<ReviewType | null>(
    REVIEW_QUERY,
    {},
    {
      next: {
        tags: ["review"],
      },
    }
  );
}

export function loadService() {
  return loadQuery<ServiceType | null>(
    SERVICE_QUERY,
    {},
    {
      next: {
        tags: ["service"],
      },
    }
  );
}

export function loadPrice() {
  return loadQuery<PriceType | null>(
    PRICE_QUERY,
    {},
    {
      next: {
        tags: ["price"],
      },
    }
  );
}
