import {Page} from 'ionic-angular';
import {MeteorComponent} from 'angular2-meteor';
import {Parties} from './parties';
import {MongoCursorDifferFactory} from 'angular2-meteor/mongo_cursor_differ';
import {IterableDiffers, Component} from 'angular2/core';

@Page({
    templateUrl: 'build/pages/page1/page1.html',
    providers: [IterableDiffers.extend([new MongoCursorDifferFactory()])]
})
export class Page1 extends MeteorComponent {
    public myData: Mongo.Cursor<any>;

    add(item:string){
        Parties.insert({name: item});
    }

    constructor() {
        super();
        this.myData = Parties.find({});
    }
}
