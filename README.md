PyLadies Sthlm
==========

From within sthlm/
```
pip install -r requirements.txt
npm install && bower install && bundle install
mynt gen -f www _site #or...
grunt build
```

Requirements:
* Your machine needs to be [setup for Python](http://newcoder.io/begin/setup-your-machine/)
* Create the virtual environment PyLadies `mkvirtualenv PyLadies`
* To develop you need to have [GruntJS](http://gruntjs.com) and [Bower](http://bower.io)
* You also need to have [Ruby](https://www.ruby-lang.org/en/) to be able to compile the [Sassy CSS](http://sass-lang.com/) into actual CSS
* To add content you just need to know [Markdown](http://daringfireball.net/projects/markdown/) and [Mynt](http://mynt.mirroredwhite.com/)

```
source /usr/local/bin/virtualenvwrapper.sh #really needs to be fixed...
mkvirtualenv PyLadies # If not created
workon PyLadies

```
