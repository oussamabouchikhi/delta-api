// src/models/trade.ts
interface Trade {
  type: 'buy' | 'sell';
  tokens: number;
}

export default Trade;
