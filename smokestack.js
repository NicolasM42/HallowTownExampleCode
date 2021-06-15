import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

let smokeList = [];
let count = 0;

export class smokestack extends GrObject {
    constructor() {
        let lower_geom = new T.BoxGeometry(1, 3, 1);
        let upper_geom = new T.BoxGeometry(1.5, 0.5, 1.5);
        let smoke_geom = new T.SphereGeometry(0.25, 20, 20);

        let brick_mat = new T.MeshStandardMaterial({color: "rgb(148, 44, 3)"});
        let dark_mat = new T.MeshStandardMaterial({color: "white"});
        let smoke_mat = new T.MeshStandardMaterial({color: "grey"});

        let lower = new T.Mesh(lower_geom, brick_mat);
        let upper = new T.Mesh(upper_geom, dark_mat);
        upper.position.y = 1.5;
        lower.add(upper);

        super("smokestack", lower);

        this.tick = function(delta, timeOfDay) {

            delta = delta / 10;
            
            let random = Math.random() * 100;
            if (random < 10 && count < 10) {
                smokeList.push([2, 0, new T.Mesh(smoke_geom, smoke_mat)]);
                smokeList[smokeList.length - 1][2].scale.set(random / 5, random / 5, random / 5);
                upper.add(smokeList[smokeList.length - 1][2]);
                count++;
            }
            
            smokeList.forEach(function(s) {
                let opacity = s[0];
                let yLevel = s[1];

                s[2].position.y = s[1];

                s[0] = opacity - (0.01);
                s[1] = yLevel + 0.03;

                if (s[0] <= 0.03) {
                    upper.remove(s[2]);
                    count--;
                }
              });
            smokeList = smokeList.filter(s => s[0] > 0);
        };
    }
}