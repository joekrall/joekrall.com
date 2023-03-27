---
title: How I learned to email from this domain 
layout: blog
tags:
- posts
updated: 2023-03-27 10:00:00Z
created: 2023-03-27 10:00:00Z
permalink: "{{ page.date | postDate | date: '%Y/%m/%d' }}/{{ title | slugify }}/"
---

I started life on the internet in middle school with a Hotmail account and a penchant for lurking in the old lit forums Sparknotes used to have. When creating this account, I discovered I could stick a period in the middle of my username rather than the usual string of random-or-not numeric characters right before the @. This impressed me as fun and cool. To this day, I think email usernames (and domain names in general) are cool. 

In any case, learning how to email from [this domain](https://joekrall.com) was the fun pre-challenge to building out this personal site, and below is more-or-less how I did it. The following owes a big debt to Jeffrey Paul's exhaustive and opinionated ["Stop Emailing Like a Rube."](https://sneak.berlin/20201029/stop-emailing-like-a-rube/) In the interest of highlighting different choices about creating, curating, and protecting an online identity, I list out my own steps. As an Internet user still interested in email as a tool of social connection (and in being a bit less beholden to Google), I hope like-minded friends and strangers find this guide useful.

### Steps
0. Get a password manager. 1Password is closed-source and cloud-based; Bitwarden is open-source and cloud-based (and has a free tier); KeepassXC is open-source and runs locally (and is free). Just don't save your passwords in-browser and reuse the same cruddy password1234 for everything. And don't use [LastPass](https://palant.info/2022/12/26/whats-in-a-pr-statement-lastpass-breach-explained/).

1. Make an "admin" email account you'll use to manage domain registration and hosting. I personally can't argue with a [free Proton email account](https://proton.me/mail/pricing).

2. With your admin email, register a domain.  *What domain name to pick?* I gave too much thought to this, and ended up reading a great deal about the economics and politics of the [Domain Name System](https://www.cloudflare.com/learning/dns/what-is-dns/) (DNS). There are two pieces to a domain name that I, at least, worried about:
	- How to pick among [top-level domains](https://en.wikipedia.org/wiki/Top-level_domain) (TLDs)? In my opinion, if you've got the opportunity, go for .com or .org. Their prices are slowly increasing, and regulation has been less consistent the last ten years. But at the end of the day, I'd say most people recognize these TLDs (which is important, especially when writing down your website or giving an email address over the phone). Moreover, I'd still bank on a slow-but-steady increase in the price of [.com](https://en.wikipedia.org/wiki/.com), managed by Verisign, than trust the much-less regulated [.dev](https://en.wikipedia.org/wiki/.dev) (owned by Google) or [.me](https://en.wikipedia.org/wiki/.me) (Montenegro's country code, operated by a company co-founded by [GoDaddy](https://domain.me/about-me/#me-as-a-company)) . That said, one can do some fun things with goofy new [gTLDs](https://benjamin.pizza) and [domain](https://cr.yp.to/) [hacks](https://freedom.to). 
	- How to pick among actual names? I also gave too much thought to this, and consider it a mercy that I did not buy more than seven domains in due course. In the end, I went for my own name. My deciding factors: 1) I planned have a personal website, 2) I'm drawn to WYSIWYG personas rather than anonymous social interaction, and 3) as long as I'm working in software, I'll be online, and it's worthwhile for me to connect avocation with work. If one of these factors is missing for you, the sky's the limit. 

3. With your admin email, set up an account with a domain registrar and buy your domain. 
	- How to pick among registrars? Chris Krycho [recommended](https://v5.chriskrycho.com/journal/how-i-publish-this-site/#domain-registration) Hover, and [that's](hover.com) who I went with. Among other benefits, Hover adds [WHOIS privacy](https://help.hover.com/hc/en-us/articles/217282337-Domain-WHOIS-Privacy) to the cost of your domain, so your personally-identifying information isn't published for anybody to [look up](https://tucowsdomains.com/whois-search/).
	- How much to pay for it all? Right now, based on a few searches, my premature guess is that the run-of-the-mill .com or .org is about $14 or $15 annually. More importantly, you'll want to consider how long you'll want to register that domain. This could be anywhere from one to ten years. Maxing out that registration may be worth it to let you lock in that annual price. (Be wary of "sale" domains that have a steeply-discounted first year.)

4. With your admin email, set up an account with Cloudflare and follow their directions to point your domain to their servers. In other words, Cloudflare will actually own the server with the address to which your fresh new domain name points. You may be fine with using Hover's nameservers, or those of whoever you used to buy your domain. I picked Cloudflare because
	- People smarter and with more experience than me use it.
	- Cloudflare has a good web interface and lots of resources to guide newbies through setup.
	- It's free, *and* they'll give you a [free SSL certificate](https://www.cloudflare.com/ssl/). 

4. Make a *new* email account with an email provider. The rabbit hole can go deep here as well! I had two friends recommend [Fastmail](https://www.fastmail.com/) (and one gave me a 10% code), and that's who I went with. I've had other friends find happiness with [Proton](https://proton.me/mail) and [Tutanota](https://tutanota.com/), but Fastmail's offerings are cheaper, it's a mature product, it offered a ton of support for aliasing and custom domains (including dedicated hand-holding for folks on Cloudflare's nameservers), and it worked with the iOS Mail app.^[*Oh hey iOS users! Your Mail app may have a default setting for emptying the trash - say, a week - if you set up IMAP with them. Make the setting "never" so that you don't lose a bunch of emails like I did.* 🤦‍] My one peeve is that its web client doesn't allow me to pop out replies like Gmail or Outlook.
	- At the end of the day, email is an inherently insecure medium. Even if you encrypt with your PGP key, even if your servers are under Swiss jurisdiction, an email is just one forward away from the rest of the world.

5. Send emails! There's a bit of fun you can have here, using different user names to sign up for different services. I wouldn't take this as far as creating a distinct username for or every single service; either your list of "valid" email addresses balloons, or you set your mailbox to "catch-all" emails sent to any address at your domain (when I tried that, I started getting spam within two days). My rough practice is to have a one username for online services and another for human correspondence. Speaking of which, feel free to say [hi](mailto:hello@joekrall.com)!

### Postlude: Ownership
Jeffrey Paul begins his article with "If your email address ends with a domain name that you don’t own, you’re doing it wrong, and professional people are laughing at you." I take issue with two words - *own* and *professional*. 

Regarding "ownership" of a domain name, I came back up from the TLD rabbit hole with a good deal of skepticism regarding the management of the DNS. Heed the [words](https://blog.ayjay.org/on-not-owning-my-turf/) of one of my favorite bloggers. The blockchain and "self-host everything" aficionados are doing interesting work (I stumbled upon [Handshake](https://handshake.org/) and [Umbrel](https://umbrel.com/) in my travels), but for now, owning a domain depends on trusting people who make a great deal of money managing the servers that make the Internet happen. 

Regarding "professional people," I have to return, as you must, for the reasons you get on the internet. I traverse this spidering conglomeration of pages because people share words and ideas that I want to follow, and as much as I love the long-term durability of printed matter, the distance between reader and author tends to be smaller on the web than with a book. In the course of learning how to email from my own domain and building out a personal site, I've started new friendships and grown older ones. As a software engineer, my personal site does have a relationship with my profession, but the end of the day, I like being an amateur internet user, which, among other things, means I still think usernames are cool.

*Much thanks to Brian for corrections and suggestions as I drafted this post.*
