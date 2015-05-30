/*
  Detox - Because most pages are shit
  Copyright (c) 2015, Ryan Kennedy <ry@nkennedy.net>

  Permission to use, copy, modify, distribute, and sell this software
  and its documentation for any purpose is hereby granted without fee,
  provided that the above copyright notice appear in all copies and
  that both the copyright notice and this permission notice appear in
  supporting documentation.  No representations are made about the
  suitability of this software for any purpose.  It is provided
  "as is" without express or implied warranty.

  Usage:
    Simply load this script on any offending webpage (most of them)
    and watch your troubles disappear. Ah, now you can actually read
    the damned thing.

  What:
    Detox is a very, very simple script that crawls a page for
    <link rel="stylesheet">, <style> and <script> tags and removes
    their contents, thus removing much of what makes the web awful.
*/

(function () {
  var y = document.getElementsByTagName('link'),
      u = document.getElementsByTagName('script'),
      k = document.getElementsByTagName('style');
  for (var i = 0; i < y.length; i++) if(y[i].rel === 'stylesheet') y[i].href = null;
  for (var i = 0; i < u.length; i++) u[i].src = null, u[i].innerHTML = null;
  for (var i = 0; i < k.length; i++) k[i].innerHTML = null;
  document.head.appendChild(document.createElement('style')).innerHTML = 
    "*{color:#0A0;background:#000;font:16px/26px Monaco,monospace;}" + 
    "body{margin:0px auto;max-width:60%;}" + 
    "a{color:#0F0;}";
  }
)();