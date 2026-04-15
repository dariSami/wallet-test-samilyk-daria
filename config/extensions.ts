import path from "path";
import fs from "fs";

const ROOT = path.resolve(__dirname, "..");

/**
 * Maps extension names (from @ext: tags) to their filesystem paths.
 * Override any path via env: EXTENSION_PHANTOM_PATH, EXTENSION_METAMASK_PATH
 */
const extensionPaths: Record<string, string> = {
  phantom:
    process.env.EXTENSION_PHANTOM_PATH ||
    path.join(ROOT, "extensions", "phantom"),
  metamask:
    process.env.EXTENSION_METAMASK_PATH ||
    path.join(ROOT, "extensions", "metamask"),
};

export function getExtensionPath(name: string): string {
  const extPath = extensionPaths[name];

  if (!extPath) {
    const supported = Object.keys(extensionPaths).join(", ");
    throw new Error(
      `Unknown extension "${name}". Supported: ${supported}`,
    );
  }

  if (!fs.existsSync(path.join(extPath, "manifest.json"))) {
    throw new Error(
      `Extension "${name}" not found at ${extPath}\n` +
      `Place the unpacked extension there or set EXTENSION_${name.toUpperCase()}_PATH`,
    );
  }

  return extPath;
}
