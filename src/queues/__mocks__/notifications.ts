import { Queue } from 'bullmq';
import { beforeEach } from 'vitest';
import { mockDeep, mockReset } from 'vitest-mock-extended';

const notificationsQueue = mockDeep<Queue>();

beforeEach(() => {
  mockReset(notificationsQueue);
});

export default notificationsQueue;
