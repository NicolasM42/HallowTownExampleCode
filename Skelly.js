import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

let stage = 0; //tracks the stage of the arm animation loop
let rotation_track = 0;

export class skelly extends GrObject {
    constructor() {
        let bone_mat = new T.MeshStandardMaterial({color: "white"});

        let spine_geom = new T.BoxGeometry(1, 20, 1.5);
        let small_rib_geom = new T.BoxGeometry(3, 0.5, 0.5);
        let large_rib_geom = new T.BoxGeometry(0.5, 0.5, 4);
        let joint_geom = new T.SphereGeometry(1, 20, 20);
        let arm_geom = new T.BoxGeometry(7, 1, 1);

        let palm_geom = new T.BoxGeometry(2, 0.5, 2.5);
        let finger_geom = new T.BoxGeometry(2.5, 0.3, 0.3);
        let thumb_geom = new T.BoxGeometry(1.5, 0.3, 0.3);

        let spine = new T.Mesh(spine_geom, bone_mat);
        
        let lower_left_rib_a = new T.Mesh(small_rib_geom, bone_mat);
        lower_left_rib_a.position.y = -1;
        lower_left_rib_a.position.x = -2;
        spine.add(lower_left_rib_a);
        let lower_left_rib_b = new T.Mesh(large_rib_geom, bone_mat);
        lower_left_rib_b.position.x = -1.25;
        lower_left_rib_b.position.z = 1.75;
        lower_left_rib_a.add(lower_left_rib_b);
        let lower_left_rib_c = new T.Mesh(small_rib_geom, bone_mat);
        lower_left_rib_c.position.x = 1.25;
        lower_left_rib_c.position.z = 2;
        lower_left_rib_b.add(lower_left_rib_c);

        let middle_left_rib_a = new T.Mesh(small_rib_geom, bone_mat);
        middle_left_rib_a.position.y = 1;
        middle_left_rib_a.position.x = -2;
        spine.add(middle_left_rib_a);
        let middle_left_rib_b = new T.Mesh(large_rib_geom, bone_mat);
        middle_left_rib_b.position.x = -1.25;
        middle_left_rib_b.position.z = 1.75;
        middle_left_rib_a.add(middle_left_rib_b);
        let middle_left_rib_c = new T.Mesh(small_rib_geom, bone_mat);
        middle_left_rib_c.position.x = 1.25;
        middle_left_rib_c.position.z = 2;
        middle_left_rib_b.add(middle_left_rib_c);

        let upper_left_rib_a = new T.Mesh(small_rib_geom, bone_mat);
        upper_left_rib_a.position.y = 3;
        upper_left_rib_a.position.x = -2;
        spine.add(upper_left_rib_a);
        let upper_left_rib_b = new T.Mesh(large_rib_geom, bone_mat);
        upper_left_rib_b.position.x = -1.25;
        upper_left_rib_b.position.z = 1.75;
        upper_left_rib_a.add(upper_left_rib_b);
        let upper_left_rib_c = new T.Mesh(small_rib_geom, bone_mat);
        upper_left_rib_c.position.x = 1.25;
        upper_left_rib_c.position.z = 2;
        upper_left_rib_b.add(upper_left_rib_c);

        let lower_right_rib_a = new T.Mesh(small_rib_geom, bone_mat);
        lower_right_rib_a.position.y = -1;
        lower_right_rib_a.position.x = 2;
        spine.add(lower_right_rib_a);
        let lower_right_rib_b = new T.Mesh(large_rib_geom, bone_mat);
        lower_right_rib_b.position.x = 1.25;
        lower_right_rib_b.position.z = 1.75;
        lower_right_rib_a.add(lower_right_rib_b);
        let lower_right_rib_c = new T.Mesh(small_rib_geom, bone_mat);
        lower_right_rib_c.position.x = -1.25;
        lower_right_rib_c.position.z = 2;
        lower_right_rib_b.add(lower_right_rib_c);

        let middle_right_rib_a = new T.Mesh(small_rib_geom, bone_mat);
        middle_right_rib_a.position.y = 1;
        middle_right_rib_a.position.x = 2;
        spine.add(middle_right_rib_a);
        let middle_right_rib_b = new T.Mesh(large_rib_geom, bone_mat);
        middle_right_rib_b.position.x = 1.25;
        middle_right_rib_b.position.z = 1.75;
        middle_right_rib_a.add(middle_right_rib_b);
        let middle_right_rib_c = new T.Mesh(small_rib_geom, bone_mat);
        middle_right_rib_c.position.x = -1.25;
        middle_right_rib_c.position.z = 2;
        middle_right_rib_b.add(middle_right_rib_c);

        let upper_right_rib_a = new T.Mesh(small_rib_geom, bone_mat);
        upper_right_rib_a.position.y = 3;
        upper_right_rib_a.position.x = 2;
        spine.add(upper_right_rib_a);
        let upper_right_rib_b = new T.Mesh(large_rib_geom, bone_mat);
        upper_right_rib_b.position.x = 1.25;
        upper_right_rib_b.position.z = 1.75;
        upper_right_rib_a.add(upper_right_rib_b);
        let upper_right_rib_c = new T.Mesh(small_rib_geom, bone_mat);
        upper_right_rib_c.position.x = -1.25;
        upper_right_rib_c.position.z = 2;
        upper_right_rib_b.add(upper_right_rib_c);

        let left_upper_joint = new T.Mesh(joint_geom, bone_mat);
        left_upper_joint.position.y = 4.5;
        left_upper_joint.position.x = -3.5;
        left_upper_joint.position.z = 1;
        spine.add(left_upper_joint);

        let left_upper_arm = new T.Mesh(arm_geom, bone_mat);
        left_upper_arm.position.y = -3.5;
        left_upper_arm.position.x = -2;
        left_upper_arm.rotateZ(Math.PI / 3);
        left_upper_joint.add(left_upper_arm);

        let left_lower_joint = new T.Mesh(joint_geom, bone_mat);
        left_lower_joint.position.y = -7;
        left_lower_joint.position.x = -4;
        left_upper_joint.add(left_lower_joint);

        let left_lower_arm = new T.Mesh(arm_geom, bone_mat);
        left_lower_arm.position.y = 3.5;
        left_lower_arm.position.z = 2;
        left_lower_arm.rotateY(-Math.PI / 2);
        left_lower_arm.rotateZ(Math.PI / 3);
        left_lower_joint.add(left_lower_arm);

        let left_hand = new T.Mesh(palm_geom, bone_mat);
        left_hand.position.y = 6.5;
        left_hand.position.z = 4.5;
        left_lower_joint.add(left_hand);

        let left_pinky = new T.Mesh(finger_geom, bone_mat);
        left_pinky.position.y = -0.1;
        left_pinky.position.z = 2;
        left_pinky.position.x = -0.75;
        left_pinky.rotateY(Math.PI / 2);
        left_pinky.rotateZ(Math.PI / 10);
        left_hand.add(left_pinky);

        let left_middle = new T.Mesh(finger_geom, bone_mat);
        left_middle.position.y = -0.1;
        left_middle.position.z = 2;
        left_middle.position.x = 0;
        left_middle.rotateY(Math.PI / 2);
        left_middle.rotateZ(Math.PI / 10);
        left_hand.add(left_middle);

        let left_pointer = new T.Mesh(finger_geom, bone_mat);
        left_pointer.position.y = -0.1;
        left_pointer.position.z = 2;
        left_pointer.position.x = 0.75;
        left_pointer.rotateY(Math.PI / 2);
        left_pointer.rotateZ(Math.PI / 10);
        left_hand.add(left_pointer);

        let left_thumb = new T.Mesh(thumb_geom, bone_mat);
        left_thumb.position.x = 1.5;
        left_thumb.rotateY(-Math.PI / 8);
        left_thumb.rotateZ(-Math.PI / 10);
        left_hand.add(left_thumb);

        let right_upper_joint = new T.Mesh(joint_geom, bone_mat);
        right_upper_joint.position.y = 4.5;
        right_upper_joint.position.x = 3.5;
        right_upper_joint.position.z = 1;
        right_upper_joint.rotateY(-Math.PI / 2);
        spine.add(right_upper_joint);

        let right_upper_arm = new T.Mesh(arm_geom, bone_mat);
        right_upper_arm.position.x = 3.5;
        right_upper_joint.add(right_upper_arm);

        let right_lower_joint = new T.Mesh(joint_geom, bone_mat);
        right_lower_joint.position.x = 3.5;
        right_upper_arm.add(right_lower_joint);

        let right_lower_arm = new T.Mesh(arm_geom, bone_mat);
        right_lower_arm.position.x = 3.5;
        right_lower_joint.add(right_lower_arm);

        let right_hand = new T.Mesh(palm_geom, bone_mat);
        right_hand.position.x = 4.5;
        right_hand.rotateY(Math.PI / 2);
        right_lower_arm.add(right_hand);

        let right_pinky = new T.Mesh(finger_geom, bone_mat);
        right_pinky.position.y = -0.1;
        right_pinky.position.z = 2;
        right_pinky.position.x = -0.75;
        right_pinky.rotateY(Math.PI / 2);
        right_pinky.rotateZ(Math.PI / 10);
        right_hand.add(right_pinky);

        let right_middle = new T.Mesh(finger_geom, bone_mat);
        right_middle.position.y = -0.1;
        right_middle.position.z = 2;
        right_middle.position.x = 0;
        right_middle.rotateY(Math.PI / 2);
        right_middle.rotateZ(Math.PI / 10);
        right_hand.add(right_middle);

        let right_pointer = new T.Mesh(finger_geom, bone_mat);
        right_pointer.position.y = -0.1;
        right_pointer.position.z = 2;
        right_pointer.position.x = 0.75;
        right_pointer.rotateY(Math.PI / 2);
        right_pointer.rotateZ(Math.PI / 10);
        right_hand.add(right_pointer);

        let right_thumb = new T.Mesh(thumb_geom, bone_mat);
        right_thumb.position.x = -1.5;
        right_thumb.rotateY(Math.PI / 8);
        right_thumb.rotateZ(Math.PI / 10);
        right_hand.add(right_thumb);

        

        super("skelly", spine);

        this.tick = function(delta, timeOfDay) {
            switch(stage) {
              case 0:
                right_upper_joint.rotateY(Math.PI / 128);
                right_lower_joint.rotateY(-Math.PI / 128);
                rotation_track++;
                if (rotation_track >= 63) {
                    stage = 1;
                    rotation_track = 0;
                }
                break;
              case 1:
                right_upper_joint.rotateX(-Math.PI / 128);
                rotation_track++;
                if (rotation_track >= 31) {
                    stage = 2;
                    rotation_track = 0;
                }
                break;
              case 2:
                right_upper_joint.rotateY(-Math.PI / 128);
                right_lower_joint.rotateY(Math.PI / 128);
                rotation_track++;
                if (rotation_track >= 63) {
                    stage = 3;
                    rotation_track = 0;
                }
                break;
              case 3:
                right_upper_joint.rotateZ(-Math.PI / 128);
                rotation_track++;
                if (rotation_track >= 31) {
                    stage = 0;
                    rotation_track = 0;
                    right_upper_joint.rotation.set(0, -Math.PI / 2, 0);
                }
                break;
              default:
                console.log("Something went wrong with the skeleton moving its arm!");
            }
        };
    }
}