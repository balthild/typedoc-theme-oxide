(function () {
    'use strict';

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
    const t$1=globalThis,i$1=t$1.trustedTypes,s$1=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$3="?"+h,n$1=`<${o$3}>`,r$1=document,l=()=>r$1.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r$1.createTreeWalker(r$1,129);function P(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n$1:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$3)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$1.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){if(i===T)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$1).importNode(i,true);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=C.nextNode(),o++);}return C.currentNode=r$1,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$1.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(false,true,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=S(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===E?void 0:t;}}class I extends k{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E);}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const j=t$1.litHtmlPolyfillSupport;j?.(N,R),(t$1.litHtmlVersions??=[]).push("3.3.0");const B=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new R(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return T}}i._$litElement$=true,i["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i});const o$2=s.litElementPolyfillSupport;o$2?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.0");

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

    var lunr = {exports: {}};

    /**
     * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.3.9
     * Copyright (C) 2020 Oliver Nightingale
     * @license MIT
     */

    var hasRequiredLunr;

    function requireLunr () {
    	if (hasRequiredLunr) return lunr.exports;
    	hasRequiredLunr = 1;
    	(function (module, exports) {
    (function(){

    		/**
    		 * A convenience function for configuring and constructing
    		 * a new lunr Index.
    		 *
    		 * A lunr.Builder instance is created and the pipeline setup
    		 * with a trimmer, stop word filter and stemmer.
    		 *
    		 * This builder object is yielded to the configuration function
    		 * that is passed as a parameter, allowing the list of fields
    		 * and other builder parameters to be customised.
    		 *
    		 * All documents _must_ be added within the passed config function.
    		 *
    		 * @example
    		 * var idx = lunr(function () {
    		 *   this.field('title')
    		 *   this.field('body')
    		 *   this.ref('id')
    		 *
    		 *   documents.forEach(function (doc) {
    		 *     this.add(doc)
    		 *   }, this)
    		 * })
    		 *
    		 * @see {@link lunr.Builder}
    		 * @see {@link lunr.Pipeline}
    		 * @see {@link lunr.trimmer}
    		 * @see {@link lunr.stopWordFilter}
    		 * @see {@link lunr.stemmer}
    		 * @namespace {function} lunr
    		 */
    		var lunr = function (config) {
    		  var builder = new lunr.Builder;

    		  builder.pipeline.add(
    		    lunr.trimmer,
    		    lunr.stopWordFilter,
    		    lunr.stemmer
    		  );

    		  builder.searchPipeline.add(
    		    lunr.stemmer
    		  );

    		  config.call(builder, builder);
    		  return builder.build()
    		};

    		lunr.version = "2.3.9";
    		/*!
    		 * lunr.utils
    		 * Copyright (C) 2020 Oliver Nightingale
    		 */

    		/**
    		 * A namespace containing utils for the rest of the lunr library
    		 * @namespace lunr.utils
    		 */
    		lunr.utils = {};

    		/**
    		 * Print a warning message to the console.
    		 *
    		 * @param {String} message The message to be printed.
    		 * @memberOf lunr.utils
    		 * @function
    		 */
    		lunr.utils.warn = (function (global) {
    		  /* eslint-disable no-console */
    		  return function (message) {
    		    if (global.console && console.warn) {
    		      console.warn(message);
    		    }
    		  }
    		  /* eslint-enable no-console */
    		})(globalThis);

    		/**
    		 * Convert an object to a string.
    		 *
    		 * In the case of `null` and `undefined` the function returns
    		 * the empty string, in all other cases the result of calling
    		 * `toString` on the passed object is returned.
    		 *
    		 * @param {Any} obj The object to convert to a string.
    		 * @return {String} string representation of the passed object.
    		 * @memberOf lunr.utils
    		 */
    		lunr.utils.asString = function (obj) {
    		  if (obj === void 0 || obj === null) {
    		    return ""
    		  } else {
    		    return obj.toString()
    		  }
    		};

    		/**
    		 * Clones an object.
    		 *
    		 * Will create a copy of an existing object such that any mutations
    		 * on the copy cannot affect the original.
    		 *
    		 * Only shallow objects are supported, passing a nested object to this
    		 * function will cause a TypeError.
    		 *
    		 * Objects with primitives, and arrays of primitives are supported.
    		 *
    		 * @param {Object} obj The object to clone.
    		 * @return {Object} a clone of the passed object.
    		 * @throws {TypeError} when a nested object is passed.
    		 * @memberOf Utils
    		 */
    		lunr.utils.clone = function (obj) {
    		  if (obj === null || obj === undefined) {
    		    return obj
    		  }

    		  var clone = Object.create(null),
    		      keys = Object.keys(obj);

    		  for (var i = 0; i < keys.length; i++) {
    		    var key = keys[i],
    		        val = obj[key];

    		    if (Array.isArray(val)) {
    		      clone[key] = val.slice();
    		      continue
    		    }

    		    if (typeof val === 'string' ||
    		        typeof val === 'number' ||
    		        typeof val === 'boolean') {
    		      clone[key] = val;
    		      continue
    		    }

    		    throw new TypeError("clone is not deep and does not support nested objects")
    		  }

    		  return clone
    		};
    		lunr.FieldRef = function (docRef, fieldName, stringValue) {
    		  this.docRef = docRef;
    		  this.fieldName = fieldName;
    		  this._stringValue = stringValue;
    		};

    		lunr.FieldRef.joiner = "/";

    		lunr.FieldRef.fromString = function (s) {
    		  var n = s.indexOf(lunr.FieldRef.joiner);

    		  if (n === -1) {
    		    throw "malformed field ref string"
    		  }

    		  var fieldRef = s.slice(0, n),
    		      docRef = s.slice(n + 1);

    		  return new lunr.FieldRef (docRef, fieldRef, s)
    		};

    		lunr.FieldRef.prototype.toString = function () {
    		  if (this._stringValue == undefined) {
    		    this._stringValue = this.fieldName + lunr.FieldRef.joiner + this.docRef;
    		  }

    		  return this._stringValue
    		};
    		/*!
    		 * lunr.Set
    		 * Copyright (C) 2020 Oliver Nightingale
    		 */

    		/**
    		 * A lunr set.
    		 *
    		 * @constructor
    		 */
    		lunr.Set = function (elements) {
    		  this.elements = Object.create(null);

    		  if (elements) {
    		    this.length = elements.length;

    		    for (var i = 0; i < this.length; i++) {
    		      this.elements[elements[i]] = true;
    		    }
    		  } else {
    		    this.length = 0;
    		  }
    		};

    		/**
    		 * A complete set that contains all elements.
    		 *
    		 * @static
    		 * @readonly
    		 * @type {lunr.Set}
    		 */
    		lunr.Set.complete = {
    		  intersect: function (other) {
    		    return other
    		  },

    		  union: function () {
    		    return this
    		  },

    		  contains: function () {
    		    return true
    		  }
    		};

    		/**
    		 * An empty set that contains no elements.
    		 *
    		 * @static
    		 * @readonly
    		 * @type {lunr.Set}
    		 */
    		lunr.Set.empty = {
    		  intersect: function () {
    		    return this
    		  },

    		  union: function (other) {
    		    return other
    		  },

    		  contains: function () {
    		    return false
    		  }
    		};

    		/**
    		 * Returns true if this set contains the specified object.
    		 *
    		 * @param {object} object - Object whose presence in this set is to be tested.
    		 * @returns {boolean} - True if this set contains the specified object.
    		 */
    		lunr.Set.prototype.contains = function (object) {
    		  return !!this.elements[object]
    		};

    		/**
    		 * Returns a new set containing only the elements that are present in both
    		 * this set and the specified set.
    		 *
    		 * @param {lunr.Set} other - set to intersect with this set.
    		 * @returns {lunr.Set} a new set that is the intersection of this and the specified set.
    		 */

    		lunr.Set.prototype.intersect = function (other) {
    		  var a, b, elements, intersection = [];

    		  if (other === lunr.Set.complete) {
    		    return this
    		  }

    		  if (other === lunr.Set.empty) {
    		    return other
    		  }

    		  if (this.length < other.length) {
    		    a = this;
    		    b = other;
    		  } else {
    		    a = other;
    		    b = this;
    		  }

    		  elements = Object.keys(a.elements);

    		  for (var i = 0; i < elements.length; i++) {
    		    var element = elements[i];
    		    if (element in b.elements) {
    		      intersection.push(element);
    		    }
    		  }

    		  return new lunr.Set (intersection)
    		};

    		/**
    		 * Returns a new set combining the elements of this and the specified set.
    		 *
    		 * @param {lunr.Set} other - set to union with this set.
    		 * @return {lunr.Set} a new set that is the union of this and the specified set.
    		 */

    		lunr.Set.prototype.union = function (other) {
    		  if (other === lunr.Set.complete) {
    		    return lunr.Set.complete
    		  }

    		  if (other === lunr.Set.empty) {
    		    return this
    		  }

    		  return new lunr.Set(Object.keys(this.elements).concat(Object.keys(other.elements)))
    		};
    		/**
    		 * A function to calculate the inverse document frequency for
    		 * a posting. This is shared between the builder and the index
    		 *
    		 * @private
    		 * @param {object} posting - The posting for a given term
    		 * @param {number} documentCount - The total number of documents.
    		 */
    		lunr.idf = function (posting, documentCount) {
    		  var documentsWithTerm = 0;

    		  for (var fieldName in posting) {
    		    if (fieldName == '_index') continue // Ignore the term index, its not a field
    		    documentsWithTerm += Object.keys(posting[fieldName]).length;
    		  }

    		  var x = (documentCount - documentsWithTerm + 0.5) / (documentsWithTerm + 0.5);

    		  return Math.log(1 + Math.abs(x))
    		};

    		/**
    		 * A token wraps a string representation of a token
    		 * as it is passed through the text processing pipeline.
    		 *
    		 * @constructor
    		 * @param {string} [str=''] - The string token being wrapped.
    		 * @param {object} [metadata={}] - Metadata associated with this token.
    		 */
    		lunr.Token = function (str, metadata) {
    		  this.str = str || "";
    		  this.metadata = metadata || {};
    		};

    		/**
    		 * Returns the token string that is being wrapped by this object.
    		 *
    		 * @returns {string}
    		 */
    		lunr.Token.prototype.toString = function () {
    		  return this.str
    		};

    		/**
    		 * A token update function is used when updating or optionally
    		 * when cloning a token.
    		 *
    		 * @callback lunr.Token~updateFunction
    		 * @param {string} str - The string representation of the token.
    		 * @param {Object} metadata - All metadata associated with this token.
    		 */

    		/**
    		 * Applies the given function to the wrapped string token.
    		 *
    		 * @example
    		 * token.update(function (str, metadata) {
    		 *   return str.toUpperCase()
    		 * })
    		 *
    		 * @param {lunr.Token~updateFunction} fn - A function to apply to the token string.
    		 * @returns {lunr.Token}
    		 */
    		lunr.Token.prototype.update = function (fn) {
    		  this.str = fn(this.str, this.metadata);
    		  return this
    		};

    		/**
    		 * Creates a clone of this token. Optionally a function can be
    		 * applied to the cloned token.
    		 *
    		 * @param {lunr.Token~updateFunction} [fn] - An optional function to apply to the cloned token.
    		 * @returns {lunr.Token}
    		 */
    		lunr.Token.prototype.clone = function (fn) {
    		  fn = fn || function (s) { return s };
    		  return new lunr.Token (fn(this.str, this.metadata), this.metadata)
    		};
    		/*!
    		 * lunr.tokenizer
    		 * Copyright (C) 2020 Oliver Nightingale
    		 */

    		/**
    		 * A function for splitting a string into tokens ready to be inserted into
    		 * the search index. Uses `lunr.tokenizer.separator` to split strings, change
    		 * the value of this property to change how strings are split into tokens.
    		 *
    		 * This tokenizer will convert its parameter to a string by calling `toString` and
    		 * then will split this string on the character in `lunr.tokenizer.separator`.
    		 * Arrays will have their elements converted to strings and wrapped in a lunr.Token.
    		 *
    		 * Optional metadata can be passed to the tokenizer, this metadata will be cloned and
    		 * added as metadata to every token that is created from the object to be tokenized.
    		 *
    		 * @static
    		 * @param {?(string|object|object[])} obj - The object to convert into tokens
    		 * @param {?object} metadata - Optional metadata to associate with every token
    		 * @returns {lunr.Token[]}
    		 * @see {@link lunr.Pipeline}
    		 */
    		lunr.tokenizer = function (obj, metadata) {
    		  if (obj == null || obj == undefined) {
    		    return []
    		  }

    		  if (Array.isArray(obj)) {
    		    return obj.map(function (t) {
    		      return new lunr.Token(
    		        lunr.utils.asString(t).toLowerCase(),
    		        lunr.utils.clone(metadata)
    		      )
    		    })
    		  }

    		  var str = obj.toString().toLowerCase(),
    		      len = str.length,
    		      tokens = [];

    		  for (var sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {
    		    var char = str.charAt(sliceEnd),
    		        sliceLength = sliceEnd - sliceStart;

    		    if ((char.match(lunr.tokenizer.separator) || sliceEnd == len)) {

    		      if (sliceLength > 0) {
    		        var tokenMetadata = lunr.utils.clone(metadata) || {};
    		        tokenMetadata["position"] = [sliceStart, sliceLength];
    		        tokenMetadata["index"] = tokens.length;

    		        tokens.push(
    		          new lunr.Token (
    		            str.slice(sliceStart, sliceEnd),
    		            tokenMetadata
    		          )
    		        );
    		      }

    		      sliceStart = sliceEnd + 1;
    		    }

    		  }

    		  return tokens
    		};

    		/**
    		 * The separator used to split a string into tokens. Override this property to change the behaviour of
    		 * `lunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.
    		 *
    		 * @static
    		 * @see lunr.tokenizer
    		 */
    		lunr.tokenizer.separator = /[\s\-]+/;
    		/*!
    		 * lunr.Pipeline
    		 * Copyright (C) 2020 Oliver Nightingale
    		 */

    		/**
    		 * lunr.Pipelines maintain an ordered list of functions to be applied to all
    		 * tokens in documents entering the search index and queries being ran against
    		 * the index.
    		 *
    		 * An instance of lunr.Index created with the lunr shortcut will contain a
    		 * pipeline with a stop word filter and an English language stemmer. Extra
    		 * functions can be added before or after either of these functions or these
    		 * default functions can be removed.
    		 *
    		 * When run the pipeline will call each function in turn, passing a token, the
    		 * index of that token in the original list of all tokens and finally a list of
    		 * all the original tokens.
    		 *
    		 * The output of functions in the pipeline will be passed to the next function
    		 * in the pipeline. To exclude a token from entering the index the function
    		 * should return undefined, the rest of the pipeline will not be called with
    		 * this token.
    		 *
    		 * For serialisation of pipelines to work, all functions used in an instance of
    		 * a pipeline should be registered with lunr.Pipeline. Registered functions can
    		 * then be loaded. If trying to load a serialised pipeline that uses functions
    		 * that are not registered an error will be thrown.
    		 *
    		 * If not planning on serialising the pipeline then registering pipeline functions
    		 * is not necessary.
    		 *
    		 * @constructor
    		 */
    		lunr.Pipeline = function () {
    		  this._stack = [];
    		};

    		lunr.Pipeline.registeredFunctions = Object.create(null);

    		/**
    		 * A pipeline function maps lunr.Token to lunr.Token. A lunr.Token contains the token
    		 * string as well as all known metadata. A pipeline function can mutate the token string
    		 * or mutate (or add) metadata for a given token.
    		 *
    		 * A pipeline function can indicate that the passed token should be discarded by returning
    		 * null, undefined or an empty string. This token will not be passed to any downstream pipeline
    		 * functions and will not be added to the index.
    		 *
    		 * Multiple tokens can be returned by returning an array of tokens. Each token will be passed
    		 * to any downstream pipeline functions and all will returned tokens will be added to the index.
    		 *
    		 * Any number of pipeline functions may be chained together using a lunr.Pipeline.
    		 *
    		 * @interface lunr.PipelineFunction
    		 * @param {lunr.Token} token - A token from the document being processed.
    		 * @param {number} i - The index of this token in the complete list of tokens for this document/field.
    		 * @param {lunr.Token[]} tokens - All tokens for this document/field.
    		 * @returns {(?lunr.Token|lunr.Token[])}
    		 */

    		/**
    		 * Register a function with the pipeline.
    		 *
    		 * Functions that are used in the pipeline should be registered if the pipeline
    		 * needs to be serialised, or a serialised pipeline needs to be loaded.
    		 *
    		 * Registering a function does not add it to a pipeline, functions must still be
    		 * added to instances of the pipeline for them to be used when running a pipeline.
    		 *
    		 * @param {lunr.PipelineFunction} fn - The function to check for.
    		 * @param {String} label - The label to register this function with
    		 */
    		lunr.Pipeline.registerFunction = function (fn, label) {
    		  if (label in this.registeredFunctions) {
    		    lunr.utils.warn('Overwriting existing registered function: ' + label);
    		  }

    		  fn.label = label;
    		  lunr.Pipeline.registeredFunctions[fn.label] = fn;
    		};

    		/**
    		 * Warns if the function is not registered as a Pipeline function.
    		 *
    		 * @param {lunr.PipelineFunction} fn - The function to check for.
    		 * @private
    		 */
    		lunr.Pipeline.warnIfFunctionNotRegistered = function (fn) {
    		  var isRegistered = fn.label && (fn.label in this.registeredFunctions);

    		  if (!isRegistered) {
    		    lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\n', fn);
    		  }
    		};

    		/**
    		 * Loads a previously serialised pipeline.
    		 *
    		 * All functions to be loaded must already be registered with lunr.Pipeline.
    		 * If any function from the serialised data has not been registered then an
    		 * error will be thrown.
    		 *
    		 * @param {Object} serialised - The serialised pipeline to load.
    		 * @returns {lunr.Pipeline}
    		 */
    		lunr.Pipeline.load = function (serialised) {
    		  var pipeline = new lunr.Pipeline;

    		  serialised.forEach(function (fnName) {
    		    var fn = lunr.Pipeline.registeredFunctions[fnName];

    		    if (fn) {
    		      pipeline.add(fn);
    		    } else {
    		      throw new Error('Cannot load unregistered function: ' + fnName)
    		    }
    		  });

    		  return pipeline
    		};

    		/**
    		 * Adds new functions to the end of the pipeline.
    		 *
    		 * Logs a warning if the function has not been registered.
    		 *
    		 * @param {lunr.PipelineFunction[]} functions - Any number of functions to add to the pipeline.
    		 */
    		lunr.Pipeline.prototype.add = function () {
    		  var fns = Array.prototype.slice.call(arguments);

    		  fns.forEach(function (fn) {
    		    lunr.Pipeline.warnIfFunctionNotRegistered(fn);
    		    this._stack.push(fn);
    		  }, this);
    		};

    		/**
    		 * Adds a single function after a function that already exists in the
    		 * pipeline.
    		 *
    		 * Logs a warning if the function has not been registered.
    		 *
    		 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
    		 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
    		 */
    		lunr.Pipeline.prototype.after = function (existingFn, newFn) {
    		  lunr.Pipeline.warnIfFunctionNotRegistered(newFn);

    		  var pos = this._stack.indexOf(existingFn);
    		  if (pos == -1) {
    		    throw new Error('Cannot find existingFn')
    		  }

    		  pos = pos + 1;
    		  this._stack.splice(pos, 0, newFn);
    		};

    		/**
    		 * Adds a single function before a function that already exists in the
    		 * pipeline.
    		 *
    		 * Logs a warning if the function has not been registered.
    		 *
    		 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
    		 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
    		 */
    		lunr.Pipeline.prototype.before = function (existingFn, newFn) {
    		  lunr.Pipeline.warnIfFunctionNotRegistered(newFn);

    		  var pos = this._stack.indexOf(existingFn);
    		  if (pos == -1) {
    		    throw new Error('Cannot find existingFn')
    		  }

    		  this._stack.splice(pos, 0, newFn);
    		};

    		/**
    		 * Removes a function from the pipeline.
    		 *
    		 * @param {lunr.PipelineFunction} fn The function to remove from the pipeline.
    		 */
    		lunr.Pipeline.prototype.remove = function (fn) {
    		  var pos = this._stack.indexOf(fn);
    		  if (pos == -1) {
    		    return
    		  }

    		  this._stack.splice(pos, 1);
    		};

    		/**
    		 * Runs the current list of functions that make up the pipeline against the
    		 * passed tokens.
    		 *
    		 * @param {Array} tokens The tokens to run through the pipeline.
    		 * @returns {Array}
    		 */
    		lunr.Pipeline.prototype.run = function (tokens) {
    		  var stackLength = this._stack.length;

    		  for (var i = 0; i < stackLength; i++) {
    		    var fn = this._stack[i];
    		    var memo = [];

    		    for (var j = 0; j < tokens.length; j++) {
    		      var result = fn(tokens[j], j, tokens);

    		      if (result === null || result === void 0 || result === '') continue

    		      if (Array.isArray(result)) {
    		        for (var k = 0; k < result.length; k++) {
    		          memo.push(result[k]);
    		        }
    		      } else {
    		        memo.push(result);
    		      }
    		    }

    		    tokens = memo;
    		  }

    		  return tokens
    		};

    		/**
    		 * Convenience method for passing a string through a pipeline and getting
    		 * strings out. This method takes care of wrapping the passed string in a
    		 * token and mapping the resulting tokens back to strings.
    		 *
    		 * @param {string} str - The string to pass through the pipeline.
    		 * @param {?object} metadata - Optional metadata to associate with the token
    		 * passed to the pipeline.
    		 * @returns {string[]}
    		 */
    		lunr.Pipeline.prototype.runString = function (str, metadata) {
    		  var token = new lunr.Token (str, metadata);

    		  return this.run([token]).map(function (t) {
    		    return t.toString()
    		  })
    		};

    		/**
    		 * Resets the pipeline by removing any existing processors.
    		 *
    		 */
    		lunr.Pipeline.prototype.reset = function () {
    		  this._stack = [];
    		};

    		/**
    		 * Returns a representation of the pipeline ready for serialisation.
    		 *
    		 * Logs a warning if the function has not been registered.
    		 *
    		 * @returns {Array}
    		 */
    		lunr.Pipeline.prototype.toJSON = function () {
    		  return this._stack.map(function (fn) {
    		    lunr.Pipeline.warnIfFunctionNotRegistered(fn);

    		    return fn.label
    		  })
    		};
    		/*!
    		 * lunr.Vector
    		 * Copyright (C) 2020 Oliver Nightingale
    		 */

    		/**
    		 * A vector is used to construct the vector space of documents and queries. These
    		 * vectors support operations to determine the similarity between two documents or
    		 * a document and a query.
    		 *
    		 * Normally no parameters are required for initializing a vector, but in the case of
    		 * loading a previously dumped vector the raw elements can be provided to the constructor.
    		 *
    		 * For performance reasons vectors are implemented with a flat array, where an elements
    		 * index is immediately followed by its value. E.g. [index, value, index, value]. This
    		 * allows the underlying array to be as sparse as possible and still offer decent
    		 * performance when being used for vector calculations.
    		 *
    		 * @constructor
    		 * @param {Number[]} [elements] - The flat list of element index and element value pairs.
    		 */
    		lunr.Vector = function (elements) {
    		  this._magnitude = 0;
    		  this.elements = elements || [];
    		};


    		/**
    		 * Calculates the position within the vector to insert a given index.
    		 *
    		 * This is used internally by insert and upsert. If there are duplicate indexes then
    		 * the position is returned as if the value for that index were to be updated, but it
    		 * is the callers responsibility to check whether there is a duplicate at that index
    		 *
    		 * @param {Number} insertIdx - The index at which the element should be inserted.
    		 * @returns {Number}
    		 */
    		lunr.Vector.prototype.positionForIndex = function (index) {
    		  // For an empty vector the tuple can be inserted at the beginning
    		  if (this.elements.length == 0) {
    		    return 0
    		  }

    		  var start = 0,
    		      end = this.elements.length / 2,
    		      sliceLength = end - start,
    		      pivotPoint = Math.floor(sliceLength / 2),
    		      pivotIndex = this.elements[pivotPoint * 2];

    		  while (sliceLength > 1) {
    		    if (pivotIndex < index) {
    		      start = pivotPoint;
    		    }

    		    if (pivotIndex > index) {
    		      end = pivotPoint;
    		    }

    		    if (pivotIndex == index) {
    		      break
    		    }

    		    sliceLength = end - start;
    		    pivotPoint = start + Math.floor(sliceLength / 2);
    		    pivotIndex = this.elements[pivotPoint * 2];
    		  }

    		  if (pivotIndex == index) {
    		    return pivotPoint * 2
    		  }

    		  if (pivotIndex > index) {
    		    return pivotPoint * 2
    		  }

    		  if (pivotIndex < index) {
    		    return (pivotPoint + 1) * 2
    		  }
    		};

    		/**
    		 * Inserts an element at an index within the vector.
    		 *
    		 * Does not allow duplicates, will throw an error if there is already an entry
    		 * for this index.
    		 *
    		 * @param {Number} insertIdx - The index at which the element should be inserted.
    		 * @param {Number} val - The value to be inserted into the vector.
    		 */
    		lunr.Vector.prototype.insert = function (insertIdx, val) {
    		  this.upsert(insertIdx, val, function () {
    		    throw "duplicate index"
    		  });
    		};

    		/**
    		 * Inserts or updates an existing index within the vector.
    		 *
    		 * @param {Number} insertIdx - The index at which the element should be inserted.
    		 * @param {Number} val - The value to be inserted into the vector.
    		 * @param {function} fn - A function that is called for updates, the existing value and the
    		 * requested value are passed as arguments
    		 */
    		lunr.Vector.prototype.upsert = function (insertIdx, val, fn) {
    		  this._magnitude = 0;
    		  var position = this.positionForIndex(insertIdx);

    		  if (this.elements[position] == insertIdx) {
    		    this.elements[position + 1] = fn(this.elements[position + 1], val);
    		  } else {
    		    this.elements.splice(position, 0, insertIdx, val);
    		  }
    		};

    		/**
    		 * Calculates the magnitude of this vector.
    		 *
    		 * @returns {Number}
    		 */
    		lunr.Vector.prototype.magnitude = function () {
    		  if (this._magnitude) return this._magnitude

    		  var sumOfSquares = 0,
    		      elementsLength = this.elements.length;

    		  for (var i = 1; i < elementsLength; i += 2) {
    		    var val = this.elements[i];
    		    sumOfSquares += val * val;
    		  }

    		  return this._magnitude = Math.sqrt(sumOfSquares)
    		};

    		/**
    		 * Calculates the dot product of this vector and another vector.
    		 *
    		 * @param {lunr.Vector} otherVector - The vector to compute the dot product with.
    		 * @returns {Number}
    		 */
    		lunr.Vector.prototype.dot = function (otherVector) {
    		  var dotProduct = 0,
    		      a = this.elements, b = otherVector.elements,
    		      aLen = a.length, bLen = b.length,
    		      aVal = 0, bVal = 0,
    		      i = 0, j = 0;

    		  while (i < aLen && j < bLen) {
    		    aVal = a[i], bVal = b[j];
    		    if (aVal < bVal) {
    		      i += 2;
    		    } else if (aVal > bVal) {
    		      j += 2;
    		    } else if (aVal == bVal) {
    		      dotProduct += a[i + 1] * b[j + 1];
    		      i += 2;
    		      j += 2;
    		    }
    		  }

    		  return dotProduct
    		};

    		/**
    		 * Calculates the similarity between this vector and another vector.
    		 *
    		 * @param {lunr.Vector} otherVector - The other vector to calculate the
    		 * similarity with.
    		 * @returns {Number}
    		 */
    		lunr.Vector.prototype.similarity = function (otherVector) {
    		  return this.dot(otherVector) / this.magnitude() || 0
    		};

    		/**
    		 * Converts the vector to an array of the elements within the vector.
    		 *
    		 * @returns {Number[]}
    		 */
    		lunr.Vector.prototype.toArray = function () {
    		  var output = new Array (this.elements.length / 2);

    		  for (var i = 1, j = 0; i < this.elements.length; i += 2, j++) {
    		    output[j] = this.elements[i];
    		  }

    		  return output
    		};

    		/**
    		 * A JSON serializable representation of the vector.
    		 *
    		 * @returns {Number[]}
    		 */
    		lunr.Vector.prototype.toJSON = function () {
    		  return this.elements
    		};
    		/* eslint-disable */
    		/*!
    		 * lunr.stemmer
    		 * Copyright (C) 2020 Oliver Nightingale
    		 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
    		 */

    		/**
    		 * lunr.stemmer is an english language stemmer, this is a JavaScript
    		 * implementation of the PorterStemmer taken from http://tartarus.org/~martin
    		 *
    		 * @static
    		 * @implements {lunr.PipelineFunction}
    		 * @param {lunr.Token} token - The string to stem
    		 * @returns {lunr.Token}
    		 * @see {@link lunr.Pipeline}
    		 * @function
    		 */
    		lunr.stemmer = (function(){
    		  var step2list = {
    		      "ational" : "ate",
    		      "tional" : "tion",
    		      "enci" : "ence",
    		      "anci" : "ance",
    		      "izer" : "ize",
    		      "bli" : "ble",
    		      "alli" : "al",
    		      "entli" : "ent",
    		      "eli" : "e",
    		      "ousli" : "ous",
    		      "ization" : "ize",
    		      "ation" : "ate",
    		      "ator" : "ate",
    		      "alism" : "al",
    		      "iveness" : "ive",
    		      "fulness" : "ful",
    		      "ousness" : "ous",
    		      "aliti" : "al",
    		      "iviti" : "ive",
    		      "biliti" : "ble",
    		      "logi" : "log"
    		    },

    		    step3list = {
    		      "icate" : "ic",
    		      "ative" : "",
    		      "alize" : "al",
    		      "iciti" : "ic",
    		      "ical" : "ic",
    		      "ful" : "",
    		      "ness" : ""
    		    },

    		    c = "[^aeiou]",          // consonant
    		    v = "[aeiouy]",          // vowel
    		    C = c + "[^aeiouy]*",    // consonant sequence
    		    V = v + "[aeiou]*",      // vowel sequence

    		    mgr0 = "^(" + C + ")?" + V + C,               // [C]VC... is m>0
    		    meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",  // [C]VC[V] is m=1
    		    mgr1 = "^(" + C + ")?" + V + C + V + C,       // [C]VCVC... is m>1
    		    s_v = "^(" + C + ")?" + v;                   // vowel in stem

    		  var re_mgr0 = new RegExp(mgr0);
    		  var re_mgr1 = new RegExp(mgr1);
    		  var re_meq1 = new RegExp(meq1);
    		  var re_s_v = new RegExp(s_v);

    		  var re_1a = /^(.+?)(ss|i)es$/;
    		  var re2_1a = /^(.+?)([^s])s$/;
    		  var re_1b = /^(.+?)eed$/;
    		  var re2_1b = /^(.+?)(ed|ing)$/;
    		  var re_1b_2 = /.$/;
    		  var re2_1b_2 = /(at|bl|iz)$/;
    		  var re3_1b_2 = new RegExp("([^aeiouylsz])\\1$");
    		  var re4_1b_2 = new RegExp("^" + C + v + "[^aeiouwxy]$");

    		  var re_1c = /^(.+?[^aeiou])y$/;
    		  var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;

    		  var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;

    		  var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
    		  var re2_4 = /^(.+?)(s|t)(ion)$/;

    		  var re_5 = /^(.+?)e$/;
    		  var re_5_1 = /ll$/;
    		  var re3_5 = new RegExp("^" + C + v + "[^aeiouwxy]$");

    		  var porterStemmer = function porterStemmer(w) {
    		    var stem,
    		      suffix,
    		      firstch,
    		      re,
    		      re2,
    		      re3,
    		      re4;

    		    if (w.length < 3) { return w; }

    		    firstch = w.substr(0,1);
    		    if (firstch == "y") {
    		      w = firstch.toUpperCase() + w.substr(1);
    		    }

    		    // Step 1a
    		    re = re_1a;
    		    re2 = re2_1a;

    		    if (re.test(w)) { w = w.replace(re,"$1$2"); }
    		    else if (re2.test(w)) { w = w.replace(re2,"$1$2"); }

    		    // Step 1b
    		    re = re_1b;
    		    re2 = re2_1b;
    		    if (re.test(w)) {
    		      var fp = re.exec(w);
    		      re = re_mgr0;
    		      if (re.test(fp[1])) {
    		        re = re_1b_2;
    		        w = w.replace(re,"");
    		      }
    		    } else if (re2.test(w)) {
    		      var fp = re2.exec(w);
    		      stem = fp[1];
    		      re2 = re_s_v;
    		      if (re2.test(stem)) {
    		        w = stem;
    		        re2 = re2_1b_2;
    		        re3 = re3_1b_2;
    		        re4 = re4_1b_2;
    		        if (re2.test(w)) { w = w + "e"; }
    		        else if (re3.test(w)) { re = re_1b_2; w = w.replace(re,""); }
    		        else if (re4.test(w)) { w = w + "e"; }
    		      }
    		    }

    		    // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)
    		    re = re_1c;
    		    if (re.test(w)) {
    		      var fp = re.exec(w);
    		      stem = fp[1];
    		      w = stem + "i";
    		    }

    		    // Step 2
    		    re = re_2;
    		    if (re.test(w)) {
    		      var fp = re.exec(w);
    		      stem = fp[1];
    		      suffix = fp[2];
    		      re = re_mgr0;
    		      if (re.test(stem)) {
    		        w = stem + step2list[suffix];
    		      }
    		    }

    		    // Step 3
    		    re = re_3;
    		    if (re.test(w)) {
    		      var fp = re.exec(w);
    		      stem = fp[1];
    		      suffix = fp[2];
    		      re = re_mgr0;
    		      if (re.test(stem)) {
    		        w = stem + step3list[suffix];
    		      }
    		    }

    		    // Step 4
    		    re = re_4;
    		    re2 = re2_4;
    		    if (re.test(w)) {
    		      var fp = re.exec(w);
    		      stem = fp[1];
    		      re = re_mgr1;
    		      if (re.test(stem)) {
    		        w = stem;
    		      }
    		    } else if (re2.test(w)) {
    		      var fp = re2.exec(w);
    		      stem = fp[1] + fp[2];
    		      re2 = re_mgr1;
    		      if (re2.test(stem)) {
    		        w = stem;
    		      }
    		    }

    		    // Step 5
    		    re = re_5;
    		    if (re.test(w)) {
    		      var fp = re.exec(w);
    		      stem = fp[1];
    		      re = re_mgr1;
    		      re2 = re_meq1;
    		      re3 = re3_5;
    		      if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
    		        w = stem;
    		      }
    		    }

    		    re = re_5_1;
    		    re2 = re_mgr1;
    		    if (re.test(w) && re2.test(w)) {
    		      re = re_1b_2;
    		      w = w.replace(re,"");
    		    }

    		    // and turn initial Y back to y

    		    if (firstch == "y") {
    		      w = firstch.toLowerCase() + w.substr(1);
    		    }

    		    return w;
    		  };

    		  return function (token) {
    		    return token.update(porterStemmer);
    		  }
    		})();

    		lunr.Pipeline.registerFunction(lunr.stemmer, 'stemmer');
    		/*!
    		 * lunr.stopWordFilter
    		 * Copyright (C) 2020 Oliver Nightingale
    		 */

    		/**
    		 * lunr.generateStopWordFilter builds a stopWordFilter function from the provided
    		 * list of stop words.
    		 *
    		 * The built in lunr.stopWordFilter is built using this generator and can be used
    		 * to generate custom stopWordFilters for applications or non English languages.
    		 *
    		 * @function
    		 * @param {Array} token The token to pass through the filter
    		 * @returns {lunr.PipelineFunction}
    		 * @see lunr.Pipeline
    		 * @see lunr.stopWordFilter
    		 */
    		lunr.generateStopWordFilter = function (stopWords) {
    		  var words = stopWords.reduce(function (memo, stopWord) {
    		    memo[stopWord] = stopWord;
    		    return memo
    		  }, {});

    		  return function (token) {
    		    if (token && words[token.toString()] !== token.toString()) return token
    		  }
    		};

    		/**
    		 * lunr.stopWordFilter is an English language stop word list filter, any words
    		 * contained in the list will not be passed through the filter.
    		 *
    		 * This is intended to be used in the Pipeline. If the token does not pass the
    		 * filter then undefined will be returned.
    		 *
    		 * @function
    		 * @implements {lunr.PipelineFunction}
    		 * @params {lunr.Token} token - A token to check for being a stop word.
    		 * @returns {lunr.Token}
    		 * @see {@link lunr.Pipeline}
    		 */
    		lunr.stopWordFilter = lunr.generateStopWordFilter([
    		  'a',
    		  'able',
    		  'about',
    		  'across',
    		  'after',
    		  'all',
    		  'almost',
    		  'also',
    		  'am',
    		  'among',
    		  'an',
    		  'and',
    		  'any',
    		  'are',
    		  'as',
    		  'at',
    		  'be',
    		  'because',
    		  'been',
    		  'but',
    		  'by',
    		  'can',
    		  'cannot',
    		  'could',
    		  'dear',
    		  'did',
    		  'do',
    		  'does',
    		  'either',
    		  'else',
    		  'ever',
    		  'every',
    		  'for',
    		  'from',
    		  'get',
    		  'got',
    		  'had',
    		  'has',
    		  'have',
    		  'he',
    		  'her',
    		  'hers',
    		  'him',
    		  'his',
    		  'how',
    		  'however',
    		  'i',
    		  'if',
    		  'in',
    		  'into',
    		  'is',
    		  'it',
    		  'its',
    		  'just',
    		  'least',
    		  'let',
    		  'like',
    		  'likely',
    		  'may',
    		  'me',
    		  'might',
    		  'most',
    		  'must',
    		  'my',
    		  'neither',
    		  'no',
    		  'nor',
    		  'not',
    		  'of',
    		  'off',
    		  'often',
    		  'on',
    		  'only',
    		  'or',
    		  'other',
    		  'our',
    		  'own',
    		  'rather',
    		  'said',
    		  'say',
    		  'says',
    		  'she',
    		  'should',
    		  'since',
    		  'so',
    		  'some',
    		  'than',
    		  'that',
    		  'the',
    		  'their',
    		  'them',
    		  'then',
    		  'there',
    		  'these',
    		  'they',
    		  'this',
    		  'tis',
    		  'to',
    		  'too',
    		  'twas',
    		  'us',
    		  'wants',
    		  'was',
    		  'we',
    		  'were',
    		  'what',
    		  'when',
    		  'where',
    		  'which',
    		  'while',
    		  'who',
    		  'whom',
    		  'why',
    		  'will',
    		  'with',
    		  'would',
    		  'yet',
    		  'you',
    		  'your'
    		]);

    		lunr.Pipeline.registerFunction(lunr.stopWordFilter, 'stopWordFilter');
    		/*!
    		 * lunr.trimmer
    		 * Copyright (C) 2020 Oliver Nightingale
    		 */

    		/**
    		 * lunr.trimmer is a pipeline function for trimming non word
    		 * characters from the beginning and end of tokens before they
    		 * enter the index.
    		 *
    		 * This implementation may not work correctly for non latin
    		 * characters and should either be removed or adapted for use
    		 * with languages with non-latin characters.
    		 *
    		 * @static
    		 * @implements {lunr.PipelineFunction}
    		 * @param {lunr.Token} token The token to pass through the filter
    		 * @returns {lunr.Token}
    		 * @see lunr.Pipeline
    		 */
    		lunr.trimmer = function (token) {
    		  return token.update(function (s) {
    		    return s.replace(/^\W+/, '').replace(/\W+$/, '')
    		  })
    		};

    		lunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer');
    		/*!
    		 * lunr.TokenSet
    		 * Copyright (C) 2020 Oliver Nightingale
    		 */

    		/**
    		 * A token set is used to store the unique list of all tokens
    		 * within an index. Token sets are also used to represent an
    		 * incoming query to the index, this query token set and index
    		 * token set are then intersected to find which tokens to look
    		 * up in the inverted index.
    		 *
    		 * A token set can hold multiple tokens, as in the case of the
    		 * index token set, or it can hold a single token as in the
    		 * case of a simple query token set.
    		 *
    		 * Additionally token sets are used to perform wildcard matching.
    		 * Leading, contained and trailing wildcards are supported, and
    		 * from this edit distance matching can also be provided.
    		 *
    		 * Token sets are implemented as a minimal finite state automata,
    		 * where both common prefixes and suffixes are shared between tokens.
    		 * This helps to reduce the space used for storing the token set.
    		 *
    		 * @constructor
    		 */
    		lunr.TokenSet = function () {
    		  this.final = false;
    		  this.edges = {};
    		  this.id = lunr.TokenSet._nextId;
    		  lunr.TokenSet._nextId += 1;
    		};

    		/**
    		 * Keeps track of the next, auto increment, identifier to assign
    		 * to a new tokenSet.
    		 *
    		 * TokenSets require a unique identifier to be correctly minimised.
    		 *
    		 * @private
    		 */
    		lunr.TokenSet._nextId = 1;

    		/**
    		 * Creates a TokenSet instance from the given sorted array of words.
    		 *
    		 * @param {String[]} arr - A sorted array of strings to create the set from.
    		 * @returns {lunr.TokenSet}
    		 * @throws Will throw an error if the input array is not sorted.
    		 */
    		lunr.TokenSet.fromArray = function (arr) {
    		  var builder = new lunr.TokenSet.Builder;

    		  for (var i = 0, len = arr.length; i < len; i++) {
    		    builder.insert(arr[i]);
    		  }

    		  builder.finish();
    		  return builder.root
    		};

    		/**
    		 * Creates a token set from a query clause.
    		 *
    		 * @private
    		 * @param {Object} clause - A single clause from lunr.Query.
    		 * @param {string} clause.term - The query clause term.
    		 * @param {number} [clause.editDistance] - The optional edit distance for the term.
    		 * @returns {lunr.TokenSet}
    		 */
    		lunr.TokenSet.fromClause = function (clause) {
    		  if ('editDistance' in clause) {
    		    return lunr.TokenSet.fromFuzzyString(clause.term, clause.editDistance)
    		  } else {
    		    return lunr.TokenSet.fromString(clause.term)
    		  }
    		};

    		/**
    		 * Creates a token set representing a single string with a specified
    		 * edit distance.
    		 *
    		 * Insertions, deletions, substitutions and transpositions are each
    		 * treated as an edit distance of 1.
    		 *
    		 * Increasing the allowed edit distance will have a dramatic impact
    		 * on the performance of both creating and intersecting these TokenSets.
    		 * It is advised to keep the edit distance less than 3.
    		 *
    		 * @param {string} str - The string to create the token set from.
    		 * @param {number} editDistance - The allowed edit distance to match.
    		 * @returns {lunr.Vector}
    		 */
    		lunr.TokenSet.fromFuzzyString = function (str, editDistance) {
    		  var root = new lunr.TokenSet;

    		  var stack = [{
    		    node: root,
    		    editsRemaining: editDistance,
    		    str: str
    		  }];

    		  while (stack.length) {
    		    var frame = stack.pop();

    		    // no edit
    		    if (frame.str.length > 0) {
    		      var char = frame.str.charAt(0),
    		          noEditNode;

    		      if (char in frame.node.edges) {
    		        noEditNode = frame.node.edges[char];
    		      } else {
    		        noEditNode = new lunr.TokenSet;
    		        frame.node.edges[char] = noEditNode;
    		      }

    		      if (frame.str.length == 1) {
    		        noEditNode.final = true;
    		      }

    		      stack.push({
    		        node: noEditNode,
    		        editsRemaining: frame.editsRemaining,
    		        str: frame.str.slice(1)
    		      });
    		    }

    		    if (frame.editsRemaining == 0) {
    		      continue
    		    }

    		    // insertion
    		    if ("*" in frame.node.edges) {
    		      var insertionNode = frame.node.edges["*"];
    		    } else {
    		      var insertionNode = new lunr.TokenSet;
    		      frame.node.edges["*"] = insertionNode;
    		    }

    		    if (frame.str.length == 0) {
    		      insertionNode.final = true;
    		    }

    		    stack.push({
    		      node: insertionNode,
    		      editsRemaining: frame.editsRemaining - 1,
    		      str: frame.str
    		    });

    		    // deletion
    		    // can only do a deletion if we have enough edits remaining
    		    // and if there are characters left to delete in the string
    		    if (frame.str.length > 1) {
    		      stack.push({
    		        node: frame.node,
    		        editsRemaining: frame.editsRemaining - 1,
    		        str: frame.str.slice(1)
    		      });
    		    }

    		    // deletion
    		    // just removing the last character from the str
    		    if (frame.str.length == 1) {
    		      frame.node.final = true;
    		    }

    		    // substitution
    		    // can only do a substitution if we have enough edits remaining
    		    // and if there are characters left to substitute
    		    if (frame.str.length >= 1) {
    		      if ("*" in frame.node.edges) {
    		        var substitutionNode = frame.node.edges["*"];
    		      } else {
    		        var substitutionNode = new lunr.TokenSet;
    		        frame.node.edges["*"] = substitutionNode;
    		      }

    		      if (frame.str.length == 1) {
    		        substitutionNode.final = true;
    		      }

    		      stack.push({
    		        node: substitutionNode,
    		        editsRemaining: frame.editsRemaining - 1,
    		        str: frame.str.slice(1)
    		      });
    		    }

    		    // transposition
    		    // can only do a transposition if there are edits remaining
    		    // and there are enough characters to transpose
    		    if (frame.str.length > 1) {
    		      var charA = frame.str.charAt(0),
    		          charB = frame.str.charAt(1),
    		          transposeNode;

    		      if (charB in frame.node.edges) {
    		        transposeNode = frame.node.edges[charB];
    		      } else {
    		        transposeNode = new lunr.TokenSet;
    		        frame.node.edges[charB] = transposeNode;
    		      }

    		      if (frame.str.length == 1) {
    		        transposeNode.final = true;
    		      }

    		      stack.push({
    		        node: transposeNode,
    		        editsRemaining: frame.editsRemaining - 1,
    		        str: charA + frame.str.slice(2)
    		      });
    		    }
    		  }

    		  return root
    		};

    		/**
    		 * Creates a TokenSet from a string.
    		 *
    		 * The string may contain one or more wildcard characters (*)
    		 * that will allow wildcard matching when intersecting with
    		 * another TokenSet.
    		 *
    		 * @param {string} str - The string to create a TokenSet from.
    		 * @returns {lunr.TokenSet}
    		 */
    		lunr.TokenSet.fromString = function (str) {
    		  var node = new lunr.TokenSet,
    		      root = node;

    		  /*
    		   * Iterates through all characters within the passed string
    		   * appending a node for each character.
    		   *
    		   * When a wildcard character is found then a self
    		   * referencing edge is introduced to continually match
    		   * any number of any characters.
    		   */
    		  for (var i = 0, len = str.length; i < len; i++) {
    		    var char = str[i],
    		        final = (i == len - 1);

    		    if (char == "*") {
    		      node.edges[char] = node;
    		      node.final = final;

    		    } else {
    		      var next = new lunr.TokenSet;
    		      next.final = final;

    		      node.edges[char] = next;
    		      node = next;
    		    }
    		  }

    		  return root
    		};

    		/**
    		 * Converts this TokenSet into an array of strings
    		 * contained within the TokenSet.
    		 *
    		 * This is not intended to be used on a TokenSet that
    		 * contains wildcards, in these cases the results are
    		 * undefined and are likely to cause an infinite loop.
    		 *
    		 * @returns {string[]}
    		 */
    		lunr.TokenSet.prototype.toArray = function () {
    		  var words = [];

    		  var stack = [{
    		    prefix: "",
    		    node: this
    		  }];

    		  while (stack.length) {
    		    var frame = stack.pop(),
    		        edges = Object.keys(frame.node.edges),
    		        len = edges.length;

    		    if (frame.node.final) {
    		      /* In Safari, at this point the prefix is sometimes corrupted, see:
    		       * https://github.com/olivernn/lunr.js/issues/279 Calling any
    		       * String.prototype method forces Safari to "cast" this string to what
    		       * it's supposed to be, fixing the bug. */
    		      frame.prefix.charAt(0);
    		      words.push(frame.prefix);
    		    }

    		    for (var i = 0; i < len; i++) {
    		      var edge = edges[i];

    		      stack.push({
    		        prefix: frame.prefix.concat(edge),
    		        node: frame.node.edges[edge]
    		      });
    		    }
    		  }

    		  return words
    		};

    		/**
    		 * Generates a string representation of a TokenSet.
    		 *
    		 * This is intended to allow TokenSets to be used as keys
    		 * in objects, largely to aid the construction and minimisation
    		 * of a TokenSet. As such it is not designed to be a human
    		 * friendly representation of the TokenSet.
    		 *
    		 * @returns {string}
    		 */
    		lunr.TokenSet.prototype.toString = function () {
    		  // NOTE: Using Object.keys here as this.edges is very likely
    		  // to enter 'hash-mode' with many keys being added
    		  //
    		  // avoiding a for-in loop here as it leads to the function
    		  // being de-optimised (at least in V8). From some simple
    		  // benchmarks the performance is comparable, but allowing
    		  // V8 to optimize may mean easy performance wins in the future.

    		  if (this._str) {
    		    return this._str
    		  }

    		  var str = this.final ? '1' : '0',
    		      labels = Object.keys(this.edges).sort(),
    		      len = labels.length;

    		  for (var i = 0; i < len; i++) {
    		    var label = labels[i],
    		        node = this.edges[label];

    		    str = str + label + node.id;
    		  }

    		  return str
    		};

    		/**
    		 * Returns a new TokenSet that is the intersection of
    		 * this TokenSet and the passed TokenSet.
    		 *
    		 * This intersection will take into account any wildcards
    		 * contained within the TokenSet.
    		 *
    		 * @param {lunr.TokenSet} b - An other TokenSet to intersect with.
    		 * @returns {lunr.TokenSet}
    		 */
    		lunr.TokenSet.prototype.intersect = function (b) {
    		  var output = new lunr.TokenSet,
    		      frame = undefined;

    		  var stack = [{
    		    qNode: b,
    		    output: output,
    		    node: this
    		  }];

    		  while (stack.length) {
    		    frame = stack.pop();

    		    // NOTE: As with the #toString method, we are using
    		    // Object.keys and a for loop instead of a for-in loop
    		    // as both of these objects enter 'hash' mode, causing
    		    // the function to be de-optimised in V8
    		    var qEdges = Object.keys(frame.qNode.edges),
    		        qLen = qEdges.length,
    		        nEdges = Object.keys(frame.node.edges),
    		        nLen = nEdges.length;

    		    for (var q = 0; q < qLen; q++) {
    		      var qEdge = qEdges[q];

    		      for (var n = 0; n < nLen; n++) {
    		        var nEdge = nEdges[n];

    		        if (nEdge == qEdge || qEdge == '*') {
    		          var node = frame.node.edges[nEdge],
    		              qNode = frame.qNode.edges[qEdge],
    		              final = node.final && qNode.final,
    		              next = undefined;

    		          if (nEdge in frame.output.edges) {
    		            // an edge already exists for this character
    		            // no need to create a new node, just set the finality
    		            // bit unless this node is already final
    		            next = frame.output.edges[nEdge];
    		            next.final = next.final || final;

    		          } else {
    		            // no edge exists yet, must create one
    		            // set the finality bit and insert it
    		            // into the output
    		            next = new lunr.TokenSet;
    		            next.final = final;
    		            frame.output.edges[nEdge] = next;
    		          }

    		          stack.push({
    		            qNode: qNode,
    		            output: next,
    		            node: node
    		          });
    		        }
    		      }
    		    }
    		  }

    		  return output
    		};
    		lunr.TokenSet.Builder = function () {
    		  this.previousWord = "";
    		  this.root = new lunr.TokenSet;
    		  this.uncheckedNodes = [];
    		  this.minimizedNodes = {};
    		};

    		lunr.TokenSet.Builder.prototype.insert = function (word) {
    		  var node,
    		      commonPrefix = 0;

    		  if (word < this.previousWord) {
    		    throw new Error ("Out of order word insertion")
    		  }

    		  for (var i = 0; i < word.length && i < this.previousWord.length; i++) {
    		    if (word[i] != this.previousWord[i]) break
    		    commonPrefix++;
    		  }

    		  this.minimize(commonPrefix);

    		  if (this.uncheckedNodes.length == 0) {
    		    node = this.root;
    		  } else {
    		    node = this.uncheckedNodes[this.uncheckedNodes.length - 1].child;
    		  }

    		  for (var i = commonPrefix; i < word.length; i++) {
    		    var nextNode = new lunr.TokenSet,
    		        char = word[i];

    		    node.edges[char] = nextNode;

    		    this.uncheckedNodes.push({
    		      parent: node,
    		      char: char,
    		      child: nextNode
    		    });

    		    node = nextNode;
    		  }

    		  node.final = true;
    		  this.previousWord = word;
    		};

    		lunr.TokenSet.Builder.prototype.finish = function () {
    		  this.minimize(0);
    		};

    		lunr.TokenSet.Builder.prototype.minimize = function (downTo) {
    		  for (var i = this.uncheckedNodes.length - 1; i >= downTo; i--) {
    		    var node = this.uncheckedNodes[i],
    		        childKey = node.child.toString();

    		    if (childKey in this.minimizedNodes) {
    		      node.parent.edges[node.char] = this.minimizedNodes[childKey];
    		    } else {
    		      // Cache the key for this node since
    		      // we know it can't change anymore
    		      node.child._str = childKey;

    		      this.minimizedNodes[childKey] = node.child;
    		    }

    		    this.uncheckedNodes.pop();
    		  }
    		};
    		/*!
    		 * lunr.Index
    		 * Copyright (C) 2020 Oliver Nightingale
    		 */

    		/**
    		 * An index contains the built index of all documents and provides a query interface
    		 * to the index.
    		 *
    		 * Usually instances of lunr.Index will not be created using this constructor, instead
    		 * lunr.Builder should be used to construct new indexes, or lunr.Index.load should be
    		 * used to load previously built and serialized indexes.
    		 *
    		 * @constructor
    		 * @param {Object} attrs - The attributes of the built search index.
    		 * @param {Object} attrs.invertedIndex - An index of term/field to document reference.
    		 * @param {Object<string, lunr.Vector>} attrs.fieldVectors - Field vectors
    		 * @param {lunr.TokenSet} attrs.tokenSet - An set of all corpus tokens.
    		 * @param {string[]} attrs.fields - The names of indexed document fields.
    		 * @param {lunr.Pipeline} attrs.pipeline - The pipeline to use for search terms.
    		 */
    		lunr.Index = function (attrs) {
    		  this.invertedIndex = attrs.invertedIndex;
    		  this.fieldVectors = attrs.fieldVectors;
    		  this.tokenSet = attrs.tokenSet;
    		  this.fields = attrs.fields;
    		  this.pipeline = attrs.pipeline;
    		};

    		/**
    		 * A result contains details of a document matching a search query.
    		 * @typedef {Object} lunr.Index~Result
    		 * @property {string} ref - The reference of the document this result represents.
    		 * @property {number} score - A number between 0 and 1 representing how similar this document is to the query.
    		 * @property {lunr.MatchData} matchData - Contains metadata about this match including which term(s) caused the match.
    		 */

    		/**
    		 * Although lunr provides the ability to create queries using lunr.Query, it also provides a simple
    		 * query language which itself is parsed into an instance of lunr.Query.
    		 *
    		 * For programmatically building queries it is advised to directly use lunr.Query, the query language
    		 * is best used for human entered text rather than program generated text.
    		 *
    		 * At its simplest queries can just be a single term, e.g. `hello`, multiple terms are also supported
    		 * and will be combined with OR, e.g `hello world` will match documents that contain either 'hello'
    		 * or 'world', though those that contain both will rank higher in the results.
    		 *
    		 * Wildcards can be included in terms to match one or more unspecified characters, these wildcards can
    		 * be inserted anywhere within the term, and more than one wildcard can exist in a single term. Adding
    		 * wildcards will increase the number of documents that will be found but can also have a negative
    		 * impact on query performance, especially with wildcards at the beginning of a term.
    		 *
    		 * Terms can be restricted to specific fields, e.g. `title:hello`, only documents with the term
    		 * hello in the title field will match this query. Using a field not present in the index will lead
    		 * to an error being thrown.
    		 *
    		 * Modifiers can also be added to terms, lunr supports edit distance and boost modifiers on terms. A term
    		 * boost will make documents matching that term score higher, e.g. `foo^5`. Edit distance is also supported
    		 * to provide fuzzy matching, e.g. 'hello~2' will match documents with hello with an edit distance of 2.
    		 * Avoid large values for edit distance to improve query performance.
    		 *
    		 * Each term also supports a presence modifier. By default a term's presence in document is optional, however
    		 * this can be changed to either required or prohibited. For a term's presence to be required in a document the
    		 * term should be prefixed with a '+', e.g. `+foo bar` is a search for documents that must contain 'foo' and
    		 * optionally contain 'bar'. Conversely a leading '-' sets the terms presence to prohibited, i.e. it must not
    		 * appear in a document, e.g. `-foo bar` is a search for documents that do not contain 'foo' but may contain 'bar'.
    		 *
    		 * To escape special characters the backslash character '\' can be used, this allows searches to include
    		 * characters that would normally be considered modifiers, e.g. `foo\~2` will search for a term "foo~2" instead
    		 * of attempting to apply a boost of 2 to the search term "foo".
    		 *
    		 * @typedef {string} lunr.Index~QueryString
    		 * @example <caption>Simple single term query</caption>
    		 * hello
    		 * @example <caption>Multiple term query</caption>
    		 * hello world
    		 * @example <caption>term scoped to a field</caption>
    		 * title:hello
    		 * @example <caption>term with a boost of 10</caption>
    		 * hello^10
    		 * @example <caption>term with an edit distance of 2</caption>
    		 * hello~2
    		 * @example <caption>terms with presence modifiers</caption>
    		 * -foo +bar baz
    		 */

    		/**
    		 * Performs a search against the index using lunr query syntax.
    		 *
    		 * Results will be returned sorted by their score, the most relevant results
    		 * will be returned first.  For details on how the score is calculated, please see
    		 * the {@link https://lunrjs.com/guides/searching.html#scoring|guide}.
    		 *
    		 * For more programmatic querying use lunr.Index#query.
    		 *
    		 * @param {lunr.Index~QueryString} queryString - A string containing a lunr query.
    		 * @throws {lunr.QueryParseError} If the passed query string cannot be parsed.
    		 * @returns {lunr.Index~Result[]}
    		 */
    		lunr.Index.prototype.search = function (queryString) {
    		  return this.query(function (query) {
    		    var parser = new lunr.QueryParser(queryString, query);
    		    parser.parse();
    		  })
    		};

    		/**
    		 * A query builder callback provides a query object to be used to express
    		 * the query to perform on the index.
    		 *
    		 * @callback lunr.Index~queryBuilder
    		 * @param {lunr.Query} query - The query object to build up.
    		 * @this lunr.Query
    		 */

    		/**
    		 * Performs a query against the index using the yielded lunr.Query object.
    		 *
    		 * If performing programmatic queries against the index, this method is preferred
    		 * over lunr.Index#search so as to avoid the additional query parsing overhead.
    		 *
    		 * A query object is yielded to the supplied function which should be used to
    		 * express the query to be run against the index.
    		 *
    		 * Note that although this function takes a callback parameter it is _not_ an
    		 * asynchronous operation, the callback is just yielded a query object to be
    		 * customized.
    		 *
    		 * @param {lunr.Index~queryBuilder} fn - A function that is used to build the query.
    		 * @returns {lunr.Index~Result[]}
    		 */
    		lunr.Index.prototype.query = function (fn) {
    		  // for each query clause
    		  // * process terms
    		  // * expand terms from token set
    		  // * find matching documents and metadata
    		  // * get document vectors
    		  // * score documents

    		  var query = new lunr.Query(this.fields),
    		      matchingFields = Object.create(null),
    		      queryVectors = Object.create(null),
    		      termFieldCache = Object.create(null),
    		      requiredMatches = Object.create(null),
    		      prohibitedMatches = Object.create(null);

    		  /*
    		   * To support field level boosts a query vector is created per
    		   * field. An empty vector is eagerly created to support negated
    		   * queries.
    		   */
    		  for (var i = 0; i < this.fields.length; i++) {
    		    queryVectors[this.fields[i]] = new lunr.Vector;
    		  }

    		  fn.call(query, query);

    		  for (var i = 0; i < query.clauses.length; i++) {
    		    /*
    		     * Unless the pipeline has been disabled for this term, which is
    		     * the case for terms with wildcards, we need to pass the clause
    		     * term through the search pipeline. A pipeline returns an array
    		     * of processed terms. Pipeline functions may expand the passed
    		     * term, which means we may end up performing multiple index lookups
    		     * for a single query term.
    		     */
    		    var clause = query.clauses[i],
    		        terms = null,
    		        clauseMatches = lunr.Set.empty;

    		    if (clause.usePipeline) {
    		      terms = this.pipeline.runString(clause.term, {
    		        fields: clause.fields
    		      });
    		    } else {
    		      terms = [clause.term];
    		    }

    		    for (var m = 0; m < terms.length; m++) {
    		      var term = terms[m];

    		      /*
    		       * Each term returned from the pipeline needs to use the same query
    		       * clause object, e.g. the same boost and or edit distance. The
    		       * simplest way to do this is to re-use the clause object but mutate
    		       * its term property.
    		       */
    		      clause.term = term;

    		      /*
    		       * From the term in the clause we create a token set which will then
    		       * be used to intersect the indexes token set to get a list of terms
    		       * to lookup in the inverted index
    		       */
    		      var termTokenSet = lunr.TokenSet.fromClause(clause),
    		          expandedTerms = this.tokenSet.intersect(termTokenSet).toArray();

    		      /*
    		       * If a term marked as required does not exist in the tokenSet it is
    		       * impossible for the search to return any matches. We set all the field
    		       * scoped required matches set to empty and stop examining any further
    		       * clauses.
    		       */
    		      if (expandedTerms.length === 0 && clause.presence === lunr.Query.presence.REQUIRED) {
    		        for (var k = 0; k < clause.fields.length; k++) {
    		          var field = clause.fields[k];
    		          requiredMatches[field] = lunr.Set.empty;
    		        }

    		        break
    		      }

    		      for (var j = 0; j < expandedTerms.length; j++) {
    		        /*
    		         * For each term get the posting and termIndex, this is required for
    		         * building the query vector.
    		         */
    		        var expandedTerm = expandedTerms[j],
    		            posting = this.invertedIndex[expandedTerm],
    		            termIndex = posting._index;

    		        for (var k = 0; k < clause.fields.length; k++) {
    		          /*
    		           * For each field that this query term is scoped by (by default
    		           * all fields are in scope) we need to get all the document refs
    		           * that have this term in that field.
    		           *
    		           * The posting is the entry in the invertedIndex for the matching
    		           * term from above.
    		           */
    		          var field = clause.fields[k],
    		              fieldPosting = posting[field],
    		              matchingDocumentRefs = Object.keys(fieldPosting),
    		              termField = expandedTerm + "/" + field,
    		              matchingDocumentsSet = new lunr.Set(matchingDocumentRefs);

    		          /*
    		           * if the presence of this term is required ensure that the matching
    		           * documents are added to the set of required matches for this clause.
    		           *
    		           */
    		          if (clause.presence == lunr.Query.presence.REQUIRED) {
    		            clauseMatches = clauseMatches.union(matchingDocumentsSet);

    		            if (requiredMatches[field] === undefined) {
    		              requiredMatches[field] = lunr.Set.complete;
    		            }
    		          }

    		          /*
    		           * if the presence of this term is prohibited ensure that the matching
    		           * documents are added to the set of prohibited matches for this field,
    		           * creating that set if it does not yet exist.
    		           */
    		          if (clause.presence == lunr.Query.presence.PROHIBITED) {
    		            if (prohibitedMatches[field] === undefined) {
    		              prohibitedMatches[field] = lunr.Set.empty;
    		            }

    		            prohibitedMatches[field] = prohibitedMatches[field].union(matchingDocumentsSet);

    		            /*
    		             * Prohibited matches should not be part of the query vector used for
    		             * similarity scoring and no metadata should be extracted so we continue
    		             * to the next field
    		             */
    		            continue
    		          }

    		          /*
    		           * The query field vector is populated using the termIndex found for
    		           * the term and a unit value with the appropriate boost applied.
    		           * Using upsert because there could already be an entry in the vector
    		           * for the term we are working with. In that case we just add the scores
    		           * together.
    		           */
    		          queryVectors[field].upsert(termIndex, clause.boost, function (a, b) { return a + b });

    		          /**
    		           * If we've already seen this term, field combo then we've already collected
    		           * the matching documents and metadata, no need to go through all that again
    		           */
    		          if (termFieldCache[termField]) {
    		            continue
    		          }

    		          for (var l = 0; l < matchingDocumentRefs.length; l++) {
    		            /*
    		             * All metadata for this term/field/document triple
    		             * are then extracted and collected into an instance
    		             * of lunr.MatchData ready to be returned in the query
    		             * results
    		             */
    		            var matchingDocumentRef = matchingDocumentRefs[l],
    		                matchingFieldRef = new lunr.FieldRef (matchingDocumentRef, field),
    		                metadata = fieldPosting[matchingDocumentRef],
    		                fieldMatch;

    		            if ((fieldMatch = matchingFields[matchingFieldRef]) === undefined) {
    		              matchingFields[matchingFieldRef] = new lunr.MatchData (expandedTerm, field, metadata);
    		            } else {
    		              fieldMatch.add(expandedTerm, field, metadata);
    		            }

    		          }

    		          termFieldCache[termField] = true;
    		        }
    		      }
    		    }

    		    /**
    		     * If the presence was required we need to update the requiredMatches field sets.
    		     * We do this after all fields for the term have collected their matches because
    		     * the clause terms presence is required in _any_ of the fields not _all_ of the
    		     * fields.
    		     */
    		    if (clause.presence === lunr.Query.presence.REQUIRED) {
    		      for (var k = 0; k < clause.fields.length; k++) {
    		        var field = clause.fields[k];
    		        requiredMatches[field] = requiredMatches[field].intersect(clauseMatches);
    		      }
    		    }
    		  }

    		  /**
    		   * Need to combine the field scoped required and prohibited
    		   * matching documents into a global set of required and prohibited
    		   * matches
    		   */
    		  var allRequiredMatches = lunr.Set.complete,
    		      allProhibitedMatches = lunr.Set.empty;

    		  for (var i = 0; i < this.fields.length; i++) {
    		    var field = this.fields[i];

    		    if (requiredMatches[field]) {
    		      allRequiredMatches = allRequiredMatches.intersect(requiredMatches[field]);
    		    }

    		    if (prohibitedMatches[field]) {
    		      allProhibitedMatches = allProhibitedMatches.union(prohibitedMatches[field]);
    		    }
    		  }

    		  var matchingFieldRefs = Object.keys(matchingFields),
    		      results = [],
    		      matches = Object.create(null);

    		  /*
    		   * If the query is negated (contains only prohibited terms)
    		   * we need to get _all_ fieldRefs currently existing in the
    		   * index. This is only done when we know that the query is
    		   * entirely prohibited terms to avoid any cost of getting all
    		   * fieldRefs unnecessarily.
    		   *
    		   * Additionally, blank MatchData must be created to correctly
    		   * populate the results.
    		   */
    		  if (query.isNegated()) {
    		    matchingFieldRefs = Object.keys(this.fieldVectors);

    		    for (var i = 0; i < matchingFieldRefs.length; i++) {
    		      var matchingFieldRef = matchingFieldRefs[i];
    		      var fieldRef = lunr.FieldRef.fromString(matchingFieldRef);
    		      matchingFields[matchingFieldRef] = new lunr.MatchData;
    		    }
    		  }

    		  for (var i = 0; i < matchingFieldRefs.length; i++) {
    		    /*
    		     * Currently we have document fields that match the query, but we
    		     * need to return documents. The matchData and scores are combined
    		     * from multiple fields belonging to the same document.
    		     *
    		     * Scores are calculated by field, using the query vectors created
    		     * above, and combined into a final document score using addition.
    		     */
    		    var fieldRef = lunr.FieldRef.fromString(matchingFieldRefs[i]),
    		        docRef = fieldRef.docRef;

    		    if (!allRequiredMatches.contains(docRef)) {
    		      continue
    		    }

    		    if (allProhibitedMatches.contains(docRef)) {
    		      continue
    		    }

    		    var fieldVector = this.fieldVectors[fieldRef],
    		        score = queryVectors[fieldRef.fieldName].similarity(fieldVector),
    		        docMatch;

    		    if ((docMatch = matches[docRef]) !== undefined) {
    		      docMatch.score += score;
    		      docMatch.matchData.combine(matchingFields[fieldRef]);
    		    } else {
    		      var match = {
    		        ref: docRef,
    		        score: score,
    		        matchData: matchingFields[fieldRef]
    		      };
    		      matches[docRef] = match;
    		      results.push(match);
    		    }
    		  }

    		  /*
    		   * Sort the results objects by score, highest first.
    		   */
    		  return results.sort(function (a, b) {
    		    return b.score - a.score
    		  })
    		};

    		/**
    		 * Prepares the index for JSON serialization.
    		 *
    		 * The schema for this JSON blob will be described in a
    		 * separate JSON schema file.
    		 *
    		 * @returns {Object}
    		 */
    		lunr.Index.prototype.toJSON = function () {
    		  var invertedIndex = Object.keys(this.invertedIndex)
    		    .sort()
    		    .map(function (term) {
    		      return [term, this.invertedIndex[term]]
    		    }, this);

    		  var fieldVectors = Object.keys(this.fieldVectors)
    		    .map(function (ref) {
    		      return [ref, this.fieldVectors[ref].toJSON()]
    		    }, this);

    		  return {
    		    version: lunr.version,
    		    fields: this.fields,
    		    fieldVectors: fieldVectors,
    		    invertedIndex: invertedIndex,
    		    pipeline: this.pipeline.toJSON()
    		  }
    		};

    		/**
    		 * Loads a previously serialized lunr.Index
    		 *
    		 * @param {Object} serializedIndex - A previously serialized lunr.Index
    		 * @returns {lunr.Index}
    		 */
    		lunr.Index.load = function (serializedIndex) {
    		  var attrs = {},
    		      fieldVectors = {},
    		      serializedVectors = serializedIndex.fieldVectors,
    		      invertedIndex = Object.create(null),
    		      serializedInvertedIndex = serializedIndex.invertedIndex,
    		      tokenSetBuilder = new lunr.TokenSet.Builder,
    		      pipeline = lunr.Pipeline.load(serializedIndex.pipeline);

    		  if (serializedIndex.version != lunr.version) {
    		    lunr.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + lunr.version + "' does not match serialized index '" + serializedIndex.version + "'");
    		  }

    		  for (var i = 0; i < serializedVectors.length; i++) {
    		    var tuple = serializedVectors[i],
    		        ref = tuple[0],
    		        elements = tuple[1];

    		    fieldVectors[ref] = new lunr.Vector(elements);
    		  }

    		  for (var i = 0; i < serializedInvertedIndex.length; i++) {
    		    var tuple = serializedInvertedIndex[i],
    		        term = tuple[0],
    		        posting = tuple[1];

    		    tokenSetBuilder.insert(term);
    		    invertedIndex[term] = posting;
    		  }

    		  tokenSetBuilder.finish();

    		  attrs.fields = serializedIndex.fields;

    		  attrs.fieldVectors = fieldVectors;
    		  attrs.invertedIndex = invertedIndex;
    		  attrs.tokenSet = tokenSetBuilder.root;
    		  attrs.pipeline = pipeline;

    		  return new lunr.Index(attrs)
    		};
    		/*!
    		 * lunr.Builder
    		 * Copyright (C) 2020 Oliver Nightingale
    		 */

    		/**
    		 * lunr.Builder performs indexing on a set of documents and
    		 * returns instances of lunr.Index ready for querying.
    		 *
    		 * All configuration of the index is done via the builder, the
    		 * fields to index, the document reference, the text processing
    		 * pipeline and document scoring parameters are all set on the
    		 * builder before indexing.
    		 *
    		 * @constructor
    		 * @property {string} _ref - Internal reference to the document reference field.
    		 * @property {string[]} _fields - Internal reference to the document fields to index.
    		 * @property {object} invertedIndex - The inverted index maps terms to document fields.
    		 * @property {object} documentTermFrequencies - Keeps track of document term frequencies.
    		 * @property {object} documentLengths - Keeps track of the length of documents added to the index.
    		 * @property {lunr.tokenizer} tokenizer - Function for splitting strings into tokens for indexing.
    		 * @property {lunr.Pipeline} pipeline - The pipeline performs text processing on tokens before indexing.
    		 * @property {lunr.Pipeline} searchPipeline - A pipeline for processing search terms before querying the index.
    		 * @property {number} documentCount - Keeps track of the total number of documents indexed.
    		 * @property {number} _b - A parameter to control field length normalization, setting this to 0 disabled normalization, 1 fully normalizes field lengths, the default value is 0.75.
    		 * @property {number} _k1 - A parameter to control how quickly an increase in term frequency results in term frequency saturation, the default value is 1.2.
    		 * @property {number} termIndex - A counter incremented for each unique term, used to identify a terms position in the vector space.
    		 * @property {array} metadataWhitelist - A list of metadata keys that have been whitelisted for entry in the index.
    		 */
    		lunr.Builder = function () {
    		  this._ref = "id";
    		  this._fields = Object.create(null);
    		  this._documents = Object.create(null);
    		  this.invertedIndex = Object.create(null);
    		  this.fieldTermFrequencies = {};
    		  this.fieldLengths = {};
    		  this.tokenizer = lunr.tokenizer;
    		  this.pipeline = new lunr.Pipeline;
    		  this.searchPipeline = new lunr.Pipeline;
    		  this.documentCount = 0;
    		  this._b = 0.75;
    		  this._k1 = 1.2;
    		  this.termIndex = 0;
    		  this.metadataWhitelist = [];
    		};

    		/**
    		 * Sets the document field used as the document reference. Every document must have this field.
    		 * The type of this field in the document should be a string, if it is not a string it will be
    		 * coerced into a string by calling toString.
    		 *
    		 * The default ref is 'id'.
    		 *
    		 * The ref should _not_ be changed during indexing, it should be set before any documents are
    		 * added to the index. Changing it during indexing can lead to inconsistent results.
    		 *
    		 * @param {string} ref - The name of the reference field in the document.
    		 */
    		lunr.Builder.prototype.ref = function (ref) {
    		  this._ref = ref;
    		};

    		/**
    		 * A function that is used to extract a field from a document.
    		 *
    		 * Lunr expects a field to be at the top level of a document, if however the field
    		 * is deeply nested within a document an extractor function can be used to extract
    		 * the right field for indexing.
    		 *
    		 * @callback fieldExtractor
    		 * @param {object} doc - The document being added to the index.
    		 * @returns {?(string|object|object[])} obj - The object that will be indexed for this field.
    		 * @example <caption>Extracting a nested field</caption>
    		 * function (doc) { return doc.nested.field }
    		 */

    		/**
    		 * Adds a field to the list of document fields that will be indexed. Every document being
    		 * indexed should have this field. Null values for this field in indexed documents will
    		 * not cause errors but will limit the chance of that document being retrieved by searches.
    		 *
    		 * All fields should be added before adding documents to the index. Adding fields after
    		 * a document has been indexed will have no effect on already indexed documents.
    		 *
    		 * Fields can be boosted at build time. This allows terms within that field to have more
    		 * importance when ranking search results. Use a field boost to specify that matches within
    		 * one field are more important than other fields.
    		 *
    		 * @param {string} fieldName - The name of a field to index in all documents.
    		 * @param {object} attributes - Optional attributes associated with this field.
    		 * @param {number} [attributes.boost=1] - Boost applied to all terms within this field.
    		 * @param {fieldExtractor} [attributes.extractor] - Function to extract a field from a document.
    		 * @throws {RangeError} fieldName cannot contain unsupported characters '/'
    		 */
    		lunr.Builder.prototype.field = function (fieldName, attributes) {
    		  if (/\//.test(fieldName)) {
    		    throw new RangeError ("Field '" + fieldName + "' contains illegal character '/'")
    		  }

    		  this._fields[fieldName] = attributes || {};
    		};

    		/**
    		 * A parameter to tune the amount of field length normalisation that is applied when
    		 * calculating relevance scores. A value of 0 will completely disable any normalisation
    		 * and a value of 1 will fully normalise field lengths. The default is 0.75. Values of b
    		 * will be clamped to the range 0 - 1.
    		 *
    		 * @param {number} number - The value to set for this tuning parameter.
    		 */
    		lunr.Builder.prototype.b = function (number) {
    		  if (number < 0) {
    		    this._b = 0;
    		  } else if (number > 1) {
    		    this._b = 1;
    		  } else {
    		    this._b = number;
    		  }
    		};

    		/**
    		 * A parameter that controls the speed at which a rise in term frequency results in term
    		 * frequency saturation. The default value is 1.2. Setting this to a higher value will give
    		 * slower saturation levels, a lower value will result in quicker saturation.
    		 *
    		 * @param {number} number - The value to set for this tuning parameter.
    		 */
    		lunr.Builder.prototype.k1 = function (number) {
    		  this._k1 = number;
    		};

    		/**
    		 * Adds a document to the index.
    		 *
    		 * Before adding fields to the index the index should have been fully setup, with the document
    		 * ref and all fields to index already having been specified.
    		 *
    		 * The document must have a field name as specified by the ref (by default this is 'id') and
    		 * it should have all fields defined for indexing, though null or undefined values will not
    		 * cause errors.
    		 *
    		 * Entire documents can be boosted at build time. Applying a boost to a document indicates that
    		 * this document should rank higher in search results than other documents.
    		 *
    		 * @param {object} doc - The document to add to the index.
    		 * @param {object} attributes - Optional attributes associated with this document.
    		 * @param {number} [attributes.boost=1] - Boost applied to all terms within this document.
    		 */
    		lunr.Builder.prototype.add = function (doc, attributes) {
    		  var docRef = doc[this._ref],
    		      fields = Object.keys(this._fields);

    		  this._documents[docRef] = attributes || {};
    		  this.documentCount += 1;

    		  for (var i = 0; i < fields.length; i++) {
    		    var fieldName = fields[i],
    		        extractor = this._fields[fieldName].extractor,
    		        field = extractor ? extractor(doc) : doc[fieldName],
    		        tokens = this.tokenizer(field, {
    		          fields: [fieldName]
    		        }),
    		        terms = this.pipeline.run(tokens),
    		        fieldRef = new lunr.FieldRef (docRef, fieldName),
    		        fieldTerms = Object.create(null);

    		    this.fieldTermFrequencies[fieldRef] = fieldTerms;
    		    this.fieldLengths[fieldRef] = 0;

    		    // store the length of this field for this document
    		    this.fieldLengths[fieldRef] += terms.length;

    		    // calculate term frequencies for this field
    		    for (var j = 0; j < terms.length; j++) {
    		      var term = terms[j];

    		      if (fieldTerms[term] == undefined) {
    		        fieldTerms[term] = 0;
    		      }

    		      fieldTerms[term] += 1;

    		      // add to inverted index
    		      // create an initial posting if one doesn't exist
    		      if (this.invertedIndex[term] == undefined) {
    		        var posting = Object.create(null);
    		        posting["_index"] = this.termIndex;
    		        this.termIndex += 1;

    		        for (var k = 0; k < fields.length; k++) {
    		          posting[fields[k]] = Object.create(null);
    		        }

    		        this.invertedIndex[term] = posting;
    		      }

    		      // add an entry for this term/fieldName/docRef to the invertedIndex
    		      if (this.invertedIndex[term][fieldName][docRef] == undefined) {
    		        this.invertedIndex[term][fieldName][docRef] = Object.create(null);
    		      }

    		      // store all whitelisted metadata about this token in the
    		      // inverted index
    		      for (var l = 0; l < this.metadataWhitelist.length; l++) {
    		        var metadataKey = this.metadataWhitelist[l],
    		            metadata = term.metadata[metadataKey];

    		        if (this.invertedIndex[term][fieldName][docRef][metadataKey] == undefined) {
    		          this.invertedIndex[term][fieldName][docRef][metadataKey] = [];
    		        }

    		        this.invertedIndex[term][fieldName][docRef][metadataKey].push(metadata);
    		      }
    		    }

    		  }
    		};

    		/**
    		 * Calculates the average document length for this index
    		 *
    		 * @private
    		 */
    		lunr.Builder.prototype.calculateAverageFieldLengths = function () {

    		  var fieldRefs = Object.keys(this.fieldLengths),
    		      numberOfFields = fieldRefs.length,
    		      accumulator = {},
    		      documentsWithField = {};

    		  for (var i = 0; i < numberOfFields; i++) {
    		    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
    		        field = fieldRef.fieldName;

    		    documentsWithField[field] || (documentsWithField[field] = 0);
    		    documentsWithField[field] += 1;

    		    accumulator[field] || (accumulator[field] = 0);
    		    accumulator[field] += this.fieldLengths[fieldRef];
    		  }

    		  var fields = Object.keys(this._fields);

    		  for (var i = 0; i < fields.length; i++) {
    		    var fieldName = fields[i];
    		    accumulator[fieldName] = accumulator[fieldName] / documentsWithField[fieldName];
    		  }

    		  this.averageFieldLength = accumulator;
    		};

    		/**
    		 * Builds a vector space model of every document using lunr.Vector
    		 *
    		 * @private
    		 */
    		lunr.Builder.prototype.createFieldVectors = function () {
    		  var fieldVectors = {},
    		      fieldRefs = Object.keys(this.fieldTermFrequencies),
    		      fieldRefsLength = fieldRefs.length,
    		      termIdfCache = Object.create(null);

    		  for (var i = 0; i < fieldRefsLength; i++) {
    		    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
    		        fieldName = fieldRef.fieldName,
    		        fieldLength = this.fieldLengths[fieldRef],
    		        fieldVector = new lunr.Vector,
    		        termFrequencies = this.fieldTermFrequencies[fieldRef],
    		        terms = Object.keys(termFrequencies),
    		        termsLength = terms.length;


    		    var fieldBoost = this._fields[fieldName].boost || 1,
    		        docBoost = this._documents[fieldRef.docRef].boost || 1;

    		    for (var j = 0; j < termsLength; j++) {
    		      var term = terms[j],
    		          tf = termFrequencies[term],
    		          termIndex = this.invertedIndex[term]._index,
    		          idf, score, scoreWithPrecision;

    		      if (termIdfCache[term] === undefined) {
    		        idf = lunr.idf(this.invertedIndex[term], this.documentCount);
    		        termIdfCache[term] = idf;
    		      } else {
    		        idf = termIdfCache[term];
    		      }

    		      score = idf * ((this._k1 + 1) * tf) / (this._k1 * (1 - this._b + this._b * (fieldLength / this.averageFieldLength[fieldName])) + tf);
    		      score *= fieldBoost;
    		      score *= docBoost;
    		      scoreWithPrecision = Math.round(score * 1000) / 1000;
    		      // Converts 1.23456789 to 1.234.
    		      // Reducing the precision so that the vectors take up less
    		      // space when serialised. Doing it now so that they behave
    		      // the same before and after serialisation. Also, this is
    		      // the fastest approach to reducing a number's precision in
    		      // JavaScript.

    		      fieldVector.insert(termIndex, scoreWithPrecision);
    		    }

    		    fieldVectors[fieldRef] = fieldVector;
    		  }

    		  this.fieldVectors = fieldVectors;
    		};

    		/**
    		 * Creates a token set of all tokens in the index using lunr.TokenSet
    		 *
    		 * @private
    		 */
    		lunr.Builder.prototype.createTokenSet = function () {
    		  this.tokenSet = lunr.TokenSet.fromArray(
    		    Object.keys(this.invertedIndex).sort()
    		  );
    		};

    		/**
    		 * Builds the index, creating an instance of lunr.Index.
    		 *
    		 * This completes the indexing process and should only be called
    		 * once all documents have been added to the index.
    		 *
    		 * @returns {lunr.Index}
    		 */
    		lunr.Builder.prototype.build = function () {
    		  this.calculateAverageFieldLengths();
    		  this.createFieldVectors();
    		  this.createTokenSet();

    		  return new lunr.Index({
    		    invertedIndex: this.invertedIndex,
    		    fieldVectors: this.fieldVectors,
    		    tokenSet: this.tokenSet,
    		    fields: Object.keys(this._fields),
    		    pipeline: this.searchPipeline
    		  })
    		};

    		/**
    		 * Applies a plugin to the index builder.
    		 *
    		 * A plugin is a function that is called with the index builder as its context.
    		 * Plugins can be used to customise or extend the behaviour of the index
    		 * in some way. A plugin is just a function, that encapsulated the custom
    		 * behaviour that should be applied when building the index.
    		 *
    		 * The plugin function will be called with the index builder as its argument, additional
    		 * arguments can also be passed when calling use. The function will be called
    		 * with the index builder as its context.
    		 *
    		 * @param {Function} plugin The plugin to apply.
    		 */
    		lunr.Builder.prototype.use = function (fn) {
    		  var args = Array.prototype.slice.call(arguments, 1);
    		  args.unshift(this);
    		  fn.apply(this, args);
    		};
    		/**
    		 * Contains and collects metadata about a matching document.
    		 * A single instance of lunr.MatchData is returned as part of every
    		 * lunr.Index~Result.
    		 *
    		 * @constructor
    		 * @param {string} term - The term this match data is associated with
    		 * @param {string} field - The field in which the term was found
    		 * @param {object} metadata - The metadata recorded about this term in this field
    		 * @property {object} metadata - A cloned collection of metadata associated with this document.
    		 * @see {@link lunr.Index~Result}
    		 */
    		lunr.MatchData = function (term, field, metadata) {
    		  var clonedMetadata = Object.create(null),
    		      metadataKeys = Object.keys(metadata || {});

    		  // Cloning the metadata to prevent the original
    		  // being mutated during match data combination.
    		  // Metadata is kept in an array within the inverted
    		  // index so cloning the data can be done with
    		  // Array#slice
    		  for (var i = 0; i < metadataKeys.length; i++) {
    		    var key = metadataKeys[i];
    		    clonedMetadata[key] = metadata[key].slice();
    		  }

    		  this.metadata = Object.create(null);

    		  if (term !== undefined) {
    		    this.metadata[term] = Object.create(null);
    		    this.metadata[term][field] = clonedMetadata;
    		  }
    		};

    		/**
    		 * An instance of lunr.MatchData will be created for every term that matches a
    		 * document. However only one instance is required in a lunr.Index~Result. This
    		 * method combines metadata from another instance of lunr.MatchData with this
    		 * objects metadata.
    		 *
    		 * @param {lunr.MatchData} otherMatchData - Another instance of match data to merge with this one.
    		 * @see {@link lunr.Index~Result}
    		 */
    		lunr.MatchData.prototype.combine = function (otherMatchData) {
    		  var terms = Object.keys(otherMatchData.metadata);

    		  for (var i = 0; i < terms.length; i++) {
    		    var term = terms[i],
    		        fields = Object.keys(otherMatchData.metadata[term]);

    		    if (this.metadata[term] == undefined) {
    		      this.metadata[term] = Object.create(null);
    		    }

    		    for (var j = 0; j < fields.length; j++) {
    		      var field = fields[j],
    		          keys = Object.keys(otherMatchData.metadata[term][field]);

    		      if (this.metadata[term][field] == undefined) {
    		        this.metadata[term][field] = Object.create(null);
    		      }

    		      for (var k = 0; k < keys.length; k++) {
    		        var key = keys[k];

    		        if (this.metadata[term][field][key] == undefined) {
    		          this.metadata[term][field][key] = otherMatchData.metadata[term][field][key];
    		        } else {
    		          this.metadata[term][field][key] = this.metadata[term][field][key].concat(otherMatchData.metadata[term][field][key]);
    		        }

    		      }
    		    }
    		  }
    		};

    		/**
    		 * Add metadata for a term/field pair to this instance of match data.
    		 *
    		 * @param {string} term - The term this match data is associated with
    		 * @param {string} field - The field in which the term was found
    		 * @param {object} metadata - The metadata recorded about this term in this field
    		 */
    		lunr.MatchData.prototype.add = function (term, field, metadata) {
    		  if (!(term in this.metadata)) {
    		    this.metadata[term] = Object.create(null);
    		    this.metadata[term][field] = metadata;
    		    return
    		  }

    		  if (!(field in this.metadata[term])) {
    		    this.metadata[term][field] = metadata;
    		    return
    		  }

    		  var metadataKeys = Object.keys(metadata);

    		  for (var i = 0; i < metadataKeys.length; i++) {
    		    var key = metadataKeys[i];

    		    if (key in this.metadata[term][field]) {
    		      this.metadata[term][field][key] = this.metadata[term][field][key].concat(metadata[key]);
    		    } else {
    		      this.metadata[term][field][key] = metadata[key];
    		    }
    		  }
    		};
    		/**
    		 * A lunr.Query provides a programmatic way of defining queries to be performed
    		 * against a {@link lunr.Index}.
    		 *
    		 * Prefer constructing a lunr.Query using the {@link lunr.Index#query} method
    		 * so the query object is pre-initialized with the right index fields.
    		 *
    		 * @constructor
    		 * @property {lunr.Query~Clause[]} clauses - An array of query clauses.
    		 * @property {string[]} allFields - An array of all available fields in a lunr.Index.
    		 */
    		lunr.Query = function (allFields) {
    		  this.clauses = [];
    		  this.allFields = allFields;
    		};

    		/**
    		 * Constants for indicating what kind of automatic wildcard insertion will be used when constructing a query clause.
    		 *
    		 * This allows wildcards to be added to the beginning and end of a term without having to manually do any string
    		 * concatenation.
    		 *
    		 * The wildcard constants can be bitwise combined to select both leading and trailing wildcards.
    		 *
    		 * @constant
    		 * @default
    		 * @property {number} wildcard.NONE - The term will have no wildcards inserted, this is the default behaviour
    		 * @property {number} wildcard.LEADING - Prepend the term with a wildcard, unless a leading wildcard already exists
    		 * @property {number} wildcard.TRAILING - Append a wildcard to the term, unless a trailing wildcard already exists
    		 * @see lunr.Query~Clause
    		 * @see lunr.Query#clause
    		 * @see lunr.Query#term
    		 * @example <caption>query term with trailing wildcard</caption>
    		 * query.term('foo', { wildcard: lunr.Query.wildcard.TRAILING })
    		 * @example <caption>query term with leading and trailing wildcard</caption>
    		 * query.term('foo', {
    		 *   wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING
    		 * })
    		 */

    		lunr.Query.wildcard = new String ("*");
    		lunr.Query.wildcard.NONE = 0;
    		lunr.Query.wildcard.LEADING = 1;
    		lunr.Query.wildcard.TRAILING = 2;

    		/**
    		 * Constants for indicating what kind of presence a term must have in matching documents.
    		 *
    		 * @constant
    		 * @enum {number}
    		 * @see lunr.Query~Clause
    		 * @see lunr.Query#clause
    		 * @see lunr.Query#term
    		 * @example <caption>query term with required presence</caption>
    		 * query.term('foo', { presence: lunr.Query.presence.REQUIRED })
    		 */
    		lunr.Query.presence = {
    		  /**
    		   * Term's presence in a document is optional, this is the default value.
    		   */
    		  OPTIONAL: 1,

    		  /**
    		   * Term's presence in a document is required, documents that do not contain
    		   * this term will not be returned.
    		   */
    		  REQUIRED: 2,

    		  /**
    		   * Term's presence in a document is prohibited, documents that do contain
    		   * this term will not be returned.
    		   */
    		  PROHIBITED: 3
    		};

    		/**
    		 * A single clause in a {@link lunr.Query} contains a term and details on how to
    		 * match that term against a {@link lunr.Index}.
    		 *
    		 * @typedef {Object} lunr.Query~Clause
    		 * @property {string[]} fields - The fields in an index this clause should be matched against.
    		 * @property {number} [boost=1] - Any boost that should be applied when matching this clause.
    		 * @property {number} [editDistance] - Whether the term should have fuzzy matching applied, and how fuzzy the match should be.
    		 * @property {boolean} [usePipeline] - Whether the term should be passed through the search pipeline.
    		 * @property {number} [wildcard=lunr.Query.wildcard.NONE] - Whether the term should have wildcards appended or prepended.
    		 * @property {number} [presence=lunr.Query.presence.OPTIONAL] - The terms presence in any matching documents.
    		 */

    		/**
    		 * Adds a {@link lunr.Query~Clause} to this query.
    		 *
    		 * Unless the clause contains the fields to be matched all fields will be matched. In addition
    		 * a default boost of 1 is applied to the clause.
    		 *
    		 * @param {lunr.Query~Clause} clause - The clause to add to this query.
    		 * @see lunr.Query~Clause
    		 * @returns {lunr.Query}
    		 */
    		lunr.Query.prototype.clause = function (clause) {
    		  if (!('fields' in clause)) {
    		    clause.fields = this.allFields;
    		  }

    		  if (!('boost' in clause)) {
    		    clause.boost = 1;
    		  }

    		  if (!('usePipeline' in clause)) {
    		    clause.usePipeline = true;
    		  }

    		  if (!('wildcard' in clause)) {
    		    clause.wildcard = lunr.Query.wildcard.NONE;
    		  }

    		  if ((clause.wildcard & lunr.Query.wildcard.LEADING) && (clause.term.charAt(0) != lunr.Query.wildcard)) {
    		    clause.term = "*" + clause.term;
    		  }

    		  if ((clause.wildcard & lunr.Query.wildcard.TRAILING) && (clause.term.slice(-1) != lunr.Query.wildcard)) {
    		    clause.term = "" + clause.term + "*";
    		  }

    		  if (!('presence' in clause)) {
    		    clause.presence = lunr.Query.presence.OPTIONAL;
    		  }

    		  this.clauses.push(clause);

    		  return this
    		};

    		/**
    		 * A negated query is one in which every clause has a presence of
    		 * prohibited. These queries require some special processing to return
    		 * the expected results.
    		 *
    		 * @returns boolean
    		 */
    		lunr.Query.prototype.isNegated = function () {
    		  for (var i = 0; i < this.clauses.length; i++) {
    		    if (this.clauses[i].presence != lunr.Query.presence.PROHIBITED) {
    		      return false
    		    }
    		  }

    		  return true
    		};

    		/**
    		 * Adds a term to the current query, under the covers this will create a {@link lunr.Query~Clause}
    		 * to the list of clauses that make up this query.
    		 *
    		 * The term is used as is, i.e. no tokenization will be performed by this method. Instead conversion
    		 * to a token or token-like string should be done before calling this method.
    		 *
    		 * The term will be converted to a string by calling `toString`. Multiple terms can be passed as an
    		 * array, each term in the array will share the same options.
    		 *
    		 * @param {object|object[]} term - The term(s) to add to the query.
    		 * @param {object} [options] - Any additional properties to add to the query clause.
    		 * @returns {lunr.Query}
    		 * @see lunr.Query#clause
    		 * @see lunr.Query~Clause
    		 * @example <caption>adding a single term to a query</caption>
    		 * query.term("foo")
    		 * @example <caption>adding a single term to a query and specifying search fields, term boost and automatic trailing wildcard</caption>
    		 * query.term("foo", {
    		 *   fields: ["title"],
    		 *   boost: 10,
    		 *   wildcard: lunr.Query.wildcard.TRAILING
    		 * })
    		 * @example <caption>using lunr.tokenizer to convert a string to tokens before using them as terms</caption>
    		 * query.term(lunr.tokenizer("foo bar"))
    		 */
    		lunr.Query.prototype.term = function (term, options) {
    		  if (Array.isArray(term)) {
    		    term.forEach(function (t) { this.term(t, lunr.utils.clone(options)); }, this);
    		    return this
    		  }

    		  var clause = options || {};
    		  clause.term = term.toString();

    		  this.clause(clause);

    		  return this
    		};
    		lunr.QueryParseError = function (message, start, end) {
    		  this.name = "QueryParseError";
    		  this.message = message;
    		  this.start = start;
    		  this.end = end;
    		};

    		lunr.QueryParseError.prototype = new Error;
    		lunr.QueryLexer = function (str) {
    		  this.lexemes = [];
    		  this.str = str;
    		  this.length = str.length;
    		  this.pos = 0;
    		  this.start = 0;
    		  this.escapeCharPositions = [];
    		};

    		lunr.QueryLexer.prototype.run = function () {
    		  var state = lunr.QueryLexer.lexText;

    		  while (state) {
    		    state = state(this);
    		  }
    		};

    		lunr.QueryLexer.prototype.sliceString = function () {
    		  var subSlices = [],
    		      sliceStart = this.start,
    		      sliceEnd = this.pos;

    		  for (var i = 0; i < this.escapeCharPositions.length; i++) {
    		    sliceEnd = this.escapeCharPositions[i];
    		    subSlices.push(this.str.slice(sliceStart, sliceEnd));
    		    sliceStart = sliceEnd + 1;
    		  }

    		  subSlices.push(this.str.slice(sliceStart, this.pos));
    		  this.escapeCharPositions.length = 0;

    		  return subSlices.join('')
    		};

    		lunr.QueryLexer.prototype.emit = function (type) {
    		  this.lexemes.push({
    		    type: type,
    		    str: this.sliceString(),
    		    start: this.start,
    		    end: this.pos
    		  });

    		  this.start = this.pos;
    		};

    		lunr.QueryLexer.prototype.escapeCharacter = function () {
    		  this.escapeCharPositions.push(this.pos - 1);
    		  this.pos += 1;
    		};

    		lunr.QueryLexer.prototype.next = function () {
    		  if (this.pos >= this.length) {
    		    return lunr.QueryLexer.EOS
    		  }

    		  var char = this.str.charAt(this.pos);
    		  this.pos += 1;
    		  return char
    		};

    		lunr.QueryLexer.prototype.width = function () {
    		  return this.pos - this.start
    		};

    		lunr.QueryLexer.prototype.ignore = function () {
    		  if (this.start == this.pos) {
    		    this.pos += 1;
    		  }

    		  this.start = this.pos;
    		};

    		lunr.QueryLexer.prototype.backup = function () {
    		  this.pos -= 1;
    		};

    		lunr.QueryLexer.prototype.acceptDigitRun = function () {
    		  var char, charCode;

    		  do {
    		    char = this.next();
    		    charCode = char.charCodeAt(0);
    		  } while (charCode > 47 && charCode < 58)

    		  if (char != lunr.QueryLexer.EOS) {
    		    this.backup();
    		  }
    		};

    		lunr.QueryLexer.prototype.more = function () {
    		  return this.pos < this.length
    		};

    		lunr.QueryLexer.EOS = 'EOS';
    		lunr.QueryLexer.FIELD = 'FIELD';
    		lunr.QueryLexer.TERM = 'TERM';
    		lunr.QueryLexer.EDIT_DISTANCE = 'EDIT_DISTANCE';
    		lunr.QueryLexer.BOOST = 'BOOST';
    		lunr.QueryLexer.PRESENCE = 'PRESENCE';

    		lunr.QueryLexer.lexField = function (lexer) {
    		  lexer.backup();
    		  lexer.emit(lunr.QueryLexer.FIELD);
    		  lexer.ignore();
    		  return lunr.QueryLexer.lexText
    		};

    		lunr.QueryLexer.lexTerm = function (lexer) {
    		  if (lexer.width() > 1) {
    		    lexer.backup();
    		    lexer.emit(lunr.QueryLexer.TERM);
    		  }

    		  lexer.ignore();

    		  if (lexer.more()) {
    		    return lunr.QueryLexer.lexText
    		  }
    		};

    		lunr.QueryLexer.lexEditDistance = function (lexer) {
    		  lexer.ignore();
    		  lexer.acceptDigitRun();
    		  lexer.emit(lunr.QueryLexer.EDIT_DISTANCE);
    		  return lunr.QueryLexer.lexText
    		};

    		lunr.QueryLexer.lexBoost = function (lexer) {
    		  lexer.ignore();
    		  lexer.acceptDigitRun();
    		  lexer.emit(lunr.QueryLexer.BOOST);
    		  return lunr.QueryLexer.lexText
    		};

    		lunr.QueryLexer.lexEOS = function (lexer) {
    		  if (lexer.width() > 0) {
    		    lexer.emit(lunr.QueryLexer.TERM);
    		  }
    		};

    		// This matches the separator used when tokenising fields
    		// within a document. These should match otherwise it is
    		// not possible to search for some tokens within a document.
    		//
    		// It is possible for the user to change the separator on the
    		// tokenizer so it _might_ clash with any other of the special
    		// characters already used within the search string, e.g. :.
    		//
    		// This means that it is possible to change the separator in
    		// such a way that makes some words unsearchable using a search
    		// string.
    		lunr.QueryLexer.termSeparator = lunr.tokenizer.separator;

    		lunr.QueryLexer.lexText = function (lexer) {
    		  while (true) {
    		    var char = lexer.next();

    		    if (char == lunr.QueryLexer.EOS) {
    		      return lunr.QueryLexer.lexEOS
    		    }

    		    // Escape character is '\'
    		    if (char.charCodeAt(0) == 92) {
    		      lexer.escapeCharacter();
    		      continue
    		    }

    		    if (char == ":") {
    		      return lunr.QueryLexer.lexField
    		    }

    		    if (char == "~") {
    		      lexer.backup();
    		      if (lexer.width() > 0) {
    		        lexer.emit(lunr.QueryLexer.TERM);
    		      }
    		      return lunr.QueryLexer.lexEditDistance
    		    }

    		    if (char == "^") {
    		      lexer.backup();
    		      if (lexer.width() > 0) {
    		        lexer.emit(lunr.QueryLexer.TERM);
    		      }
    		      return lunr.QueryLexer.lexBoost
    		    }

    		    // "+" indicates term presence is required
    		    // checking for length to ensure that only
    		    // leading "+" are considered
    		    if (char == "+" && lexer.width() === 1) {
    		      lexer.emit(lunr.QueryLexer.PRESENCE);
    		      return lunr.QueryLexer.lexText
    		    }

    		    // "-" indicates term presence is prohibited
    		    // checking for length to ensure that only
    		    // leading "-" are considered
    		    if (char == "-" && lexer.width() === 1) {
    		      lexer.emit(lunr.QueryLexer.PRESENCE);
    		      return lunr.QueryLexer.lexText
    		    }

    		    if (char.match(lunr.QueryLexer.termSeparator)) {
    		      return lunr.QueryLexer.lexTerm
    		    }
    		  }
    		};

    		lunr.QueryParser = function (str, query) {
    		  this.lexer = new lunr.QueryLexer (str);
    		  this.query = query;
    		  this.currentClause = {};
    		  this.lexemeIdx = 0;
    		};

    		lunr.QueryParser.prototype.parse = function () {
    		  this.lexer.run();
    		  this.lexemes = this.lexer.lexemes;

    		  var state = lunr.QueryParser.parseClause;

    		  while (state) {
    		    state = state(this);
    		  }

    		  return this.query
    		};

    		lunr.QueryParser.prototype.peekLexeme = function () {
    		  return this.lexemes[this.lexemeIdx]
    		};

    		lunr.QueryParser.prototype.consumeLexeme = function () {
    		  var lexeme = this.peekLexeme();
    		  this.lexemeIdx += 1;
    		  return lexeme
    		};

    		lunr.QueryParser.prototype.nextClause = function () {
    		  var completedClause = this.currentClause;
    		  this.query.clause(completedClause);
    		  this.currentClause = {};
    		};

    		lunr.QueryParser.parseClause = function (parser) {
    		  var lexeme = parser.peekLexeme();

    		  if (lexeme == undefined) {
    		    return
    		  }

    		  switch (lexeme.type) {
    		    case lunr.QueryLexer.PRESENCE:
    		      return lunr.QueryParser.parsePresence
    		    case lunr.QueryLexer.FIELD:
    		      return lunr.QueryParser.parseField
    		    case lunr.QueryLexer.TERM:
    		      return lunr.QueryParser.parseTerm
    		    default:
    		      var errorMessage = "expected either a field or a term, found " + lexeme.type;

    		      if (lexeme.str.length >= 1) {
    		        errorMessage += " with value '" + lexeme.str + "'";
    		      }

    		      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
    		  }
    		};

    		lunr.QueryParser.parsePresence = function (parser) {
    		  var lexeme = parser.consumeLexeme();

    		  if (lexeme == undefined) {
    		    return
    		  }

    		  switch (lexeme.str) {
    		    case "-":
    		      parser.currentClause.presence = lunr.Query.presence.PROHIBITED;
    		      break
    		    case "+":
    		      parser.currentClause.presence = lunr.Query.presence.REQUIRED;
    		      break
    		    default:
    		      var errorMessage = "unrecognised presence operator'" + lexeme.str + "'";
    		      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
    		  }

    		  var nextLexeme = parser.peekLexeme();

    		  if (nextLexeme == undefined) {
    		    var errorMessage = "expecting term or field, found nothing";
    		    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
    		  }

    		  switch (nextLexeme.type) {
    		    case lunr.QueryLexer.FIELD:
    		      return lunr.QueryParser.parseField
    		    case lunr.QueryLexer.TERM:
    		      return lunr.QueryParser.parseTerm
    		    default:
    		      var errorMessage = "expecting term or field, found '" + nextLexeme.type + "'";
    		      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
    		  }
    		};

    		lunr.QueryParser.parseField = function (parser) {
    		  var lexeme = parser.consumeLexeme();

    		  if (lexeme == undefined) {
    		    return
    		  }

    		  if (parser.query.allFields.indexOf(lexeme.str) == -1) {
    		    var possibleFields = parser.query.allFields.map(function (f) { return "'" + f + "'" }).join(', '),
    		        errorMessage = "unrecognised field '" + lexeme.str + "', possible fields: " + possibleFields;

    		    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
    		  }

    		  parser.currentClause.fields = [lexeme.str];

    		  var nextLexeme = parser.peekLexeme();

    		  if (nextLexeme == undefined) {
    		    var errorMessage = "expecting term, found nothing";
    		    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
    		  }

    		  switch (nextLexeme.type) {
    		    case lunr.QueryLexer.TERM:
    		      return lunr.QueryParser.parseTerm
    		    default:
    		      var errorMessage = "expecting term, found '" + nextLexeme.type + "'";
    		      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
    		  }
    		};

    		lunr.QueryParser.parseTerm = function (parser) {
    		  var lexeme = parser.consumeLexeme();

    		  if (lexeme == undefined) {
    		    return
    		  }

    		  parser.currentClause.term = lexeme.str.toLowerCase();

    		  if (lexeme.str.indexOf("*") != -1) {
    		    parser.currentClause.usePipeline = false;
    		  }

    		  var nextLexeme = parser.peekLexeme();

    		  if (nextLexeme == undefined) {
    		    parser.nextClause();
    		    return
    		  }

    		  switch (nextLexeme.type) {
    		    case lunr.QueryLexer.TERM:
    		      parser.nextClause();
    		      return lunr.QueryParser.parseTerm
    		    case lunr.QueryLexer.FIELD:
    		      parser.nextClause();
    		      return lunr.QueryParser.parseField
    		    case lunr.QueryLexer.EDIT_DISTANCE:
    		      return lunr.QueryParser.parseEditDistance
    		    case lunr.QueryLexer.BOOST:
    		      return lunr.QueryParser.parseBoost
    		    case lunr.QueryLexer.PRESENCE:
    		      parser.nextClause();
    		      return lunr.QueryParser.parsePresence
    		    default:
    		      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'";
    		      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
    		  }
    		};

    		lunr.QueryParser.parseEditDistance = function (parser) {
    		  var lexeme = parser.consumeLexeme();

    		  if (lexeme == undefined) {
    		    return
    		  }

    		  var editDistance = parseInt(lexeme.str, 10);

    		  if (isNaN(editDistance)) {
    		    var errorMessage = "edit distance must be numeric";
    		    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
    		  }

    		  parser.currentClause.editDistance = editDistance;

    		  var nextLexeme = parser.peekLexeme();

    		  if (nextLexeme == undefined) {
    		    parser.nextClause();
    		    return
    		  }

    		  switch (nextLexeme.type) {
    		    case lunr.QueryLexer.TERM:
    		      parser.nextClause();
    		      return lunr.QueryParser.parseTerm
    		    case lunr.QueryLexer.FIELD:
    		      parser.nextClause();
    		      return lunr.QueryParser.parseField
    		    case lunr.QueryLexer.EDIT_DISTANCE:
    		      return lunr.QueryParser.parseEditDistance
    		    case lunr.QueryLexer.BOOST:
    		      return lunr.QueryParser.parseBoost
    		    case lunr.QueryLexer.PRESENCE:
    		      parser.nextClause();
    		      return lunr.QueryParser.parsePresence
    		    default:
    		      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'";
    		      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
    		  }
    		};

    		lunr.QueryParser.parseBoost = function (parser) {
    		  var lexeme = parser.consumeLexeme();

    		  if (lexeme == undefined) {
    		    return
    		  }

    		  var boost = parseInt(lexeme.str, 10);

    		  if (isNaN(boost)) {
    		    var errorMessage = "boost must be numeric";
    		    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
    		  }

    		  parser.currentClause.boost = boost;

    		  var nextLexeme = parser.peekLexeme();

    		  if (nextLexeme == undefined) {
    		    parser.nextClause();
    		    return
    		  }

    		  switch (nextLexeme.type) {
    		    case lunr.QueryLexer.TERM:
    		      parser.nextClause();
    		      return lunr.QueryParser.parseTerm
    		    case lunr.QueryLexer.FIELD:
    		      parser.nextClause();
    		      return lunr.QueryParser.parseField
    		    case lunr.QueryLexer.EDIT_DISTANCE:
    		      return lunr.QueryParser.parseEditDistance
    		    case lunr.QueryLexer.BOOST:
    		      return lunr.QueryParser.parseBoost
    		    case lunr.QueryLexer.PRESENCE:
    		      parser.nextClause();
    		      return lunr.QueryParser.parsePresence
    		    default:
    		      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'";
    		      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
    		  }
    		}

    		  /**
    		   * export the module via AMD, CommonJS or as a browser global
    		   * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
    		   */
    		  ;(function (root, factory) {
    		    {
    		      /**
    		       * Node. Does not work with strict CommonJS, but
    		       * only CommonJS-like enviroments that support module.exports,
    		       * like Node.
    		       */
    		      module.exports = factory();
    		    }
    		  }(this, function () {
    		    /**
    		     * Just return a value to define the module export.
    		     * This example returns an object, but the module
    		     * can return a function as the exported value.
    		     */
    		    return lunr
    		  }));
    		})(); 
    	} (lunr));
    	return lunr.exports;
    }

    var lunrExports = requireLunr();

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

    var __esDecorate$2 = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
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
    var __runInitializers$2 = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
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

    var __esDecorate$1 = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
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
    var __runInitializers$1 = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
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

    var __esDecorate = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
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
    var __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
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

    async function loadDeflateData(base64) {
        const binary = atob(base64);
        const blob = new Blob([Uint8Array.from(binary, (c) => c.charCodeAt(0))]);
        const stream = blob.stream().pipeThrough(new DecompressionStream('deflate'));
        return await new Response(stream).json();
    }
    async function loadData() {
        let [search, hierarchy] = await Promise.all([
            await loadDeflateData(globalThis.searchData),
            await loadDeflateData(globalThis.hierarchyData),
        ]);
        return { search, hierarchy };
    }
    function getReflectionKindName(kind) {
        return globalThis.translations[`kind_${kind}`];
    }

    document.addEventListener('DOMContentLoaded', async () => {
        const form = document.querySelector('rustdoc-search .search-form');
        const input = document.querySelector('rustdoc-search .search-input');
        const results = document.querySelector('oxide-search-results#search');
        const main = document.getElementById('main-content');
        const alt = document.getElementById('alternative-display');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            event.stopPropagation();
        });
        const data = await loadData();
        const index = lunrExports.Index.load(data.search.index);
        console.log(data);
        input.addEventListener('input', throttle((event) => {
            var _a;
            const text = (_a = event.target.value) === null || _a === void 0 ? void 0 : _a.trim();
            const [hide, show] = text ? [main, alt] : [alt, main];
            hide.classList.add('hidden');
            show.classList.remove('hidden');
            results.items = text ? performSearch(text, data, index) : [];
        }, 500));
    });
    function performSearch(text, data, index) {
        // Perform a wildcard search
        const query = text
            .split(/\s+/)
            .filter((x) => x)
            .map((x) => `*${x}*`)
            .join(' ')
            .trim();
        const items = index.search(query);
        if (items.length === 0) {
            return [];
        }
        for (const item of items) {
            const row = data.search.rows[Number(item.ref)];
            // boost score by exact match on name
            if (row.name.toLowerCase().startsWith(text.toLowerCase())) {
                item.score *= 10 / (1 + Math.abs(row.name.length - text.length));
            }
        }
        items.sort((a, b) => b.score - a.score);
        return items.map((x) => data.search.rows[Number(x.ref)]);
    }
    (() => {
        var _OxideSearchResults_items_accessor_storage;
        let _classDecorators = [t('oxide-search-results')];
        let _classDescriptor;
        let _classExtraInitializers = [];
        let _classThis;
        let _classSuper = i;
        let _items_decorators;
        let _items_initializers = [];
        let _items_extraInitializers = [];
        _classThis = class extends _classSuper {
            get items() { return __classPrivateFieldGet(this, _OxideSearchResults_items_accessor_storage, "f"); }
            set items(value) { __classPrivateFieldSet(this, _OxideSearchResults_items_accessor_storage, value, "f"); }
            createRenderRoot() {
                // Disable Shadow DOM.
                return this;
            }
            render() {
                const items = this.items.map((item) => {
                    var _a, _b, _c;
                    const trace = o((_b = (_a = item.parent) === null || _a === void 0 ? void 0 : _a.split('.')) !== null && _b !== void 0 ? _b : [], (name) => x `<span class="parent">${name}.</span>`);
                    const classes = {
                        [ReflectionKind.ClassMember]: 'fn',
                        [ReflectionKind.Variable]: 'fn',
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
                    };
                    return x `
        <a class="result-item" href="${item.url}">
          <span class="result-name">
            <span class="typename">
              ${getReflectionKindName(item.kind)}
            </span>
          </span>
          <span class="result-name">
            <div class="path">
              ${trace}<span class="${(_c = classes[item.kind]) !== null && _c !== void 0 ? _c : 'mod'}">${item.name}</span>
            </div>
          </span>
        </a>
      `;
                });
                return x `
      <div class="main-heading">
        <h1 class="search-results-title">Results</h1>
        <rustdoc-toolbar></rustdoc-toolbar>
      </div>

      <div id="results">
        <div class="search-results ${this.items.length ? 'active' : ''}">
          ${items}
        </div>

        <div class="search-failed ${this.items.length ? '' : 'active'}">
          No results :(
          <!--
          <br />
          Try on <a href="https://duckduckgo.com/?q=rust%20result%3A%3Aok">DuckDuckGo</a>?
          <br />
          <br />
          Or try looking in one of these:
          <ul>
            <li>The <a href="https://doc.rust-lang.org/1.86.0/reference/index.html">Rust Reference</a> for technical
              details about the language.</li>
          </ul>
          -->
        </div>
      </div>
    `;
            }
            constructor() {
                super(...arguments);
                _OxideSearchResults_items_accessor_storage.set(this, __runInitializers$3(this, _items_initializers, []));
                __runInitializers$3(this, _items_extraInitializers);
            }
        };
        _OxideSearchResults_items_accessor_storage = new WeakMap();
        __setFunctionName(_classThis, "OxideSearchResults");
        (() => {
            var _a;
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
            _items_decorators = [n({ attribute: false })];
            __esDecorate$3(_classThis, null, _items_decorators, { kind: "accessor", name: "items", static: false, private: false, access: { has: obj => "items" in obj, get: obj => obj.items, set: (obj, value) => { obj.items = value; } }, metadata: _metadata }, _items_initializers, _items_extraInitializers);
            __esDecorate$3(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers$3(_classThis, _classExtraInitializers);
        })();
        return _classThis;
    })();

})();
//# sourceMappingURL=index.js.map
