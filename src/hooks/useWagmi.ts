import { useMemo } from "react";
import { JsonRpcProvider, FallbackProvider } from "@ethersproject/providers";
import { useConnectorClient, useClient, Config } from "wagmi"; // Ensure these hooks are available in your version of wagmi
import type { Account, Chain, Client, Transport } from "viem"; // Assuming these are your custom types

// Define an interface for the transport objects
interface TransportObject {
  url: string; // Define the expected structure of your transport objects
}

export function walletClientToSigner(client: Client<Transport, Chain, Account>) {
  const { account, chain, transport } = client;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new JsonRpcProvider(transport.url, network);
  const signer = provider.getSigner(account.address);
  return signer;
}

export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: client } = useConnectorClient<Config>({ chainId });
  return useMemo(() => (client ? walletClientToSigner(client) : undefined), [client]);
}

export function publicClientToProvider(client: Client<Transport, Chain>) {
  const { chain, transport } = client;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };

  if (transport.type === "fallback") {
    const providers = transport.transports.map(
      ({ url }: TransportObject) => new JsonRpcProvider(url, network) // Use the TransportObject type for destructuring
    );
    return providers.length === 1 ? providers[0] : new FallbackProvider(providers);
  }
  return new JsonRpcProvider(transport.url, network);
}

export function useEthersProvider({ chainId }: { chainId?: number } = {}) {
  const client = useClient<Config>({ chainId });
  return useMemo(() => (!client ? undefined : publicClientToProvider(client)), [client]);
}
