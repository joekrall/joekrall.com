---
title: Hello again, reader (or, fun with RSS and UTC)
layout: blog
tags: 
- posts
- RSS Only
- code
date: "2022-09-29T17:00:00.000-07:00"
updated: "2022-10-09T17:00:00.000-07:00"
permalink: "{{ page.date | isoDate | date: '%Y/%m/%d' }}/{{ title | slugify }}/"
---

I started using RSS feeds in 2019, and they've helped me keep track of those more obscure and less active blogs. Setting up my own RSS feed? That was first on my to-do list after initial deployment. Seemed straightforward enough with [Eleventy's plugin](https://www.11ty.dev/docs/plugins/rss/).

Upon plugging in my own feed on [The Old Reader](https://theoldreader.com/), I soon discovered a formatting goof. My initial "Hello, reader" post not only had a title in its template, but put its title in the content, which made for an infelicitous doubling:

### Hello, reader

# Hello, reader

<br>

_Welp, time to adjust my blog layout! Great, now I no longer need to re-type the title ... let's push this up, deploy right away..._

_Shoot, now my "Hello, reader" post shows up twice in the feed! At least the second one isn't a double-header..._

I initially chalked this up to the vagaries of my feed reader's cache, but looking at my feed's XML file, I could only see one "Hello, reader" entry, one that was updated September 29, 2022. It took a chunk of time to realize that that's neither when my post was written nor updated! Suddenly, one of Eleventy's [Common Pitfalls](https://www.11ty.dev/docs/dates/#dates-off-by-one-day) had become relevant. The problem was twofold: 

- That initial double-header post was created on September 28, 2022, UTC - not on September 27 (the date in my locale).
- My permalink was dependent on a page's `Created` date, which meant that the second post lived at a subtly different URL - `/2022/09/29/` instead of `/2022/09/28/`. (This became clear when I found my site opened on my phone, refreshed the page, and watched my first post's date leap forward a day.) I had effectively hosed my actual "first post," the ghost of which was commemorated on my feed reader.

My solution was also two-fold: 

- I added date filters. [Luxon](https://moment.github.io/luxon/#/) is already one of Eleventy's dependencies. I just needed to update my `.eleventy.js` with a pair of filters (modified with gratitude from Stephanie Eckles's [11ty Rocks!](https://11ty.rocks/eleventyjs/dates/#postdate-filter) and Chris Krycho's [site](https://github.com/chriskrycho/v5.chriskrycho.com/blob/8dbde39a70ec9b8cb110b82ce0c7096e8baa27cc/eleventy/iso-date.ts)) to consistently display my dates, both as bare ISO representations (with timezone!) and human-readable ones.
- Despite my changes, though, my rascally permalink insisted that "Hello, reader" was created on September 29. This was because I had been using Eleventy's `Created` key word to organize my posts. Static dates to the rescue: I changed the date to `2022-09-30T02:00:00` and resuscitated [https://joekrall.com/2022/09/28/hello-reader/](https://joekrall.com/2022/09/28/hello-reader/).

All this work busted the cache of neither my feed reader, nor yours, I suspect. The double-header initial post and its double remained. So, with apologies to everyone following along, I changed the name of my feed from `feed.xml` to `atom.xml`. 😬

Whew. Really simple syndication, eh? What better place to make an RSS-only post?

_Update_: Disappointed by the number of typos left in this admittedly frantic and off-the-cuff missive, I've continued to tweak my use of dates and this post as well. In the end, [adding 11ty's `updated` attribute to my post and updating my `feed.xml`](https://github.com/chriskrycho/v5.chriskrycho.com/blob/80b560fe0e1ff14a5e0b76bd9de0aa744ed3988f/site/_includes/components/atom.njk#L23) helped bust the cache and fix my typos. Thanks [@chriskrycho](https://github.com/chriskrycho)!