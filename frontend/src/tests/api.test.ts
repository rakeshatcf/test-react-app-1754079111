import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/v1/health', (req, res, ctx) => {
    return res(ctx.json({ status: 'healthy' }));
  })
);

describe('API Integration Tests', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('health check endpoint returns success', async () => {
    const response = await fetch('/api/v1/health');
    const data = await response.json();
    expect(data.status).toBe('healthy');
  });
});