(function() {
    var nl, openCSS, openAnim, animCount, markup, styles, time, writeStyleChar, writeStyles, paused;

    text = "\n/* \n * Thanks to\n * pen#PwLXXP and Jake Albaugh for the demo. \n * And u∕r1ckd33zy for the idea.\n * ...Lets do this. \n */\n/*\n * Edit: For everyone complaining about the speed:\n */\n#speed {\n  display: block; position: fixed;\n  z-index: 100; padding: 5px;\n  top: 15px; left: 26%;\n}\n#speed h4 {\n  display: inline-block; margin: 5px;\n}\n#speed .l {\n  float: left; margin: 1px 5px;\n}\n.pre { \n  overflow: auto;\n  position: fixed; width: 35%;\n  padding: 24px 12px;\n  top: 90px; height: 25%; left: 26%;\n}\n.pre, #speed {\n  background-color: #313744; color: #a6c3d4;\n  transition: left 500ms;\n  border: 1px solid rgba(0,0,0,0.2);\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n/*\n * Move these over...\n */\n.pre, #speed {\n  left: 60% \n}\n/*\n * Now for some HTML. \n */\n#html-text {\n  transition: top 300ms;\n  top: calc(25% + 115px);\n}\n/*\n * Undo some defaults\n */\n\n.bold {\n  font-weight: bold;\n}\n.container {\n  font-family: verdana, arial, helvetica, sans-serif;\n}\n.container a {\n  text-decoration: none; color: #369;\n}\n.container p {\n  margin: 0;\n}\n<!-- What should we create? -->\n\n<!-- Yes.. I know... -->\n\n<div id=\"header\">\n  <div id=\"top\">\n    <span class=\"mainLinks\">my subreddits ▼</span>\n\n    <!-- Guess that gives it away -->\n\n    <span class=\"mainLinks\">\n      <a href=\"http://www.reddit.com\">front</a> - \n      <a href=\"http://www.reddit.com/r/all\">all</a> - \n      <a href=\"http://www.reddit.com/r/random/\">random</a>\n    </span>|\n    <span class=\"mainLinks\">\n      <a href=\"http://www.reddit.com/r/programming\">programming</a> - \n      <a href=\"http://www.reddit.com/r/css\">css</a> - \n      <a href=\"http://www.reddit.com/r/webdev\">webdev</a> - \n      <a href=\"http://www.reddit.com/r/InternetIsBeautiful\">InternetIsBeautiful</a>\n    </span>\n    <a id=\"editLink\" href=\"http://www.reddit.com/subreddits/\">edit »</a>\n  </div>\n#header {\n  width: 100%; position: relative;\n  background-color: #cee3f8;\n  border-bottom: 1px solid #5f99cf;\n  font-size: 9; color: rgb(0, 0, 0);\n}\n#top {\n  text-transform: uppercase; padding: 4px 0;\n  background-color: rgb(240, 240, 240);\n  border-bottom: 1px solid rgb(128, 128, 128);\n}\n#top a {\n  color: rgb(0, 0, 0); text-decoration: none;\n}\n#header a:hover {\n  text-decoration: underline;\n}\n.mainLinks {\n  padding: 0 5px;\n}\n#editLink {\n  float: right; font-weight: bold; padding: 0 5px;\n}\n  <div id=\"bottom\">\n    <a id=\"headerimg\" href=\"http://www.reddit.com/\"></a>\n    <ul id=\"tabs\">\n      <li><a href=\"http://www.reddit.com/r/webdev/\">webdev</a></li>\n      <li><a href=\"http://www.reddit.com/r/programming/comments/31c93i/myself_v103/\">comments</a></li>\n      <li><a href=\"http://www.reddit.com/r/programming/related/31c93i/myself_v103/\">related</a></li>\n      <li><a href=\"http://www.reddit.com/r/programming/duplicates/31c93i/myself_v103/\">other discussions (7)</a></li>\n    </ul>\n  </div>\n</div>\n#headerimg {\n  background-image: url(sprite-reddit.EMWQffWtZwo.png);\n  background-position: 0px -313px;\n  background-repeat: no-repeat; height: 40px;\n  width: 120px; display: inline-block;\n  vertical-align: bottom; margin-bottom: 3px;\n}\n#tabs {\n  list-style-type: none; display: inline-block;\n  margin: 0; padding: 0 5px;\n}\n#tabs li {\n  display: inline; margin: 0 3px;\n  font-weight: bold; font-size: 12px;\n}\n#tabs li a {\n  padding: 2px 6px 0;\n  background-color: #eff7ff;\n  text-decoration: none;\n}\n#tabs li a:hover {\n  text-decoration: none;\n}\n#tabs li:first-child a {\n  background: none; color: black;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n#tabs li:first-child a:hover {\n  text-decoration: underline;\n}\n#tabs li:nth-child(2) a {\n  color: orangered; z-index: 100;\n  background-color: white;\n  border: 1px solid #5f99cf;\n  border-bottom: 1px solid white;\n}\n\n<!-- Now, how about the post that inspired this all? -->\n\n<div id=\"postTitle\">\n  <div class=\"voting\">\n    <div class=\"arrow anim\"></div><div class=\"up arrow\"></div>\n    <div class=\"votes\">79</div>\n    <div class=\"down arrow\"></div>\n  </div>\n  <img src=\"http://b.thumbs.redditmedia.com/izrtBiYP1Uj-U41YqYoy4IqUexEmePspQHyVdJxEoWU.jpg\" width=\"70\" height=\"41\">\n  <div id=\"entry\">\n    <p class=\"title\">\n      <a href=\"http://codepen.io/jakealbaugh/full/PwLXXP/\">Myself – v1.0.3</a>\n      <span class=\"domain\">\n        (<a href=\"http://www.reddit.com/domain/codepen.io/\">codepen.io</a>)\n      </span>\n    </p>\n    <p class=\"tagline\">submitted 1 day ago by \n     <a href=\"http://www.reddit.com/user/l1cache\">l1cache</a>\n    </p>\n    <ul class=\"buttons\">\n      <li><a href=\"http://www.reddit.com/r/webdev/comments/31c9bh/myself_v103/\">5 comments</a></li>\n      <li><a href=\"#\">share</a></li>\n      <li><a href=\"#\">save</a></li>\n      <li><a href=\"#\">hide</a></li>\n      <li><a href=\"http://www.reddit.com/gold?goldtype=gift&months=1&thing=t3_31c9bh\">give gold</a></li>\n      <li><a href=\"#\">report</a></li>\n    </ul>\n  </div>\n</div>\n#postTitle {\n  margin: 7px 5px; overflow: hidden;\n}\n.voting {\n  width: 4.1ex; float: left;\n  margin: 0 7px 4px 0; position: relative;\n}\n.anim {\n  background-position: -84px -818px; opacity: 0;\n   position: absolute; top: 0; left: 11px;\n}\n.arrow {\n  background-image: url(sprite-reddit.EMWQffWtZwo.png);\n  background-repeat: no-repeat;\n  height: 14px; width: 14px;\n  margin: 2px auto; display: block;\n}\n.up {\n  background-position: -63px -818px;\n}\n.votes {\n  text-align: center; color: #c6c6c6;\n  font-weight: bold;\n}\n.down {\n  background-position: -21px -818px;\n}\n#postTitle img {\n  float: left;\n}\n.title {\n  color: blue; margin:0 .4em 1px 0;\n}\n.domain, .domain a, .tagline, .buttons a {\n  margin: 0; font-size: x-small; color: #888;\n}\n.buttons a:hover, .tagline a:hover, #undertaf a:hover {\n  text-decoration: underline;\n}\n.tagline a {\n  text-decoration: none;\n}\n.tagline a:nth-child(2) {\n  font-weight: bold;\n}\n.buttons {\n  margin: 0;\n}\n.buttons li {\n  display: inline-block; padding-right: 4px;\n  font-weight: bold;\n}\n<div id=\"sorting\">\n  <div class=\"top\">\n    <span>all 5 comments</span>\n  </div>\n  <div class=\"bottom\">\n    <span>sorted by:</span>\n    <span id=\"best\">best</span><span class=\"bold\"> ▼</span>\n  </div>\n</div>\n.top {\n  font-size: 16px; margin: 10px 310px 0px 12px;\n  padding-bottom: 3px;  border-bottom: 1px dotted gray\n}\n.bottom {\n  font-size: 12px; color: grey; margin: 0 310px 10px 12px;\n}\n#best {\n  font-weight: bold; text-decoration: underline;\n}<textarea id=\"taf\"></textarea>\n<div class=\"undertaf\">\n  <button>save</button>\n  <span>\n    <a href=\"http://www.reddit.com/wiki/reddiquette\">reddiquette</a>\n    <a href=\"#\">formatting help</a>\n  </span>\n</div>\n#taf, textarea {\n  height: 100px; width: 500px; margin-left: 12px;\n}\n.undertaf {\n  margin: 10px 0 20px 12px;\n}\n.undertaf button, button {\n  padding: 2px 6px 3px;\n}\n.undertaf span, #tas span {\n  margin-left: 265px; font-size: 11px;\n}\n.undertaf a {\n  margin-left: 10px;\n}\n<div class=\"comment\">\n  <div class=\"voting\">\n    <div class=\"arrow anim\"></div><div class=\"up arrow\"></div>\n    <div class=\"down arrow\"></div>\n  </div>\n  <p class=\"tagline\">\n    <a href=\"#\">[-]</a>\n    <a href=\"http://www.reddit.com/user/icemelt7\">icemelt7</a>\n    <span>9 points 1 day ago</span>\n  </p>\n  <p>that was beautiful</p>\n  <ul class=\"buttons\">\n    <li><a href=\"http://www.reddit.com/r/webdev/comments/31c9bh/myself_v103/cq0cxeu\">permalink</a></li>\n    <li><a href=\"#\">save</a></li>\n    <li><a href=\"#\">report</a></li>\n    <li><a href=\"http://www.reddit.com/gold?goldtype=gift&months=1&thing=t1_cq0cxeu\">give gold</a></li>\n    <li><a href=\"#\">reply</a></li>\n  </ul>\n</div>\n.comment {\n  margin: 12px;\n}\n.comment p {\n  margin: 6px 0 0;\n}\n<div class=\"comment\">\n  <div class=\"voting\">\n    <div class=\"arrow anim\"></div><div class=\"up arrow\"></div>\n    <div class=\"down arrow\"></div>\n  </div>\n  <p class=\"tagline\">\n    <a href=\"#\">[-]</a>\n    <a href=\"http://www.reddit.com/user/soulblaz0r\">soulblaz0r</a>\n    <span>2 points 1 day ago</span>\n  </p>\n  <p>W.o.W.</p>\n  <ul class=\"buttons\">\n    <li><a href=\"http://www.reddit.com/r/webdev/comments/31c9bh/myself_v103/cq0at6z\">permalink</a></li>\n    <li><a href=\"#\">save</a></li>\n    <li><a href=\"#\">report</a></li>\n    <li><a href=\"http://www.reddit.com/gold?goldtype=gift&months=1&thing=t1_cq0at6z\">give gold</a></li>\n    <li><a href=\"#\">reply</a></li>\n  </ul>\n</div>\n<div class=\"comment\">\n  <div class=\"voting\">\n    <div class=\"arrow anim\"></div><div class=\"up arrow\"></div>\n    <div class=\"down arrow\"></div>\n  </div>\n  <p class=\"tagline\">\n    <a href=\"#\">[-]</a>\n    <a href=\"http://www.reddit.com/user/thesatchmo\">thesatchmo</a>\n    <span>1 point 8 hours ago</span>\n  </p>\n  <p>That was absolutely brilliant. I really enjoyed watching that.</p>\n  <ul class=\"buttons\">\n    <li><a href=\"http://www.reddit.com/r/webdev/comments/31c9bh/myself_v103/cq0wmqg\">permalink</a></li>\n    <li><a href=\"#\">save</a></li>\n    <li><a href=\"#\">report</a></li>\n    <li><a href=\"http://www.reddit.com/gold?goldtype=gift&months=1&thing=t1_cq0wmqg\">give gold</a></li>\n    <li><a href=\"#\">reply</a></li>\n  </ul>\n</div>\n<div class=\"comment\">\n  <div class=\"voting\">\n    <div class=\"arrow anim\"></div><div class=\"up arrow\"></div>\n    <div class=\"down arrow\"></div>\n  </div>\n  <p class=\"tagline\">\n    <a href=\"#\">[-]</a>\n    <a href=\"http://www.reddit.com/user/r1ckd33zy\">r1ckd33zy</a>\n    <span>4 points 22 hours ago</span>\n  </p>\n  <p>This was fun, right now I all smiles... Now I want to see a website build from scratch like this.</p>\n  <ul class=\"buttons\">\n    <li><a href=\"http://www.reddit.com/r/webdev/comments/31c9bh/myself_v103/cq0glut\">permalink</a></li>\n    <li><a href=\"#\">save</a></li>\n    <li><a href=\"#\">report</a></li>\n    <li><a href=\"http://www.reddit.com/gold?goldtype=gift&months=1&thing=t1_cq0glut\">give gold</a></li>\n    <li><a href=\"#\">reply</a></li>\n  </ul>\n</div>\n\n<!-- Something is missing... -->\n\n<!-- Got it... -->\n/*\n * Just quickly...\n */\n#tas {\n  margin-left: 45px;\n}\n#tas textarea {\n  border: 1px solid rgb(77, 144, 254); border-radius: 3px;\n}\n#tas span {\n  margin-left: 205px;\n}\n#reply {\n  display: none; margin-left: 54px;\n  border-left: 1px dotted #DDF;\n}\n#reply .up {\n  background-position: -84px -818px;\n}\n#reply .comment {\n  margin: 0;\n}\n<div id=\"tas\">\n  <div id=\"compose\">\n    <textarea>[Challenge Accepted](http://yourwebdev.ninja/generate.html)</textarea>\n    <div class=\"undertaf\">\n      <button>save</button>\n      <button>cancel</button>\n      <span>\n        <a href=\"http://www.reddit.com/wiki/reddiquette\">reddiquette</a>\n        <a href=\"#\">formatting help</a>\n      </span>\n    </div>\n  </div>\n</div>\n/*\n * Bear with me here...\n */<div id=\"reply\">\n  <div class=\"comment\">\n    <div class=\"voting\">\n      <div class=\"arrow anim\"></div><div class=\"up arrow\"></div>\n      <div class=\"down arrow\"></div>\n    </div>\n    <p class=\"tagline\">\n      <a href=\"#\">[-]</a>\n      <a href=\"http://www.reddit.com/user/dechat\">dechat</a>\n      <span>just now</span>\n    </p>\n    <p><a href=\"http://yourwebdev.ninja/generate.html\">Challenge Accepted</a></p>\n/*\n * Almost there...\n */\n    <ul class=\"buttons\">\n      <li><a href=\"http://www.reddit.com/r/webdev/comments/31c9bh/myself_v103/cq1bqjs\">permalink</a></li>\n      <li><a href=\"#\">save</a></li>\n      <li><a href=\"#\">report</a></li>\n      <li><a href=\"http://www.reddit.com/gold?goldtype=gift&months=1&thing=t1_cq1bqjs\">give gold</a></li>\n      <li><a href=\"#\">reply</a></li>\n    </ul>\n  </div>\n</div>\n/*\n * Now we just have to click 'save'\n */\n#compose {\n  display: none;\n}\n#reply {\n  display: block;\n}\n\n/*\n * How about that? =)\n */\n\n@-webkit-keyframes uv {\n    0% {\n    opacity: 0; left: 30px; top: -10px;\n  }\n  100% {\n    opacity: 1; left: 11px; top: 0;\n  }\n}\n@keyframes uv {\n    0% {\n    opacity: 0; left: 30px; top: -10px;\n  }\n  100% {\n    opacity: 1; left: 11px; top: 0;\n  }\n}\n\n/*\n * Upvotes for everyone!\n */\n\n.arrow.anim {\n  -webkit-animation: uv 500ms linear forwards;\n          animation: uv 500ms linear forwards;\n}\n\n<!--\n    Thanks again to Jake Albaugh for the CSS demo:\n    http://codepen.io/jakealbaugh/full/PwLXXP/\n -->";

    nl = true;
    openCSS = false;
    openAmin = false;
    animCount = 0;

    writeStyleChar = function(which) {
      markup = $('#html-text').html();
      styles = $('#style-text').html();

      switch (which) {
        case '@':
          if (nl) {
            //css
            styles += '\n\n' + which;
            openCSS = true;
            openAnim = true;
          } else if (!openCSS) {
            //html
            markup += which;
          }
        break;

        case '/':
          if (nl) {
            //css
            styles += '\n\n' + which;
            openCSS = true;
          } else if (openCSS) {
            styles += which;
            openCSS = false;
          } else if (!openCSS) {
            //html
            markup += which;
          }
        break;

        case '.':
          if (nl) {
            styles += '\n\n' + which;
            openCSS = true;
          } else if (openCSS) {
            styles += which;
          } else if (!openCSS) {
            //html
            markup += which;
          }
        break;

        case '#':
          if (nl) {
            styles += '\n\n' + which;
            openCSS = true;
          } else if (openCSS) {
            styles += which;
          } else if (!openCSS) {
            //html
            markup += which;
          }
        break;

        case '}':
          if (openAnim) {
            styles += which;
            if (animCount > 1) {
              animCount = 0;
              openAnim = false;
              openCSS = true;
            } else {
              animCount += 1;
              openAnim = true;
              openCSS = true;
            }
          } else if (openCSS) {
            styles += which;
            openCSS = false;
          } else if (!openCSS) {
            //html
            markup += which;
          }
        break;

        default:
          if (openCSS) {
            styles += which;
          } else if (!openCSS) {
            //html
            markup += which;
          }
      }

      nl = ((which === '\n') ? true : false);

      $('#style-text').html(styles);
      $('#html-text').html(markup);
      myMarkup = $("<div />").html(markup).text();
      $('.container').html(myMarkup);
      $('#style-tag').html(styles);
    };

    writeStyles = function(message) {
      if (!paused) {
        var pre;
        if (index < message.length) {
          pre = document.getElementById('style-text');
          pre.scrollTop = pre.scrollHeight;
          pres = document.getElementById('html-text');
          pres.scrollTop = pres.scrollHeight;
          writeStyleChar(message[index++]);
          setTimeout((function() {
            writeStyles(message, time);
          }), time);
        }
      }
    };

    $('body').append("  <style id=\"style-tag\"></style><div class=\"container\"></div><pre class=\"pre\" id=\"html-text\"></pre><pre class=\"pre\" id=\"style-text\"></pre>");

    var time = 16;
    index = 0;

    $('#slider').on('input change', function() {
      time = $(this).val();
    })
    $('#pause').on('click', function() {
      if (paused) {
        paused = false;
        $(this).text('[pause]');
        writeStyles(text);
      } else {
        paused = true;
        $(this).text('[resume]');
      }
    })

    writeStyles(text);

  }).call(this);