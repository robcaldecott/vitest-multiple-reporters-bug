# Vitest Multiple Reporters Output Bug

Using multiple `reporters` with `vitest` will duplicate the console output.

Note it may actually be running the tests twice?

```
npm run test:ci
```

Produces:

```

 RUN  /Users/caldecor/Projects/vitest-multiple-reporters


 RUN  /Users/caldecor/Projects/vitest-multiple-reporters

 √ src/App.test.tsx > renders
 √ src/App.test.tsx > renders

Test Files  1 passed (1)
     Tests  1 passed (1)
      Time  1.95s (in thread 27ms, 7100.09%)


Test Files  1 passed (1)
     Tests  1 passed (1)
      Time  1.95s (in thread 27ms, 7104.01%)

JUNIT report written to /Users/caldecor/Projects/vitest-multiple-reporters/test-results.xml
JUNIT report written to /Users/caldecor/Projects/vitest-multiple-reporters/test-results.xml
```
