---
title: License Management
description: How to use Licenses to grant or restrict application version to customers
sidebar:
  order: 5
---

In this guide, we will walk you through the process of using the License management feature to be able to control the versions of an application that an end-customer has access to.

> The licensing feature is in beta, if you would like to access the feature reach out to us either on Discord or by sending an email to pmig@glasskube.com to request access to the feature. 

Through the License management tab , software vendors now have a wat to manage the versions of software their customers have access to. Most software vendors offer different pricing plans, delivering different feautres and differing levels of functionality. Vendors searving end-customers in on-prem environments need the granularity to be able to grant or remove access to applications at the version level and that what we have delivered in the first beta version on the licensing feature.

### License features: 

1. Each license is linked to a single `customer/application` pairing. 
2. Each license grants a customer access to one or multiple application versions.
3. Once an application version has been granted via a license, it can't be revoked (currently working on the version revoking functionality).
4. A customer can be associated multiple licenses.
5. License edits are reflected in the customer portal in real time.

### How to use it:

If you don’t see the feature yet, reach out, and we’ll enable it for you. Once you’re in, here’s how it works:

1. **Create a Customer:** If you haven't already
2. **Navigate to the License mgmt tab and click "Create a License"**
3. **Give It a Name**
4. **Set an Expiration Date**
5. **Assign to an Application**
6. **Choose the version/s of the app you would like to grant the customer access to**
7. **Link to the Customer**
8. **Save:** Hit "Save," and you’re done! 

The customer can now access and deploy the assigned application version/s directly from their customer portal.

![license](NEED_TO_ADD_IMAGE)

> **Docker registry authentication:** If your application artifacts are stored in a private OCI registry, you can use the license as the authentication method to grant customer access. In the license configuration panel add the credentials needed to unlock the specified application versions.

Licensing walkthrough: 

[https://www.youtube.com/watch?v=qh-ewkWxRj4](https://www.youtube.com/watch?v=qh-ewkWxRj4)

[![Watch the video](NEED_TO_ADD_IMAGE)](https://www.youtube.com/watch?v=qh-ewkWxRj4)


**Want to access the Beta Licensing feature? Let us know via email!**