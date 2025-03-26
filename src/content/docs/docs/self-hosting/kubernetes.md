---
title: Kubernetes
description: Self-hosting Distr with Kubernetes
sidebar:
  order: 2
---

Distr is available as a Helm chart distributed via ghcr.io.
To install Distr in Kubernetes, simply run:

```shell
helm upgrade --install --wait --namespace distr --create-namespace \
  distr oci://ghcr.io/glasskube/charts/distr \
  --set postgresql.enabled=true --set minio.enabled=true
```

For a quick testing setup, you don't have to modify the values. However, if you intend to use distr in production, please revisit all available configuration values and adapt them accordingly.
You can find them in the reference [values.yaml](https://github.com/glasskube/distr/blob/main/deploy/charts/distr/values.yaml) file.
