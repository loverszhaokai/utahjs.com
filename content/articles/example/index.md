--- 
title: Example page for authoring articles
author: Ryan Florence
date: 2011-07-01
---

If your article has assets, create a folder like this one and stick them there, and name the article index.

Markdown
====

Here's a bulleted list:

  * bullets
  * bullets

Here's a numbered list:

  1. item
  2. item

This is one paragraph.
This sentence is part of that paragraph.

This is a new paragraph.

[Google](http://google.com)

Code Blocks
-----------

Include code blocks like this:

    var foo = bar;

Or from a file like this:

<%= code 'foo.js' %>

The path is relative to the article's folder.

Images
------

Place your image in the article's directory and ...

<%= img 'burger.png' %>

Or just get the image path if you need to do something fancier:

<%= img_path 'burger.png' %>


