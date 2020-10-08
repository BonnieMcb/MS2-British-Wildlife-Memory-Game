<img src="https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png" style="margin: 0;">


https://css-tricks.com/box-sizing/
https://3dtransforms.desandro.com/card-flip css taken and modified


image sources

card back: https://thenounproject.com/term/oak-leaf/1882831/ oak leaf by Vectors Market from the Noun Project
acorn and leaf drawing https://pixy.org/4810218/


I'm making a memory matching game for MS2. My next task is to place the tiles on the game board randomly. From doing some research, it seems there is some code I could use that uses the Fisher-Yates shuffle. Fine. But first I need to work out what to make the array out of in order to shuffle said array, and link it to my html elements. I had a few ideas:
- make each image into an Object
- use .data() to make key value pairs
- use jQuery.data() so I could select an (html) element as well as a key and value
 - getElementByClass for the img names

I'm leaning to one of the first 3, as I could give them 'a first name and last name', and shuffle by first name (individual ID), and then implement the matching them by last name (2 cards would share the same 'last name'

I just have no idea how to implement this and was hoping to get some help. Looking around on the internet is not turning up anything useful. 
I'm hoping you could get back to me on Wednesday morning sometime.




Welcome BonnieMcb,

This is the Code Institute student template for Gitpod. We have preinstalled all of the tools you need to get started. You can safely delete this README.md file, or change it for your own project.

## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: *Make Public*,

Another blue button should appear to click: *Open Browser*.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: *Make Public*,

Another blue button should appear to click: *Open Browser*.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the backend lessons.

## Updates Since The Instructional Video

We continually tweak and adjust this template to help give you the best experience. Here are the updates since the original video was made:

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

--------

Happy coding!
