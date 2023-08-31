---
title: Land of Emunah
url: https://loe.josephlikescode.com/
shortDescription: Land of Emunah is my wife's senior art show that her and her partner had to move online. I was responsible for the digital implementation of their design.
thumbnailUrl: https://res.cloudinary.com/josephdangerstewart/image/upload/c_scale,q_auto:good,w_500/v1613421760/joseph-likes-code/land-of-emunah/land-of-emunah-thumbnail.png
thumbnailAltText: Land of Emunah welcome/description screen
id: land-of-emunah
---

[Website](http://loe.josephlikescode.com/), [Github Repository](https://github.com/josephdangerstewart/land-of-emunah)

Key technologies used:

* [TypeScript](https://www.typescriptlang.org/)
* [NextJS](https://nextjs.org/)
* [styled-components](https://styled-components.com/)
* [Terraform](https://www.terraform.io/)
* [Ansible](https://www.ansible.com/)
* [Google Sheets API](https://developers.google.com/sheets/api/guides/concepts)
* [reCAPTCHA Enterprise](https://cloud.google.com/recaptcha-enterprise)
* [AWS S3](https://aws.amazon.com/s3/)
* [DigitalOcean](https://www.digitalocean.com/)
* [NGINX](https://www.nginx.com/)
* [Directus](https://directus.io/) (formerly)
* [Docker](https://www.docker.com/) (formerly)
* [Cloudinary](https://cloudinary.com/) (formerly)

Land of Emunah is my wifes senior art show. Every year, BFA art students at Biola put on a studio show for their capstone class. My wife, Hannah, and her partner, [Megan Yip](https://www.meganyipart.com/), had planned on doing a show around the theme of board games and interactivity. Unfortunately, my wife's senior show was disrupted by the Covid-19 pandemic, which forced Hannah and Megan to plan. Thus was born, Land of Emunah, an interactive branching narrative experience that has you navigating encounters in a mystical fantasy world. The experience culminates in an invitation for the user to contribute their own ideas to the world of Emunah. My role in the project was to bring Hannah and Megan's vision to life.

The site is a fairly straightforward NextJS site using NextJS's built in API capabilities to build the required server functionality, which is mostly just handling form submissions. Styling is handled via styled-components (CSS-in-JS is _awesome_). In subsequent, I've used motion libraries like [react-spring](https://www.react-spring.dev/) and [framer motion](https://www.framer.com/motion/), but in land of emunah, I rolled my own animation functionality with styled components and keyframes (_highly_ recommend either of the mentioned libraries).

The project is currently deployed to a DigitalOcean droplet provisioned via terraform (which manages all of the cloud resources for this project). It sits behind an NGINX proxy, which is configured by Ansible. I went with Ansible for configuration management because it's agentless which is an especially big advantage for my limited DigitalOcean droplets.

For content management, I had originally chosen [Directus](https://directus.io/), which is basically a wrapper around a MySQL database, deployed via docker to a DigitalOcean droplet. I had chosen this design because Hannah and Megan had planned on iterating and building on the content in the project. So I wanted them to have easy access to the content without needing to fiddle with git and yaml files or learning SQL while still having structured data to access on the frontend. However, due to cost reasons, and because the project did not see as much iteration as anticipated, I migrated the project away from Directus. Now content for the site lives in yaml files in the repository. This is better because there's less risk of service disruption (Directus took up a lot of memory on my tiny droplet) and the content is now managed in version control.

Prompt and contact submissions were a little bit more complicated to migrate away from Directus, since user submitted content can't be statically stored in yaml files. With Directus, user submissions were written to the Directus database (with file attachments being uploaded to cloudinary). Now, user submissions are uploaded to a google sheet and file attachments are uploaded to S3 (I switched from cloudinary because S3 is easier to manage with terraform). This works great for a small traffic site like Land of Emunah, and uploading to a google sheet has the added bonus of free email notifications.
