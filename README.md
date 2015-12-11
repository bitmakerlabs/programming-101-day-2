# Programming 101 - Day 2 - Server Side

Today we will venture into the back-end of a web application, allowing us to create and update todos for real, and make our application available to the world.

## Cloud9 Editor

We will be using a cloud-based editor to keep things consistent and allow us to focus on coding and not on installations. If you haven't already, go to http://c9.io and set up a free account now.

Once you have an account at Cloud9, set up a new workspace:

* Name your workspace "programming-101-day-2"
* Within the section labeled "Clone from Git or Mercurial URL (optional)" paste the following url: https://github.com/fgelsomini/programming-101-day-2
* Select "custom" as the workspace type

## Additional Requirements

Once you have opened your workspace, you will a terminal window along the bottom. For today we will need to install a couple of additional packages in order for us to be able to use a database.

Type the following commands, one at a time in your terminal window. Call an instructor over if you are having trouble.

```
gem install sqlite3
```

```
gem install dm-sqlite-adapter
```

```
gem install data_mapper
```

## Today's Goals

* Understand basic building blocks of any logical programming language
* Convert our our pages from yesterday to work within a web application
* Add the ability to persist our data using a database
* Add ability to create a new todo item
* Add ability to toggle a todo status
* Display a proper count of remaining todos
