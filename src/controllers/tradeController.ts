import { Request, Response, Router } from 'express';
import TradeService from '../services/tradeService';

const router: Router = Router();

router.get('/:pair', async (req: Request, res: Response) => {
  const pair = req.params.pair;
  const tradeService = new TradeService();

  try {
    const cumulativeDelta = await tradeService.getCumulativeDelta(pair);
    res.json({ cumulativeDelta });
  } catch (error) {
    console.error('Error fetching trade history:', error);
    res.status(500).json({ error: 'Error fetching trade history' });
  }
});

export default router;
