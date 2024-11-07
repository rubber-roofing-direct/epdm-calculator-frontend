!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequirec08f,n=r.register;n("6MhnG",function(t,r){e(t.exports,"State",function(){return o});let n={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8},i=class e{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(1&this.data)}set blend(e){!!(1&this.data)!==e&&(this.data^=1)}get offsets(){return!!(2&this.data)}set offsets(e){!!(2&this.data)!==e&&(this.data^=2)}set cullMode(e){if("none"===e){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace="front"===e}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(4&this.data)}set culling(e){!!(4&this.data)!==e&&(this.data^=4)}get depthTest(){return!!(8&this.data)}set depthTest(e){!!(8&this.data)!==e&&(this.data^=8)}get depthMask(){return!!(32&this.data)}set depthMask(e){!!(32&this.data)!==e&&(this.data^=32)}get clockwiseFrontFace(){return!!(16&this.data)}set clockwiseFrontFace(e){!!(16&this.data)!==e&&(this.data^=16)}get blendMode(){return this._blendMode}set blendMode(e){this.blend="none"!==e,this._blendMode=e,this._blendModeId=n[e]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){this.offsets=!!e,this._polygonOffset=e}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){let t=new e;return t.depthTest=!1,t.blend=!0,t}};i.default2d=i.for2d();let o=i}),n("lnEQd",function(t,r){e(t.exports,"color32BitToUniform",function(){return n});function n(e,t,r){let n=(e>>24&255)/255;t[r++]=(255&e)/255*n,t[r++]=(e>>8&255)/255*n,t[r++]=(e>>16&255)/255*n,t[r++]=n}}),n("9sM7I",function(t,n){e(t.exports,"UniformGroup",function(){return a});var i=r("6jBqs"),o=r("aSc4s"),s=r("9pExQ");let u=class e{constructor(t,r){this._touched=0,this.uid=(0,i.uid)("uniform"),this._resourceType="uniformGroup",this._resourceId=(0,i.uid)("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,r={...e.defaultOptions,...r},this.uniformStructures=t;let n={};for(let e in t){let r=t[e];r.name=e,r.size=r.size??1,r.value??(r.value=(0,s.getDefaultUniformValue)(r.type,r.size)),n[e]=r.value}this.uniforms=n,this._dirtyId=1,this.ubo=r.ubo,this.isStatic=r.isStatic,this._signature=(0,o.createIdFromString)(Object.keys(n).map(e=>`${e}-${t[e].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};u.defaultOptions={ubo:!1,isStatic:!1};let a=u}),n("aSc4s",function(t,r){e(t.exports,"createIdFromString",function(){return o});let n=Object.create(null),i=Object.create(null);function o(e,t){let r=i[e];return void 0===r&&(void 0===n[t]&&(n[t]=1),i[e]=r=n[t]++),r}}),n("9pExQ",function(t,r){e(t.exports,"getDefaultUniformValue",function(){return n});function n(e,t){switch(e){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}}),n("8ThIR",function(t,r){e(t.exports,"BatchableSprite",function(){return n});class n{constructor(){this.vertexSize=4,this.indexSize=6,this.location=0,this.batcher=null,this.batch=null,this.roundPixels=0}get blendMode(){return this.renderable.groupBlendMode}packAttributes(e,t,r,n){let i=this.renderable,o=this.texture,s=i.groupTransform,u=s.a,a=s.b,l=s.c,c=s.d,f=s.tx,d=s.ty,m=this.bounds,p=m.maxX,h=m.minX,g=m.maxY,x=m.minY,v=o.uvs,b=i.groupColorAlpha,P=n<<16|65535&this.roundPixels;e[r+0]=u*h+l*x+f,e[r+1]=c*x+a*h+d,e[r+2]=v.x0,e[r+3]=v.y0,t[r+4]=b,t[r+5]=P,e[r+6]=u*p+l*x+f,e[r+7]=c*x+a*p+d,e[r+8]=v.x1,e[r+9]=v.y1,t[r+10]=b,t[r+11]=P,e[r+12]=u*p+l*g+f,e[r+13]=c*g+a*p+d,e[r+14]=v.x2,e[r+15]=v.y2,t[r+16]=b,t[r+17]=P,e[r+18]=u*h+l*g+f,e[r+19]=c*g+a*h+d,e[r+20]=v.x3,e[r+21]=v.y3,t[r+22]=b,t[r+23]=P}packIndex(e,t,r){e[t]=r+0,e[t+1]=r+1,e[t+2]=r+2,e[t+3]=r+0,e[t+4]=r+2,e[t+5]=r+3}reset(){this.renderable=null,this.texture=null,this.batcher=null,this.batch=null,this.bounds=null}}}),n("19tOl",function(t,n){e(t.exports,"TexturePool",function(){return a});var i=r("6rmAc"),o=r("8kJbj"),s=r("9CEZC");let u=0,a=new class{constructor(e){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1}createTexture(e,t,r){let n=new o.TextureSource({...this.textureOptions,width:e,height:t,resolution:1,antialias:r,autoGarbageCollect:!0});return new s.Texture({source:n,label:`texturePool_${u++}`})}getOptimalTexture(e,t,r=1,n){let o=Math.ceil(e*r-1e-6),s=Math.ceil(t*r-1e-6);o=(0,i.nextPow2)(o),s=(0,i.nextPow2)(s);let u=(o<<17)+(s<<1)+(n?1:0);this._texturePool[u]||(this._texturePool[u]=[]);let a=this._texturePool[u].pop();return a||(a=this.createTexture(o,s,n)),a.source._resolution=r,a.source.width=o/r,a.source.height=s/r,a.source.pixelWidth=o,a.source.pixelHeight=s,a.frame.x=0,a.frame.y=0,a.frame.width=e,a.frame.height=t,a.updateUvs(),this._poolKeyHash[a.uid]=u,a}getSameSizeTexture(e,t=!1){let r=e.source;return this.getOptimalTexture(e.width,e.height,r._resolution,t)}returnTexture(e){let t=this._poolKeyHash[e.uid];this._texturePool[t].push(e)}clear(e){if(e=!1!==e)for(let e in this._texturePool){let t=this._texturePool[e];if(t)for(let e=0;e<t.length;e++)t[e].destroy(!0)}this._texturePool={}}}}),n("gj1bj",function(t,n){e(t.exports,"compileHighShaderGpuProgram",function(){return l}),e(t.exports,"compileHighShaderGlProgram",function(){return c});var i=r("jsPVY"),o=r("hLIBN"),s=r("lRpUn"),u=r("imvpD"),a=r("js5wT");function l({bits:e,name:t}){let r=(0,s.compileHighShader)({template:{fragment:u.fragmentGPUTemplate,vertex:u.vertexGPUTemplate},bits:[a.globalUniformsBit,...e]});return(0,o.GpuProgram).from({name:t,vertex:{source:r.vertex,entryPoint:"main"},fragment:{source:r.fragment,entryPoint:"main"}})}function c({bits:e,name:t}){return new i.GlProgram({name:t,...(0,s.compileHighShaderGl)({template:{vertex:u.vertexGlTemplate,fragment:u.fragmentGlTemplate},bits:[a.globalUniformsBitGl,...e]})})}}),n("jsPVY",function(t,n){e(t.exports,"GlProgram",function(){return p});var i=r("aSc4s"),o=r("3UtBM"),s=r("2Pp30"),u=r("9weKz"),a=r("amwFY"),l=r("5i2qO"),c=r("1ZUVe");let f={stripVersion:c.stripVersion,ensurePrecision:u.ensurePrecision,addProgramDefines:s.addProgramDefines,setProgramName:l.setProgramName,insertVersion:a.insertVersion},d=Object.create(null),m=class e{constructor(t){t={...e.defaultOptions,...t};let r=-1!==t.fragment.indexOf("#version 300 es"),n={stripVersion:r,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:(0,o.getMaxFragmentPrecision)()},setProgramName:{name:t.name},addProgramDefines:r,insertVersion:r},s=t.fragment,u=t.vertex;Object.keys(f).forEach(e=>{let t=n[e];s=f[e](s,t,!0),u=f[e](u,t,!1)}),this.fragment=s,this.vertex=u,this._key=(0,i.createIdFromString)(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){let r=`${t.vertex}:${t.fragment}`;return d[r]||(d[r]=new e(t)),d[r]}};m.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let p=m}),n("3UtBM",function(t,n){let i;e(t.exports,"getMaxFragmentPrecision",function(){return s});var o=r("7w7Gr");function s(){if(!i){i="mediump";let e=(0,o.getTestContext)();if(e&&e.getShaderPrecisionFormat){let t=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT);i=t.precision?"highp":"mediump"}}return i}}),n("7w7Gr",function(t,n){let i;e(t.exports,"getTestContext",function(){return s});var o=r("465w7");function s(){if(!i||i?.isContextLost()){let e=(0,o.DOMAdapter).get().createCanvas();i=e.getContext("webgl",{})}return i}}),n("2Pp30",function(t,r){e(t.exports,"addProgramDefines",function(){return n});function n(e,t,r){return t?e:r?(e=e.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${e}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${e}
        `}}),n("9weKz",function(t,r){e(t.exports,"ensurePrecision",function(){return n});function n(e,t,r){let n=r?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if("precision"!==e.substring(0,9)){let i=r?t.requestedFragmentPrecision:t.requestedVertexPrecision;return"highp"===i&&"highp"!==n&&(i="mediump"),`precision ${i} float;
${e}`}return"highp"!==n&&"precision highp"===e.substring(0,15)?e.replace("precision highp","precision mediump"):e}}),n("amwFY",function(t,r){e(t.exports,"insertVersion",function(){return n});function n(e,t){return t?`#version 300 es
${e}`:e}}),n("5i2qO",function(t,r){e(t.exports,"setProgramName",function(){return o});let n={},i={};function o(e,{name:t="pixi-program"},r=!0){t=t.replace(/\s+/g,"-")+(r?"-fragment":"-vertex");let o=r?n:i;if(o[t]?(o[t]++,t+=`-${o[t]}`):o[t]=1,-1!==e.indexOf("#define SHADER_NAME"))return e;let s=`#define SHADER_NAME ${t}`;return`${s}
${e}`}}),n("1ZUVe",function(t,r){e(t.exports,"stripVersion",function(){return n});function n(e,t){return t?e.replace("#version 300 es",""):e}}),n("hLIBN",function(t,n){e(t.exports,"GpuProgram",function(){return f});var i=r("aSc4s"),o=r("8MjDo"),s=r("14iiG"),u=r("36brR"),a=r("3Udtg"),l=r("bfu5u");let c=Object.create(null);class f{constructor(e){this._layoutKey=0;let{fragment:t,vertex:r,layout:n,gpuLayout:i,name:o}=e;if(this.name=o,this.fragment=t,this.vertex=r,t.source===r.source){let e=(0,s.extractStructAndGroups)(t.source);this.structsAndGroups=e}else{let e=(0,s.extractStructAndGroups)(r.source),n=(0,s.extractStructAndGroups)(t.source);this.structsAndGroups=(0,l.removeStructAndGroupDuplicates)(e,n)}this.layout=n??(0,a.generateLayoutHash)(this.structsAndGroups),this.gpuLayout=i??(0,u.generateGpuLayoutGroups)(this.structsAndGroups),this.autoAssignGlobalUniforms=this.layout[0]?.globalUniforms!==void 0,this.autoAssignLocalUniforms=this.layout[1]?.localUniforms!==void 0,this._generateProgramKey()}_generateProgramKey(){let{vertex:e,fragment:t}=this,r=e.source+t.source+e.entryPoint+t.entryPoint;this._layoutKey=(0,i.createIdFromString)(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=(0,o.extractAttributesFromGpuProgram)(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(e){let t=`${e.vertex.source}:${e.fragment.source}:${e.fragment.entryPoint}:${e.vertex.entryPoint}`;return c[t]||(c[t]=new f(e)),c[t]}}}),n("8MjDo",function(t,n){e(t.exports,"extractAttributesFromGpuProgram",function(){return s});var i=r("cwn6X");let o={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function s({source:e,entryPoint:t}){let r={},n=e.indexOf(`fn ${t}`);if(-1!==n){let t=e.indexOf("->",n);if(-1!==t){let s;let u=e.substring(n,t),a=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;for(;null!==(s=a.exec(u));){let e=o[s[3]]??"float32";r[s[2]]={location:parseInt(s[1],10),format:e,stride:(0,i.getAttributeInfoFromFormat)(e).stride,offset:0,instance:!1,start:0}}}}return r}}),n("cwn6X",function(t,r){e(t.exports,"getAttributeInfoFromFormat",function(){return i});let n={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function i(e){return n[e]??n.float32}}),n("14iiG",function(t,r){e(t.exports,"extractStructAndGroups",function(){return n});function n(e){let t=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,n=/var(<[^>]+>)? (\w+)/,i=/:\s*(\w+)/,o=/(\w+)\s*:\s*([\w\<\>]+)/g,s=/struct\s+(\w+)/,u=e.match(/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g)?.map(e=>({group:parseInt(e.match(t)[1],10),binding:parseInt(e.match(r)[1],10),name:e.match(n)[2],isUniform:"<uniform>"===e.match(n)[1],type:e.match(i)[1]}));if(!u)return{groups:[],structs:[]};let a=e.match(/struct\s+(\w+)\s*{([^}]+)}/g)?.map(e=>{let t=e.match(s)[1],r=e.match(o).reduce((e,t)=>{let[r,n]=t.split(":");return e[r.trim()]=n.trim(),e},{});return r?{name:t,members:r}:null}).filter(({name:e})=>u.some(t=>t.type===e))??[];return{groups:u,structs:a}}}),n("36brR",function(t,n){e(t.exports,"generateGpuLayoutGroups",function(){return o});var i=r("022WS");function o({groups:e}){let t=[];for(let r=0;r<e.length;r++){let n=e[r];t[n.group]||(t[n.group]=[]),n.isUniform?t[n.group].push({binding:n.binding,visibility:i.ShaderStage.VERTEX|i.ShaderStage.FRAGMENT,buffer:{type:"uniform"}}):"sampler"===n.type?t[n.group].push({binding:n.binding,visibility:i.ShaderStage.FRAGMENT,sampler:{type:"filtering"}}):"texture_2d"===n.type&&t[n.group].push({binding:n.binding,visibility:i.ShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}}),n("022WS",function(t,r){e(t.exports,"ShaderStage",function(){return i});var n,i=((n=i||{})[n.VERTEX=1]="VERTEX",n[n.FRAGMENT=2]="FRAGMENT",n[n.COMPUTE=4]="COMPUTE",n)}),n("3Udtg",function(t,r){e(t.exports,"generateLayoutHash",function(){return n});function n({groups:e}){let t=[];for(let r=0;r<e.length;r++){let n=e[r];t[n.group]||(t[n.group]={}),t[n.group][n.name]=n.binding}return t}}),n("bfu5u",function(t,r){e(t.exports,"removeStructAndGroupDuplicates",function(){return n});function n(e,t){let r=new Set,n=new Set,i=[...e.structs,...t.structs].filter(e=>!r.has(e.name)&&(r.add(e.name),!0)),o=[...e.groups,...t.groups].filter(e=>{let t=`${e.name}-${e.binding}`;return!n.has(t)&&(n.add(t),!0)});return{structs:i,groups:o}}}),n("lRpUn",function(t,n){e(t.exports,"compileHighShader",function(){return d}),e(t.exports,"compileHighShaderGl",function(){return m});var i=r("gOiiI"),o=r("iA30w"),s=r("dq0AB"),u=r("2i4GL"),a=r("flyj2");let l=Object.create(null),c=new Map,f=0;function d({template:e,bits:t}){let r=p(e,t);if(l[r])return l[r];let{vertex:n,fragment:i}=function(e,t){let r=t.map(e=>e.vertex).filter(e=>!!e),n=t.map(e=>e.fragment).filter(e=>!!e),i=(0,s.compileInputs)(r,e.vertex,!0);i=(0,u.compileOutputs)(r,i);let o=(0,s.compileInputs)(n,e.fragment,!0);return{vertex:i,fragment:o}}(e,t);return l[r]=h(n,i,t),l[r]}function m({template:e,bits:t}){let r=p(e,t);return l[r]||(l[r]=h(e.vertex,e.fragment,t)),l[r]}function p(e,t){return t.map(e=>(c.has(e)||c.set(e,f++),c.get(e))).sort((e,t)=>e-t).join("-")+e.vertex+e.fragment}function h(e,t,r){let n=(0,o.compileHooks)(e),s=(0,o.compileHooks)(t);return r.forEach(e=>{(0,i.addBits)(e.vertex,n,e.name),(0,i.addBits)(e.fragment,s,e.name)}),{vertex:(0,a.injectBits)(e,n),fragment:(0,a.injectBits)(t,s)}}}),n("gOiiI",function(t,n){e(t.exports,"addBits",function(){return o});var i=r("bkdan");function o(e,t,r){if(e)for(let n in e){let o=n.toLocaleLowerCase(),s=t[o];if(s){let t=e[n];"header"===n&&(t=t.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),r&&s.push(`//----${r}----//`),s.push(t)}else(0,i.warn)(`${n} placement hook does not exist in shader`)}}}),n("iA30w",function(t,r){e(t.exports,"compileHooks",function(){return i});let n=/\{\{(.*?)\}\}/g;function i(e){let t={},r=e.match(n)?.map(e=>e.replace(/[{()}]/g,""))??[];return r.forEach(e=>{t[e]=[]}),t}}),n("dq0AB",function(t,r){function n(e,t){let r;let n=/@in\s+([^;]+);/g;for(;null!==(r=n.exec(e));)t.push(r[1])}function i(e,t,r=!1){let i=[];n(t,i),e.forEach(e=>{e.header&&n(e.header,i)}),r&&i.sort();let o=i.map((e,t)=>`       @location(${t}) ${e},`).join("\n");return t.replace(/@in\s+[^;]+;\s*/g,"").replace("{{in}}",`
${o}
`)}e(t.exports,"compileInputs",function(){return i})}),n("2i4GL",function(t,r){function n(e,t){let r;let n=/@out\s+([^;]+);/g;for(;null!==(r=n.exec(e));)t.push(r[1])}function i(e,t){let r=[];n(t,r),e.forEach(e=>{e.header&&n(e.header,r)});let i=0,o=r.sort().map(e=>e.indexOf("builtin")>-1?e:`@location(${i++}) ${e}`).join(",\n"),s=r.sort().map(e=>`       var ${e.replace(/@.*?\s+/g,"")};`).join("\n"),u=`return VSOutput(
                ${r.sort().map(e=>` ${function(e){let t=/\b(\w+)\s*:/g.exec(e);return t?t[1]:""}(e)}`).join(",\n")});`,a=t.replace(/@out\s+[^;]+;\s*/g,"");return(a=(a=a.replace("{{struct}}",`
${o}
`)).replace("{{start}}",`
${s}
`)).replace("{{return}}",`
${u}
`)}e(t.exports,"compileOutputs",function(){return i})}),n("flyj2",function(t,r){e(t.exports,"injectBits",function(){return n});function n(e,t){let r=e;for(let e in t){let n=t[e],i=n.join("\n");r=i.length?r.replace(`{{${e}}}`,`//-----${e} START-----//
${n.join("\n")}
//----${e} FINISH----//`):r.replace(`{{${e}}}`,"")}return r}}),n("imvpD",function(t,r){e(t.exports,"vertexGPUTemplate",function(){return n}),e(t.exports,"fragmentGPUTemplate",function(){return i}),e(t.exports,"vertexGlTemplate",function(){return o}),e(t.exports,"fragmentGlTemplate",function(){return s});let n=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,i=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        return outColor * vColor;
      };
`,o=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;
        
        {{start}}
        
        vColor = vec4(1.);
        
        {{main}}
        
        vUV = uv;
        
        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,s=`
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
    }
`}),n("js5wT",function(t,r){e(t.exports,"globalUniformsBit",function(){return n}),e(t.exports,"globalUniformsBitGl",function(){return i});let n={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},i={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}}}),n("bUD3i",function(t,r){e(t.exports,"colorBit",function(){return n}),e(t.exports,"colorBitGl",function(){return i});let n={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},i={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}}}),n("4TZQr",function(t,r){e(t.exports,"generateTextureBatchBit",function(){return i}),e(t.exports,"generateTextureBatchBitGl",function(){return s});let n={};function i(e){return n[e]||(n[e]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;
    
                ${function(e){let t=[];if(1===e)t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),t.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let r=0;for(let n=0;n<e;n++)t.push(`@group(1) @binding(${r++}) var textureSource${n+1}: texture_2d<f32>;`),t.push(`@group(1) @binding(${r++}) var textureSampler${n+1}: sampler;`)}return t.join("\n")}(16)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);
    
                ${function(e){let t=[];if(1===e)t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{t.push("switch vTextureId {");for(let r=0;r<e;r++)r===e-1?t.push("  default:{"):t.push(`  case ${r}:{`),t.push(`      outColor = textureSampleGrad(textureSource${r+1}, textureSampler${r+1}, vUV, uvDx, uvDy);`),t.push("      break;}");t.push("}")}return t.join("\n")}(16)}
            `}}),n[e]}let o={};function s(e){return o[e]||(o[e]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;
              
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;
    
                uniform sampler2D uTextures[${e}];
              
            `,main:`
    
                ${function(e){let t=[];for(let r=0;r<e;r++)r>0&&t.push("else"),r<e-1&&t.push(`if(vTextureId < ${r}.5)`),t.push("{"),t.push(`	outColor = texture(uTextures[${r}], vUV);`),t.push("}");return t.join("\n")}(16)}
            `}}),o[e]}}),n("6uTt2",function(t,r){e(t.exports,"roundPixelsBit",function(){return n}),e(t.exports,"roundPixelsBitGl",function(){return i});let n={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},i={name:"round-pixels-bit",vertex:{header:`   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}}}),n("7qYmo",function(n,i){e(n.exports,"Shader",function(){return f});var o=r("lobE7"),s=r("jsPVY"),u=r("4xdiN"),a=r("hLIBN"),l=r("hOkbm"),c=r("9sM7I");class f extends t(o){constructor(e){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:t,glProgram:r,groups:n,resources:i,compatibleRenderers:o,groupMap:s}=e;this.gpuProgram=t,this.glProgram=r,void 0===o&&(o=0,t&&(o|=l.RendererType.WEBGPU),r&&(o|=l.RendererType.WEBGL)),this.compatibleRenderers=o;let a={};if(i||n||(i={}),i&&n)throw Error("[Shader] Cannot have both resources and groups");if(t||!n||s){if(!t&&n&&s)for(let e in s)for(let t in s[e]){let r=s[e][t];a[r]={group:e,binding:t,name:r}}else if(t&&n&&!s){let e=t.structsAndGroups.groups;s={},e.forEach(e=>{s[e.group]=s[e.group]||{},s[e.group][e.binding]=e.name,a[e.name]=e})}else if(i){if(t){let e=t.structsAndGroups.groups;s={},e.forEach(e=>{s[e.group]=s[e.group]||{},s[e.group][e.binding]=e.name,a[e.name]=e})}else{s={},n={99:new u.BindGroup},this._ownedBindGroups.push(n[99]);let e=0;for(let t in i)a[t]={group:99,binding:e,name:t},s[99]=s[99]||{},s[99][e]=t,e++}for(let e in n={},i){let t=i[e];t.source||t._resourceType||(t=new c.UniformGroup(t));let r=a[e];r&&(n[r.group]||(n[r.group]=new u.BindGroup,this._ownedBindGroups.push(n[r.group])),n[r.group].setResource(t,r.binding))}}}else throw Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");this.groups=n,this._uniformBindMap=s,this.resources=this._buildResourceAccessor(n,a)}addResource(e,t,r){var n,i;(n=this._uniformBindMap)[t]||(n[t]={}),(i=this._uniformBindMap[t])[r]||(i[r]=e),this.groups[t]||(this.groups[t]=new u.BindGroup,this._ownedBindGroups.push(this.groups[t]))}_buildResourceAccessor(e,t){let r={};for(let n in t){let i=t[n];Object.defineProperty(r,i.name,{get:()=>e[i.group].getResource(i.binding),set(t){e[i.group].setResource(t,i.binding)}})}return r}destroy(e=!1){this.emit("destroy",this),e&&(this.gpuProgram?.destroy(),this.glProgram?.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(e=>{e.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(e){let t,r;let{gpu:n,gl:i,...o}=e;return n&&(t=(0,a.GpuProgram).from(n)),i&&(r=(0,s.GlProgram).from(i)),new f({gpuProgram:t,glProgram:r,...o})}}}),n("hOkbm",function(t,r){e(t.exports,"RendererType",function(){return i});var n,i=((n=i||{})[n.WEBGL=1]="WEBGL",n[n.WEBGPU=2]="WEBGPU",n[n.BOTH=3]="BOTH",n)}),n("01Kvl",function(t,r){e(t.exports,"localUniformBit",function(){return n}),e(t.exports,"localUniformBitGroup2",function(){return i}),e(t.exports,"localUniformBitGl",function(){return o});let n={name:"local-uniform-bit",vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}},i={...n,vertex:{...n.vertex,header:n.vertex.header.replace("group(1)","group(2)")}},o={name:"local-uniform-bit",vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}}})}();