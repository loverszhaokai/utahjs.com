UtahJS.com
==========

This is the repository for the [utahjs.com](http://utahjs.com) website.
All are welcome to contribute.

How to Contribute
-----------------

Visit #utahjs on freenode for help _any time_.
At the very least, [Ryan Florence](http://ryanflorence.com) is there most of the day.

Contributing is easy. The website is built on [nanoc][nanoc], a static site
compiler.  Contributing is as easy as adding a member profile yaml file,
and then writing an article in markdown.

1.  Fork the repository and check out a new branch off of master.
        
        cd ~

        git clone git@github.com:YOUR_GITHUB_ACCOUNT/utahjs.com.git
        
        cd utahjs.com
        
        git remote add upstream git://github.com/UtahJS/utahjs.com
        
2. **Every time** you edit content, create a **new branch** (based off of master) for your work:

        git checkout master
        git pull upstream master

        git checkout -b my-articles

2.  Add your member profile to `content/members`. It should look something
    like `content/members/Ryan Florence.yml`:

        open content/members/First\ Last.yml

        name: Ryan Florence
        email: your.email@ddress.com
        location: West Jordan, UT
        github: rpflorence
        twitter: ryanflorence
        website: http://ryanflorence.com
        about: Yadda yadda yadda

    This information will display on  your articles and on the members page.
    The name of your yaml file is a unique identifier for articles you write.
    More on that in a minute.

3.  **Create your article** in `content/articles` (you can use `example` as a template)

        cd utahjs.com

        git checkout master
        git pull upstream master

        git checkout -b my-articles

        cd content/articles
        mkdir my-article
        rsync -a example/index.md my-article/
        
    And season to taste:
    
        open my-article/index.md
        
    In particular you'll need to change the YAML meta-data
    
        ---
        title: Sample article title
        author: Ryan Florence
        date: 2011-08-17
        ---
    
    Note: If you need to do something that markdown doesn't support (such as a table), you can use inline html.
    
    Note: You can also use `index.haml`. You can also put html (such as a table) inside of your markdown.

4.  Push to the repository (and perhaps send a pull request).

        git add content/members/First\ Last.yml
        git commit -m 'added "First Last" as member'
        
        git add content/articles/my-article.md
        git commit -m 'added "My Article"'
        
        git pull upstream master
        git push origin my-article
        
4. Submit a Pull Request

    * Go to your Fork on Github (click "Your Fork" from the mainline [UtahJS/utahjs.com](http://github.com/UtahJS/utahjs.com) repo)
    * Select the `my-article` branch (mid/upper right)
    * Click `Pull Request` (upper right)
    * Wait for Acceptance and or Feedback
                
5. Accept feedback gracefully and refine your article, or merge everything back together

        cd utahjs.com
        
        git checkout master
        git merge my-article
        
        git push origin master


Viewing Locally
---------------

If you want to view the site locally it's a bit more involved. You'll need ruby
installed on your machine.  If you're on Mac OS X, you've already got it.

### Setup

0.  Post to utahjs@googlegroups.com and ask for Push / Pull access
1.  Fork the repository

        UTAHJS_HOME=~/Code
        cd ${UTAHJS_HOME}
        git clone git://github.com/UtahJS/utahjs.com.git

2.  Install rvm, ruby, and [bundler][bundler] (Ubuntu / OS X)

        cd ${UTAHJS_HOME}/utahjs.com
        bash < <(curl -s https://raw.github.com/wayneeseguin/rvm/master/binscripts/rvm-installer )
        exit
        
    Now open a new terminal 
        
        cd ${UTAHJS_HOME}
        rvm install ruby-1.9.2
        echo 'gem: --no-rdoc --no-ri' >> ~/.gemrc
        rvm use 1.9.2@utahjs --create
        # that's just a shortcut for:
        #   rvm use ruby-1.9.2
        #   rvm gemset create utahjs
        #   rvm gemset use utahjs
        rvm gemset list
        gem install bundler

3.  Now, with bundler, install the gem dependencies

        bundle install

    All of the required ruby gems, including nanoc, should be installed locally
    for this project now.

### Commands

To compile and view the site:

    bundle exec nanoc compile
    bundle exec nanoc view
    
    open "http://localhost:3000"


Autocompile compiles the site on each visit, so you don't have to compile after
each change you make:

    bundle exec nanoc autocompile

Check out the [nanoc][nanoc] website to learn more about the platform utahjs.com is built on.

  [nanoc]:http://nanoc.stoneship.org/
  [bundler]:http://gembundler.com/
