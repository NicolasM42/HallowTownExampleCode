import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

export class house3 extends GrObject {
    constructor() {

        let geometry = new T.Geometry();

        //front vertices
        geometry.vertices.push(new T.Vector3(0, 0, 0)); //bottom left corner: 0
        geometry.vertices.push(new T.Vector3(4, 0, 0)); //bottom right corner: 1
        geometry.vertices.push(new T.Vector3(0, 4, 0)); //top left corner: 2
        geometry.vertices.push(new T.Vector3(4, 4, 0)); //top right corner: 3
        geometry.vertices.push(new T.Vector3(2, 5, -2)); //roof peak: 4

        //back vertices
        geometry.vertices.push(new T.Vector3(0, 0, -4)); //bottom right corner: 5
        geometry.vertices.push(new T.Vector3(4, 0, -4)); //bottom left corner: 6
        geometry.vertices.push(new T.Vector3(0, 4, -4)); //top right corner: 7
        geometry.vertices.push(new T.Vector3(4, 4, -4)); //top left corner: 8

        geometry.faceVertexUvs = [[]];

        let front_a = new T.Face3(1, 2, 0);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0.5, 0),
            new T.Vector2(0, 0.49),
            new T.Vector2(0, 0)
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
            new T.Vector2(1, 0.5),
            new T.Vector2(0.5, 1),
            new T.Vector2(0, 0.5)
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
            new T.Vector2(0.5, 1),
            new T.Vector2(0, 0.5)
          ]);
        geometry.faces.push(right_c);

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
        let back_c = new T.Face3(7, 4, 8);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0.5),
            new T.Vector2(0.5, 1),
            new T.Vector2(0, 0.5)
          ]);
        geometry.faces.push(back_c);

        let left_a = new T.Face3(0, 7, 5);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(left_a);
        let left_b = new T.Face3(0, 2, 7);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(left_b);
        let left_c = new T.Face3(2, 4, 7);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0.5),
            new T.Vector2(0.5, 1),
            new T.Vector2(0, 0.5)
          ]);
        geometry.faces.push(left_c);

        geometry.computeFaceNormals();

        let texture = new T.TextureLoader().load("../HallowTown/Textures/SpookyHouse.png");
        let material = new T.MeshStandardMaterial({map: texture, color: "grey", roughness: 0.75});
        let mesh = new T.Mesh(geometry, material);
        super("farm_house", mesh);
    }
}