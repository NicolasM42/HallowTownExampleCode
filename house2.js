import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

export class house2 extends GrObject {
    constructor() {

        let geometry = new T.Geometry();

        //front vertices, right house
        geometry.vertices.push(new T.Vector3(0, 0, 0)); //bottom left corner: 0
        geometry.vertices.push(new T.Vector3(3, 0, 0)); //bottom right corner: 1
        geometry.vertices.push(new T.Vector3(0, 3, 0)); //top left connection: 2
        geometry.vertices.push(new T.Vector3(3, 3, 0)); //top right corner: 3
        geometry.vertices.push(new T.Vector3(0, 4, 0)); //roof peak: 4

        //back vertices, right house
        geometry.vertices.push(new T.Vector3(0, 0, -5)); //bottom right corner: 5
        geometry.vertices.push(new T.Vector3(3, 0, -5)); //bottom left corner: 6
        geometry.vertices.push(new T.Vector3(0, 3, -5)); //top right connection: 7
        geometry.vertices.push(new T.Vector3(3, 3, -5)); //top left corner: 8
        geometry.vertices.push(new T.Vector3(0, 4, -5)); //roof peak: 9

        let front_a = new T.Face3(0, 1, 2);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0.5, 0),
            new T.Vector2(0, 0.49)
          ]);
        geometry.faces.push(front_a);
        let front_b = new T.Face3(1, 3, 2);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0.5, 0),
            new T.Vector2(0.5, 0.49),
            new T.Vector2(0, 0.49)
          ]);
        geometry.faces.push(front_b);
        let front_c = new T.Face3(3, 4, 2);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(front_c);

        let right_a = new T.Face3(6, 3, 1);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(right_a);
        let right_b = new T.Face3(6, 8, 3);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(right_b);
        let right_c = new T.Face3(8, 4, 3);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0.5),
            new T.Vector2(0, 1),
            new T.Vector2(0, 0.5)
          ]);
        geometry.faces.push(right_c);
        let right_d = new T.Face3(8, 9, 4);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0.5),
            new T.Vector2(1, 1),
            new T.Vector2(0, 1)
          ]);
        geometry.faces.push(right_d);

        let left_a = new T.Face3(0, 9, 5);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(left_a);
        let left_b = new T.Face3(0, 4, 9);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(left_b);

        let back_a = new T.Face3(5, 8, 6);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0),
            new T.Vector2(0.5, 0.49),
            new T.Vector2(0.5, 0)
          ]);
        geometry.faces.push(back_a);
        let back_b = new T.Face3(5, 7, 8);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0),
            new T.Vector2(1, 0.49),
            new T.Vector2(0.5, 0.49)
          ]);
        geometry.faces.push(back_b);
        let back_c = new T.Face3(7, 9, 8);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(back_c);

        //front vertices, left house
        geometry.vertices.push(new T.Vector3(0, 0, -1)); //bottom right corner: 10
        geometry.vertices.push(new T.Vector3(-2, 0, -1)); //bottom left corner: 11
        geometry.vertices.push(new T.Vector3(0, 2, -1)); //top right connection: 12
        geometry.vertices.push(new T.Vector3(-2, 2, -1)); //top left corner: 13
        geometry.vertices.push(new T.Vector3(0, 3, -1)); //roof peak: 14

        //back vertices, left house
        geometry.vertices.push(new T.Vector3(0, 0, -4)); //bottom left corner: 15
        geometry.vertices.push(new T.Vector3(-2, 0, -4)); //bottom right corner: 16
        geometry.vertices.push(new T.Vector3(0, 2, -4)); //top left connection: 17
        geometry.vertices.push(new T.Vector3(-2, 2, -4)); //top right corner: 18
        geometry.vertices.push(new T.Vector3(0, 3, -4)); //roof peak: 19

        let sfront_a = new T.Face3(10, 13, 11);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(sfront_a);
        let sfront_b = new T.Face3(10, 12, 13);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(sfront_b);
        let sfront_c = new T.Face3(12, 14, 13);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(sfront_c);

        let sleft_a = new T.Face3(11, 18, 16);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(sleft_a);
        let sleft_b = new T.Face3(11, 13, 18);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(sleft_b);
        let sleft_c = new T.Face3(13, 19, 18);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0.5),
            new T.Vector2(0, 1),
            new T.Vector2(0, 0.5)
          ]);
        geometry.faces.push(sleft_c);
        let sleft_d = new T.Face3(13, 14, 19);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0.5),
            new T.Vector2(1, 1),
            new T.Vector2(0, 1)
          ]);
        geometry.faces.push(sleft_d);

        let sright_a = new T.Face3(15, 14, 10);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(sright_a);
        let sright_b = new T.Face3(15, 19, 14);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(sright_b);

        let sback_a = new T.Face3(16, 17, 15);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(sback_a);
        let sback_b = new T.Face3(16, 18, 17);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(sback_b);
        let sback_c = new T.Face3(18, 19, 17);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(sback_c);

        geometry.computeFaceNormals();

        let texture = new T.TextureLoader().load("../HallowTown/Textures/SpookyHouse.png");
        let material = new T.MeshStandardMaterial({map: texture, color: "rgb(156, 181, 165)", roughness: 0.75});
        let mesh = new T.Mesh(geometry, material);
        super("lean_to", mesh);
    }
}