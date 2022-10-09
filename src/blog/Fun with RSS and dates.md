---
title: Hello again, reader (or, fun with RSS and UTC)
layout: blog
tags: 
- posts
- RSS Only
- code
date: 2022-09-29T07:00:00-07:00
updated: 2022-10-09T23:00:00-07:00
permalink: "{{ page.date | postDate | date: '%Y/%m/%d' }}/{{ title | slugify }}/"
---

I started using RSS feeds in 2019, and they've helped me keep track of those more obscure and less active blogs. Setting up my own RSS feed? That was first on my to-do list after initial deployment. Seemed straightforward enough with [Eleventy's plugin](https://www.11ty.dev/docs/plugins/rss/).

Upon plugging in my own feed on [The Old Reader](https://theoldreader.com/), I soon discovered a formatting goof. My initial "Hello, reader" post not only had a title in its template, but put its title in the content, which made for an infelicitous doubling:

### Hello, reader

# Hello, reader

<br>

_Welp, time to adjust my blog layout to pull the title from the page! Great, now I no longer need to re-type the title ... let's push this up, deploy right away..._

_Shoot, now my "Hello, reader" post shows up twice in the feed! At least the second one isn't a double-header..._

I initially chalked this up to the vagaries of my feed reader's cache, but looking at my feed's XML file, I could only see one "Hello, reader" entry, one that was updated September 29, 2022. It took a chunk of time to realize that that's neither when my post was written nor updated! Suddenly, one of Eleventy's [Common Pitfalls](https://www.11ty.dev/docs/dates/#dates-off-by-one-day) had become relevant. The problem was twofold: 

- That initial double-header post was created on September 28, 2022, UTC - not on September 27 (the date in my locale).
- My permalink was dependent on a page's `Created` date, which meant that the second post lived at a subtly different URL - `/2022/09/29/` instead of `/2022/09/28/`. (This became clear when I found my site opened on my phone, refreshed the page, and watched my first post's date leap forward a day.) I had effectively hosed my actual "first post," the ghost of which was commemorated on my feed reader.

My solution was also two-fold: 

- I added a date filter. [Luxon](https://moment.github.io/luxon/#/) is already one of Eleventy's dependencies. I just needed to update my `.eleventy.js` with a filter (modified with gratitude from Stephanie Eckles's [11ty Rocks!](https://11ty.rocks/eleventyjs/dates/#postdate-filter)) to consistently display my dates.
- Despite my changes, though, my rascally permalink insisted that "Hello, reader" was created on September 29. This was because I had been using Eleventy's `Created` key word to organize my posts. Static dates to the rescue: I changed the date to `2022-09-28T07:00:00` and resuscitated [https://joekrall.com/2022/09/28/hello-reader/](https://joekrall.com/2022/09/28/hello-reader/).

All this work didn't bust the cache neither my feed reader, nor yours, I suspect. The double-header initial post and its double remained. So, with apologies to everyone following along, I changed the name of my feed from `feed.xml` to `atom.xml`. 😬

Whew. Really simple syndication, eh? What better place to make an RSS-only post?