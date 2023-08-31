---
title: Hannah Creates Art
url: https://hannahcreatesart.com/
shortDescription: hannahcreatesart.com is my wifes art portfolio that she designed and I implemented/deployed.
thumbnailUrl: https://res.cloudinary.com/josephdangerstewart/image/upload/c_scale,q_auto:good,w_500/v1613422013/joseph-likes-code/hannah-creates-art/hannah-creates-art-thumbnail.png
thumbnailAltText: hannahcreatesart.com homepage
id: art-portfolio
---

[Website](http://hannahcreatesart.com/), [Github Repository](https://github.com/josephdangerstewart/hannah-creates-art)

Key technologies used:

* [TypeScript](https://www.typescriptlang.org/)
* [NextJS](https://nextjs.org/)
* [styled-components](https://styled-components.com/)
* [React Sprint](https://www.react-spring.dev/)
* [NGINX](https://www.nginx.com/)
* [DigitalOcean](https://www.digitalocean.com/)

[hannahcreatesart.com](http://hannahcreatesart.com/) is a my wifes art portfolio account that she designed and I implemented. It features very fast load times, satisfying yet restrained motion design, simple and clean navigation, and elegant show cases of my wifes beautiful work.

The site was built on top of NextJS and leverages react spring for smooth animations and style-components for styling. It is deployed to a DigitalOcean droplet which is managed by a terraform configuration. It sits behind an NGINX proxy so I can run other sites from the same node. Content for the site is stored as static yaml files since that was the easiest data storage at the time, it's managed under version control, and my wife can easily ask me to update things for her. Realistically, the content doesn't change much, so a more flexible data storage solution has not proved necessary.
