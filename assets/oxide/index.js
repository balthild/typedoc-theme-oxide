(function () {
    'use strict';

    var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol, Iterator */


    function __esDecorate$3(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access) context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0) continue;
                if (result === null || typeof result !== "object") throw new TypeError("Object expected");
                if (_ = accept(result.get)) descriptor.get = _;
                if (_ = accept(result.set)) descriptor.set = _;
                if (_ = accept(result.init)) initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field") initializers.unshift(_);
                else descriptor[key] = _;
            }
        }
        if (target) Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    }
    function __runInitializers$3(thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    }
    function __setFunctionName(f, name, prefix) {
        if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }

    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$2=globalThis,e$2=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$5=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$5.set(s,t));}return t}toString(){return this.cssText}};const r$3=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$3(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$2,getOwnPropertySymbols:o$4,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$2(t),...o$4(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e,this[e]=h.fromAttribute(s,t.type)??this._$Ej?.get(e)??null,this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){const e=this.constructor,h=this[t];if(i??=e.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(e._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.0");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$1=globalThis,i$1=t$1.trustedTypes,s$1=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$3="?"+h,n$1=`<${o$3}>`,r$1=document,l=()=>r$1.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v$1=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),T$1=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r$1.createTreeWalker(r$1,129);function P$1(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v$1:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v$1||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n$1:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [P$1(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};let N$1 = class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L$1:k}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$3)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$1.createElement("template");return s.innerHTML=t,s}};function S(t,i,s=t,e){if(i===T$1)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$1).importNode(i,true);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R$1(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=C.nextNode(),o++);}return C.currentNode=r$1,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}let R$1 = class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T$1&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$1.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N$1.createElement(P$1(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N$1(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(false,true,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}};class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=S(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==T$1,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S(this,e[s+n],i,n),r===T$1&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===E?void 0:t;}}class I extends k{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E);}}let L$1 = class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=S(this,t,i,0)??E)===T$1)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}};class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const j=t$1.litHtmlPolyfillSupport;j?.(N$1,R$1),(t$1.litHtmlVersions??=[]).push("3.3.0");const B=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new R$1(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return T$1}}i._$litElement$=true,i["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i});const o$2=s.litElementPolyfillSupport;o$2?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.0");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t=t=>(e,o)=>{ void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const o$1={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r=(t=o$1,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    function*o(o,f){if(void 0!==o){let i=0;for(const t of o)yield f(t,i++);}}

    /** Detect free variable `global` from Node.js. */
    var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

    /** Detect free variable `self`. */
    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

    /** Used as a reference to the global object. */
    var root = freeGlobal || freeSelf || Function('return this')();

    /** Built-in value references. */
    var Symbol$1 = root.Symbol;

    /** Used for built-in method references. */
    var objectProto$1 = Object.prototype;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto$1.hasOwnProperty;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString$1 = objectProto$1.toString;

    /** Built-in value references. */
    var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag$1),
          tag = value[symToStringTag$1];

      try {
        value[symToStringTag$1] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString$1.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag$1] = tag;
        } else {
          delete value[symToStringTag$1];
        }
      }
      return result;
    }

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /** `Object#toString` result references. */
    var nullTag = '[object Null]',
        undefinedTag = '[object Undefined]';

    /** Built-in value references. */
    var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /** `Object#toString` result references. */
    var symbolTag = '[object Symbol]';

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /** Used to match a single whitespace character. */
    var reWhitespace = /\s/;

    /**
     * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
     * character of `string`.
     *
     * @private
     * @param {string} string The string to inspect.
     * @returns {number} Returns the index of the last non-whitespace character.
     */
    function trimmedEndIndex(string) {
      var index = string.length;

      while (index-- && reWhitespace.test(string.charAt(index))) {}
      return index;
    }

    /** Used to match leading whitespace. */
    var reTrimStart = /^\s+/;

    /**
     * The base implementation of `_.trim`.
     *
     * @private
     * @param {string} string The string to trim.
     * @returns {string} Returns the trimmed string.
     */
    function baseTrim(string) {
      return string
        ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
        : string;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /** Used as references for various `Number` constants. */
    var NAN = 0 / 0;

    /** Used to detect bad signed hexadecimal string values. */
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

    /** Used to detect binary string values. */
    var reIsBinary = /^0b[01]+$/i;

    /** Used to detect octal string values. */
    var reIsOctal = /^0o[0-7]+$/i;

    /** Built-in method references without a dependency on `root`. */
    var freeParseInt = parseInt;

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = function() {
      return root.Date.now();
    };

    /** Error message constants. */
    var FUNC_ERROR_TEXT$1 = 'Expected a function';

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeMax = Math.max,
        nativeMin = Math.min;

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT$1);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;

        return maxing
          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
          : timeWaiting;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /** Error message constants. */
    var FUNC_ERROR_TEXT = 'Expected a function';

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Remove items in an array which match a predicate.
     * @param arr
     * @param predicate
     */
    function removeIf(arr, predicate) {
        for (let i = 0; i < arr.length; i++) {
            if (predicate(arr[i])) {
                arr.splice(i, 1);
                i--;
            }
        }
    }

    /**
     * Utility to help type checking ensure that there is no uncovered case.
     */
    function assertNever(x) {
        throw new Error(`Expected handling to cover all possible cases, but it didn't cover: ${JSON.stringify(x)}`);
    }
    function assert(x, message = "Assertion failed") {
        if (!x) {
            throw new Error(message);
        }
    }
    function NonEnumerable(_cls, context) {
        context.addInitializer(function () {
            Object.defineProperty(this, context.name, {
                enumerable: false,
                configurable: true,
                writable: true,
            });
        });
    }

    let translations = {};
    const i18n = new Proxy({}, {
        get(_, key) {
            return (...args) => {
                const template = String(translations[key] || key);
                return template.replace(/\{(\d+)\}/g, (_, index) => {
                    return args[+index] ?? "(no placeholder)";
                });
            };
        },
        has(_, key) {
            return Object.prototype.hasOwnProperty.call(translations, key);
        },
    });

    /**
     * List of known log levels. Used to specify the urgency of a log message.
     */
    var LogLevel;
    (function (LogLevel) {
        LogLevel[LogLevel["Verbose"] = 0] = "Verbose";
        LogLevel[LogLevel["Info"] = 1] = "Info";
        LogLevel[LogLevel["Warn"] = 2] = "Warn";
        LogLevel[LogLevel["Error"] = 3] = "Error";
        LogLevel[LogLevel["None"] = 4] = "None";
    })(LogLevel || (LogLevel = {}));
    ({
        [LogLevel.Error]: "[error]",
        [LogLevel.Warn]: "[warning]",
        [LogLevel.Info]: "[info]",
        [LogLevel.Verbose]: "[debug]",
    });

    var NormalizedPathUtils;
    (function (NormalizedPathUtils) {
        function dirname(path) {
            let end = path.length - 2;
            for (; end > 0; --end) {
                if (path[end] === "/")
                    break;
            }
            switch (end) {
                case -2:
                case -1:
                    return (path[0] === "/" ? "/" : ".");
                case 0:
                    return path.substring(0, path.indexOf("/") + 1);
                default:
                    return path.slice(0, end);
            }
        }
        NormalizedPathUtils.dirname = dirname;
        function basename(path) {
            // We start at length - 2 as /var/typedoc/ should give `typedoc`
            let end = path.length - 2;
            for (; end >= 0; --end) {
                if (path[end] === "/")
                    break;
            }
            switch (end) {
                case -2:
                case -1:
                    return path;
                default:
                    if (path.endsWith("/")) {
                        return path.slice(end + 1, -1);
                    }
                    return path.slice(end + 1);
            }
        }
        NormalizedPathUtils.basename = basename;
        function relative(from, to) {
            if (from == to) {
                return "";
            }
            assert(isAbsolute(from) && isAbsolute(to), "resolving relative paths without absolute inputs requires a filesystem");
            if (!from.endsWith("/")) {
                from += "/";
            }
            const end = to.length;
            if (!to.endsWith("/")) {
                to += "/";
            }
            const minLen = Math.min(from.length, to.length);
            let lastCommonSlash = 0;
            let i = 0;
            for (; i < minLen; ++i) {
                if (from[i] === to[i]) {
                    if (from[i] === "/") {
                        lastCommonSlash = i;
                    }
                }
                else {
                    break;
                }
            }
            if (lastCommonSlash === from.length - 1) {
                return to.substring(from.length, end);
            }
            let prefix = "";
            for (let i = lastCommonSlash + 1; i < from.length; ++i) {
                if (from[i] === "/" || i + 1 === from.length) {
                    prefix += prefix ? "/.." : "..";
                }
            }
            return prefix + to.substring(lastCommonSlash, end);
        }
        NormalizedPathUtils.relative = relative;
        function normalize(path) {
            const parts = path.split("/");
            let canRemoveDotDot = false;
            for (let i = 0; i < parts.length; /* inside loop */) {
                if (parts[i] == "." && i + 1 != parts.length) {
                    parts.splice(i, 1);
                }
                else if (parts[i] == "..") {
                    if (canRemoveDotDot) {
                        if (i - 1 === 0 && /\w:/i.test(parts[0])) {
                            parts.splice(i, 1);
                        }
                        else {
                            parts.splice(i - 1, 2);
                            i = i - 1;
                        }
                    }
                    else {
                        ++i;
                    }
                }
                else {
                    canRemoveDotDot = true;
                    ++i;
                }
            }
            return parts.join("/");
        }
        NormalizedPathUtils.normalize = normalize;
        function resolve(from, to) {
            assert(isAbsolute(from), "resolving without an absolute path requires a filesystem");
            if (isAbsolute(to)) {
                return to;
            }
            return normalize(`${from}/${to}`);
        }
        NormalizedPathUtils.resolve = resolve;
        function isAbsolute(from) {
            return /^\/|^\w:\//.test(from);
        }
        NormalizedPathUtils.isAbsolute = isAbsolute;
        function splitFilename(name) {
            const lastDot = name.lastIndexOf(".");
            if (lastDot < 1) {
                return { name, ext: "" };
            }
            return { name: name.substring(0, lastDot), ext: name.substring(lastDot) };
        }
        NormalizedPathUtils.splitFilename = splitFilename;
    })(NormalizedPathUtils || (NormalizedPathUtils = {}));

    function splitUnquotedString(input, delimiter) {
        if (input.startsWith(delimiter)) {
            return splitUnquotedString(input.substring(delimiter.length), delimiter);
        }
        if (input.startsWith('"')) {
            // the part inside the quotes should not be split, the rest should
            const closingQuoteIndex = input.indexOf('"', 1);
            if (closingQuoteIndex === -1) {
                // Unmatched quotes, just split it
                return input.split(delimiter);
            }
            if (closingQuoteIndex === input.length - 1) {
                return [input];
            }
            else {
                const remainder = input.substring(closingQuoteIndex + 1);
                return [
                    input.substring(0, closingQuoteIndex + 1),
                    ...splitUnquotedString(remainder, delimiter),
                ];
            }
        }
        else {
            return input.split(delimiter);
        }
    }

    /**
     * This exists so that TypeDoc can store a unique identifier for a `ts.Symbol` without
     * keeping a reference to the `ts.Symbol` itself. This identifier should be stable across
     * runs so long as the symbol is exported from the same file.
     */
    class ReflectionSymbolId {
        /**
         * This will only be used if we somehow cannot find a package.json file for
         * source code. This is very unlikely, but if it occurs then the {@link packageName}
         * will be set to this string, and {@link packagePath} will have the absolute path
         * to the source file.
         */
        static UNKNOWN_PACKAGE = "<unknown>";
        /**
         * The name of the package which this symbol ID resides within.
         */
        packageName;
        /**
         * Path to the source file containing this symbol.
         * Note that this is NOT an absolute path, but a package-relative path according
         * to the directory containing package.json for the package name.
         */
        packagePath;
        /**
         * Qualified name of this symbol within the source file.
         */
        qualifiedName;
        /**
         * Note: This is **not** serialized. It exists for sorting by declaration order, but
         * should not be needed when deserializing from JSON.
         * Will be set to `Infinity` if the ID was deserialized from JSON.
         */
        pos = Infinity;
        /**
         * Note: This is **not** serialized. It exists to support detection of the differences between
         * symbols which share declarations, but are instantiated with different type parameters.
         * This will be `NaN` if the symbol reference is not transient.
         * Note: This can only be non-NaN if {@link pos} is finite.
         */
        transientId = NaN;
        /**
         * Note: This is **not** serialized, only {@link packageName} and {@link packagePath} path
         * information is preserved when serializing. This is set so that it is available to plugins
         * when initially converting a project.
         *
         * @privateRemarks
         * This is used by typedoc-plugin-dt-links to determine the path to read to get the source
         * code of a definitely typed package.
         */
        fileName;
        constructor(json) {
            this.packageName = json.packageName;
            this.packagePath = json.packagePath;
            this.qualifiedName = json.qualifiedName;
        }
        getStableKey() {
            if (Number.isFinite(this.pos)) {
                return `${this.packageName}\0${this.packagePath}\0${this.qualifiedName}\0${this.pos}\0${this.transientId}`;
            }
            else {
                return `${this.packageName}\0${this.packagePath}\0${this.qualifiedName}`;
            }
        }
        toDeclarationReference() {
            return {
                resolutionStart: "global",
                moduleSource: this.packageName,
                symbolReference: {
                    path: splitUnquotedString(this.qualifiedName, ".").map((path) => ({
                        navigation: ".",
                        path,
                    })),
                },
            };
        }
        toObject() {
            return {
                packageName: this.packageName,
                packagePath: this.packagePath,
                qualifiedName: this.qualifiedName,
            };
        }
    }

    var __esDecorate$2 = (globalThis && globalThis.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access) context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0) continue;
                if (result === null || typeof result !== "object") throw new TypeError("Object expected");
                if (_ = accept(result.get)) descriptor.get = _;
                if (_ = accept(result.set)) descriptor.set = _;
                if (_ = accept(result.init)) initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field") initializers.unshift(_);
                else descriptor[key] = _;
            }
        }
        if (target) Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    };
    var __runInitializers$2 = (globalThis && globalThis.__runInitializers) || function (thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    };
    /**
     * A model that represents a single TypeDoc comment tag.
     *
     * Tags are stored in the {@link Comment.blockTags} property.
     * @category Comments
     */
    class CommentTag {
        /**
         * The name of this tag, e.g. `@returns`, `@example`
         */
        tag;
        /**
         * Some tags, (`@typedef`, `@param`, `@property`, etc.) may have a user defined identifier associated with them.
         * If this tag is one of those, it will be parsed out and included here.
         */
        name;
        /**
         * The actual body text of this tag.
         */
        content;
        /**
         * A flag which may be set by plugins to prevent TypeDoc from rendering this tag, if the plugin provides
         * custom rendering. Note: This flag is **not** serialized, it is expected to be set just before the comment
         * is rendered.
         */
        skipRendering = false;
        /**
         * Create a new CommentTag instance.
         */
        constructor(tag, text) {
            this.tag = tag;
            this.content = text;
        }
        /**
         * Checks if this block tag is roughly equal to the other tag.
         * This isn't exactly equal, but just "roughly equal" by the tag
         * text.
         */
        similarTo(other) {
            return (this.tag === other.tag &&
                this.name === other.tag &&
                Comment.combineDisplayParts(this.content) ===
                    Comment.combineDisplayParts(other.content));
        }
        clone() {
            const tag = new CommentTag(this.tag, Comment.cloneDisplayParts(this.content));
            if (this.name) {
                tag.name = this.name;
            }
            return tag;
        }
        toObject() {
            return {
                tag: this.tag,
                name: this.name,
                content: Comment.serializeDisplayParts(this.content),
            };
        }
        fromObject(de, obj) {
            // tag already set by Comment.fromObject
            this.name = obj.name;
            this.content = Comment.deserializeDisplayParts(de, obj.content);
        }
    }
    /**
     * A model that represents a comment.
     *
     * Instances of this model are created by the CommentPlugin. You can retrieve comments
     * through the {@link DeclarationReflection.comment} property.
     * @category Comments
     */
    let Comment = (() => {
        let _sourcePath_decorators;
        let _sourcePath_initializers = [];
        let _sourcePath_extraInitializers = [];
        let _discoveryId_decorators;
        let _discoveryId_initializers = [];
        let _discoveryId_extraInitializers = [];
        let _inheritedFromParentDeclaration_decorators;
        let _inheritedFromParentDeclaration_initializers = [];
        let _inheritedFromParentDeclaration_extraInitializers = [];
        return class Comment {
            static {
                const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
                _sourcePath_decorators = [NonEnumerable];
                _discoveryId_decorators = [NonEnumerable];
                _inheritedFromParentDeclaration_decorators = [NonEnumerable];
                __esDecorate$2(null, null, _sourcePath_decorators, { kind: "field", name: "sourcePath", static: false, private: false, access: { has: obj => "sourcePath" in obj, get: obj => obj.sourcePath, set: (obj, value) => { obj.sourcePath = value; } }, metadata: _metadata }, _sourcePath_initializers, _sourcePath_extraInitializers);
                __esDecorate$2(null, null, _discoveryId_decorators, { kind: "field", name: "discoveryId", static: false, private: false, access: { has: obj => "discoveryId" in obj, get: obj => obj.discoveryId, set: (obj, value) => { obj.discoveryId = value; } }, metadata: _metadata }, _discoveryId_initializers, _discoveryId_extraInitializers);
                __esDecorate$2(null, null, _inheritedFromParentDeclaration_decorators, { kind: "field", name: "inheritedFromParentDeclaration", static: false, private: false, access: { has: obj => "inheritedFromParentDeclaration" in obj, get: obj => obj.inheritedFromParentDeclaration, set: (obj, value) => { obj.inheritedFromParentDeclaration = value; } }, metadata: _metadata }, _inheritedFromParentDeclaration_initializers, _inheritedFromParentDeclaration_extraInitializers);
                if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            }
            /**
             * Debugging utility for combining parts into a simple string. Not suitable for
             * rendering, but can be useful in tests.
             */
            static combineDisplayParts(parts) {
                let result = "";
                for (const item of parts || []) {
                    switch (item.kind) {
                        case "text":
                        case "code":
                        case "relative-link":
                            result += item.text;
                            break;
                        case "inline-tag":
                            result += `{${item.tag} ${item.text}}`;
                            break;
                        default:
                            assertNever(item);
                    }
                }
                return result;
            }
            /**
             * Helper utility to clone {@link Comment.summary} or {@link CommentTag.content}
             */
            static cloneDisplayParts(parts) {
                return parts.map((p) => ({ ...p }));
            }
            static serializeDisplayParts(parts) {
                return parts?.map((part) => {
                    switch (part.kind) {
                        case "text":
                        case "code":
                            return { ...part };
                        case "inline-tag": {
                            let target;
                            if (typeof part.target === "string") {
                                target = part.target;
                            }
                            else if (part.target) {
                                if ("id" in part.target) {
                                    target = part.target.id;
                                }
                                else {
                                    target = part.target.toObject();
                                }
                            }
                            return {
                                ...part,
                                target,
                            };
                        }
                        case "relative-link": {
                            return {
                                ...part,
                            };
                        }
                    }
                });
            }
            // Since display parts are plain objects, this lives here
            static deserializeDisplayParts(de, parts) {
                const links = [];
                const files = [];
                const result = parts.map((part) => {
                    switch (part.kind) {
                        case "text":
                        case "code":
                            return { ...part };
                        case "inline-tag": {
                            if (typeof part.target === "number") {
                                const part2 = {
                                    kind: part.kind,
                                    tag: part.tag,
                                    text: part.text,
                                    target: undefined,
                                    tsLinkText: part.tsLinkText,
                                };
                                links.push([part.target, part2]);
                                return part2;
                            }
                            else if (typeof part.target === "string" ||
                                part.target === undefined) {
                                return {
                                    kind: "inline-tag",
                                    tag: part.tag,
                                    text: part.text,
                                    target: part.target,
                                    tsLinkText: part.tsLinkText,
                                };
                            }
                            else if (typeof part.target === "object") {
                                return {
                                    kind: "inline-tag",
                                    tag: part.tag,
                                    text: part.text,
                                    target: new ReflectionSymbolId(part.target),
                                    tsLinkText: part.tsLinkText,
                                };
                            }
                            else {
                                assertNever(part.target);
                            }
                            break;
                        }
                        case "relative-link": {
                            if (part.target) {
                                const part2 = {
                                    kind: "relative-link",
                                    text: part.text,
                                    target: null,
                                    targetAnchor: part.targetAnchor,
                                };
                                files.push([part.target, part2]);
                                return part2;
                            }
                            return {
                                ...part,
                                target: undefined,
                                targetAnchor: part.targetAnchor,
                            };
                        }
                    }
                });
                if (links.length || files.length) {
                    de.defer((project) => {
                        for (const [oldFileId, part] of files) {
                            part.target = de.oldFileIdToNewFileId[oldFileId];
                        }
                        for (const [oldId, part] of links) {
                            part.target = project.getReflectionById(de.oldIdToNewId[oldId] ?? -1);
                            if (!part.target) {
                                de.logger.warn(i18n.serialized_project_referenced_0_not_part_of_project(oldId.toString()));
                            }
                        }
                    });
                }
                return result;
            }
            /**
             * Splits the provided parts into a header (first line, as a string)
             * and body (remaining lines). If the header line contains inline tags
             * they will be serialized to a string.
             */
            static splitPartsToHeaderAndBody(parts) {
                let index = parts.findIndex((part) => {
                    switch (part.kind) {
                        case "text":
                        case "code":
                            return part.text.includes("\n");
                        case "inline-tag":
                        case "relative-link":
                            return false;
                    }
                });
                if (index === -1) {
                    return {
                        header: Comment.combineDisplayParts(parts),
                        body: [],
                    };
                }
                // Do not split a code block, stop the header at the end of the previous block
                if (parts[index].kind === "code") {
                    --index;
                }
                if (index === -1) {
                    return { header: "", body: Comment.cloneDisplayParts(parts) };
                }
                let header = Comment.combineDisplayParts(parts.slice(0, index));
                const split = parts[index].text.indexOf("\n");
                let body;
                if (split === -1) {
                    header += parts[index].text;
                    body = Comment.cloneDisplayParts(parts.slice(index + 1));
                }
                else {
                    header += parts[index].text.substring(0, split);
                    body = Comment.cloneDisplayParts(parts.slice(index));
                    body[0].text = body[0].text.substring(split + 1);
                }
                if (!body[0].text) {
                    body.shift();
                }
                return { header: header.trim(), body };
            }
            /**
             * The content of the comment which is not associated with a block tag.
             */
            summary;
            /**
             * All associated block level tags.
             */
            blockTags = [];
            /**
             * All modifier tags present on the comment, e.g. `@alpha`, `@beta`.
             */
            modifierTags = new Set();
            /**
             * Label associated with this reflection, if any (https://tsdoc.org/pages/tags/label/)
             */
            label;
            /**
             * Full path to the file where this comment originated from, if any.
             * This field will not be serialized, so will not be present when handling JSON-revived reflections.
             *
             * Note: This field is non-enumerable to make testing comment contents with `deepEqual` easier.
             */
            sourcePath = __runInitializers$2(this, _sourcePath_initializers, void 0);
            /**
             * Internal discovery ID used to prevent symbol comments from
             * being duplicated on signatures. Only set when the comment was created
             * from a `ts.CommentRange`.
             * @internal
             */
            discoveryId = (__runInitializers$2(this, _sourcePath_extraInitializers), __runInitializers$2(this, _discoveryId_initializers, void 0));
            /**
             * If the comment was inherited from a different "parent" declaration
             * (see #2545), then it is desirable to know this as any `@param` tags
             * which do not apply should not cause warnings. This is not serialized,
             * and only set when the comment was created from a `ts.CommentRange`.
             */
            inheritedFromParentDeclaration = (__runInitializers$2(this, _discoveryId_extraInitializers), __runInitializers$2(this, _inheritedFromParentDeclaration_initializers, void 0));
            /**
             * Creates a new Comment instance.
             */
            constructor(summary = [], blockTags = [], modifierTags = new Set()) {
                __runInitializers$2(this, _inheritedFromParentDeclaration_extraInitializers);
                this.summary = summary;
                this.blockTags = blockTags;
                this.modifierTags = modifierTags;
                extractLabelTag(this);
            }
            /**
             * Gets either the `@summary` tag, or a short version of the comment summary
             * section for rendering in module/namespace pages.
             */
            getShortSummary(useFirstParagraph) {
                const tag = this.getTag("@summary");
                if (tag)
                    return tag.content;
                if (!useFirstParagraph)
                    return [];
                let partsEnd = this.summary.findIndex((part) => {
                    switch (part.kind) {
                        case "text":
                            return part.text.includes("\n\n");
                        case "code":
                            return part.text.includes("\n");
                        case "inline-tag":
                        case "relative-link":
                            return false;
                        default:
                            assertNever(part);
                    }
                });
                const foundEnd = partsEnd !== -1;
                if (partsEnd === -1) {
                    partsEnd = this.summary.length - 1;
                }
                const summaryParts = this.summary.slice(0, partsEnd);
                if (partsEnd !== -1) {
                    const text = this.summary[partsEnd].text;
                    const paragraphEnd = text.indexOf("\n\n");
                    if (paragraphEnd !== -1) {
                        summaryParts.push({
                            ...this.summary[partsEnd],
                            text: text.slice(0, paragraphEnd),
                        });
                    }
                    else if (!foundEnd) {
                        summaryParts.push(this.summary[partsEnd]);
                    }
                }
                return summaryParts;
            }
            /**
             * Checks if this comment is roughly equal to the other comment.
             * This isn't exactly equal, but just "roughly equal" by the comment
             * text.
             */
            similarTo(other) {
                if (Comment.combineDisplayParts(this.summary) !==
                    Comment.combineDisplayParts(other.summary)) {
                    return false;
                }
                // Ignore modifier tags, as they could cause false negatives
                // if a cascaded modifier tag is present in one comment but not the other.
                if (this.blockTags.length !== other.blockTags.length) {
                    return false;
                }
                for (let i = 0; i < this.blockTags.length; ++i) {
                    if (!this.blockTags[i].similarTo(other.blockTags[i])) {
                        return false;
                    }
                }
                return true;
            }
            /**
             * Create a deep clone of this comment.
             */
            clone() {
                const comment = new Comment(Comment.cloneDisplayParts(this.summary), this.blockTags.map((tag) => tag.clone()), new Set(this.modifierTags));
                comment.discoveryId = this.discoveryId;
                comment.sourcePath = this.sourcePath;
                comment.inheritedFromParentDeclaration = this.inheritedFromParentDeclaration;
                return comment;
            }
            /**
             * Returns true if this comment is completely empty.
             * @internal
             */
            isEmpty() {
                return !this.hasVisibleComponent() && this.modifierTags.size === 0;
            }
            /**
             * Has this comment a visible component?
             *
             * @returns TRUE when this comment has a visible component.
             */
            hasVisibleComponent() {
                return (this.summary.some((x) => x.kind !== "text" || x.text !== "") ||
                    this.blockTags.length > 0);
            }
            /**
             * Test whether this comment contains a tag with the given name.
             *
             * @param tagName  The name of the tag to look for.
             * @returns TRUE when this comment contains a tag with the given name, otherwise FALSE.
             */
            hasModifier(tagName) {
                return this.modifierTags.has(tagName);
            }
            removeModifier(tagName) {
                this.modifierTags.delete(tagName);
            }
            /**
             * Return the first tag with the given name.
             *
             * @param tagName  The name of the tag to look for.
             * @returns The found tag or undefined.
             */
            getTag(tagName) {
                return this.blockTags.find((tag) => tag.tag === tagName);
            }
            /**
             * Get all tags with the given tag name.
             */
            getTags(tagName) {
                return this.blockTags.filter((tag) => tag.tag === tagName);
            }
            getIdentifiedTag(identifier, tagName) {
                return this.blockTags.find((tag) => tag.tag === tagName && tag.name === identifier);
            }
            /**
             * Removes all block tags with the given tag name from the comment.
             * @param tagName
             */
            removeTags(tagName) {
                removeIf(this.blockTags, (tag) => tag.tag === tagName);
            }
            toObject(serializer) {
                return {
                    summary: Comment.serializeDisplayParts(this.summary),
                    blockTags: serializer.toObjectsOptional(this.blockTags),
                    modifierTags: this.modifierTags.size > 0
                        ? Array.from(this.modifierTags)
                        : undefined,
                    label: this.label,
                };
            }
            fromObject(de, obj) {
                this.summary = Comment.deserializeDisplayParts(de, obj.summary);
                this.blockTags = obj.blockTags?.map((tagObj) => {
                    const tag = new CommentTag(tagObj.tag, []);
                    de.fromObject(tag, tagObj);
                    return tag;
                }) || [];
                this.modifierTags = new Set(obj.modifierTags);
                this.label = obj.label;
            }
        };
    })();
    function extractLabelTag(comment) {
        const index = comment.summary.findIndex((part) => part.kind === "inline-tag" && part.tag === "@label");
        if (index !== -1) {
            comment.label = comment.summary.splice(index, 1)[0].text;
        }
    }

    /**
     * Defines the available reflection kinds.
     * @category Reflections
     */
    var ReflectionKind;
    (function (ReflectionKind) {
        ReflectionKind[ReflectionKind["Project"] = 1] = "Project";
        ReflectionKind[ReflectionKind["Module"] = 2] = "Module";
        ReflectionKind[ReflectionKind["Namespace"] = 4] = "Namespace";
        ReflectionKind[ReflectionKind["Enum"] = 8] = "Enum";
        ReflectionKind[ReflectionKind["EnumMember"] = 16] = "EnumMember";
        ReflectionKind[ReflectionKind["Variable"] = 32] = "Variable";
        ReflectionKind[ReflectionKind["Function"] = 64] = "Function";
        ReflectionKind[ReflectionKind["Class"] = 128] = "Class";
        ReflectionKind[ReflectionKind["Interface"] = 256] = "Interface";
        ReflectionKind[ReflectionKind["Constructor"] = 512] = "Constructor";
        ReflectionKind[ReflectionKind["Property"] = 1024] = "Property";
        ReflectionKind[ReflectionKind["Method"] = 2048] = "Method";
        ReflectionKind[ReflectionKind["CallSignature"] = 4096] = "CallSignature";
        ReflectionKind[ReflectionKind["IndexSignature"] = 8192] = "IndexSignature";
        ReflectionKind[ReflectionKind["ConstructorSignature"] = 16384] = "ConstructorSignature";
        ReflectionKind[ReflectionKind["Parameter"] = 32768] = "Parameter";
        ReflectionKind[ReflectionKind["TypeLiteral"] = 65536] = "TypeLiteral";
        ReflectionKind[ReflectionKind["TypeParameter"] = 131072] = "TypeParameter";
        ReflectionKind[ReflectionKind["Accessor"] = 262144] = "Accessor";
        ReflectionKind[ReflectionKind["GetSignature"] = 524288] = "GetSignature";
        ReflectionKind[ReflectionKind["SetSignature"] = 1048576] = "SetSignature";
        ReflectionKind[ReflectionKind["TypeAlias"] = 2097152] = "TypeAlias";
        ReflectionKind[ReflectionKind["Reference"] = 4194304] = "Reference";
        /**
         * Generic non-ts content to be included in the generated docs as its own page.
         */
        ReflectionKind[ReflectionKind["Document"] = 8388608] = "Document";
    })(ReflectionKind || (ReflectionKind = {}));
    /** @category Reflections */
    (function (ReflectionKind) {
        /** @internal */
        ReflectionKind.All = ReflectionKind.Reference * 2 - 1;
        /** @internal */
        ReflectionKind.ClassOrInterface = ReflectionKind.Class | ReflectionKind.Interface;
        /** @internal */
        ReflectionKind.VariableOrProperty = ReflectionKind.Variable | ReflectionKind.Property;
        /** @internal */
        ReflectionKind.FunctionOrMethod = ReflectionKind.Function | ReflectionKind.Method;
        /** @internal */
        ReflectionKind.ClassMember = ReflectionKind.Accessor |
            ReflectionKind.Constructor |
            ReflectionKind.Method |
            ReflectionKind.Property;
        /** @internal */
        ReflectionKind.SomeSignature = ReflectionKind.CallSignature |
            ReflectionKind.IndexSignature |
            ReflectionKind.ConstructorSignature |
            ReflectionKind.GetSignature |
            ReflectionKind.SetSignature;
        /** @internal */
        ReflectionKind.SomeModule = ReflectionKind.Namespace | ReflectionKind.Module;
        /** @internal */
        ReflectionKind.SomeType = ReflectionKind.Interface |
            ReflectionKind.TypeLiteral |
            ReflectionKind.TypeParameter |
            ReflectionKind.TypeAlias;
        /** @internal */
        ReflectionKind.SomeValue = ReflectionKind.Variable | ReflectionKind.Function;
        /** @internal */
        ReflectionKind.SomeMember = ReflectionKind.EnumMember |
            ReflectionKind.Property |
            ReflectionKind.Method |
            ReflectionKind.Accessor;
        /** @internal */
        ReflectionKind.SomeExport = ReflectionKind.Module |
            ReflectionKind.Namespace |
            ReflectionKind.Enum |
            ReflectionKind.Variable |
            ReflectionKind.Function |
            ReflectionKind.Class |
            ReflectionKind.Interface |
            ReflectionKind.TypeAlias |
            ReflectionKind.Reference;
        /** @internal */
        ReflectionKind.MayContainDocuments = ReflectionKind.SomeExport | ReflectionKind.Project | ReflectionKind.Document;
        /** @internal */
        ReflectionKind.ExportContainer = ReflectionKind.SomeModule | ReflectionKind.Project;
        /** @internal */
        ReflectionKind.Inheritable = ReflectionKind.Accessor |
            ReflectionKind.IndexSignature |
            ReflectionKind.Property |
            ReflectionKind.Method |
            ReflectionKind.Constructor;
        /** @internal */
        ReflectionKind.ContainsCallSignatures = ReflectionKind.Constructor |
            ReflectionKind.Function |
            ReflectionKind.Method;
        // The differences between Type/Value here only really matter for
        // possibly merged declarations where we have multiple reflections.
        /** @internal */
        ReflectionKind.TypeReferenceTarget = ReflectionKind.Interface |
            ReflectionKind.TypeAlias |
            ReflectionKind.Class |
            ReflectionKind.Enum;
        /** @internal */
        ReflectionKind.ValueReferenceTarget = ReflectionKind.Module |
            ReflectionKind.Namespace |
            ReflectionKind.Variable |
            ReflectionKind.Function;
        /**
         * Note: This does not include Class/Interface, even though they technically could contain index signatures
         * @internal
         */
        ReflectionKind.SignatureContainer = ReflectionKind.ContainsCallSignatures | ReflectionKind.Accessor;
        /** @internal */
        ReflectionKind.VariableContainer = ReflectionKind.SomeModule | ReflectionKind.Project;
        /** @internal */
        ReflectionKind.MethodContainer = ReflectionKind.ClassOrInterface |
            ReflectionKind.VariableOrProperty |
            ReflectionKind.FunctionOrMethod |
            ReflectionKind.TypeLiteral;
        function singularString(kind) {
            switch (kind) {
                case ReflectionKind.Project:
                    return i18n.kind_project();
                case ReflectionKind.Module:
                    return i18n.kind_module();
                case ReflectionKind.Namespace:
                    return i18n.kind_namespace();
                case ReflectionKind.Enum:
                    return i18n.kind_enum();
                case ReflectionKind.EnumMember:
                    return i18n.kind_enum_member();
                case ReflectionKind.Variable:
                    return i18n.kind_variable();
                case ReflectionKind.Function:
                    return i18n.kind_function();
                case ReflectionKind.Class:
                    return i18n.kind_class();
                case ReflectionKind.Interface:
                    return i18n.kind_interface();
                case ReflectionKind.Constructor:
                    return i18n.kind_constructor();
                case ReflectionKind.Property:
                    return i18n.kind_property();
                case ReflectionKind.Method:
                    return i18n.kind_method();
                case ReflectionKind.CallSignature:
                    return i18n.kind_call_signature();
                case ReflectionKind.IndexSignature:
                    return i18n.kind_index_signature();
                case ReflectionKind.ConstructorSignature:
                    return i18n.kind_constructor_signature();
                case ReflectionKind.Parameter:
                    return i18n.kind_parameter();
                case ReflectionKind.TypeLiteral:
                    return i18n.kind_type_literal();
                case ReflectionKind.TypeParameter:
                    return i18n.kind_type_parameter();
                case ReflectionKind.Accessor:
                    return i18n.kind_accessor();
                case ReflectionKind.GetSignature:
                    return i18n.kind_get_signature();
                case ReflectionKind.SetSignature:
                    return i18n.kind_set_signature();
                case ReflectionKind.TypeAlias:
                    return i18n.kind_type_alias();
                case ReflectionKind.Reference:
                    return i18n.kind_reference();
                case ReflectionKind.Document:
                    return i18n.kind_document();
            }
        }
        ReflectionKind.singularString = singularString;
        function pluralString(kind) {
            switch (kind) {
                case ReflectionKind.Project:
                    return i18n.kind_plural_project();
                case ReflectionKind.Module:
                    return i18n.kind_plural_module();
                case ReflectionKind.Namespace:
                    return i18n.kind_plural_namespace();
                case ReflectionKind.Enum:
                    return i18n.kind_plural_enum();
                case ReflectionKind.EnumMember:
                    return i18n.kind_plural_enum_member();
                case ReflectionKind.Variable:
                    return i18n.kind_plural_variable();
                case ReflectionKind.Function:
                    return i18n.kind_plural_function();
                case ReflectionKind.Class:
                    return i18n.kind_plural_class();
                case ReflectionKind.Interface:
                    return i18n.kind_plural_interface();
                case ReflectionKind.Constructor:
                    return i18n.kind_plural_constructor();
                case ReflectionKind.Property:
                    return i18n.kind_plural_property();
                case ReflectionKind.Method:
                    return i18n.kind_plural_method();
                case ReflectionKind.CallSignature:
                    return i18n.kind_plural_call_signature();
                case ReflectionKind.IndexSignature:
                    return i18n.kind_plural_index_signature();
                case ReflectionKind.ConstructorSignature:
                    return i18n.kind_plural_constructor_signature();
                case ReflectionKind.Parameter:
                    return i18n.kind_plural_parameter();
                case ReflectionKind.TypeLiteral:
                    return i18n.kind_plural_type_literal();
                case ReflectionKind.TypeParameter:
                    return i18n.kind_plural_type_parameter();
                case ReflectionKind.Accessor:
                    return i18n.kind_plural_accessor();
                case ReflectionKind.GetSignature:
                    return i18n.kind_plural_get_signature();
                case ReflectionKind.SetSignature:
                    return i18n.kind_plural_set_signature();
                case ReflectionKind.TypeAlias:
                    return i18n.kind_plural_type_alias();
                case ReflectionKind.Reference:
                    return i18n.kind_plural_reference();
                case ReflectionKind.Document:
                    return i18n.kind_plural_document();
            }
        }
        ReflectionKind.pluralString = pluralString;
        function classString(kind) {
            return `tsd-kind-${ReflectionKind[kind]
            .replace(/(.)([A-Z])/g, (_m, a, b) => `${a}-${b}`)
            .toLowerCase()}`;
        }
        ReflectionKind.classString = classString;
    })(ReflectionKind || (ReflectionKind = {}));

    var __esDecorate$1 = (globalThis && globalThis.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access) context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0) continue;
                if (result === null || typeof result !== "object") throw new TypeError("Object expected");
                if (_ = accept(result.get)) descriptor.get = _;
                if (_ = accept(result.set)) descriptor.set = _;
                if (_ = accept(result.init)) initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field") initializers.unshift(_);
                else descriptor[key] = _;
            }
        }
        if (target) Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    };
    var __runInitializers$1 = (globalThis && globalThis.__runInitializers) || function (thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    };
    /**
     * Current reflection id.
     */
    let REFLECTION_ID = 0;
    var ReflectionFlag;
    (function (ReflectionFlag) {
        ReflectionFlag[ReflectionFlag["None"] = 0] = "None";
        ReflectionFlag[ReflectionFlag["Private"] = 1] = "Private";
        ReflectionFlag[ReflectionFlag["Protected"] = 2] = "Protected";
        ReflectionFlag[ReflectionFlag["Public"] = 4] = "Public";
        ReflectionFlag[ReflectionFlag["Static"] = 8] = "Static";
        ReflectionFlag[ReflectionFlag["External"] = 16] = "External";
        ReflectionFlag[ReflectionFlag["Optional"] = 32] = "Optional";
        ReflectionFlag[ReflectionFlag["Rest"] = 64] = "Rest";
        ReflectionFlag[ReflectionFlag["Abstract"] = 128] = "Abstract";
        ReflectionFlag[ReflectionFlag["Const"] = 256] = "Const";
        ReflectionFlag[ReflectionFlag["Readonly"] = 512] = "Readonly";
        ReflectionFlag[ReflectionFlag["Inherited"] = 1024] = "Inherited";
    })(ReflectionFlag || (ReflectionFlag = {}));
    const relevantFlags = [
        ReflectionFlag.Private,
        ReflectionFlag.Protected,
        ReflectionFlag.Static,
        ReflectionFlag.Optional,
        ReflectionFlag.Abstract,
        ReflectionFlag.Const,
        ReflectionFlag.Readonly,
    ];
    /**
     * This must extend Array in order to work with Handlebar's each helper.
     */
    class ReflectionFlags {
        flags = ReflectionFlag.None;
        hasFlag(flag) {
            return (flag & this.flags) !== 0;
        }
        /**
         * Is this a private member?
         */
        get isPrivate() {
            return this.hasFlag(ReflectionFlag.Private);
        }
        /**
         * Is this a protected member?
         */
        get isProtected() {
            return this.hasFlag(ReflectionFlag.Protected);
        }
        /**
         * Is this a public member?
         */
        get isPublic() {
            return this.hasFlag(ReflectionFlag.Public);
        }
        /**
         * Is this a static member?
         */
        get isStatic() {
            return this.hasFlag(ReflectionFlag.Static);
        }
        /**
         * Is this a declaration from an external document?
         */
        get isExternal() {
            return this.hasFlag(ReflectionFlag.External);
        }
        /**
         * Whether this reflection is an optional component or not.
         *
         * Applies to function parameters and object members.
         */
        get isOptional() {
            return this.hasFlag(ReflectionFlag.Optional);
        }
        /**
         * Whether it's a rest parameter, like `foo(...params);`.
         */
        get isRest() {
            return this.hasFlag(ReflectionFlag.Rest);
        }
        get isAbstract() {
            return this.hasFlag(ReflectionFlag.Abstract);
        }
        get isConst() {
            return this.hasFlag(ReflectionFlag.Const);
        }
        get isReadonly() {
            return this.hasFlag(ReflectionFlag.Readonly);
        }
        get isInherited() {
            return this.hasFlag(ReflectionFlag.Inherited);
        }
        setFlag(flag, set) {
            switch (flag) {
                case ReflectionFlag.Private:
                    this.setSingleFlag(ReflectionFlag.Private, set);
                    if (set) {
                        this.setFlag(ReflectionFlag.Protected, false);
                        this.setFlag(ReflectionFlag.Public, false);
                    }
                    break;
                case ReflectionFlag.Protected:
                    this.setSingleFlag(ReflectionFlag.Protected, set);
                    if (set) {
                        this.setFlag(ReflectionFlag.Private, false);
                        this.setFlag(ReflectionFlag.Public, false);
                    }
                    break;
                case ReflectionFlag.Public:
                    this.setSingleFlag(ReflectionFlag.Public, set);
                    if (set) {
                        this.setFlag(ReflectionFlag.Private, false);
                        this.setFlag(ReflectionFlag.Protected, false);
                    }
                    break;
                default:
                    this.setSingleFlag(flag, set);
            }
        }
        static flagString(flag) {
            switch (flag) {
                case ReflectionFlag.None:
                    throw new Error("Should be unreachable");
                case ReflectionFlag.Private:
                    return i18n.flag_private();
                case ReflectionFlag.Protected:
                    return i18n.flag_protected();
                case ReflectionFlag.Public:
                    return i18n.flag_public();
                case ReflectionFlag.Static:
                    return i18n.flag_static();
                case ReflectionFlag.External:
                    return i18n.flag_external();
                case ReflectionFlag.Optional:
                    return i18n.flag_optional();
                case ReflectionFlag.Rest:
                    return i18n.flag_rest();
                case ReflectionFlag.Abstract:
                    return i18n.flag_abstract();
                case ReflectionFlag.Const:
                    return i18n.flag_const();
                case ReflectionFlag.Readonly:
                    return i18n.flag_readonly();
                case ReflectionFlag.Inherited:
                    return i18n.flag_inherited();
            }
        }
        getFlagStrings() {
            const strings = [];
            for (const flag of relevantFlags) {
                if (this.hasFlag(flag)) {
                    strings.push(ReflectionFlags.flagString(flag));
                }
            }
            return strings;
        }
        setSingleFlag(flag, set) {
            if (!set && this.hasFlag(flag)) {
                this.flags ^= flag;
            }
            else if (set && !this.hasFlag(flag)) {
                this.flags |= flag;
            }
        }
        static serializedFlags = [
            "isPrivate",
            "isProtected",
            "isPublic",
            "isStatic",
            "isExternal",
            "isOptional",
            "isRest",
            "isAbstract",
            "isConst",
            "isReadonly",
            "isInherited",
        ];
        toObject() {
            return Object.fromEntries(ReflectionFlags.serializedFlags
                .filter((flag) => this[flag])
                .map((flag) => [flag, true]));
        }
        fromObject(obj) {
            for (const key of Object.keys(obj)) {
                const flagName = key.substring(2); // isPublic => Public
                if (flagName in ReflectionFlag) {
                    this.setFlag(ReflectionFlag[flagName], true);
                }
            }
        }
    }
    var TraverseProperty;
    (function (TraverseProperty) {
        TraverseProperty[TraverseProperty["Children"] = 0] = "Children";
        TraverseProperty[TraverseProperty["Documents"] = 1] = "Documents";
        TraverseProperty[TraverseProperty["Parameters"] = 2] = "Parameters";
        TraverseProperty[TraverseProperty["TypeLiteral"] = 3] = "TypeLiteral";
        TraverseProperty[TraverseProperty["TypeParameter"] = 4] = "TypeParameter";
        TraverseProperty[TraverseProperty["Signatures"] = 5] = "Signatures";
        TraverseProperty[TraverseProperty["IndexSignature"] = 6] = "IndexSignature";
        TraverseProperty[TraverseProperty["GetSignature"] = 7] = "GetSignature";
        TraverseProperty[TraverseProperty["SetSignature"] = 8] = "SetSignature";
    })(TraverseProperty || (TraverseProperty = {}));
    /**
     * Base class for all reflection classes.
     *
     * While generating a documentation, TypeDoc generates an instance of {@link ProjectReflection}
     * as the root for all reflections within the project. All other reflections are represented
     * by the {@link DeclarationReflection} class.
     *
     * This base class exposes the basic properties one may use to traverse the reflection tree.
     * You can use the {@link ContainerReflection.children} and {@link parent} properties to walk the tree. The {@link ContainerReflection.groups} property
     * contains a list of all children grouped and sorted for rendering.
     * @category Reflections
     */
    (() => {
        let _parent_decorators;
        let _parent_initializers = [];
        let _parent_extraInitializers = [];
        let _project_decorators;
        let _project_initializers = [];
        let _project_extraInitializers = [];
        return class Reflection {
            static {
                const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
                _parent_decorators = [NonEnumerable];
                _project_decorators = [NonEnumerable];
                __esDecorate$1(null, null, _parent_decorators, { kind: "field", name: "parent", static: false, private: false, access: { has: obj => "parent" in obj, get: obj => obj.parent, set: (obj, value) => { obj.parent = value; } }, metadata: _metadata }, _parent_initializers, _parent_extraInitializers);
                __esDecorate$1(null, null, _project_decorators, { kind: "field", name: "project", static: false, private: false, access: { has: obj => "project" in obj, get: obj => obj.project, set: (obj, value) => { obj.project = value; } }, metadata: _metadata }, _project_initializers, _project_extraInitializers);
                if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            }
            /**
             * Unique id of this reflection.
             */
            id;
            /**
             * The symbol name of this reflection.
             */
            name;
            /**
             * The kind of this reflection.
             */
            kind;
            flags = new ReflectionFlags();
            /**
             * The reflection this reflection is a child of.
             */
            parent = __runInitializers$1(this, _parent_initializers, void 0);
            project = (__runInitializers$1(this, _parent_extraInitializers), __runInitializers$1(this, _project_initializers, void 0));
            /**
             * The parsed documentation comment attached to this reflection.
             */
            comment = __runInitializers$1(this, _project_extraInitializers);
            constructor(name, kind, parent) {
                this.id = REFLECTION_ID++;
                this.parent = parent;
                this.project = parent?.project || this;
                this.name = name;
                this.kind = kind;
                // If our parent is external, we are too.
                if (parent?.flags.isExternal) {
                    this.setFlag(ReflectionFlag.External);
                }
            }
            /**
             * Test whether this reflection is of the given kind.
             */
            kindOf(kind) {
                const kindFlags = Array.isArray(kind)
                    ? kind.reduce((a, b) => a | b, 0)
                    : kind;
                return (this.kind & kindFlags) !== 0;
            }
            /**
             * Return the full name of this reflection. Intended for use in debugging. For log messages
             * intended to be displayed to the user for them to fix, prefer {@link getFriendlyFullName} instead.
             *
             * The full name contains the name of this reflection and the names of all parent reflections.
             *
             * @param separator  Separator used to join the names of the reflections.
             * @returns The full name of this reflection.
             */
            getFullName(separator = ".") {
                if (this.parent && !this.parent.isProject()) {
                    return this.parent.getFullName(separator) + separator + this.name;
                }
                else {
                    return this.name;
                }
            }
            /**
             * Return the full name of this reflection, with signature names dropped if possible without
             * introducing ambiguity in the name.
             */
            getFriendlyFullName() {
                if (this.parent && !this.parent.isProject()) {
                    if (this.kindOf(ReflectionKind.ConstructorSignature |
                        ReflectionKind.CallSignature |
                        ReflectionKind.GetSignature |
                        ReflectionKind.SetSignature)) {
                        return this.parent.getFriendlyFullName();
                    }
                    return this.parent.getFriendlyFullName() + "." + this.name;
                }
                else {
                    return this.name;
                }
            }
            /**
             * Set a flag on this reflection.
             */
            setFlag(flag, value = true) {
                this.flags.setFlag(flag, value);
            }
            /**
             * Has this reflection a visible comment?
             *
             * @returns TRUE when this reflection has a visible comment.
             */
            hasComment() {
                return this.comment ? this.comment.hasVisibleComponent() : false;
            }
            hasGetterOrSetter() {
                return false;
            }
            /**
             * Return a child by its name.
             *
             * @param arg The name hierarchy of the child to look for.
             * @returns The found child or undefined.
             */
            getChildByName(arg) {
                const names = Array.isArray(arg)
                    ? arg
                    : splitUnquotedString(arg, ".");
                const name = names[0];
                let result;
                this.traverse((child) => {
                    if (child.name === name) {
                        if (names.length <= 1) {
                            result = child;
                        }
                        else {
                            result = child.getChildByName(names.slice(1));
                        }
                        return false;
                    }
                    return true;
                });
                return result;
            }
            /**
             * Return whether this reflection is the root / project reflection.
             */
            isProject() {
                return false;
            }
            isDeclaration() {
                return false;
            }
            isSignature() {
                return false;
            }
            isTypeParameter() {
                return false;
            }
            isParameter() {
                return false;
            }
            isDocument() {
                return false;
            }
            isReference() {
                return this.variant === "reference";
            }
            /**
             * Check if this reflection or any of its parents have been marked with the `@deprecated` tag.
             */
            isDeprecated() {
                let signaturesDeprecated = false;
                this.visit({
                    declaration(decl) {
                        if (decl.signatures?.length &&
                            decl.signatures.every((sig) => sig.comment?.getTag("@deprecated"))) {
                            signaturesDeprecated = true;
                        }
                    },
                });
                if (signaturesDeprecated || this.comment?.getTag("@deprecated")) {
                    return true;
                }
                return this.parent?.isDeprecated() ?? false;
            }
            visit(visitor) {
                visitor[this.variant]?.(this);
            }
            /**
             * Return a string representation of this reflection.
             */
            toString() {
                return ReflectionKind[this.kind] + " " + this.name;
            }
            /**
             * Return a string representation of this reflection and all of its children.
             *
             * Note: This is intended as a debug tool only, output may change between patch versions.
             *
             * @param indent  Used internally to indent child reflections.
             */
            toStringHierarchy(indent = "") {
                const lines = [indent + this.toString()];
                indent += "  ";
                this.traverse((child) => {
                    lines.push(child.toStringHierarchy(indent));
                    return true;
                });
                return lines.join("\n");
            }
            toObject(serializer) {
                return {
                    id: this.id,
                    name: this.name,
                    variant: this.variant,
                    kind: this.kind,
                    flags: this.flags.toObject(),
                    comment: this.comment && !this.comment.isEmpty()
                        ? serializer.toObject(this.comment)
                        : undefined,
                };
            }
            fromObject(de, obj) {
                // DO NOT copy id from obj. When deserializing reflections
                // they should be given new ids since they belong to a different project.
                this.name = obj.name;
                // Skip copying variant, we know it's already the correct value because the deserializer
                // will construct the correct class type.
                this.kind = obj.kind;
                this.flags.fromObject(obj.flags);
                // Parent is set during construction, so we don't need to do it here.
                this.comment = de.revive(obj.comment, () => new Comment());
                // url, anchor, hasOwnDocument, _alias, _aliases are set during rendering and only relevant during render.
                // It doesn't make sense to serialize them to json, or restore them.
            }
        };
    })();

    var __esDecorate = (globalThis && globalThis.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access) context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0) continue;
                if (result === null || typeof result !== "object") throw new TypeError("Object expected");
                if (_ = accept(result.get)) descriptor.get = _;
                if (_ = accept(result.set)) descriptor.set = _;
                if (_ = accept(result.init)) initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field") initializers.unshift(_);
                else descriptor[key] = _;
            }
        }
        if (target) Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    };
    var __runInitializers = (globalThis && globalThis.__runInitializers) || function (thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    };
    /**
     * Base class of all type definitions.
     * @category Types
     */
    class Type {
        /**
         * Return a string representation of this type.
         */
        toString() {
            return this.stringify(TypeContext.none);
        }
        visit(visitor, ...args) {
            return visitor[this.type]?.(this, ...args);
        }
        stringify(context) {
            if (this.needsParenthesis(context)) {
                return `(${this.getTypeString()})`;
            }
            return this.getTypeString();
        }
        // Nothing to do for the majority of types.
        fromObject(_de, _obj) { }
        /**
         * Return the estimated size of the type if it was all printed on one line.
         */
        estimatePrintWidth() {
            return this.getTypeString().length;
        }
    }
    /**
     * Enumeration that can be used when traversing types to track the location of recursion.
     * Used by TypeDoc internally to track when to output parenthesis when rendering.
     * @enum
     */
    const TypeContext = {
        none: "none",
        referenceTypeArgument: "referenceTypeArgument"};
    /**
     * Represents a type that refers to another reflection like a class, interface or enum.
     *
     * ```ts
     * let value: MyClass<T>;
     * ```
     * @category Types
     */
    (() => {
        let _classSuper = Type;
        let __project_decorators;
        let __project_initializers = [];
        let __project_extraInitializers = [];
        return class ReferenceType extends _classSuper {
            static {
                const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
                __project_decorators = [NonEnumerable];
                __esDecorate(null, null, __project_decorators, { kind: "field", name: "_project", static: false, private: false, access: { has: obj => "_project" in obj, get: obj => obj._project, set: (obj, value) => { obj._project = value; } }, metadata: _metadata }, __project_initializers, __project_extraInitializers);
                if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            }
            type = "reference";
            /**
             * The name of the referenced type.
             *
             * If the symbol cannot be found because it's not part of the documentation this
             * can be used to represent the type.
             */
            name;
            /**
             * The type arguments of this reference.
             */
            typeArguments;
            /**
             * The resolved reflection.
             */
            get reflection() {
                if (typeof this._target === "number") {
                    return this._project?.getReflectionById(this._target);
                }
                const resolvePotential = this._project?.getReflectionsFromSymbolId(this._target);
                if (!resolvePotential?.length) {
                    return;
                }
                const kind = this.preferValues
                    ? ReflectionKind.ValueReferenceTarget
                    : ReflectionKind.TypeReferenceTarget;
                const resolved = resolvePotential.find((refl) => refl.kindOf(kind)) ||
                    resolvePotential.find((refl) => refl.kindOf(~kind));
                // Do not mark the type as resolved at this point so that if it
                // points to a member which is removed (e.g. by typedoc-plugin-zod)
                // and then replaced it still ends up pointing at the right reflection.
                // We will lock type reference resolution when serializing to JSON.
                // this._target = resolved.id;
                return resolved;
            }
            /**
             * Sometimes a few properties are more important than the rest
             * of the properties within a type. This occurs most often with
             * object parameters, where users want to specify `@param foo.bar`
             * to highlight something about the `bar` property.
             *
             * Does NOT support nested properties.
             */
            highlightedProperties;
            /**
             * If not resolved, the symbol id of the reflection, otherwise undefined.
             */
            get symbolId() {
                if (!this.reflection && typeof this._target === "object") {
                    return this._target;
                }
            }
            /**
             * Checks if this type is a reference type because it uses a name, but is intentionally not pointing
             * to a reflection. This happens for type parameters and when representing a mapped type.
             */
            isIntentionallyBroken() {
                if (typeof this._target === "object" &&
                    this._project?.symbolIdHasBeenRemoved(this._target)) {
                    return true;
                }
                return this._target === -1 || this.refersToTypeParameter;
            }
            /**
             * Convert this reference type to a declaration reference used for resolution of external types.
             */
            toDeclarationReference() {
                return {
                    resolutionStart: "global",
                    moduleSource: this.package,
                    symbolReference: {
                        path: this.qualifiedName
                            .split(".")
                            .map((p) => ({ path: p, navigation: "." })),
                    },
                };
            }
            /**
             * The fully qualified name of the referenced type, relative to the file it is defined in.
             * This will usually be the same as `name`, unless namespaces are used.
             */
            qualifiedName;
            /**
             * The package that this type is referencing.
             */
            package;
            /**
             * If this reference type refers to a reflection defined by a project not being rendered,
             * points to the url that this type should be linked to.
             */
            externalUrl;
            /**
             * If set, no warnings about something not being exported should be created
             * since this may be referring to a type created with `infer X` which will not
             * be registered on the project.
             */
            refersToTypeParameter = false;
            /**
             * If set, will prefer reflections with {@link ReflectionKind | ReflectionKinds} which represent
             * values rather than those which represent types.
             */
            preferValues = false;
            _target;
            _project = __runInitializers(this, __project_initializers, void 0);
            constructor(name, target, project, qualifiedName) {
                super();
                __runInitializers(this, __project_extraInitializers);
                this.name = name;
                if (typeof target === "number") {
                    this._target = target;
                }
                else {
                    this._target = "variant" in target ? target.id : target;
                }
                this._project = project;
                this.qualifiedName = qualifiedName;
            }
            static createUnresolvedReference(name, target, project, qualifiedName) {
                return new ReferenceType(name, target, project, qualifiedName);
            }
            static createResolvedReference(name, target, project) {
                return new ReferenceType(name, target, project, name);
            }
            /**
             * This is used for type parameters, which don't actually point to something,
             * and also for temporary references which will be cleaned up with real references
             * later during conversion.
             * @internal
             */
            static createBrokenReference(name, project) {
                return new ReferenceType(name, -1, project, name);
            }
            getTypeString() {
                const name = this.reflection ? this.reflection.name : this.name;
                let typeArgs = "";
                if (this.typeArguments && this.typeArguments.length > 0) {
                    typeArgs += "<";
                    typeArgs += this.typeArguments
                        .map((arg) => arg.stringify(TypeContext.referenceTypeArgument))
                        .join(", ");
                    typeArgs += ">";
                }
                return name + typeArgs;
            }
            needsParenthesis() {
                return false;
            }
            toObject(serializer) {
                let target;
                if (typeof this._target === "number") {
                    target = this._target;
                }
                else if (this._project?.symbolIdHasBeenRemoved(this._target)) {
                    target = -1;
                }
                else if (this.reflection) {
                    target = this.reflection.id;
                }
                else {
                    target = this._target.toObject();
                }
                const result = {
                    type: this.type,
                    target,
                    typeArguments: serializer.toObjectsOptional(this.typeArguments),
                    name: this.name,
                    package: this.package,
                    externalUrl: this.externalUrl,
                };
                if (this.name !== this.qualifiedName) {
                    result.qualifiedName = this.qualifiedName;
                }
                if (this.refersToTypeParameter) {
                    result.refersToTypeParameter = true;
                }
                if (typeof target !== "number" && this.preferValues) {
                    result.preferValues = true;
                }
                if (this.highlightedProperties) {
                    result.highlightedProperties = Object.fromEntries(Array.from(this.highlightedProperties.entries(), ([key, parts]) => {
                        return [
                            key,
                            Comment.serializeDisplayParts(parts),
                        ];
                    }));
                }
                return result;
            }
            fromObject(de, obj) {
                this.typeArguments = de.reviveMany(obj.typeArguments, (t) => de.constructType(t));
                if (typeof obj.target === "number" && obj.target !== -1) {
                    de.defer((project) => {
                        const target = project.getReflectionById(de.oldIdToNewId[obj.target] ?? -1);
                        if (target) {
                            this._project = project;
                            this._target = target.id;
                        }
                        else {
                            de.logger.warn(i18n.serialized_project_referenced_0_not_part_of_project(JSON.stringify(obj.target)));
                        }
                    });
                }
                else if (obj.target === -1) {
                    this._target = -1;
                }
                else {
                    this._project = de.project;
                    this._target = new ReflectionSymbolId(obj.target);
                }
                this.qualifiedName = obj.qualifiedName ?? obj.name;
                this.package = obj.package;
                this.refersToTypeParameter = !!obj.refersToTypeParameter;
                this.preferValues = !!obj.preferValues;
                if (obj.highlightedProperties) {
                    this.highlightedProperties = new Map();
                    for (const [key, parts] of Object.entries(obj.highlightedProperties)) {
                        this.highlightedProperties.set(key, Comment.deserializeDisplayParts(de, parts));
                    }
                }
            }
        };
    })();

    /**!
     * FlexSearch.js v0.8.161 (Bundle/Module)
     * Author and Copyright: Thomas Wilkerling
     * Licence: Apache-2.0
     * Hosted by Nextapps GmbH
     * https://github.com/nextapps-de/flexsearch
     */
    var v;function F(a,b,c){const e=typeof c,d=typeof a;if("undefined"!==e){if("undefined"!==d){if(c){if("function"===d&&e===d)return function(k){return a(c(k))};b=a.constructor;if(b===c.constructor){if(b===Array)return c.concat(a);if(b===Map){var f=new Map(c);for(var g of a)f.set(g[0],g[1]);return f}if(b===Set){g=new Set(c);for(f of a.values())g.add(f);return g}}}return a}return c}return "undefined"===d?b:a}function G(){return Object.create(null)}function L(a){return "string"===typeof a}
    function ca(a){return "object"===typeof a}function da(a){const b=[];for(const c of a.keys())b.push(c);return b}function ea(a,b){if(L(b))a=a[b];else for(let c=0;a&&c<b.length;c++)a=a[b[c]];return a}function fa(a){let b=0;for(let c=0,e;c<a.length;c++)(e=a[c])&&b<e.length&&(b=e.length);return b}const ha=/[^\p{L}\p{N}]+/u,ia=/(\d{3})/g,ja=/(\D)(\d{3})/g,ka=/(\d{3})(\D)/g,la=/[\u0300-\u036f]/g;function ma(a={}){if(!this||this.constructor!==ma)return new ma(...arguments);if(arguments.length)for(a=0;a<arguments.length;a++)this.assign(arguments[a]);else this.assign(a);}v=ma.prototype;
    v.assign=function(a){this.normalize=F(a.normalize,true,this.normalize);let b=a.include,c=b||a.exclude||a.split,e;if(c||""===c){if("object"===typeof c&&c.constructor!==RegExp){let d="";e=!b;b||(d+="\\p{Z}");c.letter&&(d+="\\p{L}");c.number&&(d+="\\p{N}",e=!!b);c.symbol&&(d+="\\p{S}");c.punctuation&&(d+="\\p{P}");c.control&&(d+="\\p{C}");if(c=c.char)d+="object"===typeof c?c.join(""):c;try{this.split=new RegExp("["+(b?"^":"")+d+"]+","u");}catch(f){this.split=/\s+/;}}else this.split=c,e=false===c||2>"a1a".split(c).length;
    this.numeric=F(a.numeric,e);}else {try{this.split=F(this.split,ha);}catch(d){this.split=/\s+/;}this.numeric=F(a.numeric,F(this.numeric,true));}this.prepare=F(a.prepare,null,this.prepare);this.finalize=F(a.finalize,null,this.finalize);c=a.filter;this.filter="function"===typeof c?c:F(c&&new Set(c),null,this.filter);this.dedupe=F(a.dedupe,true,this.dedupe);this.matcher=F((c=a.matcher)&&new Map(c),null,this.matcher);this.mapper=F((c=a.mapper)&&new Map(c),null,this.mapper);this.stemmer=F((c=a.stemmer)&&new Map(c),
    null,this.stemmer);this.replacer=F(a.replacer,null,this.replacer);this.minlength=F(a.minlength,1,this.minlength);this.maxlength=F(a.maxlength,1024,this.maxlength);this.rtl=F(a.rtl,false,this.rtl);if(this.cache=c=F(a.cache,true,this.cache))this.H=null,this.S="number"===typeof c?c:2E5,this.B=new Map,this.G=new Map,this.L=this.K=128;this.h="";this.M=null;this.A="";this.N=null;if(this.matcher)for(const d of this.matcher.keys())this.h+=(this.h?"|":"")+d;if(this.stemmer)for(const d of this.stemmer.keys())this.A+=
    (this.A?"|":"")+d;return this};v.addStemmer=function(a,b){this.stemmer||(this.stemmer=new Map);this.stemmer.set(a,b);this.A+=(this.A?"|":"")+a;this.N=null;this.cache&&N(this);return this};v.addFilter=function(a){"function"===typeof a?this.filter=a:(this.filter||(this.filter=new Set),this.filter.add(a));this.cache&&N(this);return this};
    v.addMapper=function(a,b){if("object"===typeof a)return this.addReplacer(a,b);if(1<a.length)return this.addMatcher(a,b);this.mapper||(this.mapper=new Map);this.mapper.set(a,b);this.cache&&N(this);return this};v.addMatcher=function(a,b){if("object"===typeof a)return this.addReplacer(a,b);if(2>a.length&&(this.dedupe||this.mapper))return this.addMapper(a,b);this.matcher||(this.matcher=new Map);this.matcher.set(a,b);this.h+=(this.h?"|":"")+a;this.M=null;this.cache&&N(this);return this};
    v.addReplacer=function(a,b){if("string"===typeof a)return this.addMatcher(a,b);this.replacer||(this.replacer=[]);this.replacer.push(a,b);this.cache&&N(this);return this};
    v.encode=function(a,b){if(this.cache&&a.length<=this.K)if(this.H){if(this.B.has(a))return this.B.get(a)}else this.H=setTimeout(N,50,this);this.normalize&&("function"===typeof this.normalize?a=this.normalize(a):a=la?a.normalize("NFKD").replace(la,"").toLowerCase():a.toLowerCase());this.prepare&&(a=this.prepare(a));this.numeric&&3<a.length&&(a=a.replace(ja,"$1 $2").replace(ka,"$1 $2").replace(ia,"$1 "));const c=!(this.dedupe||this.mapper||this.filter||this.matcher||this.stemmer||this.replacer);let e=
    [],d=G(),f,g,k=this.split||""===this.split?a.split(this.split):[a];for(let l=0,m,n;l<k.length;l++)if((m=n=k[l])&&!(m.length<this.minlength||m.length>this.maxlength)){if(b){if(d[m])continue;d[m]=1;}else {if(f===m)continue;f=m;}if(c)e.push(m);else if(!this.filter||("function"===typeof this.filter?this.filter(m):!this.filter.has(m))){if(this.cache&&m.length<=this.L)if(this.H){var h=this.G.get(m);if(h||""===h){h&&e.push(h);continue}}else this.H=setTimeout(N,50,this);if(this.stemmer){this.N||(this.N=new RegExp("(?!^)("+
    this.A+")$"));let r;for(;r!==m&&2<m.length;)r=m,m=m.replace(this.N,q=>this.stemmer.get(q));}if(m&&(this.mapper||this.dedupe&&1<m.length)){h="";for(let r=0,q="",t,u;r<m.length;r++)t=m.charAt(r),t===q&&this.dedupe||((u=this.mapper&&this.mapper.get(t))||""===u?u===q&&this.dedupe||!(q=u)||(h+=u):h+=q=t);m=h;}this.matcher&&1<m.length&&(this.M||(this.M=new RegExp("("+this.h+")","g")),m=m.replace(this.M,r=>this.matcher.get(r)));if(m&&this.replacer)for(h=0;m&&h<this.replacer.length;h+=2)m=m.replace(this.replacer[h],
    this.replacer[h+1]);this.cache&&n.length<=this.L&&(this.G.set(n,m),this.G.size>this.S&&(this.G.clear(),this.L=this.L/1.1|0));if(m){if(m!==n)if(b){if(d[m])continue;d[m]=1;}else {if(g===m)continue;g=m;}e.push(m);}}}this.finalize&&(e=this.finalize(e)||e);this.cache&&a.length<=this.K&&(this.B.set(a,e),this.B.size>this.S&&(this.B.clear(),this.K=this.K/1.1|0));return e};function N(a){a.H=null;a.B.clear();a.G.clear();}let pa,qa;async function ra(a){a=a.data;var b=a.task;const c=a.id;let e=a.args;switch(b){case "init":qa=a.options||{};(b=a.factory)?(Function("return "+b)()(self),pa=new self.FlexSearch.Index(qa),delete self.FlexSearch):pa=new O(qa);postMessage({id:c});break;default:let d;"export"===b&&(e[1]?(e[0]=qa.export,e[2]=0,e[3]=1):e=null);"import"===b?e[0]&&(a=await qa.import.call(pa,e[0]),pa.import(e[0],a)):(d=e&&pa[b].apply(pa,e))&&d.then&&(d=await d);postMessage("search"===b?{id:c,msg:d}:{id:c});}}function sa(a){ta.call(a,"add");ta.call(a,"append");ta.call(a,"search");ta.call(a,"update");ta.call(a,"remove");}let wa,xa,ya;function za(){wa=ya=0;}
    function ta(a){this[a+"Async"]=function(){const b=arguments;var c=b[b.length-1];let e;"function"===typeof c&&(e=c,delete b[b.length-1]);wa?ya||(ya=Date.now()-xa>=this.priority*this.priority*3):(wa=setTimeout(za,0),xa=Date.now());if(ya){const f=this;return new Promise(g=>{setTimeout(function(){g(f[a+"Async"].apply(f,b));},0);})}const d=this[a].apply(this,b);c=d.then?d:new Promise(f=>f(d));e&&c.then(e);return c};}let Aa=0;
    function Ba(a={}){function b(g){function k(h){h=h.data||h;const l=h.id,m=l&&d.h[l];m&&(m(h.msg),delete d.h[l]);}this.worker=g;this.h=G();if(this.worker){e?this.worker.on("message",k):this.worker.onmessage=k;if(a.config)return new Promise(function(h){d.h[++Aa]=function(){h(d);1E9<Aa&&(Aa=0);};d.worker.postMessage({id:Aa,task:"init",factory:c,options:a});});this.worker.postMessage({task:"init",factory:c,options:a});this.priority=a.priority||4;return this}}if(!this||this.constructor!==Ba)return new Ba(a);let c=
    "undefined"!==typeof self?self._factory:"undefined"!==typeof window?window._factory:null;c&&(c=c.toString());const e="undefined"===typeof window,d=this,f=Ca(c,e,a.worker);return f.then?f.then(function(g){return b.call(d,g)}):b.call(this,f)}P("add");P("append");P("search");P("update");P("remove");P("clear");P("export");P("import");sa(Ba.prototype);
    function P(a){Ba.prototype[a]=function(){const b=this,c=[].slice.call(arguments);var e=c[c.length-1];let d;"function"===typeof e&&(d=e,c.pop());e=new Promise(function(f){"export"===a&&"function"===typeof c[0]&&(c[0]=null);b.h[++Aa]=f;b.worker.postMessage({task:a,id:Aa,args:c});});return d?(e.then(d),this):e};}
    function Ca(a,b,c){return b?"undefined"!==typeof module?new(require("worker_threads")["Worker"])(__dirname+"/worker/node.js"):import('worker_threads').then(function(worker){return new worker["Worker"](undefined+"/node/node.mjs")}):a?new window.Worker(URL.createObjectURL(new Blob(["onmessage="+ra.toString()],{type:"text/javascript"}))):new window.Worker("string"===typeof c?c:(_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('index.js', document.baseURI).href).replace("/worker.js","/worker/worker.js").replace("flexsearch.bundle.module.min.js",
    "module/worker/worker.js"),{type:"module"})}function Da(a,b=0){let c=[],e=[];b&&(b=25E4/b*5E3|0);for(const d of a.entries())e.push(d),e.length===b&&(c.push(e),e=[]);e.length&&c.push(e);return c}function Ea(a,b){b||(b=new Map);for(let c=0,e;c<a.length;c++)e=a[c],b.set(e[0],e[1]);return b}function Fa(a,b=0){let c=[],e=[];b&&(b=25E4/b*1E3|0);for(const d of a.entries())e.push([d[0],Da(d[1])[0]]),e.length===b&&(c.push(e),e=[]);e.length&&c.push(e);return c}
    function Ga(a,b){b||(b=new Map);for(let c=0,e,d;c<a.length;c++)e=a[c],d=b.get(e[0]),b.set(e[0],Ea(e[1],d));return b}function Ha(a){let b=[],c=[];for(const e of a.keys())c.push(e),25E4===c.length&&(b.push(c),c=[]);c.length&&b.push(c);return b}function Ia(a,b){b||(b=new Set);for(let c=0;c<a.length;c++)b.add(a[c]);return b}
    function La(a,b,c,e,d,f,g=0){const k=e&&e.constructor===Array;var h=k?e.shift():e;if(!h)return this.export(a,b,d,f+1);if((h=a((b?b+".":"")+(g+1)+"."+c,JSON.stringify(h)))&&h.then){const l=this;return h.then(function(){return La.call(l,a,b,c,k?e:null,d,f,g+1)})}return La.call(this,a,b,c,k?e:null,d,f,g+1)}
    function Ma(a,b){let c="";for(const e of a.entries()){a=e[0];const d=e[1];let f="";for(let g=0,k;g<d.length;g++){k=d[g]||[""];let h="";for(let l=0;l<k.length;l++)h+=(h?",":"")+("string"===b?'"'+k[l]+'"':k[l]);h="["+h+"]";f+=(f?",":"")+h;}f='["'+a+'",['+f+"]]";c+=(c?",":"")+f;}return c}function Na(a,b,c,e){let d=[];for(let f=0,g;f<a.index.length;f++)if(g=a.index[f],b>=g.length)b-=g.length;else {b=g[e?"splice":"slice"](b,c);const k=b.length;if(k&&(d=d.length?d.concat(b):b,c-=k,e&&(a.length-=k),!c))break;b=0;}return d}
    function R(a){if(!this||this.constructor!==R)return new R(a);this.index=a?[a]:[];this.length=a?a.length:0;const b=this;return new Proxy([],{get(c,e){if("length"===e)return b.length;if("push"===e)return function(d){b.index[b.index.length-1].push(d);b.length++;};if("pop"===e)return function(){if(b.length)return b.length--,b.index[b.index.length-1].pop()};if("indexOf"===e)return function(d){let f=0;for(let g=0,k,h;g<b.index.length;g++){k=b.index[g];h=k.indexOf(d);if(0<=h)return f+h;f+=k.length;}return  -1};
    if("includes"===e)return function(d){for(let f=0;f<b.index.length;f++)if(b.index[f].includes(d))return  true;return  false};if("slice"===e)return function(d,f){return Na(b,d||0,f||b.length,false)};if("splice"===e)return function(d,f){return Na(b,d||0,f||b.length,true)};if("constructor"===e)return Array;if("symbol"!==typeof e)return (c=b.index[e/2**31|0])&&c[e]},set(c,e,d){c=e/2**31|0;(b.index[c]||(b.index[c]=[]))[e]=d;b.length++;return  true}})}R.prototype.clear=function(){this.index.length=0;};
    R.prototype.destroy=function(){this.proxy=this.index=null;};R.prototype.push=function(){};function T(a=8){if(!this||this.constructor!==T)return new T(a);this.index=G();this.h=[];this.size=0;32<a?(this.B=Oa,this.A=BigInt(a)):(this.B=Pa,this.A=a);}T.prototype.get=function(a){const b=this.index[this.B(a)];return b&&b.get(a)};T.prototype.set=function(a,b){var c=this.B(a);let e=this.index[c];e?(c=e.size,e.set(a,b),(c-=e.size)&&this.size++):(this.index[c]=e=new Map([[a,b]]),this.h.push(e),this.size++);};
    function U(a=8){if(!this||this.constructor!==U)return new U(a);this.index=G();this.h=[];this.size=0;32<a?(this.B=Oa,this.A=BigInt(a)):(this.B=Pa,this.A=a);}U.prototype.add=function(a){var b=this.B(a);let c=this.index[b];c?(b=c.size,c.add(a),(b-=c.size)&&this.size++):(this.index[b]=c=new Set([a]),this.h.push(c),this.size++);};v=T.prototype;v.has=U.prototype.has=function(a){const b=this.index[this.B(a)];return b&&b.has(a)};
    v.delete=U.prototype.delete=function(a){const b=this.index[this.B(a)];b&&b.delete(a)&&this.size--;};v.clear=U.prototype.clear=function(){this.index=G();this.h=[];this.size=0;};v.values=U.prototype.values=function*(){for(let a=0;a<this.h.length;a++)for(let b of this.h[a].values())yield b;};v.keys=U.prototype.keys=function*(){for(let a=0;a<this.h.length;a++)for(let b of this.h[a].keys())yield b;};v.entries=U.prototype.entries=function*(){for(let a=0;a<this.h.length;a++)for(let b of this.h[a].entries())yield b;};
    function Pa(a){let b=2**this.A-1;if("number"==typeof a)return a&b;let c=0,e=this.A+1;for(let d=0;d<a.length;d++)c=(c*e^a.charCodeAt(d))&b;return 32===this.A?c+2**31:c}function Oa(a){let b=BigInt(2)**this.A-BigInt(1);var c=typeof a;if("bigint"===c)return a&b;if("number"===c)return BigInt(a)&b;c=BigInt(0);let e=this.A+BigInt(1);for(let d=0;d<a.length;d++)c=(c*e^BigInt(a.charCodeAt(d)))&b;return c}W.prototype.add=function(a,b,c){ca(a)&&(b=a,a=ea(b,this.key));if(b&&(a||0===a)){if(!c&&this.reg.has(a))return this.update(a,b);for(let k=0,h;k<this.field.length;k++){h=this.F[k];var e=this.index.get(this.field[k]);if("function"===typeof h){var d=h(b);d&&e.add(a,d,false,true);}else if(d=h.I,!d||d(b))h.constructor===String?h=[""+h]:L(h)&&(h=[h]),Qa(b,h,this.J,0,e,a,h[0],c);}if(this.tag)for(e=0;e<this.D.length;e++){var f=this.D[e];d=this.tag.get(this.R[e]);let k=G();if("function"===typeof f){if(f=f(b),!f)continue}else {var g=
    f.I;if(g&&!g(b))continue;f.constructor===String&&(f=""+f);f=ea(b,f);}if(d&&f){L(f)&&(f=[f]);for(let h=0,l,m;h<f.length;h++)if(l=f[h],!k[l]&&(k[l]=1,(g=d.get(l))?m=g:d.set(l,m=[]),!c||!m.includes(a))){if(m.length===2**31-1){g=new R(m);if(this.fastupdate)for(let n of this.reg.values())n.includes(m)&&(n[n.indexOf(m)]=g);d.set(l,m=g);}m.push(a);this.fastupdate&&((g=this.reg.get(a))?g.push(m):this.reg.set(a,[m]));}}}if(this.store&&(!c||!this.store.has(a))){let k;if(this.C){k=G();for(let h=0,l;h<this.C.length;h++){l=
    this.C[h];if((c=l.I)&&!c(b))continue;let m;if("function"===typeof l){m=l(b);if(!m)continue;l=[l.V];}else if(L(l)||l.constructor===String){k[l]=b[l];continue}Ra(b,k,l,0,l[0],m);}}this.store.set(a,k||b);}this.worker&&(this.fastupdate||this.reg.add(a));}return this};function Ra(a,b,c,e,d,f){a=a[d];if(e===c.length-1)b[d]=f||a;else if(a)if(a.constructor===Array)for(b=b[d]=Array(a.length),d=0;d<a.length;d++)Ra(a,b,c,e,d);else b=b[d]||(b[d]=G()),d=c[++e],Ra(a,b,c,e,d);}
    function Qa(a,b,c,e,d,f,g,k){if(a=a[g])if(e===b.length-1){if(a.constructor===Array){if(c[e]){for(b=0;b<a.length;b++)d.add(f,a[b],true,true);return}a=a.join(" ");}d.add(f,a,k,true);}else if(a.constructor===Array)for(g=0;g<a.length;g++)Qa(a,b,c,e,d,f,g,k);else g=b[++e],Qa(a,b,c,e,d,f,g,k);else d.db&&d.remove(f);}function Sa(a,b,c,e,d,f,g){const k=a.length;let h=[],l,m;l=G();for(let n=0,r,q,t,u;n<b;n++)for(let p=0;p<k;p++)if(t=a[p],n<t.length&&(r=t[n]))for(let y=0;y<r.length;y++){q=r[y];(m=l[q])?l[q]++:(m=0,l[q]=1);u=h[m]||(h[m]=[]);if(!g){let x=n+(p||!d?0:f||0);u=u[x]||(u[x]=[]);}u.push(q);if(g&&c&&m===k-1&&u.length-e===c)return e?u.slice(e):u}if(a=h.length)if(d)h=1<h.length?Ta(h,c,e,g,f):(h=h[0]).length>c||e?h.slice(e,c+e):h;else {if(a<k)return [];h=h[a-1];if(c||e)if(g){if(h.length>c||e)h=h.slice(e,c+e);}else {d=
    [];for(let n=0,r;n<h.length;n++)if(r=h[n],r.length>e)e-=r.length;else {if(r.length>c||e)r=r.slice(e,c+e),c-=r.length,e&&(e-=r.length);d.push(r);if(!c)break}h=1<d.length?[].concat.apply([],d):d[0];}}return h}
    function Ta(a,b,c,e,d){const f=[],g=G();let k;var h=a.length;let l;if(e)for(d=h-1;0<=d;d--){if(l=(e=a[d])&&e.length)for(h=0;h<l;h++)if(k=e[h],!g[k])if(g[k]=1,c)c--;else if(f.push(k),f.length===b)return f}else for(let m=h-1,n,r=0;0<=m;m--){n=a[m];for(let q=0;q<n.length;q++)if(l=(e=n[q])&&e.length)for(let t=0;t<l;t++)if(k=e[t],!g[k])if(g[k]=1,c)c--;else {let u=(q+(m<h-1?d||0:0))/(m+1)|0;(f[u]||(f[u]=[])).push(k);if(++r===b)return f}}return f}
    function Ua(a,b,c){const e=G(),d=[];for(let f=0,g;f<b.length;f++){g=b[f];for(let k=0;k<g.length;k++)e[g[k]]=1;}if(c)for(let f=0,g;f<a.length;f++)g=a[f],e[g]&&(d.push(g),e[g]=0);else for(let f=0,g,k;f<a.result.length;f++)for(g=a.result[f],b=0;b<g.length;b++)k=g[b],e[k]&&((d[f]||(d[f]=[])).push(k),e[k]=0);return d}function Va(a,b,c,e){if(!a.length)return a;if(1===a.length)return a=a[0],a=c||a.length>b?b?a.slice(c,c+b):a.slice(c):a,e?X.call(this,a):a;let d=[];for(let f=0,g,k;f<a.length;f++)if((g=a[f])&&(k=g.length)){if(c){if(c>=k){c-=k;continue}c<k&&(g=b?g.slice(c,c+b):g.slice(c),k=g.length,c=0);}k>b&&(g=g.slice(0,b),k=b);if(!d.length&&k>=b)return e?X.call(this,g):g;d.push(g);b-=k;if(!b)break}d=1<d.length?[].concat.apply([],d):d[0];return e?X.call(this,d):d}function Wa(a,b,c){var e=c[0];if(e.then)return Promise.all(c).then(function(m){return a[b].apply(a,m)});if(e[0]&&e[0].index)return a[b].apply(a,e);e=[];let d=[],f=0,g=0,k,h,l;for(let m=0,n;m<c.length;m++)if(n=c[m]){let r;if(n.constructor===Y)r=n.result;else if(n.constructor===Array)r=n;else if(f=n.limit||0,g=n.offset||0,l=n.suggest,h=n.resolve,k=n.enrich&&h,n.index)n.resolve=false,r=n.index.search(n).result,n.resolve=h;else if(n.and)r=a.and(n.and);else if(n.or)r=a.or(n.or);else if(n.xor)r=a.xor(n.xor);
    else if(n.not)r=a.not(n.not);else continue;if(r.then)d.push(r);else if(r.length)e[m]=r;else if(!l&&("and"===b||"xor"===b)){e=[];break}}return {O:e,P:d,limit:f,offset:g,enrich:k,resolve:h,suggest:l}}Y.prototype.or=function(){const {O:a,P:b,limit:c,offset:e,enrich:d,resolve:f}=Wa(this,"or",arguments);return Xa.call(this,a,b,c,e,d,f)};function Xa(a,b,c,e,d,f){if(b.length){const g=this;return Promise.all(b).then(function(k){a=[];for(let h=0,l;h<k.length;h++)(l=k[h]).length&&(a[h]=l);return Xa.call(g,a,[],c,e,d,f)})}a.length&&(this.result.length&&a.push(this.result),2>a.length?this.result=a[0]:(this.result=Ta(a,c,e,false,this.h),e=0));return f?this.resolve(c,e,d):this}Y.prototype.and=function(){let a=this.result.length,b,c,e,d;if(!a){const f=arguments[0];f&&(a=!!f.suggest,d=f.resolve,b=f.limit,c=f.offset,e=f.enrich&&d);}if(a){const {O:f,P:g,limit:k,offset:h,enrich:l,resolve:m,suggest:n}=Wa(this,"and",arguments);return Ya.call(this,f,g,k,h,l,m,n)}return d?this.resolve(b,c,e):this};
    function Ya(a,b,c,e,d,f,g){if(b.length){const k=this;return Promise.all(b).then(function(h){a=[];for(let l=0,m;l<h.length;l++)(m=h[l]).length&&(a[l]=m);return Ya.call(k,a,[],c,e,d,f,g)})}if(a.length)if(this.result.length&&a.unshift(this.result),2>a.length)this.result=a[0];else {if(b=fa(a))return this.result=Sa(a,b,c,e,g,this.h,f),f?d?X.call(this.index,this.result):this.result:this;this.result=[];}else g||(this.result=a);return f?this.resolve(c,e,d):this}Y.prototype.xor=function(){const {O:a,P:b,limit:c,offset:e,enrich:d,resolve:f,suggest:g}=Wa(this,"xor",arguments);return Za.call(this,a,b,c,e,d,f,g)};
    function Za(a,b,c,e,d,f,g){if(b.length){const k=this;return Promise.all(b).then(function(h){a=[];for(let l=0,m;l<h.length;l++)(m=h[l]).length&&(a[l]=m);return Za.call(k,a,[],c,e,d,f,g)})}if(a.length)if(this.result.length&&a.unshift(this.result),2>a.length)this.result=a[0];else return this.result=$a.call(this,a,c,e,f,this.h),f?d?X.call(this.index,this.result):this.result:this;else g||(this.result=a);return f?this.resolve(c,e,d):this}
    function $a(a,b,c,e,d){const f=[],g=G();let k=0;for(let h=0,l;h<a.length;h++)if(l=a[h]){k<l.length&&(k=l.length);for(let m=0,n;m<l.length;m++)if(n=l[m])for(let r=0,q;r<n.length;r++)q=n[r],g[q]=g[q]?2:1;}for(let h=0,l,m=0;h<k;h++)for(let n=0,r;n<a.length;n++)if(r=a[n])if(l=r[h])for(let q=0,t;q<l.length;q++)if(t=l[q],1===g[t])if(c)c--;else if(e){if(f.push(t),f.length===b)return f}else {const u=h+(n?d:0);f[u]||(f[u]=[]);f[u].push(t);if(++m===b)return f}return f}Y.prototype.not=function(){const {O:a,P:b,limit:c,offset:e,enrich:d,resolve:f,suggest:g}=Wa(this,"not",arguments);return ab.call(this,a,b,c,e,d,f,g)};function ab(a,b,c,e,d,f,g){if(b.length){const k=this;return Promise.all(b).then(function(h){a=[];for(let l=0,m;l<h.length;l++)(m=h[l]).length&&(a[l]=m);return ab.call(k,a,[],c,e,d,f,g)})}if(a.length&&this.result.length)this.result=bb.call(this,a,c,e,f);else if(f)return this.resolve(c,e,d);return f?d?X.call(this.index,this.result):this.result:this}
    function bb(a,b,c,e){const d=[];a=new Set(a.flat().flat());for(let f=0,g,k=0;f<this.result.length;f++)if(g=this.result[f])for(let h=0,l;h<g.length;h++)if(l=g[h],!a.has(l))if(c)c--;else if(e){if(d.push(l),d.length===b)return d}else if(d[f]||(d[f]=[]),d[f].push(l),++k===b)return d;return d}function Y(a){if(!this||this.constructor!==Y)return new Y(a);if(a&&a.index)return a.resolve=false,this.index=a.index,this.h=a.boost||0,this.result=a.index.search(a).result,this;this.index=null;this.result=a||[];this.h=0;}Y.prototype.limit=function(a){if(this.result.length){const b=[];for(let c=0,e;c<this.result.length;c++)if(e=this.result[c])if(e.length<=a){if(b[c]=e,a-=e.length,!a)break}else {b[c]=e.slice(0,a);break}this.result=b;}return this};
    Y.prototype.offset=function(a){if(this.result.length){const b=[];for(let c=0,e;c<this.result.length;c++)if(e=this.result[c])e.length<=a?a-=e.length:(b[c]=e.slice(a),a=0);this.result=b;}return this};Y.prototype.boost=function(a){this.h+=a;return this};Y.prototype.resolve=function(a,b,c){const e=this.result,d=this.index;this.result=this.index=null;return e.length?("object"===typeof a&&(c=a.enrich,b=a.offset,a=a.limit),Va.call(d,e,a||100,b,c)):e};function cb(a,b,c,e,d){let f,g,k;"string"===typeof d?(f=d,d=""):f=d.template;g=f.indexOf("$1");k=f.substring(g+2);g=f.substring(0,g);let h=d&&d.boundary,l=!d||false!==d.clip,m=d&&d.merge&&k&&g&&new RegExp(k+" "+g,"g");d=d&&d.ellipsis;var n=0;if("object"===typeof d){var r=d.template;n=r.length-2;d=d.pattern;}"string"!==typeof d&&(d=false===d?"":"...");n&&(d=r.replace("$1",d));r=d.length-n;let q,t;"object"===typeof h&&(q=h.before,0===q&&(q=-1),t=h.after,0===t&&(t=-1),h=h.total||9E5);n=new Map;for(let Ja=0,
    aa,db,na;Ja<b.length;Ja++){let oa;if(e)oa=b,na=e;else {var u=b[Ja];na=u.field;if(!na)continue;oa=u.result;}db=c.get(na);aa=db.encoder;u=n.get(aa);"string"!==typeof u&&(u=aa.encode(a),n.set(aa,u));for(let ua=0;ua<oa.length;ua++){var p=oa[ua].doc;if(!p)continue;p=ea(p,na);if(!p)continue;var y=p.trim().split(/\s+/);if(!y.length)continue;p="";var x=[];let va=[];var J=-1,B=-1,z=0;for(var A=0;A<y.length;A++){var C=y[A],D=aa.encode(C);D=1<D.length?D.join(" "):D[0];let w;if(D&&C){var E=C.length,H=(aa.split?
    C.replace(aa.split,""):C).length-D.length,M="",V=0;for(var ba=0;ba<u.length;ba++){var Q=u[ba];if(Q){var K=Q.length;K+=H;V&&K<=V||(Q=D.indexOf(Q),-1<Q&&(M=(Q?C.substring(0,Q):"")+g+C.substring(Q,Q+K)+k+(Q+K<E?C.substring(Q+K):""),V=K,w=true));}}M&&(h&&(0>J&&(J=p.length+(p?1:0)),B=p.length+(p?1:0)+M.length,z+=E,va.push(x.length),x.push({match:M})),p+=(p?" ":"")+M);}if(!w)C=y[A],p+=(p?" ":"")+C,h&&x.push({text:C});else if(h&&z>=h)break}z=va.length*(f.length-2);if(q||t||h&&p.length-z>h)if(z=h+z-2*r,A=B-J,
    0<q&&(A+=q),0<t&&(A+=t),A<=z)y=q?J-(0<q?q:0):J-((z-A)/2|0),x=t?B+(0<t?t:0):y+z,l||(0<y&&" "!==p.charAt(y)&&" "!==p.charAt(y-1)&&(y=p.indexOf(" ",y),0>y&&(y=0)),x<p.length&&" "!==p.charAt(x-1)&&" "!==p.charAt(x)&&(x=p.lastIndexOf(" ",x),x<B?x=B:++x)),p=(y?d:"")+p.substring(y,x)+(x<p.length?d:"");else {B=[];J={};z={};A={};C={};D={};M=H=E=0;for(ba=V=1;;){var S=void 0;for(let w=0,I;w<va.length;w++){I=va[w];if(M)if(H!==M){if(A[w+1])continue;I+=M;if(J[I]){E-=r;z[w+1]=1;A[w+1]=1;continue}if(I>=x.length-1){if(I>=
    x.length){A[w+1]=1;I>=y.length&&(z[w+1]=1);continue}E-=r;}p=x[I].text;if(K=t&&D[w])if(0<K){if(p.length>K)if(A[w+1]=1,l)p=p.substring(0,K);else continue;(K-=p.length)||(K=-1);D[w]=K;}else {A[w+1]=1;continue}if(E+p.length+1<=h)p=" "+p,B[w]+=p;else if(l)S=h-E-1,0<S&&(p=" "+p.substring(0,S),B[w]+=p),A[w+1]=1;else {A[w+1]=1;continue}}else {if(A[w])continue;I-=H;if(J[I]){E-=r;A[w]=1;z[w]=1;continue}if(0>=I){if(0>I){A[w]=1;z[w]=1;continue}E-=r;}p=x[I].text;if(K=q&&C[w])if(0<K){if(p.length>K)if(A[w]=1,l)p=p.substring(p.length-
    K);else continue;(K-=p.length)||(K=-1);C[w]=K;}else {A[w]=1;continue}if(E+p.length+1<=h)p+=" ",B[w]=p+B[w];else if(l)S=p.length+1-(h-E),0<=S&&S<p.length&&(p=p.substring(S)+" ",B[w]=p+B[w]),A[w]=1;else {A[w]=1;continue}}else {p=x[I].match;q&&(C[w]=q);t&&(D[w]=t);w&&E++;let Ka;I?!w&&r&&(E+=r):(z[w]=1,A[w]=1);I>=y.length-1?Ka=1:I<x.length-1&&x[I+1].match?Ka=1:r&&(E+=r);E-=f.length-2;if(!w||E+p.length<=h)B[w]=p;else {S=V=ba=z[w]=0;break}Ka&&(z[w+1]=1,A[w+1]=1);}E+=p.length;S=J[I]=1;}if(S)H===M?M++:H++;else {H===
    M?V=0:ba=0;if(!V&&!ba)break;V?(H++,M=H):M++;}}p="";for(let w=0,I;w<B.length;w++)I=(w&&z[w]?" ":(w&&!d?" ":"")+d)+B[w],p+=I;d&&!z[B.length]&&(p+=d);}m&&(p=p.replace(m," "));oa[ua].highlight=p;}if(e)break}return b}W.prototype.search=function(a,b,c,e){c||(!b&&ca(a)?(c=a,a=""):ca(b)&&(c=b,b=0));let d=[];var f=[];let g;let k;let h,l;let m=0;var n=true;let r;if(c){c.constructor===Array&&(c={index:c});a=c.query||a;g=c.pluck;k=c.merge;h=g||c.field||(h=c.index)&&(h.index?null:h);l=this.tag&&c.tag;var q=c.suggest;n=false!==c.resolve;n||g||!(h=h||this.field)||(L(h)?g=h:(h.constructor===Array&&1===h.length&&(h=h[0]),g=h.field||h.index));var t=(r=n&&this.store&&c.highlight)||n&&this.store&&c.enrich;b=c.limit||b;var u=c.offset||
    0;b||(b=100);if(l&&(!this.db||!e)){l.constructor!==Array&&(l=[l]);var p=[];for(let B=0,z;B<l.length;B++)if(z=l[B],z.field&&z.tag){var y=z.tag;if(y.constructor===Array)for(var x=0;x<y.length;x++)p.push(z.field,y[x]);else p.push(z.field,y);}else {y=Object.keys(z);for(let A=0,C,D;A<y.length;A++)if(C=y[A],D=z[C],D.constructor===Array)for(x=0;x<D.length;x++)p.push(C,D[x]);else p.push(C,D);}l=p;if(!a){n=[];if(p.length)for(f=0;f<p.length;f+=2){if(this.db){q=this.index.get(p[f]);if(!q)continue;n.push(q=q.db.tag(p[f+
    1],b,u,t));}else q=eb.call(this,p[f],p[f+1],b,u,t);d.push({field:p[f],tag:p[f+1],result:q});}return n.length?Promise.all(n).then(function(B){for(let z=0;z<B.length;z++)d[z].result=B[z];return d}):d}}h&&h.constructor!==Array&&(h=[h]);}h||(h=this.field);p=!e&&(this.worker||this.db)&&[];let J;for(let B=0,z,A,C;B<h.length;B++){A=h[B];if(this.db&&this.tag&&!this.F[B])continue;let D;L(A)||(D=A,A=D.field,a=D.query||a,b=D.limit||b,u=D.offset||u,q=D.suggest||q,r=(t=this.store&&(D.enrich||t))&&(c.highlight||r));
    if(e)z=e[B];else if(y=D||c,x=this.index.get(A),l&&(this.db&&(y.tag=l,J=x.db.support_tag_search,y.field=h),J||(y.enrich=false)),p){p[B]=x.search(a,b,y);y&&t&&(y.enrich=t);continue}else z=x.search(a,b,y),y&&t&&(y.enrich=t);C=z&&(n?z.length:z.result.length);if(l&&C){y=[];x=0;if(this.db&&e){if(!J)for(let E=h.length;E<e.length;E++){let H=e[E];if(H&&H.length)x++,y.push(H);else if(!q)return n?d:new Y(d)}}else for(let E=0,H,M;E<l.length;E+=2){H=this.tag.get(l[E]);if(!H)if(q)continue;else return n?d:new Y(d);
    if(M=(H=H&&H.get(l[E+1]))&&H.length)x++,y.push(H);else if(!q)return n?d:new Y(d)}if(x){z=Ua(z,y,n);C=z.length;if(!C&&!q)return n?z:new Y(z);x--;}}if(C)f[m]=A,d.push(z),m++;else if(1===h.length)return n?d:new Y(d)}if(p){if(this.db&&l&&l.length&&!J)for(t=0;t<l.length;t+=2){f=this.index.get(l[t]);if(!f)if(q)continue;else return n?d:new Y(d);p.push(f.db.tag(l[t+1],b,u,false));}const B=this;return Promise.all(p).then(function(z){return z.length?B.search(a,b,c,z):z})}if(!m)return n?d:new Y(d);if(g&&(!t||!this.store))return d[0];
    p=[];for(u=0;u<f.length;u++){q=d[u];t&&q.length&&"undefined"===typeof q[0].doc&&(this.db?p.push(q=this.index.get(this.field[0]).db.enrich(q)):q=X.call(this,q));if(g)return n?r?cb(a,q,this.index,g,r):q:new Y(q);d[u]={field:f[u],result:q};}if(t&&this.db&&p.length){const B=this;return Promise.all(p).then(function(z){for(let A=0;A<z.length;A++)d[A].result=z[A];return k?fb(d):r?cb(a,d,B.index,g,r):d})}return k?fb(d):r?cb(a,d,this.index,g,r):d};
    function fb(a){const b=[],c=G();for(let e=0,d,f;e<a.length;e++){d=a[e];f=d.result;for(let g=0,k,h,l;g<f.length;g++)h=f[g],"object"!==typeof h&&(h={id:h}),k=h.id,(l=c[k])?l.push(d.field):(h.field=c[k]=[d.field],b.push(h));}return b}function eb(a,b,c,e,d){a=this.tag.get(a);if(!a)return [];if((b=(a=a&&a.get(b))&&a.length-e)&&0<b){if(b>c||e)a=a.slice(e,e+c);d&&(a=X.call(this,a));return a}}
    function X(a){if(!this||!this.store)return a;const b=Array(a.length);for(let c=0,e;c<a.length;c++)e=a[c],b[c]={id:e,doc:this.store.get(e)};return b}function W(a){if(!this||this.constructor!==W)return new W(a);const b=a.document||a.doc||a;let c,e;this.F=[];this.field=[];this.J=[];this.key=(c=b.key||b.id)&&gb(c,this.J)||"id";(e=a.keystore||0)&&(this.keystore=e);this.fastupdate=!!a.fastupdate;this.reg=!this.fastupdate||a.worker||a.db?e?new U(e):new Set:e?new T(e):new Map;this.C=(c=b.store||null)&&c&&true!==c&&[];this.store=c&&(e?new T(e):new Map);this.cache=(c=a.cache||null)&&new hb(c);a.cache=false;this.worker=a.worker||false;this.priority=a.priority||
    4;this.index=ib.call(this,a,b);this.tag=null;if(c=b.tag)if("string"===typeof c&&(c=[c]),c.length){this.tag=new Map;this.D=[];this.R=[];for(let d=0,f,g;d<c.length;d++){f=c[d];g=f.field||f;if(!g)throw Error("The tag field from the document descriptor is undefined.");f.custom?this.D[d]=f.custom:(this.D[d]=gb(g,this.J),f.filter&&("string"===typeof this.D[d]&&(this.D[d]=new String(this.D[d])),this.D[d].I=f.filter));this.R[d]=g;this.tag.set(g,new Map);}}if(this.worker){this.fastupdate=false;const d=[];for(const f of this.index.values())f.then&&
    d.push(f);if(d.length){const f=this;return Promise.all(d).then(function(g){const k=new Map;let h=0;for(const m of f.index.entries()){const n=m[0];var l=m[1];if(l.then){l=d[h].encoder||{};let r=k.get(l);r||(r=l.encode?l:new ma(l),k.set(l,r));l=g[h];l.encoder=r;f.index.set(n,l);h++;}}return f})}}else a.db&&(this.fastupdate=false,this.mount(a.db));}v=W.prototype;
    v.mount=function(a){let b=this.field;if(this.tag)for(let f=0,g;f<this.R.length;f++){g=this.R[f];var c=void 0;this.index.set(g,c=new O({},this.reg));b===this.field&&(b=b.slice(0));b.push(g);c.tag=this.tag.get(g);}c=[];const e={db:a.db,type:a.type,fastupdate:a.fastupdate};for(let f=0,g,k;f<b.length;f++){e.field=k=b[f];g=this.index.get(k);const h=new a.constructor(a.id,e);h.id=a.id;c[f]=h.mount(g);g.document=true;f?g.bypass=true:g.store=this.store;}const d=this;return this.db=Promise.all(c).then(function(){d.db=
    true;})};v.commit=async function(a,b){const c=[];for(const e of this.index.values())c.push(e.commit(a,b));await Promise.all(c);this.reg.clear();};v.destroy=function(){const a=[];for(const b of this.index.values())a.push(b.destroy());return Promise.all(a)};
    function ib(a,b){const c=new Map;let e=b.index||b.field||b;L(e)&&(e=[e]);for(let d=0,f,g;d<e.length;d++){f=e[d];L(f)||(g=f,f=f.field);g=ca(g)?Object.assign({},a,g):a;if(this.worker){const k=new Ba(g);k.encoder=g.encoder;c.set(f,k);}this.worker||c.set(f,new O(g,this.reg));g.custom?this.F[d]=g.custom:(this.F[d]=gb(f,this.J),g.filter&&("string"===typeof this.F[d]&&(this.F[d]=new String(this.F[d])),this.F[d].I=g.filter));this.field[d]=f;}if(this.C){a=b.store;L(a)&&(a=[a]);for(let d=0,f,g;d<a.length;d++)f=
    a[d],g=f.field||f,f.custom?(this.C[d]=f.custom,f.custom.V=g):(this.C[d]=gb(g,this.J),f.filter&&("string"===typeof this.C[d]&&(this.C[d]=new String(this.C[d])),this.C[d].I=f.filter));}return c}function gb(a,b){const c=a.split(":");let e=0;for(let d=0;d<c.length;d++)a=c[d],"]"===a[a.length-1]&&(a=a.substring(0,a.length-2))&&(b[e]=true),a&&(c[e++]=a);e<c.length&&(c.length=e);return 1<e?c:c[0]}v.append=function(a,b){return this.add(a,b,true)};v.update=function(a,b){return this.remove(a).add(a,b)};
    v.remove=function(a){ca(a)&&(a=ea(a,this.key));for(var b of this.index.values())b.remove(a,true);if(this.reg.has(a)){if(this.tag&&!this.fastupdate)for(let c of this.tag.values())for(let e of c){b=e[0];const d=e[1],f=d.indexOf(a);-1<f&&(1<d.length?d.splice(f,1):c.delete(b));}this.store&&this.store.delete(a);this.reg.delete(a);}this.cache&&this.cache.remove(a);return this};
    v.clear=function(){const a=[];for(const b of this.index.values()){const c=b.clear();c.then&&a.push(c);}if(this.tag)for(const b of this.tag.values())b.clear();this.store&&this.store.clear();this.cache&&this.cache.clear();return a.length?Promise.all(a):this};v.contain=function(a){return this.db?this.index.get(this.field[0]).db.has(a):this.reg.has(a)};v.cleanup=function(){for(const a of this.index.values())a.cleanup();return this};
    v.get=function(a){return this.db?this.index.get(this.field[0]).db.enrich(a).then(function(b){return b[0]&&b[0].doc||null}):this.store.get(a)||null};v.set=function(a,b){"object"===typeof a&&(b=a,a=ea(b,this.key));this.store.set(a,b);return this};v.searchCache=jb;
    v.export=function(a,b,c=0,e=0){if(c<this.field.length){const g=this.field[c];if((b=this.index.get(g).export(a,g,c,e=1))&&b.then){const k=this;return b.then(function(){return k.export(a,g,c+1)})}return this.export(a,g,c+1)}let d,f;switch(e){case 0:d="reg";f=Ha(this.reg);b=null;break;case 1:d="tag";f=this.tag&&Fa(this.tag,this.reg.size);b=null;break;case 2:d="doc";f=this.store&&Da(this.store);b=null;break;default:return}return La.call(this,a,b,d,f,c,e)};
    v.import=function(a,b){var c=a.split(".");"json"===c[c.length-1]&&c.pop();const e=2<c.length?c[0]:"";c=2<c.length?c[2]:c[1];if(this.worker&&e)return this.index.get(e).import(a);if(b){"string"===typeof b&&(b=JSON.parse(b));if(e)return this.index.get(e).import(c,b);switch(c){case "reg":this.fastupdate=false;this.reg=Ia(b,this.reg);for(let d=0,f;d<this.field.length;d++)f=this.index.get(this.field[d]),f.fastupdate=false,f.reg=this.reg;if(this.worker){b=[];for(const d of this.index.values())b.push(d.import(a));
    return Promise.all(b)}break;case "tag":this.tag=Ga(b,this.tag);break;case "doc":this.store=Ea(b,this.store);}}};sa(W.prototype);function jb(a,b,c){const e=("object"===typeof a?""+a.query:a).toLowerCase();this.cache||(this.cache=new hb);let d=this.cache.get(e);if(!d){d=this.search(a,b,c);if(d.then){const f=this;d.then(function(g){f.cache.set(e,g);return g});}this.cache.set(e,d);}return d}function hb(a){this.limit=a&&true!==a?a:1E3;this.cache=new Map;this.h="";}hb.prototype.set=function(a,b){this.cache.set(this.h=a,b);this.cache.size>this.limit&&this.cache.delete(this.cache.keys().next().value);};
    hb.prototype.get=function(a){const b=this.cache.get(a);b&&this.h!==a&&(this.cache.delete(a),this.cache.set(this.h=a,b));return b};hb.prototype.remove=function(a){for(const b of this.cache){const c=b[0];b[1].includes(a)&&this.cache.delete(c);}};hb.prototype.clear=function(){this.cache.clear();this.h="";};const kb={normalize:false,numeric:false,dedupe:false};const lb={};const mb=new Map([["b","p"],["v","f"],["w","f"],["z","s"],["x","s"],["d","t"],["n","m"],["c","k"],["g","k"],["j","k"],["q","k"],["i","e"],["y","e"],["u","o"]]);const nb=new Map([["ae","a"],["oe","o"],["sh","s"],["kh","k"],["th","t"],["ph","f"],["pf","f"]]),ob=[/([^aeo])h(.)/g,"$1$2",/([aeo])h([^aeo]|$)/g,"$1$2",/(.)\1+/g,"$1"];const pb={a:"",e:"",i:"",o:"",u:"",y:"",b:1,f:1,p:1,v:1,c:2,g:2,j:2,k:2,q:2,s:2,x:2,z:2,"\u00df":2,d:3,t:3,l:4,m:5,n:5,r:6};var qb={Exact:kb,Default:lb,Normalize:lb,LatinBalance:{mapper:mb},LatinAdvanced:{mapper:mb,matcher:nb,replacer:ob},LatinExtra:{mapper:mb,replacer:ob.concat([/(?!^)[aeo]/g,""]),matcher:nb},LatinSoundex:{dedupe:false,include:{letter:true},finalize:function(a){for(let c=0;c<a.length;c++){var b=a[c];let e=b.charAt(0),d=pb[e];for(let f=1,g;f<b.length&&(g=b.charAt(f),"h"===g||"w"===g||!(g=pb[g])||g===d||(e+=g,d=g,4!==e.length));f++);a[c]=e;}}},CJK:{split:""},LatinExact:kb,LatinDefault:lb,LatinSimple:lb};O.prototype.remove=function(a,b){const c=this.reg.size&&(this.fastupdate?this.reg.get(a):this.reg.has(a));if(c){if(this.fastupdate)for(let e=0,d;e<c.length;e++){if(d=c[e])if(2>d.length)d.pop();else {const f=d.indexOf(a);f===c.length-1?d.pop():d.splice(f,1);}}else rb(this.map,a),this.depth&&rb(this.ctx,a);b||this.reg.delete(a);}this.db&&(this.commit_task.push({del:a}),this.T&&sb(this));this.cache&&this.cache.remove(a);return this};
    function rb(a,b){let c=0;var e="undefined"===typeof b;if(a.constructor===Array)for(let d=0,f,g;d<a.length;d++){if((f=a[d])&&f.length)if(e)c++;else if(g=f.indexOf(b),0<=g){1<f.length?(f.splice(g,1),c++):delete a[d];break}else c++;}else for(let d of a.entries()){e=d[0];const f=rb(d[1],b);f?c+=f:a.delete(e);}return c}const tb={memory:{resolution:1},performance:{resolution:3,fastupdate:true,context:{depth:1,resolution:1}},match:{tokenize:"forward"},score:{resolution:9,context:{depth:2,resolution:3}}};O.prototype.add=function(a,b,c,e){if(b&&(a||0===a)){if(!e&&!c&&this.reg.has(a))return this.update(a,b);e=this.depth;b=this.encoder.encode(b,!e);const l=b.length;if(l){const m=G(),n=G(),r=this.resolution;for(let q=0;q<l;q++){let t=b[this.rtl?l-1-q:q];var d=t.length;if(d&&(e||!n[t])){var f=this.score?this.score(b,t,q,null,0):ub(r,l,q),g="";switch(this.tokenize){case "full":if(2<d){for(let u=0,p;u<d;u++)for(f=d;f>u;f--){g=t.substring(u,f);p=this.rtl?d-1-u:u;var k=this.score?this.score(b,t,q,g,p):ub(r,
    l,q,d,p);vb(this,n,g,k,a,c);}break}case "bidirectional":case "reverse":if(1<d){for(k=d-1;0<k;k--){g=t[this.rtl?d-1-k:k]+g;var h=this.score?this.score(b,t,q,g,k):ub(r,l,q,d,k);vb(this,n,g,h,a,c);}g="";}case "forward":if(1<d){for(k=0;k<d;k++)g+=t[this.rtl?d-1-k:k],vb(this,n,g,f,a,c);break}default:if(vb(this,n,t,f,a,c),e&&1<l&&q<l-1)for(d=G(),g=this.U,f=t,k=Math.min(e+1,this.rtl?q+1:l-q),d[f]=1,h=1;h<k;h++)if((t=b[this.rtl?l-1-q-h:q+h])&&!d[t]){d[t]=1;const u=this.score?this.score(b,f,q,t,h-1):ub(g+(l/
    2>g?0:1),l,q,k-1,h-1),p=this.bidirectional&&t>f;vb(this,m,p?f:t,u,a,c,p?t:f);}}}}this.fastupdate||this.reg.add(a);}else b="";}this.db&&(b||this.commit_task.push({del:a}),this.T&&sb(this));return this};
    function vb(a,b,c,e,d,f,g){let k=g?a.ctx:a.map,h;if(!b[c]||g&&!(h=b[c])[g])if(g?(b=h||(b[c]=G()),b[g]=1,(h=k.get(g))?k=h:k.set(g,k=new Map)):b[c]=1,(h=k.get(c))?k=h:k.set(c,k=h=[]),k=k[e]||(k[e]=[]),!f||!k.includes(d)){if(k.length===2**31-1){b=new R(k);if(a.fastupdate)for(let l of a.reg.values())l.includes(k)&&(l[l.indexOf(k)]=b);h[e]=k=b;}k.push(d);a.fastupdate&&((e=a.reg.get(d))?e.push(k):a.reg.set(d,[k]));}}
    function ub(a,b,c,e,d){return c&&1<a?b+(e||0)<=a?c+(d||0):(a-1)/(b+(e||0))*(c+(d||0))+1|0:0}O.prototype.search=function(a,b,c){c||(b||"object"!==typeof a?"object"===typeof b&&(c=b,b=0):(c=a,a=""));let e=[],d,f,g,k=0,h,l,m,n,r;c?(a=c.query||a,b=c.limit||b,k=c.offset||0,f=c.context,g=c.suggest,r=(h=false!==c.resolve)&&c.enrich,m=c.boost,n=c.resolution,l=this.db&&c.tag):h=this.resolve;f=this.depth&&false!==f;let q=this.encoder.encode(a,!f);d=q.length;b=b||(h?100:0);if(1===d)return wb.call(this,q[0],"",b,k,h,r,l);if(2===d&&f&&!g)return wb.call(this,q[1],q[0],b,k,h,r,l);let t=G(),u=0,p;f&&(p=q[0],
    u=1);n||0===n||(n=p?this.U:this.resolution);if(this.db){if(this.db.search&&(a=this.db.search(this,q,b,k,g,h,r,l),false!==a))return a;const y=this;return async function(){for(let x,J;u<d;u++){if((J=q[u])&&!t[J]){t[J]=1;x=await xb(y,J,p,0,0,false,false);if(x=yb(x,e,g,n)){e=x;break}p&&(g&&x&&e.length||(p=J));}g&&p&&u===d-1&&!e.length&&(n=y.resolution,p="",u=-1,t=G());}return zb(e,n,b,k,g,m,h)}()}for(let y,x;u<d;u++){if((x=q[u])&&!t[x]){t[x]=1;y=xb(this,x,p,0,0,false,false);if(y=yb(y,e,g,n)){e=y;break}p&&(g&&y&&e.length||
    (p=x));}g&&p&&u===d-1&&!e.length&&(n=this.resolution,p="",u=-1,t=G());}return zb(e,n,b,k,g,m,h)};function zb(a,b,c,e,d,f,g){let k=a.length,h=a;if(1<k)h=Sa(a,b,c,e,d,f,g);else if(1===k)return g?Va.call(null,a[0],c,e):new Y(a[0]);return g?h:new Y(h)}function wb(a,b,c,e,d,f,g){a=xb(this,a,b,c,e,d,f,g);return this.db?a.then(function(k){return d?k||[]:new Y(k)}):a&&a.length?d?Va.call(this,a,c,e):new Y(a):d?[]:new Y}
    function yb(a,b,c,e){let d=[];if(a&&a.length){if(a.length<=e){b.push(a);return}for(let f=0,g;f<e;f++)if(g=a[f])d[f]=g;if(d.length){b.push(d);return}}if(!c)return d}function xb(a,b,c,e,d,f,g,k){let h;c&&(h=a.bidirectional&&b>c)&&(h=c,c=b,b=h);if(a.db)return a.db.get(b,c,e,d,f,g,k);a=c?(a=a.ctx.get(c))&&a.get(b):a.map.get(b);return a}function O(a,b){if(!this||this.constructor!==O)return new O(a);if(a){var c=L(a)?a:a.preset;c&&(a=Object.assign({},tb[c],a));}else a={};c=a.context;const e=true===c?{depth:1}:c||{},d=L(a.encoder)?qb[a.encoder]:a.encode||a.encoder||{};this.encoder=d.encode?d:"object"===typeof d?new ma(d):{encode:d};this.resolution=a.resolution||9;this.tokenize=c=(c=a.tokenize)&&"default"!==c&&"exact"!==c&&c||"strict";this.depth="strict"===c&&e.depth||0;this.bidirectional=false!==e.bidirectional;this.fastupdate=!!a.fastupdate;
    this.score=a.score||null;(c=a.keystore||0)&&(this.keystore=c);this.map=c?new T(c):new Map;this.ctx=c?new T(c):new Map;this.reg=b||(this.fastupdate?c?new T(c):new Map:c?new U(c):new Set);this.U=e.resolution||3;this.rtl=d.rtl||a.rtl||false;this.cache=(c=a.cache||null)&&new hb(c);this.resolve=false!==a.resolve;if(c=a.db)this.db=this.mount(c);this.T=false!==a.commit;this.commit_task=[];this.commit_timer=null;this.priority=a.priority||4;}v=O.prototype;
    v.mount=function(a){this.commit_timer&&(clearTimeout(this.commit_timer),this.commit_timer=null);return a.mount(this)};v.commit=function(a,b){this.commit_timer&&(clearTimeout(this.commit_timer),this.commit_timer=null);return this.db.commit(this,a,b)};v.destroy=function(){this.commit_timer&&(clearTimeout(this.commit_timer),this.commit_timer=null);return this.db.destroy()};function sb(a){a.commit_timer||(a.commit_timer=setTimeout(function(){a.commit_timer=null;a.db.commit(a,void 0,void 0);},1));}
    v.clear=function(){this.map.clear();this.ctx.clear();this.reg.clear();this.cache&&this.cache.clear();this.db&&(this.commit_timer&&clearTimeout(this.commit_timer),this.commit_timer=null,this.commit_task=[{clear:true}]);return this};v.append=function(a,b){return this.add(a,b,true)};v.contain=function(a){return this.db?this.db.has(a):this.reg.has(a)};v.update=function(a,b){const c=this,e=this.remove(a);return e&&e.then?e.then(()=>c.add(a,b)):this.add(a,b)};
    v.cleanup=function(){if(!this.fastupdate)return this;rb(this.map);this.depth&&rb(this.ctx);return this};v.searchCache=jb;v.export=function(a,b,c=0,e=0){let d,f;switch(e){case 0:d="reg";f=Ha(this.reg);break;case 1:d="cfg";f=null;break;case 2:d="map";f=Da(this.map,this.reg.size);break;case 3:d="ctx";f=Fa(this.ctx,this.reg.size);break;default:return}return La.call(this,a,b,d,f,c,e)};
    v.import=function(a,b){if(b)switch("string"===typeof b&&(b=JSON.parse(b)),a=a.split("."),"json"===a[a.length-1]&&a.pop(),3===a.length&&a.shift(),a=1<a.length?a[1]:a[0],a){case "reg":this.fastupdate=false;this.reg=Ia(b,this.reg);break;case "map":this.map=Ea(b,this.map);break;case "ctx":this.ctx=Ga(b,this.ctx);}};
    v.serialize=function(a=true){let b="",c="",e="";if(this.reg.size){let f;for(var d of this.reg.keys())f||(f=typeof d),b+=(b?",":"")+("string"===f?'"'+d+'"':d);b="index.reg=new Set(["+b+"]);";c=Ma(this.map,f);c="index.map=new Map(["+c+"]);";for(const g of this.ctx.entries()){d=g[0];let k=Ma(g[1],f);k="new Map(["+k+"])";k='["'+d+'",'+k+"]";e+=(e?",":"")+k;}e="index.ctx=new Map(["+e+"]);";}return a?"function inject(index){"+b+c+e+"}":b+c+e};sa(O.prototype);const Ab="undefined"!==typeof window&&(window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB),Bb=["map","ctx","tag","reg","cfg"],Cb=G();
    function Db(a,b={}){if(!this||this.constructor!==Db)return new Db(a,b);"object"===typeof a&&(b=a,a=a.name);a||console.info("Default storage space was used, because a name was not passed.");this.id="flexsearch"+(a?":"+a.toLowerCase().replace(/[^a-z0-9_\-]/g,""):"");this.field=b.field?b.field.toLowerCase().replace(/[^a-z0-9_\-]/g,""):"";this.type=b.type;this.fastupdate=this.support_tag_search=false;this.db=null;this.h={};}v=Db.prototype;v.mount=function(a){if(a.index)return a.mount(this);a.db=this;return this.open()};
    v.open=function(){if(this.db)return this.db;let a=this;navigator.storage&&navigator.storage.persist();Cb[a.id]||(Cb[a.id]=[]);Cb[a.id].push(a.field);const b=Ab.open(a.id,1);b.onupgradeneeded=function(){const c=a.db=this.result;for(let e=0,d;e<Bb.length;e++){d=Bb[e];for(let f=0,g;f<Cb[a.id].length;f++)g=Cb[a.id][f],c.objectStoreNames.contains(d+("reg"!==d?g?":"+g:"":""))||c.createObjectStore(d+("reg"!==d?g?":"+g:"":""));}};return a.db=Z(b,function(c){a.db=c;a.db.onversionchange=function(){a.close();};})};
    v.close=function(){this.db&&this.db.close();this.db=null;};v.destroy=function(){const a=Ab.deleteDatabase(this.id);return Z(a)};v.clear=function(){const a=[];for(let c=0,e;c<Bb.length;c++){e=Bb[c];for(let d=0,f;d<Cb[this.id].length;d++)f=Cb[this.id][d],a.push(e+("reg"!==e?f?":"+f:"":""));}const b=this.db.transaction(a,"readwrite");for(let c=0;c<a.length;c++)b.objectStore(a[c]).clear();return Z(b)};
    v.get=function(a,b,c=0,e=0,d=true,f=false){a=this.db.transaction((b?"ctx":"map")+(this.field?":"+this.field:""),"readonly").objectStore((b?"ctx":"map")+(this.field?":"+this.field:"")).get(b?b+":"+a:a);const g=this;return Z(a).then(function(k){let h=[];if(!k||!k.length)return h;if(d){if(!c&&!e&&1===k.length)return k[0];for(let l=0,m;l<k.length;l++)if((m=k[l])&&m.length){if(e>=m.length){e-=m.length;continue}const n=c?e+Math.min(m.length-e,c):m.length;for(let r=e;r<n;r++)h.push(m[r]);e=0;if(h.length===c)break}return f?
    g.enrich(h):h}return k})};v.tag=function(a,b=0,c=0,e=false){a=this.db.transaction("tag"+(this.field?":"+this.field:""),"readonly").objectStore("tag"+(this.field?":"+this.field:"")).get(a);const d=this;return Z(a).then(function(f){if(!f||!f.length||c>=f.length)return [];if(!b&&!c)return f;f=f.slice(c,c+b);return e?d.enrich(f):f})};
    v.enrich=function(a){"object"!==typeof a&&(a=[a]);const b=this.db.transaction("reg","readonly").objectStore("reg"),c=[];for(let e=0;e<a.length;e++)c[e]=Z(b.get(a[e]));return Promise.all(c).then(function(e){for(let d=0;d<e.length;d++)e[d]={id:a[d],doc:e[d]?JSON.parse(e[d]):null};return e})};v.has=function(a){a=this.db.transaction("reg","readonly").objectStore("reg").getKey(a);return Z(a).then(function(b){return !!b})};v.search=null;v.info=function(){};
    v.transaction=function(a,b,c){a+="reg"!==a?this.field?":"+this.field:"":"";let e=this.h[a+":"+b];if(e)return c.call(this,e);let d=this.db.transaction(a,b);this.h[a+":"+b]=e=d.objectStore(a);const f=c.call(this,e);this.h[a+":"+b]=null;return Z(d).finally(function(){d=e=null;return f})};
    v.commit=async function(a,b,c){if(b)await this.clear(),a.commit_task=[];else {let e=a.commit_task;a.commit_task=[];for(let d=0,f;d<e.length;d++)if(f=e[d],f.clear){await this.clear();b=true;break}else e[d]=f.del;b||(c||(e=e.concat(da(a.reg))),e.length&&await this.remove(e));}a.reg.size&&(await this.transaction("map","readwrite",function(e){for(const d of a.map){const f=d[0],g=d[1];g.length&&(b?e.put(g,f):e.get(f).onsuccess=function(){let k=this.result;var h;if(k&&k.length){const l=Math.max(k.length,g.length);
    for(let m=0,n,r;m<l;m++)if((r=g[m])&&r.length){if((n=k[m])&&n.length)for(h=0;h<r.length;h++)n.push(r[h]);else k[m]=r;h=1;}}else k=g,h=1;h&&e.put(k,f);});}}),await this.transaction("ctx","readwrite",function(e){for(const d of a.ctx){const f=d[0],g=d[1];for(const k of g){const h=k[0],l=k[1];l.length&&(b?e.put(l,f+":"+h):e.get(f+":"+h).onsuccess=function(){let m=this.result;var n;if(m&&m.length){const r=Math.max(m.length,l.length);for(let q=0,t,u;q<r;q++)if((u=l[q])&&u.length){if((t=m[q])&&t.length)for(n=
    0;n<u.length;n++)t.push(u[n]);else m[q]=u;n=1;}}else m=l,n=1;n&&e.put(m,f+":"+h);});}}}),a.store?await this.transaction("reg","readwrite",function(e){for(const d of a.store){const f=d[0],g=d[1];e.put("object"===typeof g?JSON.stringify(g):1,f);}}):a.bypass||await this.transaction("reg","readwrite",function(e){for(const d of a.reg.keys())e.put(1,d);}),a.tag&&await this.transaction("tag","readwrite",function(e){for(const d of a.tag){const f=d[0],g=d[1];g.length&&(e.get(f).onsuccess=function(){let k=this.result;
    k=k&&k.length?k.concat(g):g;e.put(k,f);});}}),a.map.clear(),a.ctx.clear(),a.tag&&a.tag.clear(),a.store&&a.store.clear(),a.document||a.reg.clear());};function Eb(a,b,c){const e=a.value;let d,f=0;for(let g=0,k;g<e.length;g++){if(k=c?e:e[g]){for(let h=0,l,m;h<b.length;h++)if(m=b[h],l=k.indexOf(m),0<=l)if(d=1,1<k.length)k.splice(l,1);else {e[g]=[];break}f+=k.length;}if(c)break}f?d&&a.update(e):a.delete();a.continue();}
    v.remove=function(a){"object"!==typeof a&&(a=[a]);return Promise.all([this.transaction("map","readwrite",function(b){b.openCursor().onsuccess=function(){const c=this.result;c&&Eb(c,a);};}),this.transaction("ctx","readwrite",function(b){b.openCursor().onsuccess=function(){const c=this.result;c&&Eb(c,a);};}),this.transaction("tag","readwrite",function(b){b.openCursor().onsuccess=function(){const c=this.result;c&&Eb(c,a,true);};}),this.transaction("reg","readwrite",function(b){for(let c=0;c<a.length;c++)b.delete(a[c]);})])};
    function Z(a,b){return new Promise((c,e)=>{a.onsuccess=a.oncomplete=function(){b&&b(this.result);b=null;c(this.result);};a.onerror=a.onblocked=e;a=null;})}const Charset=qb;const Document$1=W;

    function createSearchDocument() {
        return new Document$1({
            document: {
                id: 'id',
                store: true,
                index: [
                    {
                        field: 'name',
                        tokenize: 'forward',
                        encoder: Charset.LatinBalance,
                        priority: 9,
                    },
                    {
                        field: 'comment',
                        tokenize: 'forward',
                        encoder: Charset.LatinBalance,
                    },
                ],
                tag: [],
            },
        });
    }

    async function loadDeflateData(url) {
        const response = await fetch(url);
        const blob = await response.blob();
        const stream = blob.stream().pipeThrough(new DecompressionStream('deflate'));
        return await new Response(stream).json();
    }
    async function loadSearchIndex() {
        const index = createSearchDocument();
        const base = `${document.documentElement.dataset.base}assets/oxide`;
        const parts = await loadDeflateData(`${base}/search-index.defalte`);
        for (const [key, data] of Object.entries(parts)) {
            index.import(key, data);
        }
        return index;
    }
    function getReflectionKindName(kind) {
        return globalThis.translations[`kind_${kind}`];
    }

    document.addEventListener('DOMContentLoaded', async () => {
        const form = document.querySelector('rustdoc-search .search-form');
        const input = document.querySelector('rustdoc-search .search-input');
        const results = document.querySelector('oxide-search-results#search');
        const vars = document.querySelector('meta[name="rustdoc-vars"]');
        const main = document.getElementById('main-content');
        const alt = document.getElementById('alternative-display');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            event.stopPropagation();
        });
        let index;
        const lazyLoadSearchIndex = async () => {
            index = await loadSearchIndex();
        };
        input.addEventListener('input', throttle(async (event) => {
            var _a;
            const text = (_a = event.target.value) === null || _a === void 0 ? void 0 : _a.trim();
            const [hide, show] = text ? [main, alt] : [alt, main];
            hide.classList.add('hidden');
            show.classList.remove('hidden');
            lazyLoadSearchIndex();
            if (!index) {
                return;
            }
            results.items = await performSearch(text, index);
            results.query = text;
            results.project = vars.dataset.currentCrate;
            results.loading = false;
        }, 300));
    });
    async function performSearch(query, index) {
        if (!query.length) {
            return [];
        }
        const items = await index.search({
            query,
            enrich: true,
            merge: true,
        });
        return items.map((x) => x.doc).filter((x) => x !== null);
    }
    (() => {
        var _OxideSearchResults_loading_accessor_storage, _OxideSearchResults_project_accessor_storage, _OxideSearchResults_query_accessor_storage, _OxideSearchResults_items_accessor_storage;
        let _classDecorators = [t('oxide-search-results')];
        let _classDescriptor;
        let _classExtraInitializers = [];
        let _classThis;
        let _classSuper = i;
        let _loading_decorators;
        let _loading_initializers = [];
        let _loading_extraInitializers = [];
        let _project_decorators;
        let _project_initializers = [];
        let _project_extraInitializers = [];
        let _query_decorators;
        let _query_initializers = [];
        let _query_extraInitializers = [];
        let _items_decorators;
        let _items_initializers = [];
        let _items_extraInitializers = [];
        var OxideSearchResults = _classThis = class extends _classSuper {
            get loading() { return __classPrivateFieldGet(this, _OxideSearchResults_loading_accessor_storage, "f"); }
            set loading(value) { __classPrivateFieldSet(this, _OxideSearchResults_loading_accessor_storage, value, "f"); }
            get project() { return __classPrivateFieldGet(this, _OxideSearchResults_project_accessor_storage, "f"); }
            set project(value) { __classPrivateFieldSet(this, _OxideSearchResults_project_accessor_storage, value, "f"); }
            get query() { return __classPrivateFieldGet(this, _OxideSearchResults_query_accessor_storage, "f"); }
            set query(value) { __classPrivateFieldSet(this, _OxideSearchResults_query_accessor_storage, value, "f"); }
            get items() { return __classPrivateFieldGet(this, _OxideSearchResults_items_accessor_storage, "f"); }
            set items(value) { __classPrivateFieldSet(this, _OxideSearchResults_items_accessor_storage, value, "f"); }
            createRenderRoot() {
                // Disable Shadow DOM.
                return this;
            }
            render() {
                if (this.loading) {
                    return x `
        <div class="main-heading">
          <h1 class="search-results-title">Results</h1>
        </div>

        <div id="results">
          <div class="search-failed active">
            Loading...
          </div>
        </div>
      `;
                }
                const items = this.items.map((item) => {
                    var _a, _b, _c;
                    const classname = (_a = OxideSearchResults.classes[item.kind]) !== null && _a !== void 0 ? _a : 'mod';
                    const trace = o((_c = (_b = item.parent) === null || _b === void 0 ? void 0 : _b.split('.').filter((x) => x)) !== null && _c !== void 0 ? _c : [], (name) => x `<span class="parent">${name}.</span>`);
                    return x `
        <a class="result-item" href="${OxideSearchResults.base}${item.url}">
          <span class="result-name">
            <span class="typename">
              ${getReflectionKindName(item.kind)}
            </span>

            <div class="path">
              ${trace}<span class="${classname}">${item.name}</span>
            </div>
          </span>
        </a>
      `;
                });
                const ddgQuery = encodeURIComponent(`${this.project} ${this.query}`);
                return x `
      <div class="main-heading">
        <h1 class="search-results-title">Results</h1>
      </div>

      <div id="results">
        <div class="search-results ${this.items.length ? 'active' : ''}">
          ${items}
        </div>

        <div class="search-failed ${this.items.length ? '' : 'active'}">
          No results :(
          <br />
          Try on <a href="https://duckduckgo.com/?q=${ddgQuery}" target="_blank">DuckDuckGo</a>?
        </div>
      </div>
    `;
            }
            constructor() {
                super(...arguments);
                _OxideSearchResults_loading_accessor_storage.set(this, __runInitializers$3(this, _loading_initializers, true));
                _OxideSearchResults_project_accessor_storage.set(this, (__runInitializers$3(this, _loading_extraInitializers), __runInitializers$3(this, _project_initializers, '')));
                _OxideSearchResults_query_accessor_storage.set(this, (__runInitializers$3(this, _project_extraInitializers), __runInitializers$3(this, _query_initializers, '')));
                _OxideSearchResults_items_accessor_storage.set(this, (__runInitializers$3(this, _query_extraInitializers), __runInitializers$3(this, _items_initializers, [])));
                __runInitializers$3(this, _items_extraInitializers);
            }
        };
        _OxideSearchResults_loading_accessor_storage = new WeakMap();
        _OxideSearchResults_project_accessor_storage = new WeakMap();
        _OxideSearchResults_query_accessor_storage = new WeakMap();
        _OxideSearchResults_items_accessor_storage = new WeakMap();
        __setFunctionName(_classThis, "OxideSearchResults");
        (() => {
            var _a;
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
            _loading_decorators = [n({ attribute: false })];
            _project_decorators = [n({ attribute: false })];
            _query_decorators = [n({ attribute: false })];
            _items_decorators = [n({ attribute: false })];
            __esDecorate$3(_classThis, null, _loading_decorators, { kind: "accessor", name: "loading", static: false, private: false, access: { has: obj => "loading" in obj, get: obj => obj.loading, set: (obj, value) => { obj.loading = value; } }, metadata: _metadata }, _loading_initializers, _loading_extraInitializers);
            __esDecorate$3(_classThis, null, _project_decorators, { kind: "accessor", name: "project", static: false, private: false, access: { has: obj => "project" in obj, get: obj => obj.project, set: (obj, value) => { obj.project = value; } }, metadata: _metadata }, _project_initializers, _project_extraInitializers);
            __esDecorate$3(_classThis, null, _query_decorators, { kind: "accessor", name: "query", static: false, private: false, access: { has: obj => "query" in obj, get: obj => obj.query, set: (obj, value) => { obj.query = value; } }, metadata: _metadata }, _query_initializers, _query_extraInitializers);
            __esDecorate$3(_classThis, null, _items_decorators, { kind: "accessor", name: "items", static: false, private: false, access: { has: obj => "items" in obj, get: obj => obj.items, set: (obj, value) => { obj.items = value; } }, metadata: _metadata }, _items_initializers, _items_extraInitializers);
            __esDecorate$3(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            OxideSearchResults = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })();
        _classThis.base = document.documentElement.dataset.base;
        _classThis.classes = {
            [ReflectionKind.ClassMember]: 'fn',
            [ReflectionKind.Function]: 'fn',
            [ReflectionKind.Property]: 'fn',
            [ReflectionKind.Method]: 'fn',
            [ReflectionKind.CallSignature]: 'fn',
            [ReflectionKind.IndexSignature]: 'fn',
            [ReflectionKind.GetSignature]: 'fn',
            [ReflectionKind.SetSignature]: 'fn',
            [ReflectionKind.Accessor]: 'fn',
            [ReflectionKind.ConstructorSignature]: 'primitive',
            [ReflectionKind.Constructor]: 'primitive',
            [ReflectionKind.EnumMember]: 'macro',
            [ReflectionKind.Variable]: 'macro',
        };
        (() => {
            __runInitializers$3(_classThis, _classExtraInitializers);
        })();
        return OxideSearchResults = _classThis;
    })();

})();
//# sourceMappingURL=index.js.map
