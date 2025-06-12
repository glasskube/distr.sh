---
title: Job Scheduling
description: Configure automated cleanup jobs to prune metrics and statuses from your Distr database.
sidebar:
  order: 5
---

Distr includes built-in job scheduling for database pruning to prevent unbounded growth of metrics and status entries.

## Docker Compose Configuration

Configure cleanup jobs using environment variables in your [`.env` file](https://github.com/glasskube/distr/blob/8407082b256c23ebb2b27629722d6362c9d0aecd/deploy/docker/.env#L66-L75):

```bash
# Cron interval for cleaning deployment revision statuses older than STATUS_ENTRIES_MAX_AGE
CLEANUP_DEPLOYMENT_REVISION_STATUS_CRON="*/5 * * * *"
# Cron interval for cleaning deployment target statuses older than STATUS_ENTRIES_MAX_AGE  
CLEANUP_DEPLOYMENT_TARGET_STATUS_CRON="*/5 * * * *"
# Cron interval for cleaning metrics older than METRICS_ENTRIES_MAX_AGE
CLEANUP_DEPLOYMENT_TARGET_METRICS_CRON="*/5 * * * *"
# Cron interval for cleaning log entries older than LOG_RECORD_ENTRIES_MAX_COUNT
CLEANUP_DEPLOYMENT_LOG_RECORD_CRON="*/5 * * * *"
```

If these variables are not set, no cleanup jobs are scheduled.

## Kubernetes Configuration

When deploying Distr to [Kubernetes](https://github.com/glasskube/distr/blob/8407082b256c23ebb2b27629722d6362c9d0aecd/deploy/charts/distr/values.yaml#L196-L213), cleanup jobs run as CronJobs:

```yaml
cronJobs:
  - name: deployment-log-record-cleanup
    labels:
      distr.sh/job: deployment-log-record-cleanup
    args: [cleanup, DeploymentLogRecord]
  - name: deployment-revision-status-cleanup
    labels:
      distr.sh/job: deployment-revision-status-cleanup
    args: [cleanup, DeploymentRevisionStatus]
  - name: deployment-target-metrics-cleanup
    labels:
      distr.sh/job: deployment-target-metrics-cleanup
    args: [cleanup, DeploymentTargetMetrics]
  - name: deployment-target-status-cleanup
    labels:
      distr.sh/job: deployment-target-status-cleanup
    args: [cleanup, DeploymentTargetStatus]
```