import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

export class house1 extends GrObject {
    constructor() {

        let geometry = new T.Geometry();

        //front vertices
        geometry.vertices.push(new T.Vector3(0, 0, 0)); //front-bottom left corner: 0
        geometry.vertices.push(new T.Vector3(5, 0, 0)); //front-bottom right corner: 1
        geometry.vertices.push(new T.Vector3(0, 4, 0)); //front-top left corner: 2
        geometry.vertices.push(new T.Vector3(5, 4, 0)); //front-top right corner: 3
        geometry.vertices.push(new T.Vector3(1.25, 5, 0)); //front left-eve peak: 4
        geometry.vertices.push(new T.Vector3(2.5, 4, 0)); //front roof-midpoint: 5
        geometry.vertices.push(new T.Vector3(3.75, 5, 0)); //front right-eve peak: 6
        //back vertices (in order from facing back)
        geometry.vertices.push(new T.Vector3(0, 0, -5)); //bottom left corner: 7
        geometry.vertices.push(new T.Vector3(5, 0, -5)); //bottom right corner: 8
        geometry.vertices.push(new T.Vector3(0, 4, -5)); //top left corner: 9
        geometry.vertices.push(new T.Vector3(5, 4, -5)); //top right corner: 10
        geometry.vertices.push(new T.Vector3(1.25, 5, -5)); //left-eve peak: 11
        geometry.vertices.push(new T.Vector3(2.5, 4, -5)); //roof-midpoint: 12
        geometry.vertices.push(new T.Vector3(3.75, 5, -5)); //right-eve peak: 13

        geometry.faceVertexUvs = [[]];

        let front_a = new T.Face3(0, 1, 2);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0.49, 0),
            new T.Vector2(0, 0.49)
          ]);
        geometry.faces.push(front_a);
        let front_b = new T.Face3(1, 3, 2);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0.49, 0),
            new T.Vector2(0.49, 0.49),
            new T.Vector2(0, 0.49)
          ]);
        geometry.faces.push(front_b);
        let left_eve = new T.Face3(2, 5, 4);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(left_eve);
        let right_eve = new T.Face3(5, 3, 6);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(right_eve);

        let left_a = new T.Face3(0, 9, 7);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(left_a);
        let left_b = new T.Face3(0, 2, 9);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(left_b);
        let left_roof_a = new T.Face3(2, 11, 9);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0.5),
            new T.Vector2(0, 1),
            new T.Vector2(0, 0.5)
          ]);
        geometry.faces.push(left_roof_a);
        let left_roof_b = new T.Face3(2, 4, 11);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0.5),
            new T.Vector2(1, 1),
            new T.Vector2(0, 1)
          ]);
        geometry.faces.push(left_roof_b);

        let right_a = new T.Face3(8, 3, 1);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(right_a);
        let right_b = new T.Face3(8, 10, 3);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(0, 0),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(right_b);
        let right_roof_a = new T.Face3(10, 6, 3);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0.5),
            new T.Vector2(0, 1),
            new T.Vector2(0, 0.5)
          ]);
        geometry.faces.push(right_roof_a);
        let right_roof_b = new T.Face3(10, 13, 6);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0.5),
            new T.Vector2(1, 1),
            new T.Vector2(0, 1)
          ]);
        geometry.faces.push(right_roof_b);

        let top_roof_a = new T.Face3(13, 5, 6);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 1),
            new T.Vector2(1, 0.5),
            new T.Vector2(1, 1),        
          ]);
        geometry.faces.push(top_roof_a);
        let top_roof_b = new T.Face3(13, 12, 5);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 1),
            new T.Vector2(0, 0.5),
            new T.Vector2(1, 0.5)
          ]);
        geometry.faces.push(top_roof_b);
        let top_roof_c = new T.Face3(12, 4, 5);
        geometry.faceVertexUvs[0].push([
          
            new T.Vector2(1, 0.5),
            new T.Vector2(0, 1),
            new T.Vector2(0, 0.5)
        ]); 
        geometry.faces.push(top_roof_c);
        let top_roof_d = new T.Face3(12, 11, 4);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0.5),
            new T.Vector2(1, 1),
            new T.Vector2(0, 1)
          ]);
        geometry.faces.push(top_roof_d);

        let back_a = new T.Face3(7, 10, 8);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0),
            new T.Vector2(0.5, 0.49),
            new T.Vector2(0.5, 0)
          ]);
        geometry.faces.push(back_a);
        let back_b = new T.Face3(7, 9, 10);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0),
            new T.Vector2(1, 0.49),
            new T.Vector2(0.5, 0.49)
          ]);
        geometry.faces.push(back_b);
        let back_left_eve = new T.Face3(12, 13, 10);
        geometry.faces.push(back_left_eve);
        let back_right_eve = new T.Face3(9, 11, 12);
        geometry.faces.push(back_right_eve);

        geometry.computeFaceNormals();

        let texture = new T.TextureLoader().load("../HallowTown/Textures/SpookyHouse.png");
        let material = new T.MeshStandardMaterial({map: texture, color: "rgb(184, 175, 154)", roughness: 0.75});
        let mesh = new T.Mesh(geometry, material);
        super("house", mesh);
    }
}