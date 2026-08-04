import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const BASE_COUNT = 859;
const START_MS = Date.parse("2026-07-27T00:00:00Z");
const DAY_MS = 86_400_000;

// Stable pseudo-random increment (1..5) for a given day index.
const seededDailyIncrement = (dayIndex: number) => {
  let x = Math.sin(dayIndex * 9301 + 49297) * 233280;
  x = x - Math.floor(x);
  return Math.floor(x * 5) + 1;
};

Deno.serve((req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const now = Date.now();
  const dayIndex = Math.floor((now - START_MS) / DAY_MS);

  let total = BASE_COUNT;
  for (let d = 0; d < dayIndex; d++) total += seededDailyIncrement(d);

  // Spread today's increment steadily across the day so the number
  // creeps up during the day and is identical for every visitor.
  const todayIncrement = seededDailyIncrement(dayIndex);
  const dayProgress = ((now - START_MS) % DAY_MS) / DAY_MS;
  total += Math.floor(todayIncrement * dayProgress);

  return new Response(
    JSON.stringify({ count: total, updatedAt: new Date(now).toISOString() }),
    {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60",
      },
    },
  );
});
