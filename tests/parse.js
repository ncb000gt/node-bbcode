var bbcode = require('../lib/bbcode');

require('should');

describe('bcrypt', function() {
  describe('#parse', function() {
    it('should parse [b] to <strong>', function() {
      bbcode.parse('[b]Bold[/b]', function(parse) {
        parse.should.equal('<strong>Bold</strong>');
      });
    });

    it('should parse [i] to <em>', function() {
      bbcode.parse('[i]italics[/i]', function(parse) {
        parse.should.equal('<em>italics</em>');
      });
    });

    it('should parse [u] to <u>', function() {
      bbcode.parse('[u]underline[/u]', function(parse) {
        parse.should.equal('<u>underline</u>');
      });
    });

    it('should parse [samp] to <samp>', function() {
      bbcode.parse('[samp]samp[/samp]', function(parse) {
        parse.should.equal('<samp>samp</samp>');
      });
    });

    it('should parse [code] to <code>', function() {
      bbcode.parse('[code]Code[/code]', function(parse) {
        parse.should.equal('<pre><code>Code</code></pre>');
      });
    });

    it('should parse [color] to <span style="color:<color>"> for all colors', function() {
      var colors = ['black', 'silver', 'gray', 'maroon', 'white', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua', '#fff', '#ffffff', '#ff34ff'];

      for (var i = 0; i < colors.length; i++) {
        var color = colors[i];
        bbcode.parse('[color='+color+']'+color+'[/color]', function(parse) {
          parse.should.equal('<span style="color: '+color+'">'+color+'</span>');
        });
      }
    });

    it('should parse [size=#] to <span style="font-size: #em">', function() {
      bbcode.parse('[size=1.5]size[/size]', function(parse) {
        parse.should.equal('<span style="font-size: 1.5em">size</span>');
      });
    });

    it('should parse [s] to <span style="text-decoration: line-through"', function() {
      bbcode.parse('[s]strikethrough[/s]', function(parse) {
        parse.should.equal('<span style="text-decoration: line-through">strikethrough</span>');
      });
    });

    describe('should parse [url] and [link]', function() {
      it('should parse [url=<url>] to <a href=<url>>', function() {
        bbcode.parse('[url=http://example.com]url[/url]', function(parse) {
          parse.should.equal('<a target="_blank" href="http://example.com">url</a>');
        });
      });

      it('should parse [url="<url>"] to <a href=<url>>', function() {
        bbcode.parse('[url="http://example.com"]url[/url]', function(parse) {
          parse.should.equal('<a target="_blank" href="http://example.com">url</a>');
        });
      });

      it('should parse [url=\'<url>\'] to <a href=<url>>', function() {
        bbcode.parse('[url=\'http://example.com\']url[/url]', function(parse) {
          parse.should.equal('<a target="_blank" href="http://example.com">url</a>');
        });
      });

      it('should parse [link=<url>]test[/link]', function() {
        bbcode.parse('[link=http://example.com]url[/link]', function(parse) {
          parse.should.equal('<a target="_blank" href="http://example.com">url</a>');
        });
      });

      it('should parse [link="<url>"]test[/link]', function() {
        bbcode.parse('[link="http://example.com"]url[/link]', function(parse) {
          parse.should.equal('<a target="_blank" href="http://example.com">url</a>');
        });
      });

      it('should parse [link=\'<url>\']test[/link]', function() {
        bbcode.parse('[link=\'http://example.com\']url[/link]', function(parse) {
          parse.should.equal('<a target="_blank" href="http://example.com">url</a>');
        });
      });
    });

    describe('should parse [img]', function() {
      it('as attribute - [img=<img>] to <img src=<img>>', function() {
        bbcode.parse('[img=http://example.com/img.png][/img]', function(parse) {
          parse.should.equal('<img src="http://example.com/img.png" />');
        });
      });

      it('as attribute with quotes - [img="<img>"] to <img src=<img>>', function() {
        bbcode.parse('[img="http://example.com/img.png"][/img]', function(parse) {
          parse.should.equal('<img src="http://example.com/img.png" />');
        });
      });

      it('as attribute with single quotes - [img=\'<img>\'] to <img src=<img>>', function() {
        bbcode.parse('[img=\'http://example.com/img.png\'][/img]', function(parse) {
          parse.should.equal('<img src="http://example.com/img.png" />');
        });
      });

      it('as content - [img]<img>[/img] to <img src=<img>>', function() {
        bbcode.parse('[img]http://example.com/img.png[/img]', function(parse) {
          parse.should.equal('<img src="http://example.com/img.png" />');
        });
      });
    });

    it('should parse [q] as <q>', function() {
      bbcode.parse('[q=person]quoted[/q]', function(parse) {
        parse.should.equal('<q cite="person">quoted</q>');
      });
    });

    it('should parse [blockquote] as <blockquote>', function() {
      bbcode.parse('[blockquote=person]quoted[/blockquote]', function(parse) {
        parse.should.equal('<blockquote cite="person">quoted</blockquote>');
      });
    });

    it('should try to fix broken markup', function() {
      bbcode.parse('[b]test', function(parse) {
        parse.should.equal('<strong>test</strong>');
      });
    });

    describe('should parse [list] and [*] children to <ol> and <li> respectively -', function() {
      it('no children', function() {
        bbcode.parse('[list][/list]', function(parse) {
          parse.should.equal('<ol></ol>');
        });
      });

      it('one on a single line', function() {
        bbcode.parse('[list][*]one[/list]', function(parse) {
          parse.should.equal('<ol><li>one</li></ol>');
        });
      });

      it('two on a single line', function() {
        bbcode.parse('[list][*]one[*]two[/list]', function(parse) {
          parse.should.equal('<ol><li>one</li><li>two</li></ol>');
        });
      });
    });

    describe('should parse [ulist] and [*] children to <ul> and <li> respectively -', function() {
      it('no children', function() {
        bbcode.parse('[ulist][/ulist]', function(parse) {
          parse.should.equal('<ul></ul>');
        });
      });

      it('one on a single line', function() {
        bbcode.parse('[ulist][*]one[/ulist]', function(parse) {
          parse.should.equal('<ul><li>one</li></ul>');
        });
      });

      it('two on a single line', function() {
        bbcode.parse('[ulist][*]one[*]two[/ulist]', function(parse) {
          parse.should.equal('<ul><li>one</li><li>two</li></ul>');
        });
      });
    });

    it('should parse inner tags [b][i][u] to <strong><em><u>', function() {
      bbcode.parse('[b][i][u]Hai[/u][/i][/b]', function(parse) {
        parse.should.equal('<strong><em><u>Hai</u></em></strong>');
      });
    });

    it('should parse and return rather than callback', function() {
      var parse = bbcode.parse('[b][i][u]Hai[/u][/i][/b]');
      parse.should.equal('<strong><em><u>Hai</u></em></strong>');
    });

    describe('should parse uppercase tags properly - ', function() {
      it('should parse uppercase [I] to <em>', function() {
        bbcode.parse('[I]italics[/I]', function(parse) {
          parse.should.equal('<em>italics</em>');
        });
      });
      it('should parse uppercase [IMG] to <img>', function() {
        bbcode.parse('[IMG]http://example.com/img.png[/IMG]', function(parse) {
          parse.should.equal('<img src="http://example.com/img.png" />');
        });
      });
      it('should parse mixed case [IMG][/img] to <img>', function() {
        bbcode.parse('[Img]http://example.com/img.png[/img]', function(parse) {
          parse.should.equal('<img src="http://example.com/img.png" />');
        });
      });
    });
  });
});
