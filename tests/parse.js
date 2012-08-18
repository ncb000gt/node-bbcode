var bbcode = require('../lib/bbcode');

require('should');

describe('bcrypt', function() {
  describe('#parse', function() {
    it('should parse [b] to <b>', function() {
      bbcode.parse('[b]Bold[/b]', function(parse) {
        parse.should.equal('<b>Bold</b>');
      });
    });

    it('should parse [i] to <i>', function() {
      bbcode.parse('[i]italics[/i]', function(parse) {
        parse.should.equal('<i>italics</i>');
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

    it('should parse [url=<url>] to <a href=<url>>', function() {
      bbcode.parse('[url=http://example.com]url[/url]', function(parse) {
        parse.should.equal('<a href="http://example.com">url</a>');
      });
    });

    describe('should parse [img]', function() {
      it('as attribute - [img=<img>] to <img src=<img>>', function() {
        bbcode.parse('[img=http://example.com/img.png][/img]', function(parse) {
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
        parse.should.equal('<b>test</b>');
      });
    });
  });
});
