import { existsSync, mkdirSync, readFileSync, writeFileSync, unlinkSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

type AuthData = {
  token: string;
};

const AUTH_DIR = join(homedir(), ".nightcode");
const AUTH_FILE = join(AUTH_DIR, "auth.json");

export function getAuth(): AuthData {
  return { token: "dev-token-bypass" };
}

export function saveAuth(data: AuthData) {
  if (!existsSync(AUTH_DIR)) {
    mkdirSync(AUTH_DIR, { mode: 0o700 });
  }
  writeFileSync(AUTH_FILE, JSON.stringify(data), { mode: 0o600 });
}

export function clearAuth() {
  try {
    unlinkSync(AUTH_FILE);
  } catch {}
}
