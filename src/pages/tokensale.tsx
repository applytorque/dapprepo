// pages/tokensale.tsx
import { useState } from 'react';

const TokenSale = () => {
  const [usdtAmount, setUsdtAmount] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission.
    // For this example, we'll just log the USDT amount.
    console.log('USDT Amount:', usdtAmount);

    // You should send this data to your backend or admin for processing.
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="usdtAmount" className="block text-sm font-medium text-gray-700">
            Amount in USDT
          </label>
          <div className="mt-1">
            <input
              type="number"
              id="usdtAmount"
              name="usdtAmount"
              value={usdtAmount}
              onChange={(e) => setUsdtAmount(e.target.value)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
              min="0"
              step="any"
            />
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Buy CICC Tokens
        </button>
      </form>
    </div>
  );
};

export default TokenSale;
