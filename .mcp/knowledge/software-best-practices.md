# Software Development Best Practices (Baseline Guide)

## Purpose
This document defines practical standards and checks to build software that is maintainable, secure, observable, and easy to evolve.

---

## 1) Design principles
- **Prefer simplicity**: avoid “just in case” abstractions.
- **Separation of concerns**: clearly split UI, domain, infrastructure, and data access.
- **High cohesion, low coupling**: modules have a single purpose and minimal dependencies.
- **Explicit contracts**: clear APIs, types, DTOs, schemas (OpenAPI / GraphQL schema).
- **Design for change**: reversible decisions, feature flags, safe migrations.

---

## 2) Code standards
- **Consistent conventions**: lint + formatter enforced (prefer pre-commit hooks).
- **Intent-revealing names**: avoid opaque abbreviations.
- **Small functions**: one reason to change.
- **Context-rich errors**: clear messages; include correlationId/traceId when applicable.
- **Structured logging**: JSON logs with stable fields (service, env, requestId, userId anonymized, etc.).
- **Avoid magic values**: centralize constants and config.

PR checklist (code):
- [ ] Can someone understand it without a walkthrough?
- [ ] Dead code removed; TODOs justified.
- [ ] Edge cases and failures handled.
- [ ] No secrets/tokens/PII leaked in logs.

---

## 3) Git and branching
- **Small, atomic commits** (one logical change per commit).
- **Standard commit messages** (recommended: Conventional Commits):
  - `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`, `perf:`
- **Small PRs**: if it’s > ~300 LOC, split it.
- **Protections**:
  - 1–2 required approvals
  - Required checks (tests, lint, build, security scan)
  - Block merge on failed CI

---

## 4) Testing strategy (test pyramid)
- **Unit tests**: fast, no real I/O, strong coverage of domain logic.
- **Integration tests**: real DB/queues/services in controlled environments (containers when possible).
- **E2E tests**: few and critical; focus on real user journeys.
- **Contract tests** (microservices): verify producer/consumer compatibility.

Rules:
- Tests must be **deterministic** (no flakiness).
- Every bug fix should include a test that reproduces it.

---

## 5) Security baseline
- **Secrets**: never in source control; use a vault/secret manager.
- **Least privilege**: minimal roles, rotate credentials.
- **Input validation**:
  - Always server-side
  - Sanitize where needed
  - Enforce size limits (payloads, file uploads)
- **Dependencies**:
  - Use lockfiles
  - Run SCA scanning (Dependabot/Snyk/etc.)
- **AuthN vs AuthZ**:
  - Authenticate identity, authorize actions
  - Enforce authorization per endpoint/action
- **Common protections**: rate limiting, CSRF where applicable, security headers.

---

## 6) API quality and compatibility
- **Versioning** (when needed): v1/v2 or backward-compatible evolution.
- **Consistent error shape**: stable structure (code, message, details).
- **Idempotency**: for create endpoints that may be retried.
- **API observability**:
  - Metrics: p95/p99 latency, error rate, throughput
  - Distributed tracing when applicable

---

## 7) Data practices
- **Versioned migrations** (no manual drift).
- **Indexes and query review** (EXPLAIN/ANALYZE).
- **Backups are tested** (not just configured).
- **PII**:
  - Encrypt in transit and at rest
  - Minimize collection
  - Mask/anonymize in logs and non-prod

---

## 8) CI/CD baseline
Minimum pipeline:
1. Lint + format check
2. Tests (unit + integration when applicable)
3. Build
4. Security scans (SAST/SCA)
5. Publish artifacts
6. Deploy with safe strategy:
   - canary/blue-green or gradual rollout
   - health checks
   - automated rollback path

Good practices:
- Infrastructure as Code (IaC) reviewed via PR.
- Separate **config** from **code** (12-factor style).

---

## 9) Observability and operations
- **Structured logs**
- **Metrics** (SLIs): availability, latency, error rate
- **Tracing** (distributed systems)
- **Actionable alerts**: fewer, higher-signal alerts (avoid alert fatigue).
- **Runbooks**: clear steps, owners, contacts, safe commands.

---

## 10) Performance and resilience
- Timeouts and retries with backoff (and hard limits).
- Circuit breakers for unstable dependencies.
- Caching where correct (with defined invalidation).
- Latency and payload budgets.

---

## 11) Minimal documentation
- README includes:
  - how to run locally
  - how to test
  - required env vars
- ADRs (Architecture Decision Records) for important decisions.
- Simple diagrams (C4 level 1/2 when helpful).

---

## 12) Definition of Done (DoD)
- [ ] Feature implemented
- [ ] Relevant tests added and CI is green
- [ ] Security considered (secrets, permissions, input validation)
- [ ] Observability added (logs/metrics) when applicable
- [ ] Docs updated
- [ ] Deployment verified (smoke test)
