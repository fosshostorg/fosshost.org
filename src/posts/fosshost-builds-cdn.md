---
title: Fosshost builds CDN
date: 2020-09-18
summary: Fosshost builds open source, any cast CDN in its continued work to support the open source community.
author: Thomas Markey 
---

We're excited to announce that we are developing an anycast CDN for DNS and project mirrors in partnership with [AS34553](https://natesales.net/network). When complete, the CDN will offer anycast DNS and mirror caching services from around the globe, decreasing latency and increasing availability for these services.

Authoritative/secondary DNS and HTTP/rsync mirroring is in the pipeline but we're open to other anycast services as well. We're working to create a flexible anycast platform that will be able to scale to the needs of the open source community.

More details to come (and source code!) but the CDN is based around existing open source daemons and a provisioning system to orchestrate everything. We're hoping to keep it 100% anycast with all content living at the edge, but may have to result to a few central origin nodes depending on the size and scope of content being hosted.

We're still in the early development and testing stages and are looking for hosting sponsors that are able to provide IPv4 and IPv6 BGP feeds and/or IXP access. Our current BGP sponsors include AS34553 and Packet.net which both provide hosting capacity and IP transit. If your project might be interested in other anycast services, feel free to jump in on [IRC](/contact) and we'd be happy to chat about it!

There are many uses of the fosshost CDN, such as ensuring that open source remains accessible in third world, developing countries, for example where there is a lack of internet due to poor infrastructure or economy.  If you are a third world country or organisation looking to bring change to the open source community, we would be happy to talk with you.
