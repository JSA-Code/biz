import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { client } from "@/lib/client";
import { token } from "@/lib/token";

const clientWithToken = client.withConfig({ token });

// console.log("CLIENT WITH TOKEN:", clientWithToken);
// console.log("TOKEN:", token);

export async function GET(req: Request) {
  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    clientWithToken,
    req.url
  );

  if (!isValid) {
    return new Response("Invalid secret", { status: 401 });
  }

  draftMode().enable();
  redirect(redirectTo);
}
