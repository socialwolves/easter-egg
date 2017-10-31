# Easter Egg
Lightweight easter egg served directly from Github, [DEMO](http://cristurm.github.io/nyan-cat/)

GOALS
-----

1. Create minimal/lightweight snippet for easter eggs
2. Experiment with pure HTML/CSS and vanilla JS solutions.
3. Have some [fun](https://youtu.be/g-sgw9bPV4A?t=8s)

STACK
-----

- `HTML`/`CSS` animation
- `vanilla.js`, `HTML5`
- `github pages`

TODO
----

- [x] Create minimal script for detecting `conami code`
- [x] Create/find pure HTML+CSS ester egg (nyan cat?!)
- [x] Find a way to append code without collisions
- [x] Host somewhere easter egg code (probably github)
- [ ] Add snippet in different places of zwzt platform

CONFIG
------
To add snippet with conami code detection append to your website
```
<script type="text/javascript" src="https://rawgit.com/socialwolves/easter-egg/master/index.js"></script>
```
To checkout how easter egg looks like append, run in your console
```
document.body.innerHTML += '<iframe src="https://rawgit.com/socialwolves/easter-egg/master/nyan/index.html" style="border:0;width:100vw;height:100vh;position:fixed;top:0;z-index:1337" allowtransparency="true"></iframe>
```

Credits
-------

- [cirsturm/nyan-cat](https://github.com/cristurm/nyan-cat) github repo with nyan cat
- [snaptortoise/konami-js](https://github.com/snaptortoise/konami-js) repo with conami code js
- [BuzzFeed](https://www.buzzfeed.com/nicolenguyen/up-up-down-down-left-right-left-right-b-a?utm_term=.va6VzD1O4#.is8PbeR6X) examples of easter eggs 
