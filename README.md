# ionic2-meteor-seed
Ionix2 + Meteor + NPM modules on client Seed Project

You can use Ionic2 CLI to build yout Meteor app.

## Running

`git clone https://github.com/nelsonec87/ionic2-meteor-seed.git`

`cd ionic2-meteor-seed` 

`npm install`

Starting Client

`ionic serve`

Starting Server

`cd meteor`

`meteor`

## What is it?

It´s a seed project using Ionic2 (Angular2) + Meteor 1.3 + TypeScript. Different from [ionic2-meteor](https://atmospherejs.com/barbatus/ionic2-meteor) package, you can use `npm` modules in the client, e.g. [angular2-google-maps](https://github.com/SebastianM/angular2-google-maps).

See issue: [link](https://github.com/barbatus/ionic2-meteor/issues/19#issuecomment-210516241)

## How?

Using the same aproach as [Angular-Meteor "Whatsapp" example using de Ionic CLI](http://www.angular-meteor.com/tutorials/whatsapp/ionic/bootstrapping). In a nutshell: install Ionic2 using the CLI and import Meteor client scripts.

## Meteor
You can generate Meteor's client-side scripts using [meteor-build-client](https://github.com/frozeman/meteor-build-client). Then import the generated file in `www/index.html`.
