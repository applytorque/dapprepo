import { ethers } from "ethers";
import { Interface } from "@ethersproject/abi";

// If you want to avoid using `any`, you could define a type for your ABI elements,
// but for broad compatibility and simplicity, `any[]` is commonly used.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ContractABI = any[];

// Initialize the contract
export function getContract(
  address: string,
  abi: Interface | ContractABI, // Using ContractABI type here
  signerOrProvider: ethers.Signer | ethers.providers.Provider // Corrected type for Provider
) {
  return new ethers.Contract(address, abi, signerOrProvider);
}


