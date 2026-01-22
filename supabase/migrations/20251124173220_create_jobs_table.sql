/*
  # Create jobs table

  1. New Tables
    - `jobs`
      - `id` (uuid, primary key)
      - `title` (text) - Job title
      - `department` (text) - Department/Team
      - `level` (text) - Experience level (Entry, Mid, Senior)
      - `location` (text) - Job location
      - `type` (text) - Employment type (Full-time, Contract, etc)
      - `description` (text) - Full job description
      - `requirements` (jsonb) - Array of requirements
      - `responsibilities` (jsonb) - Array of responsibilities
      - `benefits` (jsonb) - Array of benefits
      - `salary_range` (text) - Salary information
      - `posted_at` (timestamp)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS on `jobs` table
    - Add policy for public read access (anyone can view job listings)
*/

CREATE TABLE IF NOT EXISTS jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  department text NOT NULL,
  level text NOT NULL,
  location text NOT NULL,
  type text NOT NULL,
  description text NOT NULL,
  requirements jsonb DEFAULT '[]',
  responsibilities jsonb DEFAULT '[]',
  benefits jsonb DEFAULT '[]',
  salary_range text,
  posted_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view jobs"
  ON jobs
  FOR SELECT
  TO anon, authenticated
  USING (true);
