Light Weight Blog using Backbone, Node, Express, and MongoDB

I've always wanted to have a blog but I dont have enough to say to use a prebuilt blog engine. So I'm killing two birds with one stone with creating a blog from scratch and adding features as I learn how. Want to share my knowledge in the process.

Right now all the main files are in the Public folder. In the coming weeks I'll be setting up node and switching servers to run the real database, so you can pretty much ignore the node/express stuff until then.  Feel free to contact me or tweet me @babbittIS if you have any questions/comments/feedback, etc..  

Demo here: www.babbitt.is/blogging

Update 05-09-2013:

Current working features are simply extracting data from a json file and populating the template with it. Things I'm working on for the near future are:

1. Having data served from monogodb and node
2. Removing blog list from the DOM when viewing a detail page
3. Having posts be loaded based on title instead of ID ( /blogging/#my-wrx-and-me vs. /blogging/#2 )