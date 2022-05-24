import { base_route, card_service_url } from "./config";

export default async function getCard() {
  console.log(`${base_route}${card_service_url}`);
  const res = await fetch(`${base_route}${card_service_url}`, {
    method: "GET",
    "content-type": "application/json",
  });
  return await res.json();
}
