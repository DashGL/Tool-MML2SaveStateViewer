(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const C0={vram:null},Db=n=>{C0.vram=n},Ib=(n,e)=>{const{vram:t}=C0;if(!t)return;const i=new DataView(t),r=document.createElement("canvas");r.width=256,r.height=256;const s=r.getContext("2d"),o=(n&15)<<6,a=n&16?256:0,c=(e&63)<<4;let u=(e>>6)*1024*2;u+=c*2;const h=new Array(16);for(let f=0;f<16;f++){const d=i.getUint16(u,!0),g=(d>>0&31)<<3,p=(d>>5&31)<<3,m=(d>>10&31)<<3,x=d>0?1:0;h[f]=`rgba(${g}, ${p}, ${m}, ${x})`,u+=2}for(let f=0;f<256;f++){u=(a+f)*1024*2,u+=o*2;for(let d=0;d<256;d+=2){let g=i.getUint8(u);u++;const p=h[g&15];s.fillStyle=p,s.fillRect(d,f,1,1);const m=h[g>>4];s.fillStyle=m,s.fillRect(d+1,f,1,1)}}return r};/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const Fb=4,Jp=0,Kp=1,Nb=2;function Bo(n){let e=n.length;for(;--e>=0;)n[e]=0}const zb=0,R0=1,Ob=2,Bb=3,Ub=258,Nd=29,bl=256,Fa=bl+1+Nd,yo=30,zd=19,P0=2*Fa+1,ts=15,hh=16,kb=7,Od=256,D0=16,I0=17,F0=18,Wf=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),iu=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),Gb=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),N0=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Hb=512,qi=new Array((Fa+2)*2);Bo(qi);const Aa=new Array(yo*2);Bo(Aa);const Na=new Array(Hb);Bo(Na);const za=new Array(Ub-Bb+1);Bo(za);const Bd=new Array(Nd);Bo(Bd);const uu=new Array(yo);Bo(uu);function fh(n,e,t,i,r){this.static_tree=n,this.extra_bits=e,this.extra_base=t,this.elems=i,this.max_length=r,this.has_stree=n&&n.length}let z0,O0,B0;function dh(n,e){this.dyn_tree=n,this.max_code=0,this.stat_desc=e}const U0=n=>n<256?Na[n]:Na[256+(n>>>7)],Oa=(n,e)=>{n.pending_buf[n.pending++]=e&255,n.pending_buf[n.pending++]=e>>>8&255},Pn=(n,e,t)=>{n.bi_valid>hh-t?(n.bi_buf|=e<<n.bi_valid&65535,Oa(n,n.bi_buf),n.bi_buf=e>>hh-n.bi_valid,n.bi_valid+=t-hh):(n.bi_buf|=e<<n.bi_valid&65535,n.bi_valid+=t)},Ti=(n,e,t)=>{Pn(n,t[e*2],t[e*2+1])},k0=(n,e)=>{let t=0;do t|=n&1,n>>>=1,t<<=1;while(--e>0);return t>>>1},Vb=n=>{n.bi_valid===16?(Oa(n,n.bi_buf),n.bi_buf=0,n.bi_valid=0):n.bi_valid>=8&&(n.pending_buf[n.pending++]=n.bi_buf&255,n.bi_buf>>=8,n.bi_valid-=8)},Wb=(n,e)=>{const t=e.dyn_tree,i=e.max_code,r=e.stat_desc.static_tree,s=e.stat_desc.has_stree,o=e.stat_desc.extra_bits,a=e.stat_desc.extra_base,c=e.stat_desc.max_length;let l,u,h,f,d,g,p=0;for(f=0;f<=ts;f++)n.bl_count[f]=0;for(t[n.heap[n.heap_max]*2+1]=0,l=n.heap_max+1;l<P0;l++)u=n.heap[l],f=t[t[u*2+1]*2+1]+1,f>c&&(f=c,p++),t[u*2+1]=f,!(u>i)&&(n.bl_count[f]++,d=0,u>=a&&(d=o[u-a]),g=t[u*2],n.opt_len+=g*(f+d),s&&(n.static_len+=g*(r[u*2+1]+d)));if(p!==0){do{for(f=c-1;n.bl_count[f]===0;)f--;n.bl_count[f]--,n.bl_count[f+1]+=2,n.bl_count[c]--,p-=2}while(p>0);for(f=c;f!==0;f--)for(u=n.bl_count[f];u!==0;)h=n.heap[--l],!(h>i)&&(t[h*2+1]!==f&&(n.opt_len+=(f-t[h*2+1])*t[h*2],t[h*2+1]=f),u--)}},G0=(n,e,t)=>{const i=new Array(ts+1);let r=0,s,o;for(s=1;s<=ts;s++)r=r+t[s-1]<<1,i[s]=r;for(o=0;o<=e;o++){let a=n[o*2+1];a!==0&&(n[o*2]=k0(i[a]++,a))}},$b=()=>{let n,e,t,i,r;const s=new Array(ts+1);for(t=0,i=0;i<Nd-1;i++)for(Bd[i]=t,n=0;n<1<<Wf[i];n++)za[t++]=i;for(za[t-1]=i,r=0,i=0;i<16;i++)for(uu[i]=r,n=0;n<1<<iu[i];n++)Na[r++]=i;for(r>>=7;i<yo;i++)for(uu[i]=r<<7,n=0;n<1<<iu[i]-7;n++)Na[256+r++]=i;for(e=0;e<=ts;e++)s[e]=0;for(n=0;n<=143;)qi[n*2+1]=8,n++,s[8]++;for(;n<=255;)qi[n*2+1]=9,n++,s[9]++;for(;n<=279;)qi[n*2+1]=7,n++,s[7]++;for(;n<=287;)qi[n*2+1]=8,n++,s[8]++;for(G0(qi,Fa+1,s),n=0;n<yo;n++)Aa[n*2+1]=5,Aa[n*2]=k0(n,5);z0=new fh(qi,Wf,bl+1,Fa,ts),O0=new fh(Aa,iu,0,yo,ts),B0=new fh(new Array(0),Gb,0,zd,kb)},H0=n=>{let e;for(e=0;e<Fa;e++)n.dyn_ltree[e*2]=0;for(e=0;e<yo;e++)n.dyn_dtree[e*2]=0;for(e=0;e<zd;e++)n.bl_tree[e*2]=0;n.dyn_ltree[Od*2]=1,n.opt_len=n.static_len=0,n.sym_next=n.matches=0},V0=n=>{n.bi_valid>8?Oa(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0},Qp=(n,e,t,i)=>{const r=e*2,s=t*2;return n[r]<n[s]||n[r]===n[s]&&i[e]<=i[t]},ph=(n,e,t)=>{const i=n.heap[t];let r=t<<1;for(;r<=n.heap_len&&(r<n.heap_len&&Qp(e,n.heap[r+1],n.heap[r],n.depth)&&r++,!Qp(e,i,n.heap[r],n.depth));)n.heap[t]=n.heap[r],t=r,r<<=1;n.heap[t]=i},em=(n,e,t)=>{let i,r,s=0,o,a;if(n.sym_next!==0)do i=n.pending_buf[n.sym_buf+s++]&255,i+=(n.pending_buf[n.sym_buf+s++]&255)<<8,r=n.pending_buf[n.sym_buf+s++],i===0?Ti(n,r,e):(o=za[r],Ti(n,o+bl+1,e),a=Wf[o],a!==0&&(r-=Bd[o],Pn(n,r,a)),i--,o=U0(i),Ti(n,o,t),a=iu[o],a!==0&&(i-=uu[o],Pn(n,i,a)));while(s<n.sym_next);Ti(n,Od,e)},$f=(n,e)=>{const t=e.dyn_tree,i=e.stat_desc.static_tree,r=e.stat_desc.has_stree,s=e.stat_desc.elems;let o,a,c=-1,l;for(n.heap_len=0,n.heap_max=P0,o=0;o<s;o++)t[o*2]!==0?(n.heap[++n.heap_len]=c=o,n.depth[o]=0):t[o*2+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=c<2?++c:0,t[l*2]=1,n.depth[l]=0,n.opt_len--,r&&(n.static_len-=i[l*2+1]);for(e.max_code=c,o=n.heap_len>>1;o>=1;o--)ph(n,t,o);l=s;do o=n.heap[1],n.heap[1]=n.heap[n.heap_len--],ph(n,t,1),a=n.heap[1],n.heap[--n.heap_max]=o,n.heap[--n.heap_max]=a,t[l*2]=t[o*2]+t[a*2],n.depth[l]=(n.depth[o]>=n.depth[a]?n.depth[o]:n.depth[a])+1,t[o*2+1]=t[a*2+1]=l,n.heap[1]=l++,ph(n,t,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],Wb(n,e),G0(t,c,n.bl_count)},tm=(n,e,t)=>{let i,r=-1,s,o=e[0*2+1],a=0,c=7,l=4;for(o===0&&(c=138,l=3),e[(t+1)*2+1]=65535,i=0;i<=t;i++)s=o,o=e[(i+1)*2+1],!(++a<c&&s===o)&&(a<l?n.bl_tree[s*2]+=a:s!==0?(s!==r&&n.bl_tree[s*2]++,n.bl_tree[D0*2]++):a<=10?n.bl_tree[I0*2]++:n.bl_tree[F0*2]++,a=0,r=s,o===0?(c=138,l=3):s===o?(c=6,l=3):(c=7,l=4))},nm=(n,e,t)=>{let i,r=-1,s,o=e[0*2+1],a=0,c=7,l=4;for(o===0&&(c=138,l=3),i=0;i<=t;i++)if(s=o,o=e[(i+1)*2+1],!(++a<c&&s===o)){if(a<l)do Ti(n,s,n.bl_tree);while(--a!==0);else s!==0?(s!==r&&(Ti(n,s,n.bl_tree),a--),Ti(n,D0,n.bl_tree),Pn(n,a-3,2)):a<=10?(Ti(n,I0,n.bl_tree),Pn(n,a-3,3)):(Ti(n,F0,n.bl_tree),Pn(n,a-11,7));a=0,r=s,o===0?(c=138,l=3):s===o?(c=6,l=3):(c=7,l=4)}},qb=n=>{let e;for(tm(n,n.dyn_ltree,n.l_desc.max_code),tm(n,n.dyn_dtree,n.d_desc.max_code),$f(n,n.bl_desc),e=zd-1;e>=3&&n.bl_tree[N0[e]*2+1]===0;e--);return n.opt_len+=3*(e+1)+5+5+4,e},Xb=(n,e,t,i)=>{let r;for(Pn(n,e-257,5),Pn(n,t-1,5),Pn(n,i-4,4),r=0;r<i;r++)Pn(n,n.bl_tree[N0[r]*2+1],3);nm(n,n.dyn_ltree,e-1),nm(n,n.dyn_dtree,t-1)},Zb=n=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&n.dyn_ltree[t*2]!==0)return Jp;if(n.dyn_ltree[9*2]!==0||n.dyn_ltree[10*2]!==0||n.dyn_ltree[13*2]!==0)return Kp;for(t=32;t<bl;t++)if(n.dyn_ltree[t*2]!==0)return Kp;return Jp};let im=!1;const Yb=n=>{im||($b(),im=!0),n.l_desc=new dh(n.dyn_ltree,z0),n.d_desc=new dh(n.dyn_dtree,O0),n.bl_desc=new dh(n.bl_tree,B0),n.bi_buf=0,n.bi_valid=0,H0(n)},W0=(n,e,t,i)=>{Pn(n,(zb<<1)+(i?1:0),3),V0(n),Oa(n,t),Oa(n,~t),t&&n.pending_buf.set(n.window.subarray(e,e+t),n.pending),n.pending+=t},jb=n=>{Pn(n,R0<<1,3),Ti(n,Od,qi),Vb(n)},Jb=(n,e,t,i)=>{let r,s,o=0;n.level>0?(n.strm.data_type===Nb&&(n.strm.data_type=Zb(n)),$f(n,n.l_desc),$f(n,n.d_desc),o=qb(n),r=n.opt_len+3+7>>>3,s=n.static_len+3+7>>>3,s<=r&&(r=s)):r=s=t+5,t+4<=r&&e!==-1?W0(n,e,t,i):n.strategy===Fb||s===r?(Pn(n,(R0<<1)+(i?1:0),3),em(n,qi,Aa)):(Pn(n,(Ob<<1)+(i?1:0),3),Xb(n,n.l_desc.max_code+1,n.d_desc.max_code+1,o+1),em(n,n.dyn_ltree,n.dyn_dtree)),H0(n),i&&V0(n)},Kb=(n,e,t)=>(n.pending_buf[n.sym_buf+n.sym_next++]=e,n.pending_buf[n.sym_buf+n.sym_next++]=e>>8,n.pending_buf[n.sym_buf+n.sym_next++]=t,e===0?n.dyn_ltree[t*2]++:(n.matches++,e--,n.dyn_ltree[(za[t]+bl+1)*2]++,n.dyn_dtree[U0(e)*2]++),n.sym_next===n.sym_end);var Qb=Yb,eM=W0,tM=Jb,nM=Kb,iM=jb,rM={_tr_init:Qb,_tr_stored_block:eM,_tr_flush_block:tM,_tr_tally:nM,_tr_align:iM};const sM=(n,e,t,i)=>{let r=n&65535|0,s=n>>>16&65535|0,o=0;for(;t!==0;){o=t>2e3?2e3:t,t-=o;do r=r+e[i++]|0,s=s+r|0;while(--o);r%=65521,s%=65521}return r|s<<16|0};var Ba=sM;const oM=()=>{let n,e=[];for(var t=0;t<256;t++){n=t;for(var i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n}return e},aM=new Uint32Array(oM()),lM=(n,e,t,i)=>{const r=aM,s=i+t;n^=-1;for(let o=i;o<s;o++)n=n>>>8^r[(n^e[o])&255];return n^-1};var ln=lM,hs={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},Ss={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:cM,_tr_stored_block:qf,_tr_flush_block:uM,_tr_tally:br,_tr_align:hM}=rM,{Z_NO_FLUSH:Mr,Z_PARTIAL_FLUSH:fM,Z_FULL_FLUSH:dM,Z_FINISH:Qn,Z_BLOCK:rm,Z_OK:pn,Z_STREAM_END:sm,Z_STREAM_ERROR:Ci,Z_DATA_ERROR:pM,Z_BUF_ERROR:mh,Z_DEFAULT_COMPRESSION:mM,Z_FILTERED:gM,Z_HUFFMAN_ONLY:Vl,Z_RLE:_M,Z_FIXED:xM,Z_DEFAULT_STRATEGY:vM,Z_UNKNOWN:yM,Z_DEFLATED:Bu}=Ss,bM=9,MM=15,wM=8,SM=29,EM=256,Xf=EM+1+SM,TM=30,AM=19,LM=2*Xf+1,CM=15,xt=3,gr=258,Ri=gr+xt+1,RM=32,Ao=42,Ud=57,Zf=69,Yf=73,jf=91,Jf=103,ns=113,ba=666,Tn=1,Uo=2,fs=3,ko=4,PM=3,is=(n,e)=>(n.msg=hs[e],e),om=n=>n*2-(n>4?9:0),pr=n=>{let e=n.length;for(;--e>=0;)n[e]=0},DM=n=>{let e,t,i,r=n.w_size;e=n.hash_size,i=e;do t=n.head[--i],n.head[i]=t>=r?t-r:0;while(--e);e=r,i=e;do t=n.prev[--i],n.prev[i]=t>=r?t-r:0;while(--e)};let IM=(n,e,t)=>(e<<n.hash_shift^t)&n.hash_mask,wr=IM;const Gn=n=>{const e=n.state;let t=e.pending;t>n.avail_out&&(t=n.avail_out),t!==0&&(n.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),n.next_out),n.next_out+=t,e.pending_out+=t,n.total_out+=t,n.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},Vn=(n,e)=>{uM(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,e),n.block_start=n.strstart,Gn(n.strm)},vt=(n,e)=>{n.pending_buf[n.pending++]=e},na=(n,e)=>{n.pending_buf[n.pending++]=e>>>8&255,n.pending_buf[n.pending++]=e&255},Kf=(n,e,t,i)=>{let r=n.avail_in;return r>i&&(r=i),r===0?0:(n.avail_in-=r,e.set(n.input.subarray(n.next_in,n.next_in+r),t),n.state.wrap===1?n.adler=Ba(n.adler,e,r,t):n.state.wrap===2&&(n.adler=ln(n.adler,e,r,t)),n.next_in+=r,n.total_in+=r,r)},$0=(n,e)=>{let t=n.max_chain_length,i=n.strstart,r,s,o=n.prev_length,a=n.nice_match;const c=n.strstart>n.w_size-Ri?n.strstart-(n.w_size-Ri):0,l=n.window,u=n.w_mask,h=n.prev,f=n.strstart+gr;let d=l[i+o-1],g=l[i+o];n.prev_length>=n.good_match&&(t>>=2),a>n.lookahead&&(a=n.lookahead);do if(r=e,!(l[r+o]!==g||l[r+o-1]!==d||l[r]!==l[i]||l[++r]!==l[i+1])){i+=2,r++;do;while(l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&i<f);if(s=gr-(f-i),i=f-gr,s>o){if(n.match_start=e,o=s,s>=a)break;d=l[i+o-1],g=l[i+o]}}while((e=h[e&u])>c&&--t!==0);return o<=n.lookahead?o:n.lookahead},Lo=n=>{const e=n.w_size;let t,i,r;do{if(i=n.window_size-n.lookahead-n.strstart,n.strstart>=e+(e-Ri)&&(n.window.set(n.window.subarray(e,e+e-i),0),n.match_start-=e,n.strstart-=e,n.block_start-=e,n.insert>n.strstart&&(n.insert=n.strstart),DM(n),i+=e),n.strm.avail_in===0)break;if(t=Kf(n.strm,n.window,n.strstart+n.lookahead,i),n.lookahead+=t,n.lookahead+n.insert>=xt)for(r=n.strstart-n.insert,n.ins_h=n.window[r],n.ins_h=wr(n,n.ins_h,n.window[r+1]);n.insert&&(n.ins_h=wr(n,n.ins_h,n.window[r+xt-1]),n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,n.insert--,!(n.lookahead+n.insert<xt)););}while(n.lookahead<Ri&&n.strm.avail_in!==0)},q0=(n,e)=>{let t=n.pending_buf_size-5>n.w_size?n.w_size:n.pending_buf_size-5,i,r,s,o=0,a=n.strm.avail_in;do{if(i=65535,s=n.bi_valid+42>>3,n.strm.avail_out<s||(s=n.strm.avail_out-s,r=n.strstart-n.block_start,i>r+n.strm.avail_in&&(i=r+n.strm.avail_in),i>s&&(i=s),i<t&&(i===0&&e!==Qn||e===Mr||i!==r+n.strm.avail_in)))break;o=e===Qn&&i===r+n.strm.avail_in?1:0,qf(n,0,0,o),n.pending_buf[n.pending-4]=i,n.pending_buf[n.pending-3]=i>>8,n.pending_buf[n.pending-2]=~i,n.pending_buf[n.pending-1]=~i>>8,Gn(n.strm),r&&(r>i&&(r=i),n.strm.output.set(n.window.subarray(n.block_start,n.block_start+r),n.strm.next_out),n.strm.next_out+=r,n.strm.avail_out-=r,n.strm.total_out+=r,n.block_start+=r,i-=r),i&&(Kf(n.strm,n.strm.output,n.strm.next_out,i),n.strm.next_out+=i,n.strm.avail_out-=i,n.strm.total_out+=i)}while(o===0);return a-=n.strm.avail_in,a&&(a>=n.w_size?(n.matches=2,n.window.set(n.strm.input.subarray(n.strm.next_in-n.w_size,n.strm.next_in),0),n.strstart=n.w_size,n.insert=n.strstart):(n.window_size-n.strstart<=a&&(n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,n.insert>n.strstart&&(n.insert=n.strstart)),n.window.set(n.strm.input.subarray(n.strm.next_in-a,n.strm.next_in),n.strstart),n.strstart+=a,n.insert+=a>n.w_size-n.insert?n.w_size-n.insert:a),n.block_start=n.strstart),n.high_water<n.strstart&&(n.high_water=n.strstart),o?ko:e!==Mr&&e!==Qn&&n.strm.avail_in===0&&n.strstart===n.block_start?Uo:(s=n.window_size-n.strstart,n.strm.avail_in>s&&n.block_start>=n.w_size&&(n.block_start-=n.w_size,n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,s+=n.w_size,n.insert>n.strstart&&(n.insert=n.strstart)),s>n.strm.avail_in&&(s=n.strm.avail_in),s&&(Kf(n.strm,n.window,n.strstart,s),n.strstart+=s,n.insert+=s>n.w_size-n.insert?n.w_size-n.insert:s),n.high_water<n.strstart&&(n.high_water=n.strstart),s=n.bi_valid+42>>3,s=n.pending_buf_size-s>65535?65535:n.pending_buf_size-s,t=s>n.w_size?n.w_size:s,r=n.strstart-n.block_start,(r>=t||(r||e===Qn)&&e!==Mr&&n.strm.avail_in===0&&r<=s)&&(i=r>s?s:r,o=e===Qn&&n.strm.avail_in===0&&i===r?1:0,qf(n,n.block_start,i,o),n.block_start+=i,Gn(n.strm)),o?fs:Tn)},gh=(n,e)=>{let t,i;for(;;){if(n.lookahead<Ri){if(Lo(n),n.lookahead<Ri&&e===Mr)return Tn;if(n.lookahead===0)break}if(t=0,n.lookahead>=xt&&(n.ins_h=wr(n,n.ins_h,n.window[n.strstart+xt-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),t!==0&&n.strstart-t<=n.w_size-Ri&&(n.match_length=$0(n,t)),n.match_length>=xt)if(i=br(n,n.strstart-n.match_start,n.match_length-xt),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=xt){n.match_length--;do n.strstart++,n.ins_h=wr(n,n.ins_h,n.window[n.strstart+xt-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart;while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.ins_h=n.window[n.strstart],n.ins_h=wr(n,n.ins_h,n.window[n.strstart+1]);else i=br(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(Vn(n,!1),n.strm.avail_out===0))return Tn}return n.insert=n.strstart<xt-1?n.strstart:xt-1,e===Qn?(Vn(n,!0),n.strm.avail_out===0?fs:ko):n.sym_next&&(Vn(n,!1),n.strm.avail_out===0)?Tn:Uo},Is=(n,e)=>{let t,i,r;for(;;){if(n.lookahead<Ri){if(Lo(n),n.lookahead<Ri&&e===Mr)return Tn;if(n.lookahead===0)break}if(t=0,n.lookahead>=xt&&(n.ins_h=wr(n,n.ins_h,n.window[n.strstart+xt-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=xt-1,t!==0&&n.prev_length<n.max_lazy_match&&n.strstart-t<=n.w_size-Ri&&(n.match_length=$0(n,t),n.match_length<=5&&(n.strategy===gM||n.match_length===xt&&n.strstart-n.match_start>4096)&&(n.match_length=xt-1)),n.prev_length>=xt&&n.match_length<=n.prev_length){r=n.strstart+n.lookahead-xt,i=br(n,n.strstart-1-n.prev_match,n.prev_length-xt),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=r&&(n.ins_h=wr(n,n.ins_h,n.window[n.strstart+xt-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart);while(--n.prev_length!==0);if(n.match_available=0,n.match_length=xt-1,n.strstart++,i&&(Vn(n,!1),n.strm.avail_out===0))return Tn}else if(n.match_available){if(i=br(n,0,n.window[n.strstart-1]),i&&Vn(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return Tn}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=br(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<xt-1?n.strstart:xt-1,e===Qn?(Vn(n,!0),n.strm.avail_out===0?fs:ko):n.sym_next&&(Vn(n,!1),n.strm.avail_out===0)?Tn:Uo},FM=(n,e)=>{let t,i,r,s;const o=n.window;for(;;){if(n.lookahead<=gr){if(Lo(n),n.lookahead<=gr&&e===Mr)return Tn;if(n.lookahead===0)break}if(n.match_length=0,n.lookahead>=xt&&n.strstart>0&&(r=n.strstart-1,i=o[r],i===o[++r]&&i===o[++r]&&i===o[++r])){s=n.strstart+gr;do;while(i===o[++r]&&i===o[++r]&&i===o[++r]&&i===o[++r]&&i===o[++r]&&i===o[++r]&&i===o[++r]&&i===o[++r]&&r<s);n.match_length=gr-(s-r),n.match_length>n.lookahead&&(n.match_length=n.lookahead)}if(n.match_length>=xt?(t=br(n,1,n.match_length-xt),n.lookahead-=n.match_length,n.strstart+=n.match_length,n.match_length=0):(t=br(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++),t&&(Vn(n,!1),n.strm.avail_out===0))return Tn}return n.insert=0,e===Qn?(Vn(n,!0),n.strm.avail_out===0?fs:ko):n.sym_next&&(Vn(n,!1),n.strm.avail_out===0)?Tn:Uo},NM=(n,e)=>{let t;for(;;){if(n.lookahead===0&&(Lo(n),n.lookahead===0)){if(e===Mr)return Tn;break}if(n.match_length=0,t=br(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++,t&&(Vn(n,!1),n.strm.avail_out===0))return Tn}return n.insert=0,e===Qn?(Vn(n,!0),n.strm.avail_out===0?fs:ko):n.sym_next&&(Vn(n,!1),n.strm.avail_out===0)?Tn:Uo};function yi(n,e,t,i,r){this.good_length=n,this.max_lazy=e,this.nice_length=t,this.max_chain=i,this.func=r}const Ma=[new yi(0,0,0,0,q0),new yi(4,4,8,4,gh),new yi(4,5,16,8,gh),new yi(4,6,32,32,gh),new yi(4,4,16,16,Is),new yi(8,16,32,32,Is),new yi(8,16,128,128,Is),new yi(8,32,128,256,Is),new yi(32,128,258,1024,Is),new yi(32,258,258,4096,Is)],zM=n=>{n.window_size=2*n.w_size,pr(n.head),n.max_lazy_match=Ma[n.level].max_lazy,n.good_match=Ma[n.level].good_length,n.nice_match=Ma[n.level].nice_length,n.max_chain_length=Ma[n.level].max_chain,n.strstart=0,n.block_start=0,n.lookahead=0,n.insert=0,n.match_length=n.prev_length=xt-1,n.match_available=0,n.ins_h=0};function OM(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Bu,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(LM*2),this.dyn_dtree=new Uint16Array((2*TM+1)*2),this.bl_tree=new Uint16Array((2*AM+1)*2),pr(this.dyn_ltree),pr(this.dyn_dtree),pr(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(CM+1),this.heap=new Uint16Array(2*Xf+1),pr(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Xf+1),pr(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Ml=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.status!==Ao&&e.status!==Ud&&e.status!==Zf&&e.status!==Yf&&e.status!==jf&&e.status!==Jf&&e.status!==ns&&e.status!==ba?1:0},X0=n=>{if(Ml(n))return is(n,Ci);n.total_in=n.total_out=0,n.data_type=yM;const e=n.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?Ud:e.wrap?Ao:ns,n.adler=e.wrap===2?0:1,e.last_flush=-2,cM(e),pn},Z0=n=>{const e=X0(n);return e===pn&&zM(n.state),e},BM=(n,e)=>Ml(n)||n.state.wrap!==2?Ci:(n.state.gzhead=e,pn),Y0=(n,e,t,i,r,s)=>{if(!n)return Ci;let o=1;if(e===mM&&(e=6),i<0?(o=0,i=-i):i>15&&(o=2,i-=16),r<1||r>bM||t!==Bu||i<8||i>15||e<0||e>9||s<0||s>xM||i===8&&o!==1)return is(n,Ci);i===8&&(i=9);const a=new OM;return n.state=a,a.strm=n,a.status=Ao,a.wrap=o,a.gzhead=null,a.w_bits=i,a.w_size=1<<a.w_bits,a.w_mask=a.w_size-1,a.hash_bits=r+7,a.hash_size=1<<a.hash_bits,a.hash_mask=a.hash_size-1,a.hash_shift=~~((a.hash_bits+xt-1)/xt),a.window=new Uint8Array(a.w_size*2),a.head=new Uint16Array(a.hash_size),a.prev=new Uint16Array(a.w_size),a.lit_bufsize=1<<r+6,a.pending_buf_size=a.lit_bufsize*4,a.pending_buf=new Uint8Array(a.pending_buf_size),a.sym_buf=a.lit_bufsize,a.sym_end=(a.lit_bufsize-1)*3,a.level=e,a.strategy=s,a.method=t,Z0(n)},UM=(n,e)=>Y0(n,e,Bu,MM,wM,vM),kM=(n,e)=>{if(Ml(n)||e>rm||e<0)return n?is(n,Ci):Ci;const t=n.state;if(!n.output||n.avail_in!==0&&!n.input||t.status===ba&&e!==Qn)return is(n,n.avail_out===0?mh:Ci);const i=t.last_flush;if(t.last_flush=e,t.pending!==0){if(Gn(n),n.avail_out===0)return t.last_flush=-1,pn}else if(n.avail_in===0&&om(e)<=om(i)&&e!==Qn)return is(n,mh);if(t.status===ba&&n.avail_in!==0)return is(n,mh);if(t.status===Ao&&t.wrap===0&&(t.status=ns),t.status===Ao){let r=Bu+(t.w_bits-8<<4)<<8,s=-1;if(t.strategy>=Vl||t.level<2?s=0:t.level<6?s=1:t.level===6?s=2:s=3,r|=s<<6,t.strstart!==0&&(r|=RM),r+=31-r%31,na(t,r),t.strstart!==0&&(na(t,n.adler>>>16),na(t,n.adler&65535)),n.adler=1,t.status=ns,Gn(n),t.pending!==0)return t.last_flush=-1,pn}if(t.status===Ud){if(n.adler=0,vt(t,31),vt(t,139),vt(t,8),t.gzhead)vt(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),vt(t,t.gzhead.time&255),vt(t,t.gzhead.time>>8&255),vt(t,t.gzhead.time>>16&255),vt(t,t.gzhead.time>>24&255),vt(t,t.level===9?2:t.strategy>=Vl||t.level<2?4:0),vt(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(vt(t,t.gzhead.extra.length&255),vt(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(n.adler=ln(n.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=Zf;else if(vt(t,0),vt(t,0),vt(t,0),vt(t,0),vt(t,0),vt(t,t.level===9?2:t.strategy>=Vl||t.level<2?4:0),vt(t,PM),t.status=ns,Gn(n),t.pending!==0)return t.last_flush=-1,pn}if(t.status===Zf){if(t.gzhead.extra){let r=t.pending,s=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+s>t.pending_buf_size;){let a=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+a),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>r&&(n.adler=ln(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex+=a,Gn(n),t.pending!==0)return t.last_flush=-1,pn;r=0,s-=a}let o=new Uint8Array(t.gzhead.extra);t.pending_buf.set(o.subarray(t.gzindex,t.gzindex+s),t.pending),t.pending+=s,t.gzhead.hcrc&&t.pending>r&&(n.adler=ln(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=Yf}if(t.status===Yf){if(t.gzhead.name){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=ln(n.adler,t.pending_buf,t.pending-r,r)),Gn(n),t.pending!==0)return t.last_flush=-1,pn;r=0}t.gzindex<t.gzhead.name.length?s=t.gzhead.name.charCodeAt(t.gzindex++)&255:s=0,vt(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=ln(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=jf}if(t.status===jf){if(t.gzhead.comment){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=ln(n.adler,t.pending_buf,t.pending-r,r)),Gn(n),t.pending!==0)return t.last_flush=-1,pn;r=0}t.gzindex<t.gzhead.comment.length?s=t.gzhead.comment.charCodeAt(t.gzindex++)&255:s=0,vt(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=ln(n.adler,t.pending_buf,t.pending-r,r))}t.status=Jf}if(t.status===Jf){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(Gn(n),t.pending!==0))return t.last_flush=-1,pn;vt(t,n.adler&255),vt(t,n.adler>>8&255),n.adler=0}if(t.status=ns,Gn(n),t.pending!==0)return t.last_flush=-1,pn}if(n.avail_in!==0||t.lookahead!==0||e!==Mr&&t.status!==ba){let r=t.level===0?q0(t,e):t.strategy===Vl?NM(t,e):t.strategy===_M?FM(t,e):Ma[t.level].func(t,e);if((r===fs||r===ko)&&(t.status=ba),r===Tn||r===fs)return n.avail_out===0&&(t.last_flush=-1),pn;if(r===Uo&&(e===fM?hM(t):e!==rm&&(qf(t,0,0,!1),e===dM&&(pr(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),Gn(n),n.avail_out===0))return t.last_flush=-1,pn}return e!==Qn?pn:t.wrap<=0?sm:(t.wrap===2?(vt(t,n.adler&255),vt(t,n.adler>>8&255),vt(t,n.adler>>16&255),vt(t,n.adler>>24&255),vt(t,n.total_in&255),vt(t,n.total_in>>8&255),vt(t,n.total_in>>16&255),vt(t,n.total_in>>24&255)):(na(t,n.adler>>>16),na(t,n.adler&65535)),Gn(n),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?pn:sm)},GM=n=>{if(Ml(n))return Ci;const e=n.state.status;return n.state=null,e===ns?is(n,pM):pn},HM=(n,e)=>{let t=e.length;if(Ml(n))return Ci;const i=n.state,r=i.wrap;if(r===2||r===1&&i.status!==Ao||i.lookahead)return Ci;if(r===1&&(n.adler=Ba(n.adler,e,t,0)),i.wrap=0,t>=i.w_size){r===0&&(pr(i.head),i.strstart=0,i.block_start=0,i.insert=0);let c=new Uint8Array(i.w_size);c.set(e.subarray(t-i.w_size,t),0),e=c,t=i.w_size}const s=n.avail_in,o=n.next_in,a=n.input;for(n.avail_in=t,n.next_in=0,n.input=e,Lo(i);i.lookahead>=xt;){let c=i.strstart,l=i.lookahead-(xt-1);do i.ins_h=wr(i,i.ins_h,i.window[c+xt-1]),i.prev[c&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=c,c++;while(--l);i.strstart=c,i.lookahead=xt-1,Lo(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=xt-1,i.match_available=0,n.next_in=o,n.input=a,n.avail_in=s,i.wrap=r,pn};var VM=UM,WM=Y0,$M=Z0,qM=X0,XM=BM,ZM=kM,YM=GM,jM=HM,JM="pako deflate (from Nodeca project)",La={deflateInit:VM,deflateInit2:WM,deflateReset:$M,deflateResetKeep:qM,deflateSetHeader:XM,deflate:ZM,deflateEnd:YM,deflateSetDictionary:jM,deflateInfo:JM};const KM=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var QM=function(n){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const i in t)KM(t,i)&&(n[i]=t[i])}}return n},ew=n=>{let e=0;for(let i=0,r=n.length;i<r;i++)e+=n[i].length;const t=new Uint8Array(e);for(let i=0,r=0,s=n.length;i<s;i++){let o=n[i];t.set(o,r),r+=o.length}return t},Uu={assign:QM,flattenChunks:ew};let j0=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{j0=!1}const Ua=new Uint8Array(256);for(let n=0;n<256;n++)Ua[n]=n>=252?6:n>=248?5:n>=240?4:n>=224?3:n>=192?2:1;Ua[254]=Ua[254]=1;var tw=n=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(n);let e,t,i,r,s,o=n.length,a=0;for(r=0;r<o;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<o&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),a+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(a),s=0,r=0;s<a;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<o&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),t<128?e[s++]=t:t<2048?(e[s++]=192|t>>>6,e[s++]=128|t&63):t<65536?(e[s++]=224|t>>>12,e[s++]=128|t>>>6&63,e[s++]=128|t&63):(e[s++]=240|t>>>18,e[s++]=128|t>>>12&63,e[s++]=128|t>>>6&63,e[s++]=128|t&63);return e};const nw=(n,e)=>{if(e<65534&&n.subarray&&j0)return String.fromCharCode.apply(null,n.length===e?n:n.subarray(0,e));let t="";for(let i=0;i<e;i++)t+=String.fromCharCode(n[i]);return t};var iw=(n,e)=>{const t=e||n.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(n.subarray(0,e));let i,r;const s=new Array(t*2);for(r=0,i=0;i<t;){let o=n[i++];if(o<128){s[r++]=o;continue}let a=Ua[o];if(a>4){s[r++]=65533,i+=a-1;continue}for(o&=a===2?31:a===3?15:7;a>1&&i<t;)o=o<<6|n[i++]&63,a--;if(a>1){s[r++]=65533;continue}o<65536?s[r++]=o:(o-=65536,s[r++]=55296|o>>10&1023,s[r++]=56320|o&1023)}return nw(s,r)},rw=(n,e)=>{e=e||n.length,e>n.length&&(e=n.length);let t=e-1;for(;t>=0&&(n[t]&192)===128;)t--;return t<0||t===0?e:t+Ua[n[t]]>e?t:e},ka={string2buf:tw,buf2string:iw,utf8border:rw};function sw(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var J0=sw;const K0=Object.prototype.toString,{Z_NO_FLUSH:ow,Z_SYNC_FLUSH:aw,Z_FULL_FLUSH:lw,Z_FINISH:cw,Z_OK:hu,Z_STREAM_END:uw,Z_DEFAULT_COMPRESSION:hw,Z_DEFAULT_STRATEGY:fw,Z_DEFLATED:dw}=Ss;function wl(n){this.options=Uu.assign({level:hw,method:dw,chunkSize:16384,windowBits:15,memLevel:8,strategy:fw},n||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new J0,this.strm.avail_out=0;let t=La.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(t!==hu)throw new Error(hs[t]);if(e.header&&La.deflateSetHeader(this.strm,e.header),e.dictionary){let i;if(typeof e.dictionary=="string"?i=ka.string2buf(e.dictionary):K0.call(e.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(e.dictionary):i=e.dictionary,t=La.deflateSetDictionary(this.strm,i),t!==hu)throw new Error(hs[t]);this._dict_set=!0}}wl.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize;let r,s;if(this.ended)return!1;for(e===~~e?s=e:s=e===!0?cw:ow,typeof n=="string"?t.input=ka.string2buf(n):K0.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),(s===aw||s===lw)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(r=La.deflate(t,s),r===uw)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),r=La.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===hu;if(t.avail_out===0){this.onData(t.output);continue}if(s>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};wl.prototype.onData=function(n){this.chunks.push(n)};wl.prototype.onEnd=function(n){n===hu&&(this.result=Uu.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function kd(n,e){const t=new wl(e);if(t.push(n,!0),t.err)throw t.msg||hs[t.err];return t.result}function pw(n,e){return e=e||{},e.raw=!0,kd(n,e)}function mw(n,e){return e=e||{},e.gzip=!0,kd(n,e)}var gw=wl,_w=kd,xw=pw,vw=mw,yw=Ss,bw={Deflate:gw,deflate:_w,deflateRaw:xw,gzip:vw,constants:yw};const Wl=16209,Mw=16191;var ww=function(e,t){let i,r,s,o,a,c,l,u,h,f,d,g,p,m,x,_,y,v,b,M,S,w,E,T;const D=e.state;i=e.next_in,E=e.input,r=i+(e.avail_in-5),s=e.next_out,T=e.output,o=s-(t-e.avail_out),a=s+(e.avail_out-257),c=D.dmax,l=D.wsize,u=D.whave,h=D.wnext,f=D.window,d=D.hold,g=D.bits,p=D.lencode,m=D.distcode,x=(1<<D.lenbits)-1,_=(1<<D.distbits)-1;e:do{g<15&&(d+=E[i++]<<g,g+=8,d+=E[i++]<<g,g+=8),y=p[d&x];t:for(;;){if(v=y>>>24,d>>>=v,g-=v,v=y>>>16&255,v===0)T[s++]=y&65535;else if(v&16){b=y&65535,v&=15,v&&(g<v&&(d+=E[i++]<<g,g+=8),b+=d&(1<<v)-1,d>>>=v,g-=v),g<15&&(d+=E[i++]<<g,g+=8,d+=E[i++]<<g,g+=8),y=m[d&_];n:for(;;){if(v=y>>>24,d>>>=v,g-=v,v=y>>>16&255,v&16){if(M=y&65535,v&=15,g<v&&(d+=E[i++]<<g,g+=8,g<v&&(d+=E[i++]<<g,g+=8)),M+=d&(1<<v)-1,M>c){e.msg="invalid distance too far back",D.mode=Wl;break e}if(d>>>=v,g-=v,v=s-o,M>v){if(v=M-v,v>u&&D.sane){e.msg="invalid distance too far back",D.mode=Wl;break e}if(S=0,w=f,h===0){if(S+=l-v,v<b){b-=v;do T[s++]=f[S++];while(--v);S=s-M,w=T}}else if(h<v){if(S+=l+h-v,v-=h,v<b){b-=v;do T[s++]=f[S++];while(--v);if(S=0,h<b){v=h,b-=v;do T[s++]=f[S++];while(--v);S=s-M,w=T}}}else if(S+=h-v,v<b){b-=v;do T[s++]=f[S++];while(--v);S=s-M,w=T}for(;b>2;)T[s++]=w[S++],T[s++]=w[S++],T[s++]=w[S++],b-=3;b&&(T[s++]=w[S++],b>1&&(T[s++]=w[S++]))}else{S=s-M;do T[s++]=T[S++],T[s++]=T[S++],T[s++]=T[S++],b-=3;while(b>2);b&&(T[s++]=T[S++],b>1&&(T[s++]=T[S++]))}}else if(v&64){e.msg="invalid distance code",D.mode=Wl;break e}else{y=m[(y&65535)+(d&(1<<v)-1)];continue n}break}}else if(v&64)if(v&32){D.mode=Mw;break e}else{e.msg="invalid literal/length code",D.mode=Wl;break e}else{y=p[(y&65535)+(d&(1<<v)-1)];continue t}break}}while(i<r&&s<a);b=g>>3,i-=b,g-=b<<3,d&=(1<<g)-1,e.next_in=i,e.next_out=s,e.avail_in=i<r?5+(r-i):5-(i-r),e.avail_out=s<a?257+(a-s):257-(s-a),D.hold=d,D.bits=g};const Fs=15,am=852,lm=592,cm=0,_h=1,um=2,Sw=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Ew=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),Tw=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),Aw=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),Lw=(n,e,t,i,r,s,o,a)=>{const c=a.bits;let l=0,u=0,h=0,f=0,d=0,g=0,p=0,m=0,x=0,_=0,y,v,b,M,S,w=null,E;const T=new Uint16Array(Fs+1),D=new Uint16Array(Fs+1);let U=null,F,L,B;for(l=0;l<=Fs;l++)T[l]=0;for(u=0;u<i;u++)T[e[t+u]]++;for(d=c,f=Fs;f>=1&&T[f]===0;f--);if(d>f&&(d=f),f===0)return r[s++]=1<<24|64<<16|0,r[s++]=1<<24|64<<16|0,a.bits=1,0;for(h=1;h<f&&T[h]===0;h++);for(d<h&&(d=h),m=1,l=1;l<=Fs;l++)if(m<<=1,m-=T[l],m<0)return-1;if(m>0&&(n===cm||f!==1))return-1;for(D[1]=0,l=1;l<Fs;l++)D[l+1]=D[l]+T[l];for(u=0;u<i;u++)e[t+u]!==0&&(o[D[e[t+u]]++]=u);if(n===cm?(w=U=o,E=20):n===_h?(w=Sw,U=Ew,E=257):(w=Tw,U=Aw,E=0),_=0,u=0,l=h,S=s,g=d,p=0,b=-1,x=1<<d,M=x-1,n===_h&&x>am||n===um&&x>lm)return 1;for(;;){F=l-p,o[u]+1<E?(L=0,B=o[u]):o[u]>=E?(L=U[o[u]-E],B=w[o[u]-E]):(L=32+64,B=0),y=1<<l-p,v=1<<g,h=v;do v-=y,r[S+(_>>p)+v]=F<<24|L<<16|B|0;while(v!==0);for(y=1<<l-1;_&y;)y>>=1;if(y!==0?(_&=y-1,_+=y):_=0,u++,--T[l]===0){if(l===f)break;l=e[t+o[u]]}if(l>d&&(_&M)!==b){for(p===0&&(p=d),S+=h,g=l-p,m=1<<g;g+p<f&&(m-=T[g+p],!(m<=0));)g++,m<<=1;if(x+=1<<g,n===_h&&x>am||n===um&&x>lm)return 1;b=_&M,r[b]=d<<24|g<<16|S-s|0}}return _!==0&&(r[S+_]=l-p<<24|64<<16|0),a.bits=d,0};var Ca=Lw;const Cw=0,Q0=1,ex=2,{Z_FINISH:hm,Z_BLOCK:Rw,Z_TREES:$l,Z_OK:ds,Z_STREAM_END:Pw,Z_NEED_DICT:Dw,Z_STREAM_ERROR:ti,Z_DATA_ERROR:tx,Z_MEM_ERROR:nx,Z_BUF_ERROR:Iw,Z_DEFLATED:fm}=Ss,ku=16180,dm=16181,pm=16182,mm=16183,gm=16184,_m=16185,xm=16186,vm=16187,ym=16188,bm=16189,fu=16190,Ni=16191,xh=16192,Mm=16193,vh=16194,wm=16195,Sm=16196,Em=16197,Tm=16198,ql=16199,Xl=16200,Am=16201,Lm=16202,Cm=16203,Rm=16204,Pm=16205,yh=16206,Dm=16207,Im=16208,Ft=16209,ix=16210,rx=16211,Fw=852,Nw=592,zw=15,Ow=zw,Fm=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24);function Bw(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const Es=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.mode<ku||e.mode>rx?1:0},sx=n=>{if(Es(n))return ti;const e=n.state;return n.total_in=n.total_out=e.total=0,n.msg="",e.wrap&&(n.adler=e.wrap&1),e.mode=ku,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(Fw),e.distcode=e.distdyn=new Int32Array(Nw),e.sane=1,e.back=-1,ds},ox=n=>{if(Es(n))return ti;const e=n.state;return e.wsize=0,e.whave=0,e.wnext=0,sx(n)},ax=(n,e)=>{let t;if(Es(n))return ti;const i=n.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?ti:(i.window!==null&&i.wbits!==e&&(i.window=null),i.wrap=t,i.wbits=e,ox(n))},lx=(n,e)=>{if(!n)return ti;const t=new Bw;n.state=t,t.strm=n,t.window=null,t.mode=ku;const i=ax(n,e);return i!==ds&&(n.state=null),i},Uw=n=>lx(n,Ow);let Nm=!0,bh,Mh;const kw=n=>{if(Nm){bh=new Int32Array(512),Mh=new Int32Array(32);let e=0;for(;e<144;)n.lens[e++]=8;for(;e<256;)n.lens[e++]=9;for(;e<280;)n.lens[e++]=7;for(;e<288;)n.lens[e++]=8;for(Ca(Q0,n.lens,0,288,bh,0,n.work,{bits:9}),e=0;e<32;)n.lens[e++]=5;Ca(ex,n.lens,0,32,Mh,0,n.work,{bits:5}),Nm=!1}n.lencode=bh,n.lenbits=9,n.distcode=Mh,n.distbits=5},cx=(n,e,t,i)=>{let r;const s=n.state;return s.window===null&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(t-s.wsize,t),0),s.wnext=0,s.whave=s.wsize):(r=s.wsize-s.wnext,r>i&&(r=i),s.window.set(e.subarray(t-i,t-i+r),s.wnext),i-=r,i?(s.window.set(e.subarray(t-i,t),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=r,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=r))),0},Gw=(n,e)=>{let t,i,r,s,o,a,c,l,u,h,f,d,g,p,m=0,x,_,y,v,b,M,S,w;const E=new Uint8Array(4);let T,D;const U=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(Es(n)||!n.output||!n.input&&n.avail_in!==0)return ti;t=n.state,t.mode===Ni&&(t.mode=xh),o=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,a=n.avail_in,l=t.hold,u=t.bits,h=a,f=c,w=ds;e:for(;;)switch(t.mode){case ku:if(t.wrap===0){t.mode=xh;break}for(;u<16;){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}if(t.wrap&2&&l===35615){t.wbits===0&&(t.wbits=15),t.check=0,E[0]=l&255,E[1]=l>>>8&255,t.check=ln(t.check,E,2,0),l=0,u=0,t.mode=dm;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((l&255)<<8)+(l>>8))%31){n.msg="incorrect header check",t.mode=Ft;break}if((l&15)!==fm){n.msg="unknown compression method",t.mode=Ft;break}if(l>>>=4,u-=4,S=(l&15)+8,t.wbits===0&&(t.wbits=S),S>15||S>t.wbits){n.msg="invalid window size",t.mode=Ft;break}t.dmax=1<<t.wbits,t.flags=0,n.adler=t.check=1,t.mode=l&512?bm:Ni,l=0,u=0;break;case dm:for(;u<16;){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}if(t.flags=l,(t.flags&255)!==fm){n.msg="unknown compression method",t.mode=Ft;break}if(t.flags&57344){n.msg="unknown header flags set",t.mode=Ft;break}t.head&&(t.head.text=l>>8&1),t.flags&512&&t.wrap&4&&(E[0]=l&255,E[1]=l>>>8&255,t.check=ln(t.check,E,2,0)),l=0,u=0,t.mode=pm;case pm:for(;u<32;){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}t.head&&(t.head.time=l),t.flags&512&&t.wrap&4&&(E[0]=l&255,E[1]=l>>>8&255,E[2]=l>>>16&255,E[3]=l>>>24&255,t.check=ln(t.check,E,4,0)),l=0,u=0,t.mode=mm;case mm:for(;u<16;){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}t.head&&(t.head.xflags=l&255,t.head.os=l>>8),t.flags&512&&t.wrap&4&&(E[0]=l&255,E[1]=l>>>8&255,t.check=ln(t.check,E,2,0)),l=0,u=0,t.mode=gm;case gm:if(t.flags&1024){for(;u<16;){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}t.length=l,t.head&&(t.head.extra_len=l),t.flags&512&&t.wrap&4&&(E[0]=l&255,E[1]=l>>>8&255,t.check=ln(t.check,E,2,0)),l=0,u=0}else t.head&&(t.head.extra=null);t.mode=_m;case _m:if(t.flags&1024&&(d=t.length,d>a&&(d=a),d&&(t.head&&(S=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(i.subarray(s,s+d),S)),t.flags&512&&t.wrap&4&&(t.check=ln(t.check,i,d,s)),a-=d,s+=d,t.length-=d),t.length))break e;t.length=0,t.mode=xm;case xm:if(t.flags&2048){if(a===0)break e;d=0;do S=i[s+d++],t.head&&S&&t.length<65536&&(t.head.name+=String.fromCharCode(S));while(S&&d<a);if(t.flags&512&&t.wrap&4&&(t.check=ln(t.check,i,d,s)),a-=d,s+=d,S)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=vm;case vm:if(t.flags&4096){if(a===0)break e;d=0;do S=i[s+d++],t.head&&S&&t.length<65536&&(t.head.comment+=String.fromCharCode(S));while(S&&d<a);if(t.flags&512&&t.wrap&4&&(t.check=ln(t.check,i,d,s)),a-=d,s+=d,S)break e}else t.head&&(t.head.comment=null);t.mode=ym;case ym:if(t.flags&512){for(;u<16;){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}if(t.wrap&4&&l!==(t.check&65535)){n.msg="header crc mismatch",t.mode=Ft;break}l=0,u=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),n.adler=t.check=0,t.mode=Ni;break;case bm:for(;u<32;){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}n.adler=t.check=Fm(l),l=0,u=0,t.mode=fu;case fu:if(t.havedict===0)return n.next_out=o,n.avail_out=c,n.next_in=s,n.avail_in=a,t.hold=l,t.bits=u,Dw;n.adler=t.check=1,t.mode=Ni;case Ni:if(e===Rw||e===$l)break e;case xh:if(t.last){l>>>=u&7,u-=u&7,t.mode=yh;break}for(;u<3;){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}switch(t.last=l&1,l>>>=1,u-=1,l&3){case 0:t.mode=Mm;break;case 1:if(kw(t),t.mode=ql,e===$l){l>>>=2,u-=2;break e}break;case 2:t.mode=Sm;break;case 3:n.msg="invalid block type",t.mode=Ft}l>>>=2,u-=2;break;case Mm:for(l>>>=u&7,u-=u&7;u<32;){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}if((l&65535)!==(l>>>16^65535)){n.msg="invalid stored block lengths",t.mode=Ft;break}if(t.length=l&65535,l=0,u=0,t.mode=vh,e===$l)break e;case vh:t.mode=wm;case wm:if(d=t.length,d){if(d>a&&(d=a),d>c&&(d=c),d===0)break e;r.set(i.subarray(s,s+d),o),a-=d,s+=d,c-=d,o+=d,t.length-=d;break}t.mode=Ni;break;case Sm:for(;u<14;){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}if(t.nlen=(l&31)+257,l>>>=5,u-=5,t.ndist=(l&31)+1,l>>>=5,u-=5,t.ncode=(l&15)+4,l>>>=4,u-=4,t.nlen>286||t.ndist>30){n.msg="too many length or distance symbols",t.mode=Ft;break}t.have=0,t.mode=Em;case Em:for(;t.have<t.ncode;){for(;u<3;){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}t.lens[U[t.have++]]=l&7,l>>>=3,u-=3}for(;t.have<19;)t.lens[U[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,T={bits:t.lenbits},w=Ca(Cw,t.lens,0,19,t.lencode,0,t.work,T),t.lenbits=T.bits,w){n.msg="invalid code lengths set",t.mode=Ft;break}t.have=0,t.mode=Tm;case Tm:for(;t.have<t.nlen+t.ndist;){for(;m=t.lencode[l&(1<<t.lenbits)-1],x=m>>>24,_=m>>>16&255,y=m&65535,!(x<=u);){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}if(y<16)l>>>=x,u-=x,t.lens[t.have++]=y;else{if(y===16){for(D=x+2;u<D;){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}if(l>>>=x,u-=x,t.have===0){n.msg="invalid bit length repeat",t.mode=Ft;break}S=t.lens[t.have-1],d=3+(l&3),l>>>=2,u-=2}else if(y===17){for(D=x+3;u<D;){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}l>>>=x,u-=x,S=0,d=3+(l&7),l>>>=3,u-=3}else{for(D=x+7;u<D;){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}l>>>=x,u-=x,S=0,d=11+(l&127),l>>>=7,u-=7}if(t.have+d>t.nlen+t.ndist){n.msg="invalid bit length repeat",t.mode=Ft;break}for(;d--;)t.lens[t.have++]=S}}if(t.mode===Ft)break;if(t.lens[256]===0){n.msg="invalid code -- missing end-of-block",t.mode=Ft;break}if(t.lenbits=9,T={bits:t.lenbits},w=Ca(Q0,t.lens,0,t.nlen,t.lencode,0,t.work,T),t.lenbits=T.bits,w){n.msg="invalid literal/lengths set",t.mode=Ft;break}if(t.distbits=6,t.distcode=t.distdyn,T={bits:t.distbits},w=Ca(ex,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,T),t.distbits=T.bits,w){n.msg="invalid distances set",t.mode=Ft;break}if(t.mode=ql,e===$l)break e;case ql:t.mode=Xl;case Xl:if(a>=6&&c>=258){n.next_out=o,n.avail_out=c,n.next_in=s,n.avail_in=a,t.hold=l,t.bits=u,ww(n,f),o=n.next_out,r=n.output,c=n.avail_out,s=n.next_in,i=n.input,a=n.avail_in,l=t.hold,u=t.bits,t.mode===Ni&&(t.back=-1);break}for(t.back=0;m=t.lencode[l&(1<<t.lenbits)-1],x=m>>>24,_=m>>>16&255,y=m&65535,!(x<=u);){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}if(_&&!(_&240)){for(v=x,b=_,M=y;m=t.lencode[M+((l&(1<<v+b)-1)>>v)],x=m>>>24,_=m>>>16&255,y=m&65535,!(v+x<=u);){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}l>>>=v,u-=v,t.back+=v}if(l>>>=x,u-=x,t.back+=x,t.length=y,_===0){t.mode=Pm;break}if(_&32){t.back=-1,t.mode=Ni;break}if(_&64){n.msg="invalid literal/length code",t.mode=Ft;break}t.extra=_&15,t.mode=Am;case Am:if(t.extra){for(D=t.extra;u<D;){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}t.length+=l&(1<<t.extra)-1,l>>>=t.extra,u-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=Lm;case Lm:for(;m=t.distcode[l&(1<<t.distbits)-1],x=m>>>24,_=m>>>16&255,y=m&65535,!(x<=u);){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}if(!(_&240)){for(v=x,b=_,M=y;m=t.distcode[M+((l&(1<<v+b)-1)>>v)],x=m>>>24,_=m>>>16&255,y=m&65535,!(v+x<=u);){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}l>>>=v,u-=v,t.back+=v}if(l>>>=x,u-=x,t.back+=x,_&64){n.msg="invalid distance code",t.mode=Ft;break}t.offset=y,t.extra=_&15,t.mode=Cm;case Cm:if(t.extra){for(D=t.extra;u<D;){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}t.offset+=l&(1<<t.extra)-1,l>>>=t.extra,u-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){n.msg="invalid distance too far back",t.mode=Ft;break}t.mode=Rm;case Rm:if(c===0)break e;if(d=f-c,t.offset>d){if(d=t.offset-d,d>t.whave&&t.sane){n.msg="invalid distance too far back",t.mode=Ft;break}d>t.wnext?(d-=t.wnext,g=t.wsize-d):g=t.wnext-d,d>t.length&&(d=t.length),p=t.window}else p=r,g=o-t.offset,d=t.length;d>c&&(d=c),c-=d,t.length-=d;do r[o++]=p[g++];while(--d);t.length===0&&(t.mode=Xl);break;case Pm:if(c===0)break e;r[o++]=t.length,c--,t.mode=Xl;break;case yh:if(t.wrap){for(;u<32;){if(a===0)break e;a--,l|=i[s++]<<u,u+=8}if(f-=c,n.total_out+=f,t.total+=f,t.wrap&4&&f&&(n.adler=t.check=t.flags?ln(t.check,r,f,o-f):Ba(t.check,r,f,o-f)),f=c,t.wrap&4&&(t.flags?l:Fm(l))!==t.check){n.msg="incorrect data check",t.mode=Ft;break}l=0,u=0}t.mode=Dm;case Dm:if(t.wrap&&t.flags){for(;u<32;){if(a===0)break e;a--,l+=i[s++]<<u,u+=8}if(t.wrap&4&&l!==(t.total&4294967295)){n.msg="incorrect length check",t.mode=Ft;break}l=0,u=0}t.mode=Im;case Im:w=Pw;break e;case Ft:w=tx;break e;case ix:return nx;case rx:default:return ti}return n.next_out=o,n.avail_out=c,n.next_in=s,n.avail_in=a,t.hold=l,t.bits=u,(t.wsize||f!==n.avail_out&&t.mode<Ft&&(t.mode<yh||e!==hm))&&cx(n,n.output,n.next_out,f-n.avail_out),h-=n.avail_in,f-=n.avail_out,n.total_in+=h,n.total_out+=f,t.total+=f,t.wrap&4&&f&&(n.adler=t.check=t.flags?ln(t.check,r,f,n.next_out-f):Ba(t.check,r,f,n.next_out-f)),n.data_type=t.bits+(t.last?64:0)+(t.mode===Ni?128:0)+(t.mode===ql||t.mode===vh?256:0),(h===0&&f===0||e===hm)&&w===ds&&(w=Iw),w},Hw=n=>{if(Es(n))return ti;let e=n.state;return e.window&&(e.window=null),n.state=null,ds},Vw=(n,e)=>{if(Es(n))return ti;const t=n.state;return t.wrap&2?(t.head=e,e.done=!1,ds):ti},Ww=(n,e)=>{const t=e.length;let i,r,s;return Es(n)||(i=n.state,i.wrap!==0&&i.mode!==fu)?ti:i.mode===fu&&(r=1,r=Ba(r,e,t,0),r!==i.check)?tx:(s=cx(n,e,t,t),s?(i.mode=ix,nx):(i.havedict=1,ds))};var $w=ox,qw=ax,Xw=sx,Zw=Uw,Yw=lx,jw=Gw,Jw=Hw,Kw=Vw,Qw=Ww,e1="pako inflate (from Nodeca project)",Xi={inflateReset:$w,inflateReset2:qw,inflateResetKeep:Xw,inflateInit:Zw,inflateInit2:Yw,inflate:jw,inflateEnd:Jw,inflateGetHeader:Kw,inflateSetDictionary:Qw,inflateInfo:e1};function t1(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var n1=t1;const ux=Object.prototype.toString,{Z_NO_FLUSH:i1,Z_FINISH:r1,Z_OK:Ga,Z_STREAM_END:wh,Z_NEED_DICT:Sh,Z_STREAM_ERROR:s1,Z_DATA_ERROR:zm,Z_MEM_ERROR:o1}=Ss;function Sl(n){this.options=Uu.assign({chunkSize:1024*64,windowBits:15,to:""},n||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(n&&n.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15||(e.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new J0,this.strm.avail_out=0;let t=Xi.inflateInit2(this.strm,e.windowBits);if(t!==Ga)throw new Error(hs[t]);if(this.header=new n1,Xi.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=ka.string2buf(e.dictionary):ux.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=Xi.inflateSetDictionary(this.strm,e.dictionary),t!==Ga)))throw new Error(hs[t])}Sl.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize,r=this.options.dictionary;let s,o,a;if(this.ended)return!1;for(e===~~e?o=e:o=e===!0?r1:i1,ux.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),s=Xi.inflate(t,o),s===Sh&&r&&(s=Xi.inflateSetDictionary(t,r),s===Ga?s=Xi.inflate(t,o):s===zm&&(s=Sh));t.avail_in>0&&s===wh&&t.state.wrap>0&&n[t.next_in]!==0;)Xi.inflateReset(t),s=Xi.inflate(t,o);switch(s){case s1:case zm:case Sh:case o1:return this.onEnd(s),this.ended=!0,!1}if(a=t.avail_out,t.next_out&&(t.avail_out===0||s===wh))if(this.options.to==="string"){let c=ka.utf8border(t.output,t.next_out),l=t.next_out-c,u=ka.buf2string(t.output,c);t.next_out=l,t.avail_out=i-l,l&&t.output.set(t.output.subarray(c,c+l),0),this.onData(u)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out));if(!(s===Ga&&a===0)){if(s===wh)return s=Xi.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(t.avail_in===0)break}}return!0};Sl.prototype.onData=function(n){this.chunks.push(n)};Sl.prototype.onEnd=function(n){n===Ga&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=Uu.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function Gd(n,e){const t=new Sl(e);if(t.push(n),t.err)throw t.msg||hs[t.err];return t.result}function a1(n,e){return e=e||{},e.raw=!0,Gd(n,e)}var l1=Sl,c1=Gd,u1=a1,h1=Gd,f1=Ss,d1={Inflate:l1,inflate:c1,inflateRaw:u1,ungzip:h1,constants:f1};const{Deflate:p1,deflate:m1,deflateRaw:g1,gzip:_1}=bw,{Inflate:x1,inflate:v1,inflateRaw:y1,ungzip:b1}=d1;var M1=p1,w1=m1,S1=g1,E1=_1,T1=x1,A1=v1,L1=y1,C1=b1,R1=Ss,P1={Deflate:M1,deflate:w1,deflateRaw:S1,gzip:E1,Inflate:T1,inflate:A1,inflateRaw:L1,ungzip:C1,constants:R1},go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function D1(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function i(){if(this instanceof i){var r=[null];r.push.apply(r,arguments);var s=Function.bind.apply(e,r);return new s}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}function Zl(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Qf={},I1={get exports(){return Qf},set exports(n){Qf=n}};/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/(function(n,e){(function(t){n.exports=t()})(function(){return function t(i,r,s){function o(l,u){if(!r[l]){if(!i[l]){var h=typeof Zl=="function"&&Zl;if(!u&&h)return h(l,!0);if(a)return a(l,!0);var f=new Error("Cannot find module '"+l+"'");throw f.code="MODULE_NOT_FOUND",f}var d=r[l]={exports:{}};i[l][0].call(d.exports,function(g){var p=i[l][1][g];return o(p||g)},d,d.exports,t,i,r,s)}return r[l].exports}for(var a=typeof Zl=="function"&&Zl,c=0;c<s.length;c++)o(s[c]);return o}({1:[function(t,i,r){(function(s){var o=s.MutationObserver||s.WebKitMutationObserver,a;if(o){var c=0,l=new o(g),u=s.document.createTextNode("");l.observe(u,{characterData:!0}),a=function(){u.data=c=++c%2}}else if(!s.setImmediate&&typeof s.MessageChannel<"u"){var h=new s.MessageChannel;h.port1.onmessage=g,a=function(){h.port2.postMessage(0)}}else"document"in s&&"onreadystatechange"in s.document.createElement("script")?a=function(){var m=s.document.createElement("script");m.onreadystatechange=function(){g(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},s.document.documentElement.appendChild(m)}:a=function(){setTimeout(g,0)};var f,d=[];function g(){f=!0;for(var m,x,_=d.length;_;){for(x=d,d=[],m=-1;++m<_;)x[m]();_=d.length}f=!1}i.exports=p;function p(m){d.push(m)===1&&!f&&a()}}).call(this,typeof go<"u"?go:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(t,i,r){var s=t(1);function o(){}var a={},c=["REJECTED"],l=["FULFILLED"],u=["PENDING"];i.exports=h;function h(b){if(typeof b!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,b!==o&&p(this,b)}h.prototype.catch=function(b){return this.then(null,b)},h.prototype.then=function(b,M){if(typeof b!="function"&&this.state===l||typeof M!="function"&&this.state===c)return this;var S=new this.constructor(o);if(this.state!==u){var w=this.state===l?b:M;d(S,w,this.outcome)}else this.queue.push(new f(S,b,M));return S};function f(b,M,S){this.promise=b,typeof M=="function"&&(this.onFulfilled=M,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}f.prototype.callFulfilled=function(b){a.resolve(this.promise,b)},f.prototype.otherCallFulfilled=function(b){d(this.promise,this.onFulfilled,b)},f.prototype.callRejected=function(b){a.reject(this.promise,b)},f.prototype.otherCallRejected=function(b){d(this.promise,this.onRejected,b)};function d(b,M,S){s(function(){var w;try{w=M(S)}catch(E){return a.reject(b,E)}w===b?a.reject(b,new TypeError("Cannot resolve promise with itself")):a.resolve(b,w)})}a.resolve=function(b,M){var S=m(g,M);if(S.status==="error")return a.reject(b,S.value);var w=S.value;if(w)p(b,w);else{b.state=l,b.outcome=M;for(var E=-1,T=b.queue.length;++E<T;)b.queue[E].callFulfilled(M)}return b},a.reject=function(b,M){b.state=c,b.outcome=M;for(var S=-1,w=b.queue.length;++S<w;)b.queue[S].callRejected(M);return b};function g(b){var M=b&&b.then;if(b&&(typeof b=="object"||typeof b=="function")&&typeof M=="function")return function(){M.apply(b,arguments)}}function p(b,M){var S=!1;function w(U){S||(S=!0,a.reject(b,U))}function E(U){S||(S=!0,a.resolve(b,U))}function T(){M(E,w)}var D=m(T);D.status==="error"&&w(D.value)}function m(b,M){var S={};try{S.value=b(M),S.status="success"}catch(w){S.status="error",S.value=w}return S}h.resolve=x;function x(b){return b instanceof this?b:a.resolve(new this(o),b)}h.reject=_;function _(b){var M=new this(o);return a.reject(M,b)}h.all=y;function y(b){var M=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=b.length,w=!1;if(!S)return this.resolve([]);for(var E=new Array(S),T=0,D=-1,U=new this(o);++D<S;)F(b[D],D);return U;function F(L,B){M.resolve(L).then(G,function(Z){w||(w=!0,a.reject(U,Z))});function G(Z){E[B]=Z,++T===S&&!w&&(w=!0,a.resolve(U,E))}}}h.race=v;function v(b){var M=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=b.length,w=!1;if(!S)return this.resolve([]);for(var E=-1,T=new this(o);++E<S;)D(b[E]);return T;function D(U){M.resolve(U).then(function(F){w||(w=!0,a.resolve(T,F))},function(F){w||(w=!0,a.reject(T,F))})}}},{1:1}],3:[function(t,i,r){(function(s){typeof s.Promise!="function"&&(s.Promise=t(2))}).call(this,typeof go<"u"?go:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(t,i,r){var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R};function o(R,H){if(!(R instanceof H))throw new TypeError("Cannot call a class as a function")}function a(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var c=a();function l(){try{if(!c||!c.open)return!1;var R=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),H=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!R||H)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function u(R,H){R=R||[],H=H||{};try{return new Blob(R,H)}catch(q){if(q.name!=="TypeError")throw q;for(var O=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,j=new O,te=0;te<R.length;te+=1)j.append(R[te]);return j.getBlob(H.type)}}typeof Promise>"u"&&t(3);var h=Promise;function f(R,H){H&&R.then(function(O){H(null,O)},function(O){H(O)})}function d(R,H,O){typeof H=="function"&&R.then(H),typeof O=="function"&&R.catch(O)}function g(R){return typeof R!="string"&&(console.warn(R+" used as a key, but it is not a string."),R=String(R)),R}function p(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var m="local-forage-detect-blob-support",x=void 0,_={},y=Object.prototype.toString,v="readonly",b="readwrite";function M(R){for(var H=R.length,O=new ArrayBuffer(H),j=new Uint8Array(O),te=0;te<H;te++)j[te]=R.charCodeAt(te);return O}function S(R){return new h(function(H){var O=R.transaction(m,b),j=u([""]);O.objectStore(m).put(j,"key"),O.onabort=function(te){te.preventDefault(),te.stopPropagation(),H(!1)},O.oncomplete=function(){var te=navigator.userAgent.match(/Chrome\/(\d+)/),q=navigator.userAgent.match(/Edge\//);H(q||!te||parseInt(te[1],10)>=43)}}).catch(function(){return!1})}function w(R){return typeof x=="boolean"?h.resolve(x):S(R).then(function(H){return x=H,x})}function E(R){var H=_[R.name],O={};O.promise=new h(function(j,te){O.resolve=j,O.reject=te}),H.deferredOperations.push(O),H.dbReady?H.dbReady=H.dbReady.then(function(){return O.promise}):H.dbReady=O.promise}function T(R){var H=_[R.name],O=H.deferredOperations.pop();if(O)return O.resolve(),O.promise}function D(R,H){var O=_[R.name],j=O.deferredOperations.pop();if(j)return j.reject(H),j.promise}function U(R,H){return new h(function(O,j){if(_[R.name]=_[R.name]||Q(),R.db)if(H)E(R),R.db.close();else return O(R.db);var te=[R.name];H&&te.push(R.version);var q=c.open.apply(c,te);H&&(q.onupgradeneeded=function(be){var Te=q.result;try{Te.createObjectStore(R.storeName),be.oldVersion<=1&&Te.createObjectStore(m)}catch(Ie){if(Ie.name==="ConstraintError")console.warn('The database "'+R.name+'" has been upgraded from version '+be.oldVersion+" to version "+be.newVersion+', but the storage "'+R.storeName+'" already exists.');else throw Ie}}),q.onerror=function(be){be.preventDefault(),j(q.error)},q.onsuccess=function(){var be=q.result;be.onversionchange=function(Te){Te.target.close()},O(be),T(R)}})}function F(R){return U(R,!1)}function L(R){return U(R,!0)}function B(R,H){if(!R.db)return!0;var O=!R.db.objectStoreNames.contains(R.storeName),j=R.version<R.db.version,te=R.version>R.db.version;if(j&&(R.version!==H&&console.warn('The database "'+R.name+`" can't be downgraded from version `+R.db.version+" to version "+R.version+"."),R.version=R.db.version),te||O){if(O){var q=R.db.version+1;q>R.version&&(R.version=q)}return!0}return!1}function G(R){return new h(function(H,O){var j=new FileReader;j.onerror=O,j.onloadend=function(te){var q=btoa(te.target.result||"");H({__local_forage_encoded_blob:!0,data:q,type:R.type})},j.readAsBinaryString(R)})}function Z(R){var H=M(atob(R.data));return u([H],{type:R.type})}function $(R){return R&&R.__local_forage_encoded_blob}function se(R){var H=this,O=H._initReady().then(function(){var j=_[H._dbInfo.name];if(j&&j.dbReady)return j.dbReady});return d(O,R,R),O}function oe(R){E(R);for(var H=_[R.name],O=H.forages,j=0;j<O.length;j++){var te=O[j];te._dbInfo.db&&(te._dbInfo.db.close(),te._dbInfo.db=null)}return R.db=null,F(R).then(function(q){return R.db=q,B(R)?L(R):q}).then(function(q){R.db=H.db=q;for(var be=0;be<O.length;be++)O[be]._dbInfo.db=q}).catch(function(q){throw D(R,q),q})}function ge(R,H,O,j){j===void 0&&(j=1);try{var te=R.db.transaction(R.storeName,H);O(null,te)}catch(q){if(j>0&&(!R.db||q.name==="InvalidStateError"||q.name==="NotFoundError"))return h.resolve().then(function(){if(!R.db||q.name==="NotFoundError"&&!R.db.objectStoreNames.contains(R.storeName)&&R.version<=R.db.version)return R.db&&(R.version=R.db.version+1),L(R)}).then(function(){return oe(R).then(function(){ge(R,H,O,j-1)})}).catch(O);O(q)}}function Q(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function he(R){var H=this,O={db:null};if(R)for(var j in R)O[j]=R[j];var te=_[O.name];te||(te=Q(),_[O.name]=te),te.forages.push(H),H._initReady||(H._initReady=H.ready,H.ready=se);var q=[];function be(){return h.resolve()}for(var Te=0;Te<te.forages.length;Te++){var Ie=te.forages[Te];Ie!==H&&q.push(Ie._initReady().catch(be))}var Fe=te.forages.slice(0);return h.all(q).then(function(){return O.db=te.db,F(O)}).then(function(ze){return O.db=ze,B(O,H._defaultConfig.version)?L(O):ze}).then(function(ze){O.db=te.db=ze,H._dbInfo=O;for(var Je=0;Je<Fe.length;Je++){var dt=Fe[Je];dt!==H&&(dt._dbInfo.db=O.db,dt._dbInfo.version=O.version)}})}function Se(R,H){var O=this;R=g(R);var j=new h(function(te,q){O.ready().then(function(){ge(O._dbInfo,v,function(be,Te){if(be)return q(be);try{var Ie=Te.objectStore(O._dbInfo.storeName),Fe=Ie.get(R);Fe.onsuccess=function(){var ze=Fe.result;ze===void 0&&(ze=null),$(ze)&&(ze=Z(ze)),te(ze)},Fe.onerror=function(){q(Fe.error)}}catch(ze){q(ze)}})}).catch(q)});return f(j,H),j}function K(R,H){var O=this,j=new h(function(te,q){O.ready().then(function(){ge(O._dbInfo,v,function(be,Te){if(be)return q(be);try{var Ie=Te.objectStore(O._dbInfo.storeName),Fe=Ie.openCursor(),ze=1;Fe.onsuccess=function(){var Je=Fe.result;if(Je){var dt=Je.value;$(dt)&&(dt=Z(dt));var yt=R(dt,Je.key,ze++);yt!==void 0?te(yt):Je.continue()}else te()},Fe.onerror=function(){q(Fe.error)}}catch(Je){q(Je)}})}).catch(q)});return f(j,H),j}function ne(R,H,O){var j=this;R=g(R);var te=new h(function(q,be){var Te;j.ready().then(function(){return Te=j._dbInfo,y.call(H)==="[object Blob]"?w(Te.db).then(function(Ie){return Ie?H:G(H)}):H}).then(function(Ie){ge(j._dbInfo,b,function(Fe,ze){if(Fe)return be(Fe);try{var Je=ze.objectStore(j._dbInfo.storeName);Ie===null&&(Ie=void 0);var dt=Je.put(Ie,R);ze.oncomplete=function(){Ie===void 0&&(Ie=null),q(Ie)},ze.onabort=ze.onerror=function(){var yt=dt.error?dt.error:dt.transaction.error;be(yt)}}catch(yt){be(yt)}})}).catch(be)});return f(te,O),te}function Ne(R,H){var O=this;R=g(R);var j=new h(function(te,q){O.ready().then(function(){ge(O._dbInfo,b,function(be,Te){if(be)return q(be);try{var Ie=Te.objectStore(O._dbInfo.storeName),Fe=Ie.delete(R);Te.oncomplete=function(){te()},Te.onerror=function(){q(Fe.error)},Te.onabort=function(){var ze=Fe.error?Fe.error:Fe.transaction.error;q(ze)}}catch(ze){q(ze)}})}).catch(q)});return f(j,H),j}function Re(R){var H=this,O=new h(function(j,te){H.ready().then(function(){ge(H._dbInfo,b,function(q,be){if(q)return te(q);try{var Te=be.objectStore(H._dbInfo.storeName),Ie=Te.clear();be.oncomplete=function(){j()},be.onabort=be.onerror=function(){var Fe=Ie.error?Ie.error:Ie.transaction.error;te(Fe)}}catch(Fe){te(Fe)}})}).catch(te)});return f(O,R),O}function Pe(R){var H=this,O=new h(function(j,te){H.ready().then(function(){ge(H._dbInfo,v,function(q,be){if(q)return te(q);try{var Te=be.objectStore(H._dbInfo.storeName),Ie=Te.count();Ie.onsuccess=function(){j(Ie.result)},Ie.onerror=function(){te(Ie.error)}}catch(Fe){te(Fe)}})}).catch(te)});return f(O,R),O}function Le(R,H){var O=this,j=new h(function(te,q){if(R<0){te(null);return}O.ready().then(function(){ge(O._dbInfo,v,function(be,Te){if(be)return q(be);try{var Ie=Te.objectStore(O._dbInfo.storeName),Fe=!1,ze=Ie.openKeyCursor();ze.onsuccess=function(){var Je=ze.result;if(!Je){te(null);return}R===0||Fe?te(Je.key):(Fe=!0,Je.advance(R))},ze.onerror=function(){q(ze.error)}}catch(Je){q(Je)}})}).catch(q)});return f(j,H),j}function $e(R){var H=this,O=new h(function(j,te){H.ready().then(function(){ge(H._dbInfo,v,function(q,be){if(q)return te(q);try{var Te=be.objectStore(H._dbInfo.storeName),Ie=Te.openKeyCursor(),Fe=[];Ie.onsuccess=function(){var ze=Ie.result;if(!ze){j(Fe);return}Fe.push(ze.key),ze.continue()},Ie.onerror=function(){te(Ie.error)}}catch(ze){te(ze)}})}).catch(te)});return f(O,R),O}function pe(R,H){H=p.apply(this,arguments);var O=this.config();R=typeof R!="function"&&R||{},R.name||(R.name=R.name||O.name,R.storeName=R.storeName||O.storeName);var j=this,te;if(!R.name)te=h.reject("Invalid arguments");else{var q=R.name===O.name&&j._dbInfo.db,be=q?h.resolve(j._dbInfo.db):F(R).then(function(Te){var Ie=_[R.name],Fe=Ie.forages;Ie.db=Te;for(var ze=0;ze<Fe.length;ze++)Fe[ze]._dbInfo.db=Te;return Te});R.storeName?te=be.then(function(Te){if(Te.objectStoreNames.contains(R.storeName)){var Ie=Te.version+1;E(R);var Fe=_[R.name],ze=Fe.forages;Te.close();for(var Je=0;Je<ze.length;Je++){var dt=ze[Je];dt._dbInfo.db=null,dt._dbInfo.version=Ie}var yt=new h(function(wt,Xt){var Wt=c.open(R.name,Ie);Wt.onerror=function(Yn){var ta=Wt.result;ta.close(),Xt(Yn)},Wt.onupgradeneeded=function(){var Yn=Wt.result;Yn.deleteObjectStore(R.storeName)},Wt.onsuccess=function(){var Yn=Wt.result;Yn.close(),wt(Yn)}});return yt.then(function(wt){Fe.db=wt;for(var Xt=0;Xt<ze.length;Xt++){var Wt=ze[Xt];Wt._dbInfo.db=wt,T(Wt._dbInfo)}}).catch(function(wt){throw(D(R,wt)||h.resolve()).catch(function(){}),wt})}}):te=be.then(function(Te){E(R);var Ie=_[R.name],Fe=Ie.forages;Te.close();for(var ze=0;ze<Fe.length;ze++){var Je=Fe[ze];Je._dbInfo.db=null}var dt=new h(function(yt,wt){var Xt=c.deleteDatabase(R.name);Xt.onerror=function(){var Wt=Xt.result;Wt&&Wt.close(),wt(Xt.error)},Xt.onblocked=function(){console.warn('dropInstance blocked for database "'+R.name+'" until all open connections are closed')},Xt.onsuccess=function(){var Wt=Xt.result;Wt&&Wt.close(),yt(Wt)}});return dt.then(function(yt){Ie.db=yt;for(var wt=0;wt<Fe.length;wt++){var Xt=Fe[wt];T(Xt._dbInfo)}}).catch(function(yt){throw(D(R,yt)||h.resolve()).catch(function(){}),yt})})}return f(te,H),te}var ye={_driver:"asyncStorage",_initStorage:he,_support:l(),iterate:K,getItem:Se,setItem:ne,removeItem:Ne,clear:Re,length:Pe,key:Le,keys:$e,dropInstance:pe};function De(){return typeof openDatabase=="function"}var Ve="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Oe="~~local_forage_type~",k=/^~~local_forage_type~([^~]+)~/,z="__lfsc__:",me=z.length,Me="arbf",V="blob",C="si08",A="ui08",Y="uic8",ee="si16",fe="si32",xe="ur16",we="ui32",ve="fl32",re="fl64",We=me+Me.length,ke=Object.prototype.toString;function it(R){var H=R.length*.75,O=R.length,j,te=0,q,be,Te,Ie;R[R.length-1]==="="&&(H--,R[R.length-2]==="="&&H--);var Fe=new ArrayBuffer(H),ze=new Uint8Array(Fe);for(j=0;j<O;j+=4)q=Ve.indexOf(R[j]),be=Ve.indexOf(R[j+1]),Te=Ve.indexOf(R[j+2]),Ie=Ve.indexOf(R[j+3]),ze[te++]=q<<2|be>>4,ze[te++]=(be&15)<<4|Te>>2,ze[te++]=(Te&3)<<6|Ie&63;return Fe}function et(R){var H=new Uint8Array(R),O="",j;for(j=0;j<H.length;j+=3)O+=Ve[H[j]>>2],O+=Ve[(H[j]&3)<<4|H[j+1]>>4],O+=Ve[(H[j+1]&15)<<2|H[j+2]>>6],O+=Ve[H[j+2]&63];return H.length%3===2?O=O.substring(0,O.length-1)+"=":H.length%3===1&&(O=O.substring(0,O.length-2)+"=="),O}function tt(R,H){var O="";if(R&&(O=ke.call(R)),R&&(O==="[object ArrayBuffer]"||R.buffer&&ke.call(R.buffer)==="[object ArrayBuffer]")){var j,te=z;R instanceof ArrayBuffer?(j=R,te+=Me):(j=R.buffer,O==="[object Int8Array]"?te+=C:O==="[object Uint8Array]"?te+=A:O==="[object Uint8ClampedArray]"?te+=Y:O==="[object Int16Array]"?te+=ee:O==="[object Uint16Array]"?te+=xe:O==="[object Int32Array]"?te+=fe:O==="[object Uint32Array]"?te+=we:O==="[object Float32Array]"?te+=ve:O==="[object Float64Array]"?te+=re:H(new Error("Failed to get type for BinaryArray"))),H(te+et(j))}else if(O==="[object Blob]"){var q=new FileReader;q.onload=function(){var be=Oe+R.type+"~"+et(this.result);H(z+V+be)},q.readAsArrayBuffer(R)}else try{H(JSON.stringify(R))}catch(be){console.error("Couldn't convert value into a JSON string: ",R),H(null,be)}}function mt(R){if(R.substring(0,me)!==z)return JSON.parse(R);var H=R.substring(We),O=R.substring(me,We),j;if(O===V&&k.test(H)){var te=H.match(k);j=te[1],H=H.substring(te[0].length)}var q=it(H);switch(O){case Me:return q;case V:return u([q],{type:j});case C:return new Int8Array(q);case A:return new Uint8Array(q);case Y:return new Uint8ClampedArray(q);case ee:return new Int16Array(q);case xe:return new Uint16Array(q);case fe:return new Int32Array(q);case we:return new Uint32Array(q);case ve:return new Float32Array(q);case re:return new Float64Array(q);default:throw new Error("Unkown type: "+O)}}var Mt={serialize:tt,deserialize:mt,stringToBuffer:it,bufferToString:et};function Lt(R,H,O,j){R.executeSql("CREATE TABLE IF NOT EXISTS "+H.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],O,j)}function X(R){var H=this,O={db:null};if(R)for(var j in R)O[j]=typeof R[j]!="string"?R[j].toString():R[j];var te=new h(function(q,be){try{O.db=openDatabase(O.name,String(O.version),O.description,O.size)}catch(Te){return be(Te)}O.db.transaction(function(Te){Lt(Te,O,function(){H._dbInfo=O,q()},function(Ie,Fe){be(Fe)})},be)});return O.serializer=Mt,te}function de(R,H,O,j,te,q){R.executeSql(O,j,te,function(be,Te){Te.code===Te.SYNTAX_ERR?be.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[H.storeName],function(Ie,Fe){Fe.rows.length?q(Ie,Te):Lt(Ie,H,function(){Ie.executeSql(O,j,te,q)},q)},q):q(be,Te)},q)}function Ce(R,H){var O=this;R=g(R);var j=new h(function(te,q){O.ready().then(function(){var be=O._dbInfo;be.db.transaction(function(Te){de(Te,be,"SELECT * FROM "+be.storeName+" WHERE key = ? LIMIT 1",[R],function(Ie,Fe){var ze=Fe.rows.length?Fe.rows.item(0).value:null;ze&&(ze=be.serializer.deserialize(ze)),te(ze)},function(Ie,Fe){q(Fe)})})}).catch(q)});return f(j,H),j}function qe(R,H){var O=this,j=new h(function(te,q){O.ready().then(function(){var be=O._dbInfo;be.db.transaction(function(Te){de(Te,be,"SELECT * FROM "+be.storeName,[],function(Ie,Fe){for(var ze=Fe.rows,Je=ze.length,dt=0;dt<Je;dt++){var yt=ze.item(dt),wt=yt.value;if(wt&&(wt=be.serializer.deserialize(wt)),wt=R(wt,yt.key,dt+1),wt!==void 0){te(wt);return}}te()},function(Ie,Fe){q(Fe)})})}).catch(q)});return f(j,H),j}function Ye(R,H,O,j){var te=this;R=g(R);var q=new h(function(be,Te){te.ready().then(function(){H===void 0&&(H=null);var Ie=H,Fe=te._dbInfo;Fe.serializer.serialize(H,function(ze,Je){Je?Te(Je):Fe.db.transaction(function(dt){de(dt,Fe,"INSERT OR REPLACE INTO "+Fe.storeName+" (key, value) VALUES (?, ?)",[R,ze],function(){be(Ie)},function(yt,wt){Te(wt)})},function(dt){if(dt.code===dt.QUOTA_ERR){if(j>0){be(Ye.apply(te,[R,Ie,O,j-1]));return}Te(dt)}})})}).catch(Te)});return f(q,O),q}function gt(R,H,O){return Ye.apply(this,[R,H,O,1])}function zt(R,H){var O=this;R=g(R);var j=new h(function(te,q){O.ready().then(function(){var be=O._dbInfo;be.db.transaction(function(Te){de(Te,be,"DELETE FROM "+be.storeName+" WHERE key = ?",[R],function(){te()},function(Ie,Fe){q(Fe)})})}).catch(q)});return f(j,H),j}function Jt(R){var H=this,O=new h(function(j,te){H.ready().then(function(){var q=H._dbInfo;q.db.transaction(function(be){de(be,q,"DELETE FROM "+q.storeName,[],function(){j()},function(Te,Ie){te(Ie)})})}).catch(te)});return f(O,R),O}function Rn(R){var H=this,O=new h(function(j,te){H.ready().then(function(){var q=H._dbInfo;q.db.transaction(function(be){de(be,q,"SELECT COUNT(key) as c FROM "+q.storeName,[],function(Te,Ie){var Fe=Ie.rows.item(0).c;j(Fe)},function(Te,Ie){te(Ie)})})}).catch(te)});return f(O,R),O}function N(R,H){var O=this,j=new h(function(te,q){O.ready().then(function(){var be=O._dbInfo;be.db.transaction(function(Te){de(Te,be,"SELECT key FROM "+be.storeName+" WHERE id = ? LIMIT 1",[R+1],function(Ie,Fe){var ze=Fe.rows.length?Fe.rows.item(0).key:null;te(ze)},function(Ie,Fe){q(Fe)})})}).catch(q)});return f(j,H),j}function ue(R){var H=this,O=new h(function(j,te){H.ready().then(function(){var q=H._dbInfo;q.db.transaction(function(be){de(be,q,"SELECT key FROM "+q.storeName,[],function(Te,Ie){for(var Fe=[],ze=0;ze<Ie.rows.length;ze++)Fe.push(Ie.rows.item(ze).key);j(Fe)},function(Te,Ie){te(Ie)})})}).catch(te)});return f(O,R),O}function ae(R){return new h(function(H,O){R.transaction(function(j){j.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(te,q){for(var be=[],Te=0;Te<q.rows.length;Te++)be.push(q.rows.item(Te).name);H({db:R,storeNames:be})},function(te,q){O(q)})},function(j){O(j)})})}function _e(R,H){H=p.apply(this,arguments);var O=this.config();R=typeof R!="function"&&R||{},R.name||(R.name=R.name||O.name,R.storeName=R.storeName||O.storeName);var j=this,te;return R.name?te=new h(function(q){var be;R.name===O.name?be=j._dbInfo.db:be=openDatabase(R.name,"","",0),R.storeName?q({db:be,storeNames:[R.storeName]}):q(ae(be))}).then(function(q){return new h(function(be,Te){q.db.transaction(function(Ie){function Fe(yt){return new h(function(wt,Xt){Ie.executeSql("DROP TABLE IF EXISTS "+yt,[],function(){wt()},function(Wt,Yn){Xt(Yn)})})}for(var ze=[],Je=0,dt=q.storeNames.length;Je<dt;Je++)ze.push(Fe(q.storeNames[Je]));h.all(ze).then(function(){be()}).catch(function(yt){Te(yt)})},function(Ie){Te(Ie)})})}):te=h.reject("Invalid arguments"),f(te,H),te}var Be={_driver:"webSQLStorage",_initStorage:X,_support:De(),iterate:qe,getItem:Ce,setItem:gt,removeItem:zt,clear:Jt,length:Rn,key:N,keys:ue,dropInstance:_e};function ct(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function P(R,H){var O=R.name+"/";return R.storeName!==H.storeName&&(O+=R.storeName+"/"),O}function W(){var R="_localforage_support_test";try{return localStorage.setItem(R,!0),localStorage.removeItem(R),!1}catch{return!0}}function ie(){return!W()||localStorage.length>0}function J(R){var H=this,O={};if(R)for(var j in R)O[j]=R[j];return O.keyPrefix=P(R,H._defaultConfig),ie()?(H._dbInfo=O,O.serializer=Mt,h.resolve()):h.reject()}function ce(R){var H=this,O=H.ready().then(function(){for(var j=H._dbInfo.keyPrefix,te=localStorage.length-1;te>=0;te--){var q=localStorage.key(te);q.indexOf(j)===0&&localStorage.removeItem(q)}});return f(O,R),O}function Ae(R,H){var O=this;R=g(R);var j=O.ready().then(function(){var te=O._dbInfo,q=localStorage.getItem(te.keyPrefix+R);return q&&(q=te.serializer.deserialize(q)),q});return f(j,H),j}function Ge(R,H){var O=this,j=O.ready().then(function(){for(var te=O._dbInfo,q=te.keyPrefix,be=q.length,Te=localStorage.length,Ie=1,Fe=0;Fe<Te;Fe++){var ze=localStorage.key(Fe);if(ze.indexOf(q)===0){var Je=localStorage.getItem(ze);if(Je&&(Je=te.serializer.deserialize(Je)),Je=R(Je,ze.substring(be),Ie++),Je!==void 0)return Je}}});return f(j,H),j}function rt(R,H){var O=this,j=O.ready().then(function(){var te=O._dbInfo,q;try{q=localStorage.key(R)}catch{q=null}return q&&(q=q.substring(te.keyPrefix.length)),q});return f(j,H),j}function je(R){var H=this,O=H.ready().then(function(){for(var j=H._dbInfo,te=localStorage.length,q=[],be=0;be<te;be++){var Te=localStorage.key(be);Te.indexOf(j.keyPrefix)===0&&q.push(Te.substring(j.keyPrefix.length))}return q});return f(O,R),O}function lt(R){var H=this,O=H.keys().then(function(j){return j.length});return f(O,R),O}function nt(R,H){var O=this;R=g(R);var j=O.ready().then(function(){var te=O._dbInfo;localStorage.removeItem(te.keyPrefix+R)});return f(j,H),j}function ut(R,H,O){var j=this;R=g(R);var te=j.ready().then(function(){H===void 0&&(H=null);var q=H;return new h(function(be,Te){var Ie=j._dbInfo;Ie.serializer.serialize(H,function(Fe,ze){if(ze)Te(ze);else try{localStorage.setItem(Ie.keyPrefix+R,Fe),be(q)}catch(Je){(Je.name==="QuotaExceededError"||Je.name==="NS_ERROR_DOM_QUOTA_REACHED")&&Te(Je),Te(Je)}})})});return f(te,O),te}function _t(R,H){if(H=p.apply(this,arguments),R=typeof R!="function"&&R||{},!R.name){var O=this.config();R.name=R.name||O.name,R.storeName=R.storeName||O.storeName}var j=this,te;return R.name?te=new h(function(q){R.storeName?q(P(R,j._defaultConfig)):q(R.name+"/")}).then(function(q){for(var be=localStorage.length-1;be>=0;be--){var Te=localStorage.key(be);Te.indexOf(q)===0&&localStorage.removeItem(Te)}}):te=h.reject("Invalid arguments"),f(te,H),te}var Vt={_driver:"localStorageWrapper",_initStorage:J,_support:ct(),iterate:Ge,getItem:Ae,setItem:ut,removeItem:nt,clear:ce,length:lt,key:rt,keys:je,dropInstance:_t},sn=function(H,O){return H===O||typeof H=="number"&&typeof O=="number"&&isNaN(H)&&isNaN(O)},yn=function(H,O){for(var j=H.length,te=0;te<j;){if(sn(H[te],O))return!0;te++}return!1},Ot=Array.isArray||function(R){return Object.prototype.toString.call(R)==="[object Array]"},ht={},Ds={},Ct={INDEXEDDB:ye,WEBSQL:Be,LOCALSTORAGE:Vt},Ii=[Ct.INDEXEDDB._driver,Ct.WEBSQL._driver,Ct.LOCALSTORAGE._driver],Br=["dropInstance"],Fi=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Br),Qo={description:"",driver:Ii.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function fn(R,H){R[H]=function(){var O=arguments;return R.ready().then(function(){return R[H].apply(R,O)})}}function ri(){for(var R=1;R<arguments.length;R++){var H=arguments[R];if(H)for(var O in H)H.hasOwnProperty(O)&&(Ot(H[O])?arguments[0][O]=H[O].slice():arguments[0][O]=H[O])}return arguments[0]}var ea=function(){function R(H){o(this,R);for(var O in Ct)if(Ct.hasOwnProperty(O)){var j=Ct[O],te=j._driver;this[O]=te,ht[te]||this.defineDriver(j)}this._defaultConfig=ri({},Qo),this._config=ri({},this._defaultConfig,H),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return R.prototype.config=function(O){if((typeof O>"u"?"undefined":s(O))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var j in O){if(j==="storeName"&&(O[j]=O[j].replace(/\W/g,"_")),j==="version"&&typeof O[j]!="number")return new Error("Database version must be a number.");this._config[j]=O[j]}return"driver"in O&&O.driver?this.setDriver(this._config.driver):!0}else return typeof O=="string"?this._config[O]:this._config},R.prototype.defineDriver=function(O,j,te){var q=new h(function(be,Te){try{var Ie=O._driver,Fe=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!O._driver){Te(Fe);return}for(var ze=Fi.concat("_initStorage"),Je=0,dt=ze.length;Je<dt;Je++){var yt=ze[Je],wt=!yn(Br,yt);if((wt||O[yt])&&typeof O[yt]!="function"){Te(Fe);return}}var Xt=function(){for(var ta=function(Rb){return function(){var Pb=new Error("Method "+Rb+" is not implemented by the current driver"),jp=h.reject(Pb);return f(jp,arguments[arguments.length-1]),jp}},ch=0,Cb=Br.length;ch<Cb;ch++){var uh=Br[ch];O[uh]||(O[uh]=ta(uh))}};Xt();var Wt=function(ta){ht[Ie]&&console.info("Redefining LocalForage driver: "+Ie),ht[Ie]=O,Ds[Ie]=ta,be()};"_support"in O?O._support&&typeof O._support=="function"?O._support().then(Wt,Te):Wt(!!O._support):Wt(!0)}catch(Yn){Te(Yn)}});return d(q,j,te),q},R.prototype.driver=function(){return this._driver||null},R.prototype.getDriver=function(O,j,te){var q=ht[O]?h.resolve(ht[O]):h.reject(new Error("Driver not found."));return d(q,j,te),q},R.prototype.getSerializer=function(O){var j=h.resolve(Mt);return d(j,O),j},R.prototype.ready=function(O){var j=this,te=j._driverSet.then(function(){return j._ready===null&&(j._ready=j._initDriver()),j._ready});return d(te,O,O),te},R.prototype.setDriver=function(O,j,te){var q=this;Ot(O)||(O=[O]);var be=this._getSupportedDrivers(O);function Te(){q._config.driver=q.driver()}function Ie(Je){return q._extend(Je),Te(),q._ready=q._initStorage(q._config),q._ready}function Fe(Je){return function(){var dt=0;function yt(){for(;dt<Je.length;){var wt=Je[dt];return dt++,q._dbInfo=null,q._ready=null,q.getDriver(wt).then(Ie).catch(yt)}Te();var Xt=new Error("No available storage method found.");return q._driverSet=h.reject(Xt),q._driverSet}return yt()}}var ze=this._driverSet!==null?this._driverSet.catch(function(){return h.resolve()}):h.resolve();return this._driverSet=ze.then(function(){var Je=be[0];return q._dbInfo=null,q._ready=null,q.getDriver(Je).then(function(dt){q._driver=dt._driver,Te(),q._wrapLibraryMethodsWithReady(),q._initDriver=Fe(be)})}).catch(function(){Te();var Je=new Error("No available storage method found.");return q._driverSet=h.reject(Je),q._driverSet}),d(this._driverSet,j,te),this._driverSet},R.prototype.supports=function(O){return!!Ds[O]},R.prototype._extend=function(O){ri(this,O)},R.prototype._getSupportedDrivers=function(O){for(var j=[],te=0,q=O.length;te<q;te++){var be=O[te];this.supports(be)&&j.push(be)}return j},R.prototype._wrapLibraryMethodsWithReady=function(){for(var O=0,j=Fi.length;O<j;O++)fn(this,Fi[O])},R.prototype.createInstance=function(O){return new R(O)},R}(),bn=new ea;i.exports=bn},{3:3}]},{},[4])(4)})})(I1);const F1=Qf;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hd="150",N1=0,Om=1,z1=2,hx=1,O1=2,wa=3,Cr=0,$n=1,_r=2,Sr=0,bo=1,Bm=2,Um=3,km=4,B1=5,po=100,U1=101,k1=102,Gm=103,Hm=104,G1=200,H1=201,V1=202,W1=203,fx=204,dx=205,$1=206,q1=207,X1=208,Z1=209,Y1=210,j1=0,J1=1,K1=2,ed=3,Q1=4,eS=5,tS=6,nS=7,px=0,iS=1,rS=2,Yi=0,sS=1,oS=2,aS=3,lS=4,cS=5,mx=300,Co=301,Ro=302,td=303,nd=304,Gu=306,id=1e3,pi=1001,rd=1002,mn=1003,Vm=1004,Eh=1005,Jn=1006,uS=1007,Ha=1008,ps=1009,hS=1010,fS=1011,gx=1012,dS=1013,rs=1014,xr=1015,Va=1016,pS=1017,mS=1018,Mo=1020,gS=1021,ei=1023,_S=1024,xS=1025,ls=1026,Po=1027,vS=1028,yS=1029,bS=1030,MS=1031,wS=1033,Th=33776,Ah=33777,Lh=33778,Ch=33779,Wm=35840,$m=35841,qm=35842,Xm=35843,SS=36196,Zm=37492,Ym=37496,jm=37808,Jm=37809,Km=37810,Qm=37811,eg=37812,tg=37813,ng=37814,ig=37815,rg=37816,sg=37817,og=37818,ag=37819,lg=37820,cg=37821,Rh=36492,ES=36283,ug=36284,hg=36285,fg=36286,ms=3e3,Pt=3001,TS=3200,AS=3201,LS=0,CS=1,Si="srgb",Wa="srgb-linear",_x="display-p3",Ph=7680,RS=519,dg=35044,pg="300 es",sd=1035;let Go=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}};const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dh=Math.PI/180,mg=180/Math.PI;function Ho(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function Hn(n,e,t){return Math.max(e,Math.min(t,n))}function PS(n,e){return(n%e+e)%e}function Ih(n,e,t){return(1-t)*n+t*e}function gg(n){return(n&n-1)===0&&n!==0}function DS(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function IS(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Yl(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zn(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}let kt=class xx{constructor(e=0,t=0){xx.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wn=class vx{constructor(){vx.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],p=r[0],m=r[3],x=r[6],_=r[1],y=r[4],v=r[7],b=r[2],M=r[5],S=r[8];return s[0]=o*p+a*_+c*b,s[3]=o*m+a*y+c*M,s[6]=o*x+a*v+c*S,s[1]=l*p+u*_+h*b,s[4]=l*m+u*y+h*M,s[7]=l*x+u*v+h*S,s[2]=f*p+d*_+g*b,s[5]=f*m+d*y+g*M,s[8]=f*x+d*v+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,g=t*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(r*l-u*i)*p,e[2]=(a*i-r*o)*p,e[3]=f*p,e[4]=(u*t-r*c)*p,e[5]=(r*s-a*t)*p,e[6]=d*p,e[7]=(i*c-l*t)*p,e[8]=(o*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fh.makeScale(e,t)),this}rotate(e){return this.premultiply(Fh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fh.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const Fh=new Wn;function yx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function du(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}let El=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=p;return}if(h!==p||c!==f||l!==d||u!==g){let m=1-a;const x=c*f+l*d+u*g+h*p,_=x>=0?1:-1,y=1-x*x;if(y>Number.EPSILON){const b=Math.sqrt(y),M=Math.atan2(b,x*_);m=Math.sin(m*M)/b,a=Math.sin(a*M)/b}const v=a*_;if(c=c*m+f*v,l=l*m+d*v,u=u*m+g*v,h=h*m+p*v,m===1-a){const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-a*d,e[t+2]=l*g+u*d+a*f-c*h,e[t+3]=u*g-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),f=c(i/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Hn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},le=class bx{constructor(e=0,t=0,i=0){bx.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_g.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_g.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*i,u=c*i+a*t-s*r,h=c*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=l*c+f*-s+u*-a-h*-o,this.y=u*c+f*-o+h*-s-l*-a,this.z=h*c+f*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nh.copy(this).projectOnVector(e),this.sub(Nh)}reflect(e){return this.sub(Nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Nh=new le,_g=new El;function wo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const FS=new Wn().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),NS=new Wn().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),vr=new le;function zS(n){return n.convertSRGBToLinear(),vr.set(n.r,n.g,n.b).applyMatrix3(NS),n.setRGB(vr.x,vr.y,vr.z)}function OS(n){return vr.set(n.r,n.g,n.b).applyMatrix3(FS),n.setRGB(vr.x,vr.y,vr.z).convertLinearToSRGB()}const BS={[Wa]:n=>n,[Si]:n=>n.convertSRGBToLinear(),[_x]:zS},US={[Wa]:n=>n,[Si]:n=>n.convertLinearToSRGB(),[_x]:OS},Mn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Wa},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=BS[e],r=US[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Ns,Mx=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ns===void 0&&(Ns=du("canvas")),Ns.width=e.width,Ns.height=e.height;const i=Ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=du("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=wo(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wo(t[i]/255)*255):t[i]=wo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};class wx{constructor(e=null){this.isSource=!0,this.uuid=Ho(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Oh(r[o].image)):s.push(Oh(r[o]))}else s=Oh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Oh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kS=0,_i=class ru extends Go{constructor(e=ru.DEFAULT_IMAGE,t=ru.DEFAULT_MAPPING,i=pi,r=pi,s=Jn,o=Ha,a=ei,c=ps,l=ru.DEFAULT_ANISOTROPY,u=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Ho(),this.name="",this.source=new wx(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case id:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case id:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};_i.DEFAULT_IMAGE=null;_i.DEFAULT_MAPPING=mx;_i.DEFAULT_ANISOTROPY=1;let cn=class Sx{constructor(e=0,t=0,i=0,r=1){Sx.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],p=c[2],m=c[6],x=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(d+1)/2,b=(x+1)/2,M=(u+f)/4,S=(h+p)/4,w=(g+m)/4;return y>v&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=M/i,s=S/i):v>b?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=M/r,s=w/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=S/s,r=w/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-p)/_,this.z=(f-u)/_,this.w=Math.acos((l+d+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gs=class extends Go{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new cn(0,0,e,t),this.scissorTest=!1,this.viewport=new cn(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new _i(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Jn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}};class Ex extends _i{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class GS extends _i{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Tl=class{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],f=e[c+2];u<t&&(t=u),h<i&&(i=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),f=e.getZ(c);u<t&&(t=u),h<i&&(i=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ur.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Ur.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ur)}else i.boundingBox===null&&i.computeBoundingBox(),Bh.copy(i.boundingBox),Bh.applyMatrix4(e.matrixWorld),this.union(Bh);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ur),Ur.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),jl.subVectors(this.max,ia),zs.subVectors(e.a,ia),Os.subVectors(e.b,ia),Bs.subVectors(e.c,ia),nr.subVectors(Os,zs),ir.subVectors(Bs,Os),kr.subVectors(zs,Bs);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-kr.z,kr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,kr.z,0,-kr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-kr.y,kr.x,0];return!Uh(t,zs,Os,Bs,jl)||(t=[1,0,0,0,1,0,0,0,1],!Uh(t,zs,Os,Bs,jl))?!1:(Jl.crossVectors(nr,ir),t=[Jl.x,Jl.y,Jl.z],Uh(t,zs,Os,Bs,jl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ur).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ur).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};const zi=[new le,new le,new le,new le,new le,new le,new le,new le],Ur=new le,Bh=new Tl,zs=new le,Os=new le,Bs=new le,nr=new le,ir=new le,kr=new le,ia=new le,jl=new le,Jl=new le,Gr=new le;function Uh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Gr.fromArray(n,s);const a=r.x*Math.abs(Gr.x)+r.y*Math.abs(Gr.y)+r.z*Math.abs(Gr.z),c=e.dot(Gr),l=t.dot(Gr),u=i.dot(Gr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const HS=new Tl,ra=new le,kh=new le;let Hu=class{constructor(e=new le,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):HS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);const t=ra.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ra,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(kh)),this.expandByPoint(ra.copy(e.center).sub(kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Oi=new le,Gh=new le,Kl=new le,rr=new le,Hh=new le,Ql=new le,Vh=new le;let Tx=class{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Gh.copy(e).add(t).multiplyScalar(.5),Kl.copy(t).sub(e).normalize(),rr.copy(this.origin).sub(Gh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Kl),a=rr.dot(this.direction),c=-rr.dot(Kl),l=rr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const p=1/u;h*=p,f*=p,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Gh).addScaledVector(Kl,f),d}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),r=Oi.dot(Oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,i,r,s){Hh.subVectors(t,e),Ql.subVectors(i,e),Vh.crossVectors(Hh,Ql);let o=this.direction.dot(Vh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rr.subVectors(this.origin,e);const c=a*this.direction.dot(Ql.crossVectors(rr,Ql));if(c<0)return null;const l=a*this.direction.dot(Hh.cross(rr));if(l<0||c+l>o)return null;const u=-a*rr.dot(Vh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Nt=class od{constructor(){od.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,c,l,u,h,f,d,g,p,m){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=r,x[1]=s,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=u,x[10]=h,x[14]=f,x[3]=d,x[7]=g,x[11]=p,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new od().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,p=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-p*l,t[9]=-a*c,t[2]=p-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,g=l*u,p=l*h;t[0]=f+p*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=p+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,g=l*u,p=l*h;t[0]=f-p*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=p-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,p=a*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+p,t[1]=c*h,t[5]=p*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,g=a*c,p=a*l;t[0]=c*u,t[4]=p-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-p*h}else if(e.order==="XZY"){const f=o*c,d=o*l,g=a*c,p=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+p,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VS,e,WS)}lookAt(e,t,i){const r=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),sr.crossVectors(i,On),sr.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),sr.crossVectors(i,On)),sr.normalize(),ec.crossVectors(On,sr),r[0]=sr.x,r[4]=ec.x,r[8]=On.x,r[1]=sr.y,r[5]=ec.y,r[9]=On.y,r[2]=sr.z,r[6]=ec.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],p=i[6],m=i[10],x=i[14],_=i[3],y=i[7],v=i[11],b=i[15],M=r[0],S=r[4],w=r[8],E=r[12],T=r[1],D=r[5],U=r[9],F=r[13],L=r[2],B=r[6],G=r[10],Z=r[14],$=r[3],se=r[7],oe=r[11],ge=r[15];return s[0]=o*M+a*T+c*L+l*$,s[4]=o*S+a*D+c*B+l*se,s[8]=o*w+a*U+c*G+l*oe,s[12]=o*E+a*F+c*Z+l*ge,s[1]=u*M+h*T+f*L+d*$,s[5]=u*S+h*D+f*B+d*se,s[9]=u*w+h*U+f*G+d*oe,s[13]=u*E+h*F+f*Z+d*ge,s[2]=g*M+p*T+m*L+x*$,s[6]=g*S+p*D+m*B+x*se,s[10]=g*w+p*U+m*G+x*oe,s[14]=g*E+p*F+m*Z+x*ge,s[3]=_*M+y*T+v*L+b*$,s[7]=_*S+y*D+v*B+b*se,s[11]=_*w+y*U+v*G+b*oe,s[15]=_*E+y*F+v*Z+b*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],p=e[7],m=e[11],x=e[15];return g*(+s*c*h-r*l*h-s*a*f+i*l*f+r*a*d-i*c*d)+p*(+t*c*d-t*l*f+s*o*f-r*o*d+r*l*u-s*c*u)+m*(+t*l*h-t*a*d-s*o*h+i*o*d+s*a*u-i*l*u)+x*(-r*a*u-t*c*h+t*a*f+r*o*h-i*o*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],p=e[13],m=e[14],x=e[15],_=h*m*l-p*f*l+p*c*d-a*m*d-h*c*x+a*f*x,y=g*f*l-u*m*l-g*c*d+o*m*d+u*c*x-o*f*x,v=u*p*l-g*h*l+g*a*d-o*p*d-u*a*x+o*h*x,b=g*h*c-u*p*c-g*a*f+o*p*f+u*a*m-o*h*m,M=t*_+i*y+r*v+s*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/M;return e[0]=_*S,e[1]=(p*f*s-h*m*s-p*r*d+i*m*d+h*r*x-i*f*x)*S,e[2]=(a*m*s-p*c*s+p*r*l-i*m*l-a*r*x+i*c*x)*S,e[3]=(h*c*s-a*f*s-h*r*l+i*f*l+a*r*d-i*c*d)*S,e[4]=y*S,e[5]=(u*m*s-g*f*s+g*r*d-t*m*d-u*r*x+t*f*x)*S,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*x-t*c*x)*S,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*d+t*c*d)*S,e[8]=v*S,e[9]=(g*h*s-u*p*s-g*i*d+t*p*d+u*i*x-t*h*x)*S,e[10]=(o*p*s-g*a*s+g*i*l-t*p*l-o*i*x+t*a*x)*S,e[11]=(u*a*s-o*h*s-u*i*l+t*h*l+o*i*d-t*a*d)*S,e[12]=b*S,e[13]=(u*p*r-g*h*r+g*i*f-t*p*f-u*i*m+t*h*m)*S,e[14]=(g*a*r-o*p*r-g*i*c+t*p*c+o*i*m-t*a*m)*S,e[15]=(o*h*r-u*a*r+u*i*c-t*h*c-o*i*f+t*a*f)*S,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,g=s*h,p=o*u,m=o*h,x=a*h,_=c*l,y=c*u,v=c*h,b=i.x,M=i.y,S=i.z;return r[0]=(1-(p+x))*b,r[1]=(d+v)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(d-v)*M,r[5]=(1-(f+x))*M,r[6]=(m+_)*M,r[7]=0,r[8]=(g+y)*S,r[9]=(m-_)*S,r[10]=(1-(f+p))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Us.set(r[0],r[1],r[2]).length();const o=Us.set(r[4],r[5],r[6]).length(),a=Us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],si.copy(this);const l=1/s,u=1/o,h=1/a;return si.elements[0]*=l,si.elements[1]*=l,si.elements[2]*=l,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=h,si.elements[9]*=h,si.elements[10]*=h,t.setFromRotationMatrix(si),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,c=1/(t-e),l=1/(i-r),u=1/(o-s),h=(t+e)*c,f=(i+r)*l,d=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};const Us=new le,si=new Nt,VS=new le(0,0,0),WS=new le(1,1,1),sr=new le,ec=new le,On=new le,xg=new Nt,vg=new El;let Ax=class Lx{constructor(e=0,t=0,i=0,r=Lx.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Hn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Hn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Hn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Hn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vg.setFromEuler(this),this.setFromQuaternion(vg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ax.DEFAULT_ORDER="XYZ";let Cx=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$S=0;const yg=new le,ks=new El,Bi=new Nt,tc=new le,sa=new le,qS=new le,XS=new El,bg=new le(1,0,0),Mg=new le(0,1,0),wg=new le(0,0,1),ZS={type:"added"},Sg={type:"removed"};let xi=class su extends Go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=su.DEFAULT_UP.clone();const e=new le,t=new Ax,i=new El,r=new le(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Wn}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=su.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=su.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Cx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(bg,e)}rotateY(e){return this.rotateOnAxis(Mg,e)}rotateZ(e){return this.rotateOnAxis(wg,e)}translateOnAxis(e,t){return yg.copy(e).applyQuaternion(this.quaternion),this.position.add(yg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bg,e)}translateY(e){return this.translateOnAxis(Mg,e)}translateZ(e){return this.translateOnAxis(wg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?tc.copy(e):tc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(sa,tc,this.up):Bi.lookAt(tc,sa,this.up),this.quaternion.setFromRotationMatrix(Bi),r&&(Bi.extractRotation(r.matrixWorld),ks.setFromRotationMatrix(Bi),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ZS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Sg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,qS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,XS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}};xi.DEFAULT_UP=new le(0,1,0);xi.DEFAULT_MATRIX_AUTO_UPDATE=!0;xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new le,Ui=new le,Wh=new le,ki=new le,Gs=new le,Hs=new le,Eg=new le,$h=new le,qh=new le,Xh=new le;let Zh=class mo{constructor(e=new le,t=new le,i=new le){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),oi.subVectors(e,t),r.cross(oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){oi.subVectors(r,t),Ui.subVectors(i,t),Wh.subVectors(e,t);const o=oi.dot(oi),a=oi.dot(Ui),c=oi.dot(Wh),l=Ui.dot(Ui),u=Ui.dot(Wh),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ki),ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getUV(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,ki),c.set(0,0),c.addScaledVector(s,ki.x),c.addScaledVector(o,ki.y),c.addScaledVector(a,ki.z),c}static isFrontFacing(e,t,i,r){return oi.subVectors(i,t),Ui.subVectors(e,t),oi.cross(Ui).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),oi.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mo.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mo.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return mo.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return mo.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mo.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Gs.subVectors(r,i),Hs.subVectors(s,i),$h.subVectors(e,i);const c=Gs.dot($h),l=Hs.dot($h);if(c<=0&&l<=0)return t.copy(i);qh.subVectors(e,r);const u=Gs.dot(qh),h=Hs.dot(qh);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Gs,o);Xh.subVectors(e,s);const d=Gs.dot(Xh),g=Hs.dot(Xh);if(g>=0&&d<=g)return t.copy(s);const p=d*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Hs,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Eg.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(Eg,a);const x=1/(m+p+f);return o=p*x,a=f*x,t.copy(i).addScaledVector(Gs,o).addScaledVector(Hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},YS=0,Al=class extends Go{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=bo,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=fx,this.blendDst=dx,this.blendEquation=po,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ed,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=RS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ph,this.stencilZFail=Ph,this.stencilZPass=Ph,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(i.blending=this.blending),this.side!==Cr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};const Rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},nc={h:0,s:0,l:0};function Yh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let St=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Mn.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Mn.workingColorSpace){if(e=PS(e,1),t=Hn(t,0,1),i=Hn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Yh(o,s,e+1/3),this.g=Yh(o,s,e),this.b=Yh(o,s,e-1/3)}return Mn.toWorkingColorSpace(this,r),this}setStyle(e,t=Si){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Mn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Mn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(c,l,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Mn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Mn.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Si){const i=Rx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}copyLinearToSRGB(e){return this.r=zh(e.r),this.g=zh(e.g),this.b=zh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return Mn.fromWorkingColorSpace(_n.copy(this),e),Hn(_n.r*255,0,255)<<16^Hn(_n.g*255,0,255)<<8^Hn(_n.b*255,0,255)<<0}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mn.workingColorSpace){Mn.fromWorkingColorSpace(_n.copy(this),t);const i=_n.r,r=_n.g,s=_n.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Mn.workingColorSpace){return Mn.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Si){Mn.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,i=_n.g,r=_n.b;return e!==Si?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(ai),ai.h+=e,ai.s+=t,ai.l+=i,this.setHSL(ai.h,ai.s,ai.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(nc);const i=Ih(ai.h,nc.h,t),r=Ih(ai.s,nc.s,t),s=Ih(ai.l,nc.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const _n=new St;St.NAMES=Rx;let mr=class extends Al{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=px,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};const Zt=new le,ic=new kt;let Pi=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dg,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ic.fromBufferAttribute(this,t),ic.applyMatrix3(e),this.setXY(t,ic.x,ic.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yl(t,this.array)),t}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yl(t,this.array)),t}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yl(t,this.array)),t}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),i=zn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),i=zn(i,this.array),r=zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),i=zn(i,this.array),r=zn(r,this.array),s=zn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dg&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}},Vd=class extends Pi{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Px=class extends Pi{constructor(e,t,i){super(new Uint32Array(e),t,i)}},In=class extends Pi{constructor(e,t,i){super(new Float32Array(e),t,i)}},jS=0;const jn=new Nt,jh=new xi,Vs=new le,Bn=new Tl,oa=new Tl,on=new le;let Nr=class Dx extends Go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yx(e)?Px:Vd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Wn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,i){return jn.makeTranslation(e,t,i),this.applyMatrix4(jn),this}scale(e,t,i){return jn.makeScale(e,t,i),this.applyMatrix4(jn),this}lookAt(e){return jh.lookAt(e),jh.updateMatrix(),this.applyMatrix4(jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new In(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Bn.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new le,1/0);return}if(e){const i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];oa.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Bn.min,oa.min),Bn.expandByPoint(on),on.addVectors(Bn.max,oa.max),Bn.expandByPoint(on)):(Bn.expandByPoint(oa.min),Bn.expandByPoint(oa.max))}Bn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)on.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(on));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)on.fromBufferAttribute(a,l),c&&(Vs.fromBufferAttribute(e,l),on.add(Vs)),r=Math.max(r,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let T=0;T<a;T++)l[T]=new le,u[T]=new le;const h=new le,f=new le,d=new le,g=new kt,p=new kt,m=new kt,x=new le,_=new le;function y(T,D,U){h.fromArray(r,T*3),f.fromArray(r,D*3),d.fromArray(r,U*3),g.fromArray(o,T*2),p.fromArray(o,D*2),m.fromArray(o,U*2),f.sub(h),d.sub(h),p.sub(g),m.sub(g);const F=1/(p.x*m.y-m.x*p.y);isFinite(F)&&(x.copy(f).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(F),_.copy(d).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(F),l[T].add(x),l[D].add(x),l[U].add(x),u[T].add(_),u[D].add(_),u[U].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let T=0,D=v.length;T<D;++T){const U=v[T],F=U.start,L=U.count;for(let B=F,G=F+L;B<G;B+=3)y(i[B+0],i[B+1],i[B+2])}const b=new le,M=new le,S=new le,w=new le;function E(T){S.fromArray(s,T*3),w.copy(S);const D=l[T];b.copy(D),b.sub(S.multiplyScalar(S.dot(D))).normalize(),M.crossVectors(w,D);const F=M.dot(u[T])<0?-1:1;c[T*4]=b.x,c[T*4+1]=b.y,c[T*4+2]=b.z,c[T*4+3]=F}for(let T=0,D=v.length;T<D;++T){const U=v[T],F=U.start,L=U.count;for(let B=F,G=F+L;B<G;B+=3)E(i[B+0]),E(i[B+1]),E(i[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new le,s=new le,o=new le,a=new le,c=new le,l=new le,u=new le,h=new le;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),p=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(p,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let p=0,m=c.length;p<m;p++){a.isInterleavedBufferAttribute?d=c[p]*a.data.stride+a.offset:d=c[p]*u;for(let x=0;x<u;x++)f[g++]=l[d++]}return new Pi(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dx,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};const Tg=new Nt,bi=new Tx,rc=new Hu,Ag=new le,aa=new le,la=new le,ca=new le,Jh=new le,sc=new le,oc=new kt,ac=new kt,lc=new kt,Kh=new le,cc=new le;let Ai=class extends xi{constructor(e=new Nr,t=new mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){sc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Jh.fromBufferAttribute(h,e),o?sc.addScaledVector(Jh,u):sc.addScaledVector(Jh.sub(t),u))}t.add(sc)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),rc.copy(i.boundingSphere),rc.applyMatrix4(s),bi.copy(e.ray).recast(e.near),rc.containsPoint(bi.origin)===!1&&(bi.intersectSphere(rc,Ag)===null||bi.origin.distanceToSquared(Ag)>(e.far-e.near)**2))||(Tg.copy(s).invert(),bi.copy(e.ray).applyMatrix4(Tg),i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,c=i.attributes.position,l=i.attributes.uv,u=i.attributes.uv2,h=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let d=0,g=h.length;d<g;d++){const p=h[d],m=r[p.materialIndex],x=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,v=_;y<v;y+=3){const b=a.getX(y),M=a.getX(y+1),S=a.getX(y+2);o=uc(this,m,e,bi,l,u,b,M,S),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const d=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=d,m=g;p<m;p+=3){const x=a.getX(p),_=a.getX(p+1),y=a.getX(p+2);o=uc(this,r,e,bi,l,u,x,_,y),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let d=0,g=h.length;d<g;d++){const p=h[d],m=r[p.materialIndex],x=Math.max(p.start,f.start),_=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,v=_;y<v;y+=3){const b=y,M=y+1,S=y+2;o=uc(this,m,e,bi,l,u,b,M,S),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const d=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let p=d,m=g;p<m;p+=3){const x=p,_=p+1,y=p+2;o=uc(this,r,e,bi,l,u,x,_,y),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}};function JS(n,e,t,i,r,s,o,a){let c;if(e.side===$n?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Cr,a),c===null)return null;cc.copy(a),cc.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(cc);return l<t.near||l>t.far?null:{distance:l,point:cc.clone(),object:n}}function uc(n,e,t,i,r,s,o,a,c){n.getVertexPosition(o,aa),n.getVertexPosition(a,la),n.getVertexPosition(c,ca);const l=JS(n,e,t,i,aa,la,ca,Kh);if(l){r&&(oc.fromBufferAttribute(r,o),ac.fromBufferAttribute(r,a),lc.fromBufferAttribute(r,c),l.uv=Zh.getUV(Kh,aa,la,ca,oc,ac,lc,new kt)),s&&(oc.fromBufferAttribute(s,o),ac.fromBufferAttribute(s,a),lc.fromBufferAttribute(s,c),l.uv2=Zh.getUV(Kh,aa,la,ca,oc,ac,lc,new kt));const u={a:o,b:a,c,normal:new le,materialIndex:0};Zh.getNormal(aa,la,ca,u.normal),l.face=u}return l}let Vu=class Ix extends Nr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new In(l,3)),this.setAttribute("normal",new In(u,3)),this.setAttribute("uv",new In(h,2));function g(p,m,x,_,y,v,b,M,S,w,E){const T=v/S,D=b/w,U=v/2,F=b/2,L=M/2,B=S+1,G=w+1;let Z=0,$=0;const se=new le;for(let oe=0;oe<G;oe++){const ge=oe*D-F;for(let Q=0;Q<B;Q++){const he=Q*T-U;se[p]=he*_,se[m]=ge*y,se[x]=L,l.push(se.x,se.y,se.z),se[p]=0,se[m]=0,se[x]=M>0?1:-1,u.push(se.x,se.y,se.z),h.push(Q/S),h.push(1-oe/w),Z+=1}}for(let oe=0;oe<w;oe++)for(let ge=0;ge<S;ge++){const Q=f+ge+B*oe,he=f+ge+B*(oe+1),Se=f+(ge+1)+B*(oe+1),K=f+(ge+1)+B*oe;c.push(Q,he,K),c.push(he,Se,K),$+=6}a.addGroup(d,$,E),d+=$,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ix(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Do(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Sn(n){const e={};for(let t=0;t<n.length;t++){const i=Do(n[t]);for(const r in i)e[r]=i[r]}return e}function KS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fx(n){return n.getRenderTarget()===null&&n.outputEncoding===Pt?Si:Wa}const QS={clone:Do,merge:Sn};var eE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;let _s=class extends Al{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eE,this.fragmentShader=tE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=KS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Nx=class extends xi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Kn=class extends Nx{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mg*2*Math.atan(Math.tan(Dh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};const Ws=-90,$s=1;let nE=class extends xi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Kn(Ws,$s,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Kn(Ws,$s,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Kn(Ws,$s,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Kn(Ws,$s,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Kn(Ws,$s,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Kn(Ws,$s,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Yi,e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},zx=class extends _i{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Co,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},iE=class extends gs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zx(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vu(5,5,5),s=new _s({name:"CubemapFromEquirect",uniforms:Do(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$n,blending:Sr});s.uniforms.tEquirect.value=t;const o=new Ai(r,s),a=t.minFilter;return t.minFilter===Ha&&(t.minFilter=Jn),new nE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};const Qh=new le,rE=new le,sE=new Wn;let Yr=class{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Qh.subVectors(i,t).cross(rE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Qh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||sE.getNormalMatrix(e),r=this.coplanarPoint(Qh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const qs=new Hu,hc=new le;let Ox=class{constructor(e=new Yr,t=new Yr,i=new Yr,r=new Yr,s=new Yr,o=new Yr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],h=i[7],f=i[8],d=i[9],g=i[10],p=i[11],m=i[12],x=i[13],_=i[14],y=i[15];return t[0].setComponents(a-r,h-c,p-f,y-m).normalize(),t[1].setComponents(a+r,h+c,p+f,y+m).normalize(),t[2].setComponents(a+s,h+l,p+d,y+x).normalize(),t[3].setComponents(a-s,h-l,p-d,y-x).normalize(),t[4].setComponents(a-o,h-u,p-g,y-_).normalize(),t[5].setComponents(a+o,h+u,p+g,y+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(hc.x=r.normal.x>0?e.max.x:e.min.x,hc.y=r.normal.y>0?e.max.y:e.min.y,hc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bx(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function oE(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const h=l.array,f=l.usage,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const f=u.array,d=u.updateRange;n.bindBuffer(h,l),d.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h===void 0?i.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}let aE=class Ux extends Nr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,f=t/c,d=[],g=[],p=[],m=[];for(let x=0;x<u;x++){const _=x*f-o;for(let y=0;y<l;y++){const v=y*h-s;g.push(v,-_,0),p.push(0,0,1),m.push(y/a),m.push(1-x/c)}}for(let x=0;x<c;x++)for(let _=0;_<a;_++){const y=_+l*x,v=_+l*(x+1),b=_+1+l*(x+1),M=_+1+l*x;d.push(y,v,M),d.push(v,b,M)}this.setIndex(d),this.setAttribute("position",new In(g,3)),this.setAttribute("normal",new In(p,3)),this.setAttribute("uv",new In(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ux(e.width,e.height,e.widthSegments,e.heightSegments)}};var lE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,cE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pE="vec3 transformed = vec3( position );",mE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gE=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,_E=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,xE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,TE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,AE=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
    
    vec2 lodFudge = pow( 1.95, lod ) / fullSize;
	return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
		   g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
}
vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
	vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
	vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
	vec2 fLodSizeInv = 1.0 / fLodSize;
	vec2 cLodSizeInv = 1.0 / cLodSize;
	vec2 fullSize = vec2( textureSize( sampler, 0 ) );
	vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
	vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
	return mix( fSample, cSample, fract( lod ) );
}`,LE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CE=`vec3 transformedNormal = objectNormal;
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
#endif`,RE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FE="gl_FragColor = linearToOutputTexel( gl_FragColor );",NE=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zE=`#ifdef USE_ENVMAP
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
#endif`,OE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,BE=`#ifdef USE_ENVMAP
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
#endif`,UE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kE=`#ifdef USE_ENVMAP
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
#endif`,GE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$E=`#ifdef USE_GRADIENTMAP
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
}`,qE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,XE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,JE=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,KE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,iT=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,rT=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,aT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,uT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_T=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xT=`#ifdef USE_MORPHNORMALS
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
#endif`,vT=`#ifdef USE_MORPHTARGETS
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
#endif`,yT=`#ifdef USE_MORPHTARGETS
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
#endif`,bT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,MT=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ST=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ET=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,AT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,LT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,CT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,RT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,IT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HT=`float getShadowMask() {
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
}`,VT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WT=`#ifdef USE_SKINNING
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
#endif`,$T=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qT=`#ifdef USE_SKINNING
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
#endif`,XT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,KT=`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,QT=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,eA=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,tA=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,nA=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,iA=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,rA=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,sA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aA=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cA=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <encodings_fragment>
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fA=`#include <common>
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
}`,dA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pA=`#define DISTANCE
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
}`,mA=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_A=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yA=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
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
}`,bA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,wA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SA=`#define MATCAP
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
}`,EA=`#define MATCAP
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
}`,LA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,CA=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,PA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,IA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`,NA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zA=`#include <common>
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
}`,OA=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,BA=`uniform float rotation;
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
}`,UA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ft={alphamap_fragment:lE,alphamap_pars_fragment:cE,alphatest_fragment:uE,alphatest_pars_fragment:hE,aomap_fragment:fE,aomap_pars_fragment:dE,begin_vertex:pE,beginnormal_vertex:mE,bsdfs:gE,iridescence_fragment:_E,bumpmap_pars_fragment:xE,clipping_planes_fragment:vE,clipping_planes_pars_fragment:yE,clipping_planes_pars_vertex:bE,clipping_planes_vertex:ME,color_fragment:wE,color_pars_fragment:SE,color_pars_vertex:EE,color_vertex:TE,common:AE,cube_uv_reflection_fragment:LE,defaultnormal_vertex:CE,displacementmap_pars_vertex:RE,displacementmap_vertex:PE,emissivemap_fragment:DE,emissivemap_pars_fragment:IE,encodings_fragment:FE,encodings_pars_fragment:NE,envmap_fragment:zE,envmap_common_pars_fragment:OE,envmap_pars_fragment:BE,envmap_pars_vertex:UE,envmap_physical_pars_fragment:JE,envmap_vertex:kE,fog_vertex:GE,fog_pars_vertex:HE,fog_fragment:VE,fog_pars_fragment:WE,gradientmap_pars_fragment:$E,lightmap_fragment:qE,lightmap_pars_fragment:XE,lights_lambert_fragment:ZE,lights_lambert_pars_fragment:YE,lights_pars_begin:jE,lights_toon_fragment:KE,lights_toon_pars_fragment:QE,lights_phong_fragment:eT,lights_phong_pars_fragment:tT,lights_physical_fragment:nT,lights_physical_pars_fragment:iT,lights_fragment_begin:rT,lights_fragment_maps:sT,lights_fragment_end:oT,logdepthbuf_fragment:aT,logdepthbuf_pars_fragment:lT,logdepthbuf_pars_vertex:cT,logdepthbuf_vertex:uT,map_fragment:hT,map_pars_fragment:fT,map_particle_fragment:dT,map_particle_pars_fragment:pT,metalnessmap_fragment:mT,metalnessmap_pars_fragment:gT,morphcolor_vertex:_T,morphnormal_vertex:xT,morphtarget_pars_vertex:vT,morphtarget_vertex:yT,normal_fragment_begin:bT,normal_fragment_maps:MT,normal_pars_fragment:wT,normal_pars_vertex:ST,normal_vertex:ET,normalmap_pars_fragment:TT,clearcoat_normal_fragment_begin:AT,clearcoat_normal_fragment_maps:LT,clearcoat_pars_fragment:CT,iridescence_pars_fragment:RT,output_fragment:PT,packing:DT,premultiplied_alpha_fragment:IT,project_vertex:FT,dithering_fragment:NT,dithering_pars_fragment:zT,roughnessmap_fragment:OT,roughnessmap_pars_fragment:BT,shadowmap_pars_fragment:UT,shadowmap_pars_vertex:kT,shadowmap_vertex:GT,shadowmask_pars_fragment:HT,skinbase_vertex:VT,skinning_pars_vertex:WT,skinning_vertex:$T,skinnormal_vertex:qT,specularmap_fragment:XT,specularmap_pars_fragment:ZT,tonemapping_fragment:YT,tonemapping_pars_fragment:jT,transmission_fragment:JT,transmission_pars_fragment:KT,uv_pars_fragment:QT,uv_pars_vertex:eA,uv_vertex:tA,uv2_pars_fragment:nA,uv2_pars_vertex:iA,uv2_vertex:rA,worldpos_vertex:sA,background_vert:oA,background_frag:aA,backgroundCube_vert:lA,backgroundCube_frag:cA,cube_vert:uA,cube_frag:hA,depth_vert:fA,depth_frag:dA,distanceRGBA_vert:pA,distanceRGBA_frag:mA,equirect_vert:gA,equirect_frag:_A,linedashed_vert:xA,linedashed_frag:vA,meshbasic_vert:yA,meshbasic_frag:bA,meshlambert_vert:MA,meshlambert_frag:wA,meshmatcap_vert:SA,meshmatcap_frag:EA,meshnormal_vert:TA,meshnormal_frag:AA,meshphong_vert:LA,meshphong_frag:CA,meshphysical_vert:RA,meshphysical_frag:PA,meshtoon_vert:DA,meshtoon_frag:IA,points_vert:FA,points_frag:NA,shadow_vert:zA,shadow_frag:OA,sprite_vert:BA,sprite_frag:UA},Ue={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Wn},uv2Transform:{value:new Wn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wn}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wn}}},Ei={basic:{uniforms:Sn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Sn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new St(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Sn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Sn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Sn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new St(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Sn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Sn([Ue.points,Ue.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Sn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Sn([Ue.common,Ue.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Sn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Sn([Ue.sprite,Ue.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Wn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Sn([Ue.common,Ue.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Sn([Ue.lights,Ue.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ei.physical={uniforms:Sn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new kt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const fc={r:0,b:0,g:0};function kA(n,e,t,i,r,s,o){const a=new St(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function g(m,x){let _=!1,y=x.isScene===!0?x.background:null;y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y));const v=n.xr,b=v.getSession&&v.getSession();b&&b.environmentBlendMode==="additive"&&(y=null),y===null?p(a,c):y&&y.isColor&&(p(y,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Gu)?(u===void 0&&(u=new Ai(new Vu(1,1,1),new _s({name:"BackgroundCubeMaterial",uniforms:Do(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=y.encoding!==Pt,(h!==y||f!==y.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ai(new aE(2,2),new _s({name:"BackgroundMaterial",uniforms:Do(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=y.encoding!==Pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,d=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function p(m,x){m.getRGB(fc,Fx(n)),i.buffers.color.setClear(fc.r,fc.g,fc.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(m,x=1){a.set(m),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,p(a,c)},render:g}}function GA(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=m(null);let l=c,u=!1;function h(L,B,G,Z,$){let se=!1;if(o){const oe=p(Z,G,B);l!==oe&&(l=oe,d(l.object)),se=x(L,Z,G,$),se&&_(L,Z,G,$)}else{const oe=B.wireframe===!0;(l.geometry!==Z.id||l.program!==G.id||l.wireframe!==oe)&&(l.geometry=Z.id,l.program=G.id,l.wireframe=oe,se=!0)}$!==null&&t.update($,34963),(se||u)&&(u=!1,w(L,B,G,Z),$!==null&&n.bindBuffer(34963,t.get($).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function p(L,B,G){const Z=G.wireframe===!0;let $=a[L.id];$===void 0&&($={},a[L.id]=$);let se=$[B.id];se===void 0&&(se={},$[B.id]=se);let oe=se[Z];return oe===void 0&&(oe=m(f()),se[Z]=oe),oe}function m(L){const B=[],G=[],Z=[];for(let $=0;$<r;$++)B[$]=0,G[$]=0,Z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:Z,object:L,attributes:{},index:null}}function x(L,B,G,Z){const $=l.attributes,se=B.attributes;let oe=0;const ge=G.getAttributes();for(const Q in ge)if(ge[Q].location>=0){const Se=$[Q];let K=se[Q];if(K===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),Se===void 0||Se.attribute!==K||K&&Se.data!==K.data)return!0;oe++}return l.attributesNum!==oe||l.index!==Z}function _(L,B,G,Z){const $={},se=B.attributes;let oe=0;const ge=G.getAttributes();for(const Q in ge)if(ge[Q].location>=0){let Se=se[Q];Se===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(Se=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(Se=L.instanceColor));const K={};K.attribute=Se,Se&&Se.data&&(K.data=Se.data),$[Q]=K,oe++}l.attributes=$,l.attributesNum=oe,l.index=Z}function y(){const L=l.newAttributes;for(let B=0,G=L.length;B<G;B++)L[B]=0}function v(L){b(L,0)}function b(L,B){const G=l.newAttributes,Z=l.enabledAttributes,$=l.attributeDivisors;G[L]=1,Z[L]===0&&(n.enableVertexAttribArray(L),Z[L]=1),$[L]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,B),$[L]=B)}function M(){const L=l.newAttributes,B=l.enabledAttributes;for(let G=0,Z=B.length;G<Z;G++)B[G]!==L[G]&&(n.disableVertexAttribArray(G),B[G]=0)}function S(L,B,G,Z,$,se){i.isWebGL2===!0&&(G===5124||G===5125)?n.vertexAttribIPointer(L,B,G,$,se):n.vertexAttribPointer(L,B,G,Z,$,se)}function w(L,B,G,Z){if(i.isWebGL2===!1&&(L.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const $=Z.attributes,se=G.getAttributes(),oe=B.defaultAttributeValues;for(const ge in se){const Q=se[ge];if(Q.location>=0){let he=$[ge];if(he===void 0&&(ge==="instanceMatrix"&&L.instanceMatrix&&(he=L.instanceMatrix),ge==="instanceColor"&&L.instanceColor&&(he=L.instanceColor)),he!==void 0){const Se=he.normalized,K=he.itemSize,ne=t.get(he);if(ne===void 0)continue;const Ne=ne.buffer,Re=ne.type,Pe=ne.bytesPerElement;if(he.isInterleavedBufferAttribute){const Le=he.data,$e=Le.stride,pe=he.offset;if(Le.isInstancedInterleavedBuffer){for(let ye=0;ye<Q.locationSize;ye++)b(Q.location+ye,Le.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let ye=0;ye<Q.locationSize;ye++)v(Q.location+ye);n.bindBuffer(34962,Ne);for(let ye=0;ye<Q.locationSize;ye++)S(Q.location+ye,K/Q.locationSize,Re,Se,$e*Pe,(pe+K/Q.locationSize*ye)*Pe)}else{if(he.isInstancedBufferAttribute){for(let Le=0;Le<Q.locationSize;Le++)b(Q.location+Le,he.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Le=0;Le<Q.locationSize;Le++)v(Q.location+Le);n.bindBuffer(34962,Ne);for(let Le=0;Le<Q.locationSize;Le++)S(Q.location+Le,K/Q.locationSize,Re,Se,K*Pe,K/Q.locationSize*Le*Pe)}}else if(oe!==void 0){const Se=oe[ge];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(Q.location,Se);break;case 3:n.vertexAttrib3fv(Q.location,Se);break;case 4:n.vertexAttrib4fv(Q.location,Se);break;default:n.vertexAttrib1fv(Q.location,Se)}}}}M()}function E(){U();for(const L in a){const B=a[L];for(const G in B){const Z=B[G];for(const $ in Z)g(Z[$].object),delete Z[$];delete B[G]}delete a[L]}}function T(L){if(a[L.id]===void 0)return;const B=a[L.id];for(const G in B){const Z=B[G];for(const $ in Z)g(Z[$].object),delete Z[$];delete B[G]}delete a[L.id]}function D(L){for(const B in a){const G=a[B];if(G[L.id]===void 0)continue;const Z=G[L.id];for(const $ in Z)g(Z[$].object),delete Z[$];delete G[L.id]}}function U(){F(),u=!0,l!==c&&(l=c,d(l.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:U,resetDefaultState:F,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:v,disableUnusedAttributes:M}}function HA(n,e,t,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,u){n.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let f,d;if(r)f=n,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,l,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function VA(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(S){if(S==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(34930),f=n.getParameter(35660),d=n.getParameter(3379),g=n.getParameter(34076),p=n.getParameter(34921),m=n.getParameter(36347),x=n.getParameter(36348),_=n.getParameter(36349),y=f>0,v=o||e.has("OES_texture_float"),b=y&&v,M=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:b,maxSamples:M}}function WA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Yr,a=new Wn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,p=h.clipIntersection,m=h.clipShadows,x=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const _=s?0:i,y=_*4;let v=x.clippingState||null;c.value=v,v=u(g,f,y,d);for(let b=0;b!==y;++b)v[b]=t[b];x.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const p=h!==null?h.length:0;let m=null;if(p!==0){if(m=c.value,g!==!0||m===null){const x=d+p*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<x)&&(m=new Float32Array(x));for(let y=0,v=d;y!==p;++y,v+=4)o.copy(h[y]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function $A(n){let e=new WeakMap;function t(o,a){return a===td?o.mapping=Co:a===nd&&(o.mapping=Ro),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===td||a===nd)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new iE(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}let qA=class extends Nx{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};const _o=4,Lg=[.125,.215,.35,.446,.526,.582],Qr=20,ef=new qA,Cg=new St;let tf=null;const jr=(1+Math.sqrt(5))/2,Xs=1/jr,Rg=[new le(1,1,1),new le(-1,1,1),new le(1,1,-1),new le(-1,1,-1),new le(0,jr,Xs),new le(0,jr,-Xs),new le(Xs,0,jr),new le(-Xs,0,jr),new le(jr,Xs,0),new le(-jr,Xs,0)];let Pg=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){tf=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tf),e.scissorTest=!1,dc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Co||e.mapping===Ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tf=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:Va,format:ei,encoding:ms,depthBuffer:!1},r=Dg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dg(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XA(s)),this._blurMaterial=ZA(s,e,t)}return r}_compileMaterial(e){const t=new Ai(this._lodPlanes[0],e);this._renderer.compile(t,ef)}_sceneToCubeUV(e,t,i,r){const a=new Kn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Cg),u.toneMapping=Yi,u.autoClear=!1;const d=new mr({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),g=new Ai(new Vu,d);let p=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(Cg),p=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(a.up.set(0,c[x],0),a.lookAt(l[x],0,0)):_===1?(a.up.set(0,0,c[x]),a.lookAt(0,l[x],0)):(a.up.set(0,c[x],0),a.lookAt(0,0,l[x]));const y=this._cubeSize;dc(r,_*y,x>2?y:0,y,y),u.setRenderTarget(r),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Co||e.mapping===Ro;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ig());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ai(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;dc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,ef)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Rg[(r-1)%Rg.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ai(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Qr-1),p=s/g,m=isFinite(s)?1+Math.floor(u*p):Qr;m>Qr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qr}`);const x=[];let _=0;for(let S=0;S<Qr;++S){const w=S/p,E=Math.exp(-w*w/2);x.push(E),S===0?_+=E:S<m&&(_+=2*E)}for(let S=0;S<x.length;S++)x[S]=x[S]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=x,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const v=this._sizeLods[r],b=3*v*(r>y-_o?r-y+_o:0),M=4*(this._cubeSize-v);dc(t,b,M,3*v,2*v),c.setRenderTarget(t),c.render(h,ef)}};function XA(n){const e=[],t=[],i=[];let r=n;const s=n-_o+1+Lg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-_o?c=Lg[o-n+_o-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,p=3,m=2,x=1,_=new Float32Array(p*g*d),y=new Float32Array(m*g*d),v=new Float32Array(x*g*d);for(let M=0;M<d;M++){const S=M%3*2/3-1,w=M>2?0:-1,E=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];_.set(E,p*g*M),y.set(f,m*g*M);const T=[M,M,M,M,M,M];v.set(T,x*g*M)}const b=new Nr;b.setAttribute("position",new Pi(_,p)),b.setAttribute("uv",new Pi(y,m)),b.setAttribute("faceIndex",new Pi(v,x)),e.push(b),r>_o&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Dg(n,e,t){const i=new gs(n,e,t);return i.texture.mapping=Gu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ZA(n,e,t){const i=new Float32Array(Qr),r=new le(0,1,0);return new _s({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Ig(){return new _s({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Fg(){return new _s({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Wd(){return`

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
	`}function YA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===td||c===nd,u=c===Co||c===Ro;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Pg(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Pg(n));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function jA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function JA(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const p=d[g];for(let m=0,x=p.length;m<x;m++)e.update(p[m],34962)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let p=0;if(d!==null){const _=d.array;p=d.version;for(let y=0,v=_.length;y<v;y+=3){const b=_[y+0],M=_[y+1],S=_[y+2];f.push(b,M,M,S,S,b)}}else{const _=g.array;p=g.version;for(let y=0,v=_.length/3-1;y<v;y+=3){const b=y+0,M=y+1,S=y+2;f.push(b,M,M,S,S,b)}}const m=new(yx(f)?Px:Vd)(f,1);m.version=p;const x=s.get(h);x&&e.remove(x),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function KA(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,d){n.drawElements(s,d,a,f*c),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let p,m;if(r)p=n,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,d,a,f*c,g),t.update(d,s,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function QA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function e2(n,e){return n[0]-e[0]}function t2(n,e){return Math.abs(e[1])-Math.abs(n[1])}function n2(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new cn,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==p){let B=function(){F.dispose(),s.delete(u),u.removeEventListener("dispose",B)};var d=B;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let E=0;y===!0&&(E=1),v===!0&&(E=2),b===!0&&(E=3);let T=u.attributes.position.count*E,D=1;T>e.maxTextureSize&&(D=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const U=new Float32Array(T*D*4*p),F=new Ex(U,T,D,p);F.type=xr,F.needsUpdate=!0;const L=E*4;for(let G=0;G<p;G++){const Z=M[G],$=S[G],se=w[G],oe=T*D*4*G;for(let ge=0;ge<Z.count;ge++){const Q=ge*L;y===!0&&(o.fromBufferAttribute(Z,ge),U[oe+Q+0]=o.x,U[oe+Q+1]=o.y,U[oe+Q+2]=o.z,U[oe+Q+3]=0),v===!0&&(o.fromBufferAttribute($,ge),U[oe+Q+4]=o.x,U[oe+Q+5]=o.y,U[oe+Q+6]=o.z,U[oe+Q+7]=0),b===!0&&(o.fromBufferAttribute(se,ge),U[oe+Q+8]=o.x,U[oe+Q+9]=o.y,U[oe+Q+10]=o.z,U[oe+Q+11]=se.itemSize===4?o.w:1)}}m={count:p,texture:F,size:new kt(T,D)},s.set(u,m),u.addEventListener("dispose",B)}let x=0;for(let y=0;y<f.length;y++)x+=f[y];const _=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(n,"morphTargetBaseInfluence",_),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let p=i[u.id];if(p===void 0||p.length!==g){p=[];for(let v=0;v<g;v++)p[v]=[v,0];i[u.id]=p}for(let v=0;v<g;v++){const b=p[v];b[0]=v,b[1]=f[v]}p.sort(t2);for(let v=0;v<8;v++)v<g&&p[v][1]?(a[v][0]=p[v][0],a[v][1]=p[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(e2);const m=u.morphAttributes.position,x=u.morphAttributes.normal;let _=0;for(let v=0;v<8;v++){const b=a[v],M=b[0],S=b[1];M!==Number.MAX_SAFE_INTEGER&&S?(m&&u.getAttribute("morphTarget"+v)!==m[M]&&u.setAttribute("morphTarget"+v,m[M]),x&&u.getAttribute("morphNormal"+v)!==x[M]&&u.setAttribute("morphNormal"+v,x[M]),r[v]=S,_+=S):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),x&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const y=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function i2(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);return r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const kx=new _i,Gx=new Ex,Hx=new GS,Vx=new zx,Ng=[],zg=[],Og=new Float32Array(16),Bg=new Float32Array(9),Ug=new Float32Array(4);function Vo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ng[r];if(s===void 0&&(s=new Float32Array(r),Ng[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function tn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function nn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wu(n,e){let t=zg[e];t===void 0&&(t=new Int32Array(e),zg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function r2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function s2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2fv(this.addr,e),nn(t,e)}}function o2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;n.uniform3fv(this.addr,e),nn(t,e)}}function a2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4fv(this.addr,e),nn(t,e)}}function l2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Ug.set(i),n.uniformMatrix2fv(this.addr,!1,Ug),nn(t,i)}}function c2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Bg.set(i),n.uniformMatrix3fv(this.addr,!1,Bg),nn(t,i)}}function u2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Og.set(i),n.uniformMatrix4fv(this.addr,!1,Og),nn(t,i)}}function h2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function f2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2iv(this.addr,e),nn(t,e)}}function d2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3iv(this.addr,e),nn(t,e)}}function p2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4iv(this.addr,e),nn(t,e)}}function m2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function g2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2uiv(this.addr,e),nn(t,e)}}function _2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3uiv(this.addr,e),nn(t,e)}}function x2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4uiv(this.addr,e),nn(t,e)}}function v2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||kx,r)}function y2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Hx,r)}function b2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Vx,r)}function M2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Gx,r)}function w2(n){switch(n){case 5126:return r2;case 35664:return s2;case 35665:return o2;case 35666:return a2;case 35674:return l2;case 35675:return c2;case 35676:return u2;case 5124:case 35670:return h2;case 35667:case 35671:return f2;case 35668:case 35672:return d2;case 35669:case 35673:return p2;case 5125:return m2;case 36294:return g2;case 36295:return _2;case 36296:return x2;case 35678:case 36198:case 36298:case 36306:case 35682:return v2;case 35679:case 36299:case 36307:return y2;case 35680:case 36300:case 36308:case 36293:return b2;case 36289:case 36303:case 36311:case 36292:return M2}}function S2(n,e){n.uniform1fv(this.addr,e)}function E2(n,e){const t=Vo(e,this.size,2);n.uniform2fv(this.addr,t)}function T2(n,e){const t=Vo(e,this.size,3);n.uniform3fv(this.addr,t)}function A2(n,e){const t=Vo(e,this.size,4);n.uniform4fv(this.addr,t)}function L2(n,e){const t=Vo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function C2(n,e){const t=Vo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function R2(n,e){const t=Vo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function P2(n,e){n.uniform1iv(this.addr,e)}function D2(n,e){n.uniform2iv(this.addr,e)}function I2(n,e){n.uniform3iv(this.addr,e)}function F2(n,e){n.uniform4iv(this.addr,e)}function N2(n,e){n.uniform1uiv(this.addr,e)}function z2(n,e){n.uniform2uiv(this.addr,e)}function O2(n,e){n.uniform3uiv(this.addr,e)}function B2(n,e){n.uniform4uiv(this.addr,e)}function U2(n,e,t){const i=this.cache,r=e.length,s=Wu(t,r);tn(i,s)||(n.uniform1iv(this.addr,s),nn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||kx,s[o])}function k2(n,e,t){const i=this.cache,r=e.length,s=Wu(t,r);tn(i,s)||(n.uniform1iv(this.addr,s),nn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Hx,s[o])}function G2(n,e,t){const i=this.cache,r=e.length,s=Wu(t,r);tn(i,s)||(n.uniform1iv(this.addr,s),nn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Vx,s[o])}function H2(n,e,t){const i=this.cache,r=e.length,s=Wu(t,r);tn(i,s)||(n.uniform1iv(this.addr,s),nn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Gx,s[o])}function V2(n){switch(n){case 5126:return S2;case 35664:return E2;case 35665:return T2;case 35666:return A2;case 35674:return L2;case 35675:return C2;case 35676:return R2;case 5124:case 35670:return P2;case 35667:case 35671:return D2;case 35668:case 35672:return I2;case 35669:case 35673:return F2;case 5125:return N2;case 36294:return z2;case 36295:return O2;case 36296:return B2;case 35678:case 36198:case 36298:case 36306:case 35682:return U2;case 35679:case 36299:case 36307:return k2;case 35680:case 36300:case 36308:case 36293:return G2;case 36289:case 36303:case 36311:case 36292:return H2}}let W2=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=w2(t.type)}},$2=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=V2(t.type)}},q2=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}};const nf=/(\w+)(\])?(\[|\.)?/g;function kg(n,e){n.seq.push(e),n.map[e.id]=e}function X2(n,e,t){const i=n.name,r=i.length;for(nf.lastIndex=0;;){const s=nf.exec(i),o=nf.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){kg(t,l===void 0?new W2(a,n,e):new $2(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new q2(a),kg(t,h)),t=h}}}let ou=class{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);X2(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}};function Gg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Z2=0;function Y2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function j2(n){switch(n){case ms:return["Linear","( value )"];case Pt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Hg(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Y2(n.getShaderSource(e),o)}else return r}function J2(n,e){const t=j2(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function K2(n,e){let t;switch(e){case sS:t="Linear";break;case oS:t="Reinhard";break;case aS:t="OptimizedCineon";break;case lS:t="ACESFilmic";break;case cS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Q2(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sa).join(`
`)}function e3(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function t3(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Sa(n){return n!==""}function Vg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n3=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(n){return n.replace(n3,i3)}function i3(n,e){const t=ft[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ad(t)}const r3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $g(n){return n.replace(r3,s3)}function s3(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qg(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function o3(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===O1?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wa&&(e="SHADOWMAP_TYPE_VSM"),e}function a3(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Co:case Ro:e="ENVMAP_TYPE_CUBE";break;case Gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function l3(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ro:e="ENVMAP_MODE_REFRACTION";break}return e}function c3(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case px:e="ENVMAP_BLENDING_MULTIPLY";break;case iS:e="ENVMAP_BLENDING_MIX";break;case rS:e="ENVMAP_BLENDING_ADD";break}return e}function u3(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function h3(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=o3(t),l=a3(t),u=l3(t),h=c3(t),f=u3(t),d=t.isWebGL2?"":Q2(t),g=e3(s),p=r.createProgram();let m,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Sa).join(`
`),m.length>0&&(m+=`
`),x=[d,g].filter(Sa).join(`
`),x.length>0&&(x+=`
`)):(m=[qg(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),x=[d,qg(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?ft.tonemapping_pars_fragment:"",t.toneMapping!==Yi?K2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.encodings_pars_fragment,J2("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),o=ad(o),o=Vg(o,t),o=Wg(o,t),a=ad(a),a=Vg(a,t),a=Wg(a,t),o=$g(o),a=$g(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["#define varying in",t.glslVersion===pg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=_+m+o,v=_+x+a,b=Gg(r,35633,y),M=Gg(r,35632,v);if(r.attachShader(p,b),r.attachShader(p,M),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const E=r.getProgramInfoLog(p).trim(),T=r.getShaderInfoLog(b).trim(),D=r.getShaderInfoLog(M).trim();let U=!0,F=!0;if(r.getProgramParameter(p,35714)===!1){U=!1;const L=Hg(r,b,"vertex"),B=Hg(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+L+`
`+B)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(T===""||D==="")&&(F=!1);F&&(this.diagnostics={runnable:U,programLog:E,vertexShader:{log:T,prefix:m},fragmentShader:{log:D,prefix:x}})}r.deleteShader(b),r.deleteShader(M);let S;this.getUniforms=function(){return S===void 0&&(S=new ou(r,p)),S};let w;return this.getAttributes=function(){return w===void 0&&(w=t3(r,p)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Z2++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=M,this}let f3=0;class d3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new p3(e),t.set(e,i)),i}}class p3{constructor(e){this.id=f3++,this.code=e,this.usedTimes=0}}function m3(n,e,t,i,r,s,o){const a=new Cx,c=new d3,l=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(w,E,T,D,U){const F=D.fog,L=U.geometry,B=w.isMeshStandardMaterial?D.environment:null,G=(w.isMeshStandardMaterial?t:e).get(w.envMap||B),Z=G&&G.mapping===Gu?G.image.height:null,$=g[w.type];w.precision!==null&&(d=r.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const se=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,oe=se!==void 0?se.length:0;let ge=0;L.morphAttributes.position!==void 0&&(ge=1),L.morphAttributes.normal!==void 0&&(ge=2),L.morphAttributes.color!==void 0&&(ge=3);let Q,he,Se,K;if($){const $e=Ei[$];Q=$e.vertexShader,he=$e.fragmentShader}else Q=w.vertexShader,he=w.fragmentShader,c.update(w),Se=c.getVertexShaderID(w),K=c.getFragmentShaderID(w);const ne=n.getRenderTarget(),Ne=w.alphaTest>0,Re=w.clearcoat>0,Pe=w.iridescence>0;return{isWebGL2:u,shaderID:$,shaderName:w.type,vertexShader:Q,fragmentShader:he,defines:w.defines,customVertexShaderID:Se,customFragmentShaderID:K,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,instancing:U.isInstancedMesh===!0,instancingColor:U.isInstancedMesh===!0&&U.instanceColor!==null,supportsVertexTextures:f,outputEncoding:ne===null?n.outputEncoding:ne.isXRRenderTarget===!0?ne.texture.encoding:ms,map:!!w.map,matcap:!!w.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:Z,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===CS,tangentSpaceNormalMap:w.normalMapType===LS,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===Pt,clearcoat:Re,clearcoatMap:Re&&!!w.clearcoatMap,clearcoatRoughnessMap:Re&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:Re&&!!w.clearcoatNormalMap,iridescence:Pe,iridescenceMap:Pe&&!!w.iridescenceMap,iridescenceThicknessMap:Pe&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===bo,alphaMap:!!w.alphaMap,alphaTest:Ne,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!L.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(w.map||w.bumpMap||w.normalMap||w.specularMap||w.alphaMap||w.emissiveMap||w.roughnessMap||w.metalnessMap||w.clearcoatNormalMap||w.iridescenceMap||w.iridescenceThicknessMap||w.transmission>0||w.transmissionMap||w.thicknessMap||w.specularIntensityMap||w.specularColorMap||w.sheen>0||w.sheenColorMap||w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!F,useFog:w.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ge,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:w.toneMapped?n.toneMapping:Yi,useLegacyLights:n.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===_r,flipSided:w.side===$n,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function m(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const T in w.defines)E.push(T),E.push(w.defines[T]);return w.isRawShaderMaterial===!1&&(x(E,w),_(E,w),E.push(n.outputEncoding)),E.push(w.customProgramCacheKey),E.join()}function x(w,E){w.push(E.precision),w.push(E.outputEncoding),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.combine),w.push(E.vertexUvs),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function _(w,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.specularIntensityMap&&a.enable(15),E.specularColorMap&&a.enable(16),E.transmission&&a.enable(17),E.transmissionMap&&a.enable(18),E.thicknessMap&&a.enable(19),E.sheen&&a.enable(20),E.sheenColorMap&&a.enable(21),E.sheenRoughnessMap&&a.enable(22),E.decodeVideoTexture&&a.enable(23),E.opaque&&a.enable(24),w.push(a.mask)}function y(w){const E=g[w.type];let T;if(E){const D=Ei[E];T=QS.clone(D.uniforms)}else T=w.uniforms;return T}function v(w,E){let T;for(let D=0,U=l.length;D<U;D++){const F=l[D];if(F.cacheKey===E){T=F,++T.usedTimes;break}}return T===void 0&&(T=new h3(n,E,w,s),l.push(T)),T}function b(w){if(--w.usedTimes===0){const E=l.indexOf(w);l[E]=l[l.length-1],l.pop(),w.destroy()}}function M(w){c.remove(w)}function S(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:v,releaseProgram:b,releaseShaderCache:M,programs:l,dispose:S}}function g3(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function _3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,d,g,p,m){let x=n[e];return x===void 0?(x={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:p,group:m},n[e]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=d,x.groupOrder=g,x.renderOrder=h.renderOrder,x.z=p,x.group=m),e++,x}function a(h,f,d,g,p,m){const x=o(h,f,d,g,p,m);d.transmission>0?i.push(x):d.transparent===!0?r.push(x):t.push(x)}function c(h,f,d,g,p,m){const x=o(h,f,d,g,p,m);d.transmission>0?i.unshift(x):d.transparent===!0?r.unshift(x):t.unshift(x)}function l(h,f){t.length>1&&t.sort(h||_3),i.length>1&&i.sort(f||Xg),r.length>1&&r.sort(f||Xg)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function x3(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Zg,n.set(i,[o])):r>=s.length?(o=new Zg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function v3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new le,color:new St};break;case"SpotLight":t={position:new le,direction:new le,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new le,halfWidth:new le,halfHeight:new le};break}return n[e.id]=t,t}}}function y3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let b3=0;function M3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function w3(n,e){const t=new v3,i=y3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new le);const s=new le,o=new Nt,a=new Nt;function c(u,h){let f=0,d=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let p=0,m=0,x=0,_=0,y=0,v=0,b=0,M=0,S=0,w=0;u.sort(M3);const E=h===!0?Math.PI:1;for(let D=0,U=u.length;D<U;D++){const F=u[D],L=F.color,B=F.intensity,G=F.distance,Z=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=L.r*B*E,d+=L.g*B*E,g+=L.b*B*E;else if(F.isLightProbe)for(let $=0;$<9;$++)r.probe[$].addScaledVector(F.sh.coefficients[$],B);else if(F.isDirectionalLight){const $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity*E),F.castShadow){const se=F.shadow,oe=i.get(F);oe.shadowBias=se.bias,oe.shadowNormalBias=se.normalBias,oe.shadowRadius=se.radius,oe.shadowMapSize=se.mapSize,r.directionalShadow[p]=oe,r.directionalShadowMap[p]=Z,r.directionalShadowMatrix[p]=F.shadow.matrix,v++}r.directional[p]=$,p++}else if(F.isSpotLight){const $=t.get(F);$.position.setFromMatrixPosition(F.matrixWorld),$.color.copy(L).multiplyScalar(B*E),$.distance=G,$.coneCos=Math.cos(F.angle),$.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),$.decay=F.decay,r.spot[x]=$;const se=F.shadow;if(F.map&&(r.spotLightMap[S]=F.map,S++,se.updateMatrices(F),F.castShadow&&w++),r.spotLightMatrix[x]=se.matrix,F.castShadow){const oe=i.get(F);oe.shadowBias=se.bias,oe.shadowNormalBias=se.normalBias,oe.shadowRadius=se.radius,oe.shadowMapSize=se.mapSize,r.spotShadow[x]=oe,r.spotShadowMap[x]=Z,M++}x++}else if(F.isRectAreaLight){const $=t.get(F);$.color.copy(L).multiplyScalar(B),$.halfWidth.set(F.width*.5,0,0),$.halfHeight.set(0,F.height*.5,0),r.rectArea[_]=$,_++}else if(F.isPointLight){const $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity*E),$.distance=F.distance,$.decay=F.decay,F.castShadow){const se=F.shadow,oe=i.get(F);oe.shadowBias=se.bias,oe.shadowNormalBias=se.normalBias,oe.shadowRadius=se.radius,oe.shadowMapSize=se.mapSize,oe.shadowCameraNear=se.camera.near,oe.shadowCameraFar=se.camera.far,r.pointShadow[m]=oe,r.pointShadowMap[m]=Z,r.pointShadowMatrix[m]=F.shadow.matrix,b++}r.point[m]=$,m++}else if(F.isHemisphereLight){const $=t.get(F);$.skyColor.copy(F.color).multiplyScalar(B*E),$.groundColor.copy(F.groundColor).multiplyScalar(B*E),r.hemi[y]=$,y++}}_>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==p||T.pointLength!==m||T.spotLength!==x||T.rectAreaLength!==_||T.hemiLength!==y||T.numDirectionalShadows!==v||T.numPointShadows!==b||T.numSpotShadows!==M||T.numSpotMaps!==S)&&(r.directional.length=p,r.spot.length=x,r.rectArea.length=_,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=M+S-w,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=w,T.directionalLength=p,T.pointLength=m,T.spotLength=x,T.rectAreaLength=_,T.hemiLength=y,T.numDirectionalShadows=v,T.numPointShadows=b,T.numSpotShadows=M,T.numSpotMaps=S,r.version=b3++)}function l(u,h){let f=0,d=0,g=0,p=0,m=0;const x=h.matrixWorldInverse;for(let _=0,y=u.length;_<y;_++){const v=u[_];if(v.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),f++}else if(v.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),g++}else if(v.isRectAreaLight){const b=r.rectArea[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(x),a.identity(),o.copy(v.matrixWorld),o.premultiply(x),a.extractRotation(o),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){const b=r.point[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(x),d++}else if(v.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(x),m++}}}return{setup:c,setupView:l,state:r}}function Yg(n,e){const t=new w3(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function c(h){t.setup(i,h)}function l(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function S3(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new Yg(n,e),t.set(s,[c])):o>=a.length?(c=new Yg(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}let E3=class extends Al{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},T3=class extends Al{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new le,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};const A3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L3=`uniform sampler2D shadow_pass;
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
}`;function C3(n,e,t){let i=new Ox;const r=new kt,s=new kt,o=new cn,a=new E3({depthPacking:AS}),c=new T3,l={},u=t.maxTextureSize,h={[Cr]:$n,[$n]:Cr,[_r]:_r},f=new _s({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:A3,fragmentShader:L3}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Nr;g.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ai(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hx,this.render=function(v,b,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const S=n.getRenderTarget(),w=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),T=n.state;T.setBlending(Sr),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let D=0,U=v.length;D<U;D++){const F=v[D],L=F.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const B=L.getFrameExtents();if(r.multiply(B),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/B.x),r.x=s.x*B.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/B.y),r.y=s.y*B.y,L.mapSize.y=s.y)),L.map===null){const Z=this.type!==wa?{minFilter:mn,magFilter:mn}:{};L.map=new gs(r.x,r.y,Z),L.map.texture.name=F.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();const G=L.getViewportCount();for(let Z=0;Z<G;Z++){const $=L.getViewport(Z);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),T.viewport(o),L.updateMatrices(F,Z),i=L.getFrustum(),y(b,M,L.camera,F,this.type)}L.isPointLightShadow!==!0&&this.type===wa&&x(L,M),L.needsUpdate=!1}m.needsUpdate=!1,n.setRenderTarget(S,w,E)};function x(v,b){const M=e.update(p);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new gs(r.x,r.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(b,null,M,f,p,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(b,null,M,d,p,null)}function _(v,b,M,S,w,E){let T=null;const D=M.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(D!==void 0)T=D;else if(T=M.isPointLight===!0?c:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const U=T.uuid,F=b.uuid;let L=l[U];L===void 0&&(L={},l[U]=L);let B=L[F];B===void 0&&(B=T.clone(),L[F]=B),T=B}return T.visible=b.visible,T.wireframe=b.wireframe,E===wa?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:h[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,M.isPointLight===!0&&T.isMeshDistanceMaterial===!0&&(T.referencePosition.setFromMatrixPosition(M.matrixWorld),T.nearDistance=S,T.farDistance=w),T}function y(v,b,M,S,w){if(v.visible===!1)return;if(v.layers.test(b.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&w===wa)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,v.matrixWorld);const D=e.update(v),U=v.material;if(Array.isArray(U)){const F=D.groups;for(let L=0,B=F.length;L<B;L++){const G=F[L],Z=U[G.materialIndex];if(Z&&Z.visible){const $=_(v,Z,S,M.near,M.far,w);n.renderBufferDirect(M,null,D,$,v,G)}}}else if(U.visible){const F=_(v,U,S,M.near,M.far,w);n.renderBufferDirect(M,null,D,F,v,null)}}const T=v.children;for(let D=0,U=T.length;D<U;D++)y(T[D],b,M,S,w)}}function R3(n,e,t){const i=t.isWebGL2;function r(){let X=!1;const de=new cn;let Ce=null;const qe=new cn(0,0,0,0);return{setMask:function(Ye){Ce!==Ye&&!X&&(n.colorMask(Ye,Ye,Ye,Ye),Ce=Ye)},setLocked:function(Ye){X=Ye},setClear:function(Ye,gt,zt,Jt,Rn){Rn===!0&&(Ye*=Jt,gt*=Jt,zt*=Jt),de.set(Ye,gt,zt,Jt),qe.equals(de)===!1&&(n.clearColor(Ye,gt,zt,Jt),qe.copy(de))},reset:function(){X=!1,Ce=null,qe.set(-1,0,0,0)}}}function s(){let X=!1,de=null,Ce=null,qe=null;return{setTest:function(Ye){Ye?Ne(2929):Re(2929)},setMask:function(Ye){de!==Ye&&!X&&(n.depthMask(Ye),de=Ye)},setFunc:function(Ye){if(Ce!==Ye){switch(Ye){case j1:n.depthFunc(512);break;case J1:n.depthFunc(519);break;case K1:n.depthFunc(513);break;case ed:n.depthFunc(515);break;case Q1:n.depthFunc(514);break;case eS:n.depthFunc(518);break;case tS:n.depthFunc(516);break;case nS:n.depthFunc(517);break;default:n.depthFunc(515)}Ce=Ye}},setLocked:function(Ye){X=Ye},setClear:function(Ye){qe!==Ye&&(n.clearDepth(Ye),qe=Ye)},reset:function(){X=!1,de=null,Ce=null,qe=null}}}function o(){let X=!1,de=null,Ce=null,qe=null,Ye=null,gt=null,zt=null,Jt=null,Rn=null;return{setTest:function(N){X||(N?Ne(2960):Re(2960))},setMask:function(N){de!==N&&!X&&(n.stencilMask(N),de=N)},setFunc:function(N,ue,ae){(Ce!==N||qe!==ue||Ye!==ae)&&(n.stencilFunc(N,ue,ae),Ce=N,qe=ue,Ye=ae)},setOp:function(N,ue,ae){(gt!==N||zt!==ue||Jt!==ae)&&(n.stencilOp(N,ue,ae),gt=N,zt=ue,Jt=ae)},setLocked:function(N){X=N},setClear:function(N){Rn!==N&&(n.clearStencil(N),Rn=N)},reset:function(){X=!1,de=null,Ce=null,qe=null,Ye=null,gt=null,zt=null,Jt=null,Rn=null}}}const a=new r,c=new s,l=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,p=[],m=null,x=!1,_=null,y=null,v=null,b=null,M=null,S=null,w=null,E=!1,T=null,D=null,U=null,F=null,L=null;const B=n.getParameter(35661);let G=!1,Z=0;const $=n.getParameter(7938);$.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec($)[1]),G=Z>=1):$.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),G=Z>=2);let se=null,oe={};const ge=n.getParameter(3088),Q=n.getParameter(2978),he=new cn().fromArray(ge),Se=new cn().fromArray(Q);function K(X,de,Ce){const qe=new Uint8Array(4),Ye=n.createTexture();n.bindTexture(X,Ye),n.texParameteri(X,10241,9728),n.texParameteri(X,10240,9728);for(let gt=0;gt<Ce;gt++)n.texImage2D(de+gt,0,6408,1,1,0,6408,5121,qe);return Ye}const ne={};ne[3553]=K(3553,3553,1),ne[34067]=K(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ne(2929),c.setFunc(ed),Oe(!1),k(Om),Ne(2884),De(Sr);function Ne(X){f[X]!==!0&&(n.enable(X),f[X]=!0)}function Re(X){f[X]!==!1&&(n.disable(X),f[X]=!1)}function Pe(X,de){return d[X]!==de?(n.bindFramebuffer(X,de),d[X]=de,i&&(X===36009&&(d[36160]=de),X===36160&&(d[36009]=de)),!0):!1}function Le(X,de){let Ce=p,qe=!1;if(X)if(Ce=g.get(de),Ce===void 0&&(Ce=[],g.set(de,Ce)),X.isWebGLMultipleRenderTargets){const Ye=X.texture;if(Ce.length!==Ye.length||Ce[0]!==36064){for(let gt=0,zt=Ye.length;gt<zt;gt++)Ce[gt]=36064+gt;Ce.length=Ye.length,qe=!0}}else Ce[0]!==36064&&(Ce[0]=36064,qe=!0);else Ce[0]!==1029&&(Ce[0]=1029,qe=!0);qe&&(t.isWebGL2?n.drawBuffers(Ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ce))}function $e(X){return m!==X?(n.useProgram(X),m=X,!0):!1}const pe={[po]:32774,[U1]:32778,[k1]:32779};if(i)pe[Gm]=32775,pe[Hm]=32776;else{const X=e.get("EXT_blend_minmax");X!==null&&(pe[Gm]=X.MIN_EXT,pe[Hm]=X.MAX_EXT)}const ye={[G1]:0,[H1]:1,[V1]:768,[fx]:770,[Y1]:776,[X1]:774,[$1]:772,[W1]:769,[dx]:771,[Z1]:775,[q1]:773};function De(X,de,Ce,qe,Ye,gt,zt,Jt){if(X===Sr){x===!0&&(Re(3042),x=!1);return}if(x===!1&&(Ne(3042),x=!0),X!==B1){if(X!==_||Jt!==E){if((y!==po||M!==po)&&(n.blendEquation(32774),y=po,M=po),Jt)switch(X){case bo:n.blendFuncSeparate(1,771,1,771);break;case Bm:n.blendFunc(1,1);break;case Um:n.blendFuncSeparate(0,769,0,1);break;case km:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case bo:n.blendFuncSeparate(770,771,1,771);break;case Bm:n.blendFunc(770,1);break;case Um:n.blendFuncSeparate(0,769,0,1);break;case km:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}v=null,b=null,S=null,w=null,_=X,E=Jt}return}Ye=Ye||de,gt=gt||Ce,zt=zt||qe,(de!==y||Ye!==M)&&(n.blendEquationSeparate(pe[de],pe[Ye]),y=de,M=Ye),(Ce!==v||qe!==b||gt!==S||zt!==w)&&(n.blendFuncSeparate(ye[Ce],ye[qe],ye[gt],ye[zt]),v=Ce,b=qe,S=gt,w=zt),_=X,E=!1}function Ve(X,de){X.side===_r?Re(2884):Ne(2884);let Ce=X.side===$n;de&&(Ce=!Ce),Oe(Ce),X.blending===bo&&X.transparent===!1?De(Sr):De(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),a.setMask(X.colorWrite);const qe=X.stencilWrite;l.setTest(qe),qe&&(l.setMask(X.stencilWriteMask),l.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),l.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),me(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Ne(32926):Re(32926)}function Oe(X){T!==X&&(X?n.frontFace(2304):n.frontFace(2305),T=X)}function k(X){X!==N1?(Ne(2884),X!==D&&(X===Om?n.cullFace(1029):X===z1?n.cullFace(1028):n.cullFace(1032))):Re(2884),D=X}function z(X){X!==U&&(G&&n.lineWidth(X),U=X)}function me(X,de,Ce){X?(Ne(32823),(F!==de||L!==Ce)&&(n.polygonOffset(de,Ce),F=de,L=Ce)):Re(32823)}function Me(X){X?Ne(3089):Re(3089)}function V(X){X===void 0&&(X=33984+B-1),se!==X&&(n.activeTexture(X),se=X)}function C(X,de,Ce){Ce===void 0&&(se===null?Ce=33984+B-1:Ce=se);let qe=oe[Ce];qe===void 0&&(qe={type:void 0,texture:void 0},oe[Ce]=qe),(qe.type!==X||qe.texture!==de)&&(se!==Ce&&(n.activeTexture(Ce),se=Ce),n.bindTexture(X,de||ne[X]),qe.type=X,qe.texture=de)}function A(){const X=oe[se];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function fe(){try{n.texSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(){try{n.texSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function re(){try{n.texStorage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function We(){try{n.texStorage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ke(){try{n.texImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function it(){try{n.texImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(X){he.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),he.copy(X))}function tt(X){Se.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),Se.copy(X))}function mt(X,de){let Ce=h.get(de);Ce===void 0&&(Ce=new WeakMap,h.set(de,Ce));let qe=Ce.get(X);qe===void 0&&(qe=n.getUniformBlockIndex(de,X.name),Ce.set(X,qe))}function Mt(X,de){const qe=h.get(de).get(X);u.get(de)!==qe&&(n.uniformBlockBinding(de,qe,X.__bindingPointIndex),u.set(de,qe))}function Lt(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},se=null,oe={},d={},g=new WeakMap,p=[],m=null,x=!1,_=null,y=null,v=null,b=null,M=null,S=null,w=null,E=!1,T=null,D=null,U=null,F=null,L=null,he.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ne,disable:Re,bindFramebuffer:Pe,drawBuffers:Le,useProgram:$e,setBlending:De,setMaterial:Ve,setFlipSided:Oe,setCullFace:k,setLineWidth:z,setPolygonOffset:me,setScissorTest:Me,activeTexture:V,bindTexture:C,unbindTexture:A,compressedTexImage2D:Y,compressedTexImage3D:ee,texImage2D:ke,texImage3D:it,updateUBOMapping:mt,uniformBlockBinding:Mt,texStorage2D:re,texStorage3D:We,texSubImage2D:fe,texSubImage3D:xe,compressedTexSubImage2D:we,compressedTexSubImage3D:ve,scissor:et,viewport:tt,reset:Lt}}function P3(n,e,t,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,A){return x?new OffscreenCanvas(C,A):du("canvas")}function y(C,A,Y,ee){let fe=1;if((C.width>ee||C.height>ee)&&(fe=ee/Math.max(C.width,C.height)),fe<1||A===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const xe=A?IS:Math.floor,we=xe(fe*C.width),ve=xe(fe*C.height);p===void 0&&(p=_(we,ve));const re=Y?_(we,ve):p;return re.width=we,re.height=ve,re.getContext("2d").drawImage(C,0,0,we,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+we+"x"+ve+")."),re}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function v(C){return gg(C.width)&&gg(C.height)}function b(C){return a?!1:C.wrapS!==pi||C.wrapT!==pi||C.minFilter!==mn&&C.minFilter!==Jn}function M(C,A){return C.generateMipmaps&&A&&C.minFilter!==mn&&C.minFilter!==Jn}function S(C){n.generateMipmap(C)}function w(C,A,Y,ee,fe=!1){if(a===!1)return A;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let xe=A;return A===6403&&(Y===5126&&(xe=33326),Y===5131&&(xe=33325),Y===5121&&(xe=33321)),A===33319&&(Y===5126&&(xe=33328),Y===5131&&(xe=33327),Y===5121&&(xe=33323)),A===6408&&(Y===5126&&(xe=34836),Y===5131&&(xe=34842),Y===5121&&(xe=ee===Pt&&fe===!1?35907:32856),Y===32819&&(xe=32854),Y===32820&&(xe=32855)),(xe===33325||xe===33326||xe===33327||xe===33328||xe===34842||xe===34836)&&e.get("EXT_color_buffer_float"),xe}function E(C,A,Y){return M(C,Y)===!0||C.isFramebufferTexture&&C.minFilter!==mn&&C.minFilter!==Jn?Math.log2(Math.max(A.width,A.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?A.mipmaps.length:1}function T(C){return C===mn||C===Vm||C===Eh?9728:9729}function D(C){const A=C.target;A.removeEventListener("dispose",D),F(A),A.isVideoTexture&&g.delete(A)}function U(C){const A=C.target;A.removeEventListener("dispose",U),B(A)}function F(C){const A=i.get(C);if(A.__webglInit===void 0)return;const Y=C.source,ee=m.get(Y);if(ee){const fe=ee[A.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&L(C),Object.keys(ee).length===0&&m.delete(Y)}i.remove(C)}function L(C){const A=i.get(C);n.deleteTexture(A.__webglTexture);const Y=C.source,ee=m.get(Y);delete ee[A.__cacheKey],o.memory.textures--}function B(C){const A=C.texture,Y=i.get(C),ee=i.get(A);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++)n.deleteFramebuffer(Y.__webglFramebuffer[fe]),Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer[fe]);else{if(n.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let fe=0;fe<Y.__webglColorRenderbuffer.length;fe++)Y.__webglColorRenderbuffer[fe]&&n.deleteRenderbuffer(Y.__webglColorRenderbuffer[fe]);Y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let fe=0,xe=A.length;fe<xe;fe++){const we=i.get(A[fe]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),o.memory.textures--),i.remove(A[fe])}i.remove(A),i.remove(C)}let G=0;function Z(){G=0}function $(){const C=G;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),G+=1,C}function se(C){const A=[];return A.push(C.wrapS),A.push(C.wrapT),A.push(C.wrapR||0),A.push(C.magFilter),A.push(C.minFilter),A.push(C.anisotropy),A.push(C.internalFormat),A.push(C.format),A.push(C.type),A.push(C.generateMipmaps),A.push(C.premultiplyAlpha),A.push(C.flipY),A.push(C.unpackAlignment),A.push(C.encoding),A.join()}function oe(C,A){const Y=i.get(C);if(C.isVideoTexture&&Me(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(Y,C,A);return}}t.bindTexture(3553,Y.__webglTexture,33984+A)}function ge(C,A){const Y=i.get(C);if(C.version>0&&Y.__version!==C.version){Re(Y,C,A);return}t.bindTexture(35866,Y.__webglTexture,33984+A)}function Q(C,A){const Y=i.get(C);if(C.version>0&&Y.__version!==C.version){Re(Y,C,A);return}t.bindTexture(32879,Y.__webglTexture,33984+A)}function he(C,A){const Y=i.get(C);if(C.version>0&&Y.__version!==C.version){Pe(Y,C,A);return}t.bindTexture(34067,Y.__webglTexture,33984+A)}const Se={[id]:10497,[pi]:33071,[rd]:33648},K={[mn]:9728,[Vm]:9984,[Eh]:9986,[Jn]:9729,[uS]:9985,[Ha]:9987};function ne(C,A,Y){if(Y?(n.texParameteri(C,10242,Se[A.wrapS]),n.texParameteri(C,10243,Se[A.wrapT]),(C===32879||C===35866)&&n.texParameteri(C,32882,Se[A.wrapR]),n.texParameteri(C,10240,K[A.magFilter]),n.texParameteri(C,10241,K[A.minFilter])):(n.texParameteri(C,10242,33071),n.texParameteri(C,10243,33071),(C===32879||C===35866)&&n.texParameteri(C,32882,33071),(A.wrapS!==pi||A.wrapT!==pi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,10240,T(A.magFilter)),n.texParameteri(C,10241,T(A.minFilter)),A.minFilter!==mn&&A.minFilter!==Jn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===mn||A.minFilter!==Eh&&A.minFilter!==Ha||A.type===xr&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Va&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(C,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function Ne(C,A){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,A.addEventListener("dispose",D));const ee=A.source;let fe=m.get(ee);fe===void 0&&(fe={},m.set(ee,fe));const xe=se(A);if(xe!==C.__cacheKey){fe[xe]===void 0&&(fe[xe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),fe[xe].usedTimes++;const we=fe[C.__cacheKey];we!==void 0&&(fe[C.__cacheKey].usedTimes--,we.usedTimes===0&&L(A)),C.__cacheKey=xe,C.__webglTexture=fe[xe].texture}return Y}function Re(C,A,Y){let ee=3553;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ee=35866),A.isData3DTexture&&(ee=32879);const fe=Ne(C,A),xe=A.source;t.bindTexture(ee,C.__webglTexture,33984+Y);const we=i.get(xe);if(xe.version!==we.__version||fe===!0){t.activeTexture(33984+Y),n.pixelStorei(37440,A.flipY),n.pixelStorei(37441,A.premultiplyAlpha),n.pixelStorei(3317,A.unpackAlignment),n.pixelStorei(37443,0);const ve=b(A)&&v(A.image)===!1;let re=y(A.image,ve,!1,u);re=V(A,re);const We=v(re)||a,ke=s.convert(A.format,A.encoding);let it=s.convert(A.type),et=w(A.internalFormat,ke,it,A.encoding,A.isVideoTexture);ne(ee,A,We);let tt;const mt=A.mipmaps,Mt=a&&A.isVideoTexture!==!0,Lt=we.__version===void 0||fe===!0,X=E(A,re,We);if(A.isDepthTexture)et=6402,a?A.type===xr?et=36012:A.type===rs?et=33190:A.type===Mo?et=35056:et=33189:A.type===xr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===ls&&et===6402&&A.type!==gx&&A.type!==rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=rs,it=s.convert(A.type)),A.format===Po&&et===6402&&(et=34041,A.type!==Mo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Mo,it=s.convert(A.type))),Lt&&(Mt?t.texStorage2D(3553,1,et,re.width,re.height):t.texImage2D(3553,0,et,re.width,re.height,0,ke,it,null));else if(A.isDataTexture)if(mt.length>0&&We){Mt&&Lt&&t.texStorage2D(3553,X,et,mt[0].width,mt[0].height);for(let de=0,Ce=mt.length;de<Ce;de++)tt=mt[de],Mt?t.texSubImage2D(3553,de,0,0,tt.width,tt.height,ke,it,tt.data):t.texImage2D(3553,de,et,tt.width,tt.height,0,ke,it,tt.data);A.generateMipmaps=!1}else Mt?(Lt&&t.texStorage2D(3553,X,et,re.width,re.height),t.texSubImage2D(3553,0,0,0,re.width,re.height,ke,it,re.data)):t.texImage2D(3553,0,et,re.width,re.height,0,ke,it,re.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Mt&&Lt&&t.texStorage3D(35866,X,et,mt[0].width,mt[0].height,re.depth);for(let de=0,Ce=mt.length;de<Ce;de++)tt=mt[de],A.format!==ei?ke!==null?Mt?t.compressedTexSubImage3D(35866,de,0,0,0,tt.width,tt.height,re.depth,ke,tt.data,0,0):t.compressedTexImage3D(35866,de,et,tt.width,tt.height,re.depth,0,tt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?t.texSubImage3D(35866,de,0,0,0,tt.width,tt.height,re.depth,ke,it,tt.data):t.texImage3D(35866,de,et,tt.width,tt.height,re.depth,0,ke,it,tt.data)}else{Mt&&Lt&&t.texStorage2D(3553,X,et,mt[0].width,mt[0].height);for(let de=0,Ce=mt.length;de<Ce;de++)tt=mt[de],A.format!==ei?ke!==null?Mt?t.compressedTexSubImage2D(3553,de,0,0,tt.width,tt.height,ke,tt.data):t.compressedTexImage2D(3553,de,et,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?t.texSubImage2D(3553,de,0,0,tt.width,tt.height,ke,it,tt.data):t.texImage2D(3553,de,et,tt.width,tt.height,0,ke,it,tt.data)}else if(A.isDataArrayTexture)Mt?(Lt&&t.texStorage3D(35866,X,et,re.width,re.height,re.depth),t.texSubImage3D(35866,0,0,0,0,re.width,re.height,re.depth,ke,it,re.data)):t.texImage3D(35866,0,et,re.width,re.height,re.depth,0,ke,it,re.data);else if(A.isData3DTexture)Mt?(Lt&&t.texStorage3D(32879,X,et,re.width,re.height,re.depth),t.texSubImage3D(32879,0,0,0,0,re.width,re.height,re.depth,ke,it,re.data)):t.texImage3D(32879,0,et,re.width,re.height,re.depth,0,ke,it,re.data);else if(A.isFramebufferTexture){if(Lt)if(Mt)t.texStorage2D(3553,X,et,re.width,re.height);else{let de=re.width,Ce=re.height;for(let qe=0;qe<X;qe++)t.texImage2D(3553,qe,et,de,Ce,0,ke,it,null),de>>=1,Ce>>=1}}else if(mt.length>0&&We){Mt&&Lt&&t.texStorage2D(3553,X,et,mt[0].width,mt[0].height);for(let de=0,Ce=mt.length;de<Ce;de++)tt=mt[de],Mt?t.texSubImage2D(3553,de,0,0,ke,it,tt):t.texImage2D(3553,de,et,ke,it,tt);A.generateMipmaps=!1}else Mt?(Lt&&t.texStorage2D(3553,X,et,re.width,re.height),t.texSubImage2D(3553,0,0,0,ke,it,re)):t.texImage2D(3553,0,et,ke,it,re);M(A,We)&&S(ee),we.__version=xe.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function Pe(C,A,Y){if(A.image.length!==6)return;const ee=Ne(C,A),fe=A.source;t.bindTexture(34067,C.__webglTexture,33984+Y);const xe=i.get(fe);if(fe.version!==xe.__version||ee===!0){t.activeTexture(33984+Y),n.pixelStorei(37440,A.flipY),n.pixelStorei(37441,A.premultiplyAlpha),n.pixelStorei(3317,A.unpackAlignment),n.pixelStorei(37443,0);const we=A.isCompressedTexture||A.image[0].isCompressedTexture,ve=A.image[0]&&A.image[0].isDataTexture,re=[];for(let de=0;de<6;de++)!we&&!ve?re[de]=y(A.image[de],!1,!0,l):re[de]=ve?A.image[de].image:A.image[de],re[de]=V(A,re[de]);const We=re[0],ke=v(We)||a,it=s.convert(A.format,A.encoding),et=s.convert(A.type),tt=w(A.internalFormat,it,et,A.encoding),mt=a&&A.isVideoTexture!==!0,Mt=xe.__version===void 0||ee===!0;let Lt=E(A,We,ke);ne(34067,A,ke);let X;if(we){mt&&Mt&&t.texStorage2D(34067,Lt,tt,We.width,We.height);for(let de=0;de<6;de++){X=re[de].mipmaps;for(let Ce=0;Ce<X.length;Ce++){const qe=X[Ce];A.format!==ei?it!==null?mt?t.compressedTexSubImage2D(34069+de,Ce,0,0,qe.width,qe.height,it,qe.data):t.compressedTexImage2D(34069+de,Ce,tt,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):mt?t.texSubImage2D(34069+de,Ce,0,0,qe.width,qe.height,it,et,qe.data):t.texImage2D(34069+de,Ce,tt,qe.width,qe.height,0,it,et,qe.data)}}}else{X=A.mipmaps,mt&&Mt&&(X.length>0&&Lt++,t.texStorage2D(34067,Lt,tt,re[0].width,re[0].height));for(let de=0;de<6;de++)if(ve){mt?t.texSubImage2D(34069+de,0,0,0,re[de].width,re[de].height,it,et,re[de].data):t.texImage2D(34069+de,0,tt,re[de].width,re[de].height,0,it,et,re[de].data);for(let Ce=0;Ce<X.length;Ce++){const Ye=X[Ce].image[de].image;mt?t.texSubImage2D(34069+de,Ce+1,0,0,Ye.width,Ye.height,it,et,Ye.data):t.texImage2D(34069+de,Ce+1,tt,Ye.width,Ye.height,0,it,et,Ye.data)}}else{mt?t.texSubImage2D(34069+de,0,0,0,it,et,re[de]):t.texImage2D(34069+de,0,tt,it,et,re[de]);for(let Ce=0;Ce<X.length;Ce++){const qe=X[Ce];mt?t.texSubImage2D(34069+de,Ce+1,0,0,it,et,qe.image[de]):t.texImage2D(34069+de,Ce+1,tt,it,et,qe.image[de])}}}M(A,ke)&&S(34067),xe.__version=fe.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function Le(C,A,Y,ee,fe){const xe=s.convert(Y.format,Y.encoding),we=s.convert(Y.type),ve=w(Y.internalFormat,xe,we,Y.encoding);i.get(A).__hasExternalTextures||(fe===32879||fe===35866?t.texImage3D(fe,0,ve,A.width,A.height,A.depth,0,xe,we,null):t.texImage2D(fe,0,ve,A.width,A.height,0,xe,we,null)),t.bindFramebuffer(36160,C),me(A)?f.framebufferTexture2DMultisampleEXT(36160,ee,fe,i.get(Y).__webglTexture,0,z(A)):(fe===3553||fe>=34069&&fe<=34074)&&n.framebufferTexture2D(36160,ee,fe,i.get(Y).__webglTexture,0),t.bindFramebuffer(36160,null)}function $e(C,A,Y){if(n.bindRenderbuffer(36161,C),A.depthBuffer&&!A.stencilBuffer){let ee=33189;if(Y||me(A)){const fe=A.depthTexture;fe&&fe.isDepthTexture&&(fe.type===xr?ee=36012:fe.type===rs&&(ee=33190));const xe=z(A);me(A)?f.renderbufferStorageMultisampleEXT(36161,xe,ee,A.width,A.height):n.renderbufferStorageMultisample(36161,xe,ee,A.width,A.height)}else n.renderbufferStorage(36161,ee,A.width,A.height);n.framebufferRenderbuffer(36160,36096,36161,C)}else if(A.depthBuffer&&A.stencilBuffer){const ee=z(A);Y&&me(A)===!1?n.renderbufferStorageMultisample(36161,ee,35056,A.width,A.height):me(A)?f.renderbufferStorageMultisampleEXT(36161,ee,35056,A.width,A.height):n.renderbufferStorage(36161,34041,A.width,A.height),n.framebufferRenderbuffer(36160,33306,36161,C)}else{const ee=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let fe=0;fe<ee.length;fe++){const xe=ee[fe],we=s.convert(xe.format,xe.encoding),ve=s.convert(xe.type),re=w(xe.internalFormat,we,ve,xe.encoding),We=z(A);Y&&me(A)===!1?n.renderbufferStorageMultisample(36161,We,re,A.width,A.height):me(A)?f.renderbufferStorageMultisampleEXT(36161,We,re,A.width,A.height):n.renderbufferStorage(36161,re,A.width,A.height)}}n.bindRenderbuffer(36161,null)}function pe(C,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),oe(A.depthTexture,0);const ee=i.get(A.depthTexture).__webglTexture,fe=z(A);if(A.depthTexture.format===ls)me(A)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,fe):n.framebufferTexture2D(36160,36096,3553,ee,0);else if(A.depthTexture.format===Po)me(A)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,fe):n.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function ye(C){const A=i.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!A.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");pe(A.__webglFramebuffer,C)}else if(Y){A.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,A.__webglFramebuffer[ee]),A.__webglDepthbuffer[ee]=n.createRenderbuffer(),$e(A.__webglDepthbuffer[ee],C,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),$e(A.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function De(C,A,Y){const ee=i.get(C);A!==void 0&&Le(ee.__webglFramebuffer,C,C.texture,36064,3553),Y!==void 0&&ye(C)}function Ve(C){const A=C.texture,Y=i.get(C),ee=i.get(A);C.addEventListener("dispose",U),C.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=A.version,o.memory.textures++);const fe=C.isWebGLCubeRenderTarget===!0,xe=C.isWebGLMultipleRenderTargets===!0,we=v(C)||a;if(fe){Y.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)Y.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(Y.__webglFramebuffer=n.createFramebuffer(),xe)if(r.drawBuffers){const ve=C.texture;for(let re=0,We=ve.length;re<We;re++){const ke=i.get(ve[re]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&me(C)===!1){const ve=xe?A:[A];Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer);for(let re=0;re<ve.length;re++){const We=ve[re];Y.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(36161,Y.__webglColorRenderbuffer[re]);const ke=s.convert(We.format,We.encoding),it=s.convert(We.type),et=w(We.internalFormat,ke,it,We.encoding,C.isXRRenderTarget===!0),tt=z(C);n.renderbufferStorageMultisample(36161,tt,et,C.width,C.height),n.framebufferRenderbuffer(36160,36064+re,36161,Y.__webglColorRenderbuffer[re])}n.bindRenderbuffer(36161,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),$e(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(fe){t.bindTexture(34067,ee.__webglTexture),ne(34067,A,we);for(let ve=0;ve<6;ve++)Le(Y.__webglFramebuffer[ve],C,A,36064,34069+ve);M(A,we)&&S(34067),t.unbindTexture()}else if(xe){const ve=C.texture;for(let re=0,We=ve.length;re<We;re++){const ke=ve[re],it=i.get(ke);t.bindTexture(3553,it.__webglTexture),ne(3553,ke,we),Le(Y.__webglFramebuffer,C,ke,36064+re,3553),M(ke,we)&&S(3553)}t.unbindTexture()}else{let ve=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ve=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,ee.__webglTexture),ne(ve,A,we),Le(Y.__webglFramebuffer,C,A,36064,ve),M(A,we)&&S(ve),t.unbindTexture()}C.depthBuffer&&ye(C)}function Oe(C){const A=v(C)||a,Y=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ee=0,fe=Y.length;ee<fe;ee++){const xe=Y[ee];if(M(xe,A)){const we=C.isWebGLCubeRenderTarget?34067:3553,ve=i.get(xe).__webglTexture;t.bindTexture(we,ve),S(we),t.unbindTexture()}}}function k(C){if(a&&C.samples>0&&me(C)===!1){const A=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Y=C.width,ee=C.height;let fe=16384;const xe=[],we=C.stencilBuffer?33306:36096,ve=i.get(C),re=C.isWebGLMultipleRenderTargets===!0;if(re)for(let We=0;We<A.length;We++)t.bindFramebuffer(36160,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+We,36161,null),t.bindFramebuffer(36160,ve.__webglFramebuffer),n.framebufferTexture2D(36009,36064+We,3553,null,0);t.bindFramebuffer(36008,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ve.__webglFramebuffer);for(let We=0;We<A.length;We++){xe.push(36064+We),C.depthBuffer&&xe.push(we);const ke=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(ke===!1&&(C.depthBuffer&&(fe|=256),C.stencilBuffer&&(fe|=1024)),re&&n.framebufferRenderbuffer(36008,36064,36161,ve.__webglColorRenderbuffer[We]),ke===!0&&(n.invalidateFramebuffer(36008,[we]),n.invalidateFramebuffer(36009,[we])),re){const it=i.get(A[We]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,it,0)}n.blitFramebuffer(0,0,Y,ee,0,0,Y,ee,fe,9728),d&&n.invalidateFramebuffer(36008,xe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),re)for(let We=0;We<A.length;We++){t.bindFramebuffer(36160,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+We,36161,ve.__webglColorRenderbuffer[We]);const ke=i.get(A[We]).__webglTexture;t.bindFramebuffer(36160,ve.__webglFramebuffer),n.framebufferTexture2D(36009,36064+We,3553,ke,0)}t.bindFramebuffer(36009,ve.__webglMultisampledFramebuffer)}}function z(C){return Math.min(h,C.samples)}function me(C){const A=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Me(C){const A=o.render.frame;g.get(C)!==A&&(g.set(C,A),C.update())}function V(C,A){const Y=C.encoding,ee=C.format,fe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===sd||Y!==ms&&(Y===Pt?a===!1?e.has("EXT_sRGB")===!0&&ee===ei?(C.format=sd,C.minFilter=Jn,C.generateMipmaps=!1):A=Mx.sRGBToLinear(A):(ee!==ei||fe!==ps)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Y)),A}this.allocateTextureUnit=$,this.resetTextureUnits=Z,this.setTexture2D=oe,this.setTexture2DArray=ge,this.setTexture3D=Q,this.setTextureCube=he,this.rebindTextures=De,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=me}function D3(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===ps)return 5121;if(s===pS)return 32819;if(s===mS)return 32820;if(s===hS)return 5120;if(s===fS)return 5122;if(s===gx)return 5123;if(s===dS)return 5124;if(s===rs)return 5125;if(s===xr)return 5126;if(s===Va)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===gS)return 6406;if(s===ei)return 6408;if(s===_S)return 6409;if(s===xS)return 6410;if(s===ls)return 6402;if(s===Po)return 34041;if(s===sd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===vS)return 6403;if(s===yS)return 36244;if(s===bS)return 33319;if(s===MS)return 33320;if(s===wS)return 36249;if(s===Th||s===Ah||s===Lh||s===Ch)if(o===Pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Th)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ah)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Lh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ch)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Th)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ah)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Lh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ch)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wm||s===$m||s===qm||s===Xm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Wm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$m)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===SS)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Zm||s===Ym)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Zm)return o===Pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ym)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jm||s===Jm||s===Km||s===Qm||s===eg||s===tg||s===ng||s===ig||s===rg||s===sg||s===og||s===ag||s===lg||s===cg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===jm)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Jm)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Km)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qm)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===eg)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tg)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ng)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ig)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rg)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sg)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===og)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ag)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lg)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cg)return o===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Rh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Rh)return o===Pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===ES||s===ug||s===hg||s===fg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Rh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ug)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===fg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Mo?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}let I3=class extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},pc=class extends xi{constructor(){super(),this.isGroup=!0,this.type="Group"}};const F3={type:"move"};let rf=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,i),x=this._getHandJoint(l,p);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=m.radius),x.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F3)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new pc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},N3=class extends _i{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:ls,u!==ls&&u!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ls&&(i=rs),i===void 0&&u===Po&&(i=Mo),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:mn,this.minFilter=c!==void 0?c:mn,this.flipY=!1,this.generateMipmaps=!1}},z3=class extends Go{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const p=t.getContextAttributes();let m=null,x=null;const _=[],y=[],v=new Set,b=new Map,M=new Kn;M.layers.enable(1),M.viewport=new cn;const S=new Kn;S.layers.enable(2),S.viewport=new cn;const w=[M,S],E=new I3;E.layers.enable(1),E.layers.enable(2);let T=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=_[Q];return he===void 0&&(he=new rf,_[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=_[Q];return he===void 0&&(he=new rf,_[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=_[Q];return he===void 0&&(he=new rf,_[Q]=he),he.getHandSpace()};function U(Q){const he=y.indexOf(Q.inputSource);if(he===-1)return;const Se=_[he];Se!==void 0&&Se.dispatchEvent({type:Q.type,data:Q.inputSource})}function F(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",L);for(let Q=0;Q<_.length;Q++){const he=y[Q];he!==null&&(y[Q]=null,_[Q].disconnect(he))}T=null,D=null,e.setRenderTarget(m),d=null,f=null,h=null,r=null,x=null,ge.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",F),r.addEventListener("inputsourceschange",L),p.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const he={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:d}),x=new gs(d.framebufferWidth,d.framebufferHeight,{format:ei,type:ps,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let he=null,Se=null,K=null;p.depth&&(K=p.stencil?35056:33190,he=p.stencil?Po:ls,Se=p.stencil?Mo:rs);const ne={colorFormat:32856,depthFormat:K,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(ne),r.updateRenderState({layers:[f]}),x=new gs(f.textureWidth,f.textureHeight,{format:ei,type:ps,depthTexture:new N3(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const Ne=e.properties.get(x);Ne.__ignoreDepthValues=f.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ge.setContext(r),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function L(Q){for(let he=0;he<Q.removed.length;he++){const Se=Q.removed[he],K=y.indexOf(Se);K>=0&&(y[K]=null,_[K].disconnect(Se))}for(let he=0;he<Q.added.length;he++){const Se=Q.added[he];let K=y.indexOf(Se);if(K===-1){for(let Ne=0;Ne<_.length;Ne++)if(Ne>=y.length){y.push(Se),K=Ne;break}else if(y[Ne]===null){y[Ne]=Se,K=Ne;break}if(K===-1)break}const ne=_[K];ne&&ne.connect(Se)}}const B=new le,G=new le;function Z(Q,he,Se){B.setFromMatrixPosition(he.matrixWorld),G.setFromMatrixPosition(Se.matrixWorld);const K=B.distanceTo(G),ne=he.projectionMatrix.elements,Ne=Se.projectionMatrix.elements,Re=ne[14]/(ne[10]-1),Pe=ne[14]/(ne[10]+1),Le=(ne[9]+1)/ne[5],$e=(ne[9]-1)/ne[5],pe=(ne[8]-1)/ne[0],ye=(Ne[8]+1)/Ne[0],De=Re*pe,Ve=Re*ye,Oe=K/(-pe+ye),k=Oe*-pe;he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(k),Q.translateZ(Oe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const z=Re+Oe,me=Pe+Oe,Me=De-k,V=Ve+(K-k),C=Le*Pe/me*z,A=$e*Pe/me*z;Q.projectionMatrix.makePerspective(Me,V,C,A,z,me)}function $(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;E.near=S.near=M.near=Q.near,E.far=S.far=M.far=Q.far,(T!==E.near||D!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,D=E.far);const he=Q.parent,Se=E.cameras;$(E,he);for(let ne=0;ne<Se.length;ne++)$(Se[ne],he);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),Q.matrix.copy(E.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale);const K=Q.children;for(let ne=0,Ne=K.length;ne<Ne;ne++)K[ne].updateMatrixWorld(!0);Se.length===2?Z(E,M,S):E.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.getPlanes=function(){return v};let se=null;function oe(Q,he){if(u=he.getViewerPose(l||o),g=he,u!==null){const Se=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let K=!1;Se.length!==E.cameras.length&&(E.cameras.length=0,K=!0);for(let ne=0;ne<Se.length;ne++){const Ne=Se[ne];let Re=null;if(d!==null)Re=d.getViewport(Ne);else{const Le=h.getViewSubImage(f,Ne);Re=Le.viewport,ne===0&&(e.setRenderTargetTextures(x,Le.colorTexture,f.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(x))}let Pe=w[ne];Pe===void 0&&(Pe=new Kn,Pe.layers.enable(ne),Pe.viewport=new cn,w[ne]=Pe),Pe.matrix.fromArray(Ne.transform.matrix),Pe.projectionMatrix.fromArray(Ne.projectionMatrix),Pe.viewport.set(Re.x,Re.y,Re.width,Re.height),ne===0&&E.matrix.copy(Pe.matrix),K===!0&&E.cameras.push(Pe)}}for(let Se=0;Se<_.length;Se++){const K=y[Se],ne=_[Se];K!==null&&ne!==void 0&&ne.update(K,he,l||o)}if(se&&se(Q,he),he.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:he.detectedPlanes});let Se=null;for(const K of v)he.detectedPlanes.has(K)||(Se===null&&(Se=[]),Se.push(K));if(Se!==null)for(const K of Se)v.delete(K),b.delete(K),i.dispatchEvent({type:"planeremoved",data:K});for(const K of he.detectedPlanes)if(!v.has(K))v.add(K),b.set(K,he.lastChangedTime),i.dispatchEvent({type:"planeadded",data:K});else{const ne=b.get(K);K.lastChangedTime>ne&&(b.set(K,K.lastChangedTime),i.dispatchEvent({type:"planechanged",data:K}))}}g=null}const ge=new Bx;ge.setAnimationLoop(oe),this.setAnimationLoop=function(Q){se=Q},this.dispose=function(){}}};function O3(n,e){function t(p,m){m.color.getRGB(p.fogColor.value,Fx(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,x,_,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),l(p,m)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),d(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?a(p,m,x,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===$n&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===$n&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=n.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let _;m.map?_=m.map:m.specularMap?_=m.specularMap:m.displacementMap?_=m.displacementMap:m.normalMap?_=m.normalMap:m.bumpMap?_=m.bumpMap:m.roughnessMap?_=m.roughnessMap:m.metalnessMap?_=m.metalnessMap:m.alphaMap?_=m.alphaMap:m.emissiveMap?_=m.emissiveMap:m.clearcoatMap?_=m.clearcoatMap:m.clearcoatNormalMap?_=m.clearcoatNormalMap:m.clearcoatRoughnessMap?_=m.clearcoatRoughnessMap:m.iridescenceMap?_=m.iridescenceMap:m.iridescenceThicknessMap?_=m.iridescenceThicknessMap:m.specularIntensityMap?_=m.specularIntensityMap:m.specularColorMap?_=m.specularColorMap:m.transmissionMap?_=m.transmissionMap:m.thicknessMap?_=m.thicknessMap:m.sheenColorMap?_=m.sheenColorMap:m.sheenRoughnessMap&&(_=m.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix));let y;m.aoMap?y=m.aoMap:m.lightMap&&(y=m.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,x,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=_*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y;m.map?y=m.map:m.alphaMap&&(y=m.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===$n&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function B3(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function c(_,y){const v=y.program;i.uniformBlockBinding(_,v)}function l(_,y){let v=r[_.id];v===void 0&&(g(_),v=u(_),r[_.id]=v,_.addEventListener("dispose",m));const b=y.program;i.updateUBOMapping(_,b);const M=e.render.frame;s[_.id]!==M&&(f(_),s[_.id]=M)}function u(_){const y=h();_.__bindingPointIndex=y;const v=n.createBuffer(),b=_.__size,M=_.usage;return n.bindBuffer(35345,v),n.bufferData(35345,b,M),n.bindBuffer(35345,null),n.bindBufferBase(35345,y,v),v}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const y=r[_.id],v=_.uniforms,b=_.__cache;n.bindBuffer(35345,y);for(let M=0,S=v.length;M<S;M++){const w=v[M];if(d(w,M,b)===!0){const E=w.__offset,T=Array.isArray(w.value)?w.value:[w.value];let D=0;for(let U=0;U<T.length;U++){const F=T[U],L=p(F);typeof F=="number"?(w.__data[0]=F,n.bufferSubData(35345,E+D,w.__data)):F.isMatrix3?(w.__data[0]=F.elements[0],w.__data[1]=F.elements[1],w.__data[2]=F.elements[2],w.__data[3]=F.elements[0],w.__data[4]=F.elements[3],w.__data[5]=F.elements[4],w.__data[6]=F.elements[5],w.__data[7]=F.elements[0],w.__data[8]=F.elements[6],w.__data[9]=F.elements[7],w.__data[10]=F.elements[8],w.__data[11]=F.elements[0]):(F.toArray(w.__data,D),D+=L.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,E,w.__data)}}n.bindBuffer(35345,null)}function d(_,y,v){const b=_.value;if(v[y]===void 0){if(typeof b=="number")v[y]=b;else{const M=Array.isArray(b)?b:[b],S=[];for(let w=0;w<M.length;w++)S.push(M[w].clone());v[y]=S}return!0}else if(typeof b=="number"){if(v[y]!==b)return v[y]=b,!0}else{const M=Array.isArray(v[y])?v[y]:[v[y]],S=Array.isArray(b)?b:[b];for(let w=0;w<M.length;w++){const E=M[w];if(E.equals(S[w])===!1)return E.copy(S[w]),!0}}return!1}function g(_){const y=_.uniforms;let v=0;const b=16;let M=0;for(let S=0,w=y.length;S<w;S++){const E=y[S],T={boundary:0,storage:0},D=Array.isArray(E.value)?E.value:[E.value];for(let U=0,F=D.length;U<F;U++){const L=D[U],B=p(L);T.boundary+=B.boundary,T.storage+=B.storage}if(E.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=v,S>0){M=v%b;const U=b-M;M!==0&&U-T.boundary<0&&(v+=b-M,E.__offset=v)}v+=T.storage}return M=v%b,M>0&&(v+=b-M),_.__size=v,_.__cache={},this}function p(_){const y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function x(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:c,update:l,dispose:x}}function U3(){const n=du("canvas");return n.style.display="block",n}function $d(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:U3(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,c=n.powerPreference!==void 0?n.powerPreference:"default",l=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ms,this.useLegacyLights=!0,this.toneMapping=Yi,this.toneMappingExposure=1;const p=this;let m=!1,x=0,_=0,y=null,v=-1,b=null;const M=new cn,S=new cn;let w=null,E=e.width,T=e.height,D=1,U=null,F=null;const L=new cn(0,0,E,T),B=new cn(0,0,E,T);let G=!1;const Z=new Ox;let $=!1,se=!1,oe=null;const ge=new Nt,Q=new le,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return y===null?D:1}let K=t;function ne(P,W){for(let ie=0;ie<P.length;ie++){const J=P[ie],ce=e.getContext(J,W);if(ce!==null)return ce}return null}try{const P={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hd}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",et,!1),e.addEventListener("webglcontextcreationerror",tt,!1),K===null){const W=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&W.shift(),K=ne(W,P),K===null)throw ne(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Ne,Re,Pe,Le,$e,pe,ye,De,Ve,Oe,k,z,me,Me,V,C,A,Y,ee,fe,xe,we,ve,re;function We(){Ne=new jA(K),Re=new VA(K,Ne,n),Ne.init(Re),we=new D3(K,Ne,Re),Pe=new R3(K,Ne,Re),Le=new QA,$e=new g3,pe=new P3(K,Ne,Pe,$e,Re,we,Le),ye=new $A(p),De=new YA(p),Ve=new oE(K,Re),ve=new GA(K,Ne,Ve,Re),Oe=new JA(K,Ve,Le,ve),k=new i2(K,Oe,Ve,Le),ee=new n2(K,Re,pe),C=new WA($e),z=new m3(p,ye,De,Ne,Re,ve,C),me=new O3(p,$e),Me=new x3,V=new S3(Ne,Re),Y=new kA(p,ye,De,Pe,k,u,o),A=new C3(p,k,Re),re=new B3(K,Le,Re,Pe),fe=new HA(K,Ne,Le,Re),xe=new KA(K,Ne,Le,Re),Le.programs=z.programs,p.capabilities=Re,p.extensions=Ne,p.properties=$e,p.renderLists=Me,p.shadowMap=A,p.state=Pe,p.info=Le}We();const ke=new z3(p,K);this.xr=ke,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const P=Ne.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ne.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(P){P!==void 0&&(D=P,this.setSize(E,T,!1))},this.getSize=function(P){return P.set(E,T)},this.setSize=function(P,W,ie=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=P,T=W,e.width=Math.floor(P*D),e.height=Math.floor(W*D),ie===!0&&(e.style.width=P+"px",e.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(E*D,T*D).floor()},this.setDrawingBufferSize=function(P,W,ie){E=P,T=W,D=ie,e.width=Math.floor(P*ie),e.height=Math.floor(W*ie),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(M)},this.getViewport=function(P){return P.copy(L)},this.setViewport=function(P,W,ie,J){P.isVector4?L.set(P.x,P.y,P.z,P.w):L.set(P,W,ie,J),Pe.viewport(M.copy(L).multiplyScalar(D).floor())},this.getScissor=function(P){return P.copy(B)},this.setScissor=function(P,W,ie,J){P.isVector4?B.set(P.x,P.y,P.z,P.w):B.set(P,W,ie,J),Pe.scissor(S.copy(B).multiplyScalar(D).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(P){Pe.setScissorTest(G=P)},this.setOpaqueSort=function(P){U=P},this.setTransparentSort=function(P){F=P},this.getClearColor=function(P){return P.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(P=!0,W=!0,ie=!0){let J=0;P&&(J|=16384),W&&(J|=256),ie&&(J|=1024),K.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",et,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),Me.dispose(),V.dispose(),$e.dispose(),ye.dispose(),De.dispose(),k.dispose(),ve.dispose(),re.dispose(),z.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Ce),ke.removeEventListener("sessionend",qe),oe&&(oe.dispose(),oe=null),Ye.stop()};function it(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function et(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const P=Le.autoReset,W=A.enabled,ie=A.autoUpdate,J=A.needsUpdate,ce=A.type;We(),Le.autoReset=P,A.enabled=W,A.autoUpdate=ie,A.needsUpdate=J,A.type=ce}function tt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function mt(P){const W=P.target;W.removeEventListener("dispose",mt),Mt(W)}function Mt(P){Lt(P),$e.remove(P)}function Lt(P){const W=$e.get(P).programs;W!==void 0&&(W.forEach(function(ie){z.releaseProgram(ie)}),P.isShaderMaterial&&z.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,ie,J,ce,Ae){W===null&&(W=he);const Ge=ce.isMesh&&ce.matrixWorld.determinant()<0,rt=_e(P,W,ie,J,ce);Pe.setMaterial(J,Ge);let je=ie.index,lt=1;J.wireframe===!0&&(je=Oe.getWireframeAttribute(ie),lt=2);const nt=ie.drawRange,ut=ie.attributes.position;let _t=nt.start*lt,Vt=(nt.start+nt.count)*lt;Ae!==null&&(_t=Math.max(_t,Ae.start*lt),Vt=Math.min(Vt,(Ae.start+Ae.count)*lt)),je!==null?(_t=Math.max(_t,0),Vt=Math.min(Vt,je.count)):ut!=null&&(_t=Math.max(_t,0),Vt=Math.min(Vt,ut.count));const sn=Vt-_t;if(sn<0||sn===1/0)return;ve.setup(ce,J,rt,ie,je);let yn,Ot=fe;if(je!==null&&(yn=Ve.get(je),Ot=xe,Ot.setIndex(yn)),ce.isMesh)J.wireframe===!0?(Pe.setLineWidth(J.wireframeLinewidth*Se()),Ot.setMode(1)):Ot.setMode(4);else if(ce.isLine){let ht=J.linewidth;ht===void 0&&(ht=1),Pe.setLineWidth(ht*Se()),ce.isLineSegments?Ot.setMode(1):ce.isLineLoop?Ot.setMode(2):Ot.setMode(3)}else ce.isPoints?Ot.setMode(0):ce.isSprite&&Ot.setMode(4);if(ce.isInstancedMesh)Ot.renderInstances(_t,sn,ce.count);else if(ie.isInstancedBufferGeometry){const ht=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Ds=Math.min(ie.instanceCount,ht);Ot.renderInstances(_t,sn,Ds)}else Ot.render(_t,sn)},this.compile=function(P,W){function ie(J,ce,Ae){J.transparent===!0&&J.side===_r&&J.forceSinglePass===!1?(J.side=$n,J.needsUpdate=!0,ue(J,ce,Ae),J.side=Cr,J.needsUpdate=!0,ue(J,ce,Ae),J.side=_r):ue(J,ce,Ae)}f=V.get(P),f.init(),g.push(f),P.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(f.pushLight(J),J.castShadow&&f.pushShadow(J))}),f.setupLights(p.useLegacyLights),P.traverse(function(J){const ce=J.material;if(ce)if(Array.isArray(ce))for(let Ae=0;Ae<ce.length;Ae++){const Ge=ce[Ae];ie(Ge,P,J)}else ie(ce,P,J)}),g.pop(),f=null};let X=null;function de(P){X&&X(P)}function Ce(){Ye.stop()}function qe(){Ye.start()}const Ye=new Bx;Ye.setAnimationLoop(de),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(P){X=P,ke.setAnimationLoop(P),P===null?Ye.stop():Ye.start()},ke.addEventListener("sessionstart",Ce),ke.addEventListener("sessionend",qe),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(W),W=ke.getCamera()),P.isScene===!0&&P.onBeforeRender(p,P,W,y),f=V.get(P,g.length),f.init(),g.push(f),ge.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(ge),se=this.localClippingEnabled,$=C.init(this.clippingPlanes,se),h=Me.get(P,d.length),h.init(),d.push(h),gt(P,W,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(U,F),$===!0&&C.beginShadows();const ie=f.state.shadowsArray;if(A.render(ie,P,W),$===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(h,P),f.setupLights(p.useLegacyLights),W.isArrayCamera){const J=W.cameras;for(let ce=0,Ae=J.length;ce<Ae;ce++){const Ge=J[ce];zt(h,P,Ge,Ge.viewport)}}else zt(h,P,W);y!==null&&(pe.updateMultisampleRenderTarget(y),pe.updateRenderTargetMipmap(y)),P.isScene===!0&&P.onAfterRender(p,P,W),ve.resetDefaultState(),v=-1,b=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function gt(P,W,ie,J){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)ie=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)f.pushLight(P),P.castShadow&&f.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Z.intersectsSprite(P)){J&&Q.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ge);const Ge=k.update(P),rt=P.material;rt.visible&&h.push(P,Ge,rt,ie,Q.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==Le.render.frame&&(P.skeleton.update(),P.skeleton.frame=Le.render.frame),!P.frustumCulled||Z.intersectsObject(P))){J&&Q.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ge);const Ge=k.update(P),rt=P.material;if(Array.isArray(rt)){const je=Ge.groups;for(let lt=0,nt=je.length;lt<nt;lt++){const ut=je[lt],_t=rt[ut.materialIndex];_t&&_t.visible&&h.push(P,Ge,_t,ie,Q.z,ut)}}else rt.visible&&h.push(P,Ge,rt,ie,Q.z,null)}}const Ae=P.children;for(let Ge=0,rt=Ae.length;Ge<rt;Ge++)gt(Ae[Ge],W,ie,J)}function zt(P,W,ie,J){const ce=P.opaque,Ae=P.transmissive,Ge=P.transparent;f.setupLightsView(ie),$===!0&&C.setGlobalState(p.clippingPlanes,ie),Ae.length>0&&Jt(ce,W,ie),J&&Pe.viewport(M.copy(J)),ce.length>0&&Rn(ce,W,ie),Ae.length>0&&Rn(Ae,W,ie),Ge.length>0&&Rn(Ge,W,ie),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Jt(P,W,ie){const J=Re.isWebGL2;oe===null&&(oe=new gs(1024,1024,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")?Va:ps,minFilter:Ha,samples:J&&s===!0?4:0}));const ce=p.getRenderTarget();p.setRenderTarget(oe),p.clear();const Ae=p.toneMapping;p.toneMapping=Yi,Rn(P,W,ie),p.toneMapping=Ae,pe.updateMultisampleRenderTarget(oe),pe.updateRenderTargetMipmap(oe),p.setRenderTarget(ce)}function Rn(P,W,ie){const J=W.isScene===!0?W.overrideMaterial:null;for(let ce=0,Ae=P.length;ce<Ae;ce++){const Ge=P[ce],rt=Ge.object,je=Ge.geometry,lt=J===null?Ge.material:J,nt=Ge.group;rt.layers.test(ie.layers)&&N(rt,W,ie,je,lt,nt)}}function N(P,W,ie,J,ce,Ae){P.onBeforeRender(p,W,ie,J,ce,Ae),P.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ce.onBeforeRender(p,W,ie,J,P,Ae),ce.transparent===!0&&ce.side===_r&&ce.forceSinglePass===!1?(ce.side=$n,ce.needsUpdate=!0,p.renderBufferDirect(ie,W,J,ce,P,Ae),ce.side=Cr,ce.needsUpdate=!0,p.renderBufferDirect(ie,W,J,ce,P,Ae),ce.side=_r):p.renderBufferDirect(ie,W,J,ce,P,Ae),P.onAfterRender(p,W,ie,J,ce,Ae)}function ue(P,W,ie){W.isScene!==!0&&(W=he);const J=$e.get(P),ce=f.state.lights,Ae=f.state.shadowsArray,Ge=ce.state.version,rt=z.getParameters(P,ce.state,Ae,W,ie),je=z.getProgramCacheKey(rt);let lt=J.programs;J.environment=P.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(P.isMeshStandardMaterial?De:ye).get(P.envMap||J.environment),lt===void 0&&(P.addEventListener("dispose",mt),lt=new Map,J.programs=lt);let nt=lt.get(je);if(nt!==void 0){if(J.currentProgram===nt&&J.lightsStateVersion===Ge)return ae(P,rt),nt}else rt.uniforms=z.getUniforms(P),P.onBuild(ie,rt,p),P.onBeforeCompile(rt,p),nt=z.acquireProgram(rt,je),lt.set(je,nt),J.uniforms=rt.uniforms;const ut=J.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ut.clippingPlanes=C.uniform),ae(P,rt),J.needsLights=ct(P),J.lightsStateVersion=Ge,J.needsLights&&(ut.ambientLightColor.value=ce.state.ambient,ut.lightProbe.value=ce.state.probe,ut.directionalLights.value=ce.state.directional,ut.directionalLightShadows.value=ce.state.directionalShadow,ut.spotLights.value=ce.state.spot,ut.spotLightShadows.value=ce.state.spotShadow,ut.rectAreaLights.value=ce.state.rectArea,ut.ltc_1.value=ce.state.rectAreaLTC1,ut.ltc_2.value=ce.state.rectAreaLTC2,ut.pointLights.value=ce.state.point,ut.pointLightShadows.value=ce.state.pointShadow,ut.hemisphereLights.value=ce.state.hemi,ut.directionalShadowMap.value=ce.state.directionalShadowMap,ut.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,ut.spotShadowMap.value=ce.state.spotShadowMap,ut.spotLightMatrix.value=ce.state.spotLightMatrix,ut.spotLightMap.value=ce.state.spotLightMap,ut.pointShadowMap.value=ce.state.pointShadowMap,ut.pointShadowMatrix.value=ce.state.pointShadowMatrix);const _t=nt.getUniforms(),Vt=ou.seqWithValue(_t.seq,ut);return J.currentProgram=nt,J.uniformsList=Vt,nt}function ae(P,W){const ie=$e.get(P);ie.outputEncoding=W.outputEncoding,ie.instancing=W.instancing,ie.skinning=W.skinning,ie.morphTargets=W.morphTargets,ie.morphNormals=W.morphNormals,ie.morphColors=W.morphColors,ie.morphTargetsCount=W.morphTargetsCount,ie.numClippingPlanes=W.numClippingPlanes,ie.numIntersection=W.numClipIntersection,ie.vertexAlphas=W.vertexAlphas,ie.vertexTangents=W.vertexTangents,ie.toneMapping=W.toneMapping}function _e(P,W,ie,J,ce){W.isScene!==!0&&(W=he),pe.resetTextureUnits();const Ae=W.fog,Ge=J.isMeshStandardMaterial?W.environment:null,rt=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:ms,je=(J.isMeshStandardMaterial?De:ye).get(J.envMap||Ge),lt=J.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,nt=!!J.normalMap&&!!ie.attributes.tangent,ut=!!ie.morphAttributes.position,_t=!!ie.morphAttributes.normal,Vt=!!ie.morphAttributes.color,sn=J.toneMapped?p.toneMapping:Yi,yn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ot=yn!==void 0?yn.length:0,ht=$e.get(J),Ds=f.state.lights;if($===!0&&(se===!0||P!==b)){const bn=P===b&&J.id===v;C.setState(J,P,bn)}let Ct=!1;J.version===ht.__version?(ht.needsLights&&ht.lightsStateVersion!==Ds.state.version||ht.outputEncoding!==rt||ce.isInstancedMesh&&ht.instancing===!1||!ce.isInstancedMesh&&ht.instancing===!0||ce.isSkinnedMesh&&ht.skinning===!1||!ce.isSkinnedMesh&&ht.skinning===!0||ht.envMap!==je||J.fog===!0&&ht.fog!==Ae||ht.numClippingPlanes!==void 0&&(ht.numClippingPlanes!==C.numPlanes||ht.numIntersection!==C.numIntersection)||ht.vertexAlphas!==lt||ht.vertexTangents!==nt||ht.morphTargets!==ut||ht.morphNormals!==_t||ht.morphColors!==Vt||ht.toneMapping!==sn||Re.isWebGL2===!0&&ht.morphTargetsCount!==Ot)&&(Ct=!0):(Ct=!0,ht.__version=J.version);let Ii=ht.currentProgram;Ct===!0&&(Ii=ue(J,W,ce));let Br=!1,Fi=!1,Qo=!1;const fn=Ii.getUniforms(),ri=ht.uniforms;if(Pe.useProgram(Ii.program)&&(Br=!0,Fi=!0,Qo=!0),J.id!==v&&(v=J.id,Fi=!0),Br||b!==P){if(fn.setValue(K,"projectionMatrix",P.projectionMatrix),Re.logarithmicDepthBuffer&&fn.setValue(K,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),b!==P&&(b=P,Fi=!0,Qo=!0),J.isShaderMaterial||J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshStandardMaterial||J.envMap){const bn=fn.map.cameraPosition;bn!==void 0&&bn.setValue(K,Q.setFromMatrixPosition(P.matrixWorld))}(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&fn.setValue(K,"isOrthographic",P.isOrthographicCamera===!0),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial||J.isShadowMaterial||ce.isSkinnedMesh)&&fn.setValue(K,"viewMatrix",P.matrixWorldInverse)}if(ce.isSkinnedMesh){fn.setOptional(K,ce,"bindMatrix"),fn.setOptional(K,ce,"bindMatrixInverse");const bn=ce.skeleton;bn&&(Re.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),fn.setValue(K,"boneTexture",bn.boneTexture,pe),fn.setValue(K,"boneTextureSize",bn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ea=ie.morphAttributes;if((ea.position!==void 0||ea.normal!==void 0||ea.color!==void 0&&Re.isWebGL2===!0)&&ee.update(ce,ie,Ii),(Fi||ht.receiveShadow!==ce.receiveShadow)&&(ht.receiveShadow=ce.receiveShadow,fn.setValue(K,"receiveShadow",ce.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ri.envMap.value=je,ri.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),Fi&&(fn.setValue(K,"toneMappingExposure",p.toneMappingExposure),ht.needsLights&&Be(ri,Qo),Ae&&J.fog===!0&&me.refreshFogUniforms(ri,Ae),me.refreshMaterialUniforms(ri,J,D,T,oe),ou.upload(K,ht.uniformsList,ri,pe)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ou.upload(K,ht.uniformsList,ri,pe),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&fn.setValue(K,"center",ce.center),fn.setValue(K,"modelViewMatrix",ce.modelViewMatrix),fn.setValue(K,"normalMatrix",ce.normalMatrix),fn.setValue(K,"modelMatrix",ce.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const bn=J.uniformsGroups;for(let R=0,H=bn.length;R<H;R++)if(Re.isWebGL2){const O=bn[R];re.update(O,Ii),re.bind(O,Ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ii}function Be(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function ct(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(P,W,ie){$e.get(P.texture).__webglTexture=W,$e.get(P.depthTexture).__webglTexture=ie;const J=$e.get(P);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=ie===void 0,J.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,W){const ie=$e.get(P);ie.__webglFramebuffer=W,ie.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,ie=0){y=P,x=W,_=ie;let J=!0,ce=null,Ae=!1,Ge=!1;if(P){const je=$e.get(P);je.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(36160,null),J=!1):je.__webglFramebuffer===void 0?pe.setupRenderTarget(P):je.__hasExternalTextures&&pe.rebindTextures(P,$e.get(P.texture).__webglTexture,$e.get(P.depthTexture).__webglTexture);const lt=P.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ge=!0);const nt=$e.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(ce=nt[W],Ae=!0):Re.isWebGL2&&P.samples>0&&pe.useMultisampledRTT(P)===!1?ce=$e.get(P).__webglMultisampledFramebuffer:ce=nt,M.copy(P.viewport),S.copy(P.scissor),w=P.scissorTest}else M.copy(L).multiplyScalar(D).floor(),S.copy(B).multiplyScalar(D).floor(),w=G;if(Pe.bindFramebuffer(36160,ce)&&Re.drawBuffers&&J&&Pe.drawBuffers(P,ce),Pe.viewport(M),Pe.scissor(S),Pe.setScissorTest(w),Ae){const je=$e.get(P.texture);K.framebufferTexture2D(36160,36064,34069+W,je.__webglTexture,ie)}else if(Ge){const je=$e.get(P.texture),lt=W||0;K.framebufferTextureLayer(36160,36064,je.__webglTexture,ie||0,lt)}v=-1},this.readRenderTargetPixels=function(P,W,ie,J,ce,Ae,Ge){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let rt=$e.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ge!==void 0&&(rt=rt[Ge]),rt){Pe.bindFramebuffer(36160,rt);try{const je=P.texture,lt=je.format,nt=je.type;if(lt!==ei&&we.convert(lt)!==K.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ut=nt===Va&&(Ne.has("EXT_color_buffer_half_float")||Re.isWebGL2&&Ne.has("EXT_color_buffer_float"));if(nt!==ps&&we.convert(nt)!==K.getParameter(35738)&&!(nt===xr&&(Re.isWebGL2||Ne.has("OES_texture_float")||Ne.has("WEBGL_color_buffer_float")))&&!ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-J&&ie>=0&&ie<=P.height-ce&&K.readPixels(W,ie,J,ce,we.convert(lt),we.convert(nt),Ae)}finally{const je=y!==null?$e.get(y).__webglFramebuffer:null;Pe.bindFramebuffer(36160,je)}}},this.copyFramebufferToTexture=function(P,W,ie=0){const J=Math.pow(2,-ie),ce=Math.floor(W.image.width*J),Ae=Math.floor(W.image.height*J);pe.setTexture2D(W,0),K.copyTexSubImage2D(3553,ie,0,0,P.x,P.y,ce,Ae),Pe.unbindTexture()},this.copyTextureToTexture=function(P,W,ie,J=0){const ce=W.image.width,Ae=W.image.height,Ge=we.convert(ie.format),rt=we.convert(ie.type);pe.setTexture2D(ie,0),K.pixelStorei(37440,ie.flipY),K.pixelStorei(37441,ie.premultiplyAlpha),K.pixelStorei(3317,ie.unpackAlignment),W.isDataTexture?K.texSubImage2D(3553,J,P.x,P.y,ce,Ae,Ge,rt,W.image.data):W.isCompressedTexture?K.compressedTexSubImage2D(3553,J,P.x,P.y,W.mipmaps[0].width,W.mipmaps[0].height,Ge,W.mipmaps[0].data):K.texSubImage2D(3553,J,P.x,P.y,Ge,rt,W.image),J===0&&ie.generateMipmaps&&K.generateMipmap(3553),Pe.unbindTexture()},this.copyTextureToTexture3D=function(P,W,ie,J,ce=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=P.max.x-P.min.x+1,Ge=P.max.y-P.min.y+1,rt=P.max.z-P.min.z+1,je=we.convert(J.format),lt=we.convert(J.type);let nt;if(J.isData3DTexture)pe.setTexture3D(J,0),nt=32879;else if(J.isDataArrayTexture)pe.setTexture2DArray(J,0),nt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(37440,J.flipY),K.pixelStorei(37441,J.premultiplyAlpha),K.pixelStorei(3317,J.unpackAlignment);const ut=K.getParameter(3314),_t=K.getParameter(32878),Vt=K.getParameter(3316),sn=K.getParameter(3315),yn=K.getParameter(32877),Ot=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;K.pixelStorei(3314,Ot.width),K.pixelStorei(32878,Ot.height),K.pixelStorei(3316,P.min.x),K.pixelStorei(3315,P.min.y),K.pixelStorei(32877,P.min.z),ie.isDataTexture||ie.isData3DTexture?K.texSubImage3D(nt,ce,W.x,W.y,W.z,Ae,Ge,rt,je,lt,Ot.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(nt,ce,W.x,W.y,W.z,Ae,Ge,rt,je,Ot.data)):K.texSubImage3D(nt,ce,W.x,W.y,W.z,Ae,Ge,rt,je,lt,Ot),K.pixelStorei(3314,ut),K.pixelStorei(32878,_t),K.pixelStorei(3316,Vt),K.pixelStorei(3315,sn),K.pixelStorei(32877,yn),ce===0&&J.generateMipmaps&&K.generateMipmap(nt),Pe.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?pe.setTextureCube(P,0):P.isData3DTexture?pe.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?pe.setTexture2DArray(P,0):pe.setTexture2D(P,0),Pe.unbindTexture()},this.resetState=function(){x=0,_=0,y=null,Pe.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties($d.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(n){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!n}}});let k3=class extends $d{};k3.prototype.isWebGL1Renderer=!0;let G3=class extends xi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};const jg=new le,Jg=new cn,Kg=new cn,H3=new le,Qg=new Nt;let V3=class extends Ai{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Nt,this.bindMatrixInverse=new Nt}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new cn,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,r=this.geometry;Jg.fromBufferAttribute(r.attributes.skinIndex,e),Kg.fromBufferAttribute(r.attributes.skinWeight,e),jg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Kg.getComponent(s);if(o!==0){const a=Jg.getComponent(s);Qg.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(H3.copy(jg).applyMatrix4(Qg),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Wx=class extends xi{constructor(){super(),this.isBone=!0,this.type="Bone"}},W3=class extends _i{constructor(e=null,t=1,i=1,r,s,o,a,c,l=mn,u=mn,h,f){super(null,o,a,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};const e_=new Nt,$3=new Nt;let q3=class $x{constructor(e=[],t=[]){this.uuid=Ho(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Nt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:$3;e_.multiplyMatrices(a,t[s]),e_.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new $x(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=DS(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new W3(t,e,e,ei,xr);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Wx),this.bones.push(o),this.boneInverses.push(new Nt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}},qx=class extends Al{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};const t_=new le,n_=new le,i_=new Nt,sf=new Tx,mc=new Hu;let X3=class extends xi{constructor(e=new Nr,t=new qx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)t_.fromBufferAttribute(t,r-1),n_.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=t_.distanceTo(n_);e.setAttribute("lineDistance",new In(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mc.copy(i.boundingSphere),mc.applyMatrix4(r),mc.radius+=s,e.ray.intersectsSphere(mc)===!1)return;i_.copy(r).invert(),sf.copy(e.ray).applyMatrix4(i_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new le,u=new le,h=new le,f=new le,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const x=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let y=x,v=_-1;y<v;y+=d){const b=g.getX(y),M=g.getX(y+1);if(l.fromBufferAttribute(m,b),u.fromBufferAttribute(m,M),sf.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let y=x,v=_-1;y<v;y+=d){if(l.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),sf.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};const r_=new le,s_=new le;let Z3=class extends X3{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)r_.fromBufferAttribute(t,r),s_.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+r_.distanceTo(s_);e.setAttribute("lineDistance",new In(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Y3=class extends Z3{constructor(e=10,t=10,i=4473924,r=8947848){i=new St(i),r=new St(r);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let f=0,d=0,g=-a;f<=t;f++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const p=f===s?i:r;p.toArray(l,d),d+=3,p.toArray(l,d),d+=3,p.toArray(l,d),d+=3,p.toArray(l,d),d+=3}const u=new Nr;u.setAttribute("position",new In(c,3)),u.setAttribute("color",new In(l,3));const h=new qx({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hd);var qd={};const Xd="126",j3={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},J3={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xx=0,ld=1,Zx=2,K3=3,Q3=0,Zd=1,Yx=2,xo=3,Wo=0,Yt=1,Ll=2,Yd=1,eL=2,ji=0,So=1,cd=2,ud=3,hd=4,jx=5,es=100,Jx=101,Kx=102,fd=103,dd=104,Qx=200,ev=201,tv=202,nv=203,jd=204,Jd=205,iv=206,rv=207,sv=208,ov=209,av=210,lv=0,cv=1,uv=2,pu=3,hv=4,fv=5,dv=6,pv=7,Cl=0,mv=1,gv=2,cs=0,_v=1,xv=2,vv=3,yv=4,bv=5,$u=300,Rl=301,Pl=302,mu=303,gu=304,$o=306,Dl=307,$a=1e3,En=1001,qa=1002,Kt=1003,_u=1004,tL=1004,xu=1005,nL=1005,Qt=1006,Kd=1007,iL=1007,qo=1008,rL=1008,Xo=1009,Mv=1010,wv=1011,Xa=1012,Sv=1013,Ra=1014,Zi=1015,Za=1016,Ev=1017,Tv=1018,Av=1019,Eo=1020,Lv=1021,Er=1022,qn=1023,Cv=1024,Rv=1025,Pv=qn,us=1026,Io=1027,Dv=1028,Iv=1029,Fv=1030,Nv=1031,zv=1032,Ov=1033,pd=33776,md=33777,gd=33778,_d=33779,xd=35840,vd=35841,yd=35842,bd=35843,Bv=36196,Md=37492,wd=37496,Uv=37808,kv=37809,Gv=37810,Hv=37811,Vv=37812,Wv=37813,$v=37814,qv=37815,Xv=37816,Zv=37817,Yv=37818,jv=37819,Jv=37820,Kv=37821,Qv=36492,ey=37840,ty=37841,ny=37842,iy=37843,ry=37844,sy=37845,oy=37846,ay=37847,ly=37848,cy=37849,uy=37850,hy=37851,fy=37852,dy=37853,py=2200,my=2201,gy=2202,Ya=2300,ja=2301,au=2302,ss=2400,os=2401,Ja=2402,qu=2500,Qd=2501,_y=0,sL=1,oL=2,An=3e3,Il=3001,Xu=3007,Zu=3002,xy=3003,ep=3004,tp=3005,np=3006,vy=3200,yy=3201,Ts=0,by=1,aL=0,lu=7680,lL=7681,cL=7682,uL=7683,hL=34055,fL=34056,dL=5386,pL=512,mL=513,gL=514,_L=515,xL=516,vL=517,yL=518,My=519,Fl=35044,xs=35048,bL=35040,ML=35045,wL=35049,SL=35041,EL=35046,TL=35050,AL=35042,LL="100",Sd="300 es";function er(){}Object.assign(er.prototype,{addEventListener:function(n,e){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[n]===void 0&&(t[n]=[]),t[n].indexOf(e)===-1&&t[n].push(e)},hasEventListener:function(n,e){if(this._listeners===void 0)return!1;const t=this._listeners;return t[n]!==void 0&&t[n].indexOf(e)!==-1},removeEventListener:function(n,e){if(this._listeners===void 0)return;const i=this._listeners[n];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}},dispatchEvent:function(n){if(this._listeners===void 0)return;const t=this._listeners[n.type];if(t!==void 0){n.target=this;const i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,n)}}});const dn=[];for(let n=0;n<256;n++)dn[n]=(n<16?"0":"")+n.toString(16);let gc=1234567;const at={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toUpperCase()},clamp:function(n,e,t){return Math.max(e,Math.min(t,n))},euclideanModulo:function(n,e){return(n%e+e)%e},mapLinear:function(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)},lerp:function(n,e,t){return(1-t)*n+t*e},damp:function(n,e,t,i){return at.lerp(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(at.euclideanModulo(n,e*2)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){return n!==void 0&&(gc=n%2147483647),gc=gc*16807%2147483647,(gc-1)/2147483646},degToRad:function(n){return n*at.DEG2RAD},radToDeg:function(n){return n*at.RAD2DEG},isPowerOfTwo:function(n){return(n&n-1)===0&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*h,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*d,a*l);break;case"YXY":n.set(c*d,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};class Ee{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}Ee.prototype.isVector2=!0;class en{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],p=r[0],m=r[3],x=r[6],_=r[1],y=r[4],v=r[7],b=r[2],M=r[5],S=r[8];return s[0]=o*p+a*_+c*b,s[3]=o*m+a*y+c*M,s[6]=o*x+a*v+c*S,s[1]=l*p+u*_+h*b,s[4]=l*m+u*y+h*M,s[7]=l*x+u*v+h*S,s[2]=f*p+d*_+g*b,s[5]=f*m+d*y+g*M,s[8]=f*x+d*v+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,g=t*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(r*l-u*i)*p,e[2]=(a*i-r*o)*p,e[3]=f*p,e[4]=(u*t-r*c)*p,e[5]=(r*s-a*t)*p,e[6]=d*p,e[7]=(i*c-l*t)*p,e[8]=(o*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],u=r[7];return r[0]=t*s+i*c,r[3]=t*o+i*l,r[6]=t*a+i*u,r[1]=-i*s+t*c,r[4]=-i*o+t*l,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}en.prototype.isMatrix3=!0;let Zs;const As={getDataURL:function(n){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement>"u")return n.src;let e;if(n instanceof HTMLCanvasElement)e=n;else{Zs===void 0&&(Zs=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Zs.width=n.width,Zs.height=n.height;const t=Zs.getContext("2d");n instanceof ImageData?t.putImageData(n,0,0):t.drawImage(n,0,0,n.width,n.height),e=Zs}return e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}};let CL=0;class rn extends er{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,i=En,r=En,s=Qt,o=qo,a=qn,c=Xo,l=1,u=An){super(),Object.defineProperty(this,"id",{value:CL++}),this.uuid=at.generateUUID(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new en,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const r=this.image;if(r.uuid===void 0&&(r.uuid=at.generateUUID()),!t&&e.images[r.uuid]===void 0){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(of(r[o].image)):s.push(of(r[o]))}else s=of(r);e.images[r.uuid]={uuid:r.uuid,url:s}}i.image=r.uuid}return t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$u)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $a:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $a:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}rn.DEFAULT_IMAGE=void 0;rn.DEFAULT_MAPPING=$u;rn.prototype.isTexture=!0;function of(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?As.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class bt{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],p=c[2],m=c[6],x=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(d+1)/2,b=(x+1)/2,M=(u+f)/4,S=(h+p)/4,w=(g+m)/4;return y>v&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=M/i,s=S/i):v>b?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=M/r,s=w/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=S/s,r=w/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-p)/_,this.z=(f-u)/_,this.w=Math.acos((l+d+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}bt.prototype.isVector4=!0;class Ji extends er{constructor(e,t,i){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),i=i||{},this.texture=new rn(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Qt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Ji.prototype.isWebGLRenderTarget=!0;class wy extends Ji{constructor(e,t,i){super(e,t,i),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}wy.prototype.isWebGLMultisampleRenderTarget=!0;class un{constructor(e=0,t=0,i=0,r=1){this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return i.copy(e).slerp(t,r)}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=p;return}if(h!==p||c!==f||l!==d||u!==g){let m=1-a;const x=c*f+l*d+u*g+h*p,_=x>=0?1:-1,y=1-x*x;if(y>Number.EPSILON){const b=Math.sqrt(y),M=Math.atan2(b,x*_);m=Math.sin(m*M)/b,a=Math.sin(a*M)/b}const v=a*_;if(c=c*m+f*v,l=l*m+d*v,u=u*m+g*v,h=h*m+p*v,m===1-a){const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-a*d,e[t+2]=l*g+u*d+a*f-c*h,e[t+3]=u*g-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),f=c(i/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-6?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at.clamp(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}un.prototype.isQuaternion=!0;class I{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(o_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(o_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*i,u=c*i+a*t-s*r,h=c*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=l*c+f*-s+u*-a-h*-o,this.y=u*c+f*-o+h*-s-l*-a,this.z=h*c+f*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return af.copy(this).projectOnVector(e),this.sub(af)}reflect(e){return this.sub(af.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(at.clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}I.prototype.isVector3=!0;const af=new I,o_=new un;class Nn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],f=e[c+2];u<t&&(t=u),h<i&&(i=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),f=e.getZ(c);u<t&&(t=u),h<i&&(i=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ua.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new I),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new I),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),lf.copy(t.boundingBox),lf.applyMatrix4(e.matrixWorld),this.union(lf));const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new I),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ua),ua.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),_c.subVectors(this.max,ha),Ys.subVectors(e.a,ha),js.subVectors(e.b,ha),Js.subVectors(e.c,ha),or.subVectors(js,Ys),ar.subVectors(Js,js),Hr.subVectors(Ys,Js);let t=[0,-or.z,or.y,0,-ar.z,ar.y,0,-Hr.z,Hr.y,or.z,0,-or.x,ar.z,0,-ar.x,Hr.z,0,-Hr.x,-or.y,or.x,0,-ar.y,ar.x,0,-Hr.y,Hr.x,0];return!cf(t,Ys,js,Js,_c)||(t=[1,0,0,0,1,0,0,0,1],!cf(t,Ys,js,Js,_c))?!1:(xc.crossVectors(or,ar),t=[xc.x,xc.y,xc.z],cf(t,Ys,js,Js,_c))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new I),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ua.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(ua).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Nn.prototype.isBox3=!0;const Gi=[new I,new I,new I,new I,new I,new I,new I,new I],ua=new I,lf=new Nn,Ys=new I,js=new I,Js=new I,or=new I,ar=new I,Hr=new I,ha=new I,_c=new I,xc=new I,Vr=new I;function cf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Vr.fromArray(n,s);const a=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),c=e.dot(Vr),l=t.dot(Vr),u=i.dot(Vr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const RL=new Nn;class zr{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):RL.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new I),t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new Nn),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new I,uf=new I,vc=new I,lr=new I,hf=new I,yc=new I,ff=new I;class Or{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new I),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new I),t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.direction).multiplyScalar(t).add(this.origin),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){uf.copy(e).add(t).multiplyScalar(.5),vc.copy(t).sub(e).normalize(),lr.copy(this.origin).sub(uf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(vc),a=lr.dot(this.direction),c=-lr.dot(vc),l=lr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const p=1/u;h*=p,f*=p,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(vc).multiplyScalar(f).add(uf),d}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const i=Hi.dot(this.direction),r=Hi.dot(Hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,i,r,s){hf.subVectors(t,e),yc.subVectors(i,e),ff.crossVectors(hf,yc);let o=this.direction.dot(ff),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;lr.subVectors(this.origin,e);const c=a*this.direction.dot(yc.crossVectors(lr,yc));if(c<0)return null;const l=a*this.direction.dot(hf.cross(lr));if(l<0||c+l>o)return null;const u=-a*lr.dot(ff);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,c,l,u,h,f,d,g,p,m){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=r,x[1]=s,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=u,x[10]=h,x[14]=f,x[3]=d,x[7]=g,x[11]=p,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ks.setFromMatrixColumn(e,0).length(),s=1/Ks.setFromMatrixColumn(e,1).length(),o=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,p=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-p*l,t[9]=-a*c,t[2]=p-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,g=l*u,p=l*h;t[0]=f+p*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=p+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,g=l*u,p=l*h;t[0]=f-p*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=p-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,p=a*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+p,t[1]=c*h,t[5]=p*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,g=a*c,p=a*l;t[0]=c*u,t[4]=p-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-p*h}else if(e.order==="XZY"){const f=o*c,d=o*l,g=a*c,p=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+p,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PL,e,DL)}lookAt(e,t,i){const r=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),cr.crossVectors(i,Un),cr.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),cr.crossVectors(i,Un)),cr.normalize(),bc.crossVectors(Un,cr),r[0]=cr.x,r[4]=bc.x,r[8]=Un.x,r[1]=cr.y,r[5]=bc.y,r[9]=Un.y,r[2]=cr.z,r[6]=bc.z,r[10]=Un.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],p=i[6],m=i[10],x=i[14],_=i[3],y=i[7],v=i[11],b=i[15],M=r[0],S=r[4],w=r[8],E=r[12],T=r[1],D=r[5],U=r[9],F=r[13],L=r[2],B=r[6],G=r[10],Z=r[14],$=r[3],se=r[7],oe=r[11],ge=r[15];return s[0]=o*M+a*T+c*L+l*$,s[4]=o*S+a*D+c*B+l*se,s[8]=o*w+a*U+c*G+l*oe,s[12]=o*E+a*F+c*Z+l*ge,s[1]=u*M+h*T+f*L+d*$,s[5]=u*S+h*D+f*B+d*se,s[9]=u*w+h*U+f*G+d*oe,s[13]=u*E+h*F+f*Z+d*ge,s[2]=g*M+p*T+m*L+x*$,s[6]=g*S+p*D+m*B+x*se,s[10]=g*w+p*U+m*G+x*oe,s[14]=g*E+p*F+m*Z+x*ge,s[3]=_*M+y*T+v*L+b*$,s[7]=_*S+y*D+v*B+b*se,s[11]=_*w+y*U+v*G+b*oe,s[15]=_*E+y*F+v*Z+b*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],p=e[7],m=e[11],x=e[15];return g*(+s*c*h-r*l*h-s*a*f+i*l*f+r*a*d-i*c*d)+p*(+t*c*d-t*l*f+s*o*f-r*o*d+r*l*u-s*c*u)+m*(+t*l*h-t*a*d-s*o*h+i*o*d+s*a*u-i*l*u)+x*(-r*a*u-t*c*h+t*a*f+r*o*h-i*o*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],p=e[13],m=e[14],x=e[15],_=h*m*l-p*f*l+p*c*d-a*m*d-h*c*x+a*f*x,y=g*f*l-u*m*l-g*c*d+o*m*d+u*c*x-o*f*x,v=u*p*l-g*h*l+g*a*d-o*p*d-u*a*x+o*h*x,b=g*h*c-u*p*c-g*a*f+o*p*f+u*a*m-o*h*m,M=t*_+i*y+r*v+s*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/M;return e[0]=_*S,e[1]=(p*f*s-h*m*s-p*r*d+i*m*d+h*r*x-i*f*x)*S,e[2]=(a*m*s-p*c*s+p*r*l-i*m*l-a*r*x+i*c*x)*S,e[3]=(h*c*s-a*f*s-h*r*l+i*f*l+a*r*d-i*c*d)*S,e[4]=y*S,e[5]=(u*m*s-g*f*s+g*r*d-t*m*d-u*r*x+t*f*x)*S,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*x-t*c*x)*S,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*d+t*c*d)*S,e[8]=v*S,e[9]=(g*h*s-u*p*s-g*i*d+t*p*d+u*i*x-t*h*x)*S,e[10]=(o*p*s-g*a*s+g*i*l-t*p*l-o*i*x+t*a*x)*S,e[11]=(u*a*s-o*h*s-u*i*l+t*h*l+o*i*d-t*a*d)*S,e[12]=b*S,e[13]=(u*p*r-g*h*r+g*i*f-t*p*f-u*i*m+t*h*m)*S,e[14]=(g*a*r-o*p*r-g*i*c+t*p*c+o*i*m-t*a*m)*S,e[15]=(o*h*r-u*a*r+u*i*c-t*h*c-o*i*f+t*a*f)*S,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i){return this.set(1,t,i,0,e,1,i,0,e,t,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,g=s*h,p=o*u,m=o*h,x=a*h,_=c*l,y=c*u,v=c*h,b=i.x,M=i.y,S=i.z;return r[0]=(1-(p+x))*b,r[1]=(d+v)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(d-v)*M,r[5]=(1-(f+x))*M,r[6]=(m+_)*M,r[7]=0,r[8]=(g+y)*S,r[9]=(m-_)*S,r[10]=(1-(f+p))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ks.set(r[0],r[1],r[2]).length();const o=Ks.set(r[4],r[5],r[6]).length(),a=Ks.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],li.copy(this);const l=1/s,u=1/o,h=1/a;return li.elements[0]*=l,li.elements[1]*=l,li.elements[2]*=l,li.elements[4]*=u,li.elements[5]*=u,li.elements[6]*=u,li.elements[8]*=h,li.elements[9]*=h,li.elements[10]*=h,t.setFromRotationMatrix(li),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*s/(t-e),l=2*s/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,c=1/(t-e),l=1/(i-r),u=1/(o-s),h=(t+e)*c,f=(i+r)*l,d=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}Ke.prototype.isMatrix4=!0;const Ks=new I,li=new Ke,PL=new I(0,0,0),DL=new I(1,1,1),cr=new I,bc=new I,Un=new I,a_=new Ke,l_=new un;class Ls{constructor(e=0,t=0,i=0,r=Ls.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,i){const r=at.clamp,s=e.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],h=s[9],f=s[2],d=s[6],g=s[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-r(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-r(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return a_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(a_,t,i)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return l_.setFromEuler(this),this.setFromQuaternion(l_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new I(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Ls.prototype.isEuler=!0;Ls.DefaultOrder="XYZ";Ls.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ip{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let IL=0;const c_=new I,Qs=new un,Vi=new Ke,Mc=new I,fa=new I,FL=new I,NL=new un,u_=new I(1,0,0),h_=new I(0,1,0),f_=new I(0,0,1),zL={type:"added"},d_={type:"removed"};function st(){Object.defineProperty(this,"id",{value:IL++}),this.uuid=at.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DefaultUp.clone();const n=new I,e=new Ls,t=new un,i=new I(1,1,1);function r(){t.setFromEuler(e,!1)}function s(){e.setFromQuaternion(t,void 0,!1)}e._onChange(r),t._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new en}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=st.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}st.DefaultUp=new I(0,1,0);st.DefaultMatrixAutoUpdate=!0;st.prototype=Object.assign(Object.create(er.prototype),{constructor:st,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(n){return this.quaternion.premultiply(n),this},setRotationFromAxisAngle:function(n,e){this.quaternion.setFromAxisAngle(n,e)},setRotationFromEuler:function(n){this.quaternion.setFromEuler(n,!0)},setRotationFromMatrix:function(n){this.quaternion.setFromRotationMatrix(n)},setRotationFromQuaternion:function(n){this.quaternion.copy(n)},rotateOnAxis:function(n,e){return Qs.setFromAxisAngle(n,e),this.quaternion.multiply(Qs),this},rotateOnWorldAxis:function(n,e){return Qs.setFromAxisAngle(n,e),this.quaternion.premultiply(Qs),this},rotateX:function(n){return this.rotateOnAxis(u_,n)},rotateY:function(n){return this.rotateOnAxis(h_,n)},rotateZ:function(n){return this.rotateOnAxis(f_,n)},translateOnAxis:function(n,e){return c_.copy(n).applyQuaternion(this.quaternion),this.position.add(c_.multiplyScalar(e)),this},translateX:function(n){return this.translateOnAxis(u_,n)},translateY:function(n){return this.translateOnAxis(h_,n)},translateZ:function(n){return this.translateOnAxis(f_,n)},localToWorld:function(n){return n.applyMatrix4(this.matrixWorld)},worldToLocal:function(n){return n.applyMatrix4(Vi.copy(this.matrixWorld).invert())},lookAt:function(n,e,t){n.isVector3?Mc.copy(n):Mc.set(n,e,t);const i=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(fa,Mc,this.up):Vi.lookAt(Mc,fa,this.up),this.quaternion.setFromRotationMatrix(Vi),i&&(Vi.extractRotation(i.matrixWorld),Qs.setFromRotationMatrix(Vi),this.quaternion.premultiply(Qs.invert()))},add:function(n){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.parent!==null&&n.parent.remove(n),n.parent=this,this.children.push(n),n.dispatchEvent(zL)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)},remove:function(n){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const e=this.children.indexOf(n);return e!==-1&&(n.parent=null,this.children.splice(e,1),n.dispatchEvent(d_)),this},clear:function(){for(let n=0;n<this.children.length;n++){const e=this.children[n];e.parent=null,e.dispatchEvent(d_)}return this.children.length=0,this},attach:function(n){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),Vi.multiply(n.parent.matrixWorld)),n.applyMatrix4(Vi),this.add(n),n.updateWorldMatrix(!1,!0),this},getObjectById:function(n){return this.getObjectByProperty("id",n)},getObjectByName:function(n){return this.getObjectByProperty("name",n)},getObjectByProperty:function(n,e){if(this[n]===e)return this;for(let t=0,i=this.children.length;t<i;t++){const s=this.children[t].getObjectByProperty(n,e);if(s!==void 0)return s}},getWorldPosition:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),n=new I),this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),n=new un),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,n,FL),n},getWorldScale:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),n=new I),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,NL,n),n},getWorldDirection:function(n){n===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),n=new I),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return n.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(n){n(this);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverse(n)},traverseVisible:function(n){if(this.visible===!1)return;n(this);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverseVisible(n)},traverseAncestors:function(n){const e=this.parent;e!==null&&(n(e),e.traverseAncestors(n))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,n=!0);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].updateMatrixWorld(n)},updateWorldMatrix:function(n,e){const t=this.parent;if(n===!0&&t!==null&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(n){const e=n===void 0||typeof n=="string",t={};e&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},t.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(n)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(n.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){const u=a[c];r(n.shapes,u)}else r(n.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(n.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(n.materials,this.material[a]));i.material=o}else i.material=r(n.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(n).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(r(n.animations,a))}}if(e){const o=s(n.geometries),a=s(n.materials),c=s(n.textures),l=s(n.images),u=s(n.shapes),h=s(n.skeletons),f=s(n.animations);o.length>0&&(t.geometries=o),a.length>0&&(t.materials=a),c.length>0&&(t.textures=c),l.length>0&&(t.images=l),u.length>0&&(t.shapes=u),h.length>0&&(t.skeletons=h),f.length>0&&(t.animations=f)}return t.object=i,t;function s(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}},clone:function(n){return new this.constructor().copy(this,n)},copy:function(n,e=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.userData=JSON.parse(JSON.stringify(n.userData)),e===!0)for(let t=0;t<n.children.length;t++){const i=n.children[t];this.add(i.clone())}return this}});const df=new I,OL=new I,BL=new en;class fi{constructor(e=new I(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=df.subVectors(i,t).cross(OL.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new I),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new I);const i=e.delta(df),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):void 0;const s=-(e.start.dot(this.normal)+this.constant)/r;if(!(s<0||s>1))return t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new I),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||BL.getNormalMatrix(e),r=this.coplanarPoint(df).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}fi.prototype.isPlane=!0;const ci=new I,Wi=new I,pf=new I,$i=new I,eo=new I,to=new I,p_=new I,mf=new I,gf=new I,_f=new I;class qt{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new I),r.subVectors(i,t),ci.subVectors(e,t),r.cross(ci);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ci.subVectors(r,t),Wi.subVectors(i,t),pf.subVectors(e,t);const o=ci.dot(ci),a=ci.dot(Wi),c=ci.dot(pf),l=Wi.dot(Wi),u=Wi.dot(pf),h=o*l-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new I),h===0)return s.set(-2,-1,-1);const f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,$i),$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getUV(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,$i),c.set(0,0),c.addScaledVector(s,$i.x),c.addScaledVector(o,$i.y),c.addScaledVector(a,$i.z),c}static isFrontFacing(e,t,i,r){return ci.subVectors(i,t),Wi.subVectors(e,t),ci.cross(Wi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),ci.cross(Wi).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new I),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new fi),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return qt.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new I);const i=this.a,r=this.b,s=this.c;let o,a;eo.subVectors(r,i),to.subVectors(s,i),mf.subVectors(e,i);const c=eo.dot(mf),l=to.dot(mf);if(c<=0&&l<=0)return t.copy(i);gf.subVectors(e,r);const u=eo.dot(gf),h=to.dot(gf);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(eo,o);_f.subVectors(e,s);const d=eo.dot(_f),g=to.dot(_f);if(g>=0&&d<=g)return t.copy(s);const p=d*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(to,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return p_.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(p_,a);const x=1/(m+p+f);return o=p*x,a=f*x,t.copy(i).addScaledVector(eo,o).addScaledVector(to,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let UL=0;function It(){Object.defineProperty(this,"id",{value:UL++}),this.uuid=at.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=So,this.side=Wo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=jd,this.blendDst=Jd,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=pu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=My,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lu,this.stencilZFail=lu,this.stencilZPass=lu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}It.prototype=Object.assign(Object.create(er.prototype),{constructor:It,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(n){if(n!==void 0)for(const e in n){const t=n[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===Yd;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}},toJSON:function(n){const e=n===void 0||typeof n=="string";e&&(n={textures:{},images:{}});const t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(n).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(n).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(n).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(n).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(n).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(n).uuid,t.reflectivity=this.reflectivity,t.refractionRatio=this.refractionRatio,this.combine!==void 0&&(t.combine=this.combine),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(n).uuid),this.size!==void 0&&(t.size=this.size),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==So&&(t.blending=this.blending),this.side!==Wo&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function i(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(e){const r=i(n.textures),s=i(n.images);r.length>0&&(t.textures=r),s.length>0&&(t.images=s)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(n){this.name=n.name,this.fog=n.fog,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const e=n.clippingPlanes;let t=null;if(e!==null){const i=e.length;t=new Array(i);for(let r=0;r!==i;++r)t[r]=e[r].clone()}return this.clippingPlanes=t,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.premultipliedAlpha=n.premultipliedAlpha,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(It.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});const Sy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},wc={h:0,s:0,l:0};function xf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function vf(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}class Xe{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,i){return this.r=e,this.g=t,this.b=i,this}setHSL(e,t,i){if(e=at.euclideanModulo(e,1),t=at.clamp(t,0,1),i=at.clamp(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=xf(s,r,e+1/3),this.g=xf(s,r,e),this.b=xf(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Sy[e];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const i=t>0?1/t:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=vf(e.r),this.g=vf(e.g),this.b=vf(e.b),this}copyLinearToSRGB(e){return this.r=yf(e.r),this.g=yf(e.g),this.b=yf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const t=this.r,i=this.g,r=this.b,s=Math.max(t,i,r),o=Math.min(t,i,r);let a,c;const l=(o+s)/2;if(o===s)a=0,c=0;else{const u=s-o;switch(c=l<=.5?u/(s+o):u/(2-s-o),s){case t:a=(i-r)/u+(i<r?6:0);break;case i:a=(r-t)/u+2;break;case r:a=(t-i)/u+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,i){return this.getHSL(ui),ui.h+=e,ui.s+=t,ui.l+=i,this.setHSL(ui.h,ui.s,ui.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(wc);const i=at.lerp(ui.h,wc.h,t),r=at.lerp(ui.s,wc.s,t),s=at.lerp(ui.l,wc.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Xe.NAMES=Sy;Xe.prototype.isColor=!0;Xe.prototype.r=1;Xe.prototype.g=1;Xe.prototype.b=1;class tr extends It{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}}tr.prototype.isMeshBasicMaterial=!0;const Tt=new I,Sc=new Ee;function ot(n,e,t){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=n,this.itemSize=e,this.count=n!==void 0?n.length/e:0,this.normalized=t===!0,this.usage=Fl,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(ot.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});Object.assign(ot.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(n){return this.usage=n,this},copy:function(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this},copyAt:function(n,e,t){n*=this.itemSize,t*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[n+i]=e.array[t+i];return this},copyArray:function(n){return this.array.set(n),this},copyColorsArray:function(n){const e=this.array;let t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new Xe),e[t++]=s.r,e[t++]=s.g,e[t++]=s.b}return this},copyVector2sArray:function(n){const e=this.array;let t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new Ee),e[t++]=s.x,e[t++]=s.y}return this},copyVector3sArray:function(n){const e=this.array;let t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new I),e[t++]=s.x,e[t++]=s.y,e[t++]=s.z}return this},copyVector4sArray:function(n){const e=this.array;let t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new bt),e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=s.w}return this},applyMatrix3:function(n){if(this.itemSize===2)for(let e=0,t=this.count;e<t;e++)Sc.fromBufferAttribute(this,e),Sc.applyMatrix3(n),this.setXY(e,Sc.x,Sc.y);else if(this.itemSize===3)for(let e=0,t=this.count;e<t;e++)Tt.fromBufferAttribute(this,e),Tt.applyMatrix3(n),this.setXYZ(e,Tt.x,Tt.y,Tt.z);return this},applyMatrix4:function(n){for(let e=0,t=this.count;e<t;e++)Tt.x=this.getX(e),Tt.y=this.getY(e),Tt.z=this.getZ(e),Tt.applyMatrix4(n),this.setXYZ(e,Tt.x,Tt.y,Tt.z);return this},applyNormalMatrix:function(n){for(let e=0,t=this.count;e<t;e++)Tt.x=this.getX(e),Tt.y=this.getY(e),Tt.z=this.getZ(e),Tt.applyNormalMatrix(n),this.setXYZ(e,Tt.x,Tt.y,Tt.z);return this},transformDirection:function(n){for(let e=0,t=this.count;e<t;e++)Tt.x=this.getX(e),Tt.y=this.getY(e),Tt.z=this.getZ(e),Tt.transformDirection(n),this.setXYZ(e,Tt.x,Tt.y,Tt.z);return this},set:function(n,e=0){return this.array.set(n,e),this},getX:function(n){return this.array[n*this.itemSize]},setX:function(n,e){return this.array[n*this.itemSize]=e,this},getY:function(n){return this.array[n*this.itemSize+1]},setY:function(n,e){return this.array[n*this.itemSize+1]=e,this},getZ:function(n){return this.array[n*this.itemSize+2]},setZ:function(n,e){return this.array[n*this.itemSize+2]=e,this},getW:function(n){return this.array[n*this.itemSize+3]},setW:function(n,e){return this.array[n*this.itemSize+3]=e,this},setXY:function(n,e,t){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this},setXYZ:function(n,e,t,i){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this.array[n+2]=i,this},setXYZW:function(n,e,t,i,r){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this.array[n+2]=i,this.array[n+3]=r,this},onUpload:function(n){return this.onUploadCallback=n,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function Ka(n,e,t){ot.call(this,new Int8Array(n),e,t)}Ka.prototype=Object.create(ot.prototype);Ka.prototype.constructor=Ka;function Qa(n,e,t){ot.call(this,new Uint8Array(n),e,t)}Qa.prototype=Object.create(ot.prototype);Qa.prototype.constructor=Qa;function el(n,e,t){ot.call(this,new Uint8ClampedArray(n),e,t)}el.prototype=Object.create(ot.prototype);el.prototype.constructor=el;function tl(n,e,t){ot.call(this,new Int16Array(n),e,t)}tl.prototype=Object.create(ot.prototype);tl.prototype.constructor=tl;function vs(n,e,t){ot.call(this,new Uint16Array(n),e,t)}vs.prototype=Object.create(ot.prototype);vs.prototype.constructor=vs;function nl(n,e,t){ot.call(this,new Int32Array(n),e,t)}nl.prototype=Object.create(ot.prototype);nl.prototype.constructor=nl;function ys(n,e,t){ot.call(this,new Uint32Array(n),e,t)}ys.prototype=Object.create(ot.prototype);ys.prototype.constructor=ys;function il(n,e,t){ot.call(this,new Uint16Array(n),e,t)}il.prototype=Object.create(ot.prototype);il.prototype.constructor=il;il.prototype.isFloat16BufferAttribute=!0;function Ze(n,e,t){ot.call(this,new Float32Array(n),e,t)}Ze.prototype=Object.create(ot.prototype);Ze.prototype.constructor=Ze;function rl(n,e,t){ot.call(this,new Float64Array(n),e,t)}rl.prototype=Object.create(ot.prototype);rl.prototype.constructor=rl;function Ey(n){if(n.length===0)return-1/0;let e=n[0];for(let t=1,i=n.length;t<i;++t)n[t]>e&&(e=n[t]);return e}const kL={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ea(n,e){return new kL[n](e)}let GL=0;const Mi=new Ke,bf=new st,no=new I,kn=new Nn,da=new Nn,an=new I;function Qe(){Object.defineProperty(this,"id",{value:GL++}),this.uuid=at.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}Qe.prototype=Object.assign(Object.create(er.prototype),{constructor:Qe,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(n){return Array.isArray(n)?this.index=new(Ey(n)>65535?ys:vs)(n,1):this.index=n,this},getAttribute:function(n){return this.attributes[n]},setAttribute:function(n,e){return this.attributes[n]=e,this},deleteAttribute:function(n){return delete this.attributes[n],this},hasAttribute:function(n){return this.attributes[n]!==void 0},addGroup:function(n,e,t=0){this.groups.push({start:n,count:e,materialIndex:t})},clearGroups:function(){this.groups=[]},setDrawRange:function(n,e){this.drawRange.start=n,this.drawRange.count=e},applyMatrix4:function(n){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(n),e.needsUpdate=!0);const t=this.attributes.normal;if(t!==void 0){const r=new en().getNormalMatrix(n);t.applyNormalMatrix(r),t.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(n),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(n){return Mi.makeRotationX(n),this.applyMatrix4(Mi),this},rotateY:function(n){return Mi.makeRotationY(n),this.applyMatrix4(Mi),this},rotateZ:function(n){return Mi.makeRotationZ(n),this.applyMatrix4(Mi),this},translate:function(n,e,t){return Mi.makeTranslation(n,e,t),this.applyMatrix4(Mi),this},scale:function(n,e,t){return Mi.makeScale(n,e,t),this.applyMatrix4(Mi),this},lookAt:function(n){return bf.lookAt(n),bf.updateMatrix(),this.applyMatrix4(bf.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this},setFromPoints:function(n){const e=[];for(let t=0,i=n.length;t<i;t++){const r=n[t];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ze(e,3)),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Nn);const n=this.attributes.position,e=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),e)for(let t=0,i=e.length;t<i;t++){const r=e[t];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new zr);const n=this.attributes.position,e=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(n){const t=this.boundingSphere.center;if(kn.setFromBufferAttribute(n),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];da.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(kn.min,da.min),kn.expandByPoint(an),an.addVectors(kn.max,da.max),kn.expandByPoint(an)):(kn.expandByPoint(da.min),kn.expandByPoint(da.max))}kn.getCenter(t);let i=0;for(let r=0,s=n.count;r<s;r++)an.fromBufferAttribute(n,r),i=Math.max(i,t.distanceToSquared(an));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)an.fromBufferAttribute(o,c),a&&(no.fromBufferAttribute(n,c),an.add(no)),i=Math.max(i,t.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeTangents:function(){const n=this.index,e=this.attributes;if(n===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const t=n.array,i=e.position.array,r=e.normal.array,s=e.uv.array,o=i.length/3;e.tangent===void 0&&this.setAttribute("tangent",new ot(new Float32Array(4*o),4));const a=e.tangent.array,c=[],l=[];for(let E=0;E<o;E++)c[E]=new I,l[E]=new I;const u=new I,h=new I,f=new I,d=new Ee,g=new Ee,p=new Ee,m=new I,x=new I;function _(E,T,D){u.fromArray(i,E*3),h.fromArray(i,T*3),f.fromArray(i,D*3),d.fromArray(s,E*2),g.fromArray(s,T*2),p.fromArray(s,D*2),h.sub(u),f.sub(u),g.sub(d),p.sub(d);const U=1/(g.x*p.y-p.x*g.y);isFinite(U)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(f,-g.y).multiplyScalar(U),x.copy(f).multiplyScalar(g.x).addScaledVector(h,-p.x).multiplyScalar(U),c[E].add(m),c[T].add(m),c[D].add(m),l[E].add(x),l[T].add(x),l[D].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.length}]);for(let E=0,T=y.length;E<T;++E){const D=y[E],U=D.start,F=D.count;for(let L=U,B=U+F;L<B;L+=3)_(t[L+0],t[L+1],t[L+2])}const v=new I,b=new I,M=new I,S=new I;function w(E){M.fromArray(r,E*3),S.copy(M);const T=c[E];v.copy(T),v.sub(M.multiplyScalar(M.dot(T))).normalize(),b.crossVectors(S,T);const U=b.dot(l[E])<0?-1:1;a[E*4]=v.x,a[E*4+1]=v.y,a[E*4+2]=v.z,a[E*4+3]=U}for(let E=0,T=y.length;E<T;++E){const D=y[E],U=D.start,F=D.count;for(let L=U,B=U+F;L<B;L+=3)w(t[L+0]),w(t[L+1]),w(t[L+2])}},computeVertexNormals:function(){const n=this.index,e=this.getAttribute("position");if(e!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new ot(new Float32Array(e.count*3),3),this.setAttribute("normal",t);else for(let h=0,f=t.count;h<f;h++)t.setXYZ(h,0,0,0);const i=new I,r=new I,s=new I,o=new I,a=new I,c=new I,l=new I,u=new I;if(n)for(let h=0,f=n.count;h<f;h+=3){const d=n.getX(h+0),g=n.getX(h+1),p=n.getX(h+2);i.fromBufferAttribute(e,d),r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,p),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),o.fromBufferAttribute(t,d),a.fromBufferAttribute(t,g),c.fromBufferAttribute(t,p),o.add(l),a.add(l),c.add(l),t.setXYZ(d,o.x,o.y,o.z),t.setXYZ(g,a.x,a.y,a.z),t.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),t.setXYZ(h+0,l.x,l.y,l.z),t.setXYZ(h+1,l.x,l.y,l.z),t.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),t.needsUpdate=!0}},merge:function(n,e){if(!(n&&n.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",n);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const t=this.attributes;for(const i in t){if(n.attributes[i]===void 0)continue;const s=t[i].array,o=n.attributes[i],a=o.array,c=o.itemSize*e,l=Math.min(a.length,s.length-c);for(let u=0,h=c;u<l;u++,h++)s[h]=a[u]}return this},normalizeNormals:function(){const n=this.attributes.normal;for(let e=0,t=n.count;e<t;e++)an.fromBufferAttribute(n,e),an.normalize(),n.setXYZ(e,an.x,an.y,an.z)},toNonIndexed:function(){function n(o,a){const c=o.array,l=o.itemSize,u=o.normalized,h=new c.constructor(a.length*l);let f=0,d=0;for(let g=0,p=a.length;g<p;g++){f=a[g]*l;for(let m=0;m<l;m++)h[d++]=c[f++]}return new ot(h,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qe,t=this.index.array,i=this.attributes;for(const o in i){const a=i[o],c=n(a,t);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const a=[],c=r[o];for(let l=0,u=c.length;l<u;l++){const h=c[l],f=n(h,t);a.push(f)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,a=s.length;o<a;o++){const c=s[o];e.addGroup(c.start,c.count,c.materialIndex)}return e},toJSON:function(){const n={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(n[c]=a[c]);return n}n.data={attributes:{}};const e=this.index;e!==null&&(n.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const t=this.attributes;for(const a in t){const c=t[a],l=c.toJSON(n.data);c.name!==""&&(l.name=c.name),n.data.attributes[a]=l}const i={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],l=[];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=f.toJSON(n.data);f.name!==""&&(d.name=f.name),l.push(d)}l.length>0&&(i[a]=l,r=!0)}r&&(n.data.morphAttributes=i,n.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(n.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(n.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),n},clone:function(){return new Qe().copy(this)},copy:function(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=n.name;const t=n.index;t!==null&&this.setIndex(t.clone(e));const i=n.attributes;for(const c in i){const l=i[c];this.setAttribute(c,l.clone(e))}const r=n.morphAttributes;for(const c in r){const l=[],u=r[c];for(let h=0,f=u.length;h<f;h++)l.push(u[h].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=n.morphTargetsRelative;const s=n.groups;for(let c=0,l=s.length;c<l;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=n.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=n.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});const m_=new Ke,io=new Or,Mf=new zr,ur=new I,hr=new I,fr=new I,wf=new I,Sf=new I,Ef=new I,Ec=new I,Tc=new I,Ac=new I,Lc=new Ee,Cc=new Ee,Rc=new Ee,Tf=new I,Pc=new I;function At(n=new Qe,e=new tr){st.call(this),this.type="Mesh",this.geometry=n,this.material=e,this.updateMorphTargets()}At.prototype=Object.assign(Object.create(st.prototype),{constructor:At,isMesh:!0,copy:function(n){return st.prototype.copy.call(this,n),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=n.material,this.geometry=n.geometry,this},updateMorphTargets:function(){const n=this.geometry;if(n.isBufferGeometry){const e=n.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(n,e){const t=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(t.boundingSphere===null&&t.computeBoundingSphere(),Mf.copy(t.boundingSphere),Mf.applyMatrix4(r),n.ray.intersectsSphere(Mf)===!1)||(m_.copy(r).invert(),io.copy(n.ray).applyMatrix4(m_),t.boundingBox!==null&&io.intersectsBox(t.boundingBox)===!1))return;let s;if(t.isBufferGeometry){const o=t.index,a=t.attributes.position,c=t.morphAttributes.position,l=t.morphTargetsRelative,u=t.attributes.uv,h=t.attributes.uv2,f=t.groups,d=t.drawRange;if(o!==null)if(Array.isArray(i))for(let g=0,p=f.length;g<p;g++){const m=f[g],x=i[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(m.start+m.count,d.start+d.count);for(let v=_,b=y;v<b;v+=3){const M=o.getX(v),S=o.getX(v+1),w=o.getX(v+2);s=Dc(this,x,n,io,a,c,l,u,h,M,S,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),p=Math.min(o.count,d.start+d.count);for(let m=g,x=p;m<x;m+=3){const _=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);s=Dc(this,i,n,io,a,c,l,u,h,_,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let g=0,p=f.length;g<p;g++){const m=f[g],x=i[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(m.start+m.count,d.start+d.count);for(let v=_,b=y;v<b;v+=3){const M=v,S=v+1,w=v+2;s=Dc(this,x,n,io,a,c,l,u,h,M,S,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),p=Math.min(a.count,d.start+d.count);for(let m=g,x=p;m<x;m+=3){const _=m,y=m+1,v=m+2;s=Dc(this,i,n,io,a,c,l,u,h,_,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}else t.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}});function HL(n,e,t,i,r,s,o,a){let c;if(e.side===Yt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==Ll,a),c===null)return null;Pc.copy(a),Pc.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Pc);return l<t.near||l>t.far?null:{distance:l,point:Pc.clone(),object:n}}function Dc(n,e,t,i,r,s,o,a,c,l,u,h){ur.fromBufferAttribute(r,l),hr.fromBufferAttribute(r,u),fr.fromBufferAttribute(r,h);const f=n.morphTargetInfluences;if(e.morphTargets&&s&&f){Ec.set(0,0,0),Tc.set(0,0,0),Ac.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const m=f[g],x=s[g];m!==0&&(wf.fromBufferAttribute(x,l),Sf.fromBufferAttribute(x,u),Ef.fromBufferAttribute(x,h),o?(Ec.addScaledVector(wf,m),Tc.addScaledVector(Sf,m),Ac.addScaledVector(Ef,m)):(Ec.addScaledVector(wf.sub(ur),m),Tc.addScaledVector(Sf.sub(hr),m),Ac.addScaledVector(Ef.sub(fr),m)))}ur.add(Ec),hr.add(Tc),fr.add(Ac)}n.isSkinnedMesh&&e.skinning&&(n.boneTransform(l,ur),n.boneTransform(u,hr),n.boneTransform(h,fr));const d=HL(n,e,t,i,ur,hr,fr,Tf);if(d){a&&(Lc.fromBufferAttribute(a,l),Cc.fromBufferAttribute(a,u),Rc.fromBufferAttribute(a,h),d.uv=qt.getUV(Tf,ur,hr,fr,Lc,Cc,Rc,new Ee)),c&&(Lc.fromBufferAttribute(c,l),Cc.fromBufferAttribute(c,u),Rc.fromBufferAttribute(c,h),d.uv2=qt.getUV(Tf,ur,hr,fr,Lc,Cc,Rc,new Ee));const g={a:l,b:u,c:h,normal:new I,materialIndex:0};qt.getNormal(ur,hr,fr,g.normal),d.face=g}return d}class bs extends Qe{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(h,2));function g(p,m,x,_,y,v,b,M,S,w,E){const T=v/S,D=b/w,U=v/2,F=b/2,L=M/2,B=S+1,G=w+1;let Z=0,$=0;const se=new I;for(let oe=0;oe<G;oe++){const ge=oe*D-F;for(let Q=0;Q<B;Q++){const he=Q*T-U;se[p]=he*_,se[m]=ge*y,se[x]=L,l.push(se.x,se.y,se.z),se[p]=0,se[m]=0,se[x]=M>0?1:-1,u.push(se.x,se.y,se.z),h.push(Q/S),h.push(1-oe/w),Z+=1}}for(let oe=0;oe<w;oe++)for(let ge=0;ge<S;ge++){const Q=f+ge+B*oe,he=f+ge+B*(oe+1),Se=f+(ge+1)+B*(oe+1),K=f+(ge+1)+B*oe;c.push(Q,he,K),c.push(he,Se,K),$+=6}a.addGroup(d,$,E),d+=$,f+=Z}}}function Fo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function xn(n){const e={};for(let t=0;t<n.length;t++){const i=Fo(n[t]);for(const r in i)e[r]=i[r]}return e}const Ty={clone:Fo,merge:xn};var VL=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WL=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function Fn(n){It.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=VL,this.fragmentShader=WL,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&(n.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(n))}Fn.prototype=Object.create(It.prototype);Fn.prototype.constructor=Fn;Fn.prototype.isShaderMaterial=!0;Fn.prototype.copy=function(n){return It.prototype.copy.call(this,n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=Fo(n.uniforms),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.lights=n.lights,this.clipping=n.clipping,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.morphNormals=n.morphNormals,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this};Fn.prototype.toJSON=function(n){const e=It.prototype.toJSON.call(this,n);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(n).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const t={};for(const i in this.extensions)this.extensions[i]===!0&&(t[i]=!0);return Object.keys(t).length>0&&(e.extensions=t),e};function Rr(){st.call(this),this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke}Rr.prototype=Object.assign(Object.create(st.prototype),{constructor:Rr,isCamera:!0,copy:function(n,e){return st.prototype.copy.call(this,n,e),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this},getWorldDirection:function(n){n===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),n=new I),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return n.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(n){st.prototype.updateMatrixWorld.call(this,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()},updateWorldMatrix:function(n,e){st.prototype.updateWorldMatrix.call(this,n,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()},clone:function(){return new this.constructor().copy(this)}});function jt(n=50,e=1,t=.1,i=2e3){Rr.call(this),this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=t,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}jt.prototype=Object.assign(Object.create(Rr.prototype),{constructor:jt,isPerspectiveCamera:!0,copy:function(n,e){return Rr.prototype.copy.call(this,n,e),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this},setFocalLength:function(n){const e=.5*this.getFilmHeight()/n;this.fov=at.RAD2DEG*2*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){const n=Math.tan(at.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/n},getEffectiveFOV:function(){return at.RAD2DEG*2*Math.atan(Math.tan(at.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(n,e,t,i,r,s){this.aspect=n/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const n=this.near;let e=n*Math.tan(at.DEG2RAD*.5*this.fov)/this.zoom,t=2*e,i=this.aspect*t,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,e-=s.offsetY*t/c,i*=s.width/a,t*=s.height/c}const o=this.filmOffset;o!==0&&(r+=n*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-t,n,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(n){const e=st.prototype.toJSON.call(this,n);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});const ro=90,so=1;class Yu extends st{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new jt(ro,so,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new I(1,0,0)),this.add(r);const s=new jt(ro,so,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new I(-1,0,0)),this.add(s);const o=new jt(ro,so,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new I(0,1,0)),this.add(o);const a=new jt(ro,so,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new I(0,-1,0)),this.add(a);const c=new jt(ro,so,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new I(0,0,1)),this.add(c);const l=new jt(ro,so,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,c,l]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(h),e.xr.enabled=u}}class Zo extends rn{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Rl,a=a!==void 0?a:Er,super(e,t,i,r,s,o,a,c,l,u),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Zo.prototype.isCubeTexture=!0;class ju extends Ji{constructor(e,t,i){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=i),super(e,e,t),t=t||{},this.texture=new Zo(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=qn,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new bs(5,5,5),s=new Fn({name:"CubemapFromEquirect",uniforms:Fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:ji});s.uniforms.tEquirect.value=t;const o=new At(r,s),a=t.minFilter;return t.minFilter===qo&&(t.minFilter=Qt),new Yu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}ju.prototype.isWebGLCubeRenderTarget=!0;class No extends rn{constructor(e,t,i,r,s,o,a,c,l,u,h,f){super(null,o,a,c,l,u,r,s,h,f),this.image={data:e||null,width:t||1,height:i||1},this.magFilter=l!==void 0?l:Kt,this.minFilter=u!==void 0?u:Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}No.prototype.isDataTexture=!0;const oo=new zr,Ic=new I;class Nl{constructor(e=new fi,t=new fi,i=new fi,r=new fi,s=new fi,o=new fi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],h=i[7],f=i[8],d=i[9],g=i[10],p=i[11],m=i[12],x=i[13],_=i[14],y=i[15];return t[0].setComponents(a-r,h-c,p-f,y-m).normalize(),t[1].setComponents(a+r,h+c,p+f,y+m).normalize(),t[2].setComponents(a+s,h+l,p+d,y+x).normalize(),t[3].setComponents(a-s,h-l,p-d,y-x).normalize(),t[4].setComponents(a-o,h-u,p-g,y-_).normalize(),t[5].setComponents(a+o,h+u,p+g,y+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),oo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(oo)}intersectsSprite(e){return oo.center.set(0,0,0),oo.radius=.7071067811865476,oo.applyMatrix4(e.matrixWorld),this.intersectsSphere(oo)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ic.x=r.normal.x>0?e.max.x:e.min.x,Ic.y=r.normal.y>0?e.max.y:e.min.y,Ic.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ay(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function $L(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const h=l.array,f=l.usage,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,h,f),l.onUploadCallback();let g=5126;return h instanceof Float32Array?g=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?l.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:h instanceof Int16Array?g=5122:h instanceof Uint32Array?g=5125:h instanceof Int32Array?g=5124:h instanceof Int8Array?g=5120:h instanceof Uint8Array&&(g=5121),{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const f=u.array,d=u.updateRange;n.bindBuffer(h,l),d.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h===void 0?i.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class sl extends Qe{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,f=t/c,d=[],g=[],p=[],m=[];for(let x=0;x<u;x++){const _=x*f-o;for(let y=0;y<l;y++){const v=y*h-s;g.push(v,-_,0),p.push(0,0,1),m.push(y/a),m.push(1-x/c)}}for(let x=0;x<c;x++)for(let _=0;_<a;_++){const y=_+l*x,v=_+l*(x+1),b=_+1+l*(x+1),M=_+1+l*x;d.push(y,v,M),d.push(v,b,M)}this.setIndex(d),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(p,3)),this.setAttribute("uv",new Ze(m,2))}}var qL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,XL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZL=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,YL=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,jL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JL="vec3 transformed = vec3( position );",KL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QL=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,eC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sC=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,oC=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,aC=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lC=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor.xyz *= color.xyz;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,uC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,hC=`vec3 transformedNormal = objectNormal;
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
#endif`,fC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,pC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gC="gl_FragColor = linearToOutputTexel( gl_FragColor );",_C=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,xC=`#ifdef USE_ENVMAP
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
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MC=`#ifdef USE_ENVMAP
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
#endif`,wC=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,SC=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,EC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,LC=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,CC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RC=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,PC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,DC=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,IC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FC=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,NC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zC=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,OC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,BC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UC=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,GC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,HC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$C=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qC=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,XC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,QC=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,eR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
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
#endif`,tR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,nR=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,rR=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,oR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,aR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,lR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pR=`#ifdef USE_SHADOWMAP
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
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
#endif`,mR=`#ifdef USE_SHADOWMAP
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
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
#endif`,gR=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,_R=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
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
}`,xR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
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
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,yR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bR=`#ifdef USE_SKINNING
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
#endif`,MR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ER=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TR=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,AR=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,LR=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,CR=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,RR=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,PR=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,DR=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,IR=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,FR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,NR=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OR=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,BR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,kR=`#include <common>
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
}`,GR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,HR=`#define DISTANCE
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
}`,VR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,WR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$R=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZR=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YR=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
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
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jR=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
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
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KR=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eP=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,tP=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nP=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,iP=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rP=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
}`,sP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
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
}`,oP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
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
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,cP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,uP=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,fP=`uniform float rotation;
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
}`;const pt={alphamap_fragment:qL,alphamap_pars_fragment:XL,alphatest_fragment:ZL,aomap_fragment:YL,aomap_pars_fragment:jL,begin_vertex:JL,beginnormal_vertex:KL,bsdfs:QL,bumpmap_pars_fragment:eC,clipping_planes_fragment:tC,clipping_planes_pars_fragment:nC,clipping_planes_pars_vertex:iC,clipping_planes_vertex:rC,color_fragment:sC,color_pars_fragment:oC,color_pars_vertex:aC,color_vertex:lC,common:cC,cube_uv_reflection_fragment:uC,defaultnormal_vertex:hC,displacementmap_pars_vertex:fC,displacementmap_vertex:dC,emissivemap_fragment:pC,emissivemap_pars_fragment:mC,encodings_fragment:gC,encodings_pars_fragment:_C,envmap_fragment:xC,envmap_common_pars_fragment:vC,envmap_pars_fragment:yC,envmap_pars_vertex:bC,envmap_physical_pars_fragment:DC,envmap_vertex:MC,fog_vertex:wC,fog_pars_vertex:SC,fog_fragment:EC,fog_pars_fragment:TC,gradientmap_pars_fragment:AC,lightmap_fragment:LC,lightmap_pars_fragment:CC,lights_lambert_vertex:RC,lights_pars_begin:PC,lights_toon_fragment:IC,lights_toon_pars_fragment:FC,lights_phong_fragment:NC,lights_phong_pars_fragment:zC,lights_physical_fragment:OC,lights_physical_pars_fragment:BC,lights_fragment_begin:UC,lights_fragment_maps:kC,lights_fragment_end:GC,logdepthbuf_fragment:HC,logdepthbuf_pars_fragment:VC,logdepthbuf_pars_vertex:WC,logdepthbuf_vertex:$C,map_fragment:qC,map_pars_fragment:XC,map_particle_fragment:ZC,map_particle_pars_fragment:YC,metalnessmap_fragment:jC,metalnessmap_pars_fragment:JC,morphnormal_vertex:KC,morphtarget_pars_vertex:QC,morphtarget_vertex:eR,normal_fragment_begin:tR,normal_fragment_maps:nR,normalmap_pars_fragment:iR,clearcoat_normal_fragment_begin:rR,clearcoat_normal_fragment_maps:sR,clearcoat_pars_fragment:oR,packing:aR,premultiplied_alpha_fragment:lR,project_vertex:cR,dithering_fragment:uR,dithering_pars_fragment:hR,roughnessmap_fragment:fR,roughnessmap_pars_fragment:dR,shadowmap_pars_fragment:pR,shadowmap_pars_vertex:mR,shadowmap_vertex:gR,shadowmask_pars_fragment:_R,skinbase_vertex:xR,skinning_pars_vertex:vR,skinning_vertex:yR,skinnormal_vertex:bR,specularmap_fragment:MR,specularmap_pars_fragment:wR,tonemapping_fragment:SR,tonemapping_pars_fragment:ER,transmissionmap_fragment:TR,transmissionmap_pars_fragment:AR,uv_pars_fragment:LR,uv_pars_vertex:CR,uv_vertex:RR,uv2_pars_fragment:PR,uv2_pars_vertex:DR,uv2_vertex:IR,worldpos_vertex:FR,background_frag:NR,background_vert:zR,cube_frag:OR,cube_vert:BR,depth_frag:UR,depth_vert:kR,distanceRGBA_frag:GR,distanceRGBA_vert:HR,equirect_frag:VR,equirect_vert:WR,linedashed_frag:$R,linedashed_vert:qR,meshbasic_frag:XR,meshbasic_vert:ZR,meshlambert_frag:YR,meshlambert_vert:jR,meshmatcap_frag:JR,meshmatcap_vert:KR,meshtoon_frag:QR,meshtoon_vert:eP,meshphong_frag:tP,meshphong_vert:nP,meshphysical_frag:iP,meshphysical_vert:rP,normal_frag:sP,normal_vert:oP,points_frag:aP,points_vert:lP,shadow_frag:cP,shadow_vert:uP,sprite_frag:hP,sprite_vert:fP},He={common:{diffuse:{value:new Xe(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new en},uv2Transform:{value:new en},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new en}},sprite:{diffuse:{value:new Xe(15658734)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new en}}},di={basic:{uniforms:xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.fog,He.lights,{emissive:{value:new Xe(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:xn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:xn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Xe(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:xn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:xn([He.points,He.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:xn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:xn([He.common,He.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:xn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:pt.normal_vert,fragmentShader:pt.normal_frag},sprite:{uniforms:xn([He.sprite,He.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new en},t2D:{value:null}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},cube:{uniforms:xn([He.envmap,{opacity:{value:1}}]),vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:xn([He.common,He.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:xn([He.lights,He.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};di.physical={uniforms:xn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new Xe(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};function dP(n,e,t,i,r){const s=new Xe(0);let o=0,a,c,l=null,u=0,h=null;function f(g,p,m,x){let _=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=e.get(_));const y=n.xr,v=y.getSession&&y.getSession();v&&v.environmentBlendMode==="additive"&&(_=null),_===null?d(s,o):_&&_.isColor&&(d(_,1),x=!0),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.isWebGLCubeRenderTarget||_.mapping===$o)?(c===void 0&&(c=new At(new bs(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Fo(di.cube.uniforms),vertexShader:di.cube.vertexShader,fragmentShader:di.cube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,M,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),_.isWebGLCubeRenderTarget&&(_=_.texture),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_._needsFlipEnvMap?-1:1,(l!==_||u!==_.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,l=_,u=_.version,h=n.toneMapping),g.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(a===void 0&&(a=new At(new sl(2,2),new Fn({name:"BackgroundMaterial",uniforms:Fo(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Wo,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=_,_.matrixAutoUpdate===!0&&_.updateMatrix(),a.material.uniforms.uvTransform.value.copy(_.matrix),(l!==_||u!==_.version||h!==n.toneMapping)&&(a.material.needsUpdate=!0,l=_,u=_.version,h=n.toneMapping),g.unshift(a,a.geometry,a.material,0,0,null))}function d(g,p){t.buffers.color.setClear(g.r,g.g,g.b,p,r)}return{getClearColor:function(){return s},setClearColor:function(g,p=1){s.set(g),o=p,d(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,d(s,o)},render:f}}function pP(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=p(null);let l=c;function u(F,L,B,G,Z){let $=!1;if(o){const se=g(G,B,L);l!==se&&(l=se,f(l.object)),$=m(G,Z),$&&x(G,Z)}else{const se=L.wireframe===!0;(l.geometry!==G.id||l.program!==B.id||l.wireframe!==se)&&(l.geometry=G.id,l.program=B.id,l.wireframe=se,$=!0)}F.isInstancedMesh===!0&&($=!0),Z!==null&&t.update(Z,34963),$&&(S(F,L,B,G),Z!==null&&n.bindBuffer(34963,t.get(Z).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function f(F){return i.isWebGL2?n.bindVertexArray(F):s.bindVertexArrayOES(F)}function d(F){return i.isWebGL2?n.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function g(F,L,B){const G=B.wireframe===!0;let Z=a[F.id];Z===void 0&&(Z={},a[F.id]=Z);let $=Z[L.id];$===void 0&&($={},Z[L.id]=$);let se=$[G];return se===void 0&&(se=p(h()),$[G]=se),se}function p(F){const L=[],B=[],G=[];for(let Z=0;Z<r;Z++)L[Z]=0,B[Z]=0,G[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:G,object:F,attributes:{},index:null}}function m(F,L){const B=l.attributes,G=F.attributes;let Z=0;for(const $ in G){const se=B[$],oe=G[$];if(se===void 0||se.attribute!==oe||se.data!==oe.data)return!0;Z++}return l.attributesNum!==Z||l.index!==L}function x(F,L){const B={},G=F.attributes;let Z=0;for(const $ in G){const se=G[$],oe={};oe.attribute=se,se.data&&(oe.data=se.data),B[$]=oe,Z++}l.attributes=B,l.attributesNum=Z,l.index=L}function _(){const F=l.newAttributes;for(let L=0,B=F.length;L<B;L++)F[L]=0}function y(F){v(F,0)}function v(F,L){const B=l.newAttributes,G=l.enabledAttributes,Z=l.attributeDivisors;B[F]=1,G[F]===0&&(n.enableVertexAttribArray(F),G[F]=1),Z[F]!==L&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,L),Z[F]=L)}function b(){const F=l.newAttributes,L=l.enabledAttributes;for(let B=0,G=L.length;B<G;B++)L[B]!==F[B]&&(n.disableVertexAttribArray(B),L[B]=0)}function M(F,L,B,G,Z,$){i.isWebGL2===!0&&(B===5124||B===5125)?n.vertexAttribIPointer(F,L,B,Z,$):n.vertexAttribPointer(F,L,B,G,Z,$)}function S(F,L,B,G){if(i.isWebGL2===!1&&(F.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const Z=G.attributes,$=B.getAttributes(),se=L.defaultAttributeValues;for(const oe in $){const ge=$[oe];if(ge>=0){const Q=Z[oe];if(Q!==void 0){const he=Q.normalized,Se=Q.itemSize,K=t.get(Q);if(K===void 0)continue;const ne=K.buffer,Ne=K.type,Re=K.bytesPerElement;if(Q.isInterleavedBufferAttribute){const Pe=Q.data,Le=Pe.stride,$e=Q.offset;Pe&&Pe.isInstancedInterleavedBuffer?(v(ge,Pe.meshPerAttribute),G._maxInstanceCount===void 0&&(G._maxInstanceCount=Pe.meshPerAttribute*Pe.count)):y(ge),n.bindBuffer(34962,ne),M(ge,Se,Ne,he,Le*Re,$e*Re)}else Q.isInstancedBufferAttribute?(v(ge,Q.meshPerAttribute),G._maxInstanceCount===void 0&&(G._maxInstanceCount=Q.meshPerAttribute*Q.count)):y(ge),n.bindBuffer(34962,ne),M(ge,Se,Ne,he,0,0)}else if(oe==="instanceMatrix"){const he=t.get(F.instanceMatrix);if(he===void 0)continue;const Se=he.buffer,K=he.type;v(ge+0,1),v(ge+1,1),v(ge+2,1),v(ge+3,1),n.bindBuffer(34962,Se),n.vertexAttribPointer(ge+0,4,K,!1,64,0),n.vertexAttribPointer(ge+1,4,K,!1,64,16),n.vertexAttribPointer(ge+2,4,K,!1,64,32),n.vertexAttribPointer(ge+3,4,K,!1,64,48)}else if(oe==="instanceColor"){const he=t.get(F.instanceColor);if(he===void 0)continue;const Se=he.buffer,K=he.type;v(ge,1),n.bindBuffer(34962,Se),n.vertexAttribPointer(ge,3,K,!1,12,0)}else if(se!==void 0){const he=se[oe];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(ge,he);break;case 3:n.vertexAttrib3fv(ge,he);break;case 4:n.vertexAttrib4fv(ge,he);break;default:n.vertexAttrib1fv(ge,he)}}}}b()}function w(){D();for(const F in a){const L=a[F];for(const B in L){const G=L[B];for(const Z in G)d(G[Z].object),delete G[Z];delete L[B]}delete a[F]}}function E(F){if(a[F.id]===void 0)return;const L=a[F.id];for(const B in L){const G=L[B];for(const Z in G)d(G[Z].object),delete G[Z];delete L[B]}delete a[F.id]}function T(F){for(const L in a){const B=a[L];if(B[F.id]===void 0)continue;const G=B[F.id];for(const Z in G)d(G[Z].object),delete G[Z];delete B[F.id]}}function D(){U(),l!==c&&(l=c,f(l.object))}function U(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:D,resetDefaultState:U,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:y,disableUnusedAttributes:b}}function mP(n,e,t,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,u){n.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let f,d;if(r)f=n,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,l,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function gP(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=t.logarithmicDepthBuffer===!0,u=n.getParameter(34930),h=n.getParameter(35660),f=n.getParameter(3379),d=n.getParameter(34076),g=n.getParameter(34921),p=n.getParameter(36347),m=n.getParameter(36348),x=n.getParameter(36349),_=h>0,y=o||e.has("OES_texture_float"),v=_&&y,b=o?n.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:d,maxAttributes:g,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:v,maxSamples:b}}function _P(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new fi,a=new en,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const g=h.length!==0||f||i!==0||r;return r=f,t=u(h,d,0),i=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,f,d){const g=h.clippingPlanes,p=h.clipIntersection,m=h.clipShadows,x=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const _=s?0:i,y=_*4;let v=x.clippingState||null;c.value=v,v=u(g,f,y,d);for(let b=0;b!==y;++b)v[b]=t[b];x.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const p=h!==null?h.length:0;let m=null;if(p!==0){if(m=c.value,g!==!0||m===null){const x=d+p*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<x)&&(m=new Float32Array(x));for(let y=0,v=d;y!==p;++y,v+=4)o.copy(h[y]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function xP(n){let e=new WeakMap;function t(o,a){return a===mu?o.mapping=Rl:a===gu&&(o.mapping=Pl),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===mu||a===gu)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=n.getRenderTarget(),u=new ju(c.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),n.setRenderTarget(l),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function vP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yP(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const p=d[g];for(let m=0,x=p.length;m<x;m++)e.update(p[m],34962)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let p=0;if(d!==null){const _=d.array;p=d.version;for(let y=0,v=_.length;y<v;y+=3){const b=_[y+0],M=_[y+1],S=_[y+2];f.push(b,M,M,S,S,b)}}else{const _=g.array;p=g.version;for(let y=0,v=_.length/3-1;y<v;y+=3){const b=y+0,M=y+1,S=y+2;f.push(b,M,M,S,S,b)}}const m=new(Ey(f)>65535?ys:vs)(f,1);m.version=p;const x=s.get(h);x&&e.remove(x),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function bP(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,d){n.drawElements(s,d,a,f*c),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let p,m;if(r)p=n,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,d,a,f*c,g),t.update(d,s,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function MP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function wP(n,e){return n[0]-e[0]}function SP(n,e){return Math.abs(e[1])-Math.abs(n[1])}function EP(n){const e={},t=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){const l=s.morphTargetInfluences,u=l===void 0?0:l.length;let h=e[o.id];if(h===void 0){h=[];for(let m=0;m<u;m++)h[m]=[m,0];e[o.id]=h}for(let m=0;m<u;m++){const x=h[m];x[0]=m,x[1]=l[m]}h.sort(SP);for(let m=0;m<8;m++)m<u&&h[m][1]?(i[m][0]=h[m][0],i[m][1]=h[m][1]):(i[m][0]=Number.MAX_SAFE_INTEGER,i[m][1]=0);i.sort(wP);const f=a.morphTargets&&o.morphAttributes.position,d=a.morphNormals&&o.morphAttributes.normal;let g=0;for(let m=0;m<8;m++){const x=i[m],_=x[0],y=x[1];_!==Number.MAX_SAFE_INTEGER&&y?(f&&o.getAttribute("morphTarget"+m)!==f[_]&&o.setAttribute("morphTarget"+m,f[_]),d&&o.getAttribute("morphNormal"+m)!==d[_]&&o.setAttribute("morphNormal"+m,d[_]),t[m]=y,g+=y):(f&&o.hasAttribute("morphTarget"+m)===!0&&o.deleteAttribute("morphTarget"+m),d&&o.hasAttribute("morphNormal"+m)===!0&&o.deleteAttribute("morphNormal"+m),t[m]=0)}const p=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",t)}return{update:r}}function TP(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);return r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class rp extends rn{constructor(e=null,t=1,i=1,r=1){super(null),this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}}rp.prototype.isDataTexture2DArray=!0;class sp extends rn{constructor(e=null,t=1,i=1,r=1){super(null),this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}}sp.prototype.isDataTexture3D=!0;const Ly=new rn,AP=new rp,LP=new sp,Cy=new Zo,g_=[],__=[],x_=new Float32Array(16),v_=new Float32Array(9),y_=new Float32Array(4);function Yo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=g_[r];if(s===void 0&&(s=new Float32Array(r),g_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ni(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ry(n,e){let t=__[e];t===void 0&&(t=new Int32Array(e),__[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function CP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function RP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ni(t,e))return;n.uniform2fv(this.addr,e),Zn(t,e)}}function PP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ni(t,e))return;n.uniform3fv(this.addr,e),Zn(t,e)}}function DP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ni(t,e))return;n.uniform4fv(this.addr,e),Zn(t,e)}}function IP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ni(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zn(t,e)}else{if(ni(t,i))return;y_.set(i),n.uniformMatrix2fv(this.addr,!1,y_),Zn(t,i)}}function FP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ni(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zn(t,e)}else{if(ni(t,i))return;v_.set(i),n.uniformMatrix3fv(this.addr,!1,v_),Zn(t,i)}}function NP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ni(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zn(t,e)}else{if(ni(t,i))return;x_.set(i),n.uniformMatrix4fv(this.addr,!1,x_),Zn(t,i)}}function zP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTexture2D(e||Ly,r)}function OP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||AP,r)}function BP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||LP,r)}function UP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTextureCube(e||Cy,r)}function kP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function GP(n,e){const t=this.cache;ni(t,e)||(n.uniform2iv(this.addr,e),Zn(t,e))}function HP(n,e){const t=this.cache;ni(t,e)||(n.uniform3iv(this.addr,e),Zn(t,e))}function VP(n,e){const t=this.cache;ni(t,e)||(n.uniform4iv(this.addr,e),Zn(t,e))}function WP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $P(n){switch(n){case 5126:return CP;case 35664:return RP;case 35665:return PP;case 35666:return DP;case 35674:return IP;case 35675:return FP;case 35676:return NP;case 5124:case 35670:return kP;case 35667:case 35671:return GP;case 35668:case 35672:return HP;case 35669:case 35673:return VP;case 5125:return WP;case 35678:case 36198:case 36298:case 36306:case 35682:return zP;case 35679:case 36299:case 36307:return BP;case 35680:case 36300:case 36308:case 36293:return UP;case 36289:case 36303:case 36311:case 36292:return OP}}function qP(n,e){n.uniform1fv(this.addr,e)}function XP(n,e){n.uniform1iv(this.addr,e)}function ZP(n,e){n.uniform2iv(this.addr,e)}function YP(n,e){n.uniform3iv(this.addr,e)}function jP(n,e){n.uniform4iv(this.addr,e)}function JP(n,e){const t=Yo(e,this.size,2);n.uniform2fv(this.addr,t)}function KP(n,e){const t=Yo(e,this.size,3);n.uniform3fv(this.addr,t)}function QP(n,e){const t=Yo(e,this.size,4);n.uniform4fv(this.addr,t)}function eD(n,e){const t=Yo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tD(n,e){const t=Yo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nD(n,e){const t=Yo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function iD(n,e,t){const i=e.length,r=Ry(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTexture2D(e[s]||Ly,r[s])}function rD(n,e,t){const i=e.length,r=Ry(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTextureCube(e[s]||Cy,r[s])}function sD(n){switch(n){case 5126:return qP;case 35664:return JP;case 35665:return KP;case 35666:return QP;case 35674:return eD;case 35675:return tD;case 35676:return nD;case 5124:case 35670:return XP;case 35667:case 35671:return ZP;case 35668:case 35672:return YP;case 35669:case 35673:return jP;case 35678:case 36198:case 36298:case 36306:case 35682:return iD;case 35680:case 36300:case 36308:case 36293:return rD}}function oD(n,e,t){this.id=n,this.addr=t,this.cache=[],this.setValue=$P(e.type)}function Py(n,e,t){this.id=n,this.addr=t,this.cache=[],this.size=e.size,this.setValue=sD(e.type)}Py.prototype.updateCache=function(n){const e=this.cache;n instanceof Float32Array&&e.length!==n.length&&(this.cache=new Float32Array(n.length)),Zn(e,n)};function Dy(n){this.id=n,this.seq=[],this.map={}}Dy.prototype.setValue=function(n,e,t){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(n,e[o.id],t)}};const Af=/(\w+)(\])?(\[|\.)?/g;function b_(n,e){n.seq.push(e),n.map[e.id]=e}function aD(n,e,t){const i=n.name,r=i.length;for(Af.lastIndex=0;;){const s=Af.exec(i),o=Af.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){b_(t,l===void 0?new oD(a,n,e):new Py(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Dy(a),b_(t,h)),t=h}}}function Tr(n,e){this.seq=[],this.map={};const t=n.getProgramParameter(e,35718);for(let i=0;i<t;++i){const r=n.getActiveUniform(e,i),s=n.getUniformLocation(e,r.name);aD(r,s,this)}}Tr.prototype.setValue=function(n,e,t,i){const r=this.map[e];r!==void 0&&r.setValue(n,t,i)};Tr.prototype.setOptional=function(n,e,t){const i=e[t];i!==void 0&&this.setValue(n,t,i)};Tr.upload=function(n,e,t,i){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(n,a.value,i)}};Tr.seqWithValue=function(n,e){const t=[];for(let i=0,r=n.length;i!==r;++i){const s=n[i];s.id in e&&t.push(s)}return t};function M_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let lD=0;function cD(n){const e=n.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Iy(n){switch(n){case An:return["Linear","( value )"];case Il:return["sRGB","( value )"];case Zu:return["RGBE","( value )"];case ep:return["RGBM","( value, 7.0 )"];case tp:return["RGBM","( value, 16.0 )"];case np:return["RGBD","( value, 256.0 )"];case Xu:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case xy:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function w_(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=n.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+r+cD(s)}function pa(n,e){const t=Iy(e);return"vec4 "+n+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function uD(n,e){const t=Iy(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function hD(n,e){let t;switch(e){case _v:t="Linear";break;case xv:t="Reinhard";break;case vv:t="OptimizedCineon";break;case yv:t="ACESFilmic";break;case bv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fD(n){return[n.extensionDerivatives||n.envMapCubeUV||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ta).join(`
`)}function dD(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pD(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r).name;t[o]=n.getAttribLocation(e,o)}return t}function Ta(n){return n!==""}function S_(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function E_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(n){return n.replace(mD,gD)}function gD(n,e){const t=pt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ed(t)}const _D=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,xD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function T_(n){return n.replace(xD,Fy).replace(_D,vD)}function vD(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Fy(n,e,t,i)}function Fy(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function A_(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yD(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Zd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xo&&(e="SHADOWMAP_TYPE_VSM"),e}function bD(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rl:case Pl:e="ENVMAP_TYPE_CUBE";break;case $o:case Dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MD(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Pl:case Dl:e="ENVMAP_MODE_REFRACTION";break}return e}function wD(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Cl:e="ENVMAP_BLENDING_MULTIPLY";break;case mv:e="ENVMAP_BLENDING_MIX";break;case gv:e="ENVMAP_BLENDING_ADD";break}return e}function SD(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=yD(t),l=bD(t),u=MD(t),h=wD(t),f=n.gammaFactor>0?n.gammaFactor:1,d=t.isWebGL2?"":fD(t),g=dD(s),p=r.createProgram();let m,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Ta).join(`
`),m.length>0&&(m+=`
`),x=[d,g].filter(Ta).join(`
`),x.length>0&&(x+=`
`)):(m=[A_(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+f,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),x=[d,A_(t),"#define SHADER_NAME "+t.shaderName,g,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cs?"#define TONE_MAPPING":"",t.toneMapping!==cs?pt.tonemapping_pars_fragment:"",t.toneMapping!==cs?hD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",pt.encodings_pars_fragment,t.map?pa("mapTexelToLinear",t.mapEncoding):"",t.matcap?pa("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?pa("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?pa("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?pa("lightMapTexelToLinear",t.lightMapEncoding):"",uD("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ta).join(`
`)),o=Ed(o),o=S_(o,t),o=E_(o,t),a=Ed(a),a=S_(a,t),a=E_(a,t),o=T_(o),a=T_(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["#define varying in",t.glslVersion===Sd?"":"out highp vec4 pc_fragColor;",t.glslVersion===Sd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=_+m+o,v=_+x+a,b=M_(r,35633,y),M=M_(r,35632,v);if(r.attachShader(p,b),r.attachShader(p,M),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const E=r.getProgramInfoLog(p).trim(),T=r.getShaderInfoLog(b).trim(),D=r.getShaderInfoLog(M).trim();let U=!0,F=!0;if(r.getProgramParameter(p,35714)===!1){U=!1;const L=w_(r,b,"vertex"),B=w_(r,M,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(p,35715),"gl.getProgramInfoLog",E,L,B)}else E!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",E):(T===""||D==="")&&(F=!1);F&&(this.diagnostics={runnable:U,programLog:E,vertexShader:{log:T,prefix:m},fragmentShader:{log:D,prefix:x}})}r.deleteShader(b),r.deleteShader(M);let S;this.getUniforms=function(){return S===void 0&&(S=new Tr(r,p)),S};let w;return this.getAttributes=function(){return w===void 0&&(w=pD(r,p)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=lD++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=M,this}function ED(n,e,t,i,r,s){const o=[],a=i.isWebGL2,c=i.logarithmicDepthBuffer,l=i.floatVertexTextures,u=i.maxVertexUniforms,h=i.vertexTextures;let f=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},g=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function p(M){const w=M.skeleton.bones;if(l)return 1024;{const T=Math.floor((u-20)/4),D=Math.min(T,w.length);return D<w.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+w.length+" bones. This GPU supports "+D+"."),0):D}}function m(M){let S;return M&&M.isTexture?S=M.encoding:M&&M.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),S=M.texture.encoding):S=An,S}function x(M,S,w,E,T){const D=E.fog,U=M.isMeshStandardMaterial?E.environment:null,F=e.get(M.envMap||U),L=d[M.type],B=T.isSkinnedMesh?p(T):0;M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let G,Z;if(L){const oe=di[L];G=oe.vertexShader,Z=oe.fragmentShader}else G=M.vertexShader,Z=M.fragmentShader;const $=n.getRenderTarget();return{isWebGL2:a,shaderID:L,shaderName:M.type,vertexShader:G,fragmentShader:Z,defines:M.defines,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:T.isInstancedMesh===!0,instancingColor:T.isInstancedMesh===!0&&T.instanceColor!==null,supportsVertexTextures:h,outputEncoding:$!==null?m($.texture):n.outputEncoding,map:!!M.map,mapEncoding:m(M.map),matcap:!!M.matcap,matcapEncoding:m(M.matcap),envMap:!!F,envMapMode:F&&F.mapping,envMapEncoding:m(F),envMapCubeUV:!!F&&(F.mapping===$o||F.mapping===Dl),lightMap:!!M.lightMap,lightMapEncoding:m(M.lightMap),aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,emissiveMapEncoding:m(M.emissiveMap),bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===by,tangentSpaceNormalMap:M.normalMapType===Ts,clearcoatMap:!!M.clearcoatMap,clearcoatRoughnessMap:!!M.clearcoatRoughnessMap,clearcoatNormalMap:!!M.clearcoatNormalMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,alphaMap:!!M.alphaMap,gradientMap:!!M.gradientMap,sheen:!!M.sheen,transmissionMap:!!M.transmissionMap,combine:M.combine,vertexTangents:M.normalMap&&M.vertexTangents,vertexColors:M.vertexColors,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.displacementMap||!!M.transmissionMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.transmissionMap)&&!!M.displacementMap,fog:!!D,useFog:M.fog,fogExp2:D&&D.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:c,skinning:M.skinning&&B>0,maxBones:B,useVertexTexture:l,morphTargets:M.morphTargets,morphNormals:M.morphNormals,maxMorphTargets:n.maxMorphTargets,maxMorphNormals:n.maxMorphNormals,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:cs,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,alphaTest:M.alphaTest,doubleSided:M.side===Ll,flipSided:M.side===Yt,depthPacking:M.depthPacking!==void 0?M.depthPacking:!1,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||t.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function _(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.fragmentShader),S.push(M.vertexShader)),M.defines!==void 0)for(const w in M.defines)S.push(w),S.push(M.defines[w]);if(M.isRawShaderMaterial===!1){for(let w=0;w<g.length;w++)S.push(M[g[w]]);S.push(n.outputEncoding),S.push(n.gammaFactor)}return S.push(M.customProgramCacheKey),S.join()}function y(M){const S=d[M.type];let w;if(S){const E=di[S];w=Ty.clone(E.uniforms)}else w=M.uniforms;return w}function v(M,S){let w;for(let E=0,T=o.length;E<T;E++){const D=o[E];if(D.cacheKey===S){w=D,++w.usedTimes;break}}return w===void 0&&(w=new SD(n,S,M,r),o.push(w)),w}function b(M){if(--M.usedTimes===0){const S=o.indexOf(M);o[S]=o[o.length-1],o.pop(),M.destroy()}}return{getParameters:x,getProgramCacheKey:_,getUniforms:y,acquireProgram:v,releaseProgram:b,programs:o}}function TD(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function AD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.program!==e.program?n.program.id-e.program.id:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function LD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function L_(n){const e=[];let t=0;const i=[],r=[],s={id:-1};function o(){t=0,i.length=0,r.length=0}function a(f,d,g,p,m,x){let _=e[t];const y=n.get(g);return _===void 0?(_={id:f.id,object:f,geometry:d,material:g,program:y.program||s,groupOrder:p,renderOrder:f.renderOrder,z:m,group:x},e[t]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=g,_.program=y.program||s,_.groupOrder=p,_.renderOrder=f.renderOrder,_.z=m,_.group=x),t++,_}function c(f,d,g,p,m,x){const _=a(f,d,g,p,m,x);(g.transparent===!0?r:i).push(_)}function l(f,d,g,p,m,x){const _=a(f,d,g,p,m,x);(g.transparent===!0?r:i).unshift(_)}function u(f,d){i.length>1&&i.sort(f||AD),r.length>1&&r.sort(d||LD)}function h(){for(let f=t,d=e.length;f<d;f++){const g=e[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.program=null,g.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:h,sort:u}}function CD(n){let e=new WeakMap;function t(r,s){let o;return e.has(r)===!1?(o=new L_(n),e.set(r,[o])):s>=e.get(r).length?(o=new L_(n),e.get(r).push(o)):o=e.get(r)[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}function RD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Xe};break;case"SpotLight":t={position:new I,direction:new I,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function PD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let DD=0;function ID(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function FD(n,e){const t=new RD,i=PD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,o=new Ke,a=new Ke;function c(u){let h=0,f=0,d=0;for(let S=0;S<9;S++)r.probe[S].set(0,0,0);let g=0,p=0,m=0,x=0,_=0,y=0,v=0,b=0;u.sort(ID);for(let S=0,w=u.length;S<w;S++){const E=u[S],T=E.color,D=E.intensity,U=E.distance,F=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=T.r*D,f+=T.g*D,d+=T.b*D;else if(E.isLightProbe)for(let L=0;L<9;L++)r.probe[L].addScaledVector(E.sh.coefficients[L],D);else if(E.isDirectionalLight){const L=t.get(E);if(L.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const B=E.shadow,G=i.get(E);G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,r.directionalShadow[g]=G,r.directionalShadowMap[g]=F,r.directionalShadowMatrix[g]=E.shadow.matrix,y++}r.directional[g]=L,g++}else if(E.isSpotLight){const L=t.get(E);if(L.position.setFromMatrixPosition(E.matrixWorld),L.color.copy(T).multiplyScalar(D),L.distance=U,L.coneCos=Math.cos(E.angle),L.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),L.decay=E.decay,E.castShadow){const B=E.shadow,G=i.get(E);G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,r.spotShadow[m]=G,r.spotShadowMap[m]=F,r.spotShadowMatrix[m]=E.shadow.matrix,b++}r.spot[m]=L,m++}else if(E.isRectAreaLight){const L=t.get(E);L.color.copy(T).multiplyScalar(D),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),r.rectArea[x]=L,x++}else if(E.isPointLight){const L=t.get(E);if(L.color.copy(E.color).multiplyScalar(E.intensity),L.distance=E.distance,L.decay=E.decay,E.castShadow){const B=E.shadow,G=i.get(E);G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,G.shadowCameraNear=B.camera.near,G.shadowCameraFar=B.camera.far,r.pointShadow[p]=G,r.pointShadowMap[p]=F,r.pointShadowMatrix[p]=E.shadow.matrix,v++}r.point[p]=L,p++}else if(E.isHemisphereLight){const L=t.get(E);L.skyColor.copy(E.color).multiplyScalar(D),L.groundColor.copy(E.groundColor).multiplyScalar(D),r.hemi[_]=L,_++}}x>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=He.LTC_FLOAT_1,r.rectAreaLTC2=He.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=He.LTC_HALF_1,r.rectAreaLTC2=He.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=f,r.ambient[2]=d;const M=r.hash;(M.directionalLength!==g||M.pointLength!==p||M.spotLength!==m||M.rectAreaLength!==x||M.hemiLength!==_||M.numDirectionalShadows!==y||M.numPointShadows!==v||M.numSpotShadows!==b)&&(r.directional.length=g,r.spot.length=m,r.rectArea.length=x,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=v,r.spotShadowMatrix.length=b,M.directionalLength=g,M.pointLength=p,M.spotLength=m,M.rectAreaLength=x,M.hemiLength=_,M.numDirectionalShadows=y,M.numPointShadows=v,M.numSpotShadows=b,r.version=DD++)}function l(u,h){let f=0,d=0,g=0,p=0,m=0;const x=h.matrixWorldInverse;for(let _=0,y=u.length;_<y;_++){const v=u[_];if(v.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),f++}else if(v.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),g++}else if(v.isRectAreaLight){const b=r.rectArea[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(x),a.identity(),o.copy(v.matrixWorld),o.premultiply(x),a.extractRotation(o),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){const b=r.point[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(x),d++}else if(v.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(x),b.direction.normalize(),m++}}}return{setup:c,setupView:l,state:r}}function C_(n,e){const t=new FD(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function c(){t.setup(i)}function l(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function ND(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new C_(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new C_(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ju extends It{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=vy,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Ju.prototype.isMeshDepthMaterial=!0;class Ku extends It{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Ku.prototype.isMeshDistanceMaterial=!0;var zD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,OD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Ny(n,e,t){let i=new Nl;const r=new Ee,s=new Ee,o=new bt,a=[],c=[],l={},u={0:Yt,1:Wo,2:Ll},h=new Fn({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:OD,fragmentShader:zD}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const d=new Qe;d.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new At(d,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zd,this.render=function(b,M,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const w=n.getRenderTarget(),E=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ji),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let U=0,F=b.length;U<F;U++){const L=b[U],B=L.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const G=B.getFrameExtents();if(r.multiply(G),s.copy(B.mapSize),(r.x>t||r.y>t)&&(r.x>t&&(s.x=Math.floor(t/G.x),r.x=s.x*G.x,B.mapSize.x=s.x),r.y>t&&(s.y=Math.floor(t/G.y),r.y=s.y*G.y,B.mapSize.y=s.y)),B.map===null&&!B.isPointLightShadow&&this.type===xo){const $={minFilter:Qt,magFilter:Qt,format:qn};B.map=new Ji(r.x,r.y,$),B.map.texture.name=L.name+".shadowMap",B.mapPass=new Ji(r.x,r.y,$),B.camera.updateProjectionMatrix()}if(B.map===null){const $={minFilter:Kt,magFilter:Kt,format:qn};B.map=new Ji(r.x,r.y,$),B.map.texture.name=L.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const Z=B.getViewportCount();for(let $=0;$<Z;$++){const se=B.getViewport($);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),D.viewport(o),B.updateMatrices(L,$),i=B.getFrustum(),v(M,S,B.camera,L,this.type)}!B.isPointLightShadow&&this.type===xo&&m(B,S),B.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(w,E,T)};function m(b,M){const S=e.update(g);h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(M,null,S,h,g,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(M,null,S,f,g,null)}function x(b,M,S){const w=b<<0|M<<1|S<<2;let E=a[w];return E===void 0&&(E=new Ju({depthPacking:yy,morphTargets:b,skinning:M}),a[w]=E),E}function _(b,M,S){const w=b<<0|M<<1|S<<2;let E=c[w];return E===void 0&&(E=new Ku({morphTargets:b,skinning:M}),c[w]=E),E}function y(b,M,S,w,E,T,D){let U=null,F=x,L=b.customDepthMaterial;if(w.isPointLight===!0&&(F=_,L=b.customDistanceMaterial),L===void 0){let B=!1;S.morphTargets===!0&&(B=M.morphAttributes&&M.morphAttributes.position&&M.morphAttributes.position.length>0);let G=!1;b.isSkinnedMesh===!0&&(S.skinning===!0?G=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",b));const Z=b.isInstancedMesh===!0;U=F(B,G,Z)}else U=L;if(n.localClippingEnabled&&S.clipShadows===!0&&S.clippingPlanes.length!==0){const B=U.uuid,G=S.uuid;let Z=l[B];Z===void 0&&(Z={},l[B]=Z);let $=Z[G];$===void 0&&($=U.clone(),Z[G]=$),U=$}return U.visible=S.visible,U.wireframe=S.wireframe,D===xo?U.side=S.shadowSide!==null?S.shadowSide:S.side:U.side=S.shadowSide!==null?S.shadowSide:u[S.side],U.clipShadows=S.clipShadows,U.clippingPlanes=S.clippingPlanes,U.clipIntersection=S.clipIntersection,U.wireframeLinewidth=S.wireframeLinewidth,U.linewidth=S.linewidth,w.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(U.referencePosition.setFromMatrixPosition(w.matrixWorld),U.nearDistance=E,U.farDistance=T),U}function v(b,M,S,w,E){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===xo)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const U=e.update(b),F=b.material;if(Array.isArray(F)){const L=U.groups;for(let B=0,G=L.length;B<G;B++){const Z=L[B],$=F[Z.materialIndex];if($&&$.visible){const se=y(b,U,$,w,S.near,S.far,E);n.renderBufferDirect(S,null,U,se,b,Z)}}}else if(F.visible){const L=y(b,U,F,w,S.near,S.far,E);n.renderBufferDirect(S,null,U,L,b,null)}}const D=b.children;for(let U=0,F=D.length;U<F;U++)v(D[U],M,S,w,E)}}function BD(n,e,t){const i=t.isWebGL2;function r(){let V=!1;const C=new bt;let A=null;const Y=new bt(0,0,0,0);return{setMask:function(ee){A!==ee&&!V&&(n.colorMask(ee,ee,ee,ee),A=ee)},setLocked:function(ee){V=ee},setClear:function(ee,fe,xe,we,ve){ve===!0&&(ee*=we,fe*=we,xe*=we),C.set(ee,fe,xe,we),Y.equals(C)===!1&&(n.clearColor(ee,fe,xe,we),Y.copy(C))},reset:function(){V=!1,A=null,Y.set(-1,0,0,0)}}}function s(){let V=!1,C=null,A=null,Y=null;return{setTest:function(ee){ee?oe(2929):ge(2929)},setMask:function(ee){C!==ee&&!V&&(n.depthMask(ee),C=ee)},setFunc:function(ee){if(A!==ee){if(ee)switch(ee){case lv:n.depthFunc(512);break;case cv:n.depthFunc(519);break;case uv:n.depthFunc(513);break;case pu:n.depthFunc(515);break;case hv:n.depthFunc(514);break;case fv:n.depthFunc(518);break;case dv:n.depthFunc(516);break;case pv:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);A=ee}},setLocked:function(ee){V=ee},setClear:function(ee){Y!==ee&&(n.clearDepth(ee),Y=ee)},reset:function(){V=!1,C=null,A=null,Y=null}}}function o(){let V=!1,C=null,A=null,Y=null,ee=null,fe=null,xe=null,we=null,ve=null;return{setTest:function(re){V||(re?oe(2960):ge(2960))},setMask:function(re){C!==re&&!V&&(n.stencilMask(re),C=re)},setFunc:function(re,We,ke){(A!==re||Y!==We||ee!==ke)&&(n.stencilFunc(re,We,ke),A=re,Y=We,ee=ke)},setOp:function(re,We,ke){(fe!==re||xe!==We||we!==ke)&&(n.stencilOp(re,We,ke),fe=re,xe=We,we=ke)},setLocked:function(re){V=re},setClear:function(re){ve!==re&&(n.clearStencil(re),ve=re)},reset:function(){V=!1,C=null,A=null,Y=null,ee=null,fe=null,xe=null,we=null,ve=null}}}const a=new r,c=new s,l=new o;let u={},h=null,f=!1,d=null,g=null,p=null,m=null,x=null,_=null,y=null,v=!1,b=null,M=null,S=null,w=null,E=null;const T=n.getParameter(35661);let D=!1,U=0;const F=n.getParameter(7938);F.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(F)[1]),D=U>=1):F.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),D=U>=2);let L=null,B={};const G=new bt,Z=new bt;function $(V,C,A){const Y=new Uint8Array(4),ee=n.createTexture();n.bindTexture(V,ee),n.texParameteri(V,10241,9728),n.texParameteri(V,10240,9728);for(let fe=0;fe<A;fe++)n.texImage2D(C+fe,0,6408,1,1,0,6408,5121,Y);return ee}const se={};se[3553]=$(3553,3553,1),se[34067]=$(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),oe(2929),c.setFunc(pu),Ne(!1),Re(ld),oe(2884),K(ji);function oe(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function ge(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function Q(V){return h!==V?(n.useProgram(V),h=V,!0):!1}const he={[es]:32774,[Jx]:32778,[Kx]:32779};if(i)he[fd]=32775,he[dd]=32776;else{const V=e.get("EXT_blend_minmax");V!==null&&(he[fd]=V.MIN_EXT,he[dd]=V.MAX_EXT)}const Se={[Qx]:0,[ev]:1,[tv]:768,[jd]:770,[av]:776,[sv]:774,[iv]:772,[nv]:769,[Jd]:771,[ov]:775,[rv]:773};function K(V,C,A,Y,ee,fe,xe,we){if(V===ji){f===!0&&(ge(3042),f=!1);return}if(f===!1&&(oe(3042),f=!0),V!==jx){if(V!==d||we!==v){if((g!==es||x!==es)&&(n.blendEquation(32774),g=es,x=es),we)switch(V){case So:n.blendFuncSeparate(1,771,1,771);break;case cd:n.blendFunc(1,1);break;case ud:n.blendFuncSeparate(0,0,769,771);break;case hd:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case So:n.blendFuncSeparate(770,771,1,771);break;case cd:n.blendFunc(770,1);break;case ud:n.blendFunc(0,769);break;case hd:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}p=null,m=null,_=null,y=null,d=V,v=we}return}ee=ee||C,fe=fe||A,xe=xe||Y,(C!==g||ee!==x)&&(n.blendEquationSeparate(he[C],he[ee]),g=C,x=ee),(A!==p||Y!==m||fe!==_||xe!==y)&&(n.blendFuncSeparate(Se[A],Se[Y],Se[fe],Se[xe]),p=A,m=Y,_=fe,y=xe),d=V,v=null}function ne(V,C){V.side===Ll?ge(2884):oe(2884);let A=V.side===Yt;C&&(A=!A),Ne(A),V.blending===So&&V.transparent===!1?K(ji):K(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),a.setMask(V.colorWrite);const Y=V.stencilWrite;l.setTest(Y),Y&&(l.setMask(V.stencilWriteMask),l.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),l.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Le(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits)}function Ne(V){b!==V&&(V?n.frontFace(2304):n.frontFace(2305),b=V)}function Re(V){V!==Xx?(oe(2884),V!==M&&(V===ld?n.cullFace(1029):V===Zx?n.cullFace(1028):n.cullFace(1032))):ge(2884),M=V}function Pe(V){V!==S&&(D&&n.lineWidth(V),S=V)}function Le(V,C,A){V?(oe(32823),(w!==C||E!==A)&&(n.polygonOffset(C,A),w=C,E=A)):ge(32823)}function $e(V){V?oe(3089):ge(3089)}function pe(V){V===void 0&&(V=33984+T-1),L!==V&&(n.activeTexture(V),L=V)}function ye(V,C){L===null&&pe();let A=B[L];A===void 0&&(A={type:void 0,texture:void 0},B[L]=A),(A.type!==V||A.texture!==C)&&(n.bindTexture(V,C||se[V]),A.type=V,A.texture=C)}function De(){const V=B[L];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ve(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function k(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function z(V){G.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),G.copy(V))}function me(V){Z.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function Me(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},L=null,B={},h=null,f=!1,d=null,g=null,p=null,m=null,x=null,_=null,y=null,v=!1,b=null,M=null,S=null,w=null,E=null,a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:oe,disable:ge,useProgram:Q,setBlending:K,setMaterial:ne,setFlipSided:Ne,setCullFace:Re,setLineWidth:Pe,setPolygonOffset:Le,setScissorTest:$e,activeTexture:pe,bindTexture:ye,unbindTexture:De,compressedTexImage2D:Ve,texImage2D:Oe,texImage3D:k,scissor:z,viewport:me,reset:Me}}function UD(n,e,t,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=new WeakMap;let d,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(k,z){return g?new OffscreenCanvas(k,z):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function m(k,z,me,Me){let V=1;if((k.width>Me||k.height>Me)&&(V=Me/Math.max(k.width,k.height)),V<1||z===!0)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap){const C=z?at.floorPowerOfTwo:Math.floor,A=C(V*k.width),Y=C(V*k.height);d===void 0&&(d=p(A,Y));const ee=me?p(A,Y):d;return ee.width=A,ee.height=Y,ee.getContext("2d").drawImage(k,0,0,A,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+A+"x"+Y+")."),ee}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),k;return k}function x(k){return at.isPowerOfTwo(k.width)&&at.isPowerOfTwo(k.height)}function _(k){return a?!1:k.wrapS!==En||k.wrapT!==En||k.minFilter!==Kt&&k.minFilter!==Qt}function y(k,z){return k.generateMipmaps&&z&&k.minFilter!==Kt&&k.minFilter!==Qt}function v(k,z,me,Me){n.generateMipmap(k);const V=i.get(z);V.__maxMipLevel=Math.log2(Math.max(me,Me))}function b(k,z,me){if(a===!1)return z;if(k!==null){if(n[k]!==void 0)return n[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Me=z;return z===6403&&(me===5126&&(Me=33326),me===5131&&(Me=33325),me===5121&&(Me=33321)),z===6407&&(me===5126&&(Me=34837),me===5131&&(Me=34843),me===5121&&(Me=32849)),z===6408&&(me===5126&&(Me=34836),me===5131&&(Me=34842),me===5121&&(Me=32856)),(Me===33325||Me===33326||Me===34842||Me===34836)&&e.get("EXT_color_buffer_float"),Me}function M(k){return k===Kt||k===_u||k===xu?9728:9729}function S(k){const z=k.target;z.removeEventListener("dispose",S),E(z),z.isVideoTexture&&f.delete(z),o.memory.textures--}function w(k){const z=k.target;z.removeEventListener("dispose",w),T(z),o.memory.textures--}function E(k){const z=i.get(k);z.__webglInit!==void 0&&(n.deleteTexture(z.__webglTexture),i.remove(k))}function T(k){const z=k.texture,me=i.get(k),Me=i.get(z);if(k){if(Me.__webglTexture!==void 0&&n.deleteTexture(Me.__webglTexture),k.depthTexture&&k.depthTexture.dispose(),k.isWebGLCubeRenderTarget)for(let V=0;V<6;V++)n.deleteFramebuffer(me.__webglFramebuffer[V]),me.__webglDepthbuffer&&n.deleteRenderbuffer(me.__webglDepthbuffer[V]);else n.deleteFramebuffer(me.__webglFramebuffer),me.__webglDepthbuffer&&n.deleteRenderbuffer(me.__webglDepthbuffer),me.__webglMultisampledFramebuffer&&n.deleteFramebuffer(me.__webglMultisampledFramebuffer),me.__webglColorRenderbuffer&&n.deleteRenderbuffer(me.__webglColorRenderbuffer),me.__webglDepthRenderbuffer&&n.deleteRenderbuffer(me.__webglDepthRenderbuffer);i.remove(z),i.remove(k)}}let D=0;function U(){D=0}function F(){const k=D;return k>=c&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+c),D+=1,k}function L(k,z){const me=i.get(k);if(k.isVideoTexture&&pe(k),k.version>0&&me.__version!==k.version){const Me=k.image;if(Me===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(Me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(me,k,z);return}}t.activeTexture(33984+z),t.bindTexture(3553,me.__webglTexture)}function B(k,z){const me=i.get(k);if(k.version>0&&me.__version!==k.version){Q(me,k,z);return}t.activeTexture(33984+z),t.bindTexture(35866,me.__webglTexture)}function G(k,z){const me=i.get(k);if(k.version>0&&me.__version!==k.version){Q(me,k,z);return}t.activeTexture(33984+z),t.bindTexture(32879,me.__webglTexture)}function Z(k,z){const me=i.get(k);if(k.version>0&&me.__version!==k.version){he(me,k,z);return}t.activeTexture(33984+z),t.bindTexture(34067,me.__webglTexture)}const $={[$a]:10497,[En]:33071,[qa]:33648},se={[Kt]:9728,[_u]:9984,[xu]:9986,[Qt]:9729,[Kd]:9985,[qo]:9987};function oe(k,z,me){if(me?(n.texParameteri(k,10242,$[z.wrapS]),n.texParameteri(k,10243,$[z.wrapT]),(k===32879||k===35866)&&n.texParameteri(k,32882,$[z.wrapR]),n.texParameteri(k,10240,se[z.magFilter]),n.texParameteri(k,10241,se[z.minFilter])):(n.texParameteri(k,10242,33071),n.texParameteri(k,10243,33071),(k===32879||k===35866)&&n.texParameteri(k,32882,33071),(z.wrapS!==En||z.wrapT!==En)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(k,10240,M(z.magFilter)),n.texParameteri(k,10241,M(z.minFilter)),z.minFilter!==Kt&&z.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Me=e.get("EXT_texture_filter_anisotropic");if(z.type===Zi&&e.has("OES_texture_float_linear")===!1||a===!1&&z.type===Za&&e.has("OES_texture_half_float_linear")===!1)return;(z.anisotropy>1||i.get(z).__currentAnisotropy)&&(n.texParameterf(k,Me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(z.anisotropy,r.getMaxAnisotropy())),i.get(z).__currentAnisotropy=z.anisotropy)}}function ge(k,z){k.__webglInit===void 0&&(k.__webglInit=!0,z.addEventListener("dispose",S),k.__webglTexture=n.createTexture(),o.memory.textures++)}function Q(k,z,me){let Me=3553;z.isDataTexture2DArray&&(Me=35866),z.isDataTexture3D&&(Me=32879),ge(k,z),t.activeTexture(33984+me),t.bindTexture(Me,k.__webglTexture),n.pixelStorei(37440,z.flipY),n.pixelStorei(37441,z.premultiplyAlpha),n.pixelStorei(3317,z.unpackAlignment),n.pixelStorei(37443,0);const V=_(z)&&x(z.image)===!1,C=m(z.image,V,!1,u),A=x(C)||a,Y=s.convert(z.format);let ee=s.convert(z.type),fe=b(z.internalFormat,Y,ee);oe(Me,z,A);let xe;const we=z.mipmaps;if(z.isDepthTexture)fe=6402,a?z.type===Zi?fe=36012:z.type===Ra?fe=33190:z.type===Eo?fe=35056:fe=33189:z.type===Zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),z.format===us&&fe===6402&&z.type!==Xa&&z.type!==Ra&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),z.type=Xa,ee=s.convert(z.type)),z.format===Io&&fe===6402&&(fe=34041,z.type!==Eo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),z.type=Eo,ee=s.convert(z.type))),t.texImage2D(3553,0,fe,C.width,C.height,0,Y,ee,null);else if(z.isDataTexture)if(we.length>0&&A){for(let ve=0,re=we.length;ve<re;ve++)xe=we[ve],t.texImage2D(3553,ve,fe,xe.width,xe.height,0,Y,ee,xe.data);z.generateMipmaps=!1,k.__maxMipLevel=we.length-1}else t.texImage2D(3553,0,fe,C.width,C.height,0,Y,ee,C.data),k.__maxMipLevel=0;else if(z.isCompressedTexture){for(let ve=0,re=we.length;ve<re;ve++)xe=we[ve],z.format!==qn&&z.format!==Er?Y!==null?t.compressedTexImage2D(3553,ve,fe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,ve,fe,xe.width,xe.height,0,Y,ee,xe.data);k.__maxMipLevel=we.length-1}else if(z.isDataTexture2DArray)t.texImage3D(35866,0,fe,C.width,C.height,C.depth,0,Y,ee,C.data),k.__maxMipLevel=0;else if(z.isDataTexture3D)t.texImage3D(32879,0,fe,C.width,C.height,C.depth,0,Y,ee,C.data),k.__maxMipLevel=0;else if(we.length>0&&A){for(let ve=0,re=we.length;ve<re;ve++)xe=we[ve],t.texImage2D(3553,ve,fe,Y,ee,xe);z.generateMipmaps=!1,k.__maxMipLevel=we.length-1}else t.texImage2D(3553,0,fe,Y,ee,C),k.__maxMipLevel=0;y(z,A)&&v(Me,z,C.width,C.height),k.__version=z.version,z.onUpdate&&z.onUpdate(z)}function he(k,z,me){if(z.image.length!==6)return;ge(k,z),t.activeTexture(33984+me),t.bindTexture(34067,k.__webglTexture),n.pixelStorei(37440,z.flipY),n.pixelStorei(37441,z.premultiplyAlpha),n.pixelStorei(3317,z.unpackAlignment),n.pixelStorei(37443,0);const Me=z&&(z.isCompressedTexture||z.image[0].isCompressedTexture),V=z.image[0]&&z.image[0].isDataTexture,C=[];for(let ve=0;ve<6;ve++)!Me&&!V?C[ve]=m(z.image[ve],!1,!0,l):C[ve]=V?z.image[ve].image:z.image[ve];const A=C[0],Y=x(A)||a,ee=s.convert(z.format),fe=s.convert(z.type),xe=b(z.internalFormat,ee,fe);oe(34067,z,Y);let we;if(Me){for(let ve=0;ve<6;ve++){we=C[ve].mipmaps;for(let re=0;re<we.length;re++){const We=we[re];z.format!==qn&&z.format!==Er?ee!==null?t.compressedTexImage2D(34069+ve,re,xe,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+ve,re,xe,We.width,We.height,0,ee,fe,We.data)}}k.__maxMipLevel=we.length-1}else{we=z.mipmaps;for(let ve=0;ve<6;ve++)if(V){t.texImage2D(34069+ve,0,xe,C[ve].width,C[ve].height,0,ee,fe,C[ve].data);for(let re=0;re<we.length;re++){const ke=we[re].image[ve].image;t.texImage2D(34069+ve,re+1,xe,ke.width,ke.height,0,ee,fe,ke.data)}}else{t.texImage2D(34069+ve,0,xe,ee,fe,C[ve]);for(let re=0;re<we.length;re++){const We=we[re];t.texImage2D(34069+ve,re+1,xe,ee,fe,We.image[ve])}}k.__maxMipLevel=we.length}y(z,Y)&&v(34067,z,A.width,A.height),k.__version=z.version,z.onUpdate&&z.onUpdate(z)}function Se(k,z,me,Me){const V=z.texture,C=s.convert(V.format),A=s.convert(V.type),Y=b(V.internalFormat,C,A);Me===32879||Me===35866?t.texImage3D(Me,0,Y,z.width,z.height,z.depth,0,C,A,null):t.texImage2D(Me,0,Y,z.width,z.height,0,C,A,null),n.bindFramebuffer(36160,k),n.framebufferTexture2D(36160,me,Me,i.get(V).__webglTexture,0),n.bindFramebuffer(36160,null)}function K(k,z,me){if(n.bindRenderbuffer(36161,k),z.depthBuffer&&!z.stencilBuffer){let Me=33189;if(me){const V=z.depthTexture;V&&V.isDepthTexture&&(V.type===Zi?Me=36012:V.type===Ra&&(Me=33190));const C=$e(z);n.renderbufferStorageMultisample(36161,C,Me,z.width,z.height)}else n.renderbufferStorage(36161,Me,z.width,z.height);n.framebufferRenderbuffer(36160,36096,36161,k)}else if(z.depthBuffer&&z.stencilBuffer){if(me){const Me=$e(z);n.renderbufferStorageMultisample(36161,Me,35056,z.width,z.height)}else n.renderbufferStorage(36161,34041,z.width,z.height);n.framebufferRenderbuffer(36160,33306,36161,k)}else{const Me=z.texture,V=s.convert(Me.format),C=s.convert(Me.type),A=b(Me.internalFormat,V,C);if(me){const Y=$e(z);n.renderbufferStorageMultisample(36161,Y,A,z.width,z.height)}else n.renderbufferStorage(36161,A,z.width,z.height)}n.bindRenderbuffer(36161,null)}function ne(k,z){if(z&&z.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,k),!(z.depthTexture&&z.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(z.depthTexture).__webglTexture||z.depthTexture.image.width!==z.width||z.depthTexture.image.height!==z.height)&&(z.depthTexture.image.width=z.width,z.depthTexture.image.height=z.height,z.depthTexture.needsUpdate=!0),L(z.depthTexture,0);const Me=i.get(z.depthTexture).__webglTexture;if(z.depthTexture.format===us)n.framebufferTexture2D(36160,36096,3553,Me,0);else if(z.depthTexture.format===Io)n.framebufferTexture2D(36160,33306,3553,Me,0);else throw new Error("Unknown depthTexture format")}function Ne(k){const z=i.get(k),me=k.isWebGLCubeRenderTarget===!0;if(k.depthTexture){if(me)throw new Error("target.depthTexture not supported in Cube render targets");ne(z.__webglFramebuffer,k)}else if(me){z.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)n.bindFramebuffer(36160,z.__webglFramebuffer[Me]),z.__webglDepthbuffer[Me]=n.createRenderbuffer(),K(z.__webglDepthbuffer[Me],k,!1)}else n.bindFramebuffer(36160,z.__webglFramebuffer),z.__webglDepthbuffer=n.createRenderbuffer(),K(z.__webglDepthbuffer,k,!1);n.bindFramebuffer(36160,null)}function Re(k){const z=k.texture,me=i.get(k),Me=i.get(z);k.addEventListener("dispose",w),Me.__webglTexture=n.createTexture(),o.memory.textures++;const V=k.isWebGLCubeRenderTarget===!0,C=k.isWebGLMultisampleRenderTarget===!0,A=z.isDataTexture3D||z.isDataTexture2DArray,Y=x(k)||a;if(a&&z.format===Er&&(z.type===Zi||z.type===Za)&&(z.format=qn,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),V){me.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)me.__webglFramebuffer[ee]=n.createFramebuffer()}else if(me.__webglFramebuffer=n.createFramebuffer(),C)if(a){me.__webglMultisampledFramebuffer=n.createFramebuffer(),me.__webglColorRenderbuffer=n.createRenderbuffer(),n.bindRenderbuffer(36161,me.__webglColorRenderbuffer);const ee=s.convert(z.format),fe=s.convert(z.type),xe=b(z.internalFormat,ee,fe),we=$e(k);n.renderbufferStorageMultisample(36161,we,xe,k.width,k.height),n.bindFramebuffer(36160,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064,36161,me.__webglColorRenderbuffer),n.bindRenderbuffer(36161,null),k.depthBuffer&&(me.__webglDepthRenderbuffer=n.createRenderbuffer(),K(me.__webglDepthRenderbuffer,k,!0)),n.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(V){t.bindTexture(34067,Me.__webglTexture),oe(34067,z,Y);for(let ee=0;ee<6;ee++)Se(me.__webglFramebuffer[ee],k,36064,34069+ee);y(z,Y)&&v(34067,z,k.width,k.height),t.bindTexture(34067,null)}else{let ee=3553;A&&(a?ee=z.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(ee,Me.__webglTexture),oe(ee,z,Y),Se(me.__webglFramebuffer,k,36064,ee),y(z,Y)&&v(3553,z,k.width,k.height),t.bindTexture(3553,null)}k.depthBuffer&&Ne(k)}function Pe(k){const z=k.texture,me=x(k)||a;if(y(z,me)){const Me=k.isWebGLCubeRenderTarget?34067:3553,V=i.get(z).__webglTexture;t.bindTexture(Me,V),v(Me,z,k.width,k.height),t.bindTexture(Me,null)}}function Le(k){if(k.isWebGLMultisampleRenderTarget)if(a){const z=i.get(k);n.bindFramebuffer(36008,z.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,z.__webglFramebuffer);const me=k.width,Me=k.height;let V=16384;k.depthBuffer&&(V|=256),k.stencilBuffer&&(V|=1024),n.blitFramebuffer(0,0,me,Me,0,0,me,Me,V,9728),n.bindFramebuffer(36160,z.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function $e(k){return a&&k.isWebGLMultisampleRenderTarget?Math.min(h,k.samples):0}function pe(k){const z=o.render.frame;f.get(k)!==z&&(f.set(k,z),k.update())}let ye=!1,De=!1;function Ve(k,z){k&&k.isWebGLRenderTarget&&(ye===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),ye=!0),k=k.texture),L(k,z)}function Oe(k,z){k&&k.isWebGLCubeRenderTarget&&(De===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),De=!0),k=k.texture),Z(k,z)}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=L,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=Z,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Le,this.safeSetTexture2D=Ve,this.safeSetTextureCube=Oe}function zy(n,e,t){const i=t.isWebGL2;function r(s){let o;if(s===Xo)return 5121;if(s===Ev)return 32819;if(s===Tv)return 32820;if(s===Av)return 33635;if(s===Mv)return 5120;if(s===wv)return 5122;if(s===Xa)return 5123;if(s===Sv)return 5124;if(s===Ra)return 5125;if(s===Zi)return 5126;if(s===Za)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Lv)return 6406;if(s===Er)return 6407;if(s===qn)return 6408;if(s===Cv)return 6409;if(s===Rv)return 6410;if(s===us)return 6402;if(s===Io)return 34041;if(s===Dv)return 6403;if(s===Iv)return 36244;if(s===Fv)return 33319;if(s===Nv)return 33320;if(s===zv)return 36248;if(s===Ov)return 36249;if(s===pd||s===md||s===gd||s===_d)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===pd)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===md)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gd)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_d)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xd||s===vd||s===yd||s===bd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===xd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Bv)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Md||s===wd)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===Md)return o.COMPRESSED_RGB8_ETC2;if(s===wd)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===Uv||s===kv||s===Gv||s===Hv||s===Vv||s===Wv||s===$v||s===qv||s===Xv||s===Zv||s===Yv||s===jv||s===Jv||s===Kv||s===ey||s===ty||s===ny||s===iy||s===ry||s===sy||s===oy||s===ay||s===ly||s===cy||s===uy||s===hy||s===fy||s===dy)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===Qv)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===Eo)return i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function vu(n=[]){jt.call(this),this.cameras=n}vu.prototype=Object.assign(Object.create(jt.prototype),{constructor:vu,isArrayCamera:!0});class as extends st{constructor(){super(),this.type="Group"}}as.prototype.isGroup=!0;function Pa(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(Pa.prototype,{constructor:Pa,getHandSpace:function(){return this._hand===null&&(this._hand=new as,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new as,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new as,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this},disconnect:function(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(n,e,t){let i=null,r=null,s=null;const o=this._targetRay,a=this._grip,c=this._hand;if(n&&e.session.visibilityState!=="visible-blurred")if(c&&n.hand){s=!0;for(const g of n.hand.values()){const p=e.getJointPose(g,t);if(c.joints[g.jointName]===void 0){const x=new as;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[g.jointName]=x,c.add(x)}const m=c.joints[g.jointName];p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=p.radius),m.visible=p!==null}const l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=l.position.distanceTo(u.position),f=.02,d=.005;c.inputState.pinching&&h>f+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!c.inputState.pinching&&h<=f-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else o!==null&&(i=e.getPose(n.targetRaySpace,t),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&n.gripSpace&&(r=e.getPose(n.gripSpace,t),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}});function Oy(n,e){const t=this;let i=null,r=1,s=null,o="local-floor",a=null;const c=[],l=new Map,u=new jt;u.layers.enable(1),u.viewport=new bt;const h=new jt;h.layers.enable(2),h.viewport=new bt;const f=[u,h],d=new vu;d.layers.enable(1),d.layers.enable(2);let g=null,p=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let D=c[T];return D===void 0&&(D=new Pa,c[T]=D),D.getTargetRaySpace()},this.getControllerGrip=function(T){let D=c[T];return D===void 0&&(D=new Pa,c[T]=D),D.getGripSpace()},this.getHand=function(T){let D=c[T];return D===void 0&&(D=new Pa,c[T]=D),D.getHandSpace()};function m(T){const D=l.get(T.inputSource);D&&D.dispatchEvent({type:T.type,data:T.inputSource})}function x(){l.forEach(function(T,D){T.disconnect(D)}),l.clear(),g=null,p=null,n.setFramebuffer(null),n.setRenderTarget(n.getRenderTarget()),E.stop(),t.isPresenting=!1,t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){r=T,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){o=T,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getSession=function(){return i},this.setSession=async function(T){if(i=T,i!==null){i.addEventListener("select",m),i.addEventListener("selectstart",m),i.addEventListener("selectend",m),i.addEventListener("squeeze",m),i.addEventListener("squeezestart",m),i.addEventListener("squeezeend",m),i.addEventListener("end",x),i.addEventListener("inputsourceschange",_);const D=e.getContextAttributes();D.xrCompatible!==!0&&await e.makeXRCompatible();const U={antialias:D.antialias,alpha:D.alpha,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:r},F=new XRWebGLLayer(i,e,U);i.updateRenderState({baseLayer:F}),s=await i.requestReferenceSpace(o),E.setContext(i),E.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}};function _(T){const D=i.inputSources;for(let U=0;U<c.length;U++)l.set(D[U],c[U]);for(let U=0;U<T.removed.length;U++){const F=T.removed[U],L=l.get(F);L&&(L.dispatchEvent({type:"disconnected",data:F}),l.delete(F))}for(let U=0;U<T.added.length;U++){const F=T.added[U],L=l.get(F);L&&L.dispatchEvent({type:"connected",data:F})}}const y=new I,v=new I;function b(T,D,U){y.setFromMatrixPosition(D.matrixWorld),v.setFromMatrixPosition(U.matrixWorld);const F=y.distanceTo(v),L=D.projectionMatrix.elements,B=U.projectionMatrix.elements,G=L[14]/(L[10]-1),Z=L[14]/(L[10]+1),$=(L[9]+1)/L[5],se=(L[9]-1)/L[5],oe=(L[8]-1)/L[0],ge=(B[8]+1)/B[0],Q=G*oe,he=G*ge,Se=F/(-oe+ge),K=Se*-oe;D.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(K),T.translateZ(Se),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert();const ne=G+Se,Ne=Z+Se,Re=Q-K,Pe=he+(F-K),Le=$*Z/Ne*ne,$e=se*Z/Ne*ne;T.projectionMatrix.makePerspective(Re,Pe,Le,$e,ne,Ne)}function M(T,D){D===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(D.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.getCamera=function(T){d.near=h.near=u.near=T.near,d.far=h.far=u.far=T.far,(g!==d.near||p!==d.far)&&(i.updateRenderState({depthNear:d.near,depthFar:d.far}),g=d.near,p=d.far);const D=T.parent,U=d.cameras;M(d,D);for(let L=0;L<U.length;L++)M(U[L],D);T.matrixWorld.copy(d.matrixWorld),T.matrix.copy(d.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale);const F=T.children;for(let L=0,B=F.length;L<B;L++)F[L].updateMatrixWorld(!0);return U.length===2?b(d,u,h):d.projectionMatrix.copy(u.projectionMatrix),d};let S=null;function w(T,D){if(a=D.getViewerPose(s),a!==null){const F=a.views,L=i.renderState.baseLayer;n.setFramebuffer(L.framebuffer);let B=!1;F.length!==d.cameras.length&&(d.cameras.length=0,B=!0);for(let G=0;G<F.length;G++){const Z=F[G],$=L.getViewport(Z),se=f[G];se.matrix.fromArray(Z.transform.matrix),se.projectionMatrix.fromArray(Z.projectionMatrix),se.viewport.set($.x,$.y,$.width,$.height),G===0&&d.matrix.copy(se.matrix),B===!0&&d.cameras.push(se)}}const U=i.inputSources;for(let F=0;F<c.length;F++){const L=c[F],B=U[F];L.update(B,D,s)}S&&S(T,D)}const E=new Ay;E.setAnimationLoop(w),this.setAnimationLoop=function(T){S=T},this.dispose=function(){}}Object.assign(Oy.prototype,er.prototype);function kD(n){function e(x,_){x.fogColor.value.copy(_.color),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function t(x,_,y,v){_.isMeshBasicMaterial?i(x,_):_.isMeshLambertMaterial?(i(x,_),c(x,_)):_.isMeshToonMaterial?(i(x,_),u(x,_)):_.isMeshPhongMaterial?(i(x,_),l(x,_)):_.isMeshStandardMaterial?(i(x,_),_.isMeshPhysicalMaterial?f(x,_):h(x,_)):_.isMeshMatcapMaterial?(i(x,_),d(x,_)):_.isMeshDepthMaterial?(i(x,_),g(x,_)):_.isMeshDistanceMaterial?(i(x,_),p(x,_)):_.isMeshNormalMaterial?(i(x,_),m(x,_)):_.isLineBasicMaterial?(r(x,_),_.isLineDashedMaterial&&s(x,_)):_.isPointsMaterial?o(x,_,y,v):_.isSpriteMaterial?a(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function i(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map),_.alphaMap&&(x.alphaMap.value=_.alphaMap),_.specularMap&&(x.specularMap.value=_.specularMap);const y=n.get(_).envMap;if(y){x.envMap.value=y,x.flipEnvMap.value=y.isCubeTexture&&y._needsFlipEnvMap?-1:1,x.reflectivity.value=_.reflectivity,x.refractionRatio.value=_.refractionRatio;const M=n.get(y).__maxMipLevel;M!==void 0&&(x.maxMipLevel.value=M)}_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity);let v;_.map?v=_.map:_.specularMap?v=_.specularMap:_.displacementMap?v=_.displacementMap:_.normalMap?v=_.normalMap:_.bumpMap?v=_.bumpMap:_.roughnessMap?v=_.roughnessMap:_.metalnessMap?v=_.metalnessMap:_.alphaMap?v=_.alphaMap:_.emissiveMap?v=_.emissiveMap:_.clearcoatMap?v=_.clearcoatMap:_.clearcoatNormalMap?v=_.clearcoatNormalMap:_.clearcoatRoughnessMap&&(v=_.clearcoatRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),x.uvTransform.value.copy(v.matrix));let b;_.aoMap?b=_.aoMap:_.lightMap&&(b=_.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),x.uv2Transform.value.copy(b.matrix))}function r(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity}function s(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function o(x,_,y,v){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*y,x.scale.value=v*.5,_.map&&(x.map.value=_.map),_.alphaMap&&(x.alphaMap.value=_.alphaMap);let b;_.map?b=_.map:_.alphaMap&&(b=_.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),x.uvTransform.value.copy(b.matrix))}function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map),_.alphaMap&&(x.alphaMap.value=_.alphaMap);let y;_.map?y=_.map:_.alphaMap&&(y=_.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),x.uvTransform.value.copy(y.matrix))}function c(x,_){_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap)}function l(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap),_.bumpMap&&(x.bumpMap.value=_.bumpMap,x.bumpScale.value=_.bumpScale,_.side===Yt&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,x.normalScale.value.copy(_.normalScale),_.side===Yt&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias)}function u(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap),_.bumpMap&&(x.bumpMap.value=_.bumpMap,x.bumpScale.value=_.bumpScale,_.side===Yt&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,x.normalScale.value.copy(_.normalScale),_.side===Yt&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias)}function h(x,_){x.roughness.value=_.roughness,x.metalness.value=_.metalness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap),_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap),_.bumpMap&&(x.bumpMap.value=_.bumpMap,x.bumpScale.value=_.bumpScale,_.side===Yt&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,x.normalScale.value.copy(_.normalScale),_.side===Yt&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),n.get(_).envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function f(x,_){h(x,_),x.reflectivity.value=_.reflectivity,x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.sheen&&x.sheen.value.copy(_.sheen),_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap),_.clearcoatNormalMap&&(x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),x.clearcoatNormalMap.value=_.clearcoatNormalMap,_.side===Yt&&x.clearcoatNormalScale.value.negate()),x.transmission.value=_.transmission,_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap)}function d(x,_){_.matcap&&(x.matcap.value=_.matcap),_.bumpMap&&(x.bumpMap.value=_.bumpMap,x.bumpScale.value=_.bumpScale,_.side===Yt&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,x.normalScale.value.copy(_.normalScale),_.side===Yt&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias)}function g(x,_){_.displacementMap&&(x.displacementMap.value=_.displacementMap,x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias)}function p(x,_){_.displacementMap&&(x.displacementMap.value=_.displacementMap,x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),x.referencePosition.value.copy(_.referencePosition),x.nearDistance.value=_.nearDistance,x.farDistance.value=_.farDistance}function m(x,_){_.bumpMap&&(x.bumpMap.value=_.bumpMap,x.bumpScale.value=_.bumpScale,_.side===Yt&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,x.normalScale.value.copy(_.normalScale),_.side===Yt&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function GD(){const n=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return n.style.display="block",n}function Et(n){n=n||{};const e=n.canvas!==void 0?n.canvas:GD(),t=n.context!==void 0?n.context:null,i=n.alpha!==void 0?n.alpha:!1,r=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,o=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,c=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=An,this.physicallyCorrectLights=!1,this.toneMapping=cs,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;const p=this;let m=!1,x=null,_=0,y=0,v=null,b=null,M=-1,S=null;const w=new bt,E=new bt;let T=null,D=e.width,U=e.height,F=1,L=null,B=null;const G=new bt(0,0,D,U),Z=new bt(0,0,D,U);let $=!1;const se=new Nl;let oe=!1,ge=!1;const Q=new Ke,he=new I,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function K(){return v===null?F:1}let ne=t;function Ne(N,ue){for(let ae=0;ae<N.length;ae++){const _e=N[ae],Be=e.getContext(_e,ue);if(Be!==null)return Be}return null}try{const N={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",ke,!1),e.addEventListener("webglcontextrestored",it,!1),ne===null){const ue=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&ue.shift(),ne=Ne(ue,N),ne===null)throw Ne(ue)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ne.getShaderPrecisionFormat===void 0&&(ne.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Re,Pe,Le,$e,pe,ye,De,Ve,Oe,k,z,me,Me,V,C,A,Y,ee,fe,xe,we;function ve(){Re=new vP(ne),Pe=new gP(ne,Re,n),Re.init(Pe),xe=new zy(ne,Re,Pe),Le=new BD(ne,Re,Pe),Le.scissor(E.copy(Z).multiplyScalar(F).floor()),Le.viewport(w.copy(G).multiplyScalar(F).floor()),$e=new MP,pe=new TD,ye=new UD(ne,Re,Le,pe,Pe,xe,$e),De=new xP(p),Ve=new $L(ne,Pe),we=new pP(ne,Re,Ve,Pe),Oe=new yP(ne,Ve,$e,we),k=new TP(ne,Oe,Ve,$e),Y=new EP(ne),C=new _P(pe),z=new ED(p,De,Re,Pe,we,C),me=new kD(pe),Me=new CD(pe),V=new ND(Re,Pe),A=new dP(p,De,Le,k,a),ee=new mP(ne,Re,$e,Pe),fe=new bP(ne,Re,$e,Pe),$e.programs=z.programs,p.capabilities=Pe,p.extensions=Re,p.properties=pe,p.renderLists=Me,p.state=Le,p.info=$e}ve();const re=new Oy(p,ne);this.xr=re;const We=new Ny(p,k,Pe.maxTextureSize);this.shadowMap=We,this.getContext=function(){return ne},this.getContextAttributes=function(){return ne.getContextAttributes()},this.forceContextLoss=function(){const N=Re.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Re.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(N){N!==void 0&&(F=N,this.setSize(D,U,!1))},this.getSize=function(N){return N===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),N=new Ee),N.set(D,U)},this.setSize=function(N,ue,ae){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=N,U=ue,e.width=Math.floor(N*F),e.height=Math.floor(ue*F),ae!==!1&&(e.style.width=N+"px",e.style.height=ue+"px"),this.setViewport(0,0,N,ue)},this.getDrawingBufferSize=function(N){return N===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),N=new Ee),N.set(D*F,U*F).floor()},this.setDrawingBufferSize=function(N,ue,ae){D=N,U=ue,F=ae,e.width=Math.floor(N*ae),e.height=Math.floor(ue*ae),this.setViewport(0,0,N,ue)},this.getCurrentViewport=function(N){return N===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),N=new bt),N.copy(w)},this.getViewport=function(N){return N.copy(G)},this.setViewport=function(N,ue,ae,_e){N.isVector4?G.set(N.x,N.y,N.z,N.w):G.set(N,ue,ae,_e),Le.viewport(w.copy(G).multiplyScalar(F).floor())},this.getScissor=function(N){return N.copy(Z)},this.setScissor=function(N,ue,ae,_e){N.isVector4?Z.set(N.x,N.y,N.z,N.w):Z.set(N,ue,ae,_e),Le.scissor(E.copy(Z).multiplyScalar(F).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(N){Le.setScissorTest($=N)},this.setOpaqueSort=function(N){L=N},this.setTransparentSort=function(N){B=N},this.getClearColor=function(N){return N===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),N=new Xe),N.copy(A.getClearColor())},this.setClearColor=function(){A.setClearColor.apply(A,arguments)},this.getClearAlpha=function(){return A.getClearAlpha()},this.setClearAlpha=function(){A.setClearAlpha.apply(A,arguments)},this.clear=function(N,ue,ae){let _e=0;(N===void 0||N)&&(_e|=16384),(ue===void 0||ue)&&(_e|=256),(ae===void 0||ae)&&(_e|=1024),ne.clear(_e)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",it,!1),Me.dispose(),V.dispose(),pe.dispose(),De.dispose(),k.dispose(),we.dispose(),re.dispose(),de.stop()};function ke(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1,ve()}function et(N){const ue=N.target;ue.removeEventListener("dispose",et),tt(ue)}function tt(N){mt(N),pe.remove(N)}function mt(N){const ue=pe.get(N).program;ue!==void 0&&z.releaseProgram(ue)}function Mt(N,ue){N.render(function(ae){p.renderBufferImmediate(ae,ue)})}this.renderBufferImmediate=function(N,ue){we.initAttributes();const ae=pe.get(N);N.hasPositions&&!ae.position&&(ae.position=ne.createBuffer()),N.hasNormals&&!ae.normal&&(ae.normal=ne.createBuffer()),N.hasUvs&&!ae.uv&&(ae.uv=ne.createBuffer()),N.hasColors&&!ae.color&&(ae.color=ne.createBuffer());const _e=ue.getAttributes();N.hasPositions&&(ne.bindBuffer(34962,ae.position),ne.bufferData(34962,N.positionArray,35048),we.enableAttribute(_e.position),ne.vertexAttribPointer(_e.position,3,5126,!1,0,0)),N.hasNormals&&(ne.bindBuffer(34962,ae.normal),ne.bufferData(34962,N.normalArray,35048),we.enableAttribute(_e.normal),ne.vertexAttribPointer(_e.normal,3,5126,!1,0,0)),N.hasUvs&&(ne.bindBuffer(34962,ae.uv),ne.bufferData(34962,N.uvArray,35048),we.enableAttribute(_e.uv),ne.vertexAttribPointer(_e.uv,2,5126,!1,0,0)),N.hasColors&&(ne.bindBuffer(34962,ae.color),ne.bufferData(34962,N.colorArray,35048),we.enableAttribute(_e.color),ne.vertexAttribPointer(_e.color,3,5126,!1,0,0)),we.disableUnusedAttributes(),ne.drawArrays(4,0,N.count),N.count=0},this.renderBufferDirect=function(N,ue,ae,_e,Be,ct){ue===null&&(ue=Se);const P=Be.isMesh&&Be.matrixWorld.determinant()<0,W=zt(N,ue,_e,Be);Le.setMaterial(_e,P);let ie=ae.index;const J=ae.attributes.position;if(ie===null){if(J===void 0||J.count===0)return}else if(ie.count===0)return;let ce=1;_e.wireframe===!0&&(ie=Oe.getWireframeAttribute(ae),ce=2),(_e.morphTargets||_e.morphNormals)&&Y.update(Be,ae,_e,W),we.setup(Be,_e,W,ae,ie);let Ae,Ge=ee;ie!==null&&(Ae=Ve.get(ie),Ge=fe,Ge.setIndex(Ae));const rt=ie!==null?ie.count:J.count,je=ae.drawRange.start*ce,lt=ae.drawRange.count*ce,nt=ct!==null?ct.start*ce:0,ut=ct!==null?ct.count*ce:1/0,_t=Math.max(je,nt),Vt=Math.min(rt,je+lt,nt+ut)-1,sn=Math.max(0,Vt-_t+1);if(sn!==0){if(Be.isMesh)_e.wireframe===!0?(Le.setLineWidth(_e.wireframeLinewidth*K()),Ge.setMode(1)):Ge.setMode(4);else if(Be.isLine){let yn=_e.linewidth;yn===void 0&&(yn=1),Le.setLineWidth(yn*K()),Be.isLineSegments?Ge.setMode(1):Be.isLineLoop?Ge.setMode(2):Ge.setMode(3)}else Be.isPoints?Ge.setMode(0):Be.isSprite&&Ge.setMode(4);if(Be.isInstancedMesh)Ge.renderInstances(_t,sn,Be.count);else if(ae.isInstancedBufferGeometry){const yn=Math.min(ae.instanceCount,ae._maxInstanceCount);Ge.renderInstances(_t,sn,yn)}else Ge.render(_t,sn)}},this.compile=function(N,ue){f=V.get(N),f.init(),N.traverseVisible(function(_e){_e.isLight&&_e.layers.test(ue.layers)&&(f.pushLight(_e),_e.castShadow&&f.pushShadow(_e))}),f.setupLights();const ae=new WeakMap;N.traverse(function(_e){const Be=_e.material;if(Be)if(Array.isArray(Be))for(let ct=0;ct<Be.length;ct++){const P=Be[ct];ae.has(P)===!1&&(gt(P,N,_e),ae.set(P))}else ae.has(Be)===!1&&(gt(Be,N,_e),ae.set(Be))})};let Lt=null;function X(N){re.isPresenting||Lt&&Lt(N)}const de=new Ay;de.setAnimationLoop(X),typeof window<"u"&&de.setContext(window),this.setAnimationLoop=function(N){Lt=N,re.setAnimationLoop(N),N===null?de.stop():de.start()},this.render=function(N,ue){let ae,_e;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),ae=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),_e=arguments[3]),ue!==void 0&&ue.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;we.resetDefaultState(),M=-1,S=null,N.autoUpdate===!0&&N.updateMatrixWorld(),ue.parent===null&&ue.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(ue=re.getCamera(ue)),N.isScene===!0&&N.onBeforeRender(p,N,ue,ae||v),f=V.get(N,g.length),f.init(),g.push(f),Q.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),se.setFromProjectionMatrix(Q),ge=this.localClippingEnabled,oe=C.init(this.clippingPlanes,ge,ue),h=Me.get(N,d.length),h.init(),d.push(h),Ce(N,ue,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(L,B),oe===!0&&C.beginShadows();const Be=f.state.shadowsArray;We.render(Be,N,ue),f.setupLights(),f.setupLightsView(ue),oe===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae!==void 0&&this.setRenderTarget(ae),A.render(h,N,ue,_e);const ct=h.opaque,P=h.transparent;ct.length>0&&qe(ct,N,ue),P.length>0&&qe(P,N,ue),N.isScene===!0&&N.onAfterRender(p,N,ue),v!==null&&(ye.updateRenderTargetMipmap(v),ye.updateMultisampleRenderTarget(v)),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1),g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function Ce(N,ue,ae,_e){if(N.visible===!1)return;if(N.layers.test(ue.layers)){if(N.isGroup)ae=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(ue);else if(N.isLight)f.pushLight(N),N.castShadow&&f.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||se.intersectsSprite(N)){_e&&he.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Q);const P=k.update(N),W=N.material;W.visible&&h.push(N,P,W,ae,he.z,null)}}else if(N.isImmediateRenderObject)_e&&he.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Q),h.push(N,null,N.material,ae,he.z,null);else if((N.isMesh||N.isLine||N.isPoints)&&(N.isSkinnedMesh&&N.skeleton.frame!==$e.render.frame&&(N.skeleton.update(),N.skeleton.frame=$e.render.frame),!N.frustumCulled||se.intersectsObject(N))){_e&&he.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Q);const P=k.update(N),W=N.material;if(Array.isArray(W)){const ie=P.groups;for(let J=0,ce=ie.length;J<ce;J++){const Ae=ie[J],Ge=W[Ae.materialIndex];Ge&&Ge.visible&&h.push(N,P,Ge,ae,he.z,Ae)}}else W.visible&&h.push(N,P,W,ae,he.z,null)}}const ct=N.children;for(let P=0,W=ct.length;P<W;P++)Ce(ct[P],ue,ae,_e)}function qe(N,ue,ae){const _e=ue.isScene===!0?ue.overrideMaterial:null;for(let Be=0,ct=N.length;Be<ct;Be++){const P=N[Be],W=P.object,ie=P.geometry,J=_e===null?P.material:_e,ce=P.group;if(ae.isArrayCamera){const Ae=ae.cameras;for(let Ge=0,rt=Ae.length;Ge<rt;Ge++){const je=Ae[Ge];W.layers.test(je.layers)&&(Le.viewport(w.copy(je.viewport)),f.setupLightsView(je),Ye(W,ue,je,ie,J,ce))}}else Ye(W,ue,ae,ie,J,ce)}}function Ye(N,ue,ae,_e,Be,ct){if(N.onBeforeRender(p,ue,ae,_e,Be,ct),N.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),N.isImmediateRenderObject){const P=zt(ae,ue,Be,N);Le.setMaterial(Be),we.reset(),Mt(N,P)}else p.renderBufferDirect(ae,ue,_e,Be,N,ct);N.onAfterRender(p,ue,ae,_e,Be,ct)}function gt(N,ue,ae){ue.isScene!==!0&&(ue=Se);const _e=pe.get(N),Be=f.state.lights,ct=f.state.shadowsArray,P=Be.state.version,W=z.getParameters(N,Be.state,ct,ue,ae),ie=z.getProgramCacheKey(W);let J=_e.program,ce=!0;if(_e.environment=N.isMeshStandardMaterial?ue.environment:null,_e.fog=ue.fog,_e.envMap=De.get(N.envMap||_e.environment),J===void 0)N.addEventListener("dispose",et);else if(J.cacheKey!==ie)mt(N);else if(_e.lightsStateVersion!==P)ce=!1;else{if(W.shaderID!==void 0)return;ce=!1}ce&&(W.uniforms=z.getUniforms(N),N.onBeforeCompile(W,p),J=z.acquireProgram(W,ie),_e.program=J,_e.uniforms=W.uniforms,_e.outputEncoding=W.outputEncoding);const Ae=_e.uniforms;(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(_e.numClippingPlanes=C.numPlanes,_e.numIntersection=C.numIntersection,Ae.clippingPlanes=C.uniform),_e.needsLights=Rn(N),_e.lightsStateVersion=P,_e.needsLights&&(Ae.ambientLightColor.value=Be.state.ambient,Ae.lightProbe.value=Be.state.probe,Ae.directionalLights.value=Be.state.directional,Ae.directionalLightShadows.value=Be.state.directionalShadow,Ae.spotLights.value=Be.state.spot,Ae.spotLightShadows.value=Be.state.spotShadow,Ae.rectAreaLights.value=Be.state.rectArea,Ae.ltc_1.value=Be.state.rectAreaLTC1,Ae.ltc_2.value=Be.state.rectAreaLTC2,Ae.pointLights.value=Be.state.point,Ae.pointLightShadows.value=Be.state.pointShadow,Ae.hemisphereLights.value=Be.state.hemi,Ae.directionalShadowMap.value=Be.state.directionalShadowMap,Ae.directionalShadowMatrix.value=Be.state.directionalShadowMatrix,Ae.spotShadowMap.value=Be.state.spotShadowMap,Ae.spotShadowMatrix.value=Be.state.spotShadowMatrix,Ae.pointShadowMap.value=Be.state.pointShadowMap,Ae.pointShadowMatrix.value=Be.state.pointShadowMatrix);const Ge=_e.program.getUniforms(),rt=Tr.seqWithValue(Ge.seq,Ae);_e.uniformsList=rt}function zt(N,ue,ae,_e){ue.isScene!==!0&&(ue=Se),ye.resetTextureUnits();const Be=ue.fog,ct=ae.isMeshStandardMaterial?ue.environment:null,P=v===null?p.outputEncoding:v.texture.encoding,W=De.get(ae.envMap||ct),ie=pe.get(ae),J=f.state.lights;if(oe===!0&&(ge===!0||N!==S)){const nt=N===S&&ae.id===M;C.setState(ae,N,nt)}ae.version===ie.__version?(ae.fog&&ie.fog!==Be||ie.environment!==ct||ie.needsLights&&ie.lightsStateVersion!==J.state.version||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==C.numPlanes||ie.numIntersection!==C.numIntersection)||ie.outputEncoding!==P||ie.envMap!==W)&&gt(ae,ue,_e):(gt(ae,ue,_e),ie.__version=ae.version);let ce=!1,Ae=!1,Ge=!1;const rt=ie.program,je=rt.getUniforms(),lt=ie.uniforms;if(Le.useProgram(rt.program)&&(ce=!0,Ae=!0,Ge=!0),ae.id!==M&&(M=ae.id,Ae=!0),ce||S!==N){if(je.setValue(ne,"projectionMatrix",N.projectionMatrix),Pe.logarithmicDepthBuffer&&je.setValue(ne,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),S!==N&&(S=N,Ae=!0,Ge=!0),ae.isShaderMaterial||ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshStandardMaterial||ae.envMap){const nt=je.map.cameraPosition;nt!==void 0&&nt.setValue(ne,he.setFromMatrixPosition(N.matrixWorld))}(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&je.setValue(ne,"isOrthographic",N.isOrthographicCamera===!0),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial||ae.isShadowMaterial||ae.skinning)&&je.setValue(ne,"viewMatrix",N.matrixWorldInverse)}if(ae.skinning){je.setOptional(ne,_e,"bindMatrix"),je.setOptional(ne,_e,"bindMatrixInverse");const nt=_e.skeleton;if(nt){const ut=nt.bones;if(Pe.floatVertexTextures){if(nt.boneTexture===null){let _t=Math.sqrt(ut.length*4);_t=at.ceilPowerOfTwo(_t),_t=Math.max(_t,4);const Vt=new Float32Array(_t*_t*4);Vt.set(nt.boneMatrices);const sn=new No(Vt,_t,_t,qn,Zi);nt.boneMatrices=Vt,nt.boneTexture=sn,nt.boneTextureSize=_t}je.setValue(ne,"boneTexture",nt.boneTexture,ye),je.setValue(ne,"boneTextureSize",nt.boneTextureSize)}else je.setOptional(ne,nt,"boneMatrices")}}return(Ae||ie.receiveShadow!==_e.receiveShadow)&&(ie.receiveShadow=_e.receiveShadow,je.setValue(ne,"receiveShadow",_e.receiveShadow)),Ae&&(je.setValue(ne,"toneMappingExposure",p.toneMappingExposure),ie.needsLights&&Jt(lt,Ge),Be&&ae.fog&&me.refreshFogUniforms(lt,Be),me.refreshMaterialUniforms(lt,ae,F,U),Tr.upload(ne,ie.uniformsList,lt,ye)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Tr.upload(ne,ie.uniformsList,lt,ye),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&je.setValue(ne,"center",_e.center),je.setValue(ne,"modelViewMatrix",_e.modelViewMatrix),je.setValue(ne,"normalMatrix",_e.normalMatrix),je.setValue(ne,"modelMatrix",_e.matrixWorld),rt}function Jt(N,ue){N.ambientLightColor.needsUpdate=ue,N.lightProbe.needsUpdate=ue,N.directionalLights.needsUpdate=ue,N.directionalLightShadows.needsUpdate=ue,N.pointLights.needsUpdate=ue,N.pointLightShadows.needsUpdate=ue,N.spotLights.needsUpdate=ue,N.spotLightShadows.needsUpdate=ue,N.rectAreaLights.needsUpdate=ue,N.hemisphereLights.needsUpdate=ue}function Rn(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.setFramebuffer=function(N){x!==N&&v===null&&ne.bindFramebuffer(36160,N),x=N},this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return v},this.setRenderTarget=function(N,ue=0,ae=0){v=N,_=ue,y=ae,N&&pe.get(N).__webglFramebuffer===void 0&&ye.setupRenderTarget(N);let _e=x,Be=!1,ct=!1;if(N){const P=N.texture;(P.isDataTexture3D||P.isDataTexture2DArray)&&(ct=!0);const W=pe.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(_e=W[ue],Be=!0):N.isWebGLMultisampleRenderTarget?_e=pe.get(N).__webglMultisampledFramebuffer:_e=W,w.copy(N.viewport),E.copy(N.scissor),T=N.scissorTest}else w.copy(G).multiplyScalar(F).floor(),E.copy(Z).multiplyScalar(F).floor(),T=$;if(b!==_e&&(ne.bindFramebuffer(36160,_e),b=_e),Le.viewport(w),Le.scissor(E),Le.setScissorTest(T),Be){const P=pe.get(N.texture);ne.framebufferTexture2D(36160,36064,34069+ue,P.__webglTexture,ae)}else if(ct){const P=pe.get(N.texture),W=ue||0;ne.framebufferTextureLayer(36160,36064,P.__webglTexture,ae||0,W)}},this.readRenderTargetPixels=function(N,ue,ae,_e,Be,ct,P){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let W=pe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&P!==void 0&&(W=W[P]),W){let ie=!1;W!==b&&(ne.bindFramebuffer(36160,W),ie=!0);try{const J=N.texture,ce=J.format,Ae=J.type;if(ce!==qn&&xe.convert(ce)!==ne.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Ae===Za&&(Re.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Re.has("EXT_color_buffer_float"));if(Ae!==Xo&&xe.convert(Ae)!==ne.getParameter(35738)&&!(Ae===Zi&&(Pe.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne.checkFramebufferStatus(36160)===36053?ue>=0&&ue<=N.width-_e&&ae>=0&&ae<=N.height-Be&&ne.readPixels(ue,ae,_e,Be,xe.convert(ce),xe.convert(Ae),ct):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{ie&&ne.bindFramebuffer(36160,b)}}},this.copyFramebufferToTexture=function(N,ue,ae=0){const _e=Math.pow(2,-ae),Be=Math.floor(ue.image.width*_e),ct=Math.floor(ue.image.height*_e),P=xe.convert(ue.format);ye.setTexture2D(ue,0),ne.copyTexImage2D(3553,ae,P,N.x,N.y,Be,ct,0),Le.unbindTexture()},this.copyTextureToTexture=function(N,ue,ae,_e=0){const Be=ue.image.width,ct=ue.image.height,P=xe.convert(ae.format),W=xe.convert(ae.type);ye.setTexture2D(ae,0),ne.pixelStorei(37440,ae.flipY),ne.pixelStorei(37441,ae.premultiplyAlpha),ne.pixelStorei(3317,ae.unpackAlignment),ue.isDataTexture?ne.texSubImage2D(3553,_e,N.x,N.y,Be,ct,P,W,ue.image.data):ue.isCompressedTexture?ne.compressedTexSubImage2D(3553,_e,N.x,N.y,ue.mipmaps[0].width,ue.mipmaps[0].height,P,ue.mipmaps[0].data):ne.texSubImage2D(3553,_e,N.x,N.y,P,W,ue.image),_e===0&&ae.generateMipmaps&&ne.generateMipmap(3553),Le.unbindTexture()},this.copyTextureToTexture3D=function(N,ue,ae,_e,Be=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const{width:ct,height:P,data:W}=ae.image,ie=xe.convert(_e.format),J=xe.convert(_e.type);let ce;if(_e.isDataTexture3D)ye.setTexture3D(_e,0),ce=32879;else if(_e.isDataTexture2DArray)ye.setTexture2DArray(_e,0),ce=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ne.pixelStorei(37440,_e.flipY),ne.pixelStorei(37441,_e.premultiplyAlpha),ne.pixelStorei(3317,_e.unpackAlignment);const Ae=ne.getParameter(3314),Ge=ne.getParameter(32878),rt=ne.getParameter(3316),je=ne.getParameter(3315),lt=ne.getParameter(32877);ne.pixelStorei(3314,ct),ne.pixelStorei(32878,P),ne.pixelStorei(3316,N.min.x),ne.pixelStorei(3315,N.min.y),ne.pixelStorei(32877,N.min.z),ne.texSubImage3D(ce,Be,ue.x,ue.y,ue.z,N.max.x-N.min.x+1,N.max.y-N.min.y+1,N.max.z-N.min.z+1,ie,J,W),ne.pixelStorei(3314,Ae),ne.pixelStorei(32878,Ge),ne.pixelStorei(3316,rt),ne.pixelStorei(3315,je),ne.pixelStorei(32877,lt),Be===0&&_e.generateMipmaps&&ne.generateMipmap(ce),Le.unbindTexture()},this.initTexture=function(N){ye.setTexture2D(N,0),Le.unbindTexture()},this.resetState=function(){Le.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class By extends Et{}By.prototype.isWebGL1Renderer=!0;class zl{constructor(e,t){this.name="",this.color=new Xe(e),this.density=t!==void 0?t:25e-5}clone(){return new zl(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}zl.prototype.isFogExp2=!0;class Ol{constructor(e,t,i){this.name="",this.color=new Xe(e),this.near=t!==void 0?t:1,this.far=i!==void 0?i:1e3}clone(){return new Ol(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}Ol.prototype.isFog=!0;class Qu extends st{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Qu.prototype.isScene=!0;function Dn(n,e){this.array=n,this.stride=e,this.count=n!==void 0?n.length/e:0,this.usage=Fl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=at.generateUUID()}Object.defineProperty(Dn.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});Object.assign(Dn.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(n){return this.usage=n,this},copy:function(n){return this.array=new n.array.constructor(n.array),this.count=n.count,this.stride=n.stride,this.usage=n.usage,this},copyAt:function(n,e,t){n*=this.stride,t*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[n+i]=e.array[t+i];return this},set:function(n,e=0){return this.array.set(n,e),this},clone:function(n){n.arrayBuffers===void 0&&(n.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=at.generateUUID()),n.arrayBuffers[this.array.buffer._uuid]===void 0&&(n.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(n.arrayBuffers[this.array.buffer._uuid]),t=new Dn(e,this.stride);return t.setUsage(this.usage),t},onUpload:function(n){return this.onUploadCallback=n,this},toJSON:function(n){return n.arrayBuffers===void 0&&(n.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=at.generateUUID()),n.arrayBuffers[this.array.buffer._uuid]===void 0&&(n.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const Wr=new I;function Pr(n,e,t,i){this.name="",this.data=n,this.itemSize=e,this.offset=t,this.normalized=i===!0}Object.defineProperties(Pr.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(n){this.data.needsUpdate=n}}});Object.assign(Pr.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(n){for(let e=0,t=this.data.count;e<t;e++)Wr.x=this.getX(e),Wr.y=this.getY(e),Wr.z=this.getZ(e),Wr.applyMatrix4(n),this.setXYZ(e,Wr.x,Wr.y,Wr.z);return this},setX:function(n,e){return this.data.array[n*this.data.stride+this.offset]=e,this},setY:function(n,e){return this.data.array[n*this.data.stride+this.offset+1]=e,this},setZ:function(n,e){return this.data.array[n*this.data.stride+this.offset+2]=e,this},setW:function(n,e){return this.data.array[n*this.data.stride+this.offset+3]=e,this},getX:function(n){return this.data.array[n*this.data.stride+this.offset]},getY:function(n){return this.data.array[n*this.data.stride+this.offset+1]},getZ:function(n){return this.data.array[n*this.data.stride+this.offset+2]},getW:function(n){return this.data.array[n*this.data.stride+this.offset+3]},setXY:function(n,e,t){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this},setXYZ:function(n,e,t,i){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this.data.array[n+2]=i,this},setXYZW:function(n,e,t,i,r){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this.data.array[n+2]=i,this.data.array[n+3]=r,this},clone:function(n){if(n===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const i=t*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ot(new this.array.constructor(e),this.itemSize,this.normalized)}else return n.interleavedBuffers===void 0&&(n.interleavedBuffers={}),n.interleavedBuffers[this.data.uuid]===void 0&&(n.interleavedBuffers[this.data.uuid]=this.data.clone(n)),new Pr(n.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(n){if(n===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const i=t*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return n.interleavedBuffers===void 0&&(n.interleavedBuffers={}),n.interleavedBuffers[this.data.uuid]===void 0&&(n.interleavedBuffers[this.data.uuid]=this.data.toJSON(n)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});class eh extends It{constructor(e){super(),this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}eh.prototype.isSpriteMaterial=!0;let ao;const ma=new I,lo=new I,co=new I,uo=new Ee,ga=new Ee,Uy=new Ke,Fc=new I,_a=new I,Nc=new I,R_=new Ee,Lf=new Ee,P_=new Ee;class th extends st{constructor(e){if(super(),this.type="Sprite",ao===void 0){ao=new Qe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Dn(t,5);ao.setIndex([0,1,2,0,2,3]),ao.setAttribute("position",new Pr(i,3,0,!1)),ao.setAttribute("uv",new Pr(i,2,3,!1))}this.geometry=ao,this.material=e!==void 0?e:new eh,this.center=new Ee(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),lo.setFromMatrixScale(this.matrixWorld),Uy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),co.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&lo.multiplyScalar(-co.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;zc(Fc.set(-.5,-.5,0),co,o,lo,r,s),zc(_a.set(.5,-.5,0),co,o,lo,r,s),zc(Nc.set(.5,.5,0),co,o,lo,r,s),R_.set(0,0),Lf.set(1,0),P_.set(1,1);let a=e.ray.intersectTriangle(Fc,_a,Nc,!1,ma);if(a===null&&(zc(_a.set(-.5,.5,0),co,o,lo,r,s),Lf.set(0,1),a=e.ray.intersectTriangle(Fc,Nc,_a,!1,ma),a===null))return;const c=e.ray.origin.distanceTo(ma);c<e.near||c>e.far||t.push({distance:c,point:ma.clone(),uv:qt.getUV(ma,Fc,_a,Nc,R_,Lf,P_,new Ee),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}th.prototype.isSprite=!0;function zc(n,e,t,i,r,s){uo.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ga.x=s*uo.x-r*uo.y,ga.y=r*uo.x+s*uo.y):ga.copy(uo),n.copy(e),n.x+=ga.x,n.y+=ga.y,n.applyMatrix4(Uy)}const Oc=new I,D_=new I;class op extends st{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,r=t.length;i<r;i++){const s=t[i];this.addLevel(s.object.clone(),s.distance)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,r;for(i=1,r=t.length;i<r&&!(e<t[i].distance);i++);return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){Oc.setFromMatrixPosition(this.matrixWorld);const r=e.ray.origin.distanceTo(Oc);this.getObjectForDistance(r).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Oc.setFromMatrixPosition(e.matrixWorld),D_.setFromMatrixPosition(this.matrixWorld);const i=Oc.distanceTo(D_)/e.zoom;t[0].object.visible=!0;let r,s;for(r=1,s=t.length;r<s&&i>=t[r].distance;r++)t[r-1].object.visible=!1,t[r].object.visible=!0;for(this._currentLevel=r-1;r<s;r++)t[r].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const i=this.levels;for(let r=0,s=i.length;r<s;r++){const o=i[r];t.object.levels.push({object:o.object.uuid,distance:o.distance})}return t}}const I_=new I,F_=new bt,N_=new bt,HD=new I,z_=new Ke;function ol(n,e){At.call(this,n,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke}ol.prototype=Object.assign(Object.create(At.prototype),{constructor:ol,isSkinnedMesh:!0,copy:function(n){return At.prototype.copy.call(this,n),this.bindMode=n.bindMode,this.bindMatrix.copy(n.bindMatrix),this.bindMatrixInverse.copy(n.bindMatrixInverse),this.skeleton=n.skeleton,this},bind:function(n,e){this.skeleton=n,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){const n=new bt,e=this.geometry.attributes.skinWeight;for(let t=0,i=e.count;t<i;t++){n.x=e.getX(t),n.y=e.getY(t),n.z=e.getZ(t),n.w=e.getW(t);const r=1/n.manhattanLength();r!==1/0?n.multiplyScalar(r):n.set(1,0,0,0),e.setXYZW(t,n.x,n.y,n.z,n.w)}},updateMatrixWorld:function(n){At.prototype.updateMatrixWorld.call(this,n),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(n,e){const t=this.skeleton,i=this.geometry;F_.fromBufferAttribute(i.attributes.skinIndex,n),N_.fromBufferAttribute(i.attributes.skinWeight,n),I_.fromBufferAttribute(i.attributes.position,n).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const s=N_.getComponent(r);if(s!==0){const o=F_.getComponent(r);z_.multiplyMatrices(t.bones[o].matrixWorld,t.boneInverses[o]),e.addScaledVector(HD.copy(I_).applyMatrix4(z_),s)}}return e.applyMatrix4(this.bindMatrixInverse)}});function al(){st.call(this),this.type="Bone"}al.prototype=Object.assign(Object.create(st.prototype),{constructor:al,isBone:!0});const O_=new Ke,VD=new Ke;class Bl{constructor(e=[],t=[]){this.uuid=at.generateUUID(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ke;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:VD;O_.multiplyMatrices(a,t[s]),O_.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Bl(this.bones,this.boneInverses)}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new al),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}const B_=new Ke,U_=new Ke,Bc=[],xa=new At;function yu(n,e,t){At.call(this,n,e),this.instanceMatrix=new ot(new Float32Array(t*16),16),this.instanceColor=null,this.count=t,this.frustumCulled=!1}yu.prototype=Object.assign(Object.create(At.prototype),{constructor:yu,isInstancedMesh:!0,copy:function(n){return At.prototype.copy.call(this,n),this.instanceMatrix.copy(n.instanceMatrix),n.instanceColor!==null&&(this.instanceColor=n.instanceColor.clone()),this.count=n.count,this},getColorAt:function(n,e){e.fromArray(this.instanceColor.array,n*3)},getMatrixAt:function(n,e){e.fromArray(this.instanceMatrix.array,n*16)},raycast:function(n,e){const t=this.matrixWorld,i=this.count;if(xa.geometry=this.geometry,xa.material=this.material,xa.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,B_),U_.multiplyMatrices(t,B_),xa.matrixWorld=U_,xa.raycast(n,Bc);for(let s=0,o=Bc.length;s<o;s++){const a=Bc[s];a.instanceId=r,a.object=this,e.push(a)}Bc.length=0}},setColorAt:function(n,e){this.instanceColor===null&&(this.instanceColor=new ot(new Float32Array(this.count*3),3)),e.toArray(this.instanceColor.array,n*3)},setMatrixAt:function(n,e){e.toArray(this.instanceMatrix.array,n*16)},updateMorphTargets:function(){},dispose:function(){this.dispatchEvent({type:"dispose"})}});class hn extends It{constructor(e){super(),this.type="LineBasicMaterial",this.color=new Xe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}}hn.prototype.isLineBasicMaterial=!0;const k_=new I,G_=new I,H_=new Ke,Cf=new Or,Uc=new zr;function mi(n=new Qe,e=new hn){st.call(this),this.type="Line",this.geometry=n,this.material=e,this.updateMorphTargets()}mi.prototype=Object.assign(Object.create(st.prototype),{constructor:mi,isLine:!0,copy:function(n){return st.prototype.copy.call(this,n),this.material=n.material,this.geometry=n.geometry,this},computeLineDistances:function(){const n=this.geometry;if(n.isBufferGeometry)if(n.index===null){const e=n.attributes.position,t=[0];for(let i=1,r=e.count;i<r;i++)k_.fromBufferAttribute(e,i-1),G_.fromBufferAttribute(e,i),t[i]=t[i-1],t[i]+=k_.distanceTo(G_);n.setAttribute("lineDistance",new Ze(t,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else n.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this},raycast:function(n,e){const t=this.geometry,i=this.matrixWorld,r=n.params.Line.threshold;if(t.boundingSphere===null&&t.computeBoundingSphere(),Uc.copy(t.boundingSphere),Uc.applyMatrix4(i),Uc.radius+=r,n.ray.intersectsSphere(Uc)===!1)return;H_.copy(i).invert(),Cf.copy(n.ray).applyMatrix4(H_);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new I,c=new I,l=new I,u=new I,h=this.isLineSegments?2:1;if(t.isBufferGeometry){const f=t.index,g=t.attributes.position;if(f!==null){const p=f.array;for(let m=0,x=p.length-1;m<x;m+=h){const _=p[m],y=p[m+1];if(a.fromBufferAttribute(g,_),c.fromBufferAttribute(g,y),Cf.distanceSqToSegment(a,c,u,l)>o)continue;u.applyMatrix4(this.matrixWorld);const b=n.ray.origin.distanceTo(u);b<n.near||b>n.far||e.push({distance:b,point:l.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else for(let p=0,m=g.count-1;p<m;p+=h){if(a.fromBufferAttribute(g,p),c.fromBufferAttribute(g,p+1),Cf.distanceSqToSegment(a,c,u,l)>o)continue;u.applyMatrix4(this.matrixWorld);const _=n.ray.origin.distanceTo(u);_<n.near||_>n.far||e.push({distance:_,point:l.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}else t.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){const n=this.geometry;if(n.isBufferGeometry){const e=n.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});const V_=new I,W_=new I;function Ln(n,e){mi.call(this,n,e),this.type="LineSegments"}Ln.prototype=Object.assign(Object.create(mi.prototype),{constructor:Ln,isLineSegments:!0,computeLineDistances:function(){const n=this.geometry;if(n.isBufferGeometry)if(n.index===null){const e=n.attributes.position,t=[];for(let i=0,r=e.count;i<r;i+=2)V_.fromBufferAttribute(e,i),W_.fromBufferAttribute(e,i+1),t[i]=i===0?0:t[i-1],t[i+1]=t[i]+V_.distanceTo(W_);n.setAttribute("lineDistance",new Ze(t,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else n.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}});class ap extends mi{constructor(e,t){super(e,t),this.type="LineLoop"}}ap.prototype.isLineLoop=!0;class Cs extends It{constructor(e){super(),this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}}Cs.prototype.isPointsMaterial=!0;const $_=new Ke,Td=new Or,kc=new zr,Gc=new I;function zo(n=new Qe,e=new Cs){st.call(this),this.type="Points",this.geometry=n,this.material=e,this.updateMorphTargets()}zo.prototype=Object.assign(Object.create(st.prototype),{constructor:zo,isPoints:!0,copy:function(n){return st.prototype.copy.call(this,n),this.material=n.material,this.geometry=n.geometry,this},raycast:function(n,e){const t=this.geometry,i=this.matrixWorld,r=n.params.Points.threshold;if(t.boundingSphere===null&&t.computeBoundingSphere(),kc.copy(t.boundingSphere),kc.applyMatrix4(i),kc.radius+=r,n.ray.intersectsSphere(kc)===!1)return;$_.copy(i).invert(),Td.copy(n.ray).applyMatrix4($_);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(t.isBufferGeometry){const a=t.index,l=t.attributes.position;if(a!==null){const u=a.array;for(let h=0,f=u.length;h<f;h++){const d=u[h];Gc.fromBufferAttribute(l,d),q_(Gc,d,o,i,n,e,this)}}else for(let u=0,h=l.count;u<h;u++)Gc.fromBufferAttribute(l,u),q_(Gc,u,o,i,n,e,this)}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){const n=this.geometry;if(n.isBufferGeometry){const e=n.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function q_(n,e,t,i,r,s,o){const a=Td.distanceSqToPoint(n);if(a<t){const c=new I;Td.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class ky extends rn{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.format=a!==void 0?a:Er,this.minFilter=o!==void 0?o:Qt,this.magFilter=s!==void 0?s:Qt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}ky.prototype.isVideoTexture=!0;class lp extends rn{constructor(e,t,i,r,s,o,a,c,l,u,h,f){super(null,o,a,c,l,u,r,s,h,f),this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}lp.prototype.isCompressedTexture=!0;class Gy extends rn{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.needsUpdate=!0}}Gy.prototype.isCanvasTexture=!0;class Hy extends rn{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:us,u!==us&&u!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===us&&(i=Xa),i===void 0&&u===Io&&(i=Eo),super(null,r,s,o,a,c,u,i,l),this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=c!==void 0?c:Kt,this.flipY=!1,this.generateMipmaps=!1}}Hy.prototype.isDepthTexture=!0;class bu extends Qe{constructor(e=1,t=8,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new I,u=new Ee;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=i+h/t*r;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(a,3)),this.setAttribute("uv",new Ze(c,2))}}class Oo extends Qe{constructor(e=1,t=1,i=1,r=8,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const p=[],m=i/2;let x=0;_(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(d,2));function _(){const v=new I,b=new I;let M=0;const S=(t-e)/i;for(let w=0;w<=s;w++){const E=[],T=w/s,D=T*(t-e)+e;for(let U=0;U<=r;U++){const F=U/r,L=F*c+a,B=Math.sin(L),G=Math.cos(L);b.x=D*B,b.y=-T*i+m,b.z=D*G,h.push(b.x,b.y,b.z),v.set(B,S,G).normalize(),f.push(v.x,v.y,v.z),d.push(F,1-T),E.push(g++)}p.push(E)}for(let w=0;w<r;w++)for(let E=0;E<s;E++){const T=p[E][w],D=p[E+1][w],U=p[E+1][w+1],F=p[E][w+1];u.push(T,D,F),u.push(D,U,F),M+=6}l.addGroup(x,M,0),x+=M}function y(v){const b=g,M=new Ee,S=new I;let w=0;const E=v===!0?e:t,T=v===!0?1:-1;for(let U=1;U<=r;U++)h.push(0,m*T,0),f.push(0,T,0),d.push(.5,.5),g++;const D=g;for(let U=0;U<=r;U++){const L=U/r*c+a,B=Math.cos(L),G=Math.sin(L);S.x=E*G,S.y=m*T,S.z=E*B,h.push(S.x,S.y,S.z),f.push(0,T,0),M.x=B*.5+.5,M.y=G*.5*T+.5,d.push(M.x,M.y),g++}for(let U=0;U<r;U++){const F=b+U,L=D+U;v===!0?u.push(L,L+1,F):u.push(L+1,L,F),w+=3}l.addGroup(x,w,v===!0?1:2),x+=w}}}class Mu extends Oo{constructor(e=1,t=1,i=8,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}}class Dr extends Qe{constructor(e,t,i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new Ze(s,3)),this.setAttribute("normal",new Ze(s.slice(),3)),this.setAttribute("uv",new Ze(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new I,v=new I,b=new I;for(let M=0;M<t.length;M+=3)d(t[M+0],y),d(t[M+1],v),d(t[M+2],b),c(y,v,b,_)}function c(_,y,v,b){const M=b+1,S=[];for(let w=0;w<=M;w++){S[w]=[];const E=_.clone().lerp(v,w/M),T=y.clone().lerp(v,w/M),D=M-w;for(let U=0;U<=D;U++)U===0&&w===M?S[w][U]=E:S[w][U]=E.clone().lerp(T,U/D)}for(let w=0;w<M;w++)for(let E=0;E<2*(M-w)-1;E++){const T=Math.floor(E/2);E%2===0?(f(S[w][T+1]),f(S[w+1][T]),f(S[w][T])):(f(S[w][T+1]),f(S[w+1][T+1]),f(S[w+1][T]))}}function l(_){const y=new I;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(_),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function u(){const _=new I;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];const v=m(_)/2/Math.PI+.5,b=x(_)/Math.PI+.5;o.push(v,1-b)}g(),h()}function h(){for(let _=0;_<o.length;_+=6){const y=o[_+0],v=o[_+2],b=o[_+4],M=Math.max(y,v,b),S=Math.min(y,v,b);M>.9&&S<.1&&(y<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function f(_){s.push(_.x,_.y,_.z)}function d(_,y){const v=_*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const _=new I,y=new I,v=new I,b=new I,M=new Ee,S=new Ee,w=new Ee;for(let E=0,T=0;E<s.length;E+=9,T+=6){_.set(s[E+0],s[E+1],s[E+2]),y.set(s[E+3],s[E+4],s[E+5]),v.set(s[E+6],s[E+7],s[E+8]),M.set(o[T+0],o[T+1]),S.set(o[T+2],o[T+3]),w.set(o[T+4],o[T+5]),b.copy(_).add(y).add(v).divideScalar(3);const D=m(b);p(M,T+0,_,D),p(S,T+2,y,D),p(w,T+4,v,D)}}function p(_,y,v,b){b<0&&_.x===1&&(o[y]=_.x-1),v.x===0&&v.z===0&&(o[y]=b/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function x(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}}class wu extends Dr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}}const Hc=new I,Vc=new I,Rf=new I,Wc=new qt;class cp extends Qe{constructor(e,t){if(super(),this.type="EdgesGeometry",this.parameters={thresholdAngle:t},t=t!==void 0?t:1,e.isGeometry===!0){console.error("THREE.EdgesGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return}const r=Math.pow(10,4),s=Math.cos(at.DEG2RAD*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:p,b:m,c:x}=Wc;if(p.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),x.fromBufferAttribute(a,l[2]),Wc.getNormal(Rf),h[0]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let _=0;_<3;_++){const y=(_+1)%3,v=h[_],b=h[y],M=Wc[u[_]],S=Wc[u[y]],w=`${v}_${b}`,E=`${b}_${v}`;E in f&&f[E]?(Rf.dot(f[E].normal)<=s&&(d.push(M.x,M.y,M.z),d.push(S.x,S.y,S.z)),f[E]=null):w in f||(f[w]={index0:l[_],index1:l[y],normal:Rf.clone()})}}for(const g in f)if(f[g]){const{index0:p,index1:m}=f[g];Hc.fromBufferAttribute(a,p),Vc.fromBufferAttribute(a,m),d.push(Hc.x,Hc.y,Hc.z),d.push(Vc.x,Vc.y,Vc.z)}this.setAttribute("position",new Ze(d,3))}}const WD={triangulate:function(n,e,t){t=t||2;const i=e&&e.length,r=i?e[0]*t:n.length;let s=Vy(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,f,d;if(i&&(s=YD(n,e,s,t)),n.length>80*t){a=l=n[0],c=u=n[1];for(let g=t;g<r;g+=t)h=n[g],f=n[g+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?1/d:0}return ll(s,o,t,a,c,d),o}};function Vy(n,e,t,i,r){let s,o;if(r===oI(n,e,t,i)>0)for(s=e;s<t;s+=i)o=X_(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=X_(s,n[s],n[s+1],o);return o&&nh(o,o.next)&&(ul(o),o=o.next),o}function Ir(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(nh(t,t.next)||Ut(t.prev,t,t.next)===0)){if(ul(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ll(n,e,t,i,r,s,o){if(!n)return;!o&&s&&eI(n,i,r,s);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,s?qD(n,i,r,s):$D(n)){e.push(c.i/t),e.push(n.i/t),e.push(l.i/t),ul(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=XD(Ir(n),e,t),ll(n,e,t,i,r,s,2)):o===2&&ZD(n,e,t,i,r,s):ll(Ir(n),e,t,i,r,s,1);break}}}function $D(n){const e=n.prev,t=n,i=n.next;if(Ut(e,t,i)>=0)return!1;let r=n.next.next;for(;r!==n.prev;){if(vo(e.x,e.y,t.x,t.y,i.x,i.y,r.x,r.y)&&Ut(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function qD(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Ut(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=Ad(a,c,e,t,i),f=Ad(l,u,e,t,i);let d=n.prevZ,g=n.nextZ;for(;d&&d.z>=h&&g&&g.z<=f;){if(d!==n.prev&&d!==n.next&&vo(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&Ut(d.prev,d,d.next)>=0||(d=d.prevZ,g!==n.prev&&g!==n.next&&vo(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Ut(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;d&&d.z>=h;){if(d!==n.prev&&d!==n.next&&vo(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&Ut(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;g&&g.z<=f;){if(g!==n.prev&&g!==n.next&&vo(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Ut(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function XD(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!nh(r,s)&&Wy(r,i,i.next,s)&&cl(r,s)&&cl(s,r)&&(e.push(r.i/t),e.push(i.i/t),e.push(s.i/t),ul(i),ul(i.next),i=n=s),i=i.next}while(i!==n);return Ir(i)}function ZD(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&iI(o,a)){let c=$y(o,a);o=Ir(o,o.next),c=Ir(c,c.next),ll(o,e,t,i,r,s),ll(c,e,t,i,r,s);return}a=a.next}o=o.next}while(o!==n)}function YD(n,e,t,i){const r=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=Vy(n,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(nI(l));for(r.sort(jD),s=0;s<r.length;s++)JD(r[s],t),t=Ir(t,t.next);return t}function jD(n,e){return n.x-e.x}function JD(n,e){if(e=KD(n,e),e){const t=$y(e,n);Ir(e,e.next),Ir(t,t.next)}}function KD(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s){if(s=f,f===i){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(i===s)return o;const a=o,c=o.x,l=o.y;let u=1/0,h;t=o;do i>=t.x&&t.x>=c&&i!==t.x&&vo(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)&&(h=Math.abs(r-t.y)/(i-t.x),cl(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&QD(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function QD(n,e){return Ut(n.prev,n,e.prev)<0&&Ut(e.next,n,n.next)<0}function eI(n,e,t,i){let r=n;do r.z===null&&(r.z=Ad(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,tI(r)}function tI(n){let e,t,i,r,s,o,a,c,l=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,l*=2}while(o>1);return n}function Ad(n,e,t,i,r){return n=32767*(n-t)*r,e=32767*(e-i)*r,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function nI(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function vo(n,e,t,i,r,s,o,a){return(r-o)*(e-a)-(n-o)*(s-a)>=0&&(n-o)*(i-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(i-a)>=0}function iI(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!rI(n,e)&&(cl(n,e)&&cl(e,n)&&sI(n,e)&&(Ut(n.prev,n,e.prev)||Ut(n,e.prev,e))||nh(n,e)&&Ut(n.prev,n,n.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function nh(n,e){return n.x===e.x&&n.y===e.y}function Wy(n,e,t,i){const r=qc(Ut(n,e,t)),s=qc(Ut(n,e,i)),o=qc(Ut(t,i,n)),a=qc(Ut(t,i,e));return!!(r!==s&&o!==a||r===0&&$c(n,t,e)||s===0&&$c(n,i,e)||o===0&&$c(t,n,i)||a===0&&$c(t,e,i))}function $c(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function qc(n){return n>0?1:n<0?-1:0}function rI(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Wy(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function cl(n,e){return Ut(n.prev,n,n.next)<0?Ut(n,e,n.next)>=0&&Ut(n,n.prev,e)>=0:Ut(n,e,n.prev)<0||Ut(n,n.next,e)<0}function sI(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function $y(n,e){const t=new Ld(n.i,n.x,n.y),i=new Ld(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function X_(n,e,t,i){const r=new Ld(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ul(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ld(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function oI(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}const Ki={area:function(n){const e=n.length;let t=0;for(let i=e-1,r=0;r<e;i=r++)t+=n[i].x*n[r].y-n[r].x*n[i].y;return t*.5},isClockWise:function(n){return Ki.area(n)<0},triangulateShape:function(n,e){const t=[],i=[],r=[];Z_(n),Y_(t,n);let s=n.length;e.forEach(Z_);for(let a=0;a<e.length;a++)i.push(s),s+=e[a].length,Y_(t,e[a]);const o=WD.triangulate(t,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function Z_(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Y_(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Qi extends Qe{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Ze(r,3)),this.setAttribute("uv",new Ze(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:100,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:6,g=t.bevelSize!==void 0?t.bevelSize:d-2,p=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:aI;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let y,v=!1,b,M,S,w;x&&(y=x.getSpacedPoints(u),v=!0,f=!1,b=x.computeFrenetFrames(u,!1),M=new I,S=new I,w=new I),f||(m=0,d=0,g=0,p=0);const E=a.extractPoints(l);let T=E.shape;const D=E.holes;if(!Ki.isClockWise(T)){T=T.reverse();for(let pe=0,ye=D.length;pe<ye;pe++){const De=D[pe];Ki.isClockWise(De)&&(D[pe]=De.reverse())}}const F=Ki.triangulateShape(T,D),L=T;for(let pe=0,ye=D.length;pe<ye;pe++){const De=D[pe];T=T.concat(De)}function B(pe,ye,De){return ye||console.error("THREE.ExtrudeGeometry: vec does not exist"),ye.clone().multiplyScalar(De).add(pe)}const G=T.length,Z=F.length;function $(pe,ye,De){let Ve,Oe,k;const z=pe.x-ye.x,me=pe.y-ye.y,Me=De.x-pe.x,V=De.y-pe.y,C=z*z+me*me,A=z*V-me*Me;if(Math.abs(A)>Number.EPSILON){const Y=Math.sqrt(C),ee=Math.sqrt(Me*Me+V*V),fe=ye.x-me/Y,xe=ye.y+z/Y,we=De.x-V/ee,ve=De.y+Me/ee,re=((we-fe)*V-(ve-xe)*Me)/(z*V-me*Me);Ve=fe+z*re-pe.x,Oe=xe+me*re-pe.y;const We=Ve*Ve+Oe*Oe;if(We<=2)return new Ee(Ve,Oe);k=Math.sqrt(We/2)}else{let Y=!1;z>Number.EPSILON?Me>Number.EPSILON&&(Y=!0):z<-Number.EPSILON?Me<-Number.EPSILON&&(Y=!0):Math.sign(me)===Math.sign(V)&&(Y=!0),Y?(Ve=-me,Oe=z,k=Math.sqrt(C)):(Ve=z,Oe=me,k=Math.sqrt(C/2))}return new Ee(Ve/k,Oe/k)}const se=[];for(let pe=0,ye=L.length,De=ye-1,Ve=pe+1;pe<ye;pe++,De++,Ve++)De===ye&&(De=0),Ve===ye&&(Ve=0),se[pe]=$(L[pe],L[De],L[Ve]);const oe=[];let ge,Q=se.concat();for(let pe=0,ye=D.length;pe<ye;pe++){const De=D[pe];ge=[];for(let Ve=0,Oe=De.length,k=Oe-1,z=Ve+1;Ve<Oe;Ve++,k++,z++)k===Oe&&(k=0),z===Oe&&(z=0),ge[Ve]=$(De[Ve],De[k],De[z]);oe.push(ge),Q=Q.concat(ge)}for(let pe=0;pe<m;pe++){const ye=pe/m,De=d*Math.cos(ye*Math.PI/2),Ve=g*Math.sin(ye*Math.PI/2)+p;for(let Oe=0,k=L.length;Oe<k;Oe++){const z=B(L[Oe],se[Oe],Ve);Ne(z.x,z.y,-De)}for(let Oe=0,k=D.length;Oe<k;Oe++){const z=D[Oe];ge=oe[Oe];for(let me=0,Me=z.length;me<Me;me++){const V=B(z[me],ge[me],Ve);Ne(V.x,V.y,-De)}}}const he=g+p;for(let pe=0;pe<G;pe++){const ye=f?B(T[pe],Q[pe],he):T[pe];v?(S.copy(b.normals[0]).multiplyScalar(ye.x),M.copy(b.binormals[0]).multiplyScalar(ye.y),w.copy(y[0]).add(S).add(M),Ne(w.x,w.y,w.z)):Ne(ye.x,ye.y,0)}for(let pe=1;pe<=u;pe++)for(let ye=0;ye<G;ye++){const De=f?B(T[ye],Q[ye],he):T[ye];v?(S.copy(b.normals[pe]).multiplyScalar(De.x),M.copy(b.binormals[pe]).multiplyScalar(De.y),w.copy(y[pe]).add(S).add(M),Ne(w.x,w.y,w.z)):Ne(De.x,De.y,h/u*pe)}for(let pe=m-1;pe>=0;pe--){const ye=pe/m,De=d*Math.cos(ye*Math.PI/2),Ve=g*Math.sin(ye*Math.PI/2)+p;for(let Oe=0,k=L.length;Oe<k;Oe++){const z=B(L[Oe],se[Oe],Ve);Ne(z.x,z.y,h+De)}for(let Oe=0,k=D.length;Oe<k;Oe++){const z=D[Oe];ge=oe[Oe];for(let me=0,Me=z.length;me<Me;me++){const V=B(z[me],ge[me],Ve);v?Ne(V.x,V.y+y[u-1].y,y[u-1].x+De):Ne(V.x,V.y,h+De)}}}Se(),K();function Se(){const pe=r.length/3;if(f){let ye=0,De=G*ye;for(let Ve=0;Ve<Z;Ve++){const Oe=F[Ve];Re(Oe[2]+De,Oe[1]+De,Oe[0]+De)}ye=u+m*2,De=G*ye;for(let Ve=0;Ve<Z;Ve++){const Oe=F[Ve];Re(Oe[0]+De,Oe[1]+De,Oe[2]+De)}}else{for(let ye=0;ye<Z;ye++){const De=F[ye];Re(De[2],De[1],De[0])}for(let ye=0;ye<Z;ye++){const De=F[ye];Re(De[0]+G*u,De[1]+G*u,De[2]+G*u)}}i.addGroup(pe,r.length/3-pe,0)}function K(){const pe=r.length/3;let ye=0;ne(L,ye),ye+=L.length;for(let De=0,Ve=D.length;De<Ve;De++){const Oe=D[De];ne(Oe,ye),ye+=Oe.length}i.addGroup(pe,r.length/3-pe,1)}function ne(pe,ye){let De=pe.length;for(;--De>=0;){const Ve=De;let Oe=De-1;Oe<0&&(Oe=pe.length-1);for(let k=0,z=u+m*2;k<z;k++){const me=G*k,Me=G*(k+1),V=ye+Ve+me,C=ye+Oe+me,A=ye+Oe+Me,Y=ye+Ve+Me;Pe(V,C,A,Y)}}}function Ne(pe,ye,De){c.push(pe),c.push(ye),c.push(De)}function Re(pe,ye,De){Le(pe),Le(ye),Le(De);const Ve=r.length/3,Oe=_.generateTopUV(i,r,Ve-3,Ve-2,Ve-1);$e(Oe[0]),$e(Oe[1]),$e(Oe[2])}function Pe(pe,ye,De,Ve){Le(pe),Le(ye),Le(Ve),Le(ye),Le(De),Le(Ve);const Oe=r.length/3,k=_.generateSideWallUV(i,r,Oe-6,Oe-3,Oe-2,Oe-1);$e(k[0]),$e(k[1]),$e(k[3]),$e(k[1]),$e(k[2]),$e(k[3])}function Le(pe){r.push(c[pe*3+0]),r.push(c[pe*3+1]),r.push(c[pe*3+2])}function $e(pe){s.push(pe.x),s.push(pe.y)}}}toJSON(){const e=Qe.prototype.toJSON.call(this),t=this.parameters.shapes,i=this.parameters.options;return lI(t,i,e)}}const aI={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new Ee(s,o),new Ee(a,c),new Ee(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],d=e[r*3+1],g=e[r*3+2],p=e[s*3],m=e[s*3+1],x=e[s*3+2];return Math.abs(a-u)<.01?[new Ee(o,1-c),new Ee(l,1-h),new Ee(f,1-g),new Ee(p,1-x)]:[new Ee(a,1-c),new Ee(u,1-h),new Ee(d,1-g),new Ee(m,1-x)]}};function lI(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Su extends Dr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}}class Eu extends Qe{constructor(e,t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=at.clamp(r,0,Math.PI*2);const s=[],o=[],a=[],c=1/t,l=new I,u=new Ee;for(let h=0;h<=t;h++){const f=i+h*c*r,d=Math.sin(f),g=Math.cos(f);for(let p=0;p<=e.length-1;p++)l.x=e[p].x*d,l.y=e[p].y,l.z=e[p].x*g,o.push(l.x,l.y,l.z),u.x=h/t,u.y=p/(e.length-1),a.push(u.x,u.y)}for(let h=0;h<t;h++)for(let f=0;f<e.length-1;f++){const d=f+h*e.length,g=d,p=d+e.length,m=d+e.length+1,x=d+1;s.push(g,p,x),s.push(p,m,x)}if(this.setIndex(s),this.setAttribute("position",new Ze(o,3)),this.setAttribute("uv",new Ze(a,2)),this.computeVertexNormals(),r===Math.PI*2){const h=this.attributes.normal.array,f=new I,d=new I,g=new I,p=t*e.length*3;for(let m=0,x=0;m<e.length;m++,x+=3)f.x=h[x+0],f.y=h[x+1],f.z=h[x+2],d.x=h[p+x+0],d.y=h[p+x+1],d.z=h[p+x+2],g.addVectors(f,d).normalize(),h[x+0]=h[p+x+0]=g.x,h[x+1]=h[p+x+1]=g.y,h[x+2]=h[p+x+2]=g.z}}}class hl extends Dr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}}function Ms(n,e,t){Qe.call(this),this.type="ParametricGeometry",this.parameters={func:n,slices:e,stacks:t};const i=[],r=[],s=[],o=[],a=1e-5,c=new I,l=new I,u=new I,h=new I,f=new I;n.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const d=e+1;for(let g=0;g<=t;g++){const p=g/t;for(let m=0;m<=e;m++){const x=m/e;n(x,p,l),r.push(l.x,l.y,l.z),x-a>=0?(n(x-a,p,u),h.subVectors(l,u)):(n(x+a,p,u),h.subVectors(u,l)),p-a>=0?(n(x,p-a,u),f.subVectors(l,u)):(n(x,p+a,u),f.subVectors(u,l)),c.crossVectors(h,f).normalize(),s.push(c.x,c.y,c.z),o.push(x,p)}}for(let g=0;g<t;g++)for(let p=0;p<e;p++){const m=g*d+p,x=g*d+p+1,_=(g+1)*d+p+1,y=(g+1)*d+p;i.push(m,x,y),i.push(x,_,y)}this.setIndex(i),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(s,3)),this.setAttribute("uv",new Ze(o,2))}Ms.prototype=Object.create(Qe.prototype);Ms.prototype.constructor=Ms;class Tu extends Qe{constructor(e=.5,t=1,i=8,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let h=e;const f=(t-e)/r,d=new I,g=new Ee;for(let p=0;p<=r;p++){for(let m=0;m<=i;m++){const x=s+m/i*o;d.x=h*Math.cos(x),d.y=h*Math.sin(x),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let p=0;p<r;p++){const m=p*(i+1);for(let x=0;x<i;x++){const _=x+m,y=_,v=_+i+1,b=_+i+2,M=_+1;a.push(y,v,M),a.push(v,b,M)}}this.setIndex(a),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(u,2))}}class fl extends Qe{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(s,3)),this.setAttribute("uv",new Ze(o,2));function l(u){const h=r.length/3,f=u.extractPoints(t);let d=f.shape;const g=f.holes;Ki.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,x=g.length;m<x;m++){const _=g[m];Ki.isClockWise(_)===!0&&(g[m]=_.reverse())}const p=Ki.triangulateShape(d,g);for(let m=0,x=g.length;m<x;m++){const _=g[m];d=d.concat(_)}for(let m=0,x=d.length;m<x;m++){const _=d[m];r.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let m=0,x=p.length;m<x;m++){const _=p[m],y=_[0]+h,v=_[1]+h,b=_[2]+h;i.push(y,v,b),c+=3}}}toJSON(){const e=Qe.prototype.toJSON.call(this),t=this.parameters.shapes;return cI(t,e)}}function cI(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class dl extends Qe{constructor(e=1,t=8,i=6,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new I,f=new I,d=[],g=[],p=[],m=[];for(let x=0;x<=i;x++){const _=[],y=x/i;let v=0;x==0&&o==0?v=.5/t:x==i&&c==Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const M=b/t;h.x=-e*Math.cos(r+M*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(r+M*s)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),p.push(f.x,f.y,f.z),m.push(M+v,1-y),_.push(l++)}u.push(_)}for(let x=0;x<i;x++)for(let _=0;_<t;_++){const y=u[x][_+1],v=u[x][_],b=u[x+1][_],M=u[x+1][_+1];(x!==0||o>0)&&d.push(y,v,M),(x!==i-1||c<Math.PI)&&d.push(v,b,M)}this.setIndex(d),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(p,3)),this.setAttribute("uv",new Ze(m,2))}}class Au extends Dr{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}}class Lu extends Qi{constructor(e,t={}){const i=t.font;if(!(i&&i.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new Qe;const r=i.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t),this.type="TextGeometry"}}class Cu extends Qe{constructor(e=1,t=.4,i=8,r=6,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new I,h=new I,f=new I;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){const p=g/r*s,m=d/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(p),h.y=(e+t*Math.cos(m))*Math.sin(p),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(p),u.y=e*Math.sin(p),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){const p=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,x=(r+1)*(d-1)+g,_=(r+1)*d+g;o.push(p,m,_),o.push(m,x,_)}this.setIndex(o),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(l,2))}}class Ru extends Qe{constructor(e=1,t=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const a=[],c=[],l=[],u=[],h=new I,f=new I,d=new I,g=new I,p=new I,m=new I,x=new I;for(let y=0;y<=i;++y){const v=y/i*s*Math.PI*2;_(v,s,o,e,d),_(v+.01,s,o,e,g),m.subVectors(g,d),x.addVectors(g,d),p.crossVectors(m,x),x.crossVectors(p,m),p.normalize(),x.normalize();for(let b=0;b<=r;++b){const M=b/r*Math.PI*2,S=-t*Math.cos(M),w=t*Math.sin(M);h.x=d.x+(S*x.x+w*p.x),h.y=d.y+(S*x.y+w*p.y),h.z=d.z+(S*x.z+w*p.z),c.push(h.x,h.y,h.z),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),u.push(y/i),u.push(b/r)}}for(let y=1;y<=i;y++)for(let v=1;v<=r;v++){const b=(r+1)*(y-1)+(v-1),M=(r+1)*y+(v-1),S=(r+1)*y+v,w=(r+1)*(y-1)+v;a.push(b,M,w),a.push(M,S,w)}this.setIndex(a),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(u,2));function _(y,v,b,M,S){const w=Math.cos(y),E=Math.sin(y),T=b/v*y,D=Math.cos(T);S.x=M*(2+D)*.5*w,S.y=M*(2+D)*E*.5,S.z=M*Math.sin(T)*.5}}}class Pu extends Qe{constructor(e,t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,c=new I,l=new Ee;let u=new I;const h=[],f=[],d=[],g=[];p(),this.setIndex(g),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(d,2));function p(){for(let y=0;y<t;y++)m(y);m(s===!1?t:0),_(),x()}function m(y){u=e.getPointAt(y/t,u);const v=o.normals[y],b=o.binormals[y];for(let M=0;M<=r;M++){const S=M/r*Math.PI*2,w=Math.sin(S),E=-Math.cos(S);c.x=E*v.x+w*b.x,c.y=E*v.y+w*b.y,c.z=E*v.z+w*b.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,h.push(a.x,a.y,a.z)}}function x(){for(let y=1;y<=t;y++)for(let v=1;v<=r;v++){const b=(r+1)*(y-1)+(v-1),M=(r+1)*y+(v-1),S=(r+1)*y+v,w=(r+1)*(y-1)+v;g.push(b,M,w),g.push(M,S,w)}}function _(){for(let y=0;y<=t;y++)for(let v=0;v<=r;v++)l.x=y/t,l.y=v/r,d.push(l.x,l.y)}}toJSON(){const e=Qe.prototype.toJSON.call(this);return e.path=this.parameters.path.toJSON(),e}}class up extends Qe{constructor(e){if(super(),this.type="WireframeGeometry",e.isGeometry===!0){console.error("THREE.WireframeGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return}const t=[],i=[0,0],r={},s=new I;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],f=h.start,d=h.count;for(let g=f,p=f+d;g<p;g+=3)for(let m=0;m<3;m++){const x=a.getX(g+m),_=a.getX(g+(m+1)%3);i[0]=Math.min(x,_),i[1]=Math.max(x,_);const y=i[0]+","+i[1];r[y]===void 0&&(r[y]={index1:i[0],index2:i[1]})}}for(const l in r){const u=r[l];s.fromBufferAttribute(o,u.index1),t.push(s.x,s.y,s.z),s.fromBufferAttribute(o,u.index2),t.push(s.x,s.y,s.z)}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l;s.fromBufferAttribute(o,u),t.push(s.x,s.y,s.z);const h=3*a+(l+1)%3;s.fromBufferAttribute(o,h),t.push(s.x,s.y,s.z)}}this.setAttribute("position",new Ze(t,3))}}var wn=Object.freeze({__proto__:null,BoxGeometry:bs,BoxBufferGeometry:bs,CircleGeometry:bu,CircleBufferGeometry:bu,ConeGeometry:Mu,ConeBufferGeometry:Mu,CylinderGeometry:Oo,CylinderBufferGeometry:Oo,DodecahedronGeometry:wu,DodecahedronBufferGeometry:wu,EdgesGeometry:cp,ExtrudeGeometry:Qi,ExtrudeBufferGeometry:Qi,IcosahedronGeometry:Su,IcosahedronBufferGeometry:Su,LatheGeometry:Eu,LatheBufferGeometry:Eu,OctahedronGeometry:hl,OctahedronBufferGeometry:hl,ParametricGeometry:Ms,ParametricBufferGeometry:Ms,PlaneGeometry:sl,PlaneBufferGeometry:sl,PolyhedronGeometry:Dr,PolyhedronBufferGeometry:Dr,RingGeometry:Tu,RingBufferGeometry:Tu,ShapeGeometry:fl,ShapeBufferGeometry:fl,SphereGeometry:dl,SphereBufferGeometry:dl,TetrahedronGeometry:Au,TetrahedronBufferGeometry:Au,TextGeometry:Lu,TextBufferGeometry:Lu,TorusGeometry:Cu,TorusBufferGeometry:Cu,TorusKnotGeometry:Ru,TorusKnotBufferGeometry:Ru,TubeGeometry:Pu,TubeBufferGeometry:Pu,WireframeGeometry:up});class hp extends It{constructor(e){super(),this.type="ShadowMaterial",this.color=new Xe(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}hp.prototype.isShadowMaterial=!0;class jo extends Fn{constructor(e){super(e),this.type="RawShaderMaterial"}}jo.prototype.isRawShaderMaterial=!0;function Di(n){It.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ts,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(n)}Di.prototype=Object.create(It.prototype);Di.prototype.constructor=Di;Di.prototype.isMeshStandardMaterial=!0;Di.prototype.copy=function(n){return It.prototype.copy.call(this,n),this.defines={STANDARD:""},this.color.copy(n.color),this.roughness=n.roughness,this.metalness=n.metalness,this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.roughnessMap=n.roughnessMap,this.metalnessMap=n.metalnessMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapIntensity=n.envMapIntensity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.morphNormals=n.morphNormals,this.flatShading=n.flatShading,this.vertexTangents=n.vertexTangents,this};function Fr(n){Di.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=at.clamp(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(n)}Fr.prototype=Object.create(Di.prototype);Fr.prototype.constructor=Fr;Fr.prototype.isMeshPhysicalMaterial=!0;Fr.prototype.copy=function(n){return Di.prototype.copy.call(this,n),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=n.clearcoat,this.clearcoatMap=n.clearcoatMap,this.clearcoatRoughness=n.clearcoatRoughness,this.clearcoatRoughnessMap=n.clearcoatRoughnessMap,this.clearcoatNormalMap=n.clearcoatNormalMap,this.clearcoatNormalScale.copy(n.clearcoatNormalScale),this.reflectivity=n.reflectivity,n.sheen?this.sheen=(this.sheen||new Xe).copy(n.sheen):this.sheen=null,this.transmission=n.transmission,this.transmissionMap=n.transmissionMap,this};class ih extends It{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new Xe(16777215),this.specular=new Xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ts,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}ih.prototype.isMeshPhongMaterial=!0;class fp extends It{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ts,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}fp.prototype.isMeshToonMaterial=!0;class dp extends It{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ts,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}dp.prototype.isMeshNormalMaterial=!0;class pp extends It{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}pp.prototype.isMeshLambertMaterial=!0;class mp extends It{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Xe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ts,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}mp.prototype.isMeshMatcapMaterial=!0;class gp extends hn{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}gp.prototype.isLineDashedMaterial=!0;var uI=Object.freeze({__proto__:null,ShadowMaterial:hp,SpriteMaterial:eh,RawShaderMaterial:jo,ShaderMaterial:Fn,PointsMaterial:Cs,MeshPhysicalMaterial:Fr,MeshStandardMaterial:Di,MeshPhongMaterial:ih,MeshToonMaterial:fp,MeshNormalMaterial:dp,MeshLambertMaterial:pp,MeshDepthMaterial:Ju,MeshDistanceMaterial:Ku,MeshBasicMaterial:tr,MeshMatcapMaterial:mp,LineDashedMaterial:gp,LineBasicMaterial:hn,Material:It});const Dt={arraySlice:function(n,e,t){return Dt.isTypedArray(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)},convertArray:function(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)},isTypedArray:function(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)},getKeyframeOrder:function(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i},sortedArray:function(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=n[a+c]}return r},flattenJSON:function(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)},subclip:function(n,e,t,i,r=30){const s=n.clone();s.name=e;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],u=l.getValueSize(),h=[],f=[];for(let d=0;d<l.times.length;++d){const g=l.times[d]*r;if(!(g<t||g>=i)){h.push(l.times[d]);for(let p=0;p<u;++p)f.push(l.values[d*u+p])}}h.length!==0&&(l.times=Dt.convertArray(h,l.times.constructor),l.values=Dt.convertArray(f,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(n,e=0,t=n,i=30){i<=0&&(i=30);const r=t.tracks.length,s=e/i;for(let o=0;o<r;++o){const a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=n.tracks.find(function(x){return x.name===a.name&&x.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const g=a.times.length-1;let p;if(s<=a.times[0]){const x=u,_=h-u;p=Dt.arraySlice(a.values,x,_)}else if(s>=a.times[g]){const x=g*h+u,_=x+h-u;p=Dt.arraySlice(a.values,x,_)}else{const x=a.createInterpolant(),_=u,y=h-u;x.evaluate(s),p=Dt.arraySlice(x.resultBuffer,_,y)}c==="quaternion"&&new un().fromArray(p).normalize().conjugate().toArray(p);const m=l.times.length;for(let x=0;x<m;++x){const _=x*d+f;if(c==="quaternion")un.multiplyQuaternionsFlat(l.values,_,p,0,l.values,_);else{const y=d-f*2;for(let v=0;v<y;++v)l.values[_+v]-=p[v]}}}return n.blendMode=Qd,n}};function Xn(n,e,t,i){this.parameterPositions=n,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(t),this.sampleValues=e,this.valueSize=t}Object.assign(Xn.prototype,{evaluate:function(n){const e=this.parameterPositions;let t=this._cachedIndex,i=e[t],r=e[t-1];e:{t:{let s;n:{i:if(!(n<i)){for(let o=t+2;;){if(i===void 0){if(n<r)break i;return t=e.length,this._cachedIndex=t,this.afterEnd_(t-1,n,r)}if(t===o)break;if(r=i,i=e[++t],n<i)break t}s=e.length;break n}if(!(n>=r)){const o=e[1];n<o&&(t=2,r=o);for(let a=t-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,n,i);if(t===a)break;if(i=r,r=e[--t-1],n>=r)break t}s=t,t=0;break n}break e}for(;t<s;){const o=t+s>>>1;n<e[o]?s=o:t=o+1}if(i=e[t],r=e[t-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,n,i);if(i===void 0)return t=e.length,this._cachedIndex=t,this.afterEnd_(t-1,r,n)}this._cachedIndex=t,this.intervalChanged_(t,r,i)}return this.interpolate_(t,r,n,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(n){const e=this.resultBuffer,t=this.sampleValues,i=this.valueSize,r=n*i;for(let s=0;s!==i;++s)e[s]=t[r+s];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(Xn.prototype,{beforeStart_:Xn.prototype.copySampleValue_,afterEnd_:Xn.prototype.copySampleValue_});function Du(n,e,t,i){Xn.call(this,n,e,t,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}Du.prototype=Object.assign(Object.create(Xn.prototype),{constructor:Du,DefaultSettings_:{endingStart:ss,endingEnd:ss},intervalChanged_:function(n,e,t){const i=this.parameterPositions;let r=n-2,s=n+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case os:r=n,o=2*e-t;break;case Ja:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=n,o=t}if(a===void 0)switch(this.getSettings_().endingEnd){case os:s=n,a=2*t-e;break;case Ja:s=1,a=t+i[1]-i[0];break;default:s=n-1,a=e}const c=(t-e)*.5,l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(a-t),this._offsetPrev=r*l,this._offsetNext=s*l},interpolate_:function(n,e,t,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=n*o,c=a-o,l=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,d=(t-e)/(i-e),g=d*d,p=g*d,m=-h*p+2*h*g-h*d,x=(1+h)*p+(-1.5-2*h)*g+(-.5+h)*d+1,_=(-1-f)*p+(1.5+f)*g+.5*d,y=f*p-f*g;for(let v=0;v!==o;++v)r[v]=m*s[l+v]+x*s[c+v]+_*s[a+v]+y*s[u+v];return r}});function pl(n,e,t,i){Xn.call(this,n,e,t,i)}pl.prototype=Object.assign(Object.create(Xn.prototype),{constructor:pl,interpolate_:function(n,e,t,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=n*o,c=a-o,l=(t-e)/(i-e),u=1-l;for(let h=0;h!==o;++h)r[h]=s[c+h]*u+s[a+h]*l;return r}});function Iu(n,e,t,i){Xn.call(this,n,e,t,i)}Iu.prototype=Object.assign(Object.create(Xn.prototype),{constructor:Iu,interpolate_:function(n){return this.copySampleValue_(n-1)}});class vi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dt.convertArray(t,this.TimeBufferType),this.values=Dt.convertArray(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Dt.convertArray(e.times,Array),values:Dt.convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Du(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ya:t=this.InterpolantFactoryMethodDiscrete;break;case ja:t=this.InterpolantFactoryMethodLinear;break;case au:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ya;case this.InterpolantFactoryMethodLinear:return ja;case this.InterpolantFactoryMethodSmooth:return au}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Dt.arraySlice(i,s,o),this.values=Dt.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&Dt.isTypedArray(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=Dt.arraySlice(this.times),t=Dt.arraySlice(this.values),i=this.getValueSize(),r=this.getInterpolation()===au,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{const h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const p=t[h+g];if(p!==t[f+g]||p!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=Dt.arraySlice(e,0,o),this.values=Dt.arraySlice(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=Dt.arraySlice(this.times,0),t=Dt.arraySlice(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}vi.prototype.TimeBufferType=Float32Array;vi.prototype.ValueBufferType=Float32Array;vi.prototype.DefaultInterpolation=ja;class Rs extends vi{}Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=Ya;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class _p extends vi{}_p.prototype.ValueTypeName="color";class ml extends vi{}ml.prototype.ValueTypeName="number";function Fu(n,e,t,i){Xn.call(this,n,e,t,i)}Fu.prototype=Object.assign(Object.create(Xn.prototype),{constructor:Fu,interpolate_:function(n,e,t,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(t-e)/(i-e);let c=n*o;for(let l=c+o;c!==l;c+=4)un.slerpFlat(r,0,s,c-o,s,c,a);return r}});class Jo extends vi{InterpolantFactoryMethodLinear(e){return new Fu(this.times,this.values,this.getValueSize(),e)}}Jo.prototype.ValueTypeName="quaternion";Jo.prototype.DefaultInterpolation=ja;Jo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ps extends vi{}Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=Ya;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;class gl extends vi{}gl.prototype.ValueTypeName="vector";class _l{constructor(e,t=-1,i,r=qu){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=at.generateUUID(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(fI(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(vi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=Dt.getKeyframeOrder(c);c=Dt.sortedArray(c,1,u),l=Dt.sortedArray(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new ml(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(l)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,p){if(d.length!==0){const m=[],x=[];Dt.flattenJSON(d,m,x,g),m.length!==0&&p.push(new h(f,m,x))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let p=0;p<f[g].morphTargets.length;p++)d[f[g].morphTargets[p]]=-1;for(const p in d){const m=[],x=[];for(let _=0;_!==f[g].morphTargets.length;++_){const y=f[g];m.push(y.time),x.push(y.morphTarget===p?1:0)}r.push(new ml(".morphTargetInfluence["+p+"]",m,x))}c=d.length*(o||1)}else{const d=".bones["+t[h].name+"]";i(gl,d+".position",f,"pos",r),i(Jo,d+".quaternion",f,"rot",r),i(gl,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function hI(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ml;case"vector":case"vector2":case"vector3":case"vector4":return gl;case"color":return _p;case"quaternion":return Jo;case"bool":case"boolean":return Rs;case"string":return Ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function fI(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=hI(n.type);if(n.times===void 0){const t=[],i=[];Dt.flattenJSON(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ws={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function xp(n,e,t){const i=this;let r=!1,s=0,o=0,a;const c=[];this.onStart=void 0,this.onLoad=n,this.onProgress=e,this.onError=t,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){const u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,h=c.length;u<h;u+=2){const f=c[u],d=c[u+1];if(f.global&&(f.lastIndex=0),f.test(l))return d}return null}}const qy=new xp;function Ht(n){this.manager=n!==void 0?n:qy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Ht.prototype,{load:function(){},loadAsync:function(n,e){const t=this;return new Promise(function(i,r){t.load(n,i,e,r)})},parse:function(){},setCrossOrigin:function(n){return this.crossOrigin=n,this},setWithCredentials:function(n){return this.withCredentials=n,this},setPath:function(n){return this.path=n,this},setResourcePath:function(n){return this.resourcePath=n,this},setRequestHeader:function(n){return this.requestHeader=n,this}});const hi={};function ii(n){Ht.call(this,n)}ii.prototype=Object.assign(Object.create(Ht.prototype),{constructor:ii,load:function(n,e,t,i){n===void 0&&(n=""),this.path!==void 0&&(n=this.path+n),n=this.manager.resolveURL(n);const r=this,s=ws.get(n);if(s!==void 0)return r.manager.itemStart(n),setTimeout(function(){e&&e(s),r.manager.itemEnd(n)},0),s;if(hi[n]!==void 0){hi[n].push({onLoad:e,onProgress:t,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,a=n.match(o);let c;if(a){const l=a[1],u=!!a[2];let h=a[3];h=decodeURIComponent(h),u&&(h=atob(h));try{let f;const d=(this.responseType||"").toLowerCase();switch(d){case"arraybuffer":case"blob":const g=new Uint8Array(h.length);for(let m=0;m<h.length;m++)g[m]=h.charCodeAt(m);d==="blob"?f=new Blob([g.buffer],{type:l}):f=g.buffer;break;case"document":f=new DOMParser().parseFromString(h,l);break;case"json":f=JSON.parse(h);break;default:f=h;break}setTimeout(function(){e&&e(f),r.manager.itemEnd(n)},0)}catch(f){setTimeout(function(){i&&i(f),r.manager.itemError(n),r.manager.itemEnd(n)},0)}}else{hi[n]=[],hi[n].push({onLoad:e,onProgress:t,onError:i}),c=new XMLHttpRequest,c.open("GET",n,!0),c.addEventListener("load",function(l){const u=this.response,h=hi[n];if(delete hi[n],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),ws.add(n,u);for(let f=0,d=h.length;f<d;f++){const g=h[f];g.onLoad&&g.onLoad(u)}r.manager.itemEnd(n)}else{for(let f=0,d=h.length;f<d;f++){const g=h[f];g.onError&&g.onError(l)}r.manager.itemError(n),r.manager.itemEnd(n)}},!1),c.addEventListener("progress",function(l){const u=hi[n];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onProgress&&d.onProgress(l)}},!1),c.addEventListener("error",function(l){const u=hi[n];delete hi[n];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}r.manager.itemError(n),r.manager.itemEnd(n)},!1),c.addEventListener("abort",function(l){const u=hi[n];delete hi[n];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}r.manager.itemError(n),r.manager.itemEnd(n)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(n),c},setResponseType:function(n){return this.responseType=n,this},setMimeType:function(n){return this.mimeType=n,this}});class dI extends Ht{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new ii(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e){const t=[];for(let i=0;i<e.length;i++){const r=_l.parse(e[i]);t.push(r)}return t}}function Cd(n){Ht.call(this,n)}Cd.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Cd,load:function(n,e,t,i){const r=this,s=[],o=new lp,a=new ii(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let c=0;function l(u){a.load(n[u],function(h){const f=r.parse(h,!0);s[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=Qt),o.image=s,o.format=f.format,o.needsUpdate=!0,e&&e(o))},t,i)}if(Array.isArray(n))for(let u=0,h=n.length;u<h;++u)l(u);else a.load(n,function(u){const h=r.parse(u,!0);if(h.isCubemap){const f=h.mipmaps.length/h.mipmapCount;for(let d=0;d<f;d++){s[d]={mipmaps:[]};for(let g=0;g<h.mipmapCount;g++)s[d].mipmaps.push(h.mipmaps[d*h.mipmapCount+g]),s[d].format=h.format,s[d].width=h.width,s[d].height=h.height}o.image=s}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=Qt),o.format=h.format,o.needsUpdate=!0,e&&e(o)},t,i);return o}});class rh extends Ht{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ws.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=document.createElementNS("http://www.w3.org/1999/xhtml","img");function c(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),ws.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Xy extends Ht{constructor(e){super(e)}load(e,t,i,r){const s=new Zo,o=new rh(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(u){s.images[l]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let l=0;l<e.length;++l)c(l);return s}}function Nu(n){Ht.call(this,n)}Nu.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Nu,load:function(n,e,t,i){const r=this,s=new No,o=new ii(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(n,function(a){const c=r.parse(a);c&&(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:En,s.wrapT=c.wrapT!==void 0?c.wrapT:En,s.magFilter=c.magFilter!==void 0?c.magFilter:Qt,s.minFilter=c.minFilter!==void 0?c.minFilter:Qt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(s.encoding=c.encoding),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=qo),c.mipmapCount===1&&(s.minFilter=Qt),s.needsUpdate=!0,e&&e(s,c))},t,i),s}});function zu(n){Ht.call(this,n)}zu.prototype=Object.assign(Object.create(Ht.prototype),{constructor:zu,load:function(n,e,t,i){const r=new rn,s=new rh(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(n,function(o){r.image=o;const a=n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0;r.format=a?Er:qn,r.needsUpdate=!0,e!==void 0&&e(r)},t,i),r}});function Cn(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(Cn.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(n,e){const t=this.getUtoTmapping(n);return this.getPoint(t,e)},getPoints:function(n=5){const e=[];for(let t=0;t<=n;t++)e.push(this.getPoint(t/n));return e},getSpacedPoints:function(n=5){const e=[];for(let t=0;t<=n;t++)e.push(this.getPointAt(t/n));return e},getLength:function(){const n=this.getLengths();return n[n.length-1]},getLengths:function(n){if(n===void 0&&(n=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===n+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let t,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=n;s++)t=this.getPoint(s/n),r+=t.distanceTo(i),e.push(r),i=t;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(n,e){const t=this.getLengths();let i=0;const r=t.length;let s;e?s=e:s=n*t[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=t[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,t[i]===s)return i/(r-1);const l=t[i],h=t[i+1]-l,f=(s-l)/h;return(i+f)/(r-1)},getTangent:function(n,e){let i=n-1e-4,r=n+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),a=e||(s.isVector2?new Ee:new I);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(n,e){const t=this.getUtoTmapping(n);return this.getTangent(t,e)},computeFrenetFrames:function(n,e){const t=new I,i=[],r=[],s=[],o=new I,a=new Ke;for(let f=0;f<=n;f++){const d=f/n;i[f]=this.getTangentAt(d,new I),i[f].normalize()}r[0]=new I,s[0]=new I;let c=Number.MAX_VALUE;const l=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);l<=c&&(c=l,t.set(1,0,0)),u<=c&&(c=u,t.set(0,1,0)),h<=c&&t.set(0,0,1),o.crossVectors(i[0],t).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let f=1;f<=n;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const d=Math.acos(at.clamp(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(a.makeRotationAxis(o,d))}s[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(at.clamp(r[0].dot(r[n]),-1,1));f/=n,i[0].dot(o.crossVectors(r[0],r[n]))>0&&(f=-f);for(let d=1;d<=n;d++)r[d].applyMatrix4(a.makeRotationAxis(i[d],f*d)),s[d].crossVectors(i[d],r[d])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(n){return this.arcLengthDivisions=n.arcLengthDivisions,this},toJSON:function(){const n={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return n.arcLengthDivisions=this.arcLengthDivisions,n.type=this.type,n},fromJSON:function(n){return this.arcLengthDivisions=n.arcLengthDivisions,this}});class Ul extends Cn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const i=t||new Ee,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Ul.prototype.isEllipseCurve=!0;class vp extends Ul{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.type="ArcCurve"}}vp.prototype.isArcCurve=!0;function yp(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Xc=new I,Pf=new yp,Df=new yp,If=new yp;class bp extends Cn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new I){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Xc.subVectors(r[0],r[1]).add(r[0]),l=Xc);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Xc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Xc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);p<1e-4&&(p=1),g<1e-4&&(g=p),m<1e-4&&(m=p),Pf.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,p,m),Df.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,p,m),If.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,p,m)}else this.curveType==="catmullrom"&&(Pf.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Df.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),If.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(Pf.calc(c),Df.calc(c),If.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}bp.prototype.isCatmullRomCurve3=!0;function j_(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function pI(n,e){const t=1-n;return t*t*e}function mI(n,e){return 2*(1-n)*n*e}function gI(n,e){return n*n*e}function Da(n,e,t,i){return pI(n,e)+mI(n,t)+gI(n,i)}function _I(n,e){const t=1-n;return t*t*t*e}function xI(n,e){const t=1-n;return 3*t*t*n*e}function vI(n,e){return 3*(1-n)*n*n*e}function yI(n,e){return n*n*n*e}function Ia(n,e,t,i,r){return _I(n,e)+xI(n,t)+vI(n,i)+yI(n,r)}class sh extends Cn{constructor(e=new Ee,t=new Ee,i=new Ee,r=new Ee){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ee){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ia(e,r.x,s.x,o.x,a.x),Ia(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}sh.prototype.isCubicBezierCurve=!0;class Mp extends Cn{constructor(e=new I,t=new I,i=new I,r=new I){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ia(e,r.x,s.x,o.x,a.x),Ia(e,r.y,s.y,o.y,a.y),Ia(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Mp.prototype.isCubicBezierCurve3=!0;class kl extends Cn{constructor(e=new Ee,t=new Ee){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new Ee;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}kl.prototype.isLineCurve=!0;class Zy extends Cn{constructor(e=new I,t=new I){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oh extends Cn{constructor(e=new Ee,t=new Ee,i=new Ee){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ee){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Da(e,r.x,s.x,o.x),Da(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}oh.prototype.isQuadraticBezierCurve=!0;class wp extends Cn{constructor(e=new I,t=new I,i=new I){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Da(e,r.x,s.x,o.x),Da(e,r.y,s.y,o.y),Da(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}wp.prototype.isQuadraticBezierCurve3=!0;class ah extends Cn{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(j_(a,c.x,l.x,u.x,h.x),j_(a,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Ee().fromArray(r))}return this}}ah.prototype.isSplineCurve=!0;var Rd=Object.freeze({__proto__:null,ArcCurve:vp,CatmullRomCurve3:bp,CubicBezierCurve:sh,CubicBezierCurve3:Mp,EllipseCurve:Ul,LineCurve:kl,LineCurve3:Zy,QuadraticBezierCurve:oh,QuadraticBezierCurve3:wp,SplineCurve:ah});class Yy extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new kl(t,e))}getPoint(e){const t=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=t){const s=i[r]-t,o=this.curves[r],a=o.getLength(),c=a===0?0:1-s/a;return o.getPointAt(c)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Rd[r.type]().fromJSON(r))}return this}}class xl extends Yy{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new kl(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new oh(this.currentPoint.clone(),new Ee(e,t),new Ee(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new sh(this.currentPoint.clone(),new Ee(e,t),new Ee(i,r),new Ee(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new ah(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new Ul(e,t,i,r,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ar extends xl{constructor(e){super(e),this.uuid=at.generateUUID(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new xl().fromJSON(r))}return this}}class gi extends st{constructor(e,t=1){super(),this.type="Light",this.color=new Xe(e),this.intensity=t}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}gi.prototype.isLight=!0;class Sp extends gi{constructor(e,t,i){super(e,i),this.type="HemisphereLight",this.position.copy(st.DefaultUp),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e){return gi.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Sp.prototype.isHemisphereLight=!0;const J_=new Ke,K_=new I,Q_=new I;class Ep{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nl,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;K_.setFromMatrixPosition(e.matrixWorld),t.position.copy(K_),Q_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Q_),t.updateMatrixWorld(),J_.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(J_),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jy extends Ep{constructor(){super(new jt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,i=at.RAD2DEG*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}}jy.prototype.isSpotLightShadow=!0;class Tp extends gi{constructor(e,t,i=0,r=Math.PI/3,s=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(st.DefaultUp),this.updateMatrix(),this.target=new st,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new jy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Tp.prototype.isSpotLight=!0;const e0=new Ke,va=new I,Ff=new I;class Jy extends Ep{constructor(){super(new jt(90,1,.5,500)),this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix;va.setFromMatrixPosition(e.matrixWorld),i.position.copy(va),Ff.copy(i.position),Ff.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ff),i.updateMatrixWorld(),r.makeTranslation(-va.x,-va.y,-va.z),e0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(e0)}}Jy.prototype.isPointLightShadow=!0;class Ap extends gi{constructor(e,t,i=0,r=1){super(e,t),this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Jy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Ap.prototype.isPointLight=!0;class Gl extends Rr{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=st.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Gl.prototype.isOrthographicCamera=!0;class Ky extends Ep{constructor(){super(new Gl(-5,5,5,-5,.5,500))}}Ky.prototype.isDirectionalLightShadow=!0;class Lp extends gi{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(st.DefaultUp),this.updateMatrix(),this.target=new st,this.shadow=new Ky}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Lp.prototype.isDirectionalLight=!0;class Cp extends gi{constructor(e,t){super(e,t),this.type="AmbientLight"}}Cp.prototype.isAmbientLight=!0;class Rp extends gi{constructor(e,t,i=10,r=10){super(e,t),this.type="RectAreaLight",this.width=i,this.height=r}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}Rp.prototype.isRectAreaLight=!0;class Pp{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new I)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*i),t.addScaledVector(o[4],1.092548*(i*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(i*s)),t.addScaledVector(o[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*i),t.addScaledVector(o[4],2*.429043*i*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*i*s),t.addScaledVector(o[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const i=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-r*r)}}Pp.prototype.isSphericalHarmonics3=!0;class Hl extends gi{constructor(e=new Pp,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Hl.prototype.isLightProbe=!0;class Qy extends Ht{constructor(e){super(e),this.textures={}}load(e,t,i,r){const s=this,o=new ii(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e){const t=this.textures;function i(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const r=new uI[e.type];if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=new Xe().setHex(e.sheen)),e.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(e.specular),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.opacity!==void 0&&(r.opacity=e.opacity),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==1&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.skinning!==void 0&&(r.skinning=e.skinning),e.morphTargets!==void 0&&(r.morphTargets=e.morphTargets),e.morphNormals!==void 0&&(r.morphNormals=e.morphNormals),e.dithering!==void 0&&(r.dithering=e.dithering),e.vertexTangents!==void 0&&(r.vertexTangents=e.vertexTangents),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(r.uniforms[s]={},o.type){case"t":r.uniforms[s].value=i(o.value);break;case"c":r.uniforms[s].value=new Xe().setHex(o.value);break;case"v2":r.uniforms[s].value=new Ee().fromArray(o.value);break;case"v3":r.uniforms[s].value=new I().fromArray(o.value);break;case"v4":r.uniforms[s].value=new bt().fromArray(o.value);break;case"m3":r.uniforms[s].value=new en().fromArray(o.value);break;case"m4":r.uniforms[s].value=new Ke().fromArray(o.value);break;default:r.uniforms[s].value=o.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(const s in e.extensions)r.extensions[s]=e.extensions[s];if(e.shading!==void 0&&(r.flatShading=e.shading===1),e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=i(e.map)),e.matcap!==void 0&&(r.matcap=i(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=i(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=i(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=i(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),r.normalScale=new Ee().fromArray(s)}return e.displacementMap!==void 0&&(r.displacementMap=i(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=i(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=i(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=i(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=i(e.specularMap)),e.envMap!==void 0&&(r.envMap=i(e.envMap)),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=i(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=i(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=i(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=i(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=i(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.transmission!==void 0&&(r.transmission=e.transmission),e.transmissionMap!==void 0&&(r.transmissionMap=i(e.transmissionMap)),r}setTextures(e){return this.textures=e,this}}const Dp={decodeText:function(n){if(typeof TextDecoder<"u")return new TextDecoder().decode(n);let e="";for(let t=0,i=n.length;t<i;t++)e+=String.fromCharCode(n[t]);try{return decodeURIComponent(escape(e))}catch{return e}},extractUrlBase:function(n){const e=n.lastIndexOf("/");return e===-1?"./":n.substr(0,e+1)}};function vl(){Qe.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}vl.prototype=Object.assign(Object.create(Qe.prototype),{constructor:vl,isInstancedBufferGeometry:!0,copy:function(n){return Qe.prototype.copy.call(this,n),this.instanceCount=n.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const n=Qe.prototype.toJSON.call(this);return n.instanceCount=this.instanceCount,n.isInstancedBufferGeometry=!0,n}});function Ou(n,e,t,i){typeof t=="number"&&(i=t,t=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),ot.call(this,n,e,t),this.meshPerAttribute=i||1}Ou.prototype=Object.assign(Object.create(ot.prototype),{constructor:Ou,isInstancedBufferAttribute:!0,copy:function(n){return ot.prototype.copy.call(this,n),this.meshPerAttribute=n.meshPerAttribute,this},toJSON:function(){const n=ot.prototype.toJSON.call(this);return n.meshPerAttribute=this.meshPerAttribute,n.isInstancedBufferAttribute=!0,n}});class eb extends Ht{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new ii(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e){const t={},i={};function r(d,g){if(t[g]!==void 0)return t[g];const m=d.interleavedBuffers[g],x=s(d,m.buffer),_=Ea(m.type,x),y=new Dn(_,m.stride);return y.uuid=m.uuid,t[g]=y,y}function s(d,g){if(i[g]!==void 0)return i[g];const m=d.arrayBuffers[g],x=new Uint32Array(m).buffer;return i[g]=x,x}const o=e.isInstancedBufferGeometry?new vl:new Qe,a=e.data.index;if(a!==void 0){const d=Ea(a.type,a.array);o.setIndex(new ot(d,1))}const c=e.data.attributes;for(const d in c){const g=c[d];let p;if(g.isInterleavedBufferAttribute){const m=r(e.data,g.data);p=new Pr(m,g.itemSize,g.offset,g.normalized)}else{const m=Ea(g.type,g.array),x=g.isInstancedBufferAttribute?Ou:ot;p=new x(m,g.itemSize,g.normalized)}g.name!==void 0&&(p.name=g.name),o.setAttribute(d,p)}const l=e.data.morphAttributes;if(l)for(const d in l){const g=l[d],p=[];for(let m=0,x=g.length;m<x;m++){const _=g[m];let y;if(_.isInterleavedBufferAttribute){const v=r(e.data,_.data);y=new Pr(v,_.itemSize,_.offset,_.normalized)}else{const v=Ea(_.type,_.array);y=new ot(v,_.itemSize,_.normalized)}_.name!==void 0&&(y.name=_.name),p.push(y)}o.morphAttributes[d]=p}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let d=0,g=h.length;d!==g;++d){const p=h[d];o.addGroup(p.start,p.count,p.materialIndex)}const f=e.data.boundingSphere;if(f!==void 0){const d=new I;f.center!==void 0&&d.fromArray(f.center),o.boundingSphere=new zr(d,f.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class bI extends Ht{constructor(e){super(e)}load(e,t,i,r){const s=this,o=this.path===""?Dp.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new ii(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(h){r!==void 0&&r(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(l,t)},i,r)}parse(e,t){const i=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,r),o=this.parseImages(e.images,function(){t!==void 0&&t(l)}),a=this.parseTextures(e.textures,o),c=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,c,i),u=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,u),t!==void 0){let h=!1;for(const f in o)if(o[f]instanceof HTMLImageElement){h=!0;break}h===!1&&t(l)}return l}parseShapes(e){const t={};if(e!==void 0)for(let i=0,r=e.length;i<r;i++){const s=new Ar().fromJSON(e[i]);t[s.uuid]=s}return t}parseSkeletons(e,t){const i={},r={};if(t.traverse(function(s){s.isBone&&(r[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=new Bl().fromJSON(e[s],r);i[a.uuid]=a}return i}parseGeometries(e,t){const i={};let r;if(e!==void 0){const s=new eb;for(let o=0,a=e.length;o<a;o++){let c;const l=e[o];switch(l.type){case"PlaneGeometry":case"PlaneBufferGeometry":c=new wn[l.type](l.width,l.height,l.widthSegments,l.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":c=new wn[l.type](l.width,l.height,l.depth,l.widthSegments,l.heightSegments,l.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":c=new wn[l.type](l.radius,l.segments,l.thetaStart,l.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":c=new wn[l.type](l.radiusTop,l.radiusBottom,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":c=new wn[l.type](l.radius,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":c=new wn[l.type](l.radius,l.widthSegments,l.heightSegments,l.phiStart,l.phiLength,l.thetaStart,l.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":c=new wn[l.type](l.radius,l.detail);break;case"RingGeometry":case"RingBufferGeometry":c=new wn[l.type](l.innerRadius,l.outerRadius,l.thetaSegments,l.phiSegments,l.thetaStart,l.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":c=new wn[l.type](l.radius,l.tube,l.radialSegments,l.tubularSegments,l.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":c=new wn[l.type](l.radius,l.tube,l.tubularSegments,l.radialSegments,l.p,l.q);break;case"TubeGeometry":case"TubeBufferGeometry":c=new wn[l.type](new Rd[l.path.type]().fromJSON(l.path),l.tubularSegments,l.radius,l.radialSegments,l.closed);break;case"LatheGeometry":case"LatheBufferGeometry":c=new wn[l.type](l.points,l.segments,l.phiStart,l.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":c=new wn[l.type](l.vertices,l.indices,l.radius,l.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":r=[];for(let h=0,f=l.shapes.length;h<f;h++){const d=t[l.shapes[h]];r.push(d)}c=new wn[l.type](r,l.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":r=[];for(let h=0,f=l.shapes.length;h<f;h++){const d=t[l.shapes[h]];r.push(d)}const u=l.options.extrudePath;u!==void 0&&(l.options.extrudePath=new Rd[u.type]().fromJSON(u)),c=new wn[l.type](r,l.options);break;case"BufferGeometry":case"InstancedBufferGeometry":c=s.parse(l);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+l.type+'"');continue}c.uuid=l.uuid,l.name!==void 0&&(c.name=l.name),c.isBufferGeometry===!0&&l.userData!==void 0&&(c.userData=l.userData),i[l.uuid]=c}}return i}parseMaterials(e,t){const i={},r={};if(e!==void 0){const s=new Qy;s.setTextures(t);for(let o=0,a=e.length;o<a;o++){const c=e[o];if(c.type==="MultiMaterial"){const l=[];for(let u=0;u<c.materials.length;u++){const h=c.materials[u];i[h.uuid]===void 0&&(i[h.uuid]=s.parse(h)),l.push(i[h.uuid])}r[c.uuid]=l}else i[c.uuid]===void 0&&(i[c.uuid]=s.parse(c)),r[c.uuid]=i[c.uuid]}}return r}parseAnimations(e){const t={};if(e!==void 0)for(let i=0;i<e.length;i++){const r=e[i],s=_l.parse(r);t[s.uuid]=s}return t}parseImages(e,t){const i=this,r={};let s;function o(c){return i.manager.itemStart(c),s.load(c,function(){i.manager.itemEnd(c)},void 0,function(){i.manager.itemError(c),i.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:i.resourcePath+l;return o(u)}else return c.data?{data:Ea(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new xp(t);s=new rh(c),s.setCrossOrigin(this.crossOrigin);for(let l=0,u=e.length;l<u;l++){const h=e[l],f=h.url;if(Array.isArray(f)){r[h.uuid]=[];for(let d=0,g=f.length;d<g;d++){const p=f[d],m=a(p);m!==null&&(m instanceof HTMLImageElement?r[h.uuid].push(m):r[h.uuid].push(new No(m.data,m.width,m.height)))}}else{const d=a(h.url);d!==null&&(r[h.uuid]=d)}}}return r}parseTextures(e,t){function i(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const r={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=e[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let c;const l=t[a.image];Array.isArray(l)?(c=new Zo(l),l.length===6&&(c.needsUpdate=!0)):(l&&l.data?c=new No(l.data,l.width,l.height):c=new rn(l),l&&(c.needsUpdate=!0)),c.uuid=a.uuid,a.name!==void 0&&(c.name=a.name),a.mapping!==void 0&&(c.mapping=i(a.mapping,MI)),a.offset!==void 0&&c.offset.fromArray(a.offset),a.repeat!==void 0&&c.repeat.fromArray(a.repeat),a.center!==void 0&&c.center.fromArray(a.center),a.rotation!==void 0&&(c.rotation=a.rotation),a.wrap!==void 0&&(c.wrapS=i(a.wrap[0],t0),c.wrapT=i(a.wrap[1],t0)),a.format!==void 0&&(c.format=a.format),a.type!==void 0&&(c.type=a.type),a.encoding!==void 0&&(c.encoding=a.encoding),a.minFilter!==void 0&&(c.minFilter=i(a.minFilter,n0)),a.magFilter!==void 0&&(c.magFilter=i(a.magFilter,n0)),a.anisotropy!==void 0&&(c.anisotropy=a.anisotropy),a.flipY!==void 0&&(c.flipY=a.flipY),a.premultiplyAlpha!==void 0&&(c.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(c.unpackAlignment=a.unpackAlignment),r[a.uuid]=c}return r}parseObject(e,t,i,r){let s;function o(u){return t[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",u),t[u]}function a(u){if(u!==void 0){if(Array.isArray(u)){const h=[];for(let f=0,d=u.length;f<d;f++){const g=u[f];i[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),h.push(i[g])}return h}return i[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",u),i[u]}}let c,l;switch(e.type){case"Scene":s=new Qu,e.background!==void 0&&Number.isInteger(e.background)&&(s.background=new Xe(e.background)),e.fog!==void 0&&(e.fog.type==="Fog"?s.fog=new Ol(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(s.fog=new zl(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":s=new jt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(s.focus=e.focus),e.zoom!==void 0&&(s.zoom=e.zoom),e.filmGauge!==void 0&&(s.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(s.filmOffset=e.filmOffset),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"OrthographicCamera":s=new Gl(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(s.zoom=e.zoom),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"AmbientLight":s=new Cp(e.color,e.intensity);break;case"DirectionalLight":s=new Lp(e.color,e.intensity);break;case"PointLight":s=new Ap(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":s=new Rp(e.color,e.intensity,e.width,e.height);break;case"SpotLight":s=new Tp(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":s=new Sp(e.color,e.groundColor,e.intensity);break;case"LightProbe":s=new Hl().fromJSON(e);break;case"SkinnedMesh":c=o(e.geometry),l=a(e.material),s=new ol(c,l),e.bindMode!==void 0&&(s.bindMode=e.bindMode),e.bindMatrix!==void 0&&s.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(s.skeleton=e.skeleton);break;case"Mesh":c=o(e.geometry),l=a(e.material),s=new At(c,l);break;case"InstancedMesh":c=o(e.geometry),l=a(e.material);const u=e.count,h=e.instanceMatrix;s=new yu(c,l,u),s.instanceMatrix=new ot(new Float32Array(h.array),16);break;case"LOD":s=new op;break;case"Line":s=new mi(o(e.geometry),a(e.material));break;case"LineLoop":s=new ap(o(e.geometry),a(e.material));break;case"LineSegments":s=new Ln(o(e.geometry),a(e.material));break;case"PointCloud":case"Points":s=new zo(o(e.geometry),a(e.material));break;case"Sprite":s=new th(a(e.material));break;case"Group":s=new as;break;case"Bone":s=new al;break;default:s=new st}if(s.uuid=e.uuid,e.name!==void 0&&(s.name=e.name),e.matrix!==void 0?(s.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=e.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(e.position!==void 0&&s.position.fromArray(e.position),e.rotation!==void 0&&s.rotation.fromArray(e.rotation),e.quaternion!==void 0&&s.quaternion.fromArray(e.quaternion),e.scale!==void 0&&s.scale.fromArray(e.scale)),e.castShadow!==void 0&&(s.castShadow=e.castShadow),e.receiveShadow!==void 0&&(s.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(s.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(s.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(s.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(s.visible=e.visible),e.frustumCulled!==void 0&&(s.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(s.renderOrder=e.renderOrder),e.userData!==void 0&&(s.userData=e.userData),e.layers!==void 0&&(s.layers.mask=e.layers),e.children!==void 0){const u=e.children;for(let h=0;h<u.length;h++)s.add(this.parseObject(u[h],t,i,r))}if(e.animations!==void 0){const u=e.animations;for(let h=0;h<u.length;h++){const f=u[h];s.animations.push(r[f])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(s.autoUpdate=e.autoUpdate);const u=e.levels;for(let h=0;h<u.length;h++){const f=u[h],d=s.getObjectByProperty("uuid",f.object);d!==void 0&&s.addLevel(d,f.distance)}}return s}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const r=t[i.skeleton];r===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(r,i.bindMatrix)}})}setTexturePath(e){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(e)}}const MI={UVMapping:$u,CubeReflectionMapping:Rl,CubeRefractionMapping:Pl,EquirectangularReflectionMapping:mu,EquirectangularRefractionMapping:gu,CubeUVReflectionMapping:$o,CubeUVRefractionMapping:Dl},t0={RepeatWrapping:$a,ClampToEdgeWrapping:En,MirroredRepeatWrapping:qa},n0={NearestFilter:Kt,NearestMipmapNearestFilter:_u,NearestMipmapLinearFilter:xu,LinearFilter:Qt,LinearMipmapNearestFilter:Kd,LinearMipmapLinearFilter:qo};function Pd(n){typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Ht.call(this,n),this.options={premultiplyAlpha:"none"}}Pd.prototype=Object.assign(Object.create(Ht.prototype),{constructor:Pd,isImageBitmapLoader:!0,setOptions:function(e){return this.options=e,this},load:function(n,e,t,i){n===void 0&&(n=""),this.path!==void 0&&(n=this.path+n),n=this.manager.resolveURL(n);const r=this,s=ws.get(n);if(s!==void 0)return r.manager.itemStart(n),setTimeout(function(){e&&e(s),r.manager.itemEnd(n)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(n,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(a){ws.add(n,a),e&&e(a),r.manager.itemEnd(n)}).catch(function(a){i&&i(a),r.manager.itemError(n),r.manager.itemEnd(n)}),r.manager.itemStart(n)}});class tb{constructor(){this.type="ShapePath",this.color=new Xe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new xl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function i(_){const y=[];for(let v=0,b=_.length;v<b;v++){const M=_[v],S=new Ar;S.curves=M.curves,y.push(S)}return y}function r(_,y){const v=y.length;let b=!1;for(let M=v-1,S=0;S<v;M=S++){let w=y[M],E=y[S],T=E.x-w.x,D=E.y-w.y;if(Math.abs(D)>Number.EPSILON){if(D<0&&(w=y[S],T=-T,E=y[M],D=-D),_.y<w.y||_.y>E.y)continue;if(_.y===w.y){if(_.x===w.x)return!0}else{const U=D*(_.x-w.x)-T*(_.y-w.y);if(U===0)return!0;if(U<0)continue;b=!b}}else{if(_.y!==w.y)continue;if(E.x<=_.x&&_.x<=w.x||w.x<=_.x&&_.x<=E.x)return!0}}return b}const s=Ki.isClockWise,o=this.subPaths;if(o.length===0)return[];if(t===!0)return i(o);let a,c,l;const u=[];if(o.length===1)return c=o[0],l=new Ar,l.curves=c.curves,u.push(l),u;let h=!s(o[0].getPoints());h=e?!h:h;const f=[],d=[];let g=[],p=0,m;d[p]=void 0,g[p]=[];for(let _=0,y=o.length;_<y;_++)c=o[_],m=c.getPoints(),a=s(m),a=e?!a:a,a?(!h&&d[p]&&p++,d[p]={s:new Ar,p:m},d[p].s.curves=c.curves,h&&p++,g[p]=[]):g[p].push({h:c,p:m[0]});if(!d[0])return i(o);if(d.length>1){let _=!1;const y=[];for(let v=0,b=d.length;v<b;v++)f[v]=[];for(let v=0,b=d.length;v<b;v++){const M=g[v];for(let S=0;S<M.length;S++){const w=M[S];let E=!0;for(let T=0;T<d.length;T++)r(w.p,d[T].p)&&(v!==T&&y.push({froms:v,tos:T,hole:S}),E?(E=!1,f[T].push(w)):_=!0);E&&f[v].push(w)}}y.length>0&&(_||(g=f))}let x;for(let _=0,y=d.length;_<y;_++){l=d[_].s,u.push(l),x=g[_];for(let v=0,b=x.length;v<b;v++)l.holes.push(x[v].h)}return u}}class Ip{constructor(e){this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=wI(e,t,this.data);for(let s=0,o=r.length;s<o;s++)Array.prototype.push.apply(i,r[s].toShapes());return i}}function wI(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,c=0;for(let l=0;l<i.length;l++){const u=i[l];if(u===`

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

			${Gp()}

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

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function M0(){const n=new Ee(1,1);return new jo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:n},inputEncoding:{value:Li[An]},outputEncoding:{value:Li[An]}},vertexShader:kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Gp()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function w0(){return new jo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Li[An]},outputEncoding:{value:Li[An]}},vertexShader:kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Gp()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function kp(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
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
	`}function Gp(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}