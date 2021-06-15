import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

export class groundCover extends GrObject {
    constructor() {

        let geometry = new T.Geometry();

        //front vertices
        geometry.vertices.push(new T.Vector3(100.1, 0.11, 100.1)); //0: top-right-front corner
        geometry.vertices.push(new T.Vector3(100.1, 0.11, -100.1)); //1: top-right-back corner
        geometry.vertices.push(new T.Vector3(-100.1, 0.11, -100.1)); //2: top-left-back corner
        geometry.vertices.push(new T.Vector3(-100.1, 0.11, 100.1)); //3: top-left-front corner

        geometry.vertices.push(new T.Vector3(100.1, -0.25, 100.1)); //4: bottom-right-front corner
        geometry.vertices.push(new T.Vector3(100.1, -0.25, -100.1)); //5: bottom-right-back corner
        geometry.vertices.push(new T.Vector3(-100.1, -0.25, -100.1)); //6: bottom-left-back corner
        geometry.vertices.push(new T.Vector3(-100.1, -0.25, 100.1)); //7: bottom-left-front corner

        geometry.faceVertexUvs = [[]];

        let top_a = new T.Face3(0, 1, 2);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0),
            new T.Vector2(1, 1),
            new T.Vector2(0, 1)
          ]);
        geometry.faces.push(top_a);
        let top_b = new T.Face3(2, 3, 0);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 1),
            new T.Vector2(0, 0),
            new T.Vector2(1, 0)
          ]);
        geometry.faces.push(top_b);

        let front_a = new T.Face3(4, 0, 3);
        geometry.faces.push(front_a);
        let front_b = new T.Face3(3, 7, 4);
        geometry.faces.push(front_b);

        let left_a = new T.Face3(3, 2, 6);
        geometry.faces.push(left_a);
        let left_b = new T.Face3(3, 6, 7);
        geometry.faces.push(left_b);

        let right_a = new T.Face3(5, 1, 0);
        geometry.faces.push(right_a);
        let right_b = new T.Face3(5, 0, 4);
        geometry.faces.push(right_b);

        let back_a = new T.Face3(5, 6, 1);
        geometry.faces.push(back_a);
        let back_b = new T.Face3(1, 6, 2);
        geometry.faces.push(back_b);

        let bottom_a = new T.Face3(7, 6, 5);
        geometry.faces.push(bottom_a);
        let bottom_b = new T.Face3(7, 5, 4);
        geometry.faces.push(bottom_b);

        geometry.computeFaceNormals();

        let texture = new T.TextureLoader().load("../HallowTown/Textures/SpookyGround.png");
        let material = new T.MeshStandardMaterial({map: texture, color: "rgb(79, 50, 101)"});
        let mesh = new T.Mesh(geometry, material);
        super("cover", mesh);
    }
}