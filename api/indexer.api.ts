import axios from "axios";
import {config} from "../config/env";

export class IndexerApi {
    constructor(
        private getAuthToken: () => Promise<string>
    ) {}

    private async getAuthCookie(): Promise<string> {
        const token = await this.getAuthToken();
        return `auth_token=${token}`;
    }

    async getFormattedBalance(address: string): Promise<number> {
        const cookie = await this.getAuthCookie();

        let response;
        try {
            response = await axios.get(`${config.baseUrl}/api/indexer/assets`, {
                params: { address },
                headers: { Cookie: cookie },
            });
        } catch (error) {
            throw new Error(`Failed to fetch balance for address ${address}: ${error}`);
        }

        const balance = response.data?.data?.[0]?.balances?.[0]?.formatted_balance;

        if (balance === undefined) {
            throw new Error(
                `No balance found for address: ${address}. Response: ${JSON.stringify(response.data)}`
            );
        }

        return balance;
    }
}