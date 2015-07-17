#Detox

    Detox - Because most pages are crap
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

#### Use as your bookmark's URL
```js
javascript:(function(){for(var%20y=document.getElementsByTagName(%22link%22),u=document.getElementsByTagName(%22script%22),k=document.getElementsByTagName(%22style%22),i=0;i%3Cy.length;i++)%22stylesheet%22===y[i].rel%26%26(y[i].href=null);for(var%20i=0;i%3Cu.length;i++)u[i].src=null,u[i].innerHTML=null;for(var%20i=0;i%3Ck.length;i++)k[i].innerHTML=null;document.head.appendChild(document.createElement(%22style%22)).innerHTML=%22*{color:%230A0;background:%23000;font:16px/26px%20Monaco,monospace;}body{margin:0px%20auto;max-width:60%25;}a{color:%230F0;}img{display:none;}%22})();
```
