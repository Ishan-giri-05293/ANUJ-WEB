/*
# Create workshop_registrations table

1. Purpose
   Stores registrations for Anuj's live Digital Marketing Workshop.
   This is a single-tenant landing page with no sign-in screen, so the
   anon-key frontend must be able to insert registrations directly.

2. New Tables
   - `workshop_registrations`
     - `id` (uuid, primary key)
     - `full_name` (text, not null) — registrant's full name
     - `email` (text, not null) — registrant's email
     - `whatsapp_number` (text, not null) — registrant's WhatsApp number
     - `payment_status` (text, default 'pending') — pending | completed
     - `created_at` (timestamptz, default now())

3. Security
   - Enable RLS on `workshop_registrations`.
   - Allow anon + authenticated INSERT (anyone can register for the workshop).
   - No SELECT/UPDATE/DELETE for anon — registration data is private to the
     organizer, not publicly readable. (USING (false) effectively denies.)
*/

CREATE TABLE IF NOT EXISTS workshop_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  whatsapp_number text NOT NULL,
  payment_status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE workshop_registrations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_registrations" ON workshop_registrations;
CREATE POLICY "anon_insert_registrations" ON workshop_registrations
  FOR INSERT TO anon, authenticated WITH CHECK (true);

-- No SELECT/UPDATE/DELETE policies: registration data is not publicly readable.
