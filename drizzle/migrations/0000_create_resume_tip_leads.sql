CREATE TABLE public.resume_tip_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  source_slug TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT resume_tip_leads_name_len CHECK (char_length(name) BETWEEN 1 AND 100),
  CONSTRAINT resume_tip_leads_email_len CHECK (char_length(email) BETWEEN 3 AND 255)
);

GRANT INSERT ON public.resume_tip_leads TO anon;
GRANT INSERT ON public.resume_tip_leads TO authenticated;
GRANT ALL ON public.resume_tip_leads TO service_role;

ALTER TABLE public.resume_tip_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
ON public.resume_tip_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);