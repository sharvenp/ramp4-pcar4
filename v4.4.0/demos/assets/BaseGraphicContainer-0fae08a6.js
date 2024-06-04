import{eN as c,eO as R,eP as A,eQ as D,ax as E,eR as O,eS as C,eT as I,eU as N,bz as S}from"./main-0e79698b.js";import{o as $}from"./FeatureContainer-0924820d.js";import{r as L}from"./vec3f32-ad1dc57f.js";import{r as T}from"./Container-ff6d0743.js";import{e as P}from"./color-f2e13497.js";import{E as p,f as U}from"./VertexArrayObject-0efe5607.js";import{R as m,E as w,C as x,F as g,I as F}from"./enums-64ab819c.js";const W=Math.PI/180,q=4;class V extends T{constructor(r){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=c(),this._localOrigin={x:0,y:0},this._getBounds=r}destroy(){this._vao&&(this._vao.dispose(!0),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=R(this._program)}doRender(r){const{context:t}=r,n=this._getBounds();if(n.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(r),this._updateBufferData(t,n),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(m.ONE,m.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const h=this._program;t.bindVAO(this._vao),t.useProgram(h),h.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(w.LINES,8*n.length,x.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{dvs:c()}}_createShaderProgram(r){if(this._program)return;const t=`precision highp float;
        uniform mat3 u_dvsMat3;

        attribute vec2 a_position;

        void main() {
          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
        }`,n=`precision mediump float;
      void main() {
        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);
      }`;this._program=r.programCache.acquire(t,n,v().attributes)}_updateMatricesAndLocalOrigin(r){const{state:t}=r,{displayMat3:n,size:h,resolution:u,pixelRatio:a,rotation:o,viewpoint:e}=t,l=W*o,{x:i,y}=e.targetGeometry,b=A(i,t.spatialReference);this._localOrigin.x=b,this._localOrigin.y=y;const _=a*h[0],f=a*h[1],B=u*_,M=u*f,d=D(this._dvsMat3);E(d,d,n),O(d,d,C(_/2,f/2)),I(d,d,L(h[0]/B,-f/M,1)),N(d,d,-l)}_updateBufferData(r,t){const{x:n,y:h}=this._localOrigin,u=2*q*t.length,a=new Float32Array(u),o=new Uint32Array(8*t.length);let e=0,l=0;for(const i of t)i&&(a[2*e+0]=i[0]-n,a[2*e+1]=i[1]-h,a[2*e+2]=i[0]-n,a[2*e+3]=i[3]-h,a[2*e+4]=i[2]-n,a[2*e+5]=i[3]-h,a[2*e+6]=i[2]-n,a[2*e+7]=i[1]-h,o[l+0]=e+0,o[l+1]=e+3,o[l+2]=e+3,o[l+3]=e+2,o[l+4]=e+2,o[l+5]=e+1,o[l+6]=e+1,o[l+7]=e+0,e+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(a.buffer):this._vertexBuffer=p.createVertex(r,g.DYNAMIC_DRAW,a.buffer),this._indexBuffer?this._indexBuffer.setData(o):this._indexBuffer=p.createIndex(r,g.DYNAMIC_DRAW,o),!this._vao){const i=v();this._vao=new U(r,i.attributes,i.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const v=()=>P("bounds",{geometry:[{location:0,name:"a_position",count:2,type:x.FLOAT}]});let J=class extends ${constructor(s){super(s),this.hasHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=S(this._boundsRenderer)}enableRenderingBounds(s){this._boundsRenderer=new V(s),this.requestRender()}get hasLabels(){return!1}onTileData(s,r){s.patch(r),this.contains(s)||this.addChild(s),this.requestRender()}onTileError(s){s.clear(),this.contains(s)||this.addChild(s)}_renderChildren(s,r){for(const t of this.children)t.isReady&&t.hasData&&(t.commit(s),s.context.setStencilFunction(F.EQUAL,t.stencilRef,255),t.getDisplayList().replay(s,t,r))}};export{J as n};
