import{u as z,av as p,aG as V,r as D,bV as K,bW as q,aI as J,b as y,au as Q}from"./main-7ffb345c.js";import{u as M,E as F,a as G}from"./Texture-4bbb623b.js";import{A as E,F as w,t as x,C,u as d,U as h,B as T,P as l,f as A,V as u,G as H,c as X,n as g,M as R,Y as O,L as k,D as $}from"./enums-64ab819c.js";const b=z.getLogger("esri.views.webgl.BufferObject");let Z=class S{static createIndex(t,e,i){return new S(t,E.ELEMENT_ARRAY_BUFFER,e,i)}static createVertex(t,e,i){return new S(t,E.ARRAY_BUFFER,e,i)}static createUniform(t,e,i){if(t.type!==p.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new S(t,E.UNIFORM_BUFFER,e,i)}static createPixelPack(t,e=w.STREAM_READ,i){if(t.type!==p.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");const s=new S(t,E.PIXEL_PACK_BUFFER,e);return i&&s.setSize(i),s}static createPixelUnpack(t,e=w.STREAM_DRAW,i){if(t.type!==p.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new S(t,E.PIXEL_UNPACK_BUFFER,e,i)}constructor(t,e,i,s){this._context=t,this.bufferType=e,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(x.BufferObject,this),this._glName=this._context.gl.createBuffer(),M(this._context.gl),s&&this.setData(s)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return this.bufferType===E.ELEMENT_ARRAY_BUFFER?this._indexType===C.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===E.ELEMENT_ARRAY_BUFFER||this.bufferType===E.ARRAY_BUFFER}dispose(){this._context?.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(x.BufferObject,this),this._context=V(this._context)):this._glName&&b.warn("Leaked WebGL buffer object")}setSize(t,e=null){if(t<=0&&b.error("Buffer size needs to be positive!"),this.bufferType===E.ELEMENT_ARRAY_BUFFER&&D(e))switch(this._indexType=e,e){case C.UNSIGNED_SHORT:t*=2;break;case C.UNSIGNED_INT:t*=4}this._setBufferData(t)}setData(t){if(!t)return;let e=t.byteLength;this.bufferType===E.ELEMENT_ARRAY_BUFFER&&(K(t)&&(e/=2,this._indexType=C.UNSIGNED_SHORT),q(t)&&(e/=4,this._indexType=C.UNSIGNED_INT)),this._setBufferData(e,t)}_setBufferData(t,e=null){this._size=t;const i=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const s=this._context.gl;D(e)?s.bufferData(this.bufferType,e,this.usage):s.bufferData(this.bufferType,t,this.usage),M(s),this._isVAOAware&&this._context.bindVAO(i)}setSubData(t,e,i,s){if(!t)return;(e<0||e*t.BYTES_PER_ELEMENT>=this.byteSize)&&b.error("offset is out of range!"),i>=s&&b.error("end must be bigger than start!"),(e+(s-i))*t.BYTES_PER_ELEMENT>this.byteSize&&b.error("An attempt to write beyond the end of the buffer!");const c=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const a=this._context.gl;if(this._context.type===p.WEBGL2)a.bufferSubData(this.bufferType,e*t.BYTES_PER_ELEMENT,t,i,s-i);else{const r=i===0&&s===t.length?t:t.subarray(i,s);a.bufferSubData(this.bufferType,e*t.BYTES_PER_ELEMENT,r)}M(a),this._isVAOAware&&this._context.bindVAO(c)}getSubData(t,e=0,i,s){if(this._context.type!==p.WEBGL2)return void b.error("Get buffer subdata is supported in WebGL2 only!");if(i<0||s<0)return void b.error("Problem getting subdata: offset and length were less than zero!");const c=tt(t)?t.BYTES_PER_ELEMENT:1;if(c*((i??0)+(s??0))>t.byteLength)return void b.error("Problem getting subdata: offset and length exceeded destination size!");e+c*(s??0)>this.byteSize&&b.warn("Potential problem getting subdata: requested data exceeds buffer size!");const a=this._context.gl;this._context.bindBuffer(this,E.COPY_READ_BUFFER),a.getBufferSubData(E.COPY_READ_BUFFER,e,t,i,s),this._context.unbindBuffer(E.COPY_READ_BUFFER)}async getSubDataAsync(t,e=0,i,s){this._context.type===p.WEBGL2?(await this._context.clientWaitAsync(),this.getSubData(t,e,i,s)):b.error("Get buffer subdata is supported in WebGL2 only!")}};function tt(n){return J(n)}class U{constructor(t,e){this._context=t,this._desc=e,this.type="renderbuffer",this._context.instanceCounter.increment(x.Renderbuffer,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:s,height:c,internalFormat:a,multisampled:r}=e;if(r){if(this._context.type!==p.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,a,s,c)}else i.renderbufferStorage(i.RENDERBUFFER,a,s,c)}get descriptor(){return this._desc}get samples(){const t=this._desc.samples,e=this._context.parameters.maxSamples;return t?Math.min(t,e):e}resize(t,e){const i=this._desc;if(i.width===t&&i.height===e)return;i.width=t,i.height=e;const s=this._context.gl;this._context.bindRenderbuffer(this),i.multisampled?s.renderbufferStorageMultisample(s.RENDERBUFFER,this.samples,i.internalFormat,i.width,i.height):s.renderbufferStorage(s.RENDERBUFFER,i.internalFormat,i.width,i.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(x.Renderbuffer,this),this._context=V(this._context))}}function _t(n){const t=n.gl;switch(t.getError()){case t.NO_ERROR:return null;case t.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case t.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case t.INVALID_OPERATION:return"The specified command is not allowed for the current state";case t.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case t.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case t.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function ut(n,t){return n.vertexBuffers[t].size/et(n.layout[t])}function et(n){return n[0].stride}function it(n,t,e,i,s=0){const c=n.gl,a=n.capabilities.instancing;n.bindBuffer(e);for(const r of i){const o=t.get(r.name);o===void 0&&console.error(`There is no location for vertex attribute '${r.name}' defined.`);const f=s*r.stride;if(r.count<=4)c.vertexAttribPointer(o,r.count,r.type,r.normalized,r.stride,r.offset+f),c.enableVertexAttribArray(o),r.divisor>0&&a&&a.vertexAttribDivisor(o,r.divisor);else if(r.count===9)for(let _=0;_<3;_++)c.vertexAttribPointer(o+_,3,r.type,r.normalized,r.stride,r.offset+12*_+f),c.enableVertexAttribArray(o+_),r.divisor>0&&a&&a.vertexAttribDivisor(o+_,r.divisor);else if(r.count===16)for(let _=0;_<4;_++)c.vertexAttribPointer(o+_,4,r.type,r.normalized,r.stride,r.offset+16*_+f),c.enableVertexAttribArray(o+_),r.divisor>0&&a&&a.vertexAttribDivisor(o+_,r.divisor);else console.error("Unsupported vertex attribute element count: "+r.count)}}function st(n,t,e,i){const s=n.gl,c=n.capabilities.instancing;n.bindBuffer(e);for(const a of i){const r=t.get(a.name);if(a.count<=4)s.disableVertexAttribArray(r),a.divisor&&a.divisor>0&&c&&c.vertexAttribDivisor(r,0);else if(a.count===9)for(let o=0;o<3;o++)s.disableVertexAttribArray(r+o),a.divisor&&a.divisor>0&&c&&c.vertexAttribDivisor(r+o,0);else if(a.count===16)for(let o=0;o<4;o++)s.disableVertexAttribArray(r+o),a.divisor&&a.divisor>0&&c&&c.vertexAttribDivisor(r+o,0);else console.error("Unsupported vertex attribute element count: "+a.count)}n.unbindBuffer(E.ARRAY_BUFFER)}function rt(n){switch(n){case l.ALPHA:case l.LUMINANCE:case l.RED:case l.RED_INTEGER:case h.R8:case h.R8I:case h.R8UI:case h.R8_SNORM:case T.STENCIL_INDEX8:return 1;case l.LUMINANCE_ALPHA:case l.RG:case l.RG_INTEGER:case h.RGBA4:case h.R16F:case h.R16I:case h.R16UI:case h.RG8:case h.RG8I:case h.RG8UI:case h.RG8_SNORM:case h.RGB565:case h.RGB5_A1:case T.DEPTH_COMPONENT16:return 2;case l.DEPTH_COMPONENT:case l.RGB:case l.RGB_INTEGER:case h.RGB8:case h.RGB8I:case h.RGB8UI:case h.RGB8_SNORM:case h.SRGB8:case T.DEPTH_COMPONENT24:return 3;case l.DEPTH_STENCIL:case l.RGBA:case l.RGBA_INTEGER:case h.RGBA8:case h.R32F:case h.R11F_G11F_B10F:case h.RG16F:case h.R32I:case h.R32UI:case h.RG16I:case h.RG16UI:case h.RGBA8I:case h.RGBA8UI:case h.RGBA8_SNORM:case h.SRGB8_ALPHA8:case h.RGB9_E5:case h.RGB10_A2UI:case h.RGB10_A2:case T.DEPTH_STENCIL:case T.DEPTH_COMPONENT32F:case T.DEPTH24_STENCIL8:return 4;case T.DEPTH32F_STENCIL8:return 5;case h.RGB16F:case h.RGB16I:case h.RGB16UI:return 6;case h.RG32F:case h.RG32I:case h.RG32UI:case h.RGBA16F:case h.RGBA16I:case h.RGBA16UI:return 8;case h.RGB32F:case h.RGB32I:case h.RGB32UI:return 12;case h.RGBA32F:case h.RGBA32I:case h.RGBA32UI:return 16;case d.COMPRESSED_RGB_S3TC_DXT1_EXT:case d.COMPRESSED_RGBA_S3TC_DXT1_EXT:return .5;case d.COMPRESSED_RGBA_S3TC_DXT3_EXT:case d.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case d.COMPRESSED_R11_EAC:case d.COMPRESSED_SIGNED_R11_EAC:case d.COMPRESSED_RGB8_ETC2:case d.COMPRESSED_SRGB8_ETC2:case d.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case d.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return .5;case d.COMPRESSED_RG11_EAC:case d.COMPRESSED_SIGNED_RG11_EAC:case d.COMPRESSED_RGBA8_ETC2_EAC:case d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}function v(n){if(y(n))return 0;if("descriptor"in n)return n.glName?v(n.descriptor):0;const t=n.internalFormat||"pixelFormat"in n&&n.pixelFormat;if(!t)return 0;const e="hasMipmap"in n&&n.hasMipmap?1.3:1,i=n.width*n.height;return rt(t)*i*e}let nt=class B{constructor(t,e,i=null,s=null){if(this._context=t,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._depthStencilTexture=null,this._initialized=!1,this._desc={...e},t.instanceCounter.increment(x.FramebufferObject,this),D(i)){Array.isArray(i)||(i=[i]);for(let c=0;c<i.length;++c){const a=i[c],r=A.COLOR_ATTACHMENT0+c;let o;Y(a)?(m(a)?(o=a.descriptor,this._colorAttachments.set(r,a)):(o=a,this._colorAttachments.set(r,new F(this._context,o))),L(o,this._desc)):(W(a)?(o=a.descriptor,this._colorAttachments.set(r,a)):(o=a,this._colorAttachments.set(r,new U(this._context,o))),I(o,this._desc)),this._validateColorAttachmentPoint(r)}}if(D(s)){let c,a;if(Y(s))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),m(s)?(a=s.descriptor,this._depthStencilTexture=s):(a=s,this._depthStencilTexture=new F(this._context,a)),L(a,this._desc);else{W(s)?(a=s.descriptor,c=s):(a=s,c=new U(this._context,a));const r=this._desc.depthStencilTarget??u.DEPTH_STENCIL_RENDER_BUFFER;r===u.STENCIL_RENDER_BUFFER?this._stencilAttachment=c:r===u.DEPTH_RENDER_BUFFER||r===u.DEPTH_STENCIL_RENDER_BUFFER?this._depthAttachment=c:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),this._desc.depthStencilTarget=r,I(a,this._desc)}}}dispose(){if(!this._desc)return;const t=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(x.FramebufferObject,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const t=this._colorAttachments.get(A.COLOR_ATTACHMENT0);return t&&m(t)?t:null}get colorAttachment(){return this._colorAttachments.get(A.COLOR_ATTACHMENT0)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width??0}get height(){return this._desc.height??0}get gpuMemoryUsage(){return[...this._colorAttachments].reduce((t,[e,i])=>t+v(i),0)+v(this.depthStencilAttachment)}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&m(e)?e:null}attachColorTexture(t,e=A.COLOR_ATTACHMENT0){t&&(this._validateColorAttachmentPoint(e),L(t.descriptor,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,e)),this._colorAttachments.set(e,t))}detachColorTexture(t=A.COLOR_ATTACHMENT0){const e=this._colorAttachments.get(t);if(m(e)){const i=e;return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t)),this._colorAttachments.delete(t),i}}setColorTextureTarget(t,e=A.COLOR_ATTACHMENT0){const i=this._colorAttachments.get(e);m(i)&&this._framebufferTexture2D(i.glName,e,t)}attachDepthStencilTexture(t){if(y(t))return;const e=t.descriptor;e.pixelFormat!==l.DEPTH_STENCIL&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),e.dataType!==H.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),L(e,this._desc),this._desc.depthStencilTarget&&this._desc.depthStencilTarget!==u.DEPTH_STENCIL_TEXTURE&&(this._desc.depthStencilTarget=u.DEPTH_STENCIL_TEXTURE),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,X)),this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;return t&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,X)),this._depthStencilTexture=null,t}attachDepthStencilBuffer(t){if(y(t))return;const e=t.descriptor;if(e.internalFormat!==T.DEPTH_STENCIL&&e.internalFormat!==T.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),I(e,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=e.internalFormat===T.DEPTH_STENCIL?u.DEPTH_STENCIL_RENDER_BUFFER:u.DEPTH_RENDER_BUFFER,this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl,s=this._desc.depthStencilTarget===u.DEPTH_RENDER_BUFFER?i.DEPTH_ATTACHMENT:i.DEPTH_STENCIL_ATTACHMENT;i.framebufferRenderbuffer(g.FRAMEBUFFER,s,i.RENDERBUFFER,t.glName)}this._depthAttachment=t}detachDepthStencilBuffer(){const t=this._context.gl,e=this._depthAttachment;if(e&&this._initialized){this._context.bindFramebuffer(this);const i=this._desc.depthStencilTarget===u.DEPTH_RENDER_BUFFER?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(g.FRAMEBUFFER,i,t.RENDERBUFFER,null)}return this._depthAttachment=null,e}detachAll(){this._colorAttachments.forEach((t,e)=>this._detachColorAttachment(e)),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}copyToTexture(t,e,i,s,c,a,r){(t<0||e<0||c<0||a<0)&&console.error("Offsets cannot be negative!"),(i<=0||s<=0)&&console.error("Copy width and height must be greater than zero!");const o=this._desc,f=r.descriptor;r.descriptor.target!==R.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(o?.width==null||o?.height==null||f?.width==null||f?.height==null||t+i>o.width||e+s>o.height||c+i>f.width||a+s>f.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const _=this._context,P=_.bindTexture(r,F.TEXTURE_UNIT_FOR_UPDATES);_.setActiveTexture(F.TEXTURE_UNIT_FOR_UPDATES),_.bindFramebuffer(this),_.gl.copyTexSubImage2D(R.TEXTURE_2D,0,c,a,t,e,i,s),_.bindTexture(P,F.TEXTURE_UNIT_FOR_UPDATES)}readPixels(t,e,i,s,c,a,r){(i<=0||s<=0)&&console.error("Copy width and height must be greater than zero!"),r||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,e,i,s,c,a,r)}async readPixelsAsync(t,e,i,s,c,a,r){if(this._context.type!==p.WEBGL2)return G()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(t,e,i,s,c,a,r);const o=this._context.gl,f=Z.createPixelPack(this._context,w.STREAM_READ,r.byteLength);this._context.bindBuffer(f),this._context.bindFramebuffer(this),o.readPixels(t,e,i,s,c,a,0),this._context.unbindBuffer(E.PIXEL_PACK_BUFFER),await f.getSubDataAsync(r),f.dispose()}resize(t,e){const i=this._desc;if(i.width!==t||i.height!==e){if(i.width=t,i.height=e,!this._initialized)return this._colorAttachments.forEach(s=>{s&&s.resize(t,e)}),void(this._depthStencilTexture&&this._depthStencilTexture.resize(t,e));this._colorAttachments.forEach(s=>{s&&s.resize(t,e)}),this._depthStencilTexture!=null?this._depthStencilTexture.resize(t,e):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(t,e),this._stencilAttachment&&this._stencilAttachment.resize(t,e)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(t=g.FRAMEBUFFER){const e=this._context.gl;if(this._initialized)return void e.bindFramebuffer(t,this.glName);this._glName&&e.deleteFramebuffer(this._glName);const i=this._context,s=e.createFramebuffer(),c=this._desc,a=c.colorTarget??O.RENDER_BUFFER,r=c.width??1,o=c.height??1;if(e.bindFramebuffer(t,s),this._colorAttachments.size===0)if(a===O.TEXTURE||a===O.CUBEMAP)this._colorAttachments.set(A.COLOR_ATTACHMENT0,at(i,c,this.descriptor.colorTarget===O.CUBEMAP?R.TEXTURE_CUBE_MAP:R.TEXTURE_2D));else{const _=new U(i,{internalFormat:h.RGBA4,width:r,height:o});this._colorAttachments.set(A.COLOR_ATTACHMENT0,_)}this._colorAttachments.forEach((_,P)=>{_&&(m(_)?this._framebufferTexture2D(_.glName,P,j(_),t):e.framebufferRenderbuffer(t,P,e.RENDERBUFFER,_.glName))});const f=c.depthStencilTarget??u.NONE;switch(f){case u.DEPTH_RENDER_BUFFER:case u.DEPTH_STENCIL_RENDER_BUFFER:{this._depthAttachment||(this._depthAttachment=new U(i,{internalFormat:c.depthStencilTarget===u.DEPTH_RENDER_BUFFER?T.DEPTH_COMPONENT16:T.DEPTH_STENCIL,width:r,height:o}));const _=f===u.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(t,_,e.RENDERBUFFER,this._depthAttachment.glName);break}case u.STENCIL_RENDER_BUFFER:this._stencilAttachment||(this._stencilAttachment=new U(i,{internalFormat:T.STENCIL_INDEX8,width:r,height:o})),e.framebufferRenderbuffer(t,e.STENCIL_ATTACHMENT,e.RENDERBUFFER,this._stencilAttachment.glName);break;case u.DEPTH_STENCIL_TEXTURE:if(!this._depthStencilTexture){i.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const _={target:R.TEXTURE_2D,pixelFormat:l.DEPTH_STENCIL,dataType:H.UNSIGNED_INT_24_8,samplingMode:k.NEAREST,wrapMode:$.CLAMP_TO_EDGE,width:r,height:o};this._depthStencilTexture=new F(i,_)}this._framebufferTexture2D(this._depthStencilTexture.glName,e.DEPTH_STENCIL_ATTACHMENT,j(this._depthStencilTexture),t)}G()&&e.checkFramebufferStatus(t)!==e.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=s,this._initialized=!0}_framebufferTexture2D(t,e=A.COLOR_ATTACHMENT0,i=R.TEXTURE_2D,s=g.FRAMEBUFFER,c=0){this._context.gl.framebufferTexture2D(s,e,i,t,c)}_detachColorAttachment(t){G()&&console.warn("Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!");const e=this._context.gl,i=this._colorAttachments.get(t);return m(i)?this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t)):this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(g.FRAMEBUFFER,t,e.RENDERBUFFER,null)),this._colorAttachments.delete(t),i}_disposeColorAttachments(){this._colorAttachments.forEach((t,e)=>{this._detachColorAttachment(e),t.dispose()}),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const e=this._desc.depthStencilTarget===u.DEPTH_RENDER_BUFFER?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(g.FRAMEBUFFER,e,t.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(g.FRAMEBUFFER,t.STENCIL_ATTACHMENT,t.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}_validateColorAttachmentPoint(t){if(B._MAX_COLOR_ATTACHMENTS===-1){const i=this._context.capabilities.drawBuffers;if(i){const s=this._context.gl;B._MAX_COLOR_ATTACHMENTS=s.getParameter(i.MAX_COLOR_ATTACHMENTS)}else B._MAX_COLOR_ATTACHMENTS=1}const e=t-A.COLOR_ATTACHMENT0;e+1>B._MAX_COLOR_ATTACHMENTS&&z.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${e+1}. Implementation supports up to ${B._MAX_COLOR_ATTACHMENTS} color attachments`)}};function m(n){return n!=null&&"type"in n&&n.type==="texture"}function W(n){return n!=null&&"type"in n&&n.type==="renderbuffer"}function Y(n){return m(n)||n!=null&&"pixelFormat"in n}function at(n,t,e){return new F(n,{target:e,pixelFormat:l.RGBA,dataType:H.UNSIGNED_BYTE,samplingMode:k.NEAREST,wrapMode:$.CLAMP_TO_EDGE,width:t.width,height:t.height})}function L(n,t){n.target!==R.TEXTURE_2D&&n.target!==R.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),t.width!==void 0&&t.width>=0&&t.height!==void 0&&t.height>=0?t.width===n.width&&t.height===n.height||console.error("Color attachment texture must match the framebuffer's!"):(t.width=n.width,t.height=n.height)}function I(n,t){t.width!==void 0&&t.width>=0&&t.height!==void 0&&t.height>=0?t.width===n.width&&t.height===n.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(t.width=n.width,t.height=n.height)}function j(n){return n.descriptor.target===R.TEXTURE_CUBE_MAP?R.TEXTURE_CUBE_MAP_POSITIVE_X:R.TEXTURE_2D}nt._MAX_COLOR_ATTACHMENTS=-1;const N=z.getLogger("esri.views.webgl.VertexArrayObject");let lt=class{constructor(t,e,i,s,c=null){this._context=t,this._locations=e,this._layout=i,this._buffers=s,this._indexBuffer=c,this._glName=null,this._initialized=!1,t.instanceCounter.increment(x.VertexArrayObject,this)}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce((t,e)=>t+this._buffers[e].size,D(this._indexBuffer)?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(t=!0){if(!this._context)return void((this._glName||t&&Object.getOwnPropertyNames(this._buffers).length>0)&&N.warn("Leaked WebGL VAO"));if(this._glName){const e=this._context?.capabilities?.vao;e?(e.deleteVertexArray(this._glName),this._glName=null):N.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),t){for(const e in this._buffers)this._buffers[e]?.dispose(),delete this._buffers[e];this._indexBuffer=Q(this._indexBuffer)}this._context.instanceCounter.decrement(x.VertexArrayObject,this),this._context=V(this._context)}initialize(){if(this._initialized)return;const t=this._context.capabilities.vao;if(t){const e=t.createVertexArray();t.bindVertexArray(e),this._bindLayout(),t.bindVertexArray(null),this._glName=e}this._initialized=!0}bind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:t,_layout:e,_indexBuffer:i}=this;t||N.error("Vertex buffer dictionary is empty!");const s=this._context.gl;for(const c in t){const a=t[c];a||N.error("Vertex buffer is uninitialized!");const r=e[c];r||N.error("Vertex element descriptor is empty!"),it(this._context,this._locations,a,r)}D(i)&&(this._context.capabilities.vao?s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,i.glName):this._context.bindBuffer(i))}unbind(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:t,_layout:e}=this;t||N.error("Vertex buffer dictionary is empty!");for(const i in t){const s=t[i];s||N.error("Vertex buffer is uninitialized!");const c=e[i];st(this._context,this._locations,s,c)}D(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)}};export{Z as E,rt as _,lt as f,_t as i,ut as n,U as s,nt as x};
