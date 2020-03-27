const radians = (degrees) => {
    return degrees * Math.PI / 180;
}
const distance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1- y2), 2));
}
const map = (value,start1,stop1,start2,stop2)=>{
    return (value - start1) / (stop1 - start1)*(stop2-start2)+start2
}



// import RoundedBoxGeometry from './roundedBox.js';
// class Box{
//     constructor(){
//         this.geom = new RoundedBoxGeometry(.5,.5,.5,.02,.2);
//         this.rotationX = 0;
//         this.rotationY = 0;
//         this.rotationZ = 0;
//     }
// }
// class Cone{
//     constructor(){
//         this.geom = new THREE.ConeBufferGeometry(.3,.5,32);
//         this.rotationX = 0;
//         this.rotationY = 0;
//         this.rotationZ = radians(-180);

//     }
// }
// class Tourus{
//     constructor(){
//         this.geom = new THREE.TorusBufferGeometry(.3,.12,30,200);
//         this.rotationX = radians(270);
//         this.rotationY = 0;
//         this.rotationZ = 0;
//     }
// }

class textGeo{
    //constructor(text,font){
    constructor(text,font){
        this.geom = new THREE.TextGeometry(text, {
            font: font,
            size: 2,
            height: 2,
            curveSegments: 3
    });
    this.rotationX = radians(-90);
    this.rotationY = 0;
    this.rotationZ = 0;
    // var materials = [
    //     new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff, overdraw: 0.5 } ),
    //     new THREE.MeshBasicMaterial( { color: 0xff0000, overdraw: 0.5 } )
    // ];
    // var textMesh = new THREE.Mesh(textGeometry, materials);
    // .scene.add(textMesh);
     }
}

export default class App{
    setup(){
        this.raycaster = new THREE.Raycaster();

        this.gutter = {size:5};
        this.meshes = [];
        // this.grid = { cols:21,rows:6};
        this.grid = { cols:21,rows:20};//YADOSAI

        this.width = window.innerWidth;
        // this.height = window.innerHeight/3;
        this.height = window.innerHeight;

        this.mouse3D = new THREE.Vector2();
        this.mouse3Dprev = new THREE.Vector2();
        this.geometries = [
            // new Box(),
            // new Tourus(),
            // new Cone(),
            new textGeo("Y",this.font),
            new textGeo("A",this.font),
            new textGeo("D",this.font),
            new textGeo("O",this.font),
            new textGeo("S",this.font),
            new textGeo("A",this.font),
            new textGeo("I",this.font)
        ];

        window.addEventListener('mousemove',this.onMouseMove.bind(this),{passive:true});

            this.onMouseMove({clientX:0,clientY:0});
    }




        //MouseMove handler


        onMouseMove({clientX,clientY}){
            this.mouse3D.x = (clientX / this.width) * 2 - 1;
            this.mouse3D.y = - (clientY / this.height) * 2 + 1;
        }
        //正規化


        //mouse3dprev.x (宣言しとく)




    createScene(){
        this.scene = new THREE.Scene();
        
        //this.renderer = new THREE.WebGLRenderer({antialitias:true,alpha:true});
        this.renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#mycanvas')});
        this.renderer.setSize(this.width,this.height);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        //document.body.appendChild(this.renderer.domElement);

    }


    createCamera(){
        this.camera = new THREE.PerspectiveCamera(20,this.width/this.height,1);
        
        // this.camera.position.set(0,20,0);
        this.camera.position.set(0,100,0);

        this.camera.rotation.x = -1.57;

        this.scene.add(this.camera);
    }


    getRandomGeometry(){
        return this.geometries[Math.floor(Math.random()*Math.floor(this.geometries.length))];
        
        //!ここ何言ってるのかわからなかった
        //geometrisは配列で定義されている。配列の中にインスタンスが入っている
        //ので[]の中にはlength－１までのランダムな整数値が入ってほしい
        //Math.random()は必ず[0,1)で、length（今回は３）は含まない
            
    }

    getMesh(geometry,material){
        const mesh = new THREE.Mesh(geometry,material);

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        return mesh;
        //meshはthree.jsにおいては特に網目状のものではない

    }

    createGrid(){
        this.groupMesh = new THREE.Object3D();

        const meshParams = {
            color: '#fffffff',
            metalness: .58,
            emissive: '#000000',
            roughness: .18,
        };
        //paramはパラメータのこと

        // we create iyr ateruak iytsude tge iio ti kwwp ir moew performant
        const material = new THREE.MeshPhysicalMaterial(meshParams);


        for (let row =0; row < this.grid.rows; row++){
            this.meshes[row] = [];

            for (let col =0;col < this.grid.cols; col++){
                const geometry = this.geometries[col%this.geometries.length];
                const mesh = this.getMesh(geometry.geom, material);
                //!getRandomGeometryの中のgeomというプロパティがgeometry

                mesh.position.set(col + (col* this.gutter.size),0,row+(row*this.gutter.size));
                mesh.rotation.x = geometry.rotationX;
                mesh.rotation.y = geometry.rotationY;
                mesh.rotation.z = geometry.rotationZ;
                //?gutter.sizeがよくわからない
                //

                mesh.initialRotation = {
                    x: mesh.rotation.x,
                    y: mesh.rotation.y,
                    z: mesh.rotation.z,
                };
                //

                this.groupMesh.add(mesh);
                
                //store ethe element inside our array so we an get bak when need to animate
                this.meshes[row][col] = mesh;

            }
        

        }

        //center an the Z and Z our group mesh containing all the grid elements
        const centerX = ((this.grid.cols - 1) + ((this.grid.cols - 1) * this.gutter.size)) *.5;
        const centerZ = ((this.grid.rows - 1) + ((this.grid.rows - 1) * this.gutter.size)) *.5;
        this.groupMesh.position.set(-centerX,0,-centerZ);

        this.scene.add(this.groupMesh);
    }

    addAmbientLIght(){
        const light = new THREE.AmbientLight('#c8031f',1);
        
        this.scene.add(light);
    }

    /*addSpotLight(){
        const light = new THREE.SpotLight('#dfc392',1,1000);

        light.position.set(0,27,0);
        light.castShadow = true;

        this.scene.add(light);
    }*/

    addRectLight(){
        const light = new THREE.AmbientLight('#c8031f',1,2000,2000);

        light.position.set(5,50,50);
        light.lookAt(0,0,0);
        this.scene.add(light);
    }

    addPointLight(color, position){
        const light = new THREE.PointLight(color, 1, 1000,1);

        light.position.set(position.x,position.y,position.z);

        this.scene.add(light);
    }

    addCameraControls(){
        this.controls = new THREE.OrbitControls(this.camera,this.renderer.domElement);
    }

    addFloor(){
        const geometry = new THREE.PlaneGeometry(100,100);
        const material = new THREE.ShadowMaterial({ opacity: .3});

        this.floor = new THREE.Mesh(geometry, material);
        this.floor.position.y = 0;
        this.floor.receiveShadow = true;
        this.floor.rotateX(-Math.PI / 2);
        //floorのデフォはxy平面（スクリーン）
        //回転して{x,z}に

        this.scene.add(this.floor);

    }

    TextLoad(){
        var loader = new THREE.FontLoader();
        loader.load('yadokarisai_toha/helvetiker_regular.typeface.json',(font)=>{
            this.font = font;
            this.init();
        });        
    }
    //アロー関数のとこ、なまえをつけたかったら変数に入れるらしい
    


    // createTextMesh(){
    //     var loader = new THREE.FontLoader();
    //     loader.load('yadokarisai_toha/helvetiker_regular.typeface.json', (font)=>{
	//         var textGeometry = new THREE.TextGeometry("Hello Three.js!", {
	// 	        font: font,
	// 	        size: 10,
	// 	        height: 5,
	// 	        curveSegments: 12
	//     });
	//     /*var materials = [
	// 	    new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff, overdraw: 0.5 } ),
	// 	    new THREE.MeshBasicMaterial( { color: 0xff0000, overdraw: 0.5 } )
	//     ];*/
	//     var textMesh = new THREE.Mesh(textGeometry, materials);
	//     this.scene.add(textMesh);
    // });


    //このthisはloader.loadのfunctionの中に入っているから、このthisは他のthisとは違う
    //thisの中身は構文によって違う
    //functionの中のthisは呼び出し「その間数自体を呼び出したところのthis」
    //「javascript this」で検索するのがオススメ

    //}

    //this is the function where all the animations are handled;
    //it will be calles on every frame inside a requestAnimationFrame callbeck

    init(){
        this.setup();
        this.createScene();
        this.createCamera();
        this.addAmbientLIght();
        //this.addSpotLight();
        this.addRectLight();
        this.createGrid();
        this.addCameraControls();
        this.addFloor();
        this.renderer.setClearColor(0xc8031f)
        this.animate();
        this.addPointLight(0xfff000,{x:0,y:10,z:-100});
        this.addPointLight(0xfff000,{x:100,y:10,x:0});
        this.addPointLight(0x00ff00,{x:20,y:5,z:20});
        //this.createTextMesh();

    }

    onResize(){
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.width,this.height);

    }

//クラスを書くときにはインスタンスがわからないからthisを書く
    draw(){
        //maps our mouse coordinates from the cmera perspective
        
        this.raycaster.setFromCamera(this.mouse3D,this.camera);
        //スクリーン上のマウス座標（クライアント座標）をwindowの大きさを使って正規化して
        //三次元上に、戻す。カメラからスクリーンに投影した行列の逆行列で。
        //それを実座標に戻す


        const intersects = this.raycaster.intersectObjects([this.floor]);
        //floorとの交点の情報が入ったarray

        if(intersects.length){
        //lengthは配列の長さ

            const {x,z} = intersects[0].point;
            //intersects[0].pointにはx,y,zというキーとvalueがはいっている
            //intersects[0]はfloorとの最初の交点というイメージで
            //交点がひとつしかとれないということではない

            for(let row = 0; row < this.grid.rows; row++){
                
                for (let col = 0; col < this.grid.cols; col++){
                    const mesh = this.meshes[row][col];
                    //これから多用するmeshes[row][col]を簡単にしただけ

                    const mouseDistance = distance(x,z,
                        mesh.position.x + this.groupMesh.position.x,
                        mesh.position.z + this.groupMesh.position.z);
                        //?groupMeshがよくわからない
                        //x,zはintersectsのx､y、さっきとりだしたやつ

                    const maxPositionY = 10;
                    const minPositionY = 0;
                    const startDistance = 6;
                    const endDistance = 0;
                    const y = map(mouseDistance, startDistance, 
                                  endDistance, minPositionY, maxPositionY);

                    //mapは関数の中での相対位置を保存するみたいな
                   
                    
                    TweenMax.to(mesh.position,0.2,{y: y<1?1:y});
                  　
                    
                    //mesh.position.y = y<1?1:y;
                    //なめらかなアニメーションにしてくれる、0.5はyを変更するまでの秒数

                    const scaleFactor = mesh.position.y / 2.5;
                    const scale = scaleFactor < 1 ? 1 : scaleFactor;
                      
                    TweenMax.to(mesh.scale, .4,{
                        ease: Back.easeOut.config(1.7),
                        //ease in は始点からの線形をなめらかにする
                        //ease out は終点までの線形をなめらかにする
                        //?なぜeaseOutなのかわからない
                        //?config(1.7)が何を指すか
                        x:scale,
                        y:scale,
                        z:scale,
                    });
                    //大きさに関しても高さと同じようにマウス座標を考えるので
                    //mesh.position.yを流用

                    /*TweenMax.to(mesh.rotation, .7,{
                        ease: Back.easeOut.config(1.7),
                        x:map(mesh.position.y,-1,1,radians(45),mesh.initialRotation.x),
                        z:map(mesh.position.y, -1, 1, radians(-90),mesh.initialRotation.z),
                        y:map(mesh.position.y,-1,1,radians(90),mesh.initialRotation.y),
                    });*/
                    //map(value,start1,stop1,start2,stop2)
                    //回転する量に関しても高さと同じようにマウス座標を考えるので
                    //mesh.position.yを流用
                }
                
               }
        }
        this.mouse3Dprev = this.mouse3D;

    }
    animate(){
        this.controls.update();
        this.draw();
        this.renderer.render(this.scene,this.camera);
        requestAnimationFrame(this.animate.bind(this))
    }
}

new App().TextLoad();
//new App().init();