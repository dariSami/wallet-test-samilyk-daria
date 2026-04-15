import path from "path";
import dotenv from "dotenv";
import fs from "fs";

const ROOT = path.resolve(__dirname, "..");
const testEnv = process.env.TEST_ENV || "dev";

dotenv.config({ path: path.join(ROOT, ".env") });

const envFile = path.join(ROOT, `.env.${testEnv}`);
if (!fs.existsSync(envFile)) {
  throw new Error(
      `Environment file not found: ${envFile}\n` +
      `Create it or set TEST_ENV to one of: dev, prod`,
  );
}
dotenv.config({ path: envFile, override: true });

function env(key: string, fallback?: string): string {
  const val = process.env[key];
  if (val) return val;
  if (fallback !== undefined) return fallback;
  throw new Error(`Missing required env variable: ${key}`);
}

function envNumber(key: string, fallback: number): number {
  const raw = process.env[key];
  if (!raw) return fallback;

  const parsed = Number(raw);
  if (Number.isNaN(parsed)) {
    throw new Error(`Env variable ${key}="${raw}" is not a valid number`);
  }
  return parsed;
}

export const config = {
  baseUrl: env("BASE_URL"),
  profilesDir: env("PROFILES_DIR", path.join(ROOT, ".tmp")),
  timeout: envNumber("TIMEOUT", 15000),

  getProfileDir(extensionName: string, walletName: string): string {
    return path.join(this.profilesDir, `${extensionName}-${walletName}`);
  },
};