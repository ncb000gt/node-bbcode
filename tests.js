var bbcode_lib = require('./lib/bbcode'),
    testCase = require('nodeunit').testCase;

module.exports = testCase(
    {
        'test bold': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[b]Bold[/b]', function(data) {
                assert.equals('<b>Bold</b>', data);
                assert.done();
            });
        },
        'test italics': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[i]italics[/i]', function(data) {
                assert.equals('<i>italics</i>', data);
                assert.done();
            });
        },
        'test underline': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[u]underline[/u]', function(data) {
                assert.equals('<u>underline</u>', data);
                assert.done();
            });
        },
        'test samp': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[samp]samp[/samp]', function(data) {
                assert.equals('<samp>samp</samp>', data);
                assert.done();
            });
        },

        'test code': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[code]Code[/code]', function(data) {
                assert.equals('<pre><code>Code</code></pre>', data);
                assert.done();
            });
        },
        'test pre': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[pre]Pre[/pre]', function(data) {
                assert.equals('<pre>Pre</pre>', data);
                assert.done();
            });
        },

        // test all colors: since they are regexed
        'test color-black': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[color=black]Black[/color]', function(data) {
                assert.equals('<span style="color: black">Black</span>', data);
                assert.done();
            });
        },
        'test color-silver': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[color=silver]silver[/color]', function(data) {
                assert.equals('<span style="color: silver">silver</span>', data);
                assert.done();
            });
        },
        'test color-gray': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[color=gray]gray[/color]', function(data) {
                assert.equals('<span style="color: gray">gray</span>', data);
                assert.done();
            });
        },
        'test color-white': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[color=white]white[/color]', function(data) {
                assert.equals('<span style="color: white">white</span>', data);
                assert.done();
            });
        },
        'test color-maroon': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[color=maroon]maroon[/color]', function(data) {
                assert.equals('<span style="color: maroon">maroon</span>', data);
                assert.done();
            });
        },
        'test color-red': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[color=red]red[/color]', function(data) {
                assert.equals('<span style="color: red">red</span>', data);
                assert.done();
            });
        },
        'test color-purple': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[color=purple]purple[/color]', function(data) {
                assert.equals('<span style="color: purple">purple</span>', data);
                assert.done();
            });
        },
        'test color-fuchsia': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[color=fuchsia]fuchsia[/color]', function(data) {
                assert.equals('<span style="color: fuchsia">fuchsia</span>', data);
                assert.done();
            });
        },
        'test color-green': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[color=green]Green[/color]', function(data) {
                assert.equals('<span style="color: green">Green</span>', data);
                assert.done();
            });
        },
        'test color-lime': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[color=lime]lime[/color]', function(data) {
                assert.equals('<span style="color: lime">lime</span>', data);
                assert.done();
            });
        },
        'test color-olive': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[color=olive]olive[/color]', function(data) {
                assert.equals('<span style="color: olive">olive</span>', data);
                assert.done();
            });
        },
        'test color-yellow': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[color=yellow]yellow[/color]', function(data) {
                assert.equals('<span style="color: yellow">yellow</span>', data);
                assert.done();
            });
        },
        'test color-navy': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[color=navy]navy[/color]', function(data) {
                assert.equals('<span style="color: navy">navy</span>', data);
                assert.done();
            });
        },
        'test color-blue': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[color=blue]blue[/color]', function(data) {
                assert.equals('<span style="color: blue">blue</span>', data);
                assert.done();
            });
        },
        'test color-teal': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[color=teal]teal[/color]', function(data) {
                assert.equals('<span style="color: teal">teal</span>', data);
                assert.done();
            });
        },
        'test color-aqua': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[color=aqua]aqua[/color]', function(data) {
                assert.equals('<span style="color: aqua">aqua</span>', data);
                assert.done();
            });
        },
        'test color-#fff': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[color=#fff]#fff[/color]', function(data) {
                assert.equals('<span style="color: #fff">#fff</span>', data);
                assert.done();
            });
        },
        'test color-#ffffff': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[color=#ffffff]#ffffff[/color]', function(data) {
                assert.equals('<span style="color: #ffffff">#ffffff</span>', data);
                assert.done();
            });
        },

        'test size': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[size=1.5]size[/size]', function(data) {
                assert.equals('<span style="font-size: 1.5em">size</span>', data);
                assert.done();
            });
        },
        'test size-min': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[size=0.5]min[/size]', function(data) {
                assert.equals('<span style="font-size: 0.7em">min</span>', data);
                assert.done();
            });
        },
        'test size-max': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[size=4]max[/size]', function(data) {
                assert.equals('<span style="font-size: 3em">max</span>', data);
                assert.done();
            });
        },

        'test strikethrough': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[s]strikethrough[/s]', function(data) {
                assert.equals('<span style="text-decoration: line-through">strikethrough</span>', data);
                assert.done();
            });
        },

        'test url': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[url=http://example.com]url[/url]', function(data) {
                assert.equals('<a href="http://example.com">url</a>', data);
                assert.done();
            });
        },

        'test quote': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[q=person]quoted[/q]', function(data) {
                assert.equals('<q cite="person">quoted</q>', data);
                assert.done();
            });
        },
        'test blockquote': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[blockquote=person]quoted[/blockquote]', function(data) {
                assert.equals('<blockquote cite="person">quoted</blockquote>', data);
                assert.done();
            });
        },

        'test broken': function(assert) {
            assert.expect(1);
            var bbcode = new bbcode_lib({});
            bbcode.parse('[b]test', function(data) {
                assert.equals('<b>test</b>', data);
                assert.done();
            });
        }
    }
); 
