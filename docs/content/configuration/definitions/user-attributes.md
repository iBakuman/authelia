---
title: "User Attributes"
description: "User Attributes Definitions Configuration"
summary: "Authelia allows configuring reusable user attribute definitions."
date: 2024-11-03T21:16:31+11:00
draft: false
images: []
weight: 199100
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

The user attributes section allows you to define custom attributes for your users using Common Expression Language (CEL).
These attributes can be used at the current time to:

- Enhance OpenID Connect claims with dynamic values

## Configuration

{{< config-alert-example >}}

```yaml {title="configuration.yml"}
definitions:
  user_attributes:
    # Boolean attribute example
    is_admin:
      expression: '"admin" in groups'

    # String attribute example
    department:
      expression: 'groups[0]'

    # Number attribute example
    access_level:
      expression: '"admin" in groups ? 10 : 5'
```

## Options

This section describes the individual configuration options. Currently, these attribute definitions are used in the
[OpenID Connect 1.0 Provider](../identity-providers/openid-connect/provider.md#pol).

### expression

The CEL expression for this attribute.
