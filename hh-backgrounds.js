(()=>{var Ia=1,Il=2,ki=3,un=0,xt=1,Da=2;var Sh=0,bh=1,Yt=2;var Ln=100;var Uo=204,Io=205;var Eh=0,nu=1,ru=2,cn=0,Dl=1,Nl=2,Ol=3,Yi=4,su=5;var Th=300,fr=301,mr=302,Do=303,No=304,Na=306,Oo=1e3,Vi=1001,Fo=1002,Wt=1003,ql=1004;var Ya=1005;var gi=1006,au=1007;var ea=1008;var Dn=1009;var Fl=1012,wh=1013,an=1014,on=1015,Ut=1016,Ah=1017,Rh=1018,Nn=1020;var Mi=1023;var On=1026,gr=1027;var Ch=1029;var _h=1031,Ph=1033,Ja=33776,Za=33777,Ka=33778,Qa=33779,jl=35840,Yl=35841,Jl=35842,Zl=35843;var Kl=37492,Ql=37496,$l=37808,ec=37809,tc=37810,ic=37811,nc=37812,rc=37813,sc=37814,ac=37815,oc=37816,lc=37817,cc=37818,hc=37819,uc=37820,dc=37821,$a=36492,pc=36494,fc=36495;var mc=36284,gc=36285,vc=36286;var ta=2300,ia=2301,eo=2302,yc=2400,xc=2401,Mc=2402;var Lh=3e3,Fn=3001;var Uh=3201;var Si="",ct="srgb",Wi="srgb-linear",Bl="display-p3",Oa="display-p3-linear",na="linear",dt="srgb",ra="rec709",sa="p3";var Xn=7680;var Bo=35044;var Sc="300 es",zo=1035,vr=2e3,aa=2001,dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bc=1234567,ur=Math.PI/180,Kr=180/Math.PI;function Ei(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Ot[255&r]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]+"-"+Ot[255&e]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[63&t|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[255&i]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function At(r,e,t){return Math.max(e,Math.min(t,r))}function Ho(r,e){return(r%e+e)%e}function Xr(r,e,t){return(1-t)*r+t*e}function ko(r){return(r&r-1)==0&&r!==0}function ou(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function oa(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function bi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var Ih={DEG2RAD:ur,RAD2DEG:Kr,generateUUID:Ei,clamp:At,euclideanModulo:Ho,mapLinear:function(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:Xr,damp:function(r,e,t,i){return Xr(r,e,1-Math.exp(-t*i))},pingpong:function(r,e=1){return e-Math.abs(Ho(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(bc=r);let e=bc+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*ur},radToDeg:function(r){return r*Kr},isPowerOfTwo:ko,ceilPowerOfTwo:ou,floorPowerOfTwo:oa,setQuaternionFromProperEuler:function(r,e,t,i,n){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(n){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}},normalize:lt,denormalize:bi},te=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ke=class r{constructor(e,t,i,n,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],x=n[0],f=n[3],y=n[6],v=n[1],m=n[4],E=n[7],M=n[2],b=n[5],A=n[8];return s[0]=a*x+o*v+l*M,s[3]=a*f+o*m+l*b,s[6]=a*y+o*E+l*A,s[1]=c*x+h*v+d*M,s[4]=c*f+h*m+d*b,s[7]=c*y+h*E+d*A,s[2]=u*x+p*v+g*M,s[5]=u*f+p*m+g*b,s[8]=u*y+p*E+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,p=c*s-a*l,g=t*d+i*u+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(n*c-h*i)*x,e[2]=(o*i-n*a)*x,e[3]=u*x,e[4]=(h*t-n*l)*x,e[5]=(n*s-o*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(to.makeScale(e,t)),this}rotate(e){return this.premultiply(to.makeRotation(-e)),this}translate(e,t){return this.premultiply(to.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},to=new Ke;function Dh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function la(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function lu(){let r=la("canvas");return r.style.display="block",r}var Ec={};function qr(r){r in Ec||(Ec[r]=!0,console.warn(r))}var Tc=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wc=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xs={[Wi]:{transfer:na,primaries:ra,toReference:r=>r,fromReference:r=>r},[ct]:{transfer:dt,primaries:ra,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Oa]:{transfer:na,primaries:sa,toReference:r=>r.applyMatrix3(wc),fromReference:r=>r.applyMatrix3(Tc)},[Bl]:{transfer:dt,primaries:sa,toReference:r=>r.convertSRGBToLinear().applyMatrix3(wc),fromReference:r=>r.applyMatrix3(Tc).convertLinearToSRGB()}},cu=new Set([Wi,Oa]),ot={enabled:!0,_workingColorSpace:Wi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!cu.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let i=xs[e].toReference;return(0,xs[t].fromReference)(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return xs[r].primaries},getTransfer:function(r){return r===Si?na:xs[r].transfer}};function dr(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function io(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var qn,ca=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qn===void 0&&(qn=la("canvas")),qn.width=e.width,qn.height=e.height;let i=qn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=la("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*dr(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*dr(t[i]/255)):t[i]=dr(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hu=0,ha=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Ei(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(no(n[a].image)):s.push(no(n[a]))}else s=no(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function no(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ca.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var uu=0,$t=class r extends dn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Ei(),this.name="",this.source=new ha(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Fn?ct:Si),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oo:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case Fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Oo:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case Fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ct?Fn:Lh}set encoding(e){qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Fn?ct:Si}};$t.DEFAULT_IMAGE=null,$t.DEFAULT_MAPPING=Th,$t.DEFAULT_ANISOTROPY=1;var at=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],x=l[2],f=l[6],y=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let m=(c+1)/2,E=(p+1)/2,M=(y+1)/2,b=(h+u)/4,A=(d+x)/4,N=(g+f)/4;return m>E&&m>M?m<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(m),n=b/i,s=A/i):E>M?E<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(E),i=b/n,s=N/n):M<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(M),i=A/s,n=N/s),this.set(i,n,s,t),this}let v=Math.sqrt((f-g)*(f-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(f-g)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+p+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Go=class extends dn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);let n={width:e,height:t,depth:1};i.encoding!==void 0&&(qr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Fn?ct:Si),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new $t(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){this.width===e&&this.height===t&&this.depth===i||(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ha(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bt=class extends Go{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ua=class extends $t{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vo=class extends $t{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=s[a+0],p=s[a+1],g=s[a+2],x=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=g,void(e[t+3]=x);if(d!==x||l!==u||c!==p||h!==g){let f=1-o,y=l*u+c*p+h*g+d*x,v=y>=0?1:-1,m=1-y*y;if(m>Number.EPSILON){let M=Math.sqrt(m),b=Math.atan2(M,y*v);f=Math.sin(f*b)/M,o=Math.sin(o*b)/M}let E=o*v;if(l=l*f+u*E,c=c*f+p*E,h=h*f+g*E,d=d*f+x*E,f===1-o){let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(s/2),u=l(i/2),p=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-n)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-n)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ac.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=n+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ro.copy(this).projectOnVector(e),this.sub(ro)}reflect(e){return this.sub(ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ro=new T,Ac=new Ti,jt=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pi):pi.fromBufferAttribute(s,a),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ms.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ms.copy(i.boundingBox)),Ms.applyMatrix4(e.matrixWorld),this.union(Ms)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),Ss.subVectors(this.max,Nr),jn.subVectors(e.a,Nr),Yn.subVectors(e.b,Nr),Jn.subVectors(e.c,Nr),en.subVectors(Yn,jn),tn.subVectors(Jn,Yn),An.subVectors(jn,Jn);let t=[0,-en.z,en.y,0,-tn.z,tn.y,0,-An.z,An.y,en.z,0,-en.x,tn.z,0,-tn.x,An.z,0,-An.x,-en.y,en.x,0,-tn.y,tn.x,0,-An.y,An.x,0];return!!so(t,jn,Yn,Jn,Ss)&&(t=[1,0,0,0,1,0,0,0,1],!!so(t,jn,Yn,Jn,Ss)&&(bs.crossVectors(en,tn),t=[bs.x,bs.y,bs.z],so(t,jn,Yn,Jn,Ss)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(pi).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Oi=[new T,new T,new T,new T,new T,new T,new T,new T],pi=new T,Ms=new jt,jn=new T,Yn=new T,Jn=new T,en=new T,tn=new T,An=new T,Nr=new T,Ss=new T,bs=new T,Rn=new T;function so(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Rn.fromArray(r,s);let o=n.x*Math.abs(Rn.x)+n.y*Math.abs(Rn.y)+n.z*Math.abs(Rn.z),l=e.dot(Rn),c=t.dot(Rn),h=i.dot(Rn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var du=new jt,Or=new T,ao=new T,ei=class{constructor(e=new T,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):du.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(Or,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ao.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(ao)),this.expandByPoint(Or.copy(e.center).sub(ao))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Fi=new T,oo=new T,Es=new T,nn=new T,lo=new T,Ts=new T,co=new T,yr=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){oo.copy(e).add(t).multiplyScalar(.5),Es.copy(t).sub(e).normalize(),nn.copy(this.origin).sub(oo);let s=.5*e.distanceTo(t),a=-this.direction.dot(Es),o=nn.dot(this.direction),l=-nn.dot(Es),c=nn.lengthSq(),h=Math.abs(1-a*a),d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(oo).addScaledVector(Es,u),p}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);let i=Fi.dot(this.direction),n=Fi.dot(Fi)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,i,n,s){lo.subVectors(t,e),Ts.subVectors(i,e),co.crossVectors(lo,Ts);let a,o=this.direction.dot(co);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}nn.subVectors(this.origin,e);let l=a*this.direction.dot(Ts.crossVectors(nn,Ts));if(l<0)return null;let c=a*this.direction.dot(lo.cross(nn));if(c<0||l+c>o)return null;let h=-a*nn.dot(co);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qe=class r{constructor(e,t,i,n,s,a,o,l,c,h,d,u,p,g,x,f){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,d,u,p,g,x,f)}set(e,t,i,n,s,a,o,l,c,h,d,u,p,g,x,f){let y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=n,y[1]=s,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=h,y[10]=d,y[14]=u,y[3]=p,y[7]=g,y[11]=x,y[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/Zn.setFromMatrixColumn(e,0).length(),s=1/Zn.setFromMatrixColumn(e,1).length(),a=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,p=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,g=c*h,x=c*d;t[0]=u+x*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,g=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pu,e,fu)}lookAt(e,t,i){let n=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),rn.crossVectors(i,Zt),rn.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),rn.crossVectors(i,Zt)),rn.normalize(),ws.crossVectors(Zt,rn),n[0]=rn.x,n[4]=ws.x,n[8]=Zt.x,n[1]=rn.y,n[5]=ws.y,n[9]=Zt.y,n[2]=rn.z,n[6]=ws.z,n[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],x=i[6],f=i[10],y=i[14],v=i[3],m=i[7],E=i[11],M=i[15],b=n[0],A=n[4],N=n[8],I=n[12],F=n[1],U=n[5],P=n[9],X=n[13],B=n[2],re=n[6],he=n[10],j=n[14],q=n[3],V=n[7],ae=n[11],Z=n[15];return s[0]=a*b+o*F+l*B+c*q,s[4]=a*A+o*U+l*re+c*V,s[8]=a*N+o*P+l*he+c*ae,s[12]=a*I+o*X+l*j+c*Z,s[1]=h*b+d*F+u*B+p*q,s[5]=h*A+d*U+u*re+p*V,s[9]=h*N+d*P+u*he+p*ae,s[13]=h*I+d*X+u*j+p*Z,s[2]=g*b+x*F+f*B+y*q,s[6]=g*A+x*U+f*re+y*V,s[10]=g*N+x*P+f*he+y*ae,s[14]=g*I+x*X+f*j+y*Z,s[3]=v*b+m*F+E*B+M*q,s[7]=v*A+m*U+E*re+M*V,s[11]=v*N+m*P+E*he+M*ae,s[15]=v*I+m*X+E*j+M*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+s*l*d-n*c*d-s*o*u+i*c*u+n*o*p-i*l*p)+e[7]*(+t*l*p-t*c*u+s*a*u-n*a*p+n*c*h-s*l*h)+e[11]*(+t*c*d-t*o*p-s*a*d+i*a*p+s*o*h-i*c*h)+e[15]*(-n*o*h-t*l*d+t*o*u+n*a*d-i*a*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],x=e[13],f=e[14],y=e[15],v=d*f*c-x*u*c+x*l*p-o*f*p-d*l*y+o*u*y,m=g*u*c-h*f*c-g*l*p+a*f*p+h*l*y-a*u*y,E=h*x*c-g*d*c+g*o*p-a*x*p-h*o*y+a*d*y,M=g*d*l-h*x*l-g*o*u+a*x*u+h*o*f-a*d*f,b=t*v+i*m+n*E+s*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/b;return e[0]=v*A,e[1]=(x*u*s-d*f*s-x*n*p+i*f*p+d*n*y-i*u*y)*A,e[2]=(o*f*s-x*l*s+x*n*c-i*f*c-o*n*y+i*l*y)*A,e[3]=(d*l*s-o*u*s-d*n*c+i*u*c+o*n*p-i*l*p)*A,e[4]=m*A,e[5]=(h*f*s-g*u*s+g*n*p-t*f*p-h*n*y+t*u*y)*A,e[6]=(g*l*s-a*f*s-g*n*c+t*f*c+a*n*y-t*l*y)*A,e[7]=(a*u*s-h*l*s+h*n*c-t*u*c-a*n*p+t*l*p)*A,e[8]=E*A,e[9]=(g*d*s-h*x*s-g*i*p+t*x*p+h*i*y-t*d*y)*A,e[10]=(a*x*s-g*o*s+g*i*c-t*x*c-a*i*y+t*o*y)*A,e[11]=(h*o*s-a*d*s-h*i*c+t*d*c+a*i*p-t*o*p)*A,e[12]=M*A,e[13]=(h*x*n-g*d*n+g*i*u-t*x*u-h*i*f+t*d*f)*A,e[14]=(g*o*n-a*x*n-g*i*l+t*x*l+a*i*f-t*o*f)*A,e[15]=(a*d*n-h*o*n+h*i*l-t*d*l-a*i*u+t*o*u)*A,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,p=s*h,g=s*d,x=a*h,f=a*d,y=o*d,v=l*c,m=l*h,E=l*d,M=i.x,b=i.y,A=i.z;return n[0]=(1-(x+y))*M,n[1]=(p+E)*M,n[2]=(g-m)*M,n[3]=0,n[4]=(p-E)*b,n[5]=(1-(u+y))*b,n[6]=(f+v)*b,n[7]=0,n[8]=(g+m)*A,n[9]=(f-v)*A,n[10]=(1-(u+x))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=Zn.set(n[0],n[1],n[2]).length(),a=Zn.set(n[4],n[5],n[6]).length(),o=Zn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],fi.copy(this);let l=1/s,c=1/a,h=1/o;return fi.elements[0]*=l,fi.elements[1]*=l,fi.elements[2]*=l,fi.elements[4]*=c,fi.elements[5]*=c,fi.elements[6]*=c,fi.elements[8]*=h,fi.elements[9]*=h,fi.elements[10]*=h,t.setFromRotationMatrix(fi),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(i-n),d=(t+e)/(t-e),u=(i+n)/(i-n),p,g;if(o===vr)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else{if(o!==aa)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),g=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(i-n),d=1/(a-s),u=(t+e)*c,p=(i+n)*h,g,x;if(o===vr)g=(a+s)*d,x=-2*d;else{if(o!==aa)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);g=s*d,x=-1*d}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Zn=new T,fi=new Qe,pu=new T(0,0,0),fu=new T(1,1,1),rn=new T,ws=new T,Zt=new T,Rc=new Qe,Cc=new Ti,da=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};da.DEFAULT_ORDER="XYZ";var pa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},mu=0,_c=new T,Kn=new Ti,Bi=new Qe,As=new T,Fr=new T,gu=new T,vu=new Ti,Pc=new T(1,0,0),Lc=new T(0,1,0),Uc=new T(0,0,1),yu={type:"added"},xu={type:"removed"},Bt=class r extends dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new T,t=new da,i=new Ti,n=new T(1,1,1);t._onChange((function(){i.setFromEuler(t,!1)})),i._onChange((function(){t.setFromQuaternion(i,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Ke}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(Pc,e)}rotateY(e){return this.rotateOnAxis(Lc,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return _c.copy(e).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pc,e)}translateY(e){return this.translateOnAxis(Lc,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?As.copy(e):As.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Fr,As,this.up):Bi.lookAt(As,Fr,this.up),this.quaternion.setFromRotationMatrix(Bi),n&&(Bi.extractRotation(n.matrixWorld),Kn.setFromRotationMatrix(Bi),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xu)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,gu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,vu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++){let s=t[i];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++){let o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};Bt.DEFAULT_UP=new T(0,1,0),Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mi=new T,zi=new T,ho=new T,Hi=new T,Qn=new T,$n=new T,Ic=new T,uo=new T,po=new T,fo=new T,Rs=!1,ln=class r{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),mi.subVectors(e,t),n.cross(mi);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){mi.subVectors(n,t),zi.subVectors(i,t),ho.subVectors(e,t);let a=mi.dot(mi),o=mi.dot(zi),l=mi.dot(ho),c=zi.dot(zi),h=zi.dot(ho),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);let u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Hi),Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getUV(e,t,i,n,s,a,o,l){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),this.getInterpolation(e,t,i,n,s,a,o,l)}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,Hi),l.setScalar(0),l.addScaledVector(s,Hi.x),l.addScaledVector(a,Hi.y),l.addScaledVector(o,Hi.z),l}static isFrontFacing(e,t,i,n){return mi.subVectors(i,t),zi.subVectors(e,t),mi.cross(zi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),.5*mi.cross(zi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;Qn.subVectors(n,i),$n.subVectors(s,i),uo.subVectors(e,i);let l=Qn.dot(uo),c=$n.dot(uo);if(l<=0&&c<=0)return t.copy(i);po.subVectors(e,n);let h=Qn.dot(po),d=$n.dot(po);if(h>=0&&d<=h)return t.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Qn,a);fo.subVectors(e,s);let p=Qn.dot(fo),g=$n.dot(fo);if(g>=0&&p<=g)return t.copy(s);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector($n,o);let f=h*g-p*d;if(f<=0&&d-h>=0&&p-g>=0)return Ic.subVectors(s,n),o=(d-h)/(d-h+(p-g)),t.copy(n).addScaledVector(Ic,o);let y=1/(f+x+u);return a=x*y,o=u*y,t.copy(i).addScaledVector(Qn,a).addScaledVector($n,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sn={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function mo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Te=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=ot.workingColorSpace){if(e=Ho(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=mo(a,s,e+1/3),this.g=mo(a,s,e),this.b=mo(a,s,e-1/3)}return ot.toWorkingColorSpace(this,n),this}setStyle(e,t=ct){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){let i=Nh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return ot.fromWorkingColorSpace(Ft.copy(this),e),65536*Math.round(At(255*Ft.r,0,255))+256*Math.round(At(255*Ft.g,0,255))+Math.round(At(255*Ft.b,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Ft.copy(this),t);let i=Ft.r,n=Ft.g,s=Ft.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=ct){ot.fromWorkingColorSpace(Ft.copy(this),e);let t=Ft.r,i=Ft.g,n=Ft.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(sn),this.setHSL(sn.h+e,sn.s+t,sn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(sn),e.getHSL(Cs);let i=Xr(sn.h,Cs.h,t),n=Xr(sn.s,Cs.s,t),s=Xr(sn.l,Cs.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new Te;Te.NAMES=Nh;var Mu=0,Xi=class extends dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=1,this.side=un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uo,this.blendDst=Io,this.blendEquation=Ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==un&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uo&&(i.blendSrc=this.blendSrc),this.blendDst!==Io&&(i.blendDst=this.blendDst),this.blendEquation!==Ln&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},wi=class extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sp=Su();function Su(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,n[l]=-c-1,n[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,n[l]=13,n[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(8388608&c)==0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var Tt=new T,_s=new te,rt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bo,this.updateRange={offset:0,count:-1},this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_s.fromBufferAttribute(this,t),_s.applyMatrix3(e),this.setXY(t,_s.x,_s.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bo&&(e.usage=this.usage),this.updateRange.offset===0&&this.updateRange.count===-1||(e.updateRange=this.updateRange),e}};var fa=class extends rt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ma=class extends rt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ge=class extends rt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var bu=0,ri=new Qe,go=new Bt,er=new T,Kt=new jt,Br=new jt,Pt=new T,st=class r extends dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dh(e)?ma:fa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,i){return ri.makeTranslation(e,t,i),this.applyMatrix4(ri),this}scale(e,t,i){return ri.makeScale(e,t,i),this.applyMatrix4(ri),this}lookAt(e){return go.lookAt(e),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ge(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new T,1/0);if(e){let i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(Kt.min,Br.min),Kt.expandByPoint(Pt),Pt.addVectors(Kt.max,Br.max),Kt.expandByPoint(Pt)):(Kt.expandByPoint(Br.min),Kt.expandByPoint(Br.max))}Kt.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Pt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pt.fromBufferAttribute(o,c),l&&(er.fromBufferAttribute(e,c),Pt.add(er)),n=Math.max(n,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=e.array,n=t.position.array,s=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let F=0;F<o;F++)c[F]=new T,h[F]=new T;let d=new T,u=new T,p=new T,g=new te,x=new te,f=new te,y=new T,v=new T;function m(F,U,P){d.fromArray(n,3*F),u.fromArray(n,3*U),p.fromArray(n,3*P),g.fromArray(a,2*F),x.fromArray(a,2*U),f.fromArray(a,2*P),u.sub(d),p.sub(d),x.sub(g),f.sub(g);let X=1/(x.x*f.y-f.x*x.y);isFinite(X)&&(y.copy(u).multiplyScalar(f.y).addScaledVector(p,-x.y).multiplyScalar(X),v.copy(p).multiplyScalar(x.x).addScaledVector(u,-f.x).multiplyScalar(X),c[F].add(y),c[U].add(y),c[P].add(y),h[F].add(v),h[U].add(v),h[P].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let F=0,U=E.length;F<U;++F){let P=E[F],X=P.start;for(let B=X,re=X+P.count;B<re;B+=3)m(i[B+0],i[B+1],i[B+2])}let M=new T,b=new T,A=new T,N=new T;function I(F){A.fromArray(s,3*F),N.copy(A);let U=c[F];M.copy(U),M.sub(A.multiplyScalar(A.dot(U))).normalize(),b.crossVectors(N,U);let P=b.dot(h[F])<0?-1:1;l[4*F]=M.x,l[4*F+1]=M.y,l[4*F+2]=M.z,l[4*F+3]=P}for(let F=0,U=E.length;F<U;++F){let P=E[F],X=P.start;for(let B=X,re=X+P.count;B<re;B+=3)I(i[B+0]),I(i[B+1]),I(i[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let n=new T,s=new T,a=new T,o=new T,l=new T,c=new T,h=new T,d=new T;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),x=e.getX(u+1),f=e.getX(u+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,f),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,f),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let x=0,f=l.length;x<f;x++){p=o.isInterleavedBufferAttribute?l[x]*o.data.stride+o.offset:l[x]*h;for(let y=0;y<h;y++)u[g++]=c[p++]}return new rt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=e(n[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=e(c[h],i);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dc=new Qe,Cn=new yr,Ps=new ei,Nc=new T,tr=new T,ir=new T,nr=new T,vo=new T,Ls=new T,Us=new te,Is=new te,Ds=new te,Oc=new T,Fc=new T,Bc=new T,Ns=new T,Os=new T,Ne=class extends Bt{constructor(e=new st,t=new wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){Ls.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(vo.fromBufferAttribute(d,e),a?Ls.addScaledVector(vo,h):Ls.addScaledVector(vo.sub(t),h))}t.add(Ls)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere),Ps.applyMatrix4(s),Cn.copy(e.ray).recast(e.near),Ps.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(Ps,Nc)===null||Cn.origin.distanceToSquared(Nc)>(e.far-e.near)**2))return;Dc.copy(s).invert(),Cn.copy(e.ray).applyMatrix4(Dc),i.boundingBox!==null&&Cn.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Cn)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let f=u[g],y=a[f.materialIndex];for(let v=Math.max(f.start,p.start),m=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));v<m;v+=3)n=Fs(this,y,e,i,c,h,d,o.getX(v),o.getX(v+1),o.getX(v+2)),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=f.materialIndex,t.push(n))}else for(let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);g<x;g+=3)n=Fs(this,a,e,i,c,h,d,o.getX(g),o.getX(g+1),o.getX(g+2)),n&&(n.faceIndex=Math.floor(g/3),t.push(n));else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let f=u[g],y=a[f.materialIndex];for(let v=Math.max(f.start,p.start),m=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));v<m;v+=3)n=Fs(this,y,e,i,c,h,d,v,v+1,v+2),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=f.materialIndex,t.push(n))}else for(let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);g<x;g+=3)n=Fs(this,a,e,i,c,h,d,g,g+1,g+2),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}};function Fs(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,tr),r.getVertexPosition(l,ir),r.getVertexPosition(c,nr);let h=(function(d,u,p,g,x,f,y,v){let m;if(m=u.side===xt?g.intersectTriangle(y,f,x,!0,v):g.intersectTriangle(x,f,y,u.side===un,v),m===null)return null;Os.copy(v),Os.applyMatrix4(d.matrixWorld);let E=p.ray.origin.distanceTo(Os);return E<p.near||E>p.far?null:{distance:E,point:Os.clone(),object:d}})(r,e,t,i,tr,ir,nr,Ns);if(h){n&&(Us.fromBufferAttribute(n,o),Is.fromBufferAttribute(n,l),Ds.fromBufferAttribute(n,c),h.uv=ln.getInterpolation(Ns,tr,ir,nr,Us,Is,Ds,new te)),s&&(Us.fromBufferAttribute(s,o),Is.fromBufferAttribute(s,l),Ds.fromBufferAttribute(s,c),h.uv1=ln.getInterpolation(Ns,tr,ir,nr,Us,Is,Ds,new te),h.uv2=h.uv1),a&&(Oc.fromBufferAttribute(a,o),Fc.fromBufferAttribute(a,l),Bc.fromBufferAttribute(a,c),h.normal=ln.getInterpolation(Ns,tr,ir,nr,Oc,Fc,Bc,new T),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new T,materialIndex:0};ln.getNormal(tr,ir,nr,d.normal),h.face=d}return h}var si=class r extends st{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;function g(x,f,y,v,m,E,M,b,A,N,I){let F=E/A,U=M/N,P=E/2,X=M/2,B=b/2,re=A+1,he=N+1,j=0,q=0,V=new T;for(let ae=0;ae<he;ae++){let Z=ae*U-X;for(let ge=0;ge<re;ge++){let we=ge*F-P;V[x]=we*v,V[f]=Z*m,V[y]=B,c.push(V.x,V.y,V.z),V[x]=0,V[f]=0,V[y]=b>0?1:-1,h.push(V.x,V.y,V.z),d.push(ge/A),d.push(1-ae/N),j+=1}}for(let ae=0;ae<N;ae++)for(let Z=0;Z<A;Z++){let ge=u+Z+re*ae,we=u+Z+re*(ae+1),Ue=u+(Z+1)+re*(ae+1),me=u+(Z+1)+re*ae;l.push(ge,we,me),l.push(we,Ue,me),q+=6}o.addGroup(p,q,I),p+=q,u+=j}g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xr(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Vt(r){let e={};for(let t=0;t<r.length;t++){let i=xr(r[t]);for(let n in i)e[n]=i[n]}return e}function Oh(r){return r.getRenderTarget()===null?r.outputColorSpace:ot.workingColorSpace}var yi={clone:xr,merge:Vt},it=class extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Qr=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=vr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wt=class extends Qr{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Kr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*ur*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Kr*Math.atan(Math.tan(.5*ur*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*ur*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},rr=-90,Wo=class extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new wt(rr,1,e,t);n.layers=this.layers,this.add(n);let s=new wt(rr,1,e,t);s.layers=this.layers,this.add(s);let a=new wt(rr,1,e,t);a.layers=this.layers,this.add(a);let o=new wt(rr,1,e,t);o.layers=this.layers,this.add(o);let l=new wt(rr,1,e,t);l.layers=this.layers,this.add(l);let c=new wt(rr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===vr)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==aa)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ga=class extends $t{constructor(e,t,i,n,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:fr,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xo=class extends bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(qr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Fn?ct:Si),this.texture=new ga(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new si(5,5,5),s=new it({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xt,blending:0});s.uniforms.tEquirect.value=t;let a=new Ne(n,s),o=t.minFilter;return t.minFilter===ea&&(t.minFilter=gi),new Wo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},yo=new T,Eu=new T,Tu=new Ke,Gi=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=yo.subVectors(i,t).cross(Eu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(yo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Tu.getNormalMatrix(e),n=this.coplanarPoint(yo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_n=new ei,Bs=new T,$r=class{constructor(e=new Gi,t=new Gi,i=new Gi,n=new Gi,s=new Gi,a=new Gi){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],d=n[6],u=n[7],p=n[8],g=n[9],x=n[10],f=n[11],y=n[12],v=n[13],m=n[14],E=n[15];if(i[0].setComponents(l-s,u-c,f-p,E-y).normalize(),i[1].setComponents(l+s,u+c,f+p,E+y).normalize(),i[2].setComponents(l+a,u+h,f+g,E+v).normalize(),i[3].setComponents(l-a,u-h,f-g,E-v).normalize(),i[4].setComponents(l-o,u-d,f-x,E-m).normalize(),t===vr)i[5].setComponents(l+o,u+d,f+x,E+m).normalize();else{if(t!==aa)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,d,x,m).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_n)}intersectsSprite(e){return _n.center.set(0,0,0),_n.radius=.7071067811865476,_n.applyMatrix4(e.matrixWorld),this.intersectsSphere(_n)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Bs.x=n.normal.x>0?e.max.x:e.min.x,Bs.y=n.normal.y>0?e.max.y:e.min.y,Bs.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fh(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function wu(r,e){let t=e.isWebGL2,i=new WeakMap;return{get:function(n){return n.isInterleavedBufferAttribute&&(n=n.data),i.get(n)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let s=i.get(n);s&&(r.deleteBuffer(s.buffer),i.delete(n))},update:function(n,s){if(n.isGLBufferAttribute){let o=i.get(n);return void((!o||o.version<n.version)&&i.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version}))}n.isInterleavedBufferAttribute&&(n=n.data);let a=i.get(n);a===void 0?i.set(n,(function(o,l){let c=o.array,h=o.usage,d=r.createBuffer(),u;if(r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback(),c instanceof Float32Array)u=r.FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");u=r.HALF_FLOAT}else u=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=r.SHORT;else if(c instanceof Uint32Array)u=r.UNSIGNED_INT;else if(c instanceof Int32Array)u=r.INT;else if(c instanceof Int8Array)u=r.BYTE;else if(c instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(c instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);u=r.UNSIGNED_BYTE}return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version}})(n,s)):a.version<n.version&&((function(o,l,c){let h=l.array,d=l.updateRange;r.bindBuffer(c,o),d.count===-1?r.bufferSubData(c,0,h):(t?r.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):r.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),l.onUploadCallback()})(a.buffer,n,s),a.version=n.version)}}}var Mr=class r extends st{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],x=[],f=[];for(let y=0;y<h;y++){let v=y*u-a;for(let m=0;m<c;m++){let E=m*d-s;g.push(E,-v,0),x.push(0,0,1),f.push(m/o),f.push(1-y/l)}}for(let y=0;y<l;y++)for(let v=0;v<o;v++){let m=v+c*y,E=v+c*(y+1),M=v+1+c*(y+1),b=v+1+c*y;p.push(m,E,b),p.push(E,M,b)}this.setIndex(p),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(x,3)),this.setAttribute("uv",new Ge(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Je={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},xe={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Xt={basic:{uniforms:Vt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Vt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Vt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Vt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Vt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Vt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Vt([xe.points,xe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Vt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Vt([xe.common,xe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Vt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Vt([xe.sprite,xe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Vt([xe.common,xe.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Vt([xe.lights,xe.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Xt.physical={uniforms:Vt([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var zs={r:0,b:0,g:0};function Au(r,e,t,i,n,s,a){let o=new Te(0),l,c,h=s===!0?0:1,d=null,u=0,p=null;function g(x,f){x.getRGB(zs,Oh(r)),i.buffers.color.setClear(zs.r,zs.g,zs.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(x,f=1){o.set(x),h=f,g(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(x){h=x,g(o,h)},render:function(x,f){let y=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?g(o,h):v&&v.isColor&&(g(v,1),y=!0);let m=r.xr.getEnvironmentBlendMode();m==="additive"?i.buffers.color.setClear(0,0,0,1,a):m==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Na)?(c===void 0&&(c=new Ne(new si(1,1,1),new it({name:"BackgroundCubeMaterial",uniforms:xr(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,M,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ot.getTransfer(v.colorSpace)!==dt,d===v&&u===v.version&&p===r.toneMapping||(c.material.needsUpdate=!0,d=v,u=v.version,p=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ne(new Mr(2,2),new it({name:"BackgroundMaterial",uniforms:xr(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=ot.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),d===v&&u===v.version&&p===r.toneMapping||(l.material.needsUpdate=!0,d=v,u=v.version,p=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}}}function Ru(r,e,t,i){let n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null),c=l,h=!1;function d(M){return i.isWebGL2?r.bindVertexArray(M):s.bindVertexArrayOES(M)}function u(M){return i.isWebGL2?r.deleteVertexArray(M):s.deleteVertexArrayOES(M)}function p(M){let b=[],A=[],N=[];for(let I=0;I<n;I++)b[I]=0,A[I]=0,N[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:A,attributeDivisors:N,object:M,attributes:{},index:null}}function g(){let M=c.newAttributes;for(let b=0,A=M.length;b<A;b++)M[b]=0}function x(M){f(M,0)}function f(M,b){let A=c.newAttributes,N=c.enabledAttributes,I=c.attributeDivisors;A[M]=1,N[M]===0&&(r.enableVertexAttribArray(M),N[M]=1),I[M]!==b&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](M,b),I[M]=b)}function y(){let M=c.newAttributes,b=c.enabledAttributes;for(let A=0,N=b.length;A<N;A++)b[A]!==M[A]&&(r.disableVertexAttribArray(A),b[A]=0)}function v(M,b,A,N,I,F,U){U===!0?r.vertexAttribIPointer(M,b,A,I,F):r.vertexAttribPointer(M,b,A,N,I,F)}function m(){E(),h=!0,c!==l&&(c=l,d(c.object))}function E(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(M,b,A,N,I){let F=!1;if(a){let U=(function(P,X,B){let re=B.wireframe===!0,he=o[P.id];he===void 0&&(he={},o[P.id]=he);let j=he[X.id];j===void 0&&(j={},he[X.id]=j);let q=j[re];return q===void 0&&(q=p(i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),j[re]=q),q})(N,A,b);c!==U&&(c=U,d(c.object)),F=(function(P,X,B,re){let he=c.attributes,j=X.attributes,q=0,V=B.getAttributes();for(let ae in V)if(V[ae].location>=0){let Z=he[ae],ge=j[ae];if(ge===void 0&&(ae==="instanceMatrix"&&P.instanceMatrix&&(ge=P.instanceMatrix),ae==="instanceColor"&&P.instanceColor&&(ge=P.instanceColor)),Z===void 0||Z.attribute!==ge||ge&&Z.data!==ge.data)return!0;q++}return c.attributesNum!==q||c.index!==re})(M,N,A,I),F&&(function(P,X,B,re){let he={},j=X.attributes,q=0,V=B.getAttributes();for(let ae in V)if(V[ae].location>=0){let Z=j[ae];Z===void 0&&(ae==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),ae==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));let ge={};ge.attribute=Z,Z&&Z.data&&(ge.data=Z.data),he[ae]=ge,q++}c.attributes=he,c.attributesNum=q,c.index=re})(M,N,A,I)}else{let U=b.wireframe===!0;c.geometry===N.id&&c.program===A.id&&c.wireframe===U||(c.geometry=N.id,c.program=A.id,c.wireframe=U,F=!0)}I!==null&&t.update(I,r.ELEMENT_ARRAY_BUFFER),(F||h)&&(h=!1,(function(U,P,X,B){if(i.isWebGL2===!1&&(U.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();let re=B.attributes,he=X.getAttributes(),j=P.defaultAttributeValues;for(let q in he){let V=he[q];if(V.location>=0){let ae=re[q];if(ae===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor)),ae!==void 0){let Z=ae.normalized,ge=ae.itemSize,we=t.get(ae);if(we===void 0)continue;let Ue=we.buffer,me=we.type,Ce=we.bytesPerElement,C=i.isWebGL2===!0&&(me===r.INT||me===r.UNSIGNED_INT||ae.gpuType===wh);if(ae.isInterleavedBufferAttribute){let w=ae.data,L=w.stride,z=ae.offset;if(w.isInstancedInterleavedBuffer){for(let _=0;_<V.locationSize;_++)f(V.location+_,w.meshPerAttribute);U.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=w.meshPerAttribute*w.count)}else for(let _=0;_<V.locationSize;_++)x(V.location+_);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let _=0;_<V.locationSize;_++)v(V.location+_,ge/V.locationSize,me,Z,L*Ce,(z+ge/V.locationSize*_)*Ce,C)}else{if(ae.isInstancedBufferAttribute){for(let w=0;w<V.locationSize;w++)f(V.location+w,ae.meshPerAttribute);U.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let w=0;w<V.locationSize;w++)x(V.location+w);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let w=0;w<V.locationSize;w++)v(V.location+w,ge/V.locationSize,me,Z,ge*Ce,ge/V.locationSize*w*Ce,C)}}else if(j!==void 0){let Z=j[q];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(V.location,Z);break;case 3:r.vertexAttrib3fv(V.location,Z);break;case 4:r.vertexAttrib4fv(V.location,Z);break;default:r.vertexAttrib1fv(V.location,Z)}}}}y()})(M,b,A,N),I!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))},reset:m,resetDefaultState:E,dispose:function(){m();for(let M in o){let b=o[M];for(let A in b){let N=b[A];for(let I in N)u(N[I].object),delete N[I];delete b[A]}delete o[M]}},releaseStatesOfGeometry:function(M){if(o[M.id]===void 0)return;let b=o[M.id];for(let A in b){let N=b[A];for(let I in N)u(N[I].object),delete N[I];delete b[A]}delete o[M.id]},releaseStatesOfProgram:function(M){for(let b in o){let A=o[b];if(A[M.id]===void 0)continue;let N=A[M.id];for(let I in N)u(N[I].object),delete N[I];delete A[M.id]}},initAttributes:g,enableAttribute:x,disableUnusedAttributes:y}}function Cu(r,e,t,i){let n=i.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(n)c=r,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)}}function _u(r,e,t){let i;function n(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=n(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,m=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:n,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:m,floatVertexTextures:v&&m,maxSamples:s?r.getParameter(r.MAX_SAMPLES):0}}function Pu(r){let e=this,t=null,i=0,n=!1,s=!1,a=new Gi,o=new Ke,l={value:null,needsUpdate:!1};function c(h,d,u,p){let g=h!==null?h.length:0,x=null;if(g!==0){if(x=l.value,p!==!0||x===null){let f=u+4*g,y=d.matrixWorldInverse;o.getNormalMatrix(y),(x===null||x.length<f)&&(x=new Float32Array(f));for(let v=0,m=u;v!==g;++v,m+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(x,m),x[m+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,x}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||i!==0||n;return n=d,i=h.length,u},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,g=h.clipIntersection,x=h.clipShadows,f=r.get(h);if(!n||p===null||p.length===0||s&&!x)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let y=s?0:i,v=4*y,m=f.clippingState||null;l.value=m,m=c(p,d,v,u);for(let E=0;E!==v;++E)m[E]=t[E];f.clippingState=m,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}}}function Lu(r){let e=new WeakMap;function t(n,s){return s===Do?n.mapping=fr:s===No&&(n.mapping=mr),n}function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture&&n.isRenderTargetTexture===!1){let s=n.mapping;if(s===Do||s===No){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new Xo(a.height/2);return o.fromEquirectangularTexture(r,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}var Sr=class extends Qr{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zc=[.125,.215,.35,.446,.526,.582],zr=20,xo=new Sr,Hc=new Te,Mo=null,So=0,bo=0,Pn=(1+Math.sqrt(5))/2,sr=1/Pn,kc=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,Pn,sr),new T(0,Pn,-sr),new T(sr,0,Pn),new T(-sr,0,Pn),new T(Pn,sr,0),new T(-Pn,sr,0)],pn=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Mo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mo,So,bo),e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:Ut,format:Mi,colorSpace:Wi,depthBuffer:!1},n=Gc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,d=a-4+1+zc.length;for(let u=0;u<d;u++){let p=Math.pow(2,h);l.push(p);let g=1/p;u>a-4?g=zc[u-a+4-1]:u===0&&(g=0),c.push(g);let x=1/(p-2),f=-x,y=1+x,v=[f,f,y,f,y,y,f,f,y,y,f,y],m=6,E=6,M=3,b=2,A=1,N=new Float32Array(M*E*m),I=new Float32Array(b*E*m),F=new Float32Array(A*E*m);for(let P=0;P<m;P++){let X=P%3*2/3-1,B=P>2?0:-1,re=[X,B,0,X+2/3,B,0,X+2/3,B+1,0,X,B,0,X+2/3,B+1,0,X,B+1,0];N.set(re,M*E*P),I.set(v,b*E*P);let he=[P,P,P,P,P,P];F.set(he,A*E*P)}let U=new st;U.setAttribute("position",new rt(N,M)),U.setAttribute("uv",new rt(I,b)),U.setAttribute("faceIndex",new rt(F,A)),o.push(U),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(zr),h=new T(0,1,0);return new it({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return n}_compileMaterial(e){let t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,xo)}_sceneToCubeUV(e,t,i,n){let s=new wt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Hc),l.toneMapping=cn,l.autoClear=!1;let d=new wi({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),u=new Ne(new si,d),p=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,p=!0):(d.color.copy(Hc),p=!0);for(let x=0;x<6;x++){let f=x%3;f===0?(s.up.set(0,a[x],0),s.lookAt(o[x],0,0)):f===1?(s.up.set(0,0,a[x]),s.lookAt(0,o[x],0)):(s.up.set(0,a[x],0),s.lookAt(0,0,o[x]));let y=this._cubeSize;Hs(n,f*y,x>2?y:0,y,y),l.setRenderTarget(n),p&&l.render(u,s),l.render(e,s)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===fr||e.mapping===mr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vc());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new Ne(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Hs(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,xo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=kc[(n-1)%kc.length];this._blur(e,n-1,n,s,a)}t.autoClear=i}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Ne(this._lodPlanes[n],c),d=c.uniforms,u=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/39,g=s/p,x=isFinite(s)?1+Math.floor(3*g):zr;x>zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to 20`);let f=[],y=0;for(let E=0;E<zr;++E){let M=E/g,b=Math.exp(-M*M/2);f.push(b),E===0?y+=b:E<x&&(y+=2*b)}for(let E=0;E<f.length;E++)f[E]=f[E]/y;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-i;let m=this._sizeLods[n];Hs(t,3*m*(n>v-4?n-v+4:0),4*(this._cubeSize-m),3*m,2*m),l.setRenderTarget(t),l.render(h,xo)}};function Gc(r,e,t){let i=new bt(r,e,t);return i.texture.mapping=Na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hs(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Vc(){return new it({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Wc(){return new it({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function zl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Uu(r){let e=new WeakMap,t=null;function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping,a=s===Do||s===No,o=s===fr||s===mr;if(a||o){if(n.isRenderTargetTexture&&n.needsPMREMUpdate===!0){n.needsPMREMUpdate=!1;let l=e.get(n);return t===null&&(t=new pn(r)),l=a?t.fromEquirectangular(n,l):t.fromCubemap(n,l),e.set(n,l),l.texture}if(e.has(n))return e.get(n).texture;{let l=n.image;if(a&&l&&l.height>0||o&&l&&(function(c){let h=0,d=6;for(let u=0;u<d;u++)c[u]!==void 0&&h++;return h===d})(l)){t===null&&(t=new pn(r));let c=a?t.fromEquirectangular(n):t.fromCubemap(n);return e.set(n,c),n.addEventListener("dispose",i),c.texture}return null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Iu(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Du(r,e,t,i){let n={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let d in c.attributes)e.remove(c.attributes[d]);for(let d in c.morphAttributes){let u=c.morphAttributes[d];for(let p=0,g=u.length;p<g;p++)e.remove(u[p])}c.removeEventListener("dispose",a),delete n[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,d=l.attributes.position,u=0;if(h!==null){let x=h.array;u=h.version;for(let f=0,y=x.length;f<y;f+=3){let v=x[f+0],m=x[f+1],E=x[f+2];c.push(v,m,m,E,E,v)}}else{if(d===void 0)return;{let x=d.array;u=d.version;for(let f=0,y=x.length/3-1;f<y;f+=3){let v=f+0,m=f+1,E=f+2;c.push(v,m,m,E,E,v)}}}let p=new(Dh(c)?ma:fa)(c,1);p.version=u;let g=s.get(l);g&&e.remove(g),s.set(l,p)}return{get:function(l,c){return n[c.id]===!0||(c.addEventListener("dispose",a),n[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let d in c)e.update(c[d],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let d in h){let u=h[d];for(let p=0,g=u.length;p<g;p++)e.update(u[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Nu(r,e,t,i){let n=i.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){r.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let d,u;if(n)d=r,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");d[u](s,c,a,l*o,h),t.update(c,s,h)}}function Ou(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function Fu(r,e){return r[0]-e[0]}function Bu(r,e){return Math.abs(e[1])-Math.abs(r[1])}function zu(r,e,t){let i={},n=new Float32Array(8),s=new WeakMap,a=new at,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let u=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=u!==void 0?u.length:0,g=s.get(c);if(g===void 0||g.count!==p){g!==void 0&&g.texture.dispose();let y=c.morphAttributes.position!==void 0,v=c.morphAttributes.normal!==void 0,m=c.morphAttributes.color!==void 0,E=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],b=c.morphAttributes.color||[],A=0;y===!0&&(A=1),v===!0&&(A=2),m===!0&&(A=3);let N=c.attributes.position.count*A,I=1;N>e.maxTextureSize&&(I=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);let F=new Float32Array(N*I*4*p),U=new ua(F,N,I,p);U.type=on,U.needsUpdate=!0;let P=4*A;for(let X=0;X<p;X++){let B=E[X],re=M[X],he=b[X],j=N*I*4*X;for(let q=0;q<B.count;q++){let V=q*P;y===!0&&(a.fromBufferAttribute(B,q),F[j+V+0]=a.x,F[j+V+1]=a.y,F[j+V+2]=a.z,F[j+V+3]=0),v===!0&&(a.fromBufferAttribute(re,q),F[j+V+4]=a.x,F[j+V+5]=a.y,F[j+V+6]=a.z,F[j+V+7]=0),m===!0&&(a.fromBufferAttribute(he,q),F[j+V+8]=a.x,F[j+V+9]=a.y,F[j+V+10]=a.z,F[j+V+11]=he.itemSize===4?a.w:1)}}g={count:p,texture:U,size:new te(N,I)},s.set(c,g),c.addEventListener("dispose",(function X(){U.dispose(),s.delete(c),c.removeEventListener("dispose",X)}))}let x=0;for(let y=0;y<d.length;y++)x+=d[y];let f=c.morphTargetsRelative?1:1-x;h.getUniforms().setValue(r,"morphTargetBaseInfluence",f),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{let u=d===void 0?0:d.length,p=i[c.id];if(p===void 0||p.length!==u){p=[];for(let v=0;v<u;v++)p[v]=[v,0];i[c.id]=p}for(let v=0;v<u;v++){let m=p[v];m[0]=v,m[1]=d[v]}p.sort(Bu);for(let v=0;v<8;v++)v<u&&p[v][1]?(o[v][0]=p[v][0],o[v][1]=p[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Fu);let g=c.morphAttributes.position,x=c.morphAttributes.normal,f=0;for(let v=0;v<8;v++){let m=o[v],E=m[0],M=m[1];E!==Number.MAX_SAFE_INTEGER&&M?(g&&c.getAttribute("morphTarget"+v)!==g[E]&&c.setAttribute("morphTarget"+v,g[E]),x&&c.getAttribute("morphNormal"+v)!==x[E]&&c.setAttribute("morphNormal"+v,x[E]),n[v]=M,f+=M):(g&&c.hasAttribute("morphTarget"+v)===!0&&c.deleteAttribute("morphTarget"+v),x&&c.hasAttribute("morphNormal"+v)===!0&&c.deleteAttribute("morphNormal"+v),n[v]=0)}let y=c.morphTargetsRelative?1:1-f;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",n)}}}}function Hu(r,e,t,i){let n=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,c=e.get(a,l);if(n.get(c)!==o&&(e.update(c),n.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),n.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;n.get(h)!==o&&(h.update(),n.set(h,o))}return c},dispose:function(){n=new WeakMap}}}var Bh=new $t,zh=new ua,Hh=new Vo,kh=new ga,Xc=[],qc=[],jc=new Float32Array(16),Yc=new Float32Array(9),Jc=new Float32Array(4);function Tr(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=Xc[n];if(s===void 0&&(s=new Float32Array(n),Xc[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Rt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Ct(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Fa(r,e){let t=qc[e];t===void 0&&(t=new Int32Array(e),qc[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function ku(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Gu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2fv(this.addr,e),Ct(t,e)}}function Vu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;r.uniform3fv(this.addr,e),Ct(t,e)}}function Wu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4fv(this.addr,e),Ct(t,e)}}function Xu(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Jc.set(i),r.uniformMatrix2fv(this.addr,!1,Jc),Ct(t,i)}}function qu(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Yc.set(i),r.uniformMatrix3fv(this.addr,!1,Yc),Ct(t,i)}}function ju(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;jc.set(i),r.uniformMatrix4fv(this.addr,!1,jc),Ct(t,i)}}function Yu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ju(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2iv(this.addr,e),Ct(t,e)}}function Zu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;r.uniform3iv(this.addr,e),Ct(t,e)}}function Ku(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4iv(this.addr,e),Ct(t,e)}}function Qu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function $u(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2uiv(this.addr,e),Ct(t,e)}}function ed(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;r.uniform3uiv(this.addr,e),Ct(t,e)}}function td(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4uiv(this.addr,e),Ct(t,e)}}function id(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||Bh,n)}function nd(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Hh,n)}function rd(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||kh,n)}function sd(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||zh,n)}function ad(r,e){r.uniform1fv(this.addr,e)}function od(r,e){let t=Tr(e,this.size,2);r.uniform2fv(this.addr,t)}function ld(r,e){let t=Tr(e,this.size,3);r.uniform3fv(this.addr,t)}function cd(r,e){let t=Tr(e,this.size,4);r.uniform4fv(this.addr,t)}function hd(r,e){let t=Tr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ud(r,e){let t=Tr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function dd(r,e){let t=Tr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function pd(r,e){r.uniform1iv(this.addr,e)}function fd(r,e){r.uniform2iv(this.addr,e)}function md(r,e){r.uniform3iv(this.addr,e)}function gd(r,e){r.uniform4iv(this.addr,e)}function vd(r,e){r.uniform1uiv(this.addr,e)}function yd(r,e){r.uniform2uiv(this.addr,e)}function xd(r,e){r.uniform3uiv(this.addr,e)}function Md(r,e){r.uniform4uiv(this.addr,e)}function Sd(r,e,t){let i=this.cache,n=e.length,s=Fa(t,n);Rt(i,s)||(r.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Bh,s[a])}function bd(r,e,t){let i=this.cache,n=e.length,s=Fa(t,n);Rt(i,s)||(r.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Hh,s[a])}function Ed(r,e,t){let i=this.cache,n=e.length,s=Fa(t,n);Rt(i,s)||(r.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||kh,s[a])}function Td(r,e,t){let i=this.cache,n=e.length,s=Fa(t,n);Rt(i,s)||(r.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||zh,s[a])}var qo=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=(function(n){switch(n){case 5126:return ku;case 35664:return Gu;case 35665:return Vu;case 35666:return Wu;case 35674:return Xu;case 35675:return qu;case 35676:return ju;case 5124:case 35670:return Yu;case 35667:case 35671:return Ju;case 35668:case 35672:return Zu;case 35669:case 35673:return Ku;case 5125:return Qu;case 36294:return $u;case 36295:return ed;case 36296:return td;case 35678:case 36198:case 36298:case 36306:case 35682:return id;case 35679:case 36299:case 36307:return nd;case 35680:case 36300:case 36308:case 36293:return rd;case 36289:case 36303:case 36311:case 36292:return sd}})(t.type)}},jo=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=(function(n){switch(n){case 5126:return ad;case 35664:return od;case 35665:return ld;case 35666:return cd;case 35674:return hd;case 35675:return ud;case 35676:return dd;case 5124:case 35670:return pd;case 35667:case 35671:return fd;case 35668:case 35672:return md;case 35669:case 35673:return gd;case 5125:return vd;case 36294:return yd;case 36295:return xd;case 36296:return Md;case 35678:case 36198:case 36298:case 36306:case 35682:return Sd;case 35679:case 36299:case 36307:return bd;case 35680:case 36300:case 36308:case 36293:return Ed;case 36289:case 36303:case 36311:case 36292:return Td}})(t.type)}},Yo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},Eo=/(\w+)(\])?(\[|\.)?/g;function Zc(r,e){r.seq.push(e),r.map[e.id]=e}function wd(r,e,t){let i=r.name,n=i.length;for(Eo.lastIndex=0;;){let s=Eo.exec(i),a=Eo.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===n){Zc(t,c===void 0?new qo(o,r,e):new jo(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Yo(o),Zc(t,h)),t=h}}}var pr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n);wd(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Kc(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var Ad=37297,Rd=0;function Qc(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+(function(o,l){let c=o.split(`
`),h=[],d=Math.max(l-6,0),u=Math.min(l+6,c.length);for(let p=d;p<u;p++){let g=p+1;h.push(`${g===l?">":" "} ${g}: ${c[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return n}function Cd(r,e){let t=(function(i){let n=ot.getPrimaries(ot.workingColorSpace),s=ot.getPrimaries(i),a;switch(n===s?a="":n===sa&&s===ra?a="LinearDisplayP3ToLinearSRGB":n===ra&&s===sa&&(a="LinearSRGBToLinearDisplayP3"),i){case Wi:case Oa:return[a,"LinearTransferOETF"];case ct:case Bl:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[a,"LinearTransferOETF"]}})(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function _d(r,e){let t;switch(e){case Dl:t="Linear";break;case Nl:t="Reinhard";break;case Ol:t="OptimizedCineon";break;case Yi:t="ACESFilmic";break;case su:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hr(r){return r!==""}function $c(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Pd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(r){return r.replace(Pd,Ud)}var Ld=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ud(r,e){let t=Je[e];if(t===void 0){let i=Ld.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Jo(t)}var Id=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(r){return r.replace(Id,Dd)}function Dd(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function ih(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Nd(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(U){let P="SHADOWMAP_TYPE_BASIC";return U.shadowMapType===Ia?P="SHADOWMAP_TYPE_PCF":U.shadowMapType===Il?P="SHADOWMAP_TYPE_PCF_SOFT":U.shadowMapType===ki&&(P="SHADOWMAP_TYPE_VSM"),P})(t),c=(function(U){let P="ENVMAP_TYPE_CUBE";if(U.envMap)switch(U.envMapMode){case fr:case mr:P="ENVMAP_TYPE_CUBE";break;case Na:P="ENVMAP_TYPE_CUBE_UV"}return P})(t),h=(function(U){let P="ENVMAP_MODE_REFLECTION";return U.envMap&&U.envMapMode===mr&&(P="ENVMAP_MODE_REFRACTION"),P})(t),d=(function(U){let P="ENVMAP_BLENDING_NONE";if(U.envMap)switch(U.combine){case Eh:P="ENVMAP_BLENDING_MULTIPLY";break;case nu:P="ENVMAP_BLENDING_MIX";break;case ru:P="ENVMAP_BLENDING_ADD"}return P})(t),u=(function(U){let P=U.envMapCubeUVHeight;if(P===null)return null;let X=Math.log2(P)-2,B=1/P;return{texelWidth:1/(3*Math.max(Math.pow(2,X),112)),texelHeight:B,maxMip:X}})(t),p=t.isWebGL2?"":(function(U){return[U.extensionDerivatives||U.envMapCubeUVHeight||U.bumpMap||U.normalMapTangentSpace||U.clearcoatNormalMap||U.flatShading||U.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(U.extensionFragDepth||U.logarithmicDepthBuffer)&&U.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",U.extensionDrawBuffers&&U.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(U.extensionShaderTextureLOD||U.envMap||U.transmission)&&U.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hr).join(`
`)})(t),g=(function(U){let P=[];for(let X in U){let B=U[X];B!==!1&&P.push("#define "+X+" "+B)}return P.join(`
`)})(s),x=n.createProgram(),f,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hr).join(`
`),f.length>0&&(f+=`
`),y=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hr).join(`
`),y.length>0&&(y+=`
`)):(f=[ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),y=[p,ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cn?"#define TONE_MAPPING":"",t.toneMapping!==cn?Je.tonemapping_pars_fragment:"",t.toneMapping!==cn?_d("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Cd("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hr).join(`
`)),a=Jo(a),a=$c(a,t),a=eh(a,t),o=Jo(o),o=$c(o,t),o=eh(o,t),a=th(a),o=th(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let m=v+f+a,E=v+y+o,M=Kc(n,n.VERTEX_SHADER,m),b=Kc(n,n.FRAGMENT_SHADER,E);function A(U){if(r.debug.checkShaderErrors){let P=n.getProgramInfoLog(x).trim(),X=n.getShaderInfoLog(M).trim(),B=n.getShaderInfoLog(b).trim(),re=!0,he=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(re=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,M,b);else{let j=Qc(n,M,"vertex"),q=Qc(n,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Program Info Log: `+P+`
`+j+`
`+q)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):X!==""&&B!==""||(he=!1);he&&(U.diagnostics={runnable:re,programLog:P,vertexShader:{log:X,prefix:f},fragmentShader:{log:B,prefix:y}})}n.deleteShader(M),n.deleteShader(b),N=new pr(n,x),I=(function(P,X){let B={},re=P.getProgramParameter(X,P.ACTIVE_ATTRIBUTES);for(let he=0;he<re;he++){let j=P.getActiveAttrib(X,he),q=j.name,V=1;j.type===P.FLOAT_MAT2&&(V=2),j.type===P.FLOAT_MAT3&&(V=3),j.type===P.FLOAT_MAT4&&(V=4),B[q]={type:j.type,location:P.getAttribLocation(X,q),locationSize:V}}return B})(n,x)}let N,I;n.attachShader(x,M),n.attachShader(x,b),t.index0AttributeName!==void 0?n.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x),this.getUniforms=function(){return N===void 0&&A(this),N},this.getAttributes=function(){return I===void 0&&A(this),I};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=n.getProgramParameter(x,Ad)),F},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rd++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=b,this}var Od=0,Zo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ko(e),t.set(e,i)),i}},Ko=class{constructor(e){this.id=Od++,this.code=e,this.usedTimes=0}};function Fd(r,e,t,i,n,s,a){let o=new pa,l=new Zo,c=[],h=n.isWebGL2,d=n.logarithmicDepthBuffer,u=n.vertexTextures,p=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(f){return f===0?"uv":`uv${f}`}return{getParameters:function(f,y,v,m,E){let M=m.fog,b=E.geometry,A=f.isMeshStandardMaterial?m.environment:null,N=(f.isMeshStandardMaterial?t:e).get(f.envMap||A),I=N&&N.mapping===Na?N.image.height:null,F=g[f.type];f.precision!==null&&(p=n.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let U=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,P=U!==void 0?U.length:0,X,B,re,he,j=0;if(b.morphAttributes.position!==void 0&&(j=1),b.morphAttributes.normal!==void 0&&(j=2),b.morphAttributes.color!==void 0&&(j=3),F){let ft=Xt[F];X=ft.vertexShader,B=ft.fragmentShader}else X=f.vertexShader,B=f.fragmentShader,l.update(f),re=l.getVertexShaderID(f),he=l.getFragmentShaderID(f);let q=r.getRenderTarget(),V=E.isInstancedMesh===!0,ae=!!f.map,Z=!!f.matcap,ge=!!N,we=!!f.aoMap,Ue=!!f.lightMap,me=!!f.bumpMap,Ce=!!f.normalMap,C=!!f.displacementMap,w=!!f.emissiveMap,L=!!f.metalnessMap,z=!!f.roughnessMap,_=f.anisotropy>0,k=f.clearcoat>0,O=f.iridescence>0,S=f.sheen>0,G=f.transmission>0,H=_&&!!f.anisotropyMap,se=k&&!!f.clearcoatMap,Y=k&&!!f.clearcoatNormalMap,_e=k&&!!f.clearcoatRoughnessMap,Me=O&&!!f.iridescenceMap,pe=O&&!!f.iridescenceThicknessMap,Ie=S&&!!f.sheenColorMap,ye=S&&!!f.sheenRoughnessMap,Fe=!!f.specularMap,fe=!!f.specularColorMap,oe=!!f.specularIntensityMap,be=G&&!!f.transmissionMap,ve=G&&!!f.thicknessMap,Oe=!!f.gradientMap,$=!!f.alphaMap,W=f.alphaTest>0,K=!!f.alphaHash,Q=!!f.extensions,Ae=!!b.attributes.uv1,Ee=!!b.attributes.uv2,D=!!b.attributes.uv3,We=cn;return f.toneMapped&&(q!==null&&q.isXRRenderTarget!==!0||(We=r.toneMapping)),{isWebGL2:h,shaderID:F,shaderType:f.type,shaderName:f.name,vertexShader:X,fragmentShader:B,defines:f.defines,customVertexShaderID:re,customFragmentShaderID:he,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,instancing:V,instancingColor:V&&E.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:q===null?r.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Wi,map:ae,matcap:Z,envMap:ge,envMapMode:ge&&N.mapping,envMapCubeUVHeight:I,aoMap:we,lightMap:Ue,bumpMap:me,normalMap:Ce,displacementMap:u&&C,emissiveMap:w,normalMapObjectSpace:Ce&&f.normalMapType===1,normalMapTangentSpace:Ce&&f.normalMapType===0,metalnessMap:L,roughnessMap:z,anisotropy:_,anisotropyMap:H,clearcoat:k,clearcoatMap:se,clearcoatNormalMap:Y,clearcoatRoughnessMap:_e,iridescence:O,iridescenceMap:Me,iridescenceThicknessMap:pe,sheen:S,sheenColorMap:Ie,sheenRoughnessMap:ye,specularMap:Fe,specularColorMap:fe,specularIntensityMap:oe,transmission:G,transmissionMap:be,thicknessMap:ve,gradientMap:Oe,opaque:f.transparent===!1&&f.blending===1,alphaMap:$,alphaTest:W,alphaHash:K,combine:f.combine,mapUv:ae&&x(f.map.channel),aoMapUv:we&&x(f.aoMap.channel),lightMapUv:Ue&&x(f.lightMap.channel),bumpMapUv:me&&x(f.bumpMap.channel),normalMapUv:Ce&&x(f.normalMap.channel),displacementMapUv:C&&x(f.displacementMap.channel),emissiveMapUv:w&&x(f.emissiveMap.channel),metalnessMapUv:L&&x(f.metalnessMap.channel),roughnessMapUv:z&&x(f.roughnessMap.channel),anisotropyMapUv:H&&x(f.anisotropyMap.channel),clearcoatMapUv:se&&x(f.clearcoatMap.channel),clearcoatNormalMapUv:Y&&x(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&x(f.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&x(f.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&x(f.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&x(f.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(f.sheenRoughnessMap.channel),specularMapUv:Fe&&x(f.specularMap.channel),specularColorMapUv:fe&&x(f.specularColorMap.channel),specularIntensityMapUv:oe&&x(f.specularIntensityMap.channel),transmissionMapUv:be&&x(f.transmissionMap.channel),thicknessMapUv:ve&&x(f.thicknessMap.channel),alphaMapUv:$&&x(f.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(Ce||_),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Ee,vertexUv3s:D,pointsUvs:E.isPoints===!0&&!!b.attributes.uv&&(ae||$),fog:!!M,useFog:f.fog===!0,fogExp2:M&&M.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:E.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:j,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:r.shadowMap.enabled&&v.length>0,shadowMapType:r.shadowMap.type,toneMapping:We,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ae&&f.map.isVideoTexture===!0&&ot.getTransfer(f.map.colorSpace)===dt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===xt,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionDerivatives:Q&&f.extensions.derivatives===!0,extensionFragDepth:Q&&f.extensions.fragDepth===!0,extensionDrawBuffers:Q&&f.extensions.drawBuffers===!0,extensionShaderTextureLOD:Q&&f.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()}},getProgramCacheKey:function(f){let y=[];if(f.shaderID?y.push(f.shaderID):(y.push(f.customVertexShaderID),y.push(f.customFragmentShaderID)),f.defines!==void 0)for(let v in f.defines)y.push(v),y.push(f.defines[v]);return f.isRawShaderMaterial===!1&&((function(v,m){v.push(m.precision),v.push(m.outputColorSpace),v.push(m.envMapMode),v.push(m.envMapCubeUVHeight),v.push(m.mapUv),v.push(m.alphaMapUv),v.push(m.lightMapUv),v.push(m.aoMapUv),v.push(m.bumpMapUv),v.push(m.normalMapUv),v.push(m.displacementMapUv),v.push(m.emissiveMapUv),v.push(m.metalnessMapUv),v.push(m.roughnessMapUv),v.push(m.anisotropyMapUv),v.push(m.clearcoatMapUv),v.push(m.clearcoatNormalMapUv),v.push(m.clearcoatRoughnessMapUv),v.push(m.iridescenceMapUv),v.push(m.iridescenceThicknessMapUv),v.push(m.sheenColorMapUv),v.push(m.sheenRoughnessMapUv),v.push(m.specularMapUv),v.push(m.specularColorMapUv),v.push(m.specularIntensityMapUv),v.push(m.transmissionMapUv),v.push(m.thicknessMapUv),v.push(m.combine),v.push(m.fogExp2),v.push(m.sizeAttenuation),v.push(m.morphTargetsCount),v.push(m.morphAttributeCount),v.push(m.numDirLights),v.push(m.numPointLights),v.push(m.numSpotLights),v.push(m.numSpotLightMaps),v.push(m.numHemiLights),v.push(m.numRectAreaLights),v.push(m.numDirLightShadows),v.push(m.numPointLightShadows),v.push(m.numSpotLightShadows),v.push(m.numSpotLightShadowsWithMaps),v.push(m.numLightProbes),v.push(m.shadowMapType),v.push(m.toneMapping),v.push(m.numClippingPlanes),v.push(m.numClipIntersection),v.push(m.depthPacking)})(y,f),(function(v,m){o.disableAll(),m.isWebGL2&&o.enable(0),m.supportsVertexTextures&&o.enable(1),m.instancing&&o.enable(2),m.instancingColor&&o.enable(3),m.matcap&&o.enable(4),m.envMap&&o.enable(5),m.normalMapObjectSpace&&o.enable(6),m.normalMapTangentSpace&&o.enable(7),m.clearcoat&&o.enable(8),m.iridescence&&o.enable(9),m.alphaTest&&o.enable(10),m.vertexColors&&o.enable(11),m.vertexAlphas&&o.enable(12),m.vertexUv1s&&o.enable(13),m.vertexUv2s&&o.enable(14),m.vertexUv3s&&o.enable(15),m.vertexTangents&&o.enable(16),m.anisotropy&&o.enable(17),m.alphaHash&&o.enable(18),v.push(o.mask),o.disableAll(),m.fog&&o.enable(0),m.useFog&&o.enable(1),m.flatShading&&o.enable(2),m.logarithmicDepthBuffer&&o.enable(3),m.skinning&&o.enable(4),m.morphTargets&&o.enable(5),m.morphNormals&&o.enable(6),m.morphColors&&o.enable(7),m.premultipliedAlpha&&o.enable(8),m.shadowMapEnabled&&o.enable(9),m.useLegacyLights&&o.enable(10),m.doubleSided&&o.enable(11),m.flipSided&&o.enable(12),m.useDepthPacking&&o.enable(13),m.dithering&&o.enable(14),m.transmission&&o.enable(15),m.sheen&&o.enable(16),m.opaque&&o.enable(17),m.pointsUvs&&o.enable(18),m.decodeVideoTexture&&o.enable(19),v.push(o.mask)})(y,f),y.push(r.outputColorSpace)),y.push(f.customProgramCacheKey),y.join()},getUniforms:function(f){let y=g[f.type],v;if(y){let m=Xt[y];v=yi.clone(m.uniforms)}else v=f.uniforms;return v},acquireProgram:function(f,y){let v;for(let m=0,E=c.length;m<E;m++){let M=c[m];if(M.cacheKey===y){v=M,++v.usedTimes;break}}return v===void 0&&(v=new Nd(r,y,f,s),c.push(v)),v},releaseProgram:function(f){if(--f.usedTimes==0){let y=c.indexOf(f);c[y]=c[c.length-1],c.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:c,dispose:function(){l.dispose()}}}function Bd(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function zd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function nh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function rh(){let r=[],e=0,t=[],i=[],n=[];function s(a,o,l,c,h,d){let u=r[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:d},r[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=l,u.groupOrder=c,u.renderOrder=a.renderOrder,u.z=h,u.group=d),e++,u}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,l,c,h,d){let u=s(a,o,l,c,h,d);l.transmission>0?i.push(u):l.transparent===!0?n.push(u):t.push(u)},unshift:function(a,o,l,c,h,d){let u=s(a,o,l,c,h,d);l.transmission>0?i.unshift(u):l.transparent===!0?n.unshift(u):t.unshift(u)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||zd),i.length>1&&i.sort(o||nh),n.length>1&&n.sort(o||nh)}}}function Hd(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new rh,r.set(e,[n])):t>=i.length?(n=new rh,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function kd(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new Te};break;case"SpotLight":t={position:new T,direction:new T,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new T,halfWidth:new T,halfHeight:new T}}return r[e.id]=t,t}}}var Gd=0;function Vd(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Wd(r,e){let t=new kd,i=(function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);let s=new T,a=new Qe,o=new Qe;return{setup:function(l,c){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let p=0,g=0,x=0,f=0,y=0,v=0,m=0,E=0,M=0,b=0,A=0;l.sort(Vd);let N=c===!0?Math.PI:1;for(let F=0,U=l.length;F<U;F++){let P=l[F],X=P.color,B=P.intensity,re=P.distance,he=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=X.r*B*N,d+=X.g*B*N,u+=X.b*B*N;else if(P.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(P.sh.coefficients[j],B);A++}else if(P.isDirectionalLight){let j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*N),P.castShadow){let q=P.shadow,V=i.get(P);V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=he,n.directionalShadowMatrix[p]=P.shadow.matrix,v++}n.directional[p]=j,p++}else if(P.isSpotLight){let j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(X).multiplyScalar(B*N),j.distance=re,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,n.spot[x]=j;let q=P.shadow;if(P.map&&(n.spotLightMap[M]=P.map,M++,q.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[x]=q.matrix,P.castShadow){let V=i.get(P);V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=he,E++}x++}else if(P.isRectAreaLight){let j=t.get(P);j.color.copy(X).multiplyScalar(B),j.halfWidth.set(.5*P.width,0,0),j.halfHeight.set(0,.5*P.height,0),n.rectArea[f]=j,f++}else if(P.isPointLight){let j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*N),j.distance=P.distance,j.decay=P.decay,P.castShadow){let q=P.shadow,V=i.get(P);V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=he,n.pointShadowMatrix[g]=P.shadow.matrix,m++}n.point[g]=j,g++}else if(P.isHemisphereLight){let j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(B*N),j.groundColor.copy(P.groundColor).multiplyScalar(B*N),n.hemi[y]=j,y++}}f>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;I.directionalLength===p&&I.pointLength===g&&I.spotLength===x&&I.rectAreaLength===f&&I.hemiLength===y&&I.numDirectionalShadows===v&&I.numPointShadows===m&&I.numSpotShadows===E&&I.numSpotMaps===M&&I.numLightProbes===A||(n.directional.length=p,n.spot.length=x,n.rectArea.length=f,n.point.length=g,n.hemi.length=y,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=m,n.pointShadowMap.length=m,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=m,n.spotLightMatrix.length=E+M-b,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,I.directionalLength=p,I.pointLength=g,I.spotLength=x,I.rectAreaLength=f,I.hemiLength=y,I.numDirectionalShadows=v,I.numPointShadows=m,I.numSpotShadows=E,I.numSpotMaps=M,I.numLightProbes=A,n.version=Gd++)},setupView:function(l,c){let h=0,d=0,u=0,p=0,g=0,x=c.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){let v=l[f];if(v.isDirectionalLight){let m=n.directional[h];m.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),m.direction.sub(s),m.direction.transformDirection(x),h++}else if(v.isSpotLight){let m=n.spot[u];m.position.setFromMatrixPosition(v.matrixWorld),m.position.applyMatrix4(x),m.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),m.direction.sub(s),m.direction.transformDirection(x),u++}else if(v.isRectAreaLight){let m=n.rectArea[p];m.position.setFromMatrixPosition(v.matrixWorld),m.position.applyMatrix4(x),o.identity(),a.copy(v.matrixWorld),a.premultiply(x),o.extractRotation(a),m.halfWidth.set(.5*v.width,0,0),m.halfHeight.set(0,.5*v.height,0),m.halfWidth.applyMatrix4(o),m.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let m=n.point[d];m.position.setFromMatrixPosition(v.matrixWorld),m.position.applyMatrix4(x),d++}else if(v.isHemisphereLight){let m=n.hemi[g];m.direction.setFromMatrixPosition(v.matrixWorld),m.direction.transformDirection(x),g++}}},state:n}}function sh(r,e){let t=new Wd(r,e),i=[],n=[];return{init:function(){i.length=0,n.length=0},state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:function(s){t.setup(i,s)},setupLightsView:function(s){t.setupView(i,s)},pushLight:function(s){i.push(s)},pushShadow:function(s){n.push(s)}}}function Xd(r,e){let t=new WeakMap;return{get:function(i,n=0){let s=t.get(i),a;return s===void 0?(a=new sh(r,e),t.set(i,[a])):n>=s.length?(a=new sh(r,e),s.push(a)):a=s[n],a},dispose:function(){t=new WeakMap}}}var es=class extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qo=class extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qd(r,e,t){let i=new $r,n=new te,s=new te,a=new at,o=new es({depthPacking:3201}),l=new Qo,c={},h=t.maxTextureSize,d={[un]:xt,[xt]:un,2:2},u=new it({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new st;g.setAttribute("position",new rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ne(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ia;let y=this.type;function v(M,b){let A=e.update(x);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new bt(n.x,n.y)),u.uniforms.shadow_pass.value=M.map.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(b,null,A,u,x,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(b,null,A,p,x,null)}function m(M,b,A,N){let I=null,F=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(F!==void 0)I=F;else if(I=A.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let U=I.uuid,P=b.uuid,X=c[U];X===void 0&&(X={},c[U]=X);let B=X[P];B===void 0&&(B=I.clone(),X[P]=B),I=B}return I.visible=b.visible,I.wireframe=b.wireframe,I.side=N===ki?b.shadowSide!==null?b.shadowSide:b.side:b.shadowSide!==null?b.shadowSide:d[b.side],I.alphaMap=b.alphaMap,I.alphaTest=b.alphaTest,I.map=b.map,I.clipShadows=b.clipShadows,I.clippingPlanes=b.clippingPlanes,I.clipIntersection=b.clipIntersection,I.displacementMap=b.displacementMap,I.displacementScale=b.displacementScale,I.displacementBias=b.displacementBias,I.wireframeLinewidth=b.wireframeLinewidth,I.linewidth=b.linewidth,A.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(r.properties.get(I).light=A),I}function E(M,b,A,N,I){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&I===ki)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);let U=e.update(M),P=M.material;if(Array.isArray(P)){let X=U.groups;for(let B=0,re=X.length;B<re;B++){let he=X[B],j=P[he.materialIndex];if(j&&j.visible){let q=m(M,j,N,I);r.renderBufferDirect(A,null,U,q,M,he)}}}else if(P.visible){let X=m(M,P,N,I);r.renderBufferDirect(A,null,U,X,M,null)}}let F=M.children;for(let U=0,P=F.length;U<P;U++)E(F[U],b,A,N,I)}this.render=function(M,b,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||M.length===0)return;let N=r.getRenderTarget(),I=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),U=r.state;U.setBlending(0),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let P=y!==ki&&this.type===ki,X=y===ki&&this.type!==ki;for(let B=0,re=M.length;B<re;B++){let he=M[B],j=he.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;n.copy(j.mapSize);let q=j.getFrameExtents();if(n.multiply(q),s.copy(j.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/q.x),n.x=s.x*q.x,j.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/q.y),n.y=s.y*q.y,j.mapSize.y=s.y)),j.map===null||P===!0||X===!0){let ae=this.type!==ki?{minFilter:Wt,magFilter:Wt}:{};j.map!==null&&j.map.dispose(),j.map=new bt(n.x,n.y,ae),j.map.texture.name=he.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();let V=j.getViewportCount();for(let ae=0;ae<V;ae++){let Z=j.getViewport(ae);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),U.viewport(a),j.updateMatrices(he,ae),i=j.getFrustum(),E(b,A,j.camera,he,this.type)}j.isPointLightShadow!==!0&&this.type===ki&&v(j,A),j.needsUpdate=!1}y=this.type,f.needsUpdate=!1,r.setRenderTarget(N,I,F)}}function jd(r,e,t){let i=t.isWebGL2,n=new function(){let S=!1,G=new at,H=null,se=new at(0,0,0,0);return{setMask:function(Y){H===Y||S||(r.colorMask(Y,Y,Y,Y),H=Y)},setLocked:function(Y){S=Y},setClear:function(Y,_e,Me,pe,Ie){Ie===!0&&(Y*=pe,_e*=pe,Me*=pe),G.set(Y,_e,Me,pe),se.equals(G)===!1&&(r.clearColor(Y,_e,Me,pe),se.copy(G))},reset:function(){S=!1,H=null,se.set(-1,0,0,0)}}},s=new function(){let S=!1,G=null,H=null,se=null;return{setTest:function(Y){Y?Ce(r.DEPTH_TEST):C(r.DEPTH_TEST)},setMask:function(Y){G===Y||S||(r.depthMask(Y),G=Y)},setFunc:function(Y){if(H!==Y){switch(Y){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}H=Y}},setLocked:function(Y){S=Y},setClear:function(Y){se!==Y&&(r.clearDepth(Y),se=Y)},reset:function(){S=!1,G=null,H=null,se=null}}},a=new function(){let S=!1,G=null,H=null,se=null,Y=null,_e=null,Me=null,pe=null,Ie=null;return{setTest:function(ye){S||(ye?Ce(r.STENCIL_TEST):C(r.STENCIL_TEST))},setMask:function(ye){G===ye||S||(r.stencilMask(ye),G=ye)},setFunc:function(ye,Fe,fe){H===ye&&se===Fe&&Y===fe||(r.stencilFunc(ye,Fe,fe),H=ye,se=Fe,Y=fe)},setOp:function(ye,Fe,fe){_e===ye&&Me===Fe&&pe===fe||(r.stencilOp(ye,Fe,fe),_e=ye,Me=Fe,pe=fe)},setLocked:function(ye){S=ye},setClear:function(ye){Ie!==ye&&(r.clearStencil(ye),Ie=ye)},reset:function(){S=!1,G=null,H=null,se=null,Y=null,_e=null,Me=null,pe=null,Ie=null}}},o=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,u=[],p=null,g=!1,x=null,f=null,y=null,v=null,m=null,E=null,M=null,b=new Te(0,0,0),A=0,N=!1,I=null,F=null,U=null,P=null,X=null,B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,he=0,j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(j)[1]),re=he>=1):j.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),re=he>=2);let q=null,V={},ae=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),ge=new at().fromArray(ae),we=new at().fromArray(Z);function Ue(S,G,H,se){let Y=new Uint8Array(4),_e=r.createTexture();r.bindTexture(S,_e),r.texParameteri(S,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(S,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Me=0;Me<H;Me++)!i||S!==r.TEXTURE_3D&&S!==r.TEXTURE_2D_ARRAY?r.texImage2D(G+Me,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Y):r.texImage3D(G,0,r.RGBA,1,1,se,0,r.RGBA,r.UNSIGNED_BYTE,Y);return _e}let me={};function Ce(S){c[S]!==!0&&(r.enable(S),c[S]=!0)}function C(S){c[S]!==!1&&(r.disable(S),c[S]=!1)}me[r.TEXTURE_2D]=Ue(r.TEXTURE_2D,r.TEXTURE_2D,1),me[r.TEXTURE_CUBE_MAP]=Ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(me[r.TEXTURE_2D_ARRAY]=Ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),me[r.TEXTURE_3D]=Ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),n.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Ce(r.DEPTH_TEST),s.setFunc(3),_(!1),k(1),Ce(r.CULL_FACE),z(0);let w={[Ln]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(i)w[103]=r.MIN,w[104]=r.MAX;else{let S=e.get("EXT_blend_minmax");S!==null&&(w[103]=S.MIN_EXT,w[104]=S.MAX_EXT)}let L={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[Uo]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[Io]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function z(S,G,H,se,Y,_e,Me,pe,Ie,ye){if(S!==0){if(g===!1&&(Ce(r.BLEND),g=!0),S===5)Y=Y||G,_e=_e||H,Me=Me||se,G===f&&Y===m||(r.blendEquationSeparate(w[G],w[Y]),f=G,m=Y),H===y&&se===v&&_e===E&&Me===M||(r.blendFuncSeparate(L[H],L[se],L[_e],L[Me]),y=H,v=se,E=_e,M=Me),pe.equals(b)!==!1&&Ie===A||(r.blendColor(pe.r,pe.g,pe.b,Ie),b.copy(pe),A=Ie),x=S,N=!1;else if(S!==x||ye!==N){if(f===Ln&&m===Ln||(r.blendEquation(r.FUNC_ADD),f=Ln,m=Ln),ye)switch(S){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}else switch(S){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}y=null,v=null,E=null,M=null,b.set(0,0,0),A=0,x=S,N=ye}}else g===!0&&(C(r.BLEND),g=!1)}function _(S){I!==S&&(S?r.frontFace(r.CW):r.frontFace(r.CCW),I=S)}function k(S){S!==0?(Ce(r.CULL_FACE),S!==F&&(S===1?r.cullFace(r.BACK):S===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):C(r.CULL_FACE),F=S}function O(S,G,H){S?(Ce(r.POLYGON_OFFSET_FILL),P===G&&X===H||(r.polygonOffset(G,H),P=G,X=H)):C(r.POLYGON_OFFSET_FILL)}return{buffers:{color:n,depth:s,stencil:a},enable:Ce,disable:C,bindFramebuffer:function(S,G){return h[S]!==G&&(r.bindFramebuffer(S,G),h[S]=G,i&&(S===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=G),S===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=G)),!0)},drawBuffers:function(S,G){let H=u,se=!1;if(S)if(H=d.get(G),H===void 0&&(H=[],d.set(G,H)),S.isWebGLMultipleRenderTargets){let Y=S.texture;if(H.length!==Y.length||H[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,Me=Y.length;_e<Me;_e++)H[_e]=r.COLOR_ATTACHMENT0+_e;H.length=Y.length,se=!0}}else H[0]!==r.COLOR_ATTACHMENT0&&(H[0]=r.COLOR_ATTACHMENT0,se=!0);else H[0]!==r.BACK&&(H[0]=r.BACK,se=!0);se&&(t.isWebGL2?r.drawBuffers(H):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H))},useProgram:function(S){return p!==S&&(r.useProgram(S),p=S,!0)},setBlending:z,setMaterial:function(S,G){S.side===2?C(r.CULL_FACE):Ce(r.CULL_FACE);let H=S.side===xt;G&&(H=!H),_(H),S.blending===1&&S.transparent===!1?z(0):z(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),s.setFunc(S.depthFunc),s.setTest(S.depthTest),s.setMask(S.depthWrite),n.setMask(S.colorWrite);let se=S.stencilWrite;a.setTest(se),se&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),O(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?Ce(r.SAMPLE_ALPHA_TO_COVERAGE):C(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:_,setCullFace:k,setLineWidth:function(S){S!==U&&(re&&r.lineWidth(S),U=S)},setPolygonOffset:O,setScissorTest:function(S){S?Ce(r.SCISSOR_TEST):C(r.SCISSOR_TEST)},activeTexture:function(S){S===void 0&&(S=r.TEXTURE0+B-1),q!==S&&(r.activeTexture(S),q=S)},bindTexture:function(S,G,H){H===void 0&&(H=q===null?r.TEXTURE0+B-1:q);let se=V[H];se===void 0&&(se={type:void 0,texture:void 0},V[H]=se),se.type===S&&se.texture===G||(q!==H&&(r.activeTexture(H),q=H),r.bindTexture(S,G||me[S]),se.type=S,se.texture=G)},unbindTexture:function(){let S=V[q];S!==void 0&&S.type!==void 0&&(r.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},updateUBOMapping:function(S,G){let H=l.get(G);H===void 0&&(H=new WeakMap,l.set(G,H));let se=H.get(S);se===void 0&&(se=r.getUniformBlockIndex(G,S.name),H.set(S,se))},uniformBlockBinding:function(S,G){let H=l.get(G).get(S);o.get(G)!==H&&(r.uniformBlockBinding(G,H,S.__bindingPointIndex),o.set(G,H))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},scissor:function(S){ge.equals(S)===!1&&(r.scissor(S.x,S.y,S.z,S.w),ge.copy(S))},viewport:function(S){we.equals(S)===!1&&(r.viewport(S.x,S.y,S.z,S.w),we.copy(S))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},q=null,V={},h={},d=new WeakMap,u=[],p=null,g=!1,x=null,f=null,y=null,v=null,m=null,E=null,M=null,b=new Te(0,0,0),A=0,N=!1,I=null,F=null,U=null,P=null,X=null,ge.set(0,0,r.canvas.width,r.canvas.height),we.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),a.reset()}}}function Yd(r,e,t,i,n,s,a){let o=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,d=n.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,x,f=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,w){return y?new OffscreenCanvas(C,w):la("canvas")}function m(C,w,L,z){let _=1;if((C.width>z||C.height>z)&&(_=z/Math.max(C.width,C.height)),_<1||w===!0){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let k=w?oa:Math.floor,O=k(_*C.width),S=k(_*C.height);x===void 0&&(x=v(O,S));let G=L?v(O,S):x;return G.width=O,G.height=S,G.getContext("2d").drawImage(C,0,0,O,S),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+O+"x"+S+")."),G}return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C}return C}function E(C){return ko(C.width)&&ko(C.height)}function M(C,w){return C.generateMipmaps&&w&&C.minFilter!==Wt&&C.minFilter!==gi}function b(C){r.generateMipmap(C)}function A(C,w,L,z,_=!1){if(o===!1)return w;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let k=w;if(w===r.RED&&(L===r.FLOAT&&(k=r.R32F),L===r.HALF_FLOAT&&(k=r.R16F),L===r.UNSIGNED_BYTE&&(k=r.R8)),w===r.RED_INTEGER&&(L===r.UNSIGNED_BYTE&&(k=r.R8UI),L===r.UNSIGNED_SHORT&&(k=r.R16UI),L===r.UNSIGNED_INT&&(k=r.R32UI),L===r.BYTE&&(k=r.R8I),L===r.SHORT&&(k=r.R16I),L===r.INT&&(k=r.R32I)),w===r.RG&&(L===r.FLOAT&&(k=r.RG32F),L===r.HALF_FLOAT&&(k=r.RG16F),L===r.UNSIGNED_BYTE&&(k=r.RG8)),w===r.RGBA){let O=_?na:ot.getTransfer(z);L===r.FLOAT&&(k=r.RGBA32F),L===r.HALF_FLOAT&&(k=r.RGBA16F),L===r.UNSIGNED_BYTE&&(k=O===dt?r.SRGB8_ALPHA8:r.RGBA8),L===r.UNSIGNED_SHORT_4_4_4_4&&(k=r.RGBA4),L===r.UNSIGNED_SHORT_5_5_5_1&&(k=r.RGB5_A1)}return k!==r.R16F&&k!==r.R32F&&k!==r.RG16F&&k!==r.RG32F&&k!==r.RGBA16F&&k!==r.RGBA32F||e.get("EXT_color_buffer_float"),k}function N(C,w,L){return M(C,L)===!0||C.isFramebufferTexture&&C.minFilter!==Wt&&C.minFilter!==gi?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function I(C){return C===Wt||C===ql||C===Ya?r.NEAREST:r.LINEAR}function F(C){let w=C.target;w.removeEventListener("dispose",F),(function(L){let z=i.get(L);if(z.__webglInit===void 0)return;let _=L.source,k=f.get(_);if(k){let O=k[z.__cacheKey];O.usedTimes--,O.usedTimes===0&&P(L),Object.keys(k).length===0&&f.delete(_)}i.remove(L)})(w),w.isVideoTexture&&g.delete(w)}function U(C){let w=C.target;w.removeEventListener("dispose",U),(function(L){let z=L.texture,_=i.get(L),k=i.get(z);if(k.__webglTexture!==void 0&&(r.deleteTexture(k.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(_.__webglFramebuffer[O]))for(let S=0;S<_.__webglFramebuffer[O].length;S++)r.deleteFramebuffer(_.__webglFramebuffer[O][S]);else r.deleteFramebuffer(_.__webglFramebuffer[O]);_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer[O])}else{if(Array.isArray(_.__webglFramebuffer))for(let O=0;O<_.__webglFramebuffer.length;O++)r.deleteFramebuffer(_.__webglFramebuffer[O]);else r.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&r.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let O=0;O<_.__webglColorRenderbuffer.length;O++)_.__webglColorRenderbuffer[O]&&r.deleteRenderbuffer(_.__webglColorRenderbuffer[O]);_.__webglDepthRenderbuffer&&r.deleteRenderbuffer(_.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let O=0,S=z.length;O<S;O++){let G=i.get(z[O]);G.__webglTexture&&(r.deleteTexture(G.__webglTexture),a.memory.textures--),i.remove(z[O])}i.remove(z),i.remove(L)})(w)}function P(C){let w=i.get(C);r.deleteTexture(w.__webglTexture);let L=C.source;delete f.get(L)[w.__cacheKey],a.memory.textures--}let X=0;function B(C,w){let L=i.get(C);if(C.isVideoTexture&&(function(z){let _=a.render.frame;g.get(z)!==_&&(g.set(z,_),z.update())})(C),C.isRenderTargetTexture===!1&&C.version>0&&L.__version!==C.version){let z=C.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(z.complete!==!1)return void ae(L,C,w);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,L.__webglTexture,r.TEXTURE0+w)}let re={[Oo]:r.REPEAT,[Vi]:r.CLAMP_TO_EDGE,[Fo]:r.MIRRORED_REPEAT},he={[Wt]:r.NEAREST,[ql]:r.NEAREST_MIPMAP_NEAREST,[Ya]:r.NEAREST_MIPMAP_LINEAR,[gi]:r.LINEAR,[au]:r.LINEAR_MIPMAP_NEAREST,[ea]:r.LINEAR_MIPMAP_LINEAR},j={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function q(C,w,L){if(L?(r.texParameteri(C,r.TEXTURE_WRAP_S,re[w.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,re[w.wrapT]),C!==r.TEXTURE_3D&&C!==r.TEXTURE_2D_ARRAY||r.texParameteri(C,r.TEXTURE_WRAP_R,re[w.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,he[w.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,he[w.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),C!==r.TEXTURE_3D&&C!==r.TEXTURE_2D_ARRAY||r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),w.wrapS===Vi&&w.wrapT===Vi||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,I(w.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,I(w.minFilter)),w.minFilter!==Wt&&w.minFilter!==gi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,j[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let z=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Wt||w.minFilter!==Ya&&w.minFilter!==ea||w.type===on&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Ut&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(r.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function V(C,w){let L=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",F));let z=w.source,_=f.get(z);_===void 0&&(_={},f.set(z,_));let k=(function(O){let S=[];return S.push(O.wrapS),S.push(O.wrapT),S.push(O.wrapR||0),S.push(O.magFilter),S.push(O.minFilter),S.push(O.anisotropy),S.push(O.internalFormat),S.push(O.format),S.push(O.type),S.push(O.generateMipmaps),S.push(O.premultiplyAlpha),S.push(O.flipY),S.push(O.unpackAlignment),S.push(O.colorSpace),S.join()})(w);if(k!==C.__cacheKey){_[k]===void 0&&(_[k]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,L=!0),_[k].usedTimes++;let O=_[C.__cacheKey];O!==void 0&&(_[C.__cacheKey].usedTimes--,O.usedTimes===0&&P(w)),C.__cacheKey=k,C.__webglTexture=_[k].texture}return L}function ae(C,w,L){let z=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(z=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(z=r.TEXTURE_3D);let _=V(C,w),k=w.source;t.bindTexture(z,C.__webglTexture,r.TEXTURE0+L);let O=i.get(k);if(k.version!==O.__version||_===!0){t.activeTexture(r.TEXTURE0+L);let S=ot.getPrimaries(ot.workingColorSpace),G=w.colorSpace===Si?null:ot.getPrimaries(w.colorSpace),H=w.colorSpace===Si||S===G?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);let se=(function(ve){return!o&&(ve.wrapS!==Vi||ve.wrapT!==Vi||ve.minFilter!==Wt&&ve.minFilter!==gi)})(w)&&E(w.image)===!1,Y=m(w.image,se,!1,h);Y=Ce(w,Y);let _e=E(Y)||o,Me=s.convert(w.format,w.colorSpace),pe,Ie=s.convert(w.type),ye=A(w.internalFormat,Me,Ie,w.colorSpace,w.isVideoTexture);q(z,w,_e);let Fe=w.mipmaps,fe=o&&w.isVideoTexture!==!0,oe=O.__version===void 0||_===!0,be=N(w,Y,_e);if(w.isDepthTexture)ye=r.DEPTH_COMPONENT,o?ye=w.type===on?r.DEPTH_COMPONENT32F:w.type===an?r.DEPTH_COMPONENT24:w.type===Nn?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:w.type===on&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===On&&ye===r.DEPTH_COMPONENT&&w.type!==Fl&&w.type!==an&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=an,Ie=s.convert(w.type)),w.format===gr&&ye===r.DEPTH_COMPONENT&&(ye=r.DEPTH_STENCIL,w.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Nn,Ie=s.convert(w.type))),oe&&(fe?t.texStorage2D(r.TEXTURE_2D,1,ye,Y.width,Y.height):t.texImage2D(r.TEXTURE_2D,0,ye,Y.width,Y.height,0,Me,Ie,null));else if(w.isDataTexture)if(Fe.length>0&&_e){fe&&oe&&t.texStorage2D(r.TEXTURE_2D,be,ye,Fe[0].width,Fe[0].height);for(let ve=0,Oe=Fe.length;ve<Oe;ve++)pe=Fe[ve],fe?t.texSubImage2D(r.TEXTURE_2D,ve,0,0,pe.width,pe.height,Me,Ie,pe.data):t.texImage2D(r.TEXTURE_2D,ve,ye,pe.width,pe.height,0,Me,Ie,pe.data);w.generateMipmaps=!1}else fe?(oe&&t.texStorage2D(r.TEXTURE_2D,be,ye,Y.width,Y.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Y.width,Y.height,Me,Ie,Y.data)):t.texImage2D(r.TEXTURE_2D,0,ye,Y.width,Y.height,0,Me,Ie,Y.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){fe&&oe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,ye,Fe[0].width,Fe[0].height,Y.depth);for(let ve=0,Oe=Fe.length;ve<Oe;ve++)pe=Fe[ve],w.format!==Mi?Me!==null?fe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,pe.width,pe.height,Y.depth,Me,pe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,ye,pe.width,pe.height,Y.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,pe.width,pe.height,Y.depth,Me,Ie,pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ve,ye,pe.width,pe.height,Y.depth,0,Me,Ie,pe.data)}else{fe&&oe&&t.texStorage2D(r.TEXTURE_2D,be,ye,Fe[0].width,Fe[0].height);for(let ve=0,Oe=Fe.length;ve<Oe;ve++)pe=Fe[ve],w.format!==Mi?Me!==null?fe?t.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,pe.width,pe.height,Me,pe.data):t.compressedTexImage2D(r.TEXTURE_2D,ve,ye,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?t.texSubImage2D(r.TEXTURE_2D,ve,0,0,pe.width,pe.height,Me,Ie,pe.data):t.texImage2D(r.TEXTURE_2D,ve,ye,pe.width,pe.height,0,Me,Ie,pe.data)}else if(w.isDataArrayTexture)fe?(oe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,ye,Y.width,Y.height,Y.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,Me,Ie,Y.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ye,Y.width,Y.height,Y.depth,0,Me,Ie,Y.data);else if(w.isData3DTexture)fe?(oe&&t.texStorage3D(r.TEXTURE_3D,be,ye,Y.width,Y.height,Y.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,Me,Ie,Y.data)):t.texImage3D(r.TEXTURE_3D,0,ye,Y.width,Y.height,Y.depth,0,Me,Ie,Y.data);else if(w.isFramebufferTexture){if(oe)if(fe)t.texStorage2D(r.TEXTURE_2D,be,ye,Y.width,Y.height);else{let ve=Y.width,Oe=Y.height;for(let $=0;$<be;$++)t.texImage2D(r.TEXTURE_2D,$,ye,ve,Oe,0,Me,Ie,null),ve>>=1,Oe>>=1}}else if(Fe.length>0&&_e){fe&&oe&&t.texStorage2D(r.TEXTURE_2D,be,ye,Fe[0].width,Fe[0].height);for(let ve=0,Oe=Fe.length;ve<Oe;ve++)pe=Fe[ve],fe?t.texSubImage2D(r.TEXTURE_2D,ve,0,0,Me,Ie,pe):t.texImage2D(r.TEXTURE_2D,ve,ye,Me,Ie,pe);w.generateMipmaps=!1}else fe?(oe&&t.texStorage2D(r.TEXTURE_2D,be,ye,Y.width,Y.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,Ie,Y)):t.texImage2D(r.TEXTURE_2D,0,ye,Me,Ie,Y);M(w,_e)&&b(z),O.__version=k.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Z(C,w,L,z,_,k){let O=s.convert(L.format,L.colorSpace),S=s.convert(L.type),G=A(L.internalFormat,O,S,L.colorSpace);if(!i.get(w).__hasExternalTextures){let H=Math.max(1,w.width>>k),se=Math.max(1,w.height>>k);_===r.TEXTURE_3D||_===r.TEXTURE_2D_ARRAY?t.texImage3D(_,k,G,H,se,w.depth,0,O,S,null):t.texImage2D(_,k,G,H,se,0,O,S,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),me(w)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,z,_,i.get(L).__webglTexture,0,Ue(w)):(_===r.TEXTURE_2D||_>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,z,_,i.get(L).__webglTexture,k),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ge(C,w,L){if(r.bindRenderbuffer(r.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let z=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(L||me(w)){let _=w.depthTexture;_&&_.isDepthTexture&&(_.type===on?z=r.DEPTH_COMPONENT32F:_.type===an&&(z=r.DEPTH_COMPONENT24));let k=Ue(w);me(w)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k,z,w.width,w.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,k,z,w.width,w.height)}else r.renderbufferStorage(r.RENDERBUFFER,z,w.width,w.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){let z=Ue(w);L&&me(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,z,r.DEPTH24_STENCIL8,w.width,w.height):me(w)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,z,r.DEPTH24_STENCIL8,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{let z=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let _=0;_<z.length;_++){let k=z[_],O=s.convert(k.format,k.colorSpace),S=s.convert(k.type),G=A(k.internalFormat,O,S,k.colorSpace),H=Ue(w);L&&me(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,H,G,w.width,w.height):me(w)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,H,G,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,G,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function we(C){let w=i.get(C),L=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");(function(z,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,z),!_.depthTexture||!_.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(_.depthTexture).__webglTexture&&_.depthTexture.image.width===_.width&&_.depthTexture.image.height===_.height||(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),B(_.depthTexture,0);let k=i.get(_.depthTexture).__webglTexture,O=Ue(_);if(_.depthTexture.format===On)me(_)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,k,0,O):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,k,0);else{if(_.depthTexture.format!==gr)throw new Error("Unknown depthTexture format");me(_)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,k,0,O):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,k,0)}})(w.__webglFramebuffer,C)}else if(L){w.__webglDepthbuffer=[];for(let z=0;z<6;z++)t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[z]),w.__webglDepthbuffer[z]=r.createRenderbuffer(),ge(w.__webglDepthbuffer[z],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),ge(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(C){return Math.min(d,C.samples)}function me(C){let w=i.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ce(C,w){let L=C.colorSpace,z=C.format,_=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===zo||L!==Wi&&L!==Si&&(ot.getTransfer(L)===dt?o===!1?e.has("EXT_sRGB")===!0&&z===Mi?(C.format=zo,C.minFilter=gi,C.generateMipmaps=!1):w=ca.sRGBToLinear(w):z===Mi&&_===Dn||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),w}this.allocateTextureUnit=function(){let C=X;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),X+=1,C},this.resetTextureUnits=function(){X=0},this.setTexture2D=B,this.setTexture2DArray=function(C,w){let L=i.get(C);C.version>0&&L.__version!==C.version?ae(L,C,w):t.bindTexture(r.TEXTURE_2D_ARRAY,L.__webglTexture,r.TEXTURE0+w)},this.setTexture3D=function(C,w){let L=i.get(C);C.version>0&&L.__version!==C.version?ae(L,C,w):t.bindTexture(r.TEXTURE_3D,L.__webglTexture,r.TEXTURE0+w)},this.setTextureCube=function(C,w){let L=i.get(C);C.version>0&&L.__version!==C.version?(function(z,_,k){if(_.image.length!==6)return;let O=V(z,_),S=_.source;t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+k);let G=i.get(S);if(S.version!==G.__version||O===!0){t.activeTexture(r.TEXTURE0+k);let H=ot.getPrimaries(ot.workingColorSpace),se=_.colorSpace===Si?null:ot.getPrimaries(_.colorSpace),Y=_.colorSpace===Si||H===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let _e=_.isCompressedTexture||_.image[0].isCompressedTexture,Me=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let W=0;W<6;W++)pe[W]=_e||Me?Me?_.image[W].image:_.image[W]:m(_.image[W],!1,!0,c),pe[W]=Ce(_,pe[W]);let Ie=pe[0],ye=E(Ie)||o,Fe=s.convert(_.format,_.colorSpace),fe=s.convert(_.type),oe=A(_.internalFormat,Fe,fe,_.colorSpace),be=o&&_.isVideoTexture!==!0,ve=G.__version===void 0||O===!0,Oe,$=N(_,Ie,ye);if(q(r.TEXTURE_CUBE_MAP,_,ye),_e){be&&ve&&t.texStorage2D(r.TEXTURE_CUBE_MAP,$,oe,Ie.width,Ie.height);for(let W=0;W<6;W++){Oe=pe[W].mipmaps;for(let K=0;K<Oe.length;K++){let Q=Oe[K];_.format!==Mi?Fe!==null?be?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,K,0,0,Q.width,Q.height,Fe,Q.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,K,oe,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,K,0,0,Q.width,Q.height,Fe,fe,Q.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,K,oe,Q.width,Q.height,0,Fe,fe,Q.data)}}}else{Oe=_.mipmaps,be&&ve&&(Oe.length>0&&$++,t.texStorage2D(r.TEXTURE_CUBE_MAP,$,oe,pe[0].width,pe[0].height));for(let W=0;W<6;W++)if(Me){be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,pe[W].width,pe[W].height,Fe,fe,pe[W].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,oe,pe[W].width,pe[W].height,0,Fe,fe,pe[W].data);for(let K=0;K<Oe.length;K++){let Q=Oe[K].image[W].image;be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,K+1,0,0,Q.width,Q.height,Fe,fe,Q.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,K+1,oe,Q.width,Q.height,0,Fe,fe,Q.data)}}else{be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Fe,fe,pe[W]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,oe,Fe,fe,pe[W]);for(let K=0;K<Oe.length;K++){let Q=Oe[K];be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,K+1,0,0,Fe,fe,Q.image[W]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+W,K+1,oe,Fe,fe,Q.image[W])}}}M(_,ye)&&b(r.TEXTURE_CUBE_MAP),G.__version=S.version,_.onUpdate&&_.onUpdate(_)}z.__version=_.version})(L,C,w):t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+w)},this.rebindTextures=function(C,w,L){let z=i.get(C);w!==void 0&&Z(z.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),L!==void 0&&we(C)},this.setupRenderTarget=function(C){let w=C.texture,L=i.get(C),z=i.get(w);C.addEventListener("dispose",U),C.isWebGLMultipleRenderTargets!==!0&&(z.__webglTexture===void 0&&(z.__webglTexture=r.createTexture()),z.__version=w.version,a.memory.textures++);let _=C.isWebGLCubeRenderTarget===!0,k=C.isWebGLMultipleRenderTargets===!0,O=E(C)||o;if(_){L.__webglFramebuffer=[];for(let S=0;S<6;S++)if(o&&w.mipmaps&&w.mipmaps.length>0){L.__webglFramebuffer[S]=[];for(let G=0;G<w.mipmaps.length;G++)L.__webglFramebuffer[S][G]=r.createFramebuffer()}else L.__webglFramebuffer[S]=r.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){L.__webglFramebuffer=[];for(let S=0;S<w.mipmaps.length;S++)L.__webglFramebuffer[S]=r.createFramebuffer()}else L.__webglFramebuffer=r.createFramebuffer();if(k)if(n.drawBuffers){let S=C.texture;for(let G=0,H=S.length;G<H;G++){let se=i.get(S[G]);se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&me(C)===!1){let S=k?w:[w];L.__webglMultisampledFramebuffer=r.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let G=0;G<S.length;G++){let H=S[G];L.__webglColorRenderbuffer[G]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,L.__webglColorRenderbuffer[G]);let se=s.convert(H.format,H.colorSpace),Y=s.convert(H.type),_e=A(H.internalFormat,se,Y,H.colorSpace,C.isXRRenderTarget===!0),Me=Ue(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,_e,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+G,r.RENDERBUFFER,L.__webglColorRenderbuffer[G])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(L.__webglDepthRenderbuffer=r.createRenderbuffer(),ge(L.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(_){t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture),q(r.TEXTURE_CUBE_MAP,w,O);for(let S=0;S<6;S++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let G=0;G<w.mipmaps.length;G++)Z(L.__webglFramebuffer[S][G],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+S,G);else Z(L.__webglFramebuffer[S],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+S,0);M(w,O)&&b(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(k){let S=C.texture;for(let G=0,H=S.length;G<H;G++){let se=S[G],Y=i.get(se);t.bindTexture(r.TEXTURE_2D,Y.__webglTexture),q(r.TEXTURE_2D,se,O),Z(L.__webglFramebuffer,C,se,r.COLOR_ATTACHMENT0+G,r.TEXTURE_2D,0),M(se,O)&&b(r.TEXTURE_2D)}t.unbindTexture()}else{let S=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?S=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(S,z.__webglTexture),q(S,w,O),o&&w.mipmaps&&w.mipmaps.length>0)for(let G=0;G<w.mipmaps.length;G++)Z(L.__webglFramebuffer[G],C,w,r.COLOR_ATTACHMENT0,S,G);else Z(L.__webglFramebuffer,C,w,r.COLOR_ATTACHMENT0,S,0);M(w,O)&&b(S),t.unbindTexture()}C.depthBuffer&&we(C)},this.updateRenderTargetMipmap=function(C){let w=E(C)||o,L=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let z=0,_=L.length;z<_;z++){let k=L[z];if(M(k,w)){let O=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,S=i.get(k).__webglTexture;t.bindTexture(O,S),b(O),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(C){if(o&&C.samples>0&&me(C)===!1){let w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],L=C.width,z=C.height,_=r.COLOR_BUFFER_BIT,k=[],O=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,S=i.get(C),G=C.isWebGLMultipleRenderTargets===!0;if(G)for(let H=0;H<w.length;H++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+H,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+H,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,S.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,S.__webglFramebuffer);for(let H=0;H<w.length;H++){k.push(r.COLOR_ATTACHMENT0+H),C.depthBuffer&&k.push(O);let se=S.__ignoreDepthValues!==void 0&&S.__ignoreDepthValues;if(se===!1&&(C.depthBuffer&&(_|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(_|=r.STENCIL_BUFFER_BIT)),G&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,S.__webglColorRenderbuffer[H]),se===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[O]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[O])),G){let Y=i.get(w[H]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Y,0)}r.blitFramebuffer(0,0,L,z,0,0,L,z,_,r.NEAREST),p&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,k)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),G)for(let H=0;H<w.length;H++){t.bindFramebuffer(r.FRAMEBUFFER,S.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+H,r.RENDERBUFFER,S.__webglColorRenderbuffer[H]);let se=i.get(w[H]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+H,r.TEXTURE_2D,se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,S.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=me}function Jd(r,e,t){let i=t.isWebGL2;return{convert:function(n,s=""){let a,o=ot.getTransfer(s);if(n===Dn)return r.UNSIGNED_BYTE;if(n===Ah)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Rh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return r.BYTE;if(n===1011)return r.SHORT;if(n===Fl)return r.UNSIGNED_SHORT;if(n===wh)return r.INT;if(n===an)return r.UNSIGNED_INT;if(n===on)return r.FLOAT;if(n===Ut)return i?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===1021)return r.ALPHA;if(n===Mi)return r.RGBA;if(n===1024)return r.LUMINANCE;if(n===1025)return r.LUMINANCE_ALPHA;if(n===On)return r.DEPTH_COMPONENT;if(n===gr)return r.DEPTH_STENCIL;if(n===zo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===1028)return r.RED;if(n===Ch)return r.RED_INTEGER;if(n===1030)return r.RG;if(n===_h)return r.RG_INTEGER;if(n===Ph)return r.RGBA_INTEGER;if(n===Ja||n===Za||n===Ka||n===Qa)if(o===dt){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(n===Ja)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(n===Ja)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Za)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ka)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===jl||n===Yl||n===Jl||n===Zl){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(n===jl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===36196)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Kl||n===Ql){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(n===Kl)return o===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ql)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(n===$l||n===ec||n===tc||n===ic||n===nc||n===rc||n===sc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===dc){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(n===$l)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ec)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tc)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ic)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nc)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rc)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sc)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ac)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oc)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lc)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cc)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hc)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dc)return o===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===$a||n===pc||n===fc){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(n===$a)return o===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(n===36283||n===mc||n===gc||n===vc){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(n===$a)return a.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===Nn?i?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[n]!==void 0?r[n]:null}}}var $o=class extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Qt=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zd={type:"move"},jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let f=t.getJointPose(x,i),y=this._getHandJoint(c,x);f!==null&&(y.matrix.fromArray(f.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=f.radius),y.visible=f!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zd)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Qt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},el=class extends $t{constructor(e,t,i,n,s,a,o,l,c,h){if((h=h!==void 0?h:On)!==On&&h!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===On&&(i=an),i===void 0&&h===gr&&(i=Nn),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},tl=class extends dn{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,x=t.getContextAttributes(),f=null,y=null,v=[],m=[],E=new wt;E.layers.enable(1),E.viewport=new at;let M=new wt;M.layers.enable(2),M.viewport=new at;let b=[E,M],A=new $o;A.layers.enable(1),A.layers.enable(2);let N=null,I=null;function F(q){let V=m.indexOf(q.inputSource);if(V===-1)return;let ae=v[V];ae!==void 0&&(ae.update(q.inputSource,q.frame,c||a),ae.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",U),n.removeEventListener("inputsourceschange",P);for(let q=0;q<v.length;q++){let V=m[q];V!==null&&(m[q]=null,v[q].disconnect(V))}N=null,I=null,e.setRenderTarget(f),p=null,u=null,d=null,n=null,y=null,j.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}function P(q){for(let V=0;V<q.removed.length;V++){let ae=q.removed[V],Z=m.indexOf(ae);Z>=0&&(m[Z]=null,v[Z].disconnect(ae))}for(let V=0;V<q.added.length;V++){let ae=q.added[V],Z=m.indexOf(ae);if(Z===-1){for(let we=0;we<v.length;we++){if(we>=m.length){m.push(ae),Z=we;break}if(m[we]===null){m[we]=ae,Z=we;break}}if(Z===-1)break}let ge=v[Z];ge&&ge.connect(ae)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let V=v[q];return V===void 0&&(V=new jr,v[q]=V),V.getTargetRaySpace()},this.getControllerGrip=function(q){let V=v[q];return V===void 0&&(V=new jr,v[q]=V),V.getGripSpace()},this.getHand=function(q){let V=v[q];return V===void 0&&(V=new jr,v[q]=V),V.getHandSpace()},this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(q){if(n=q,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",U),n.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let V={antialias:n.renderState.layers!==void 0||x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,V),n.updateRenderState({baseLayer:p}),y=new bt(p.framebufferWidth,p.framebufferHeight,{format:Mi,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let V=null,ae=null,Z=null;x.depth&&(Z=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=x.stencil?gr:On,ae=x.stencil?Nn:an);let ge={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:s};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(ge),n.updateRenderState({layers:[u]}),y=new bt(u.textureWidth,u.textureHeight,{format:Mi,type:Dn,depthTexture:new el(u.textureWidth,u.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0}),e.properties.get(y).__ignoreDepthValues=u.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),j.setContext(n),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};let X=new T,B=new T;function re(q,V){V===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(V.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(n===null)return;A.near=M.near=E.near=q.near,A.far=M.far=E.far=q.far,N===A.near&&I===A.far||(n.updateRenderState({depthNear:A.near,depthFar:A.far}),N=A.near,I=A.far);let V=q.parent,ae=A.cameras;re(A,V);for(let Z=0;Z<ae.length;Z++)re(ae[Z],V);ae.length===2?(function(Z,ge,we){X.setFromMatrixPosition(ge.matrixWorld),B.setFromMatrixPosition(we.matrixWorld);let Ue=X.distanceTo(B),me=ge.projectionMatrix.elements,Ce=we.projectionMatrix.elements,C=me[14]/(me[10]-1),w=me[14]/(me[10]+1),L=(me[9]+1)/me[5],z=(me[9]-1)/me[5],_=(me[8]-1)/me[0],k=(Ce[8]+1)/Ce[0],O=C*_,S=C*k,G=Ue/(-_+k),H=G*-_;ge.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(H),Z.translateZ(G),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();let se=C+G,Y=w+G,_e=O-H,Me=S+(Ue-H),pe=L*w/Y*se,Ie=z*w/Y*se;Z.projectionMatrix.makePerspective(_e,Me,pe,Ie,se,Y),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()})(A,E,M):A.projectionMatrix.copy(E.projectionMatrix),(function(Z,ge,we){we===null?Z.matrix.copy(ge.matrixWorld):(Z.matrix.copy(we.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ge.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ge.projectionMatrix),Z.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=2*Kr*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)})(q,A,V)},this.getCamera=function(){return A},this.getFoveation=function(){if(u!==null||p!==null)return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let he=null,j=new Fh;j.setAnimationLoop((function(q,V){if(h=V.getViewerPose(c||a),g=V,h!==null){let ae=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Z=!1;ae.length!==A.cameras.length&&(A.cameras.length=0,Z=!0);for(let ge=0;ge<ae.length;ge++){let we=ae[ge],Ue=null;if(p!==null)Ue=p.getViewport(we);else{let Ce=d.getViewSubImage(u,we);Ue=Ce.viewport,ge===0&&(e.setRenderTargetTextures(y,Ce.colorTexture,u.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(y))}let me=b[ge];me===void 0&&(me=new wt,me.layers.enable(ge),me.viewport=new at,b[ge]=me),me.matrix.fromArray(we.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(we.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ge===0&&(A.matrix.copy(me.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Z===!0&&A.cameras.push(me)}}for(let ae=0;ae<v.length;ae++){let Z=m[ae],ge=v[ae];Z!==null&&ge!==void 0&&ge.update(Z,V,c||a)}he&&he(q,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),g=null})),this.setAnimationLoop=function(q){he=q},this.dispose=function(){}}};function Kd(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===xt&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===xt&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(n.envMap.value=a,n.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap){n.lightMap.value=s.lightMap;let o=r._useLegacyLights===!0?Math.PI:1;n.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,n.lightMapTransform)}s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,Oh(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(n,s):s.isMeshToonMaterial?(i(n,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(n,s)):s.isMeshPhongMaterial?(i(n,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(n,s)):s.isMeshStandardMaterial?(i(n,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),e.get(h).envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(n,s),s.isMeshPhysicalMaterial&&(function(c,h,d){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===xt&&c.clearcoatNormalScale.value.negate())),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=d.texture,c.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(n,s,l)):s.isMeshMatcapMaterial?(i(n,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),(function(c,h){let d=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(d.matrixWorld),c.nearDistance.value=d.shadow.camera.near,c.farDistance.value=d.shadow.camera.far})(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(n,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(n,s)):s.isPointsMaterial?(function(c,h,d,u){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*d,c.scale.value=.5*u,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(n,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Qd(r,e,t,i){let n={},s={},a=[],o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(d,u,p){let g=d.value;if(p[u]===void 0){if(typeof g=="number")p[u]=g;else{let x=Array.isArray(g)?g:[g],f=[];for(let y=0;y<x.length;y++)f.push(x[y].clone());p[u]=f}return!0}if(typeof g=="number"){if(p[u]!==g)return p[u]=g,!0}else{let x=Array.isArray(p[u])?p[u]:[p[u]],f=Array.isArray(g)?g:[g];for(let y=0;y<x.length;y++){let v=x[y];if(v.equals(f[y])===!1)return v.copy(f[y]),!0}}return!1}function c(d){let u={boundary:0,storage:0};return typeof d=="number"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[u.id]),delete n[u.id],delete s[u.id]}return{bind:function(d,u){let p=u.program;i.uniformBlockBinding(d,p)},update:function(d,u){let p=n[d.id];p===void 0&&((function(f){let y=f.uniforms,v=0,m=16,E=0;for(let M=0,b=y.length;M<b;M++){let A=y[M],N={boundary:0,storage:0},I=Array.isArray(A.value)?A.value:[A.value];for(let F=0,U=I.length;F<U;F++){let P=c(I[F]);N.boundary+=P.boundary,N.storage+=P.storage}A.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=v,M>0&&(E=v%m,E!==0&&m-E-N.boundary<0&&(v+=m-E,A.__offset=v)),v+=N.storage}E=v%m,E>0&&(v+=m-E),f.__size=v,f.__cache={}})(d),p=(function(f){let y=(function(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=y;let v=r.createBuffer(),m=f.__size,E=f.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,m,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v})(d),n[d.id]=p,d.addEventListener("dispose",h));let g=u.program;i.updateUBOMapping(d,g);let x=e.render.frame;s[d.id]!==x&&((function(f){let y=n[f.id],v=f.uniforms,m=f.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let E=0,M=v.length;E<M;E++){let b=v[E];if(l(b,E,m)===!0){let A=b.__offset,N=Array.isArray(b.value)?b.value:[b.value],I=0;for(let F=0;F<N.length;F++){let U=N[F],P=c(U);typeof U=="number"?(b.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,A+I,b.__data)):U.isMatrix3?(b.__data[0]=U.elements[0],b.__data[1]=U.elements[1],b.__data[2]=U.elements[2],b.__data[3]=U.elements[0],b.__data[4]=U.elements[3],b.__data[5]=U.elements[4],b.__data[6]=U.elements[5],b.__data[7]=U.elements[0],b.__data[8]=U.elements[6],b.__data[9]=U.elements[7],b.__data[10]=U.elements[8],b.__data[11]=U.elements[0]):(U.toArray(b.__data,I),I+=P.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,A,b.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(d),s[d.id]=x)},dispose:function(){for(let d in n)r.deleteBuffer(n[d]);a=[],n={},s={}}}}var qi=class{constructor(e={}){let{canvas:t=lu(),context:i=null,depth:n=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e,u;this.isWebGLRenderer=!0,u=i!==null?i.getContextAttributes().alpha:a;let p=new Uint32Array(4),g=new Int32Array(4),x=null,f=null,y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ct,this._useLegacyLights=!1,this.toneMapping=cn,this.toneMappingExposure=1;let m=this,E=!1,M=0,b=0,A=null,N=-1,I=null,F=new at,U=new at,P=null,X=new Te(0),B=0,re=t.width,he=t.height,j=1,q=null,V=null,ae=new at(0,0,re,he),Z=new at(0,0,re,he),ge=!1,we=new $r,Ue=!1,me=!1,Ce=null,C=new Qe,w=new te,L=new T,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _(){return A===null?j:1}let k,O,S,G,H,se,Y,_e,Me,pe,Ie,ye,Fe,fe,oe,be,ve,Oe,$,W,K,Q,Ae,Ee,D=i;function We(R,J){for(let ie=0;ie<R.length;ie++){let ue=R[ie],le=t.getContext(ue,J);if(le!==null)return le}return null}try{let R={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r158"),t.addEventListener("webglcontextlost",Lt,!1),t.addEventListener("webglcontextrestored",Jt,!1),t.addEventListener("webglcontextcreationerror",Zi,!1),D===null){let J=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&J.shift(),D=We(J,R),D===null)throw We(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}function ft(){k=new Iu(D),O=new _u(D,k,e),k.init(O),Q=new Jd(D,k,O),S=new jd(D,k,O),G=new Ou(D),H=new Bd,se=new Yd(D,k,S,H,O,Q,G),Y=new Lu(m),_e=new Uu(m),Me=new wu(D,O),Ae=new Ru(D,k,Me,O),pe=new Du(D,Me,G,Ae),Ie=new Hu(D,pe,Me,G),$=new zu(D,O,se),be=new Pu(H),ye=new Fd(m,Y,_e,k,O,Ae,be),Fe=new Kd(m,H),fe=new Hd,oe=new Xd(k,O),Oe=new Au(m,Y,_e,S,Ie,u,l),ve=new qd(m,Ie,O),Ee=new Qd(D,G,O,S),W=new Cu(D,k,G,O),K=new Nu(D,k,G,O),G.programs=ye.programs,m.capabilities=O,m.extensions=k,m.properties=H,m.renderLists=fe,m.shadowMap=ve,m.state=S,m.info=G}ft();let Ve=new tl(m,D);function Lt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Jt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let R=G.autoReset,J=ve.enabled,ie=ve.autoUpdate,ue=ve.needsUpdate,le=ve.type;ft(),G.autoReset=R,ve.enabled=J,ve.autoUpdate=ie,ve.needsUpdate=ue,ve.type=le}function Zi(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function gt(R){let J=R.target;J.removeEventListener("dispose",gt),(function(ie){(function(ue){let le=H.get(ue).programs;le!==void 0&&(le.forEach((function(Se){ye.releaseProgram(Se)})),ue.isShaderMaterial&&ye.releaseShaderCache(ue))})(ie),H.remove(ie)})(J)}function zt(R,J,ie){R.transparent===!0&&R.side===2&&R.forceSinglePass===!1?(R.side=xt,R.needsUpdate=!0,_t(R,J,ie),R.side=un,R.needsUpdate=!0,_t(R,J,ie),R.side=2):_t(R,J,ie)}this.xr=Ve,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let R=k.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=k.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(re,he,!1))},this.getSize=function(R){return R.set(re,he)},this.setSize=function(R,J,ie=!0){Ve.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(re=R,he=J,t.width=Math.floor(R*j),t.height=Math.floor(J*j),ie===!0&&(t.style.width=R+"px",t.style.height=J+"px"),this.setViewport(0,0,R,J))},this.getDrawingBufferSize=function(R){return R.set(re*j,he*j).floor()},this.setDrawingBufferSize=function(R,J,ie){re=R,he=J,j=ie,t.width=Math.floor(R*ie),t.height=Math.floor(J*ie),this.setViewport(0,0,R,J)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(ae)},this.setViewport=function(R,J,ie,ue){R.isVector4?ae.set(R.x,R.y,R.z,R.w):ae.set(R,J,ie,ue),S.viewport(F.copy(ae).multiplyScalar(j).floor())},this.getScissor=function(R){return R.copy(Z)},this.setScissor=function(R,J,ie,ue){R.isVector4?Z.set(R.x,R.y,R.z,R.w):Z.set(R,J,ie,ue),S.scissor(U.copy(Z).multiplyScalar(j).floor())},this.getScissorTest=function(){return ge},this.setScissorTest=function(R){S.setScissorTest(ge=R)},this.setOpaqueSort=function(R){q=R},this.setTransparentSort=function(R){V=R},this.getClearColor=function(R){return R.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(R=!0,J=!0,ie=!0){let ue=0;if(R){let le=!1;if(A!==null){let Se=A.texture.format;le=Se===Ph||Se===_h||Se===Ch}if(le){let Se=A.texture.type,ze=Se===Dn||Se===an||Se===Fl||Se===Nn||Se===Ah||Se===Rh,ke=Oe.getClearColor(),qe=Oe.getClearAlpha(),je=ke.r,Xe=ke.g,Ye=ke.b;ze?(p[0]=je,p[1]=Xe,p[2]=Ye,p[3]=qe,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=je,g[1]=Xe,g[2]=Ye,g[3]=qe,D.clearBufferiv(D.COLOR,0,g))}else ue|=D.COLOR_BUFFER_BIT}J&&(ue|=D.DEPTH_BUFFER_BIT),ie&&(ue|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",Jt,!1),t.removeEventListener("webglcontextcreationerror",Zi,!1),fe.dispose(),oe.dispose(),H.dispose(),Y.dispose(),_e.dispose(),Ie.dispose(),Ae.dispose(),Ee.dispose(),ye.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Ki),Ve.removeEventListener("sessionend",ci),Ce&&(Ce.dispose(),Ce=null),hi.stop()},this.renderBufferDirect=function(R,J,ie,ue,le,Se){J===null&&(J=z);let ze=le.isMesh&&le.matrixWorld.determinant()<0,ke=(function(Mt,vt,ut,Ze,nt){vt.isScene!==!0&&(vt=z),se.resetTextureUnits();let xi=vt.fog,Qi=Ze.isMeshStandardMaterial?vt.environment:null,En=A===null?m.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Wi,di=(Ze.isMeshStandardMaterial?_e:Y).get(Ze.envMap||Qi),Tn=Ze.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,$i=!!ut.attributes.tangent&&(!!Ze.normalMap||Ze.anisotropy>0),Ni=!!ut.morphAttributes.position,fs=!!ut.morphAttributes.normal,Ir=!!ut.morphAttributes.color,wn=cn;Ze.toneMapped&&(A!==null&&A.isXRRenderTarget!==!0||(wn=m.toneMapping));let ms=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,gs=ms!==void 0?ms.length:0,$e=H.get(Ze),vs=f.state.lights;if(Ue===!0&&(me===!0||Mt!==I)){let tt=Mt===I&&Ze.id===N;be.setState(Ze,Mt,tt)}let ee=!1;Ze.version===$e.__version?$e.needsLights&&$e.lightsStateVersion!==vs.state.version||$e.outputColorSpace!==En||nt.isInstancedMesh&&$e.instancing===!1?ee=!0:nt.isInstancedMesh||$e.instancing!==!0?nt.isSkinnedMesh&&$e.skinning===!1?ee=!0:nt.isSkinnedMesh||$e.skinning!==!0?nt.isInstancedMesh&&$e.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&$e.instancingColor===!1&&nt.instanceColor!==null||$e.envMap!==di||Ze.fog===!0&&$e.fog!==xi?ee=!0:$e.numClippingPlanes===void 0||$e.numClippingPlanes===be.numPlanes&&$e.numIntersection===be.numIntersection?($e.vertexAlphas!==Tn||$e.vertexTangents!==$i||$e.morphTargets!==Ni||$e.morphNormals!==fs||$e.morphColors!==Ir||$e.toneMapping!==wn||O.isWebGL2===!0&&$e.morphTargetsCount!==gs)&&(ee=!0):ee=!0:ee=!0:ee=!0:(ee=!0,$e.__version=Ze.version);let ne=$e.currentProgram;ee===!0&&(ne=_t(Ze,vt,nt));let ce=!1,de=!1,Le=!1,Re=ne.getUniforms(),Pe=$e.uniforms;if(S.useProgram(ne.program)&&(ce=!0,de=!0,Le=!0),Ze.id!==N&&(N=Ze.id,de=!0),ce||I!==Mt){Re.setValue(D,"projectionMatrix",Mt.projectionMatrix),Re.setValue(D,"viewMatrix",Mt.matrixWorldInverse);let tt=Re.map.cameraPosition;tt!==void 0&&tt.setValue(D,L.setFromMatrixPosition(Mt.matrixWorld)),O.logarithmicDepthBuffer&&Re.setValue(D,"logDepthBufFC",2/(Math.log(Mt.far+1)/Math.LN2)),(Ze.isMeshPhongMaterial||Ze.isMeshToonMaterial||Ze.isMeshLambertMaterial||Ze.isMeshBasicMaterial||Ze.isMeshStandardMaterial||Ze.isShaderMaterial)&&Re.setValue(D,"isOrthographic",Mt.isOrthographicCamera===!0),I!==Mt&&(I=Mt,de=!0,Le=!0)}if(nt.isSkinnedMesh){Re.setOptional(D,nt,"bindMatrix"),Re.setOptional(D,nt,"bindMatrixInverse");let tt=nt.skeleton;tt&&(O.floatVertexTextures?(tt.boneTexture===null&&tt.computeBoneTexture(),Re.setValue(D,"boneTexture",tt.boneTexture,se),Re.setValue(D,"boneTextureSize",tt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let He=ut.morphAttributes;(He.position!==void 0||He.normal!==void 0||He.color!==void 0&&O.isWebGL2===!0)&&$.update(nt,ut,ne),(de||$e.receiveShadow!==nt.receiveShadow)&&($e.receiveShadow=nt.receiveShadow,Re.setValue(D,"receiveShadow",nt.receiveShadow)),Ze.isMeshGouraudMaterial&&Ze.envMap!==null&&(Pe.envMap.value=di,Pe.flipEnvMap.value=di.isCubeTexture&&di.isRenderTargetTexture===!1?-1:1),de&&(Re.setValue(D,"toneMappingExposure",m.toneMappingExposure),$e.needsLights&&(Be=Le,(De=Pe).ambientLightColor.needsUpdate=Be,De.lightProbe.needsUpdate=Be,De.directionalLights.needsUpdate=Be,De.directionalLightShadows.needsUpdate=Be,De.pointLights.needsUpdate=Be,De.pointLightShadows.needsUpdate=Be,De.spotLights.needsUpdate=Be,De.spotLightShadows.needsUpdate=Be,De.rectAreaLights.needsUpdate=Be,De.hemisphereLights.needsUpdate=Be),xi&&Ze.fog===!0&&Fe.refreshFogUniforms(Pe,xi),Fe.refreshMaterialUniforms(Pe,Ze,j,he,Ce),pr.upload(D,bn($e),Pe,se));var De,Be;if(Ze.isShaderMaterial&&Ze.uniformsNeedUpdate===!0&&(pr.upload(D,bn($e),Pe,se),Ze.uniformsNeedUpdate=!1),Ze.isSpriteMaterial&&Re.setValue(D,"center",nt.center),Re.setValue(D,"modelViewMatrix",nt.modelViewMatrix),Re.setValue(D,"normalMatrix",nt.normalMatrix),Re.setValue(D,"modelMatrix",nt.matrixWorld),Ze.isShaderMaterial||Ze.isRawShaderMaterial){let tt=Ze.uniformsGroups;for(let et=0,St=tt.length;et<St;et++)if(O.isWebGL2){let kt=tt[et];Ee.update(kt,ne),Ee.bind(kt,ne)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ne})(R,J,ie,ue,le);S.setMaterial(ue,ze);let qe=ie.index,je=1;if(ue.wireframe===!0){if(qe=pe.getWireframeAttribute(ie),qe===void 0)return;je=2}let Xe=ie.drawRange,Ye=ie.attributes.position,ht=Xe.start*je,Et=(Xe.start+Xe.count)*je;Se!==null&&(ht=Math.max(ht,Se.start*je),Et=Math.min(Et,(Se.start+Se.count)*je)),qe!==null?(ht=Math.max(ht,0),Et=Math.min(Et,qe.count)):Ye!=null&&(ht=Math.max(ht,0),Et=Math.min(Et,Ye.count));let ui=Et-ht;if(ui<0||ui===1/0)return;let Ht;Ae.setup(le,ue,ke,ie,qe);let pt=W;if(qe!==null&&(Ht=Me.get(qe),pt=K,pt.setIndex(Ht)),le.isMesh)ue.wireframe===!0?(S.setLineWidth(ue.wireframeLinewidth*_()),pt.setMode(D.LINES)):pt.setMode(D.TRIANGLES);else if(le.isLine){let Mt=ue.linewidth;Mt===void 0&&(Mt=1),S.setLineWidth(Mt*_()),le.isLineSegments?pt.setMode(D.LINES):le.isLineLoop?pt.setMode(D.LINE_LOOP):pt.setMode(D.LINE_STRIP)}else le.isPoints?pt.setMode(D.POINTS):le.isSprite&&pt.setMode(D.TRIANGLES);if(le.isInstancedMesh)pt.renderInstances(ht,ui,le.count);else if(ie.isInstancedBufferGeometry){let Mt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,vt=Math.min(ie.instanceCount,Mt);pt.renderInstances(ht,ui,vt)}else pt.render(ht,ui)},this.compile=function(R,J,ie=null){ie===null&&(ie=R),f=oe.get(ie),f.init(),v.push(f),ie.traverseVisible((function(le){le.isLight&&le.layers.test(J.layers)&&(f.pushLight(le),le.castShadow&&f.pushShadow(le))})),R!==ie&&R.traverseVisible((function(le){le.isLight&&le.layers.test(J.layers)&&(f.pushLight(le),le.castShadow&&f.pushShadow(le))})),f.setupLights(m._useLegacyLights);let ue=new Set;return R.traverse((function(le){let Se=le.material;if(Se)if(Array.isArray(Se))for(let ze=0;ze<Se.length;ze++){let ke=Se[ze];zt(ke,ie,le),ue.add(ke)}else zt(Se,ie,le),ue.add(Se)})),v.pop(),f=null,ue},this.compileAsync=function(R,J,ie=null){let ue=this.compile(R,J,ie);return new Promise((le=>{function Se(){ue.forEach((function(ze){H.get(ze).currentProgram.isReady()&&ue.delete(ze)})),ue.size!==0?setTimeout(Se,10):le(R)}k.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)}))};let Di=null;function Ki(){hi.stop()}function ci(){hi.start()}let hi=new Fh;function Vn(R,J,ie,ue){if(R.visible===!1)return;if(R.layers.test(J.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(J);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||we.intersectsSprite(R)){ue&&L.setFromMatrixPosition(R.matrixWorld).applyMatrix4(C);let Se=Ie.update(R),ze=R.material;ze.visible&&x.push(R,Se,ze,ie,L.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||we.intersectsObject(R))){let Se=Ie.update(R),ze=R.material;if(ue&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),L.copy(R.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),L.copy(Se.boundingSphere.center)),L.applyMatrix4(R.matrixWorld).applyMatrix4(C)),Array.isArray(ze)){let ke=Se.groups;for(let qe=0,je=ke.length;qe<je;qe++){let Xe=ke[qe],Ye=ze[Xe.materialIndex];Ye&&Ye.visible&&x.push(R,Se,Ye,ie,L.z,Xe)}}else ze.visible&&x.push(R,Se,ze,ie,L.z,null)}}let le=R.children;for(let Se=0,ze=le.length;Se<ze;Se++)Vn(le[Se],J,ie,ue)}function Lr(R,J,ie,ue){let le=R.opaque,Se=R.transmissive,ze=R.transparent;f.setupLightsView(ie),Ue===!0&&be.setGlobalState(m.clippingPlanes,ie),Se.length>0&&(function(ke,qe,je,Xe){if((je.isScene===!0?je.overrideMaterial:null)!==null)return;let ht=O.isWebGL2;Ce===null&&(Ce=new bt(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")?Ut:Dn,minFilter:ea,samples:ht?4:0})),m.getDrawingBufferSize(w),ht?Ce.setSize(w.x,w.y):Ce.setSize(oa(w.x),oa(w.y));let Et=m.getRenderTarget();m.setRenderTarget(Ce),m.getClearColor(X),B=m.getClearAlpha(),B<1&&m.setClearColor(16777215,.5),m.clear();let ui=m.toneMapping;m.toneMapping=cn,Sn(ke,je,Xe),se.updateMultisampleRenderTarget(Ce),se.updateRenderTargetMipmap(Ce);let Ht=!1;for(let pt=0,Mt=qe.length;pt<Mt;pt++){let vt=qe[pt],ut=vt.object,Ze=vt.geometry,nt=vt.material,xi=vt.group;if(nt.side===2&&ut.layers.test(Xe.layers)){let Qi=nt.side;nt.side=xt,nt.needsUpdate=!0,Ur(ut,je,Xe,Ze,nt,xi),nt.side=Qi,nt.needsUpdate=!0,Ht=!0}}Ht===!0&&(se.updateMultisampleRenderTarget(Ce),se.updateRenderTargetMipmap(Ce)),m.setRenderTarget(Et),m.setClearColor(X,B),m.toneMapping=ui})(le,Se,J,ie),ue&&S.viewport(F.copy(ue)),le.length>0&&Sn(le,J,ie),Se.length>0&&Sn(Se,J,ie),ze.length>0&&Sn(ze,J,ie),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Sn(R,J,ie){let ue=J.isScene===!0?J.overrideMaterial:null;for(let le=0,Se=R.length;le<Se;le++){let ze=R[le],ke=ze.object,qe=ze.geometry,je=ue===null?ze.material:ue,Xe=ze.group;ke.layers.test(ie.layers)&&Ur(ke,J,ie,qe,je,Xe)}}function Ur(R,J,ie,ue,le,Se){R.onBeforeRender(m,J,ie,ue,le,Se),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),le.onBeforeRender(m,J,ie,ue,R,Se),le.transparent===!0&&le.side===2&&le.forceSinglePass===!1?(le.side=xt,le.needsUpdate=!0,m.renderBufferDirect(ie,J,ue,le,R,Se),le.side=un,le.needsUpdate=!0,m.renderBufferDirect(ie,J,ue,le,R,Se),le.side=2):m.renderBufferDirect(ie,J,ue,le,R,Se),R.onAfterRender(m,J,ie,ue,le,Se)}function _t(R,J,ie){J.isScene!==!0&&(J=z);let ue=H.get(R),le=f.state.lights,Se=f.state.shadowsArray,ze=le.state.version,ke=ye.getParameters(R,le.state,Se,J,ie),qe=ye.getProgramCacheKey(ke),je=ue.programs;ue.environment=R.isMeshStandardMaterial?J.environment:null,ue.fog=J.fog,ue.envMap=(R.isMeshStandardMaterial?_e:Y).get(R.envMap||ue.environment),je===void 0&&(R.addEventListener("dispose",gt),je=new Map,ue.programs=je);let Xe=je.get(qe);if(Xe!==void 0){if(ue.currentProgram===Xe&&ue.lightsStateVersion===ze)return Wn(R,ke),Xe}else ke.uniforms=ye.getUniforms(R),R.onBuild(ie,ke,m),R.onBeforeCompile(ke,m),Xe=ye.acquireProgram(ke,qe),je.set(qe,Xe),ue.uniforms=ke.uniforms;let Ye=ue.uniforms;return(R.isShaderMaterial||R.isRawShaderMaterial)&&R.clipping!==!0||(Ye.clippingPlanes=be.uniform),Wn(R,ke),ue.needsLights=(function(ht){return ht.isMeshLambertMaterial||ht.isMeshToonMaterial||ht.isMeshPhongMaterial||ht.isMeshStandardMaterial||ht.isShadowMaterial||ht.isShaderMaterial&&ht.lights===!0})(R),ue.lightsStateVersion=ze,ue.needsLights&&(Ye.ambientLightColor.value=le.state.ambient,Ye.lightProbe.value=le.state.probe,Ye.directionalLights.value=le.state.directional,Ye.directionalLightShadows.value=le.state.directionalShadow,Ye.spotLights.value=le.state.spot,Ye.spotLightShadows.value=le.state.spotShadow,Ye.rectAreaLights.value=le.state.rectArea,Ye.ltc_1.value=le.state.rectAreaLTC1,Ye.ltc_2.value=le.state.rectAreaLTC2,Ye.pointLights.value=le.state.point,Ye.pointLightShadows.value=le.state.pointShadow,Ye.hemisphereLights.value=le.state.hemi,Ye.directionalShadowMap.value=le.state.directionalShadowMap,Ye.directionalShadowMatrix.value=le.state.directionalShadowMatrix,Ye.spotShadowMap.value=le.state.spotShadowMap,Ye.spotLightMatrix.value=le.state.spotLightMatrix,Ye.spotLightMap.value=le.state.spotLightMap,Ye.pointShadowMap.value=le.state.pointShadowMap,Ye.pointShadowMatrix.value=le.state.pointShadowMatrix),ue.currentProgram=Xe,ue.uniformsList=null,Xe}function bn(R){if(R.uniformsList===null){let J=R.currentProgram.getUniforms();R.uniformsList=pr.seqWithValue(J.seq,R.uniforms)}return R.uniformsList}function Wn(R,J){let ie=H.get(R);ie.outputColorSpace=J.outputColorSpace,ie.instancing=J.instancing,ie.instancingColor=J.instancingColor,ie.skinning=J.skinning,ie.morphTargets=J.morphTargets,ie.morphNormals=J.morphNormals,ie.morphColors=J.morphColors,ie.morphTargetsCount=J.morphTargetsCount,ie.numClippingPlanes=J.numClippingPlanes,ie.numIntersection=J.numClipIntersection,ie.vertexAlphas=J.vertexAlphas,ie.vertexTangents=J.vertexTangents,ie.toneMapping=J.toneMapping}hi.setAnimationLoop((function(R){Di&&Di(R)})),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(R){Di=R,Ve.setAnimationLoop(R),R===null?hi.stop():hi.start()},Ve.addEventListener("sessionstart",Ki),Ve.addEventListener("sessionend",ci),this.render=function(R,J){if(J!==void 0&&J.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(E===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(J),J=Ve.getCamera()),R.isScene===!0&&R.onBeforeRender(m,R,J,A),f=oe.get(R,v.length),f.init(),v.push(f),C.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),we.setFromProjectionMatrix(C),me=this.localClippingEnabled,Ue=be.init(this.clippingPlanes,me),x=fe.get(R,y.length),x.init(),y.push(x),Vn(R,J,0,m.sortObjects),x.finish(),m.sortObjects===!0&&x.sort(q,V),this.info.render.frame++,Ue===!0&&be.beginShadows();let ie=f.state.shadowsArray;if(ve.render(ie,R,J),Ue===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Oe.render(x,R),f.setupLights(m._useLegacyLights),J.isArrayCamera){let ue=J.cameras;for(let le=0,Se=ue.length;le<Se;le++){let ze=ue[le];Lr(x,R,ze,ze.viewport)}}else Lr(x,R,J);A!==null&&(se.updateMultisampleRenderTarget(A),se.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(m,R,J),Ae.resetDefaultState(),N=-1,I=null,v.pop(),f=v.length>0?v[v.length-1]:null,y.pop(),x=y.length>0?y[y.length-1]:null},this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,J,ie){H.get(R.texture).__webglTexture=J,H.get(R.depthTexture).__webglTexture=ie;let ue=H.get(R);ue.__hasExternalTextures=!0,ue.__hasExternalTextures&&(ue.__autoAllocateDepthBuffer=ie===void 0,ue.__autoAllocateDepthBuffer||k.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,J){let ie=H.get(R);ie.__webglFramebuffer=J,ie.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(R,J=0,ie=0){A=R,M=J,b=ie;let ue=!0,le=null,Se=!1,ze=!1;if(R){let ke=H.get(R);ke.__useDefaultFramebuffer!==void 0?(S.bindFramebuffer(D.FRAMEBUFFER,null),ue=!1):ke.__webglFramebuffer===void 0?se.setupRenderTarget(R):ke.__hasExternalTextures&&se.rebindTextures(R,H.get(R.texture).__webglTexture,H.get(R.depthTexture).__webglTexture);let qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ze=!0);let je=H.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(le=Array.isArray(je[J])?je[J][ie]:je[J],Se=!0):le=O.isWebGL2&&R.samples>0&&se.useMultisampledRTT(R)===!1?H.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?je[ie]:je,F.copy(R.viewport),U.copy(R.scissor),P=R.scissorTest}else F.copy(ae).multiplyScalar(j).floor(),U.copy(Z).multiplyScalar(j).floor(),P=ge;if(S.bindFramebuffer(D.FRAMEBUFFER,le)&&O.drawBuffers&&ue&&S.drawBuffers(R,le),S.viewport(F),S.scissor(U),S.setScissorTest(P),Se){let ke=H.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+J,ke.__webglTexture,ie)}else if(ze){let ke=H.get(R.texture),qe=J||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ke.__webglTexture,ie||0,qe)}N=-1},this.readRenderTargetPixels=function(R,J,ie,ue,le,Se,ze){if(!R||!R.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=H.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(ke=ke[ze]),ke){S.bindFramebuffer(D.FRAMEBUFFER,ke);try{let qe=R.texture,je=qe.format,Xe=qe.type;if(je!==Mi&&Q.convert(je)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Ye=Xe===Ut&&(k.has("EXT_color_buffer_half_float")||O.isWebGL2&&k.has("EXT_color_buffer_float"));if(!(Xe===Dn||Q.convert(Xe)===D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)||Xe===on&&(O.isWebGL2||k.has("OES_texture_float")||k.has("WEBGL_color_buffer_float"))||Ye))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");J>=0&&J<=R.width-ue&&ie>=0&&ie<=R.height-le&&D.readPixels(J,ie,ue,le,Q.convert(je),Q.convert(Xe),Se)}finally{let qe=A!==null?H.get(A).__webglFramebuffer:null;S.bindFramebuffer(D.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(R,J,ie=0){let ue=Math.pow(2,-ie),le=Math.floor(J.image.width*ue),Se=Math.floor(J.image.height*ue);se.setTexture2D(J,0),D.copyTexSubImage2D(D.TEXTURE_2D,ie,0,0,R.x,R.y,le,Se),S.unbindTexture()},this.copyTextureToTexture=function(R,J,ie,ue=0){let le=J.image.width,Se=J.image.height,ze=Q.convert(ie.format),ke=Q.convert(ie.type);se.setTexture2D(ie,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,ie.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,ie.unpackAlignment),J.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ue,R.x,R.y,le,Se,ze,ke,J.image.data):J.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ue,R.x,R.y,J.mipmaps[0].width,J.mipmaps[0].height,ze,J.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,ue,R.x,R.y,ze,ke,J.image),ue===0&&ie.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),S.unbindTexture()},this.copyTextureToTexture3D=function(R,J,ie,ue,le=0){if(m.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let Se=R.max.x-R.min.x+1,ze=R.max.y-R.min.y+1,ke=R.max.z-R.min.z+1,qe=Q.convert(ue.format),je=Q.convert(ue.type),Xe;if(ue.isData3DTexture)se.setTexture3D(ue,0),Xe=D.TEXTURE_3D;else{if(!ue.isDataArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");se.setTexture2DArray(ue,0),Xe=D.TEXTURE_2D_ARRAY}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,ue.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,ue.unpackAlignment);let Ye=D.getParameter(D.UNPACK_ROW_LENGTH),ht=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Et=D.getParameter(D.UNPACK_SKIP_PIXELS),ui=D.getParameter(D.UNPACK_SKIP_ROWS),Ht=D.getParameter(D.UNPACK_SKIP_IMAGES),pt=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,R.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,R.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,R.min.z),ie.isDataTexture||ie.isData3DTexture?D.texSubImage3D(Xe,le,J.x,J.y,J.z,Se,ze,ke,qe,je,pt.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Xe,le,J.x,J.y,J.z,Se,ze,ke,qe,pt.data)):D.texSubImage3D(Xe,le,J.x,J.y,J.z,Se,ze,ke,qe,je,pt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ye),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Et),D.pixelStorei(D.UNPACK_SKIP_ROWS,ui),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ht),le===0&&ue.generateMipmaps&&D.generateMipmap(Xe),S.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?se.setTextureCube(R,0):R.isData3DTexture?se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?se.setTexture2DArray(R,0):se.setTexture2D(R,0),S.unbindTexture()},this.resetState=function(){M=0,b=0,A=null,S.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Bl?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===Oa?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ct?Fn:Lh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Fn?ct:Wi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},il=class extends qi{};il.prototype.isWebGL1Renderer=!0;var va=class r{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ai=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},ya=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gt=new T,ai=class r{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new rt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ts=class extends Xi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ar,kr=new T,or=new T,lr=new T,cr=new te,Gr=new te,Gh=new Qe,ks=new T,Vr=new T,Gs=new T,ah=new te,To=new te,oh=new te,xa=class extends Bt{constructor(e=new ts){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new st;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ya(t,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new ai(i,3,0,!1)),ar.setAttribute("uv",new ai(i,2,3,!1))}this.geometry=ar,this.material=e,this.center=new te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),or.setFromMatrixScale(this.matrixWorld),Gh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&or.multiplyScalar(-lr.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;Vs(ks.set(-.5,-.5,0),lr,a,or,n,s),Vs(Vr.set(.5,-.5,0),lr,a,or,n,s),Vs(Gs.set(.5,.5,0),lr,a,or,n,s),ah.set(0,0),To.set(1,0),oh.set(1,1);let o=e.ray.intersectTriangle(ks,Vr,Gs,!1,kr);if(o===null&&(Vs(Vr.set(-.5,.5,0),lr,a,or,n,s),To.set(0,1),o=e.ray.intersectTriangle(ks,Gs,Vr,!1,kr),o===null))return;let l=e.ray.origin.distanceTo(kr);l<e.near||l>e.far||t.push({distance:l,point:kr.clone(),uv:ln.getInterpolation(kr,ks,Vr,Gs,ah,To,oh,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Vs(r,e,t,i,n,s){cr.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(Gr.x=s*cr.x-n*cr.y,Gr.y=n*cr.x+s*cr.y):Gr.copy(cr),r.copy(e),r.x+=Gr.x,r.y+=Gr.y,r.applyMatrix4(Gh)}var bp=new T,Ep=new T;var Tp=new T,wp=new at,Ap=new at,Rp=new T,Cp=new Qe,_p=new T,Pp=new ei,Lp=new Qe,Up=new yr;var Ma=class extends $t{constructor(e=null,t=1,i=1,n,s,a,o,l,c=1003,h=1003,d,u){super(null,a,o,l,c,h,n,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ip=new Qe,Dp=new Qe;var Np=new Qe,Op=new Qe;var Fp=new jt,Bp=new Qe,zp=new Ne,Hp=new ei;var kp=new T,Gp=new T,Vp=new Qe,Wp=new yr,Xp=new ei;var qp=new T,jp=new T;var nl=class extends Xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lh=new Qe,rl=new yr,Ws=new ei,Xs=new T,Ri=class extends Bt{constructor(e=new st,t=new nl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(n),Ws.radius+=s,e.ray.intersectsSphere(Ws)===!1)return;lh.copy(n).invert(),rl.copy(e.ray).applyMatrix4(lh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);d<u;d++){let p=c.getX(d);Xs.fromBufferAttribute(h,p),ch(Xs,p,l,n,e,t,this)}else for(let d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);d<u;d++)Xs.fromBufferAttribute(h,d),ch(Xs,d,l,n,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function ch(r,e,t,i,n,s,a){let o=rl.distanceSqToPoint(r);if(o<t){let l=new T;rl.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Ci=class extends $t{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},oi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(n=Math.floor(l+(c-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){c=n;break}c=n-1}if(n=c,i[n]===a)return n/(s-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new te:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new T,n=[],s=[],a=[],o=new T,l=new Qe;for(let p=0;p<=e;p++){let g=p/e;n[p]=this.getTangentAt(g,new T)}s[0]=new T,a[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(At(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(At(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(n[g],p*g)),a[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},is=class extends oi{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new te,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},sl=class extends is{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Hl(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,n(a,o,u,p)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var qs=new T,wo=new Hl,Ao=new Hl,Ro=new Hl,ns=class extends oi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new T){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=n[(c-1)%s]:(qs.subVectors(n[0],n[1]).add(n[0]),o=qs);let d=n[c%s],u=n[(c+1)%s];if(this.closed||c+2<s?l=n[(c+2)%s]:(qs.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=qs),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(o.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(u),p),f=Math.pow(u.distanceToSquared(l),p);x<1e-4&&(x=1),g<1e-4&&(g=x),f<1e-4&&(f=x),wo.initNonuniformCatmullRom(o.x,d.x,u.x,l.x,g,x,f),Ao.initNonuniformCatmullRom(o.y,d.y,u.y,l.y,g,x,f),Ro.initNonuniformCatmullRom(o.z,d.z,u.z,l.z,g,x,f)}else this.curveType==="catmullrom"&&(wo.initCatmullRom(o.x,d.x,u.x,l.x,this.tension),Ao.initCatmullRom(o.y,d.y,u.y,l.y,this.tension),Ro.initCatmullRom(o.z,d.z,u.z,l.z,this.tension));return i.set(wo.calc(h),Ao.calc(h),Ro.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new T().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hh(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function Yr(r,e,t,i){return(function(n,s){let a=1-n;return a*a*s})(r,e)+(function(n,s){return 2*(1-n)*n*s})(r,t)+(function(n,s){return n*n*s})(r,i)}function Jr(r,e,t,i,n){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,i)+(function(s,a){return s*s*s*a})(r,n)}var Sa=class extends oi{constructor(e=new te,t=new te,i=new te,n=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new te){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Jr(e,n.x,s.x,a.x,o.x),Jr(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},al=class extends oi{constructor(e=new T,t=new T,i=new T,n=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new T){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Jr(e,n.x,s.x,a.x,o.x),Jr(e,n.y,s.y,a.y,o.y),Jr(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ba=class extends oi{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ol=class extends oi{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ea=class extends oi{constructor(e=new te,t=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new te){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Yr(e,n.x,s.x,a.x),Yr(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ta=class extends oi{constructor(e=new T,t=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new T){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Yr(e,n.x,s.x,a.x),Yr(e,n.y,s.y,a.y),Yr(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(hh(o,l.x,c.x,h.x,d.x),hh(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new te().fromArray(n))}return this}},Aa=Object.freeze({__proto__:null,ArcCurve:sl,CatmullRomCurve3:ns,CubicBezierCurve:Sa,CubicBezierCurve3:al,EllipseCurve:is,LineCurve:ba,LineCurve3:ol,QuadraticBezierCurve:Ea,QuadraticBezierCurve3:Ta,SplineCurve:wa}),ll=class extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Aa[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Aa[n.type]().fromJSON(n))}return this}},rs=class extends ll{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ba(this.currentPoint.clone(),new te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new Ea(this.currentPoint.clone(),new te(e,t),new te(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new Sa(this.currentPoint.clone(),new te(e,t),new te(i,n),new te(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new wa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){let c=new is(e,t,i,n,s,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},fn=class r extends st{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=At(n,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,d=new T,u=new te,p=new T,g=new T,x=new T,f=0,y=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:f=e[v+1].x-e[v].x,y=e[v+1].y-e[v].y,p.x=1*y,p.y=-f,p.z=0*y,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:f=e[v+1].x-e[v].x,y=e[v+1].y-e[v].y,p.x=1*y,p.y=-f,p.z=0*y,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(g)}for(let v=0;v<=t;v++){let m=i+v*h*n,E=Math.sin(m),M=Math.cos(m);for(let b=0;b<=e.length-1;b++){d.x=e[b].x*E,d.y=e[b].y,d.z=e[b].x*M,a.push(d.x,d.y,d.z),u.x=v/t,u.y=b/(e.length-1),o.push(u.x,u.y);let A=l[3*b+0]*E,N=l[3*b+1],I=l[3*b+0]*M;c.push(A,N,I)}}for(let v=0;v<t;v++)for(let m=0;m<e.length-1;m++){let E=m+v*e.length,M=E,b=E+e.length,A=E+e.length+1,N=E+1;s.push(M,b,N),s.push(A,N,b)}this.setIndex(s),this.setAttribute("position",new Ge(a,3)),this.setAttribute("uv",new Ge(o,2)),this.setAttribute("normal",new Ge(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},cl=class r extends fn{constructor(e=1,t=1,i=4,n=8){let s=new rs;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},hl=class r extends st{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new T,h=new te;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=i+d/t*n;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(o,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},qt=class r extends st{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],d=[],u=[],p=[],g=0,x=[],f=i/2,y=0;function v(m){let E=g,M=new te,b=new T,A=0,N=m===!0?e:t,I=m===!0?1:-1;for(let U=1;U<=n;U++)d.push(0,f*I,0),u.push(0,I,0),p.push(.5,.5),g++;let F=g;for(let U=0;U<=n;U++){let P=U/n*l+o,X=Math.cos(P),B=Math.sin(P);b.x=N*B,b.y=f*I,b.z=N*X,d.push(b.x,b.y,b.z),u.push(0,I,0),M.x=.5*X+.5,M.y=.5*B*I+.5,p.push(M.x,M.y),g++}for(let U=0;U<n;U++){let P=E+U,X=F+U;m===!0?h.push(X,X+1,P):h.push(X+1,X,P),A+=3}c.addGroup(y,A,m===!0?1:2),y+=A}(function(){let m=new T,E=new T,M=0,b=(t-e)/i;for(let A=0;A<=s;A++){let N=[],I=A/s,F=I*(t-e)+e;for(let U=0;U<=n;U++){let P=U/n,X=P*l+o,B=Math.sin(X),re=Math.cos(X);E.x=F*B,E.y=-I*i+f,E.z=F*re,d.push(E.x,E.y,E.z),m.set(B,b,re).normalize(),u.push(m.x,m.y,m.z),p.push(P,1-I),N.push(g++)}x.push(N)}for(let A=0;A<n;A++)for(let N=0;N<s;N++){let I=x[N][A],F=x[N+1][A],U=x[N+1][A+1],P=x[N][A+1];h.push(I,F,P),h.push(F,U,P),M+=6}c.addGroup(y,M,0),y+=M})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ge(d,3)),this.setAttribute("normal",new Ge(u,3)),this.setAttribute("uv",new Ge(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ul=class r extends qt{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bn=class r extends st{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(u,p,g,x){let f=x+1,y=[];for(let v=0;v<=f;v++){y[v]=[];let m=u.clone().lerp(g,v/f),E=p.clone().lerp(g,v/f),M=f-v;for(let b=0;b<=M;b++)y[v][b]=b===0&&v===f?m:m.clone().lerp(E,b/M)}for(let v=0;v<f;v++)for(let m=0;m<2*(f-v)-1;m++){let E=Math.floor(m/2);m%2==0?(l(y[v][E+1]),l(y[v+1][E]),l(y[v][E])):(l(y[v][E+1]),l(y[v+1][E+1]),l(y[v+1][E]))}}function l(u){s.push(u.x,u.y,u.z)}function c(u,p){let g=3*u;p.x=e[g+0],p.y=e[g+1],p.z=e[g+2]}function h(u,p,g,x){x<0&&u.x===1&&(a[p]=u.x-1),g.x===0&&g.z===0&&(a[p]=x/2/Math.PI+.5)}function d(u){return Math.atan2(u.z,-u.x)}(function(u){let p=new T,g=new T,x=new T;for(let f=0;f<t.length;f+=3)c(t[f+0],p),c(t[f+1],g),c(t[f+2],x),o(p,g,x,u)})(n),(function(u){let p=new T;for(let g=0;g<s.length;g+=3)p.x=s[g+0],p.y=s[g+1],p.z=s[g+2],p.normalize().multiplyScalar(u),s[g+0]=p.x,s[g+1]=p.y,s[g+2]=p.z})(i),(function(){let u=new T;for(let g=0;g<s.length;g+=3){u.x=s[g+0],u.y=s[g+1],u.z=s[g+2];let x=d(u)/2/Math.PI+.5,f=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(x,1-f)}var p;(function(){let g=new T,x=new T,f=new T,y=new T,v=new te,m=new te,E=new te;for(let M=0,b=0;M<s.length;M+=9,b+=6){g.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),f.set(s[M+6],s[M+7],s[M+8]),v.set(a[b+0],a[b+1]),m.set(a[b+2],a[b+3]),E.set(a[b+4],a[b+5]),y.copy(g).add(x).add(f).divideScalar(3);let A=d(y);h(v,b+0,g,A),h(m,b+2,x,A),h(E,b+4,f,A)}})(),(function(){for(let g=0;g<a.length;g+=6){let x=a[g+0],f=a[g+2],y=a[g+4],v=Math.max(x,f,y),m=Math.min(x,f,y);v>.9&&m<.1&&(x<.2&&(a[g+0]+=1),f<.2&&(a[g+2]+=1),y<.2&&(a[g+4]+=1))}})()})(),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(s.slice(),3)),this.setAttribute("uv",new Ge(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},dl=class r extends Bn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},js=new T,Ys=new T,Co=new T,Js=new ln,pl=class extends st{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(ur*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:f,c:y}=Js;if(x.fromBufferAttribute(o,c[0]),f.fromBufferAttribute(o,c[1]),y.fromBufferAttribute(o,c[2]),Js.getNormal(Co),d[0]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,d[1]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,d[2]=`${Math.round(y.x*n)},${Math.round(y.y*n)},${Math.round(y.z*n)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let v=0;v<3;v++){let m=(v+1)%3,E=d[v],M=d[m],b=Js[h[v]],A=Js[h[m]],N=`${E}_${M}`,I=`${M}_${E}`;I in u&&u[I]?(Co.dot(u[I].normal)<=s&&(p.push(b.x,b.y,b.z),p.push(A.x,A.y,A.z)),u[I]=null):N in u||(u[N]={index0:c[v],index1:c[m],normal:Co.clone()})}}for(let g in u)if(u[g]){let{index0:x,index1:f}=u[g];js.fromBufferAttribute(o,x),Ys.fromBufferAttribute(o,f),p.push(js.x,js.y,js.z),p.push(Ys.x,Ys.y,Ys.z)}this.setAttribute("position",new Ge(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ra=class extends rs{constructor(e){super(e),this.uuid=Ei(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new rs().fromJSON(n))}return this}},$d=function(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=uh(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,d,u,p;if(i&&(s=(function(g,x,f,y){let v=[],m,E,M,b,A;for(m=0,E=x.length;m<E;m++)M=x[m]*y,b=m<E-1?x[m+1]*y:g.length,A=uh(g,M,b,y,!1),A===A.next&&(A.steiner=!0),v.push(op(A));for(v.sort(rp),m=0;m<v.length;m++)f=sp(v[m],f);return f})(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let g=t;g<n;g+=t)d=r[g],u=r[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return ss(s,a,t,o,l,p,0),a};function uh(r,e,t,i,n){let s,a;if(n===(function(o,l,c,h){let d=0;for(let u=l,p=c-h;u<c;u+=h)d+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return d})(r,e,t,i)>0)for(s=e;s<t;s+=i)a=dh(s,r[s],r[s+1],a);else for(s=t-i;s>=e;s-=i)a=dh(s,r[s],r[s+1],a);return a&&Ba(a,a.next)&&(os(a),a=a.next),a}function zn(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!Ba(i,i.next)&&yt(i.prev,i,i.next)!==0)i=i.next;else{if(os(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function ss(r,e,t,i,n,s,a){if(!r)return;!a&&s&&(function(h,d,u,p){let g=h;do g.z===0&&(g.z=fl(g.x,g.y,d,u,p)),g.prevZ=g.prev,g.nextZ=g.next,g=g.next;while(g!==h);g.prevZ.nextZ=null,g.prevZ=null,(function(x){let f,y,v,m,E,M,b,A,N=1;do{for(y=x,x=null,E=null,M=0;y;){for(M++,v=y,b=0,f=0;f<N&&(b++,v=v.nextZ,v);f++);for(A=N;b>0||A>0&&v;)b!==0&&(A===0||!v||y.z<=v.z)?(m=y,y=y.nextZ,b--):(m=v,v=v.nextZ,A--),E?E.nextZ=m:x=m,m.prevZ=E,E=m;y=v}E.nextZ=null,N*=2}while(M>1)})(g)})(r,i,n,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?tp(r,i,n,s):ep(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),os(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?ss(r=ip(zn(r),e,t),e,t,i,n,s,2):a===2&&np(r,e,t,i,n,s):ss(zn(r),e,t,i,n,s,1);break}}function ep(r){let e=r.prev,t=r,i=r.next;if(yt(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=n<s?n<a?n:a:s<a?s:a,d=o<l?o<c?o:c:l<c?l:c,u=n>s?n>a?n:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&hr(n,o,s,l,a,c,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function tp(r,e,t,i){let n=r.prev,s=r,a=r.next;if(yt(n,s,a)>=0)return!1;let o=n.x,l=s.x,c=a.x,h=n.y,d=s.y,u=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,x=o>l?o>c?o:c:l>c?l:c,f=h>d?h>u?h:u:d>u?d:u,y=fl(p,g,e,t,i),v=fl(x,f,e,t,i),m=r.prevZ,E=r.nextZ;for(;m&&m.z>=y&&E&&E.z<=v;){if(m.x>=p&&m.x<=x&&m.y>=g&&m.y<=f&&m!==n&&m!==a&&hr(o,h,l,d,c,u,m.x,m.y)&&yt(m.prev,m,m.next)>=0||(m=m.prevZ,E.x>=p&&E.x<=x&&E.y>=g&&E.y<=f&&E!==n&&E!==a&&hr(o,h,l,d,c,u,E.x,E.y)&&yt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;m&&m.z>=y;){if(m.x>=p&&m.x<=x&&m.y>=g&&m.y<=f&&m!==n&&m!==a&&hr(o,h,l,d,c,u,m.x,m.y)&&yt(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;E&&E.z<=v;){if(E.x>=p&&E.x<=x&&E.y>=g&&E.y<=f&&E!==n&&E!==a&&hr(o,h,l,d,c,u,E.x,E.y)&&yt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function ip(r,e,t){let i=r;do{let n=i.prev,s=i.next.next;!Ba(n,s)&&Vh(n,i,i.next,s)&&as(n,s)&&as(s,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),os(i),os(i.next),i=r=s),i=i.next}while(i!==r);return zn(i)}function np(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&lp(a,o)){let l=Wh(a,o);return a=zn(a,a.next),l=zn(l,l.next),ss(a,e,t,i,n,s,0),void ss(l,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function rp(r,e){return r.x-e.x}function sp(r,e){let t=(function(n,s){let a,o=s,l=-1/0,c=n.x,h=n.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let f=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=c&&f>l&&(l=f,a=o.x<o.next.x?o:o.next,f===c))return a}o=o.next}while(o!==s);if(!a)return null;let d=a,u=a.x,p=a.y,g,x=1/0;o=a;do c>=o.x&&o.x>=u&&c!==o.x&&hr(h<p?c:l,h,u,p,h<p?l:c,h,o.x,o.y)&&(g=Math.abs(h-o.y)/(c-o.x),as(o,n)&&(g<x||g===x&&(o.x>a.x||o.x===a.x&&ap(a,o)))&&(a=o,x=g)),o=o.next;while(o!==d);return a})(r,e);if(!t)return e;let i=Wh(t,r);return zn(i,i.next),zn(t,t.next)}function ap(r,e){return yt(r.prev,r,e.prev)<0&&yt(e.next,r,r.next)<0}function fl(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function op(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function hr(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function lp(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&Vh(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1})(r,e)&&(as(r,e)&&as(e,r)&&(function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s})(r,e)&&(yt(r.prev,r,e.prev)||yt(r,e.prev,e))||Ba(r,e)&&yt(r.prev,r,r.next)>0&&yt(e.prev,e,e.next)>0)}function yt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ba(r,e){return r.x===e.x&&r.y===e.y}function Vh(r,e,t,i){let n=Ks(yt(r,e,t)),s=Ks(yt(r,e,i)),a=Ks(yt(t,i,r)),o=Ks(yt(t,i,e));return n!==s&&a!==o||!(n!==0||!Zs(r,t,e))||!(s!==0||!Zs(r,i,e))||!(a!==0||!Zs(t,r,i))||!(o!==0||!Zs(t,e,i))}function Zs(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ks(r){return r>0?1:r<0?-1:0}function as(r,e){return yt(r.prev,r,r.next)<0?yt(r,e,r.next)>=0&&yt(r,r.prev,e)>=0:yt(r,e,r.prev)<0||yt(r,r.next,e)<0}function Wh(r,e){let t=new ml(r.i,r.x,r.y),i=new ml(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function dh(r,e,t,i){let n=new ml(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function os(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ml(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var hn=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];ph(e),fh(i,e);let a=e.length;t.forEach(ph);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,fh(i,t[l]);let o=$d(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function ph(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function fh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var gl=class r extends st{constructor(e=new Ra([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:cp,m,E,M,b,A,N=!1;y&&(m=y.getSpacedPoints(h),N=!0,u=!1,E=y.computeFrenetFrames(h,!1),M=new T,b=new T,A=new T),u||(f=0,p=0,g=0,x=0);let I=o.extractPoints(c),F=I.shape,U=I.holes;if(!hn.isClockWise(F)){F=F.reverse();for(let L=0,z=U.length;L<z;L++){let _=U[L];hn.isClockWise(_)&&(U[L]=_.reverse())}}let P=hn.triangulateShape(F,U),X=F;for(let L=0,z=U.length;L<z;L++){let _=U[L];F=F.concat(_)}function B(L,z,_){return z||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(z,_)}let re=F.length,he=P.length;function j(L,z,_){let k,O,S,G=L.x-z.x,H=L.y-z.y,se=_.x-L.x,Y=_.y-L.y,_e=G*G+H*H,Me=G*Y-H*se;if(Math.abs(Me)>Number.EPSILON){let pe=Math.sqrt(_e),Ie=Math.sqrt(se*se+Y*Y),ye=z.x-H/pe,Fe=z.y+G/pe,fe=((_.x-Y/Ie-ye)*Y-(_.y+se/Ie-Fe)*se)/(G*Y-H*se);k=ye+G*fe-L.x,O=Fe+H*fe-L.y;let oe=k*k+O*O;if(oe<=2)return new te(k,O);S=Math.sqrt(oe/2)}else{let pe=!1;G>Number.EPSILON?se>Number.EPSILON&&(pe=!0):G<-Number.EPSILON?se<-Number.EPSILON&&(pe=!0):Math.sign(H)===Math.sign(Y)&&(pe=!0),pe?(k=-H,O=G,S=Math.sqrt(_e)):(k=G,O=H,S=Math.sqrt(_e/2))}return new te(k/S,O/S)}let q=[];for(let L=0,z=X.length,_=z-1,k=L+1;L<z;L++,_++,k++)_===z&&(_=0),k===z&&(k=0),q[L]=j(X[L],X[_],X[k]);let V=[],ae,Z=q.concat();for(let L=0,z=U.length;L<z;L++){let _=U[L];ae=[];for(let k=0,O=_.length,S=O-1,G=k+1;k<O;k++,S++,G++)S===O&&(S=0),G===O&&(G=0),ae[k]=j(_[k],_[S],_[G]);V.push(ae),Z=Z.concat(ae)}for(let L=0;L<f;L++){let z=L/f,_=p*Math.cos(z*Math.PI/2),k=g*Math.sin(z*Math.PI/2)+x;for(let O=0,S=X.length;O<S;O++){let G=B(X[O],q[O],k);Ue(G.x,G.y,-_)}for(let O=0,S=U.length;O<S;O++){let G=U[O];ae=V[O];for(let H=0,se=G.length;H<se;H++){let Y=B(G[H],ae[H],k);Ue(Y.x,Y.y,-_)}}}let ge=g+x;for(let L=0;L<re;L++){let z=u?B(F[L],Z[L],ge):F[L];N?(b.copy(E.normals[0]).multiplyScalar(z.x),M.copy(E.binormals[0]).multiplyScalar(z.y),A.copy(m[0]).add(b).add(M),Ue(A.x,A.y,A.z)):Ue(z.x,z.y,0)}for(let L=1;L<=h;L++)for(let z=0;z<re;z++){let _=u?B(F[z],Z[z],ge):F[z];N?(b.copy(E.normals[L]).multiplyScalar(_.x),M.copy(E.binormals[L]).multiplyScalar(_.y),A.copy(m[L]).add(b).add(M),Ue(A.x,A.y,A.z)):Ue(_.x,_.y,d/h*L)}for(let L=f-1;L>=0;L--){let z=L/f,_=p*Math.cos(z*Math.PI/2),k=g*Math.sin(z*Math.PI/2)+x;for(let O=0,S=X.length;O<S;O++){let G=B(X[O],q[O],k);Ue(G.x,G.y,d+_)}for(let O=0,S=U.length;O<S;O++){let G=U[O];ae=V[O];for(let H=0,se=G.length;H<se;H++){let Y=B(G[H],ae[H],k);N?Ue(Y.x,Y.y+m[h-1].y,m[h-1].x+_):Ue(Y.x,Y.y,d+_)}}}function we(L,z){let _=L.length;for(;--_>=0;){let k=_,O=_-1;O<0&&(O=L.length-1);for(let S=0,G=h+2*f;S<G;S++){let H=re*S,se=re*(S+1);Ce(z+k+H,z+O+H,z+O+se,z+k+se)}}}function Ue(L,z,_){l.push(L),l.push(z),l.push(_)}function me(L,z,_){C(L),C(z),C(_);let k=n.length/3,O=v.generateTopUV(i,n,k-3,k-2,k-1);w(O[0]),w(O[1]),w(O[2])}function Ce(L,z,_,k){C(L),C(z),C(k),C(z),C(_),C(k);let O=n.length/3,S=v.generateSideWallUV(i,n,O-6,O-3,O-2,O-1);w(S[0]),w(S[1]),w(S[3]),w(S[1]),w(S[2]),w(S[3])}function C(L){n.push(l[3*L+0]),n.push(l[3*L+1]),n.push(l[3*L+2])}function w(L){s.push(L.x),s.push(L.y)}(function(){let L=n.length/3;if(u){let z=0,_=re*z;for(let k=0;k<he;k++){let O=P[k];me(O[2]+_,O[1]+_,O[0]+_)}z=h+2*f,_=re*z;for(let k=0;k<he;k++){let O=P[k];me(O[0]+_,O[1]+_,O[2]+_)}}else{for(let z=0;z<he;z++){let _=P[z];me(_[2],_[1],_[0])}for(let z=0;z<he;z++){let _=P[z];me(_[0]+re*h,_[1]+re*h,_[2]+re*h)}}i.addGroup(L,n.length/3-L,0)})(),(function(){let L=n.length/3,z=0;we(X,z),z+=X.length;for(let _=0,k=U.length;_<k;_++){let O=U[_];we(O,z),z+=O.length}i.addGroup(L,n.length/3-L,1)})()}this.setAttribute("position",new Ge(n,3)),this.setAttribute("uv",new Ge(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Aa[n.type]().fromJSON(n)),new r(i,e.options)}},cp={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*n],h=e[3*n+1];return[new te(s,a),new te(o,l),new te(c,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],d=e[3*i+2],u=e[3*n],p=e[3*n+1],g=e[3*n+2],x=e[3*s],f=e[3*s+1],y=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new te(a,1-l),new te(c,1-d),new te(u,1-g),new te(x,1-y)]:[new te(o,1-l),new te(h,1-d),new te(p,1-g),new te(f,1-y)]}},ls=class r extends Bn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},vl=class r extends Bn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},cs=class r extends st{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/(n=Math.max(1,n)),p=new T,g=new te;for(let x=0;x<=n;x++){for(let f=0;f<=i;f++){let y=s+f/i*a;p.x=d*Math.cos(y),p.y=d*Math.sin(y),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<n;x++){let f=x*(i+1);for(let y=0;y<i;y++){let v=y+f,m=v,E=v+i+1,M=v+i+2,b=v+1;o.push(m,E,b),o.push(E,M,b)}}this.setIndex(o),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},yl=class r extends st{constructor(e=new Ra([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let d=n.length/3,u=h.extractPoints(t),p=u.shape,g=u.holes;hn.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,y=g.length;f<y;f++){let v=g[f];hn.isClockWise(v)===!0&&(g[f]=v.reverse())}let x=hn.triangulateShape(p,g);for(let f=0,y=g.length;f<y;f++){let v=g[f];p=p.concat(v)}for(let f=0,y=p.length;f<y;f++){let v=p[f];n.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let f=0,y=x.length;f<y;f++){let v=x[f],m=v[0]+d,E=v[1]+d,M=v[2]+d;i.push(m,E,M),l+=3}}this.setIndex(i),this.setAttribute("position",new Ge(n,3)),this.setAttribute("normal",new Ge(s,3)),this.setAttribute("uv",new Ge(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},ti=class r extends st{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new T,u=new T,p=[],g=[],x=[],f=[];for(let y=0;y<=i;y++){let v=[],m=y/i,E=0;y===0&&a===0?E=.5/t:y===i&&l===Math.PI&&(E=-.5/t);for(let M=0;M<=t;M++){let b=M/t;d.x=-e*Math.cos(n+b*s)*Math.sin(a+m*o),d.y=e*Math.cos(a+m*o),d.z=e*Math.sin(n+b*s)*Math.sin(a+m*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),f.push(b+E,1-m),v.push(c++)}h.push(v)}for(let y=0;y<i;y++)for(let v=0;v<t;v++){let m=h[y][v+1],E=h[y][v],M=h[y+1][v],b=h[y+1][v+1];(y!==0||a>0)&&p.push(m,E,b),(y!==i-1||l<Math.PI)&&p.push(E,M,b)}this.setIndex(p),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(x,3)),this.setAttribute("uv",new Ge(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},xl=class r extends Bn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},hs=class r extends st{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new T,d=new T,u=new T;for(let p=0;p<=i;p++)for(let g=0;g<=n;g++){let x=g/n*s,f=p/i*Math.PI*2;d.x=(e+t*Math.cos(f))*Math.cos(x),d.y=(e+t*Math.cos(f))*Math.sin(x),d.z=t*Math.sin(f),o.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=n;g++){let x=(n+1)*p+g-1,f=(n+1)*(p-1)+g-1,y=(n+1)*(p-1)+g,v=(n+1)*p+g;a.push(x,f,v),a.push(f,y,v)}this.setIndex(a),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Ml=class r extends st{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],c=[],h=[],d=new T,u=new T,p=new T,g=new T,x=new T,f=new T,y=new T;for(let m=0;m<=i;++m){let E=m/i*s*Math.PI*2;v(E,s,a,e,p),v(E+.01,s,a,e,g),f.subVectors(g,p),y.addVectors(g,p),x.crossVectors(f,y),y.crossVectors(x,f),x.normalize(),y.normalize();for(let M=0;M<=n;++M){let b=M/n*Math.PI*2,A=-t*Math.cos(b),N=t*Math.sin(b);d.x=p.x+(A*y.x+N*x.x),d.y=p.y+(A*y.y+N*x.y),d.z=p.z+(A*y.z+N*x.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),c.push(u.x,u.y,u.z),h.push(m/i),h.push(M/n)}}for(let m=1;m<=i;m++)for(let E=1;E<=n;E++){let M=(n+1)*(m-1)+(E-1),b=(n+1)*m+(E-1),A=(n+1)*m+E,N=(n+1)*(m-1)+E;o.push(M,b,N),o.push(b,A,N)}function v(m,E,M,b,A){let N=Math.cos(m),I=Math.sin(m),F=M/E*m,U=Math.cos(F);A.x=b*(2+U)*.5*N,A.y=b*(2+U)*I*.5,A.z=b*Math.sin(F)*.5}this.setIndex(o),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Sl=class r extends st{constructor(e=new Ta(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,l=new T,c=new te,h=new T,d=[],u=[],p=[],g=[];function x(f){h=e.getPointAt(f/t,h);let y=a.normals[f],v=a.binormals[f];for(let m=0;m<=n;m++){let E=m/n*Math.PI*2,M=Math.sin(E),b=-Math.cos(E);l.x=b*y.x+M*v.x,l.y=b*y.y+M*v.y,l.z=b*y.z+M*v.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)x(f);x(s===!1?t:0),(function(){for(let f=0;f<=t;f++)for(let y=0;y<=n;y++)c.x=f/t,c.y=y/n,p.push(c.x,c.y)})(),(function(){for(let f=1;f<=t;f++)for(let y=1;y<=n;y++){let v=(n+1)*(f-1)+(y-1),m=(n+1)*f+(y-1),E=(n+1)*f+y,M=(n+1)*(f-1)+y;g.push(v,m,M),g.push(m,E,M)}})()})(),this.setIndex(g),this.setAttribute("position",new Ge(d,3)),this.setAttribute("normal",new Ge(u,3)),this.setAttribute("uv",new Ge(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Aa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},us=class extends st{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new T,s=new T;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start;for(let p=u,g=u+d.count;p<g;p+=3)for(let x=0;x<3;x++){let f=o.getX(p+x),y=o.getX(p+(x+1)%3);n.fromBufferAttribute(a,f),s.fromBufferAttribute(a,y),mh(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),mh(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ge(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function mh(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var Yp=Object.freeze({__proto__:null,BoxGeometry:si,CapsuleGeometry:cl,CircleGeometry:hl,ConeGeometry:ul,CylinderGeometry:qt,DodecahedronGeometry:dl,EdgesGeometry:pl,ExtrudeGeometry:gl,IcosahedronGeometry:ls,LatheGeometry:fn,OctahedronGeometry:vl,PlaneGeometry:Mr,PolyhedronGeometry:Bn,RingGeometry:cs,ShapeGeometry:yl,SphereGeometry:ti,TetrahedronGeometry:xl,TorusGeometry:hs,TorusKnotGeometry:Ml,TubeGeometry:Sl,WireframeGeometry:us});var Ca=class extends it{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ii=class extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Qs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function hp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var br=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];t:{e:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break i}if(e>=s)break t;{let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bl=class extends br{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case xc:s=e,o=2*t-i;break;case Mc:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case xc:a=e,l=2*i-t;break;case Mc:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-t)/(n-t),x=g*g,f=x*g,y=-u*f+2*u*x-u*g,v=(1+u)*f+(-1.5-2*u)*x+(-.5+u)*g+1,m=(-1-p)*f+(1.5+p)*x+.5*g,E=p*f-p*x;for(let M=0;M!==o;++M)s[M]=y*a[h+M]+v*a[c+M]+m*a[l+M]+E*a[d+M];return s}},El=class extends br{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},Tl=class extends br{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},vi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qs(t,this.TimeBufferType),this.values=Qs(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qs(e.times,Array),values:Qs(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new El(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ta:t=this.InterpolantFactoryMethodDiscrete;break;case ia:t=this.InterpolantFactoryMethodLinear;break;case eo:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ta;case this.InterpolantFactoryMethodLinear:return ia;case this.InterpolantFactoryMethodSmooth:return eo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&hp(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===eo,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(n)l=!0;else{let h=o*i,d=h-i,u=h+i;for(let p=0;p!==i;++p){let g=t[h+p];if(g!==t[d+p]||g!==t[u+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,d=a*i;for(let u=0;u!==i;++u)t[d+u]=t[h+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};vi.prototype.TimeBufferType=Float32Array,vi.prototype.ValueBufferType=Float32Array,vi.prototype.DefaultInterpolation=ia;var Un=class extends vi{};Un.prototype.ValueTypeName="bool",Un.prototype.ValueBufferType=Array,Un.prototype.DefaultInterpolation=ta,Un.prototype.InterpolantFactoryMethodLinear=void 0,Un.prototype.InterpolantFactoryMethodSmooth=void 0;var wl=class extends vi{};wl.prototype.ValueTypeName="color";var Al=class extends vi{};Al.prototype.ValueTypeName="number";var Rl=class extends br{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ti.slerpFlat(s,0,a,c-o,a,c,l);return s}},Zr=class extends vi{InterpolantFactoryMethodLinear(e){return new Rl(this.times,this.values,this.getValueSize(),e)}};Zr.prototype.ValueTypeName="quaternion",Zr.prototype.DefaultInterpolation=ia,Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var In=class extends vi{};In.prototype.ValueTypeName="string",In.prototype.ValueBufferType=Array,In.prototype.DefaultInterpolation=ta,In.prototype.InterpolantFactoryMethodLinear=void 0,In.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends vi{};Cl.prototype.ValueTypeName="vector";var _l=class{constructor(e,t,i){let n=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){l++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},up=new _l,Pl=class{constructor(e){this.manager=e!==void 0?e:up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise((function(n,s){i.load(e,n,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Pl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ds=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var _o=new Qe,gh=new T,vh=new T,_a=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(gh),vh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vh),t.updateMatrixWorld(),_o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var yh=new Qe,Wr=new T,Po=new T,Ll=class extends _a{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Wr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wr),Po.copy(i.position),Po.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Po),i.updateMatrixWorld(),n.makeTranslation(-Wr.x,-Wr.y,-Wr.z),yh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh)}},Er=class extends ds{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Ll}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ul=class extends _a{constructor(){super(new Sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ji=class extends ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Ul}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},mn=class extends ds{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Pa=class extends st{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Jp=new Qe,Zp=new Qe,Kp=new Qe;var La=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=xh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function xh(){return(typeof performance>"u"?Date:performance).now()}var Qp=new T,$p=new Ti,ef=new T,tf=new T;var nf=new T,rf=new Ti,sf=new T,af=new T;var kl="\\[\\]\\.:\\/",dp=new RegExp("["+kl+"]","g"),Lo="[^"+kl+"]",pp="[^"+kl.replace("\\.","")+"]",fp=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Lo)+/(WCOD+)?/.source.replace("WCOD",pp)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lo)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lo)+"$"),mp=["material","materials","bones","map"],mt=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dp,"")}static parseTrackName(e){let t=fp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);mp.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=class{constructor(r,e,t){let i=t||mt.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray],mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var of=new Float32Array(1);var Hn=class extends ya{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var lf=new te;var Mh=new T,$s=new T,Ua=class{constructor(e=new T,t=new T){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Mh.subVectors(e,this.start),$s.subVectors(this.end,this.start);let i=$s.dot($s),n=$s.dot(Mh)/i;return t&&(n=At(n,0,1)),n}closestPointToPoint(e,t,i){let n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},cf=new T;var hf=new T,uf=new Qe,df=new Qe;var pf=new T,ff=new Te,mf=new Te;var gf=new T,vf=new T,yf=new T;var xf=new T,Mf=new Qr;var Sf=new jt;var bf=new T;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"158"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="158");var za={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ni=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},gp=new Sr(-1,1,1,-1,0,1),Vl=class extends st{constructor(){super(),this.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ge([0,2,0,0,2,0],2))}},vp=new Vl,gn=class{constructor(e){this._mesh=new Ne(vp,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,gp)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ji=class extends ni{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof it?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=yi.clone(e.uniforms),this.material=new it({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new gn(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ps=class extends ni{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},Ha=class extends ni{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var vn=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new te);this._width=i.width,this._height=i.height,t=new bt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ut}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ji(za),this.copyPass.material.blending=Sh,this.clock=new La}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ps!==void 0&&(a instanceof ps?i=!0:a instanceof Ha&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var yn=class extends ni{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}};var Xh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var _i=class r extends ni{constructor(e,t,i,n){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new Te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new bt(s,a,{type:Ut}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new bt(s,a,{type:Ut});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let p=new bt(s,a,{type:Ut});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),a=Math.round(a/2)}let o=Xh;this.highPassUniforms=yi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new it({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new te(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=za;this.copyUniforms=yi.clone(h.uniforms),this.blendMaterial=new it({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Yt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Te,this.oldClearAlpha=1,this.basic=new wi,this.fsQuad=new gn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new te(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new it({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new it({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};_i.BlurDirectionX=new te(1,0);_i.BlurDirectionY=new te(0,1);var qh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var xn=class extends ni{constructor(){super();let e=qh;this.uniforms=yi.clone(e.uniforms),this.material=new Ca({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new gn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Dl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Nl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ol?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Yi&&(this.material.defines.ACES_FILMIC_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ar=class extends Ai{constructor(e=null){super();let t=new si;t.deleteAttribute("uv");let i=new ii({side:xt}),n=new ii,s=5;e!==null&&e._useLegacyLights===!1&&(s=900);let a=new Er(16777215,s,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new Ne(t,i);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new Ne(t,n);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Ne(t,n);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new Ne(t,n);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new Ne(t,n);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let u=new Ne(t,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let p=new Ne(t,n);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let g=new Ne(t,wr(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let x=new Ne(t,wr(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let f=new Ne(t,wr(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let y=new Ne(t,wr(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let v=new Ne(t,wr(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);let m=new Ne(t,wr(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function wr(r){let e=new wi;return e.color.setScalar(r),e}var jh=new jt,ka=new T,Rr=class extends Pa{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Ge(e,3)),this.setAttribute("uv",new Ge(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Hn(t,6,1);return this.setAttribute("instanceStart",new ai(i,3,0)),this.setAttribute("instanceEnd",new ai(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Hn(t,6,1);return this.setAttribute("instanceColorStart",new ai(i,3,0)),this.setAttribute("instanceColorEnd",new ai(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new us(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),jh.setFromBufferAttribute(t),this.boundingBox.union(jh))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)ka.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(ka)),ka.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(ka));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};xe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new te(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Xt.line={uniforms:yi.merge([xe.common,xe.fog,xe.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var li=class extends it{constructor(e){super({type:"LineMaterial",uniforms:yi.clone(Xt.line.uniforms),vertexShader:Xt.line.vertexShader,fragmentShader:Xt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};var Yh=new T,Jh=new T,It=new at,Dt=new at,Pi=new at,Wl=new T,Xl=new Qe,Nt=new Ua,Zh=new T,Ga=new jt,Va=new ei,Li=new at,Ui,kn;function Kh(r,e,t){return Li.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),Li.multiplyScalar(1/Li.w),Li.x=kn/t.width,Li.y=kn/t.height,Li.applyMatrix4(r.projectionMatrixInverse),Li.multiplyScalar(1/Li.w),Math.abs(Math.max(Li.x,Li.y))}function yp(r,e){let t=r.matrixWorld,i=r.geometry,n=i.attributes.instanceStart,s=i.attributes.instanceEnd,a=Math.min(i.instanceCount,n.count);for(let o=0,l=a;o<l;o++){Nt.start.fromBufferAttribute(n,o),Nt.end.fromBufferAttribute(s,o),Nt.applyMatrix4(t);let c=new T,h=new T;Ui.distanceSqToSegment(Nt.start,Nt.end,h,c),h.distanceTo(c)<kn*.5&&e.push({point:h,pointOnLine:c,distance:Ui.origin.distanceTo(h),object:r,face:null,faceIndex:o,uv:null,uv1:null})}}function xp(r,e,t){let i=e.projectionMatrix,s=r.material.resolution,a=r.matrixWorld,o=r.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),d=-e.near;Ui.at(1,Pi),Pi.w=1,Pi.applyMatrix4(e.matrixWorldInverse),Pi.applyMatrix4(i),Pi.multiplyScalar(1/Pi.w),Pi.x*=s.x/2,Pi.y*=s.y/2,Pi.z=0,Wl.copy(Pi),Xl.multiplyMatrices(e.matrixWorldInverse,a);for(let u=0,p=h;u<p;u++){if(It.fromBufferAttribute(l,u),Dt.fromBufferAttribute(c,u),It.w=1,Dt.w=1,It.applyMatrix4(Xl),Dt.applyMatrix4(Xl),It.z>d&&Dt.z>d)continue;if(It.z>d){let m=It.z-Dt.z,E=(It.z-d)/m;It.lerp(Dt,E)}else if(Dt.z>d){let m=Dt.z-It.z,E=(Dt.z-d)/m;Dt.lerp(It,E)}It.applyMatrix4(i),Dt.applyMatrix4(i),It.multiplyScalar(1/It.w),Dt.multiplyScalar(1/Dt.w),It.x*=s.x/2,It.y*=s.y/2,Dt.x*=s.x/2,Dt.y*=s.y/2,Nt.start.copy(It),Nt.start.z=0,Nt.end.copy(Dt),Nt.end.z=0;let x=Nt.closestPointToPointParameter(Wl,!0);Nt.at(x,Zh);let f=Ih.lerp(It.z,Dt.z,x),y=f>=-1&&f<=1,v=Wl.distanceTo(Zh)<kn*.5;if(y&&v){Nt.start.fromBufferAttribute(l,u),Nt.end.fromBufferAttribute(c,u),Nt.start.applyMatrix4(a),Nt.end.applyMatrix4(a);let m=new T,E=new T;Ui.distanceSqToSegment(Nt.start,Nt.end,E,m),t.push({point:E,pointOnLine:m,distance:Ui.origin.distanceTo(E),object:r,face:null,faceIndex:u,uv:null,uv1:null})}}}var Wa=class extends Ne{constructor(e=new Rr,t=new li({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)Yh.fromBufferAttribute(t,a),Jh.fromBufferAttribute(i,a),n[o]=o===0?0:n[o-1],n[o+1]=n[o]+Yh.distanceTo(Jh);let s=new Hn(n,2,1);return e.setAttribute("instanceDistanceStart",new ai(s,1,0)),e.setAttribute("instanceDistanceEnd",new ai(s,1,1)),this}raycast(e,t){let i=this.material.worldUnits,n=e.camera;n===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Ui=e.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;kn=l.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),Va.copy(o.boundingSphere).applyMatrix4(a);let c;if(i)c=kn*.5;else{let d=Math.max(n.near,Va.distanceToPoint(Ui.origin));c=Kh(n,d,l.resolution)}if(Va.radius+=c,Ui.intersectsSphere(Va)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Ga.copy(o.boundingBox).applyMatrix4(a);let h;if(i)h=kn*.5;else{let d=Math.max(n.near,Ga.distanceToPoint(Ui.origin));h=Kh(n,d,l.resolution)}Ga.expandByScalar(h),Ui.intersectsBox(Ga)!==!1&&(i?yp(this,t):xp(this,n,t))}};var Ii=class extends Rr{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setPositions(i),this}setColors(e){let t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setColors(i),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}};var Mn=class extends Wa{constructor(e=new Ii,t=new li({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};function Cr(r,e,t,i){let n=Math.min(devicePixelRatio||1,matchMedia("(max-width:1000px)").matches?1.25:1.5),s=Math.min(n,Math.sqrt(i/Math.max(1,e*t)));r.setPixelRatio(Math.max(.75,s))}function _r(r,e){r.addEventListener("webglcontextlost",t=>{t.preventDefault(),Gn(r.closest("[data-hh-background]"),"WebGL context lost: "+e)},!1),r.addEventListener("webglcontextrestored",()=>{console.warn("WebGL context restored:",e),r.dispatchEvent(new CustomEvent("hh-context-restored"))},!1)}function Pr(r,e){let t,i=()=>{clearTimeout(t),t=setTimeout(e,120)},n=new ResizeObserver(i);n.observe(r),r.querySelectorAll("[data-hh-hero],[data-hh-heading],[data-hh-ways],[data-hh-closing],[data-hh-event]").forEach(s=>n.observe(s)),document.fonts.ready.then(i)}function Gn(r,e){r.dataset.hhStatus="fallback",r.querySelectorAll("canvas").forEach(t=>t.style.visibility="hidden"),console.warn("[HandelsHaus animation]",e)}function Qh(r){let e={},t=r.querySelector("#heroScene"),i=r.querySelector("#scene"),n=new URLSearchParams(location.search),s=n.has("seek")?parseFloat(n.get("seek")):null,a=matchMedia("(prefers-reduced-motion:reduce)").matches,o=matchMedia("(max-width:1000px)").matches;_r(i,"hero");let l={navy:new Te("#0F2136"),navy2:new Te("#16324F"),bronze:new Te("#B08D57"),champ:new Te("#E2C892"),off:new Te("#F2EDE3"),beige:new Te("#E9E1D2")},c=122,h=110,d=.02,u=9,p=[3,119],g=[[.95,.9,1],[.935,.72,1.03],[.915,.54,1.06],[.89,.37,1.1],[.85,.22,1.14],[.79,.11,1.18],[.71,.04,1.22],[.61,.01,1.26]],x=.045,f=.16,y=36,v=new qi({canvas:i,antialias:!0,powerPreference:"high-performance"});v.setPixelRatio(Math.min(devicePixelRatio||1,o?1.25:1.5)),v.outputColorSpace=ct,v.toneMapping=Yi,v.toneMappingExposure=.92,v.shadowMap.enabled=!0,v.shadowMap.type=Ia;let m=new Ai;m.background=l.navy.clone();let E=new wt(y,1,.05,400);m.add(E);let M=new pn(v);m.environment=M.fromScene(new Ar,.04).texture,M.dispose();function b(ee,ne){let ce=ee*Math.PI/180,de=ne*Math.PI/180;return new T(Math.sin(ce)*Math.cos(de),Math.sin(de),Math.cos(ce)*Math.cos(de))}let A=b(-55,22),N=new ji(16777215,2.7);N.position.copy(A).multiplyScalar(7),N.castShadow=!0,N.shadow.mapSize.set(2048,2048),N.shadow.camera.left=-2.6,N.shadow.camera.right=2.6,N.shadow.camera.top=2.6,N.shadow.camera.bottom=-2.6,N.shadow.camera.near=.5,N.shadow.camera.far=14,N.shadow.bias=-4e-4,N.shadow.normalBias=.02,N.shadow.radius=5,N.shadow.blurSamples=16,m.add(N,N.target),m.add(new mn(l.navy2,.35));let I=new Er(l.champ,.02,.35,2);I.visible=!1,m.add(I);function F(ee,ne,ce){let de=Math.sin(ee*127.1+ne*311.7+ce*74.7)*43758.5453;return de-Math.floor(de)}function U(ee,ne,ce){let de=Math.floor(ee),Le=Math.floor(ne),Re=ee-de,Pe=ne-Le,He=Re*Re*(3-2*Re),De=Pe*Pe*(3-2*Pe),Be=F(de,Le,ce),tt=F(de+1,Le,ce),et=F(de,Le+1,ce),St=F(de+1,Le+1,ce);return Be*(1-He)*(1-De)+tt*He*(1-De)+et*(1-He)*De+St*He*De}function P(ee,ne,ce,de){let Le=0,Re=.5,Pe=1;for(let He=0;He<de;He++)Le+=Re*U(ee*Pe,ne*Pe,ce+He),Pe*=2.03,Re*=.5;return Le}function X(ee,ne,ce){return[ee[0]+(ne[0]-ee[0])*ce,ee[1]+(ne[1]-ee[1])*ce,ee[2]+(ne[2]-ee[2])*ce]}let B=[242,237,227],re=[226,200,146],he=[176,141,87],j=[233,225,210],q=[15,33,54],V={value:0},ae=new Ma(new Uint8Array([255,255,255,255]),1,1);ae.needsUpdate=!0;let Z=new ii({map:ae,roughness:1,metalness:0,emissive:l.navy2,emissiveIntensity:1,envMapIntensity:0});Z.onBeforeCompile=ee=>{ee.uniforms.uTime=V,ee.uniforms.uOff={value:l.off},ee.uniforms.uChamp={value:l.champ},ee.uniforms.uBronze={value:l.bronze},ee.fragmentShader=`uniform float uTime; uniform vec3 uOff, uChamp, uBronze;
    float ph21(vec2 p){ p = fract(p * vec2(127.1, 311.7)); p += dot(p, p + 74.7); return fract(p.x * p.y); }
    // \u0448\u0443\u043C, \u043F\u0435\u0440\u0438\u043E\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043E \u0434\u043E\u043B\u0433\u043E\u0442\u0435 (per) \u2014 \u0431\u0435\u0437 \u0448\u0432\u0430 \u043D\u0430 \u043C\u0435\u0440\u0438\u0434\u0438\u0430\u043D\u0435
    float pnoise(vec2 p, float per){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
      float x0 = mod(i.x, per), x1 = mod(i.x + 1.0, per);
      float a = ph21(vec2(x0, i.y)), b = ph21(vec2(x1, i.y)), c = ph21(vec2(x0, i.y + 1.0)), d = ph21(vec2(x1, i.y + 1.0));
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y); }
    float pfbm(vec2 p, float per){ float v = 0.0, a = 0.5; for (int k = 0; k < 7; k++) { v += a * pnoise(p, per); p = p * 2.0 + vec2(0.0, 13.7); per *= 2.0; a *= 0.5; } return v; }
    vec3 bands(vec2 uv){
      float lat = uv.y;
      float lon = uv.x + uTime * (0.0022 + 0.0016 * sin(lat * 31.0) + 0.0009 * sin(lat * 77.0));   // \u0434\u0438\u0444\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0435 \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u2014 \u043F\u043E\u043B\u043E\u0441\u044B \u043F\u043B\u044B\u0432\u0443\u0442
      // \u0434\u043E\u043C\u0435\u0439\u043D-\u0432\u0430\u0440\u043F\u0438\u043D\u0433 \u043F\u043E \u0434\u043E\u043B\u0433\u043E\u0442\u0435: \u0437\u0430\u0432\u0438\u0445\u0440\u0435\u043D\u0438\u044F \u043D\u0430 \u0433\u0440\u0430\u043D\u0438\u0446\u0430\u0445 \u043F\u043E\u043B\u043E\u0441
      float w1 = (pfbm(vec2(lon * 6.0, lat * 14.0), 6.0) - 0.5) * 0.05;
      float w2 = (pfbm(vec2(lon * 22.0, lat * 70.0), 22.0) - 0.5) * 0.010;
      float b = lat + w1 + w2;
      float wide = 0.5 + 0.5 * sin(b * 52.0) * sin(b * 15.7 + 1.2);
      wide = smoothstep(0.28, 0.72, wide);                                   // \u0433\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u043E\u043B\u043E\u0441 \u0440\u0435\u0437\u0447\u0435
      float fine = 0.5 + 0.5 * sin(b * 190.0 + 2.0 * pfbm(vec2(lon * 9.0, lat * 30.0), 9.0));
      float shade = clamp(wide * 0.78 + fine * 0.22 + (pfbm(vec2(lon * 40.0, lat * 160.0), 40.0) - 0.5) * 0.18, 0.0, 1.0);
      vec3 col = mix(uOff, uChamp, shade);
      col = mix(col, uBronze, smoothstep(0.72, 1.0, shade) * 0.32);          // \u0442\u0451\u043C\u043D\u044B\u0435 \u043F\u043E\u044F\u0441\u0430 \u2014 \u043B\u0451\u0433\u043A\u0430\u044F \u0431\u0440\u043E\u043D\u0437\u0430
      float pole = pow(abs(lat - 0.5) * 2.0, 5.0);
      col = mix(col, uOff * 0.72, pole * 0.5);                                 // \u043F\u043E\u0442\u0435\u043C\u043D\u0435\u043D\u0438\u0435 \u043A \u043F\u043E\u043B\u044E\u0441\u0430\u043C
      return col; }
  `+ee.fragmentShader.replace("#include <map_fragment>","diffuseColor.rgb *= bands(vMapUv);")};let ge=new Ne(new ti(1,128,96),Z);ge.castShadow=!0,ge.receiveShadow=!0,ge.rotation.z=.06,m.add(ge);let we=`varying vec3 vN; varying vec3 vW;
  void main(){ vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,Ue=new Ne(new ti(1.012,96,64),new it({uniforms:{uSun:{value:A},uOff:{value:l.off},uChamp:{value:l.champ}},vertexShader:we,fragmentShader:`uniform vec3 uSun, uOff, uChamp; varying vec3 vN; varying vec3 vW;
    void main(){
      vec3 V = normalize(cameraPosition - vW);
      float fr = pow(1.0 - max(dot(vN, V), 0.0), 5.0);                    // \u0443\u0437\u043A\u0430\u044F \u043D\u0438\u0442\u044C, ~2\u20133 % \u0440\u0430\u0434\u0438\u0443\u0441\u0430
      float lit = smoothstep(-0.28, 0.35, dot(vN, uSun));
      float back = smoothstep(0.45, 1.0, dot(-V, uSun));
      float i = fr * (0.10 + 0.85 * lit) + pow(fr, 1.1) * back * 4.5;
      vec3 col = mix(uOff, uChamp, 0.3 + 0.5 * back);
      gl_FragColor = vec4(col * i, 1.0);
    }`,blending:Yt,transparent:!0,depthWrite:!1}));Ue.renderOrder=4,m.add(Ue);let me=new Ne(new ti(1.09,96,64),new it({uniforms:{uSun:{value:A},uOff:{value:l.off},uChamp:{value:l.champ}},vertexShader:we,fragmentShader:`uniform vec3 uSun, uOff, uChamp; varying vec3 vN; varying vec3 vW;
    void main(){
      vec3 V = normalize(cameraPosition - vW);
      float g = pow(smoothstep(0.0, 0.41, abs(dot(vN, V))), 1.8);      // \u044F\u0440\u043A\u043E \u0443 \u043B\u0438\u043C\u0431\u0430 \u043F\u043B\u0430\u043D\u0435\u0442\u044B, \u0433\u0430\u0441\u043D\u0435\u0442 \u043D\u0430\u0440\u0443\u0436\u0443
      float lit = smoothstep(-0.35, 0.3, dot(vN, uSun));
      float back = smoothstep(0.45, 1.0, dot(-V, uSun));
      float i = g * (0.03 + 0.18 * lit) + pow(g, 2.2) * back * 0.22;   // \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u043E\u0440\u0435\u043E\u043B \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439
      vec3 col = mix(uOff, uChamp, 0.35 + 0.45 * back);
      gl_FragColor = vec4(col * i, 1.0);
    }`,blending:Yt,transparent:!0,depthWrite:!1,side:xt}));me.renderOrder=4,m.add(me);let Ce=1.25,C=2.32,w=4096,L=new Float32Array(w),z=new Array(w);(function(){for(let ne=0;ne<w;ne++){let ce=ne/(w-1),de;ce<.19?de=.22+.16*ce/.19:ce<.21?de=.5:ce<.5?de=.92+.08*Math.sin(ce*140):ce<.565?de=.04:ce<.86?de=.68+.06*Math.sin(ce*230):ce<.875?de=.06:ce<.94?de=.55:de=.55*(1-(ce-.94)/.06);let Le=.72+.28*U(ce*900,.5,7)*U(ce*3200,.5,9),Re=F(Math.floor(ce*260),0,3)<.13?.35:1;de*=Le*Re,ce<.02&&(de*=ce/.02),L[ne]=Math.max(0,Math.min(1,de));let Pe=ce>.21&&ce<.5?.42-.2*Math.abs((ce-.355)/.145):ce<.19?.5:.22;z[ne]=X(j,he,Pe*(.6+.4*U(ce*60,.5,5)))}})();function _(ee){let ne=Math.max(0,Math.min(w-1,Math.round(ee*(w-1))));return L[ne]}function k(){let ee=document.createElement("canvas");ee.width=w,ee.height=1;let ne=ee.getContext("2d"),ce=ne.createImageData(w,1),de=ce.data;for(let Re=0;Re<w;Re++){let Pe=z[Re];de[Re*4]=Pe[0],de[Re*4+1]=Pe[1],de[Re*4+2]=Pe[2],de[Re*4+3]=Math.round(255*Math.min(1,L[Re]*1.15))}ne.putImageData(ce,0,0);let Le=new Ci(ee);return Le.colorSpace=ct,Le.anisotropy=8,Le}let O=k();O.anisotropy=v.capabilities.getMaxAnisotropy();let S=new cs(Ce,C,320,1);(function(){let ne=S.attributes.position,ce=S.attributes.uv;for(let de=0;de<ne.count;de++){let Le=Math.hypot(ne.getX(de),ne.getY(de));ce.setXY(de,(Le-Ce)/(C-Ce),.5)}ce.needsUpdate=!0})();let G=new ii({map:O,emissiveMap:O,emissive:16777215,emissiveIntensity:0,transparent:!0,opacity:.7,side:Da,roughness:1,metalness:0,depthWrite:!1,envMapIntensity:0}),H=new Ne(S,G);H.rotation.x=-Math.PI/2,H.castShadow=!0,H.receiveShadow=!0,H.customDepthMaterial=new es({depthPacking:Uh,map:O,alphaTest:.45,side:Da}),H.renderOrder=2,m.add(H);let se=new Ne(S,new wi({colorWrite:!1,depthWrite:!0,side:Da,polygonOffset:!0,polygonOffsetFactor:4,polygonOffsetUnits:4}));se.rotation.x=-Math.PI/2,se.renderOrder=1,m.add(se);let Y=o?15e3:64e3,_e=(function(){let ee=new Float32Array(w),ne=0;for(let Be=0;Be<w;Be++)ne+=L[Be]+.004,ee[Be]=ne;for(let Be=0;Be<w;Be++)ee[Be]/=ne;let ce=new Float32Array(Y*3),de=new Float32Array(Y*3),Le=new Float32Array(Y),Re=new Float32Array(Y),Pe=1,He=()=>(Pe=Pe*16807%2147483647,(Pe-1)/2147483646);for(let Be=0;Be<Y;Be++){let tt=He(),et=0,St=w-1;for(;et<St;){let ja=et+St>>1;ee[ja]<tt?et=ja+1:St=ja}let kt=(et+He())/w,Dr=Ce+kt*(C-Ce),ys=He()*Math.PI*2;ce[Be*3]=Math.cos(ys)*Dr,ce[Be*3+1]=(He()-.5)*.006+(He()-.5)*.004,ce[Be*3+2]=Math.sin(ys)*Dr;let Xa=z[Math.min(w-1,Math.floor(kt*w))],qa=.75+.25*He();de[Be*3]=Xa[0]/255*qa,de[Be*3+1]=Xa[1]/255*qa,de[Be*3+2]=Xa[2]/255*qa,Le[Be]=.006+.015*Math.pow(He(),2.2),Re[Be]=.35+.65*L[et]}let De=new st;return De.setAttribute("position",new rt(ce,3)),De.setAttribute("aCol",new rt(de,3)),De.setAttribute("aSize",new rt(Le,1)),De.setAttribute("aDens",new rt(Re,1)),De})(),Me=new it({uniforms:{uSun:{value:A},uScale:{value:1e3},uPx:{value:1}},vertexShader:`attribute float aSize; attribute float aDens; attribute vec3 aCol;
    uniform vec3 uSun; uniform float uScale, uPx;
    varying float vA, vPhase, vNear, vSub; varying vec3 vCol;
    void main(){
      vec3 p = position;
      // \u0442\u0435\u043D\u044C \u043F\u043B\u0430\u043D\u0435\u0442\u044B \u043D\u0430 \u043A\u043E\u043B\u044C\u0446\u0430\u0445 \u2014 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438: \u0446\u0438\u043B\u0438\u043D\u0434\u0440 \u0432\u0434\u043E\u043B\u044C \u0441\u043E\u043B\u043D\u0446\u0430 \u043F\u043E\u0437\u0430\u0434\u0438 \u043F\u043B\u0430\u043D\u0435\u0442\u044B
      float along = dot(p, uSun);
      float perp = length(p - uSun * along);
      float sh = along < 0.0 ? mix(0.45, 1.0, smoothstep(0.93, 1.05, perp)) : 1.0;   // \u043F\u043E\u043B\u0443\u0442\u0435\u043D\u044C \u2014 \u043A\u043E\u043D\u0442\u0440\u043E\u0432\u043E\u0439 \u043D\u0435 \u0433\u0430\u0441\u043D\u0435\u0442
      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      gl_Position = projectionMatrix * mv;
      float d = max(0.02, -mv.z);
      float natural = aSize * uScale / max(d, 0.55);
      gl_PointSize = clamp(natural, 1.6 * uPx, 3.6 * uPx);   // \u0432\u0431\u043B\u0438\u0437\u0438 \u043D\u0435 \u0440\u0430\u0441\u0442\u0443\u0442 \u2014 \u043C\u0435\u043B\u043A\u043E \u0438 \u043F\u043B\u043E\u0442\u043D\u043E
      // 11ah: \u0442\u043E\u0447\u043A\u0430 \u043C\u0435\u043B\u044C\u0447\u0435 \u043F\u0438\u043A\u0441\u0435\u043B\u044F \u043D\u0435 \u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044F \xAB\u0446\u0435\u043B\u044B\u043C \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u043C\xBB \u2014 \u0433\u0430\u0441\u0438\u043C \u0435\u0451 \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E \u043F\u043B\u043E\u0449\u0430\u0434\u0438, \u0438\u043D\u0430\u0447\u0435 \u0432\u0434\u0430\u043B\u0438 \u0440\u044F\u0431\u044C
      vSub = clamp(natural * natural / (gl_PointSize * gl_PointSize), 0.12, 1.0);
      vec3 V = normalize(p - cameraPosition);
      vPhase = smoothstep(0.30, 0.98, dot(V, uSun));                 // \u043A\u043E\u043D\u0442\u0440\u043E\u0432\u043E\u0439 \u0441\u0432\u0435\u0442: \u043F\u0440\u044F\u043C\u043E\u0435 \u0440\u0430\u0441\u0441\u0435\u044F\u043D\u0438\u0435
      float lit = 0.45 + 0.55 * abs(uSun.y);
      // \u0441\u0442\u043E\u0440\u043E\u043D\u0430 \u043A\u043E\u043B\u0435\u0446, \u043E\u0431\u0440\u0430\u0449\u0451\u043D\u043D\u0430\u044F \u043A \u043A\u0430\u043C\u0435\u0440\u0435: \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0430 \u0438\u043B\u0438 \u043D\u0435\u0442
      float sameSide = 0.55 + 0.45 * step(0.0, sign(uSun.y) * sign(cameraPosition.y));
      vA = aDens * sh * (0.5 * lit * sameSide + 1.1 * vPhase);
      vCol = mix(aCol * vec3(1.06, 1.0, 0.9), vec3(1.0, 0.97, 0.88), vPhase * 0.85);
      vNear = smoothstep(0.15, 1.2, d);
    }`,fragmentShader:`varying float vA, vPhase, vNear, vSub; varying vec3 vCol;
    void main(){
      vec2 c = gl_PointCoord - 0.5; float r = dot(c, c); if (r > 0.25) discard;
      float a = exp(-r * 14.0) * (1.0 - smoothstep(0.16, 0.25, r)) * vA * vNear * vSub;   // \u043C\u044F\u0433\u043A\u0438\u0439 \u043A\u0440\u0430\u0439
      gl_FragColor = vec4(vCol * (1.0 + vPhase * 1.6), a);
    }`,transparent:!0,depthWrite:!1,depthTest:!0,blending:bh}),pe=new Ri(_e,Me);pe.renderOrder=3,m.add(pe);let Ie=(function(){let ee=o?420:680,ne=new Float32Array(ee*3),ce=new Float32Array(ee),de=new Float32Array(ee),Le=7,Re=()=>(Le=Le*16807%2147483647,(Le-1)/2147483646);for(let De=0;De<ee;De++){let Be=Re()*Math.PI*2,tt=Re()*2-1,et=Math.sqrt(1-tt*tt),St=90+Re()*40;ne[De*3]=et*Math.cos(Be)*St,ne[De*3+1]=tt*St,ne[De*3+2]=et*Math.sin(Be)*St,ce[De]=.6+Math.pow(Re(),3)*2.2,de[De]=Re()*6.28}let Pe=new st;Pe.setAttribute("position",new rt(ne,3)),Pe.setAttribute("aSize",new rt(ce,1)),Pe.setAttribute("aPh",new rt(de,1));let He=new it({uniforms:{uTime:V,uPx:{value:1},uCol:{value:l.off}},vertexShader:`attribute float aSize, aPh; uniform float uTime, uPx; varying float vA;
      void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv;
        float tw = 0.75 + 0.25 * sin(uTime * (0.9 + aPh * 0.3) + aPh * 7.0);
        gl_PointSize = aSize * uPx * (0.85 + 0.15 * tw); vA = (0.35 + 0.5 * (aSize - 0.6) / 2.2) * tw; }`,fragmentShader:`uniform vec3 uCol; varying float vA;
      void main(){ vec2 c = gl_PointCoord - 0.5; float r = dot(c, c); if (r > 0.25) discard; gl_FragColor = vec4(uCol, smoothstep(0.25, 0.02, r) * vA); }`,transparent:!0,depthWrite:!1});return new Ri(Pe,He)})();m.add(Ie);function ye(ee,ne){let de=document.createElement("canvas");de.width=256,de.height=256;let Le=de.getContext("2d"),Re=Le.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);Re.addColorStop(0,ee),Re.addColorStop(.05,ee),Re.addColorStop(.13,ne),Re.addColorStop(.36,"rgba(226,200,146,0.09)"),Re.addColorStop(1,"rgba(226,200,146,0)"),Le.fillStyle=Re,Le.fillRect(0,0,256,256);let Pe=new Ci(de);return Pe.colorSpace=ct,Pe}let Fe=new T(-.28,-.1,-.956).normalize(),fe=new xa(new ts({map:ye("rgba(255,252,245,1)","rgba(226,200,146,0.55)"),color:16777215,blending:Yt,depthWrite:!1,depthTest:!0,transparent:!0}));fe.position.copy(Fe).multiplyScalar(140),fe.scale.set(22,22,1),fe.material.color.setRGB(1.8,1.7,1.5),m.add(fe);let oe=(ee,ne)=>new ii({color:ee,metalness:.88,roughness:ne,envMapIntensity:.9}),be={hull:oe(l.off,.34),gold:oe(l.champ,.3),dark:oe(l.navy2,.45),bronze:oe(l.bronze,.4)};function ve(ee){return ee.traverse(ne=>{ne.isMesh&&(ne.castShadow=!0,ne.receiveShadow=!0)}),ee}function Oe(ee,ne){let ce=new Qt,de=new qt(ne,ne,ee,6);for(let Pe=0;Pe<3;Pe++){let He=new Ne(de,be.hull),De=Pe*2.094;He.position.set(Math.cos(De)*ne*4,Math.sin(De)*ne*4,0),He.rotation.x=Math.PI/2,ce.add(He)}let Le=Math.round(ee/(ne*12)),Re=new qt(ne*.6,ne*.6,ne*8,5);for(let Pe=0;Pe<=Le;Pe++){let He=-ee/2+Pe*(ee/Le);for(let De=0;De<3;De++){let Be=new Ne(Re,be.bronze),tt=De*2.094+1.047;Be.position.set(Math.cos(tt)*ne*2,Math.sin(tt)*ne*2,He),Be.rotation.z=tt+Math.PI/2,ce.add(Be)}}return ce}function $(ee,ne){let ce=new Ne(new qt(ee*.45,ee,ne,24,1,!0),be.dark);return ce.rotation.x=-Math.PI/2,ce}function W(){let ee=new Qt,ne=[new te(0,.12),new te(.012,.1),new te(.024,.05),new te(.028,-.02),new te(.025,-.07),new te(.018,-.1),new te(0,-.1)],ce=new Ne(new fn(ne,40),be.hull);ce.rotation.x=Math.PI/2,ee.add(ce);let de=new Ne(new hs(.0285,.004,10,40),be.gold);de.position.z=.01,ee.add(de);let Le=new si(.003,.055,.05);for(let He=0;He<3;He++){let De=new Ne(Le,He?be.hull:be.bronze),Be=He*2.094+Math.PI/2;De.position.set(Math.cos(Be)*.04,Math.sin(Be)*.04,-.075),De.rotation.z=Be-Math.PI/2,ee.add(De)}let Re=$(.016,.03);Re.position.z=-.11,ee.add(Re);let Pe=new Ne(new ti(.012,16,12),be.dark);return Pe.position.set(0,.018,.06),ee.add(Pe),ee.userData.nozzle=new T(0,0,-.125),ee.userData.len=.23,ve(ee)}function K(ee,ne){let ce=b(ee,ne),de=ce.clone().negate(),Le=new T().crossVectors(de,new T(0,1,0)).normalize(),Re=new T().crossVectors(Le,de).normalize();return{dir:ce,f:de,right:Le,up:Re}}function Q(ee,ne,ce){let de=Math.max(0,Math.min(1,(ce-ee)/(ne-ee)));return de*de*(3-2*de)}let Ae=Math.PI*2,Ee=1.6,D=100,We=[1e9,1000000001],ft=u,Ve=4,Lt=[0,7],Jt=[101,119],Zi=5.2;function gt(ee){let ne=ee<Ve?ee*ee/(2*Ve):ee-Ve/2,ce=Math.min(1,ne/(D-Ve/2));return 1-Math.pow(1-ce,3)}function zt(ee){let ne=(ee%c+c)%c,ce=gt(ne);return{az:-150+185*(1-Math.pow(1-ce,1.94)),el:62-44*(1-Math.pow(1-ce,2.4)),k:.8+.45*(1-Math.pow(1-ce,3)),fx:.62+.05*(1-Math.pow(1-ce,3)),fy:.5,dx:0,dy:0}}function Di(ee){return 0}function Ki(ee){let ne=zt(ee),ce=K(ne.az,ne.el),de=Math.tan(y/2*Math.PI/180),Le=Ee<1?ne.k*.82:ne.k,Re=Ee<1?.78:ne.fx,Pe=1/(Le*de),He=Pe*de*Ee,De=Pe*de,Be=-(Re*2-1)*He,tt=(ne.fy*2-1)*De,et=ce.dir.clone().multiplyScalar(Pe).add(ce.right.clone().multiplyScalar(Be+ne.dx)).add(ce.up.clone().multiplyScalar(tt+ne.dy)),St=(ee%c+c)%c,kt=1-Q(Lt[0],Lt[1],St),Dr=Q(Jt[0],Jt[1],St);ci.copy(ce.up).multiplyScalar(Zi*(Dr*Dr-kt*kt)),et.add(ci);let ys=ce.f.clone();return{pos:et,target:et.clone().add(ys),az:ne.az,basis:ce}}let ci=new T;function hi(ee,ne){return ee.right.clone().multiplyScalar(ne[0]).add(ee.up.clone().multiplyScalar(ne[1])).add(ee.dir.clone().multiplyScalar(ne[2]))}let Vn=new te(1,1),Lr=[];function Sn(ee,ne){let ce=new li({color:16777215,linewidth:ee,vertexColors:!0,transparent:!0,opacity:1,depthTest:!0,depthWrite:!1,resolution:Vn});ce.blending=Yt;let de=new Ii,Le=new Float32Array(ne*3),Re=new Float32Array(ne*3);for(let He=0;He<ne;He++)Le[He*3+2]=He*.001;de.setPositions(Le),de.setColors(Re),Lr.push(ce);let Pe=new Mn(de,ce);return Pe.frustumCulled=!1,Pe.visible=!1,Pe}function Ur(ee,ne,ce,de){let Le=ee.geometry,Re=de-1;if(Re<1){ee.visible=!1;return}let Pe=Le.attributes.instanceStart.data,He=Le.attributes.instanceColorStart.data,De=Pe.array,Be=He.array;for(let tt=0;tt<Re;tt++){let et=tt*6,St=tt*3,kt=St+3;De[et]=ne[St],De[et+1]=ne[St+1],De[et+2]=ne[St+2],De[et+3]=ne[kt],De[et+4]=ne[kt+1],De[et+5]=ne[kt+2],Be[et]=ce[St],Be[et+1]=ce[St+1],Be[et+2]=ce[St+2],Be[et+3]=ce[kt],Be[et+4]=ce[kt+1],Be[et+5]=ce[kt+2]}Pe.needsUpdate=!0,He.needsUpdate=!0,Le.instanceCount=Re,ee.visible=!0}let _t=W();_t.visible=!1,m.add(_t);let bn=p[0],Wn=p[1],R=null,J=1,ie=new T,ue=g.map(()=>new T);function le(){E.updateMatrixWorld(),g.forEach(([ee,ne,ce],de)=>{ue[de].set(ee*2-1,1-2*ne*J/ut,.5).unproject(E).sub(E.position).normalize().multiplyScalar(ce).add(E.position).sub(ci)}),ie.set(0,1,0).applyQuaternion(E.quaternion),R=new ns(ue,!1,"centripetal",.5)}let Se=200,ze=Sn(.8,Se);m.add(ze);let ke=new Float32Array(Se*3),qe=new Float32Array(Se*3),je=Sn(2.4,2);m.add(je);let Xe=new Float32Array(6),Ye=new Float32Array([1,.92,.72,0,0,0]),ht=new T,Et=new T;function ui(ee){let ne=(ee%c+c)%c,ce=(ne-bn)/(Wn-bn);if(ce<=0||ce>=1){_t.visible=!1,ze.visible=!1,je.visible=!1;return}le();let de=ce;R.getPoint(de,ht),R.getTangent(de,Et).normalize(),_t.position.copy(ht),_t.up.copy(ie),_t.lookAt(ht.clone().add(Et));let Le=Q(bn,bn+3,ne)*(1-Q(Wn-3,Wn,ne));_t.scale.setScalar(x*Math.max(1e-4,Le)),_t.visible=Le>.002;let Re=f;for(let De=0;De<Se;De++){let Be=De/(Se-1),tt=de*Be;R.getPoint(tt,Et),ke[De*3]=Et.x,ke[De*3+1]=Et.y,ke[De*3+2]=Et.z;let et=Math.pow(Be,2.2)*.3*Le;qe[De*3]=l.champ.r*et,qe[De*3+1]=l.champ.g*et,qe[De*3+2]=l.champ.b*et}Ur(ze,ke,qe,Se),R.getTangent(de,Et).normalize();let Pe=_t.localToWorld(_t.userData.nozzle.clone()),He=Pe.clone().sub(Et.multiplyScalar(.05*x));Xe[0]=Pe.x,Xe[1]=Pe.y,Xe[2]=Pe.z,Xe[3]=He.x,Xe[4]=He.y,Xe[5]=He.z,Ye[0]=1*Le,Ye[1]=.92*Le,Ye[2]=.72*Le,Ur(je,Xe,Ye,2)}let Ht=new vn(v,new bt(1,1,{type:Ut,samples:2}));Ht.addPass(new yn(m,E)),Ht.addPass(new Ji({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv);
    bool bad = !(c.r == c.r && c.g == c.g && c.b == c.b) || max(max(c.r, c.g), c.b) > 6.0e4;
    gl_FragColor = bad ? vec4(0.059, 0.129, 0.212, 1.0) : vec4(min(c.rgb, vec3(64.0)), c.a); }`}));let pt=new _i(new te(512,512),o?.55:.65,.5,1);Ht.addPass(pt),Ht.addPass(new xn);let Mt=new Ji({uniforms:{tDiffuse:{value:null},uTime:V,uFade:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uFade; varying vec2 vUv;
    void main(){ vec4 c = texture2D(tDiffuse, vUv); vec2 p = vUv - 0.5;
      float v = 1.0 - smoothstep(0.32, 0.98, length(p) * 1.2) * 0.3;
      float n = fract(sin(dot(vUv * vec2(1234.5, 876.3) + fract(uTime * 0.37), vec2(12.9898, 78.233))) * 43758.5453) - 0.5;
      gl_FragColor = vec4(mix(c.rgb * v + n * 0.028, vec3(0.059, 0.129, 0.212), uFade), 1.0); }`});Ht.addPass(Mt);let vt=1,ut=1,Ze=r.querySelector("[data-hh-hero]")||r;function nt(){let ee=t.getBoundingClientRect();vt=Math.max(1,Math.round(ee.width)),ut=Math.max(1,Math.round(ee.height));let ne=Math.max(1,Math.round(Ze?Ze.getBoundingClientRect().height:ut));J=ne;let ce=Math.max(ut,2*ut-ne);Ee=vt/ne,Cr(v,vt,ut,1440*792*2.2),v.setSize(vt,ut,!1),Ht.setSize(vt,ut),E.aspect=vt/ce,E.fov=2*Math.atan(Math.tan(y/2*Math.PI/180)*ce/ne)*180/Math.PI,E.setViewOffset(vt,ce,0,ut-ne,vt,ut),E.updateProjectionMatrix();let de=v.getPixelRatio();Vn.set(vt*de,ut*de),Lr.forEach(Le=>Le.resolution.copy(Vn)),Me.uniforms.uPx.value=de,Ie.material.uniforms.uPx.value=de,Me.uniforms.uScale.value=ne*de/2/Math.tan(y/2*Math.PI/180)}nt(),Pr(r,()=>{nt(),di||En()});let xi={pos:new T,target:new T};function Qi(ee,ne){let ce=(ee%c+c)%c;V.value=ee;let de=Ki(ce),Le=de.az*Math.PI/180,Re=d*ce;ge.rotation.y=Le+Re,pe.rotation.y=Le+Re*.35,xi.pos.copy(de.pos),xi.target.copy(de.target),E.position.copy(xi.pos),E.lookAt(xi.target),fe.material.opacity=Q(-125,-85,de.az)*(1-Q(14,34,de.az)),ui(ee),Mt.uniforms.uFade.value=Di(ee);let Pe=E.position.clone().negate().normalize().dot(A),He=Q(.35,.95,Pe);return G.emissiveIntensity=.6+1.3*He,G.opacity=.85,pt.strength=(o?.55:.65)*(1-.5*He),pt.threshold=1+.3*He,{t:ce}}function En(){Ht.render()}let di=!1,Tn=null,$i=null,Ni=0,fs=!0,Ir=!1;function wn(ee){if(!di||r.dataset.hhStatus==="fallback")return;$i===null&&($i=ee);let ne=Math.min(.05,(ee-$i)/1e3);$i=ee,Ni+=ne,ee-(wn.ld||-1e9)>=24&&(wn.ld=ee,Qi(Ni,ne),En()),Tn=requestAnimationFrame(wn)}function ms(){di||(di=!0,$i=null,Tn=requestAnimationFrame(wn))}function gs(){di=!1,Tn&&cancelAnimationFrame(Tn),Tn=null}function $e(){fs&&!document.hidden&&!Ir&&!a?ms():gs()}new IntersectionObserver(ee=>{fs=ee[0].isIntersecting,$e()},{threshold:.02}).observe(t),document.addEventListener("visibilitychange",$e);let vs;addEventListener("resize",()=>{clearTimeout(vs),vs=setTimeout(()=>{nt(),di||(Qi(Ni,0),En())},120)}),e.__seek=function(ee){return Ir=!0,gs(),Ni=ee,Qi(ee,0),En(),e.__state()},e.__play=function(){Ir=!1,$i=null,$e()},e.__scene=m,e.__state=function(){let ee=(Ni%c+c)%c,ne=_t.position.clone().project(E);return{t:+ee.toFixed(2),cycle:c,cam:E.position.toArray().map(ce=>+ce.toFixed(3)),ship:{on:_t.visible,sc:+_t.scale.x.toFixed(4),x:+((ne.x+1)/2*vt).toFixed(0),y:+((1-ne.y)/2*ut).toFixed(0),z:+ne.z.toFixed(3)}}},s!==null&&!isNaN(s)?e.__seek(s):a?e.__seek(u):(Ni=u,Qi(Ni,0),En(),r.classList.add("fx-ready"),$e()),r.dataset.hhStatus!=="fallback"&&(r.dataset.hhStatus="ready")}function $h(r){let e={},t=new URLSearchParams(location.search),i=matchMedia("(prefers-reduced-motion:reduce)").matches,n=matchMedia("(max-width:1000px)").matches,s={navy:new Te("#0F2136"),navy2:new Te("#16324F"),bronze:new Te("#B08D57"),champ:new Te("#E2C892"),off:new Te("#F2EDE3"),beige:new Te("#E9E1D2")};function a(f,y,v){let m=Math.max(0,Math.min(1,(v-f)/(y-f)));return m*m*(3-2*m)}function o(f){let y=f;return()=>(y=y*16807%2147483647,(y-1)/2147483646)}let l=`
  float h3(vec3 p){ p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3)); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float n3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z); }
  float fbm3(vec3 p){ float v = 0.0, a = 0.5; for (int k = 0; k < 6; k++) { v += a * n3(p); p = p * 2.02 + vec3(3.1, 1.7, 5.3); a *= 0.5; } return v; }`;function c(f,y,v,m,E){let M={inited:!1,playing:!1,raf:null,prevTs:null,clock:0,inView:!1,seeked:!1},b=null;function A(){if(!M.inited){M.inited=!0;try{b=v()}catch(B){Gn(r,B);return}Pr(r,()=>{b.resize(),M.playing||b.render()}),b.resize(),addEventListener("resize",()=>{clearTimeout(M.rz),M.rz=setTimeout(()=>{b.resize(),M.playing||(b.update(M.clock,0),b.render())},120)})}}function N(B){if(!M.playing||r.dataset.hhStatus==="fallback")return;M.prevTs===null&&(M.prevTs=B);let re=Math.min(.05,(B-M.prevTs)/1e3);M.prevTs=B,M.clock+=re,b.update(M.clock,re),b.render(),M.raf=requestAnimationFrame(N)}function I(){M.playing||!b||(M.playing=!0,M.prevTs=null,M.raf=requestAnimationFrame(N))}function F(){M.playing=!1,M.raf&&cancelAnimationFrame(M.raf),M.raf=null}function U(){M.inView&&!document.hidden&&!M.seeked&&!i?I():F()}function P(B){A(),M.seeked=!0,F(),M.clock=B;let re=4,he=120;for(let j=0;j<=he;j++)b.update(B-re+re*j/he,j?re/he:0);return b.render(),{t:B}}new IntersectionObserver((B,re)=>{if(B[0].isIntersecting&&!M.inited){if(A(),!b)return;b.update(M.clock,0),b.render(),re.disconnect()}},{rootMargin:"1800px 0px"}).observe(f),new IntersectionObserver(B=>{if(M.inView=B[0].isIntersecting,M.inView&&!M.inited){if(A(),!b)return;if(b.update(M.clock,0),b.render(),i){P(b.staticT||0);return}}U()},{threshold:.02,rootMargin:"120px 0px"}).observe(f),document.addEventListener("visibilitychange",U),e[E]=P,e[E.replace("seek","play")]=()=>{M.seeked=!1,M.prevTs=null,U()};let X=t.has(m)?parseFloat(t.get(m)):null;return X!==null&&!isNaN(X)&&P(X),M}function h(f,y,v,m,E,M,b){let A=new li({color:f,linewidth:y,vertexColors:!0,dashed:v,dashSize:6,gapSize:5,transparent:!0,opacity:m,depthTest:!1,depthWrite:!1,resolution:M});b&&(A.blending=b);let N=new Ii,I=E,F=new Float32Array(I*3),U=new Float32Array(I*3);for(let X=0;X<I;X++)F[X*3+2]=X*.001,U[X*3]=U[X*3+1]=U[X*3+2]=1;N.setPositions(F),N.setColors(U);let P=new Mn(N,A);return P.computeLineDistances(),P.frustumCulled=!1,P.visible=!1,P}function d(f,y,v,m){let E=f.geometry,M=m-1;if(M<1){f.visible=!1;return}let b=E.attributes.instanceStart.data,A=E.attributes.instanceColorStart.data,N=E.attributes.instanceDistanceStart.data,I=b.array,F=A.array,U=N.array,P=0;for(let X=0;X<M;X++){let B=X*6,re=X*3,he=re+3;I[B]=y[re],I[B+1]=y[re+1],I[B+2]=y[re+2],I[B+3]=y[he],I[B+4]=y[he+1],I[B+5]=y[he+2],F[B]=v[re],F[B+1]=v[re+1],F[B+2]=v[re+2],F[B+3]=v[he],F[B+4]=v[he+1],F[B+5]=v[he+2],U[X*2]=P,P+=Math.hypot(y[he]-y[re],y[he+1]-y[re+1],y[he+2]-y[re+2]),U[X*2+1]=P}b.needsUpdate=!0,A.needsUpdate=!0,N.needsUpdate=!0,E.instanceCount=M,f.visible=!0}function u(f){let y=new qi({canvas:f,antialias:!0,powerPreference:"high-performance"});return y.setPixelRatio(Math.min(devicePixelRatio||1,n?1.25:1.5)),y.outputColorSpace=ct,y.toneMapping=Yi,y.toneMappingExposure=.95,y}function p(f,y){let m=document.createElement("canvas");m.width=256,m.height=256;let E=m.getContext("2d"),M=E.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);M.addColorStop(0,f),M.addColorStop(.18,y),M.addColorStop(.5,"rgba(226,200,146,0.06)"),M.addColorStop(1,"rgba(226,200,146,0)"),E.fillStyle=M,E.fillRect(0,0,256,256);let b=new Ci(m);return b.colorSpace=ct,b}let g=r.querySelector("#engScene"),x=r.querySelector("#engCanvas");g&&x&&c(g,x,()=>{_r(x,"eng");let f=40,y=2.6,v=42,m=40*Math.PI/180,E=4,M=new te(Math.cos(m),Math.sin(m)),b=g.getBoundingClientRect().width<=600,A=.95;function N($){let W=A/.6,K=$[0]*W,Q=$[1]*W,Ae=$[2]*W,Ee=.59719*K+.35458*Q+.04823*Ae,D=.076*K+.90834*Q+.01566*Ae,We=.0284*K+.13383*Q+.83777*Ae,ft=Ve=>(Ve*(Ve+.0245786)-90537e-9)/(Ve*(.983729*Ve+.432951)+.238081);return Ee=ft(Ee),D=ft(D),We=ft(We),K=1.60475*Ee-.53108*D-.07367*We,Q=-.10208*Ee+1.10813*D-.00605*We,Ae=-.00327*Ee-.07276*D+1.07602*We,[Math.min(1,Math.max(0,K)),Math.min(1,Math.max(0,Q)),Math.min(1,Math.max(0,Ae))]}function I($){let W=new Te($),K=[W.r,W.g,W.b],Q=K.slice();for(let Ae=0;Ae<120;Ae++){let Ee=N(Q);for(let D=0;D<3;D++)Q[D]=Math.max(0,Q[D]+(K[D]-Ee[D])*.9)}return new Te(Q[0],Q[1],Q[2])}let F=I("#0C1E3A"),U=I("#123258"),P=I("#060F22");function X($){let W=$>>>0;return()=>{W|=0,W=W+1831565813|0;let K=Math.imul(W^W>>>15,1|W);return K=K+Math.imul(K^K>>>7,61|K)^K,((K^K>>>14)>>>0)/4294967296}}function B($,W,K){let Q=Math.sin($*127.1+W*311.7+K*74.7)*43758.5453;return Q-Math.floor(Q)}function re($,W,K){let Q=Math.floor($),Ae=Math.floor(W),Ee=Math.floor(K),D=$-Q,We=W-Ae,ft=K-Ee;D=D*D*(3-2*D),We=We*We*(3-2*We),ft=ft*ft*(3-2*ft);let Ve=(zt,Di,Ki)=>zt+(Di-zt)*Ki,Lt=Ve(B(Q,Ae,Ee),B(Q+1,Ae,Ee),D),Jt=Ve(B(Q,Ae+1,Ee),B(Q+1,Ae+1,Ee),D),Zi=Ve(B(Q,Ae,Ee+1),B(Q+1,Ae,Ee+1),D),gt=Ve(B(Q,Ae+1,Ee+1),B(Q+1,Ae+1,Ee+1),D);return Ve(Ve(Lt,Jt,We),Ve(Zi,gt,We),ft)*2-1}function he($,W,K,Q){let Ae=.5,Ee=0,D=1;for(let We=0;We<Q;We++)Ee+=Ae*re($*D,W*D,K*D),D*=2.03,Ae*=.5;return Ee}function j($,W){let K=new ls(1,2),Q=K.attributes.position,Ae=$()*1e3,Ee=1.1+$()*.9,D=.22+$()*.22,We=.06+$()*.08,ft=.62+$()*.72,Ve=.62+$()*.72,Lt=.62+$()*.72,Jt=[],Zi=2+Math.floor($()*4);for(let zt=0;zt<Zi;zt++)Jt.push({d:new T($()*2-1,$()*2-1,$()*2-1).normalize(),c:.66+$()*.26});let gt=new T;for(let zt=0;zt<Q.count;zt++){gt.fromBufferAttribute(Q,zt);let Di=he(gt.x*Ee+Ae,gt.y*Ee+Ae*.7,gt.z*Ee-Ae*.3,3),Ki=re(gt.x*4.5+Ae,gt.y*4.5,gt.z*4.5);gt.multiplyScalar(1+D*Di+We*Ki);for(let ci of Jt){let hi=gt.dot(ci.d);hi>ci.c&&gt.addScaledVector(ci.d,-(hi-ci.c))}gt.x*=ft,gt.y*=Ve,gt.z*=Lt,Q.setXYZ(zt,gt.x*W,gt.y*W,gt.z*W)}return K.computeVertexNormals(),K.computeBoundingSphere(),K}let q=["#F2EDE3","#E9E1D2","#E2C892","#B08D57","#E9E1D2","#E2C892"];function V($){let W=new Te(q[Math.floor($()*q.length)]),K={};return W.getHSL(K),W.setHSL(K.h+($()-.5)*.02,Math.max(0,K.s+($()-.5)*.14),Math.min(.95,Math.max(.28,K.l+($()-.5)*.28))),new ii({color:W,roughness:.85+$()*.15,metalness:0,flatShading:!0,transparent:!0})}function ae(){let $=document.createElement("canvas");$.width=$.height=64;let W=$.getContext("2d"),K=W.createRadialGradient(32,32,0,32,32,32);K.addColorStop(0,"rgba(255,255,255,1)"),K.addColorStop(.3,"rgba(255,255,255,.6)"),K.addColorStop(1,"rgba(255,255,255,0)"),W.fillStyle=K,W.fillRect(0,0,64,64);let Q=new Ci($);return Q.colorSpace=ct,Q}let Z=u(x);Z.shadowMap.enabled=!0,Z.shadowMap.type=Il;let ge=new Ai;ge.fog=new va(F.clone(),9,v-8);let we=new wt(f,1,.1,200);ge.add(we);let Ue=new T(-.62,.46,.64).normalize(),me=new ji(16774108,3.5);me.target.position.set(0,0,-11),me.position.copy(me.target.position).addScaledVector(Ue,26),me.castShadow=!0,me.shadow.mapSize.set(b?1024:2048,b?1024:2048),me.shadow.camera.left=-9,me.shadow.camera.right=9,me.shadow.camera.top=9,me.shadow.camera.bottom=-9,me.shadow.camera.near=4,me.shadow.camera.far=48,me.shadow.bias=-5e-4,me.shadow.normalBias=.03,ge.add(me,me.target),ge.add(new mn(s.navy2,.95));let Ce=new ji(s.champ,1.7);Ce.position.set(9,-5,-30),Ce.target.position.set(0,0,0),ge.add(Ce,Ce.target);let C=new Ne(new Mr(2,2),new it({uniforms:{uRes:{value:new te(1,1)},uTime:{value:0},cNavy:{value:F},cNavy2:{value:U},cDeep:{value:P},cGlow:{value:s.champ},uDir:{value:M},uVP:{value:new te(.5,.5)}},depthWrite:!1,depthTest:!1,vertexShader:"void main(){ gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:`
      precision highp float;
      uniform vec2 uRes, uDir, uVP; uniform float uTime; uniform vec3 cNavy, cNavy2, cDeep, cGlow;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y); }
      void main(){
        vec2 uv = gl_FragCoord.xy / uRes;
        float ar = uRes.x / uRes.y;
        vec2 p = (uv - uVP) * vec2(ar, 1.0);
        float r = length(p);
        vec3 col = mix(cNavy2, cNavy, smoothstep(0.0, 0.5, r));
        col = mix(col, cDeep, smoothstep(0.45, 0.95, r));
        vec2 n = vec2(-uDir.y, uDir.x);
        float d = dot(p, n), along = dot(p, uDir);
        float cloud = 0.55 + 0.45 * vn(vec2(along * 2.2, d * 6.0) + 3.1);
        cloud *= 0.7 + 0.3 * vn(vec2(along * 5.0, d * 14.0) + 9.7);
        // \u041C\u043B\u0435\u0447\u043D\u044B\u0439 \u041F\u0443\u0442\u044C: \u0448\u0438\u0440\u043E\u043A\u0430\u044F \u0440\u0430\u0437\u043C\u044B\u0442\u0430\u044F \u043B\u0435\u043D\u0442\u0430 + \u0443\u0437\u043A\u043E\u0435 \u044F\u0434\u0440\u043E; \u043E\u0431\u0449\u0435\u0435 \u0441\u0432\u0435\u0447\u0435\u043D\u0438\u0435 \u0437\u043E\u043D\u044B \u043F\u043E\u044F\u0441\u0430 \u2014 \u0441\u0430\u043C\u0430\u044F \u0448\u0438\u0440\u043E\u043A\u0430\u044F \u0433\u0430\u0443\u0441\u0441\u043E\u0432\u0430
        float band = exp(-d * d / (2.0 * 0.24 * 0.24)) * 0.8 + exp(-d * d / (2.0 * 0.07 * 0.07)) * 0.5;
        band *= cloud * (0.75 + 0.25 * smoothstep(-0.9, 0.6, along));
        float halo = exp(-d * d / (2.0 * 0.42 * 0.42)) * 0.5;
        col += cGlow * (band * 0.10 + halo * 0.03);
        col = mix(col, cNavy2, band * 0.34 + halo * 0.18);
        // \u043D\u0438\u0437 \u043A\u0430\u0434\u0440\u0430 \u2014 \u0437\u043E\u043D\u0430 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E: \u0443\u0445\u043E\u0434\u0438\u043C \u0432 \u0433\u043B\u0443\u0431\u043E\u043A\u0438\u0439 \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u044B\u0439 \u0441\u0438\u043D\u0438\u0439
        col = mix(cDeep * 0.72, col, smoothstep(0.0, 0.62, uv.y));
        col += (hash(gl_FragCoord.xy + fract(uTime) * 61.0) - 0.5) * 0.006;
        gl_FragColor = vec4(col, 1.0);
      }`}));C.frustumCulled=!1,C.renderOrder=-10,ge.add(C);let w=(()=>{let $=b?70:150,W=new Float32Array($*3),K=new Float32Array($),Q=new Float32Array($),Ae=X(7);for(let We=0;We<$;We++)W[We*3]=(Ae()-.5)*152,W[We*3+1]=(Ae()-.5)*80,W[We*3+2]=-v-40+Ae()*10,K[We]=Ae()*6.283,Q[We]=.5+Ae()*1.2;let Ee=new st;Ee.setAttribute("position",new rt(W,3)),Ee.setAttribute("aPh",new rt(K,1)),Ee.setAttribute("aSz",new rt(Q,1));let D=new Ri(Ee,new it({uniforms:{uTime:{value:0},uPR:{value:1},cStar:{value:s.off}},transparent:!0,depthWrite:!1,blending:Yt,vertexShader:`attribute float aPh, aSz; uniform float uTime, uPR; varying float vA;
        void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); vA = (0.45 + 0.55 * (0.5 + 0.5 * sin(uTime * (0.6 + aSz * 0.4) + aPh))) * 0.7;
          gl_PointSize = aSz * 2.0 * uPR; gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 cStar; varying float vA; void main(){ float r = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.1, r); gl_FragColor = vec4(cStar * a * vA, 1.0); }"}));return D.frustumCulled=!1,ge.add(D),D})(),L=b?450:1e3,z=(()=>{let $=L,W=new Float32Array($*3),K=new Float32Array($),Q=new Float32Array($),Ae=new Float32Array($),Ee=new Float32Array($),D=X(101);for(let Ve=0;Ve<$;Ve++){let Lt=(D()*2-1)*1.7*E,Jt=(D()*2-1)*(D()<.75?.55:1.1);W[Ve*3]=Lt*M.x-Jt*M.y,W[Ve*3+1]=Lt*M.y+Jt*M.x,W[Ve*3+2]=0,K[Ve]=D()*(v-y),Q[Ve]=1.4+D()*1.6,Ae[Ve]=.014+D()*.04,Ee[Ve]=1+D()*3}let We=new st;We.setAttribute("position",new rt(W,3)),We.setAttribute("aZ0",new rt(K,1)),We.setAttribute("aSp",new rt(Q,1)),We.setAttribute("aSz",new rt(Ae,1)),We.setAttribute("aTw",new rt(Ee,1));let ft=new Ri(We,new it({uniforms:{uTime:{value:0},uScale:{value:1},uZn:{value:y},uZf:{value:v},cDust:{value:s.champ},tDust:{value:ae()}},transparent:!0,depthWrite:!1,blending:Yt,vertexShader:`attribute float aZ0, aSp, aSz, aTw; uniform float uTime, uScale, uZn, uZf; varying float vA;
        void main(){
          float L = uZf - uZn;
          float z = -(uZf - mod(aZ0 + aSp * uTime, L));
          vec4 mv = modelViewMatrix * vec4(position.xy, z, 1.0);
          float depth = clamp((-mv.z - uZn) / L, 0.0, 1.0);
          vA = (0.25 + 0.75 * (1.0 - depth)) * smoothstep(uZn, uZn + 2.5, -mv.z) * (0.7 + 0.3 * sin(uTime * aTw + aZ0 * 5.0));
          gl_PointSize = aSz * uScale / -mv.z;
          gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 cDust; uniform sampler2D tDust; varying float vA;
        void main(){ float a = texture2D(tDust, gl_PointCoord).a; gl_FragColor = vec4(cDust * a * vA * 1.15, 1.0); }`}));return ft.frustumCulled=!1,ge.add(ft),ft})(),_=[],k=[],O=new T,S=X(24301),G=b?14:28,H=b?12:30;function se($,W,K){let Q=$.userData,Ae=W()<.5?-1:1,Ee=Q.big?.5:.22,D=Ae*(Ee+(1.45-Ee)*Math.pow(W(),.85))*E,We=(W()*2-1)*(Q.wide?1:.55)*(W()<.2?2:1);$.position.set(D*M.x-We*M.y,D*M.y+We*M.x,K?-(y+1+W()*(v-y-1)):-(v-W()*2))}for(let $=0;$<G;$++){let W=S(),K=W<.45?.07+S()*.08:W<.82?.15+S()*.12:.28+S()*.16,Q=new Ne(j(S,K),V(S));Q.castShadow=!0,Q.receiveShadow=!0,Q.userData={radius:K,axis:new T(S()*2-1,S()*2-1,S()*2-1).normalize(),spin:(S()<.3?.02+S()*.07:.15+S()*.5)*(S()<.5?-1:1),vz:1.1+S()*.9,big:K>.26},Q.quaternion.setFromAxisAngle(new T(S()*2-1,S()*2-1,S()*2-1).normalize(),S()*6.283),se(Q,S,!0),ge.add(Q),_.push(Q)}let Y=[];for(let $=0;$<6;$++)Y.push(j(S,1));let _e=[];for(let $=0;$<4;$++)_e.push(V(S));for(let $=0;$<H;$++){let W=new Ne(Y[$%Y.length],_e[$%_e.length]),K=.035+S()*.05;W.scale.setScalar(K),W.castShadow=!1,W.receiveShadow=!0,W.userData={radius:K,axis:new T(S()*2-1,S()*2-1,S()*2-1).normalize(),spin:(S()<.5?1+S()*2.5:.1+S()*.3)*(S()<.5?-1:1),vz:2+S()*1.6,big:!1,wide:!0},se(W,S,!0),ge.add(W),k.push(W)}let Me=X(555);function pe($,W){for(let K of $){let Q=K.userData;K.position.z+=Q.vz*W,K.rotateOnAxis(Q.axis,Q.spin*W);let Ae=K.position.z>-y;if(!Ae&&K.position.z>-(v-5)){O.copy(K.position).project(we);let D=1+Q.radius*24/-K.position.z;(Math.abs(O.x)>1.25+D||Math.abs(O.y)>1.25+D)&&(Ae=!0)}Ae&&se(K,Me,!1),$===_&&(K.castShadow=K.position.z>-20);let Ee=-K.position.z;$===_&&(K.material.opacity=Ee<y+1.6?Math.max(.15,(Ee-y)/1.6):1)}}let Ie=new bt(1,1,{type:Ut,samples:b?0:4}),ye=new vn(Z,Ie);ye.addPass(new yn(ge,we));let Fe=new _i(new te(512,512),b?.45:.55,.75,.95);ye.addPass(Fe),ye.addPass(new xn);let fe=1,oe=1,be=0;function ve(){let $=g.getBoundingClientRect();fe=Math.max(1,Math.round($.width)),oe=Math.max(1,Math.round($.height)),Cr(Z,fe,oe,1440*828*2.25),Z.setSize(fe,oe,!1),ye.setSize(fe,oe);let W=fe>900,K=r,Q=Math.max(1,Math.round(K?K.getBoundingClientRect().height:oe)),Ae=Math.max(0,oe-Q);we.aspect=fe/oe,we.fov=2*Math.atan(Math.tan(f*Math.PI/360)*oe/Q)*180/Math.PI;let Ee=r.querySelector("[data-hh-heading]"),D=r.querySelector("[data-hh-ways]"),We=$.top,ft=Ee&&D?(Ee.getBoundingClientRect().bottom+D.getBoundingClientRect().top)/2-We:.745*oe,Ve=W?Math.max(.3,Math.min(.9,ft/oe)):.64;we.setViewOffset(fe,oe,W?fe*.11:0,(.5-Ve)*oe+Q*.01,fe,oe),we.updateProjectionMatrix();let Lt=Z.getPixelRatio();C.material.uniforms.uRes.value.set(fe*Lt,oe*Lt),C.material.uniforms.uVP.value.set(W?.39:.5,Ve),w.material.uniforms.uPR.value=Lt,z.material.uniforms.uScale.value=oe*Lt/(2*Math.tan(we.fov*Math.PI/360))}function Oe($,W){if($*=.25,W*=.25,W===0&&$-be>.5){let K=Math.min(1200,Math.round(($-be)/.05));for(let Q=0;Q<K;Q++)pe(_,.05),pe(k,.05)}else W>0&&(pe(_,W),pe(k,W));be=$,C.material.uniforms.uTime.value=$,w.material.uniforms.uTime.value=$,z.material.uniforms.uTime.value=$}return e.__engInfo=()=>({rocks:G,debris:H,dust:L,pr:Z.getPixelRatio(),W:fe,H:oe,near:_.filter($=>$.position.z>-12).map($=>[$.position.x.toFixed(1),$.position.y.toFixed(1),$.position.z.toFixed(1),$.userData.radius.toFixed(2)])}),{resize:ve,update:Oe,render:()=>ye.render(),staticT:6}},"seekEng","__seekEng"),r.dataset.hhStatus!=="fallback"&&(r.dataset.hhStatus="ready")}function eu(r){let e={},t=new URLSearchParams(location.search),i=matchMedia("(prefers-reduced-motion:reduce)").matches,n=matchMedia("(max-width:1000px)").matches,s={navy:new Te("#0F2136"),navy2:new Te("#16324F"),bronze:new Te("#B08D57"),champ:new Te("#E2C892"),off:new Te("#F2EDE3"),beige:new Te("#E9E1D2")};function a(f,y,v){let m=Math.max(0,Math.min(1,(v-f)/(y-f)));return m*m*(3-2*m)}function o(f){let y=f;return()=>(y=y*16807%2147483647,(y-1)/2147483646)}let l=`
  float h3(vec3 p){ p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3)); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float n3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z); }
  float fbm3(vec3 p){ float v = 0.0, a = 0.5; for (int k = 0; k < 6; k++) { v += a * n3(p); p = p * 2.02 + vec3(3.1, 1.7, 5.3); a *= 0.5; } return v; }`;function c(f,y,v,m,E){let M={inited:!1,playing:!1,raf:null,prevTs:null,clock:0,inView:!1,seeked:!1},b=null;function A(){if(!M.inited){M.inited=!0;try{b=v()}catch(B){Gn(r,B);return}Pr(r,()=>{b.resize(),M.playing||b.render()}),b.resize(),addEventListener("resize",()=>{clearTimeout(M.rz),M.rz=setTimeout(()=>{b.resize(),M.playing||(b.update(M.clock,0),b.render())},120)})}}function N(B){if(!M.playing||r.dataset.hhStatus==="fallback")return;M.prevTs===null&&(M.prevTs=B);let re=Math.min(.05,(B-M.prevTs)/1e3);M.prevTs=B,M.clock+=re,b.update(M.clock,re),b.render(),M.raf=requestAnimationFrame(N)}function I(){M.playing||!b||(M.playing=!0,M.prevTs=null,M.raf=requestAnimationFrame(N))}function F(){M.playing=!1,M.raf&&cancelAnimationFrame(M.raf),M.raf=null}function U(){M.inView&&!document.hidden&&!M.seeked&&!i?I():F()}function P(B){A(),M.seeked=!0,F(),M.clock=B;let re=4,he=120;for(let j=0;j<=he;j++)b.update(B-re+re*j/he,j?re/he:0);return b.render(),{t:B}}new IntersectionObserver((B,re)=>{if(B[0].isIntersecting&&!M.inited){if(A(),!b)return;b.update(M.clock,0),b.render(),re.disconnect()}},{rootMargin:"1800px 0px"}).observe(f),new IntersectionObserver(B=>{if(M.inView=B[0].isIntersecting,M.inView&&!M.inited){if(A(),!b)return;if(b.update(M.clock,0),b.render(),i){P(b.staticT||0);return}}U()},{threshold:.02,rootMargin:"120px 0px"}).observe(f),document.addEventListener("visibilitychange",U),e[E]=P,e[E.replace("seek","play")]=()=>{M.seeked=!1,M.prevTs=null,U()};let X=t.has(m)?parseFloat(t.get(m)):null;return X!==null&&!isNaN(X)&&P(X),M}function h(f,y,v,m,E,M,b){let A=new li({color:f,linewidth:y,vertexColors:!0,dashed:v,dashSize:6,gapSize:5,transparent:!0,opacity:m,depthTest:!1,depthWrite:!1,resolution:M});b&&(A.blending=b);let N=new Ii,I=E,F=new Float32Array(I*3),U=new Float32Array(I*3);for(let X=0;X<I;X++)F[X*3+2]=X*.001,U[X*3]=U[X*3+1]=U[X*3+2]=1;N.setPositions(F),N.setColors(U);let P=new Mn(N,A);return P.computeLineDistances(),P.frustumCulled=!1,P.visible=!1,P}function d(f,y,v,m){let E=f.geometry,M=m-1;if(M<1){f.visible=!1;return}let b=E.attributes.instanceStart.data,A=E.attributes.instanceColorStart.data,N=E.attributes.instanceDistanceStart.data,I=b.array,F=A.array,U=N.array,P=0;for(let X=0;X<M;X++){let B=X*6,re=X*3,he=re+3;I[B]=y[re],I[B+1]=y[re+1],I[B+2]=y[re+2],I[B+3]=y[he],I[B+4]=y[he+1],I[B+5]=y[he+2],F[B]=v[re],F[B+1]=v[re+1],F[B+2]=v[re+2],F[B+3]=v[he],F[B+4]=v[he+1],F[B+5]=v[he+2],U[X*2]=P,P+=Math.hypot(y[he]-y[re],y[he+1]-y[re+1],y[he+2]-y[re+2]),U[X*2+1]=P}b.needsUpdate=!0,A.needsUpdate=!0,N.needsUpdate=!0,E.instanceCount=M,f.visible=!0}function u(f){let y=new qi({canvas:f,antialias:!0,powerPreference:"high-performance"});return y.setPixelRatio(Math.min(devicePixelRatio||1,n?1.25:1.5)),y.outputColorSpace=ct,y.toneMapping=Yi,y.toneMappingExposure=.95,y}function p(f,y){let m=document.createElement("canvas");m.width=256,m.height=256;let E=m.getContext("2d"),M=E.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);M.addColorStop(0,f),M.addColorStop(.18,y),M.addColorStop(.5,"rgba(226,200,146,0.06)"),M.addColorStop(1,"rgba(226,200,146,0)"),E.fillStyle=M,E.fillRect(0,0,256,256);let b=new Ci(m);return b.colorSpace=ct,b}let g=r,x=r.querySelector("#earth");g&&x&&c(g,x,()=>{_r(x,"earth");let f=u(x),y=new Ai;y.background=s.navy.clone();let v=new wt(40,2,.1,400);v.position.set(0,0,0),v.lookAt(0,0,-1);let m=new te(1,1),E=[],M=12,b=60*Math.PI/180,A=M/Math.sin(64*Math.PI/180),N=new T(0,-Math.sin(b)*A,-Math.cos(b)*A),I=new Qt;I.position.copy(N),I.rotation.x=-b,y.add(I),I.visible=!1;let F={atmo:1},U=new T(1,-.06,.02).normalize(),P={value:0},X=new it({uniforms:{uSun:{value:U},uOcean:{value:s.navy2},uOceanDay:{value:new Te("#1E3F63")},uOcean2:{value:s.navy},uLand:{value:new Te("#8A7B5E")},uLand2:{value:new Te("#CBC0A4")},uSnow:{value:s.off},uCity:{value:s.champ}},vertexShader:"varying vec3 vN, vL, vW; void main(){ vN = normalize(mat3(modelMatrix) * normal); vL = normal; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 uSun, uOcean, uOceanDay, uOcean2, uLand, uLand2, uSnow, uCity; varying vec3 vN, vL, vW; ${l}
      void main(){
        vec3 n = normalize(vN), l = normalize(vL);
        // \u043A\u043E\u043D\u0442\u0438\u043D\u0435\u043D\u0442\u044B: \u043A\u0440\u0443\u043F\u043D\u044B\u0439 \u0432\u0430\u0440\u043F + \u0436\u0451\u0441\u0442\u043A\u0438\u0439 \u043F\u043E\u0440\u043E\u0433 \u2192 4\u20136 \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043C\u0430\u0441\u0441 \u0441 \u0447\u0451\u0442\u043A\u0438\u043C\u0438 \u0431\u0435\u0440\u0435\u0433\u0430\u043C\u0438; 70 % \u2014 \u0432\u043E\u0434\u0430
        vec3 wv = vec3(fbm3(l * 1.6 + 1.7), fbm3(l * 1.6 + 9.2), fbm3(l * 1.6 + 4.4)) - 0.5;
        float cont = fbm3(l * 1.35 + wv * 1.3) * 0.82 + fbm3(l * 6.0) * 0.18;
        float land = smoothstep(0.545, 0.556, cont);
        float shelf = smoothstep(0.50, 0.545, cont);                     // \u0448\u0435\u043B\u044C\u0444 \u2014 \u043E\u043A\u0435\u0430\u043D \u0447\u0443\u0442\u044C \u0441\u0432\u0435\u0442\u043B\u0435\u0435 \u0443 \u0431\u0435\u0440\u0435\u0433\u0430
        float lat = abs(l.y);
        float snow = smoothstep(0.84, 0.93, lat + (fbm3(l * 6.0) - 0.5) * 0.1);
        float relief = fbm3(l * 12.0);
        vec3 landCol = mix(uLand * 0.55, uLand2 * 0.5, relief) * (0.7 + 0.5 * fbm3(l * 28.0));
        float ndl = dot(n, uSun);
        float day = smoothstep(-0.08, 0.28, ndl);
        vec3 V = normalize(cameraPosition - vW);
        vec3 ocean = mix(uOcean2, mix(uOcean, uOceanDay, day), 0.55 + 0.45 * shelf);
        vec3 surf = mix(ocean, landCol, land); surf = mix(surf, uSnow * 0.85, snow);
        surf = mix(surf, uOceanDay, 0.17 * day);   // \u0445\u043E\u043B\u043E\u0434\u043D\u044B\u0439 \u043F\u043E\u0434\u043C\u0435\u0441 \u043D\u0430 \u0441\u0432\u0435\u0442\u0443 \u2014 \u0432 \u0442\u043E\u043D hero
        // \u0431\u043B\u0438\u043A \u0441\u043E\u043B\u043D\u0446\u0430 \u043D\u0430 \u0432\u043E\u0434\u0435
        vec3 hv = normalize(uSun + V);
        float spec = pow(max(dot(n, hv), 0.0), 60.0) * (1.0 - land) * (1.0 - snow) * day * 0.9;
        vec3 col = surf * (0.06 + 0.78 * day) + spec * uSnow * 0.45;
        // \u043E\u0433\u043D\u0438 \u0433\u043E\u0440\u043E\u0434\u043E\u0432: \u043F\u043B\u043E\u0442\u043D\u044B\u0435 \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u044B \u0432\u0434\u043E\u043B\u044C \u043F\u043E\u0431\u0435\u0440\u0435\u0436\u0438\u0439 \u0438 \u0432\u043D\u0443\u0442\u0440\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u043A\u043E\u0432, \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0443\u0448\u0430 \u2227 \u043D\u043E\u0447\u044C
        float night = 1.0 - smoothstep(-0.22, 0.06, ndl);
        float coast = 1.0 - smoothstep(0.556, 0.60, cont);                // \u0443 \u0431\u0435\u0440\u0435\u0433\u0430 \u043F\u043B\u043E\u0442\u043D\u0435\u0435
        float cluster = smoothstep(0.32, 0.72, fbm3(l * 7.0 + 2.0)) * (0.55 + 0.45 * coast);
        vec3 cell = floor(l * 300.0); float sp = h3(cell);
        vec3 cf = fract(l * 300.0) - 0.5; float dot_ = 1.0 - smoothstep(0.08, 0.36, length(cf));
        float city = step(0.62, sp) * dot_ * cluster * land * (1.0 - snow) * night;
        col += uCity * city * 5.0;
        // \u0443\u0437\u043A\u0430\u044F fresnel-\u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430 \u043F\u043E \u043A\u0440\u0430\u044E \u0434\u0438\u0441\u043A\u0430
        float fr = pow(1.0 - max(dot(n, V), 0.0), 22.0);
        col += mix(uSnow, uLand2, 0.4) * fr * (0.2 + 0.8 * smoothstep(-0.2, 0.4, ndl)) * 0.7;
        gl_FragColor = vec4(col, 1.0); }`}),B=new Ne(new ti(M,160,120),X);I.add(B);let re=new Ne(new ti(M*1.006,128,96),new it({uniforms:{uSun:{value:U},uCol:{value:s.off}},vertexShader:"varying vec3 vN, vL; void main(){ vN = normalize(mat3(modelMatrix) * normal); vL = normal; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uSun, uCol; varying vec3 vN, vL; ${l}
      void main(){ vec3 l = normalize(vL);
        vec3 wv = vec3(fbm3(l * 2.4 + 3.0), fbm3(l * 2.4 + 7.0), fbm3(l * 2.4 + 11.0)) - 0.5;
        float c = fbm3(l * 3.6 + wv * 1.6);                                // \u0437\u0430\u0432\u0438\u0445\u0440\u0435\u043D\u0438\u044F, \u043D\u0435 \u043F\u0435\u043B\u0435\u043D\u0430
        float e = c + (fbm3(l * 12.0) - 0.5) * 0.12 + (fbm3(l * 44.0) - 0.5) * 0.07 + (fbm3(l * 150.0) - 0.5) * 0.035;
        float core = smoothstep(0.52, 0.66, e);   // \u043A \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435 \u043E\u0431\u043B\u0430\u043A\u0430 \u043F\u043B\u043E\u0442\u043D\u0435\u0435, \u043A \u043A\u0440\u0430\u044E \u0442\u043E\u043D\u044C\u0448\u0435 \u2014 \u043E\u0431\u044A\u0451\u043C, \u0430 \u043D\u0435 \u043F\u043B\u043E\u0441\u043A\u0430\u044F \u0432\u044B\u0440\u0435\u0437\u043A\u0430
        float a = smoothstep(0.512, 0.53, e) * (0.42 + 0.4 * core + 0.18 * fbm3(l * 26.0)) * (0.8 + 0.2 * smoothstep(0.3, 0.7, fbm3(l * 95.0))) * 1.25;   // 11ah: \u043E\u0431\u043B\u0430\u043A\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0447\u0451\u0442\u043A\u0438\u0435 \u2014 \u0440\u0435\u0437\u043A\u0430\u044F \u0433\u0440\u0430\u043D\u0438\u0446\u0430, \u043C\u0435\u043B\u043A\u0430\u044F \u0440\u0432\u0430\u043D\u0430\u044F \u0444\u0430\u043A\u0442\u0443\u0440\u0430   // 11ah: \u043E\u0431\u043B\u0430\u043A\u0430 \u0447\u0451\u0442\u043A\u0438\u0435 \u2014 \u0440\u0435\u0437\u043A\u0438\u0439 \u043A\u0440\u0430\u0439 \u0438 \u043C\u0435\u043B\u043A\u0430\u044F \u0444\u0430\u043A\u0442\u0443\u0440\u0430
        float day = smoothstep(-0.1, 0.3, dot(normalize(vN), uSun)); gl_FragColor = vec4(uCol * (0.06 + 1.05 * day), min(1.0, a) * (0.12 + 0.88 * day)); }`,transparent:!0,depthWrite:!1}));I.add(re);let he="varying vec3 vN, vW; void main(){ vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }";function j(fe,oe,be,ve){let Oe=new Ne(new ti(M*fe,128,96),new it({uniforms:{uSun:{value:U},uOff:{value:s.off},uChamp:{value:s.champ},uK:{value:oe},uP:{value:be}},vertexShader:he,fragmentShader:`uniform vec3 uSun, uOff, uChamp; uniform float uK, uP; varying vec3 vN, vW;
        void main(){ vec3 V = normalize(cameraPosition - vW); float d = abs(dot(vN, V));
          float g = ${ve===xt?"pow(smoothstep(0.0, 0.42, d), uP)":"pow(1.0 - d, uP)"};
          float lit = smoothstep(-0.35, 0.35, dot(vN, uSun));
          gl_FragColor = vec4(mix(uOff, uChamp, 0.45) * g * (0.12 + 0.88 * lit) * uK, 1.0); }`,blending:Yt,transparent:!0,depthWrite:!1,side:ve}));return I.add(Oe),Oe}j(1.004,2.3,2,xt),j(1.028,.34,2.4,xt),j(1.055,.09,3.2,xt);let q=(()=>{let oe=new Float32Array(4800),be=new Float32Array(1600),ve=o(77);for(let $=0;$<1600;$++){let W=(ve()-.5)*2,K=ve()*1.3-.05,Q=120;oe[$*3]=Math.sin(W)*Q,oe[$*3+1]=Math.tan(K)*Q,oe[$*3+2]=-Math.cos(W)*Q,be[$]=.7+Math.pow(ve(),3)*2}let Oe=new st;return Oe.setAttribute("position",new rt(oe,3)),Oe.setAttribute("aSize",new rt(be,1)),new Ri(Oe,new it({uniforms:{uPx:{value:1},uCol:{value:s.off}},vertexShader:"attribute float aSize; uniform float uPx; varying float vA; void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = aSize * uPx; vA = 0.34 + 0.5 * (aSize - 0.7) / 2.0; }",fragmentShader:"uniform vec3 uCol; varying float vA; void main(){ vec2 c = gl_PointCoord - 0.5; float r = dot(c, c); if (r > 0.25) discard; gl_FragColor = vec4(uCol, smoothstep(0.25, 0.02, r) * vA); }",transparent:!0,depthWrite:!1}))})();y.add(q);let V=new pn(f);y.environment=V.fromScene(new Ar,.04).texture,V.dispose();let ae=(fe,oe)=>new ii({color:fe,metalness:.88,roughness:oe,envMapIntensity:.9}),Z={hull:ae(s.off,.34),gold:ae(s.champ,.3),dark:ae(s.navy2,.45),bronze:ae(s.bronze,.4)};function ge(fe,oe){let be=new Qt,ve=new qt(oe,oe,fe,6);for(let W=0;W<3;W++){let K=new Ne(ve,Z.hull),Q=W*2.094;K.position.set(Math.cos(Q)*oe*4,Math.sin(Q)*oe*4,0),K.rotation.x=Math.PI/2,be.add(K)}let Oe=Math.round(fe/(oe*12)),$=new qt(oe*.6,oe*.6,oe*8,5);for(let W=0;W<=Oe;W++){let K=-fe/2+W*(fe/Oe);for(let Q=0;Q<3;Q++){let Ae=new Ne($,Z.bronze),Ee=Q*2.094+1.047;Ae.position.set(Math.cos(Ee)*oe*2,Math.sin(Ee)*oe*2,K),Ae.rotation.z=Ee+Math.PI/2,be.add(Ae)}}return be}let we=new Qt;(function(){let oe=we;oe.add(new Ne(new si(.055,.05,.09),Z.hull));let be=[];for(let Ee=0;Ee<=16;Ee++){let D=Ee/16*.075;be.push(new te(D,D*D*3.2))}let ve=new Ne(new fn(be,48),Z.gold);ve.rotation.x=-Math.PI/2,ve.position.z=.062,oe.add(ve);let Oe=new Ne(new qt(.003,.003,.05,6),Z.bronze);Oe.rotation.x=Math.PI/2,Oe.position.z=.085,oe.add(Oe);let $=ge(.13,.0035);$.position.z=-.11,oe.add($);let W=new Ne(new qt(.012,.012,.06,12),Z.dark);W.rotation.x=Math.PI/2,W.position.set(.03,-.02,-.17),oe.add(W);let K=new Ne(new qt(.0025,.0025,.22,6),Z.hull);K.rotation.z=Math.PI/2,K.position.set(.12,.02,-.02),oe.add(K);let Q=new Ne(new ti(.022,24,16),Z.gold);Q.position.set(-.03,.03,-.03),oe.add(Q);let Ae=new Ne(new qt(.009,.02,.035,24,1,!0),Z.dark);Ae.rotation.x=-Math.PI/2,Ae.position.z=-.19,oe.add(Ae)})(),we.scale.setScalar(1.25),we.visible=!1,y.add(we),y.add(new ji(16777215,2.6).translateX(8).translateY(3).translateZ(2)),y.add(new mn(s.navy2,.6));let Ue=h(s.bronze,1.4,!0,.55,96,m);Ue.material.dashSize=.12,Ue.material.gapSize=.08,E.push(Ue.material),y.add(Ue);let me=h(s.champ,3.6,!1,.13,96,m,Yt);E.push(me.material),y.add(me);let Ce=h(s.champ,1.1,!1,.5,96,m);E.push(Ce.material),y.add(Ce);let C=new Float32Array(288),w=new Float32Array(288),L=new Float32Array(288),z=new Float32Array(288),_=28,k=[{period:17,dur:3.6,phase:2,s:[.5,.01,.7,.13],len:.55},{period:23,dur:4.2,phase:9,s:[.97,.05,.74,.19],len:.6},{period:19,dur:3.2,phase:14.5,s:[.3,.4,.08,.55],len:.5},{period:29,dur:4.6,phase:21,s:[.62,.48,.9,.64],len:.6},{period:21,dur:3.4,phase:5.5,s:[.44,.7,.2,.86],len:.5},{period:31,dur:4,phase:26,s:[.98,.76,.72,.93],len:.55}].map(fe=>{let oe=h(s.champ,1.25,!1,.9,_,m,Yt);return E.push(oe.material),y.add(oe),Object.assign(fe,{line:oe,pts:new Float32Array(_*3),cols:new Float32Array(_*3)})});function O(fe){k.forEach(oe=>{let be=(fe+oe.phase)%oe.period,ve=be/oe.dur;if(ve>=1){oe.line.visible=!1;return}let Oe=ve,$=Math.max(0,ve-oe.len),W=a(0,.18,ve)*(1-a(.35,1,ve)*.85)*(1-a(.9,1,ve));oe.line.material.opacity=.9*W;for(let K=0;K<_;K++){let Q=$+(Oe-$)*(K/(_-1)),Ae=Q*(.85+.15*Q);oe.pts[K*3]=oe.from[0]+(oe.to[0]-oe.from[0])*Ae,oe.pts[K*3+1]=oe.from[1]+(oe.to[1]-oe.from[1])*Ae,oe.pts[K*3+2]=oe.from[2]+(oe.to[2]-oe.from[2])*Ae;let Ee=Math.pow(K/(_-1),1.6),D=s.bronze.clone().lerp(s.off,Ee).multiplyScalar(.35+1.9*Ee);oe.cols[K*3]=D.r,oe.cols[K*3+1]=D.g,oe.cols[K*3+2]=D.b}d(oe.line,oe.pts,oe.cols,_)})}Ue.visible=Ce.visible=me.visible=!1;let S=25,G=7;function H(fe){return new T(-4.6+9.2*fe,.55-.35*fe+.25*Math.sin(fe*Math.PI),-6+.6*fe)}function se(fe){let oe=fe%S,be=oe/G;if(be>=1){we.visible=!1,Ue.visible=!1,Ce.visible=!1,me.visible=!1;return}let ve=H(be),Oe=H(be+.01);we.position.copy(ve),we.up.set(.25,1,0).normalize(),we.lookAt(Oe),we.rotateZ(.35),we.visible=a(0,.06,be)*(1-a(.92,1,be))>.02;let $=a(0,.08,be)*(1-a(.88,1,be));Ue.material.opacity=.55*$;for(let W=0;W<96;W++){let K=be+W/95*(1-be),Q=H(K);C[W*3]=Q.x,C[W*3+1]=Q.y,C[W*3+2]=Q.z;let Ae=1-a(.82,1,W/95),Ee=s.navy.clone().lerp(s.bronze,Ae);w[W*3]=Ee.r,w[W*3+1]=Ee.g,w[W*3+2]=Ee.b}d(Ue,C,w,96),Ce.material.opacity=.5*$,me.material.opacity=.13*$;for(let W=0;W<96;W++){let K=be*(W/95),Q=H(K);L[W*3]=Q.x,L[W*3+1]=Q.y,L[W*3+2]=Q.z;let Ae=a(0,.42,W/95),Ee=s.navy.clone().lerp(s.champ,Ae);z[W*3]=Ee.r,z[W*3+1]=Ee.g,z[W*3+2]=Ee.b}d(Ce,L,z,96),d(me,L,z,96)}let Y=new vn(f,new bt(1,1,{type:Ut,samples:4}));Y.addPass(new yn(y,v)),Y.addPass(new Ji({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv);
      bool bad = !(c.r == c.r && c.g == c.g && c.b == c.b) || max(max(c.r, c.g), c.b) > 6.0e4;
      gl_FragColor = bad ? vec4(0.0, 0.05, 0.13, 1.0) : vec4(min(c.rgb, vec3(64.0)), c.a); }`})),Y.addPass(new _i(new te(512,512),.5,.45,1)),Y.addPass(new xn);let _e=1,Me=1,pe=v.fov,Ie=r.querySelector("[data-hh-closing]")||r;function ye(){let fe=g.getBoundingClientRect();_e=Math.max(1,Math.round(fe.width)),Me=Math.max(1,Math.round(fe.height));let oe=Math.max(1,Math.round(Ie?Ie.getBoundingClientRect().height:Me)),be=Math.max(Me,2*Me-oe);Cr(f,_e,Me,1440*739*3.2),f.setSize(_e,Me,!1),Y.setSize(_e,Me),v.aspect=_e/be,v.fov=2*Math.atan(Math.tan(pe/2*Math.PI/180)*be/oe)*180/Math.PI,v.setViewOffset(_e,be,0,0,_e,Me),v.updateProjectionMatrix();let ve=f.getPixelRatio();m.set(_e*ve,Me*ve),E.forEach(K=>K.resolution.copy(m)),q.material.uniforms.uPx.value=ve;let Oe=r.querySelector("[data-hh-calendar]"),$=Oe?Oe.getBoundingClientRect().height:Me*.5;v.updateMatrixWorld();let W=(K,Q)=>new T(K*2-1,1-2*Q,.5).unproject(v).sub(v.position).normalize().multiplyScalar(10).add(v.position).toArray();k.forEach(K=>{K.from=W(K.s[0],K.s[1]),K.to=W(K.s[2],K.s[3])})}function Fe(fe){P.value=fe,B.rotation.y=fe*(Math.PI*2/720),re.rotation.y=fe*(Math.PI*2/600)+.4,O(fe)}return{resize:ye,update:Fe,render:()=>Y.render(),staticT:2.6}},"seekFoot","__seekFoot"),r.dataset.hhStatus!=="fallback"&&(r.dataset.hhStatus="ready")}var Mp=`[data-hh-background]{position:relative;isolation:isolate}
[data-hh-background]>.hh-background-layer{position:absolute;inset:0;z-index:-1;pointer-events:none;overflow:hidden;background:#0f2136}
.hh-background-layer canvas,.hh-background-layer picture,.hh-background-layer img{position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:cover;pointer-events:none}
[data-hh-background].fx-ready>.hh-background-layer .hh-poster{visibility:hidden}
[data-hh-background][data-hh-status=fallback]>.hh-background-layer .hh-poster{visibility:visible}
`,tu={d:"data:image/webp;base64,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",m:"data:image/webp;base64,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"};function iu(){if(!document.getElementById("hh-background-style")){let e=document.createElement("style");e.id="hh-background-style",e.textContent=Mp,document.head.appendChild(e)}let r={hero:Qh,asteroids:$h,sky:eu};document.querySelectorAll("[data-hh-background]").forEach(e=>{let t=e.dataset.hhBackground;if(e.dataset.hhStarted||!r[t])return;e.dataset.hhStarted="true";let i=document.createElement("div");i.className="hh-background-layer",i.setAttribute("aria-hidden","true");let n=document.createElement("canvas");if(i.append(n),t==="hero"){i.id="heroScene",n.id="scene";let s=document.createElement("picture");s.className="hh-poster";let a=document.createElement("source");a.media="(max-width:1000px)",a.srcset=tu.m;let o=new Image;o.src=tu.d,o.alt="",s.append(a,o),i.append(s)}else t==="asteroids"?(i.id="engScene",n.id="engCanvas"):n.id="earth";e.prepend(i);try{r[t](e)}catch(s){Gn(e,s)}})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",iu):iu();})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
