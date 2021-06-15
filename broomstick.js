import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

let t = 0;

export class broomstick extends GrObject {
    constructor() {

        let stick_geom = new T.BoxGeometry(0.2, 0.2, 2, 20, 20);
        let ball_geom = new T.SphereGeometry(0.3, 20, 20);
        let bristles_geom = new T.ConeGeometry(0.5, 1, 20, 20);

        let wood_mat = new T.MeshStandardMaterial({color: "rgb(77, 43, 8)"});
        let bristle_mat = new T.MeshStandardMaterial({color: "grey"});

        let stick = new T.Mesh(stick_geom, wood_mat);
        stick.rotateY(Math.PI / 2);
        let ball = new T.Mesh(ball_geom, bristle_mat);
        stick.add(ball);
        ball.position.z = -1;
        let bristles = new T.Mesh(bristles_geom, bristle_mat);
        bristles.position.z = -0.5;
        bristles.rotateX(Math.PI / 2);
        ball.add(bristles);

        super("broomstick", stick);

        this.tick = function(delta, timeOfDay) {
            delta = delta / 10;
            t += 0.01 * delta;
            stick.position.x = 50*Math.sin(t);
            stick.position.z = 50*Math.cos(t);

            stick.rotateY(0.01 * delta);
        };
    }
}