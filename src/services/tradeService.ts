// src/services/tradeService.ts
import Trade from '../models/trade';
import apiClient from '../utils/apiClient';

class TradeService {
  public async getCumulativeDelta(pair: string): Promise<number> {
    const tradeHistory = await this.fetchTradeHistory(pair);
    return this.calculateCumulativeDelta(tradeHistory);
  }

  private async fetchTradeHistory(pair: string): Promise<Trade[]> {
    try {
      const response = await apiClient.get(`/trades?pair=${pair}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch trade history');
    }
  }

  private calculateCumulativeDelta(trades: Trade[]): number {
    let delta = 0;

    for (const trade of trades) {
      if (trade.type === 'buy') {
        delta += trade.tokens;
      } else if (trade.type === 'sell') {
        delta -= trade.tokens;
      }
    }

    return delta;
  }
}

export default TradeService;
