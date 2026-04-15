import {TEST_WALLETS} from "./test-wallets";

export interface WalletCredentials {
  seed: string;
  password: string;
  walletName: string;
  walletAddress?: string;
  nativeBalance?: string;
}

export function getWallet(name: string): WalletCredentials {
  const wallet = TEST_WALLETS[name as keyof typeof TEST_WALLETS];

  if (!wallet) {
    throw new Error(`Wallet "${name}" not found in TEST_WALLETS`);
  }

  return wallet;
}