import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

export class pine_tree extends GrObject {
    constructor() {

        let trunk_geometry = new T.CylinderGeometry(0.5, 0.5, 1, 20, 20);
        let trunk_mat = new T.MeshStandardMaterial({color: "brown", roughness: 0.75});
        let trunk = new T.Mesh(trunk_geometry, trunk_mat);
        trunk.position.y = 0.5;

        let leaf_geometry = new T.ConeGeometry(1, 3, 20, 20);
        let leaf_mat = new T.MeshStandardMaterial({color: "darkgreen", roughness: 0.75});
        let leaves = new T.Mesh(leaf_geometry, leaf_mat);
        let leaves2 = new T.Mesh(leaf_geometry, leaf_mat);
        let leaves3 = new T.Mesh(leaf_geometry, leaf_mat);

        trunk.add(leaves);
        leaves.position.y = 2;
        leaves.add(leaves2);
        leaves2.position.y = 0.75;
        leaves2.add(leaves3);
        leaves3.position.y = 0.75;

        super("pine_tree", trunk);
    }
}