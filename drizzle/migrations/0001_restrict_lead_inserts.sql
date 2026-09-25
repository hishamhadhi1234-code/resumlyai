DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.resume_tip_leads;
REVOKE INSERT ON public.resume_tip_leads FROM anon;
GRANT INSERT ON public.resume_tip_leads TO authenticated;
CREATE POLICY "Signed-in users can submit their own lead"
ON public.resume_tip_leads FOR INSERT TO authenticated
WITH CHECK (
  lower(email) = lower(auth.jwt() ->> 'email')
  AND char_length(name) BETWEEN 1 AND 100
  AND (source_slug IS NULL OR char_length(source_slug) <= 200)
);