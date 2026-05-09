from collections import deque
from datetime import datetime, timedelta, timezone


class InMemoryRateLimiter:
    def __init__(self, limit_per_minute: int):
        self.limit_per_minute = limit_per_minute
        self._events: dict[str, deque[datetime]] = {}

    def allow(self, key: str) -> bool:
        now = datetime.now(timezone.utc)
        window_start = now - timedelta(minutes=1)
        q = self._events.setdefault(key, deque())
        while q and q[0] < window_start:
            q.popleft()
        if len(q) >= self.limit_per_minute:
            return False
        q.append(now)
        return True
