/* ===================== RACE CONDITION IN JAVASCRIPT =====================
Definition:
    -   A race condition occurs when multiple asynchronous operations access
        and modify shared data, and the final result depends on the execution order.

    -   Even though JavaScript is single-threaded, async tasks can interleave,
        causing unpredictable results.

----------------------------------------------------------------------- */
/* ===================== PROBLEM EXAMPLE ===================== */
let counter = 0;

async function increment() {
    const current = counter;        // Read shared state
    await Promise.resolve();        // Async pause
    counter = current + 1;          // Write shared state
}

increment();
increment();

setTimeout(() => {
    console.log("Wrong counter value:", counter); // 1 (expected 2)
}, 0);

/*
Why this happens:
    - Both calls read counter = 0
    - Both update counter to 1
    - Execution order causes data loss
*/
/* ===================== HOW TO HANDLE RACE CONDITION ===================== */

/* Solution 1: Serialize with await */
let safeCounter = 0;

async function safeIncrement() {
    safeCounter++;
}

(async () => {
    await safeIncrement();
    await safeIncrement();
    console.log("Safe counter:", safeCounter); // ✅ 2
})();


/* ✅ Solution 2: Use a Mutex (Lock) */
class Mutex {
    private locked = false;
    private queue: (() => void)[] = [];

    async lock(): Promise<() => void> {
        return new Promise(resolve => {
            if (!this.locked) {
                this.locked = true;
                resolve(this.unlock.bind(this));
            } else {
                this.queue.push(() => resolve(this.unlock.bind(this)));
            }
        });
    }

    private unlock() {
        if (this.queue.length > 0) {
            const next = this.queue.shift();
            next && next();
        } else {
            this.locked = false;
        }
    }
}

const mutex = new Mutex();
let lockedCounter = 0;

async function lockedIncrement() {
    const unlock = await mutex.lock();
    try {
        const current = lockedCounter;
        await Promise.resolve();
        lockedCounter = current + 1;
    } finally {
        unlock();
    }
}

lockedIncrement();
lockedIncrement();

setTimeout(() => {
    console.log("Mutex counter:", lockedCounter); // ✅ 2
}, 0);


/* ===================== KEY TAKEAWAYS =====================
- Race conditions happen due to async interleaving, not multi-threading
- Shared mutable state is the main cause
- Prevent using proper sequencing or locking mechanisms

Interview One-liner:
"A race condition occurs when async operations access shared state and
the result depends on execution order."
*/
